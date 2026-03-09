import {
	useRef,
	forwardRef,
	useImperativeHandle,
	useActionState,
	useContext,
} from "react";
import { AuthContext } from "@/app/context/AuthContext";
import styles from "./AuthForm.module.css";

const AuthForm = forwardRef(function AuthForm(props, ref) {
	const dialog = useRef();
	const formRef = useRef();

	const authCtx = useContext(AuthContext);

	useImperativeHandle(ref, () => ({
		showModal: () => {
			formRef.current?.reset();
			dialog.current?.showModal();
		},
		close: () => dialog.current?.close(),
	}));

	async function loginAction(prevFormState, formData) {
		const email = formData.get("email");
		const password = formData.get("password");

		let error = [];

		if (!email || !email.includes("@") || email.trim() === "") {
			error.push("Please provide a valid email");
		}
		if (!password || password.trim() === "") {
			error.push("Please provide a valid password");
		}

		const enteredValue = {
			email,
			password,
		};

		if (error.length > 0) {
			return {
				error,
				enteredValue,
			};
		}

		try {
			const response = await fetch("/api/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();

			if (!response.ok) {
				return {
					error: [data.error || "Login failed"],
					enteredValue,
				};
			}

			if (data.user) {
				authCtx.handleLogin({
					user: data.user.name,
					token: data.token,
					isDoctor: data.user.role === "doctor",
				});

				dialog.current?.close();
			}

			return { error: null };
		} catch (err) {
			return {
				error: ["An error occurred while logging in. Please try again."],
				enteredValue,
			};
		}
	}

	const [formState, formAction, isPending] = useActionState(loginAction, {
		error: null,
	});

	return (
		<dialog ref={dialog} className={styles.modal}>
			<form ref={formRef} className={styles.form} action={formAction}>
				<h2>Zaloguj się</h2>
				<div className={styles.control}>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						defaultValue={formState.enteredValue?.email}
					/>
				</div>
				<div className={styles.control}>
					<label htmlFor="password">Hasło</label>
					<input type="password" id="password" name="password" />
				</div>
				<div className={styles.actions}>
					<button type="submit" disabled={isPending}>
						{isPending ? "Logowanie..." : "Zaloguj się"}
					</button>
				</div>
				<div className={styles.actions}>
					Nie masz konta?{" "}
					<button
						type="button"
						className={styles.switchBtn}
						onClick={props.onShowRegister}
					>
						Zarejestruj się
					</button>
				</div>
				{formState.error && (
					<ul className={styles.error}>
						{formState.error.map((error) => (
							<li key={error}>{error}</li>
						))}
					</ul>
				)}
			</form>
		</dialog>
	);
});

export default AuthForm;
