import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ContactCard from "./ContactCard";
import { AuthContext } from "@/app/context/AuthContext";
import { ChatContext } from "@/app/context/ChatContext";

vi.mock("next/image", () => ({
	default: ({ src, alt, width, height }) => (
		<img src={src} alt={alt} width={width} height={height} />
	),
}));

const MOCK_DOCTORS = [
	{ _id: "d1", name: "Dr Anna Kowalska", speciality: "Kardiolog", image: "" },
	{ _id: "d2", name: "Dr Piotr Nowak", speciality: "Stomatolog", image: "" },
	{ _id: "d3", name: "Dr Maria Zielińska", speciality: "Pediatra", image: "" },
	{ _id: "d4", name: "Dr Jan Wiśniewski", speciality: "Kardiolog", image: "" },
	{ _id: "d5", name: "Dr Ewa Kamińska", speciality: "Ortopeda", image: "" },
];

function renderContactCard({
	token = "valid-jwt",
	isDoctor = false,
	chatItems = MOCK_DOCTORS,
	isListLoading = false,
	isOpen = false,
	openChat = vi.fn(),
} = {}) {
	const authValue = {
		user: token ? "Test User" : null,
		token,
		isDoctor,
		handleLogin: vi.fn(),
		handleLogout: vi.fn(),
	};

	const chatValue = {
		isOpen,
		messages: [],
		activeContact: null,
		chatItems,
		isLoading: false,
		isListLoading,
		openChat,
		closeChat: vi.fn(),
		sendMessage: vi.fn(),
	};

	const utils = render(
		<AuthContext.Provider value={authValue}>
			<ChatContext.Provider value={chatValue}>
				<ContactCard />
			</ChatContext.Provider>
		</AuthContext.Provider>,
	);

	return { ...utils, openChat };
}

describe("ContactCard", () => {
	it("shows login prompt and hides doctors list when user is logged out", () => {
		renderContactCard({ token: null });

		expect(
			screen.getByRole("heading", { name: "Skontaktuj się z lekarzem" }),
		).toBeInTheDocument();
		expect(
			screen.getByText(
				"Zaloguj się, aby zobaczyć listę dostępnych lekarzy i móc się z nimi skontaktować.",
			),
		).toBeInTheDocument();
		expect(screen.queryByText("Dr Anna Kowalska")).not.toBeInTheDocument();
		expect(
			screen.queryByRole("button", { name: "Kardiolog" }),
		).not.toBeInTheDocument();
	});

	it("displays loading state while chat items are being fetched", () => {
		renderContactCard({ isListLoading: true, chatItems: [] });

		expect(screen.getByText("Ładowanie...")).toBeInTheDocument();
	});

	it("paginates doctors by 3 per page using arrow buttons", async () => {
		const user = userEvent.setup();
		renderContactCard();

		expect(screen.getByText("Dr Anna Kowalska")).toBeInTheDocument();
		expect(screen.getByText("Dr Piotr Nowak")).toBeInTheDocument();
		expect(screen.getByText("Dr Maria Zielińska")).toBeInTheDocument();
		expect(screen.queryByText("Dr Jan Wiśniewski")).not.toBeInTheDocument();
		expect(screen.queryByText("Dr Ewa Kamińska")).not.toBeInTheDocument();

		const header = screen.getByRole("heading", {
			name: "Skontaktuj się z lekarzem",
		}).parentElement;
		const [prevBtn, nextBtn] = within(header).getAllByRole("button");

		await user.click(nextBtn);
		expect(screen.getByText("Dr Jan Wiśniewski")).toBeInTheDocument();
		expect(screen.getByText("Dr Ewa Kamińska")).toBeInTheDocument();
		expect(screen.queryByText("Dr Anna Kowalska")).not.toBeInTheDocument();

		await user.click(prevBtn);
		expect(screen.getByText("Dr Anna Kowalska")).toBeInTheDocument();
		expect(screen.queryByText("Dr Jan Wiśniewski")).not.toBeInTheDocument();
	});

	it("filters doctors by speciality and resets pagination back to page 1", async () => {
		const user = userEvent.setup();
		renderContactCard();

		const header = screen.getByRole("heading", {
			name: "Skontaktuj się z lekarzem",
		}).parentElement;
		const [, nextBtn] = within(header).getAllByRole("button");

		await user.click(nextBtn);
		expect(screen.queryByText("Dr Anna Kowalska")).not.toBeInTheDocument();

		await user.click(screen.getByRole("button", { name: "Kardiolog" }));

		expect(screen.getByText("Dr Anna Kowalska")).toBeInTheDocument();
		expect(screen.getByText("Dr Jan Wiśniewski")).toBeInTheDocument();
		expect(screen.queryByText("Dr Piotr Nowak")).not.toBeInTheDocument();
		expect(screen.queryByText("Dr Ewa Kamińska")).not.toBeInTheDocument();

		expect(within(header).queryAllByRole("button")).toHaveLength(0);

		await user.selectOptions(screen.getByRole("combobox"), "Ortopeda");
		expect(screen.getByText("Dr Ewa Kamińska")).toBeInTheDocument();
		expect(screen.queryByText("Dr Anna Kowalska")).not.toBeInTheDocument();
	});

	it("supports touch swipe gestures for pagination", () => {
		renderContactCard();

		const contactList = screen.getByText("Dr Anna Kowalska").closest("div")
			.parentElement.parentElement;

		fireEvent.touchStart(contactList, { touches: [{ clientX: 200 }] });
		fireEvent.touchEnd(contactList, { changedTouches: [{ clientX: 100 }] });

		expect(screen.getByText("Dr Jan Wiśniewski")).toBeInTheDocument();
		expect(screen.queryByText("Dr Anna Kowalska")).not.toBeInTheDocument();

		fireEvent.touchStart(contactList, { touches: [{ clientX: 100 }] });
		fireEvent.touchEnd(contactList, { changedTouches: [{ clientX: 200 }] });

		expect(screen.getByText("Dr Anna Kowalska")).toBeInTheDocument();
	});

	it("renders doctor-specific heading and hides speciality buttons when isDoctor is true", () => {
		const patients = [
			{ _id: "p1", name: "Jan Pacjent", speciality: "", image: "" },
		];
		renderContactCard({ isDoctor: true, chatItems: patients });

		expect(
			screen.getByRole("heading", { name: "Skontaktuj się z pacjentem" }),
		).toBeInTheDocument();
		expect(
			screen.queryByRole("button", { name: "Kardiolog" }),
		).not.toBeInTheDocument();
		expect(screen.getByText("Jan Pacjent")).toBeInTheDocument();
	});

	it("calls openChat with selected doctor when clicking Wiadomość button", async () => {
		const user = userEvent.setup();
		const { openChat } = renderContactCard();

		const doctorCard = screen.getByText("Dr Piotr Nowak").closest("div");
		await user.click(
			within(doctorCard).getByRole("button", { name: /Wiadomość/i }),
		);

		expect(openChat).toHaveBeenCalledTimes(1);
		expect(openChat).toHaveBeenCalledWith(MOCK_DOCTORS[1]);
	});
});
