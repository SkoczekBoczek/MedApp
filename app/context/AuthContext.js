"use client";

import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
	user: null,
	token: null,
	isDoctor: false,
	handleLogin: () => {},
	handleLogout: () => {},
});

export default function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	const [isDoctor, setIsDoctor] = useState(false);

	useEffect(() => {
		const storedUser = localStorage.getItem("userName");
		const storedToken = localStorage.getItem("authToken");
		const storedIsDoctor = localStorage.getItem("isDoctor");

		if (storedToken && storedUser) {
			setToken(storedToken);
			setUser(storedUser);
			setIsDoctor(storedIsDoctor === "true");
		}
	}, []);

	function handleLogin(data) {
		const newUser = data.user;
		const newToken = data.token;
		const newIsDoctor = Boolean(data.isDoctor);

		setUser(newUser);
		setToken(newToken);
		setIsDoctor(newIsDoctor);

		localStorage.setItem("userName", newUser);
		localStorage.setItem("authToken", newToken);
		localStorage.setItem("isDoctor", String(newIsDoctor));

		window.dispatchEvent(new Event("userNameChange"));
	}

	function handleLogout(e) {
		e.preventDefault();

		setToken(null);
		setUser(null);
		setIsDoctor(false);

		localStorage.removeItem("userName");
		localStorage.removeItem("authToken");
		localStorage.removeItem("isDoctor");

		window.dispatchEvent(new Event("userNameChange"));
	}

	const authCtx = {
		user,
		token,
		isDoctor,
		handleLogin,
		handleLogout,
	};
	return (
		<AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
	);
}
