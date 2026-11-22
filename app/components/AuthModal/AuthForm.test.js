import { createRef } from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import AuthForm from "./AuthForm";
import { AuthContext } from "@/app/context/AuthContext";

function renderAuthForm({
	handleLogin = vi.fn(),
	onShowRegister = vi.fn(),
	openOnMount = true,
} = {}) {
	const ref = createRef();
	const authValue = {
		user: null,
		token: null,
		isDoctor: false,
		handleLogin,
		handleLogout: vi.fn(),
	};

	const utils = render(
		<AuthContext.Provider value={authValue}>
			<AuthForm ref={ref} onShowRegister={onShowRegister} />
		</AuthContext.Provider>,
	);

	if (openOnMount) {
		act(() => {
			ref.current.showModal();
		});
	}

	return { ...utils, ref, handleLogin, onShowRegister };
}

describe("AuthForm", () => {
	let fetchSpy;

	beforeEach(() => {
		fetchSpy = vi.spyOn(globalThis, "fetch");
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("opens and closes the dialog via imperative ref handle", () => {
		const { ref, container } = renderAuthForm({ openOnMount: false });
		const dialog = container.querySelector("dialog");

		expect(dialog).not.toHaveAttribute("open");

		act(() => {
			ref.current.showModal();
		});
		expect(dialog).toHaveAttribute("open");

		act(() => {
			ref.current.close();
		});
		expect(dialog).not.toHaveAttribute("open");
	});

	it("shows validation errors when submitting empty fields and does not call fetch", async () => {
		const user = userEvent.setup();
		renderAuthForm();

		await user.click(screen.getByRole("button", { name: "Zaloguj się" }));

		expect(
			await screen.findByText("Proszę podać poprawny email"),
		).toBeInTheDocument();
		expect(screen.getByText("Proszę podać hasło")).toBeInTheDocument();
		expect(fetchSpy).not.toHaveBeenCalled();
	});

	it("shows only password error when email is valid but password is empty", async () => {
		const user = userEvent.setup();
		renderAuthForm();

		await user.type(screen.getByLabelText("Email"), "jan@example.com");
		await user.click(screen.getByRole("button", { name: "Zaloguj się" }));

		expect(await screen.findByText("Proszę podać hasło")).toBeInTheDocument();
		expect(
			screen.queryByText("Proszę podać poprawny email"),
		).not.toBeInTheDocument();
		expect(fetchSpy).not.toHaveBeenCalled();
	});

	it("displays backend error message when login fails (401)", async () => {
		const user = userEvent.setup();
		fetchSpy.mockResolvedValueOnce({
			ok: false,
			json: async () => ({ error: "Incorrect email or password" }),
		});

		const { handleLogin } = renderAuthForm();

		await user.type(screen.getByLabelText("Email"), "jan@example.com");
		await user.type(screen.getByLabelText("Hasło"), "wrongpass");
		await user.click(screen.getByRole("button", { name: "Zaloguj się" }));

		expect(
			await screen.findByText("Incorrect email or password"),
		).toBeInTheDocument();
		expect(handleLogin).not.toHaveBeenCalled();
	});

	it("displays fallback error message when fetch rejects (network error)", async () => {
		const user = userEvent.setup();
		fetchSpy.mockRejectedValueOnce(new Error("Network down"));

		renderAuthForm();

		await user.type(screen.getByLabelText("Email"), "jan@example.com");
		await user.type(screen.getByLabelText("Hasło"), "secret123");
		await user.click(screen.getByRole("button", { name: "Zaloguj się" }));

		expect(
			await screen.findByText(
				"An error occurred while logging in. Please try again.",
			),
		).toBeInTheDocument();
	});

	it("logs in a doctor, updates AuthContext, and closes the modal", async () => {
		const user = userEvent.setup();
		fetchSpy.mockResolvedValueOnce({
			ok: true,
			json: async () => ({
				user: { _id: "doc-1", name: "Dr Anna Nowak", role: "doctor" },
				token: "jwt-token-123",
			}),
		});

		const { handleLogin, container } = renderAuthForm();
		const dialog = container.querySelector("dialog");

		await user.type(screen.getByLabelText("Email"), "anna@clinic.pl");
		await user.type(screen.getByLabelText("Hasło"), "doctorpass");
		await user.click(screen.getByRole("button", { name: "Zaloguj się" }));

		await waitFor(() => {
			expect(handleLogin).toHaveBeenCalledWith({
				user: "Dr Anna Nowak",
				token: "jwt-token-123",
				isDoctor: true,
			});
		});

		expect(fetchSpy).toHaveBeenCalledWith("/api/auth/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: "anna@clinic.pl",
				password: "doctorpass",
			}),
		});
		expect(dialog).not.toHaveAttribute("open");
	});

	it("sets isDoctor to false for patient role", async () => {
		const user = userEvent.setup();
		fetchSpy.mockResolvedValueOnce({
			ok: true,
			json: async () => ({
				user: { _id: "pat-1", name: "Jan Kowalski", role: "patient" },
				token: "patient-jwt",
			}),
		});

		const { handleLogin } = renderAuthForm();

		await user.type(screen.getByLabelText("Email"), "jan@example.com");
		await user.type(screen.getByLabelText("Hasło"), "patientpass");
		await user.click(screen.getByRole("button", { name: "Zaloguj się" }));

		await waitFor(() => {
			expect(handleLogin).toHaveBeenCalledWith({
				user: "Jan Kowalski",
				token: "patient-jwt",
				isDoctor: false,
			});
		});
	});

	it("calls onShowRegister when clicking the switch button", async () => {
		const user = userEvent.setup();
		const { onShowRegister } = renderAuthForm();

		await user.click(screen.getByRole("button", { name: "Zarejestruj się" }));

		expect(onShowRegister).toHaveBeenCalledTimes(1);
	});
});
