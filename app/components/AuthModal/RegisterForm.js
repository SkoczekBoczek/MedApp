import {
	useRef,
	forwardRef,
	useImperativeHandle,
	useActionState,
	useState,
	useEffect,
} from "react";

import styles from "./RegisterForm.module.css";

const RegisterForm = forwardRef(function RegisterForm(props, ref) {
	const dialog = useRef();
	const formRef = useRef();
	const [isSuccess, setIsSuccess] = useState(false);

	useImperativeHandle(ref, () => ({
		showModal: () => {
			setIsSuccess(false);
			formRef.current?.reset();
			dialog.current.showModal();
		},
		close: () => dialog.current.close(),
	}));

	async function registerAction(prevStateForm, formData) {
		const name = formData.get("name");
		const email = formData.get("email");
		const password = formData.get("password");
		const confirmPassword = formData.get("confirm-password");

		let errors = [];

		if (!name || name.trim() === "") {
			errors.push("Name and surname cannot be empty.");
		}

		if (!email || !email.includes("@")) {
			errors.push("Provide a valid email.");
		}

		if (!password || password.trim().length < 6) {
			errors.push("Password must be at least 6 characters long");
		}

		if (password !== confirmPassword) {
			errors.push("Passwords do not match.");
		}

		const enteredValue = {
			name,
			email,
		};

		if (errors.length > 0) {
			return {
				errors,
				enteredValue,
			};
		}

		try {
			const response = await fetch("/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, email, password }),
			});

			const data = await response.json();

			if (!response.ok) {
				return {
					errors: [data.error || "Registration failed."],
					enteredValue,
				};
			}

			setIsSuccess(true);
			return { errors: null };
		} catch (error) {
			return {
				errors: ["An error occurred while registering. Please try again."],
				enteredValue,
			};
		}
	}

	const [formState, formAction, isPending] = useActionState(registerAction, {
		errors: null,
	});

	useEffect(() => {
		if (isSuccess) {
			const timer = setTimeout(() => {
				props.onShowLogin();
			}, 3000);
			return () => setTimeout(timer);
		}
	}, [isSuccess]);

	return (
		<dialog ref={dialog} className={styles.modal}>
			{isSuccess ? (
				<div className={styles.success}>
					<h2>Rejestracja zakończona sukcesem!</h2>
					<p style={{ color: "#666", marginTop: "0.5rem" }}>
						Za chwilę nastąpi przekierowanie do logowania...
					</p>
				</div>
			) : (
				<form ref={formRef} className={styles.form} action={formAction}>
					<h2>Zarejestruj się</h2>
					<div className={styles.control}>
						<label htmlFor="name">Imię i nazwisko</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							defaultValue={formState.enteredValue?.name}
						/>
					</div>
					<div className={styles.control}>
						<label htmlFor="register-email">Email</label>
						<input
							type="email"
							id="register-email"
							name="email"
							required
							defaultValue={formState?.enteredValue?.email}
						/>
					</div>
					<div className={styles.control}>
						<label htmlFor="register-password">Hasło</label>
						<input
							type="password"
							id="register-password"
							name="password"
							required
						/>
					</div>
					<div className={styles.control}>
						<label htmlFor="confirm-password">Potwierdź hasło</label>
						<input
							type="password"
							id="confirm-password"
							name="confirm-password"
							required
						/>
					</div>

					<div className={styles.actions}>
						<button type="submit">Zarejestruj się</button>
					</div>
					<div className={styles.actions}>
						Masz już konto?{" "}
						<button
							type="button"
							className={styles.switchBtn}
							onClick={props.onShowLogin}
						>
							Zaloguj się
						</button>
					</div>
					{formState.errors && (
						<ul className={styles.error}>
							{formState.errors.map((error) => (
								<li key={error}>{error}</li>
							))}
						</ul>
					)}
				</form>
			)}
		</dialog>
	);
});
export default RegisterForm;
