import { useContext } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import AuthContextProvider, { AuthContext } from "./AuthContext";

function AuthConsumer() {
	const { user, token, isDoctor, handleLogin, handleLogout } =
		useContext(AuthContext);

	return (
		<div>
			<span data-testid="user">{user ?? "none"}</span>
			<span data-testid="token">{token ?? "none"}</span>
			<span data-testid="role">{isDoctor ? "doctor" : "patient"}</span>
			<button
				onClick={() =>
					handleLogin({
						user: "Dr Anna Nowak",
						token: "doc-jwt",
						isDoctor: true,
					})
				}
			>
				Login Doctor
			</button>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
}

describe("AuthContext", () => {
	beforeEach(() => {
		localStorage.clear();
	});

	it("restores doctor role from localStorage after page refresh", () => {
		localStorage.setItem("userName", "Dr Anna Nowak");
		localStorage.setItem("authToken", "doc-jwt");
		localStorage.setItem("isDoctor", "true");

		render(
			<AuthContextProvider>
				<AuthConsumer />
			</AuthContextProvider>,
		);

		expect(screen.getByTestId("user")).toHaveTextContent("Dr Anna Nowak");
		expect(screen.getByTestId("token")).toHaveTextContent("doc-jwt");
		expect(screen.getByTestId("role")).toHaveTextContent("doctor");
	});

	it("restores patient role when stored isDoctor is 'false'", () => {
		localStorage.setItem("userName", "Jan Kowalski");
		localStorage.setItem("authToken", "pat-jwt");
		localStorage.setItem("isDoctor", "false");

		render(
			<AuthContextProvider>
				<AuthConsumer />
			</AuthContextProvider>,
		);

		expect(screen.getByTestId("user")).toHaveTextContent("Jan Kowalski");
		expect(screen.getByTestId("role")).toHaveTextContent("patient");
	});

	it("persists isDoctor on login and clears it from localStorage on logout", async () => {
		const user = userEvent.setup();

		render(
			<AuthContextProvider>
				<AuthConsumer />
			</AuthContextProvider>,
		);

		await user.click(screen.getByRole("button", { name: "Login Doctor" }));
		expect(screen.getByTestId("role")).toHaveTextContent("doctor");
		expect(localStorage.getItem("isDoctor")).toBe("true");

		await user.click(screen.getByRole("button", { name: "Logout" }));
		expect(screen.getByTestId("user")).toHaveTextContent("none");
		expect(screen.getByTestId("role")).toHaveTextContent("patient");
		expect(localStorage.getItem("isDoctor")).toBeNull();
	});
});
