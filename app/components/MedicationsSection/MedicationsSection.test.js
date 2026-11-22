import {
	act,
	fireEvent,
	render,
	screen,
	waitFor,
	within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import MedicationsSection from "./MedicationsSection";

vi.mock("@tanstack/react-virtual", () => ({
	useVirtualizer: ({ count }) => ({
		getTotalSize: () => count * 70,
		getVirtualItems: () =>
			Array.from({ length: count }, (_, index) => ({
				index,
				start: index * 70,
				size: 70,
			})),
	}),
}));

const MOCK_DRUGS = [
	{ _id: "drug-1", productName: "Apap" },
	{ _id: "drug-2", productName: "Ibuprom" },
];

const EMPTY_WEEKLY_PLAN = [
	{ day: "Poniedziałek", medications: [] },
	{ day: "Wtorek", medications: [] },
	{ day: "Środa", medications: [] },
	{ day: "Czwartek", medications: [] },
	{ day: "Piątek", medications: [] },
	{ day: "Sobota", medications: [] },
	{ day: "Niedziela", medications: [] },
];

function createPlanWith(dayName, medications) {
	return EMPTY_WEEKLY_PLAN.map((d) =>
		d.day === dayName ? { ...d, medications } : d,
	);
}

describe("MedicationsSection", () => {
	let fetchSpy;

	beforeEach(() => {
		localStorage.clear();
		window.alert.mockClear();
		vi.spyOn(console, "log").mockImplementation(() => {});

		fetchSpy = vi.spyOn(globalThis, "fetch").mockImplementation(async (url) => {
			const urlStr = String(url);

			if (urlStr.startsWith("/api/drugs")) {
				return {
					ok: true,
					status: 200,
					json: async () => MOCK_DRUGS,
				};
			}

			if (urlStr === "/api/plan") {
				return {
					ok: true,
					status: 200,
					json: async () => ({ weeklyPlan: EMPTY_WEEKLY_PLAN }),
				};
			}

			return { ok: true, status: 200, json: async () => ({}) };
		});
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("renders all 7 days with empty state when user is logged out", () => {
		render(<MedicationsSection />);

		expect(
			screen.getByRole("heading", { name: "Plan przyjmowania leków" }),
		).toBeInTheDocument();

		for (const { day } of EMPTY_WEEKLY_PLAN) {
			expect(screen.getByRole("heading", { name: day })).toBeInTheDocument();
		}

		expect(screen.getAllByText("Brak zaplanowanych leków")).toHaveLength(7);
		expect(fetchSpy).not.toHaveBeenCalledWith("/api/plan", expect.anything());
	});

	it("loads weekly plan from /api/plan for logged-in user and clears it on userNameChange logout", async () => {
		localStorage.setItem("authToken", "valid-jwt");

		const populatedPlan = createPlanWith("Poniedziałek", [
			{
				instanceId: "med-1",
				drugId: "drug-1",
				productName: "Apap",
				time: "09:00",
				dose: "1 szt.",
				taken: false,
			},
		]);

		fetchSpy.mockImplementation(async (url) => {
			if (String(url).startsWith("/api/drugs")) {
				return { ok: true, status: 200, json: async () => MOCK_DRUGS };
			}
			return {
				ok: true,
				status: 200,
				json: async () => ({ weeklyPlan: populatedPlan }),
			};
		});

		render(<MedicationsSection />);

		expect(await screen.findByText("Apap")).toBeInTheDocument();
		expect(screen.getByText("09:00")).toBeInTheDocument();
		expect(screen.getByText("1 szt.")).toBeInTheDocument();
		expect(fetchSpy).toHaveBeenCalledWith("/api/plan", {
			headers: { Authorization: "Bearer valid-jwt" },
		});

		localStorage.removeItem("authToken");
		act(() => {
			window.dispatchEvent(new Event("userNameChange"));
		});

		await waitFor(() => {
			expect(screen.queryByText("Apap")).not.toBeInTheDocument();
		});
		expect(screen.getAllByText("Brak zaplanowanych leków")).toHaveLength(7);
	});

	it("adds medications via modal, sorts them chronologically by time, and persists to /api/plan", async () => {
		const user = userEvent.setup();
		localStorage.setItem("authToken", "valid-jwt");

		render(<MedicationsSection />);

		const addButtons = screen.getAllByTitle("Dodaj lek");

		await user.click(addButtons[0]);
		const ibupromRow = (await screen.findByText("Ibuprom")).closest("div");
		await user.click(within(ibupromRow).getByRole("button", { name: "Dodaj" }));

		fireEvent.change(screen.getByDisplayValue("08:00"), {
			target: { value: "14:00" },
		});
		await user.click(screen.getByRole("button", { name: "Potwierdź" }));

		expect(await screen.findByText("Ibuprom")).toBeInTheDocument();

		await user.click(addButtons[0]);
		const apapRow = (await screen.findByText("Apap")).closest("div");
		await user.click(within(apapRow).getByRole("button", { name: "Dodaj" }));

		fireEvent.change(screen.getByDisplayValue("14:00"), {
			target: { value: "08:00" },
		});
		await user.click(screen.getByRole("button", { name: "Potwierdź" }));

		expect(await screen.findByText("Apap")).toBeInTheDocument();

		const mondayCard = screen
			.getByRole("heading", { name: "Poniedziałek" })
			.closest("div").parentElement;
		const renderedTimes = within(mondayCard)
			.getAllByText(/^\d{2}:\d{2}$/)
			.map((el) => el.textContent);

		expect(renderedTimes).toEqual(["08:00", "14:00"]);

		const postCalls = fetchSpy.mock.calls.filter(
			([url, opts]) => url === "/api/plan" && opts?.method === "POST",
		);
		expect(postCalls).toHaveLength(2);

		const lastSavedBody = JSON.parse(postCalls[1][1].body);
		const mondayMeds = lastSavedBody.plan.find(
			(d) => d.day === "Poniedziałek",
		).medications;
		expect(mondayMeds.map((m) => `${m.time} ${m.productName}`)).toEqual([
			"08:00 Apap",
			"14:00 Ibuprom",
		]);
	});

	it("blocks duplicate medication for the same day and time with an alert", async () => {
		const user = userEvent.setup();
		localStorage.setItem("authToken", "valid-jwt");

		const populatedPlan = createPlanWith("Poniedziałek", [
			{
				instanceId: "med-1",
				drugId: "drug-1",
				productName: "Apap",
				time: "08:00",
				dose: "1 szt.",
				taken: false,
			},
		]);

		fetchSpy.mockImplementation(async (url) => {
			if (String(url).startsWith("/api/drugs")) {
				return { ok: true, status: 200, json: async () => MOCK_DRUGS };
			}
			return {
				ok: true,
				status: 200,
				json: async () => ({ weeklyPlan: populatedPlan }),
			};
		});

		render(<MedicationsSection />);
		expect(await screen.findByText("Apap")).toBeInTheDocument();

		await user.click(screen.getAllByTitle("Dodaj lek")[0]);
		const apapRow = (
			await screen.findByText("Apap", { selector: "p" })
		).closest("div");
		await user.click(within(apapRow).getByRole("button", { name: "Dodaj" }));
		await user.click(screen.getByRole("button", { name: "Potwierdź" }));

		expect(window.alert).toHaveBeenCalledWith(
			"Ten lek już jest zaplanowany na ten dzień i godzinę!",
		);

		const postCalls = fetchSpy.mock.calls.filter(
			([url, opts]) => url === "/api/plan" && opts?.method === "POST",
		);
		expect(postCalls).toHaveLength(0);
	});

	it("toggles medication taken status and saves updated plan", async () => {
		const user = userEvent.setup();
		localStorage.setItem("authToken", "valid-jwt");

		const populatedPlan = createPlanWith("Wtorek", [
			{
				instanceId: "med-42",
				drugId: "drug-1",
				productName: "Apap",
				time: "08:00",
				dose: "1 szt.",
				taken: false,
			},
		]);

		fetchSpy.mockImplementation(async (url) => {
			if (String(url).startsWith("/api/drugs")) {
				return { ok: true, status: 200, json: async () => MOCK_DRUGS };
			}
			return {
				ok: true,
				status: 200,
				json: async () => ({ weeklyPlan: populatedPlan }),
			};
		});

		render(<MedicationsSection />);
		const medLabel = await screen.findByText("Apap");

		await user.click(medLabel);

		const postCalls = fetchSpy.mock.calls.filter(
			([url, opts]) => url === "/api/plan" && opts?.method === "POST",
		);
		expect(postCalls).toHaveLength(1);

		const savedPlan = JSON.parse(postCalls[0][1].body).plan;
		const tuesdayMed = savedPlan.find((d) => d.day === "Wtorek").medications[0];
		expect(tuesdayMed.taken).toBe(true);
	});

	it("deletes medication without triggering toggle (stopPropagation)", async () => {
		const user = userEvent.setup();
		localStorage.setItem("authToken", "valid-jwt");

		const populatedPlan = createPlanWith("Środa", [
			{
				instanceId: "med-99",
				drugId: "drug-2",
				productName: "Ibuprom",
				time: "12:00",
				dose: "2 tabl.",
				taken: false,
			},
		]);

		fetchSpy.mockImplementation(async (url) => {
			if (String(url).startsWith("/api/drugs")) {
				return { ok: true, status: 200, json: async () => MOCK_DRUGS };
			}
			return {
				ok: true,
				status: 200,
				json: async () => ({ weeklyPlan: populatedPlan }),
			};
		});

		render(<MedicationsSection />);
		await screen.findByText("Ibuprom");

		const wednesdayCard = screen
			.getByRole("heading", { name: "Środa" })
			.closest("div").parentElement;
		const buttons = within(wednesdayCard).getAllByRole("button");
		await user.click(buttons[1]);

		expect(screen.queryByText("Ibuprom")).not.toBeInTheDocument();

		const postCalls = fetchSpy.mock.calls.filter(
			([url, opts]) => url === "/api/plan" && opts?.method === "POST",
		);
		expect(postCalls).toHaveLength(1);

		const savedPlan = JSON.parse(postCalls[0][1].body).plan;
		expect(savedPlan.find((d) => d.day === "Środa").medications).toEqual([]);
	});
});
