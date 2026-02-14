"use client";

import { useState, useEffect } from "react";
import styles from "./WelcomeCard.module.css";
import { Calendar, Settings, Bell } from "lucide-react";
import SettingsModal from "./SettingsModal.js";

export default function WelcomeCard() {
	const [formattedDate, setFormattedDate] = useState("");
	const [userName, setUserName] = useState("");
	const [isSettingsOpen, setIsSettingsOpen] = useState(false);

	const months = [
		"Styczeń",
		"Luty",
		"Marzec",
		"Kwiecień",
		"Maj",
		"Czerwiec",
		"Lipiec",
		"Sierpień",
		"Wrzesień",
		"Październik",
		"Listopad",
		"Grudzień",
	];

	useEffect(() => {
		const savedName = localStorage.getItem("userName");
		if (savedName) {
			setUserName(savedName);
		}

		const handleNameChange = () => {
			const newName = localStorage.getItem("userName");
			if (newName) setUserName(newName);
		};

		window.addEventListener("userNameChange", handleNameChange);

		function updateDate() {
			const date = new Date();
			const month = months[date.getMonth()];
			const day = date.getDate();
			const year = date.getFullYear();
			const hour = String(date.getHours()).padStart(2, "0");
			const minutes = String(date.getMinutes()).padStart(2, "0");
			setFormattedDate(`${month} ${day}, ${year} ${hour}:${minutes}`);
		}

		updateDate();
		const interval = setInterval(updateDate, 1000);
		return () => {
			clearInterval(interval);
			window.removeEventListener("userNameChange", handleNameChange);
		};
	}, []);

	const openSettings = () => {
		setIsSettingsOpen(true);
	};

	const saveSettings = (newName) => {
		setUserName(newName);
		localStorage.setItem("userName", newName);
		window.dispatchEvent(new Event("userNameChange"));
		setIsSettingsOpen(false);
	};

	return (
		<section className={`${styles.welcome} ${styles.card}`}>
			<div className={styles.welcomeText}>
				<div className={styles.currentDate}>
					<Calendar />
					<p className={styles.date}>{formattedDate}</p>
				</div>
				<h2>Witaj w MedCare!</h2>
				<p>Miłego dnia {userName}</p>
			</div>
			<div className={styles.welcomeBtns}>
				<button onClick={openSettings}>
					<Settings />
				</button>
				<button>
					<Bell />
				</button>
			</div>
			{isSettingsOpen && (
				<SettingsModal
					onClose={() => setIsSettingsOpen(false)}
					onSave={saveSettings}
					initialName={userName}
				/>
			)}
		</section>
	);
}
