"use client";

import { useState, useEffect } from "react";
import styles from "./WelcomeCard.module.css";

export default function WelcomeCard() {
	const [formattedDate, setFormattedDate] = useState("");
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
		return () => clearInterval(interval);
	}, []);

	return (
		<section className={`${styles.welcome} ${styles.card}`}>
			<div className={styles.welcomeText}>
				<div className={styles.currentDate}>
					<i className="fa-solid fa-calendar"></i>
					<p className={styles.date}>{formattedDate}</p>
				</div>
				<h2>Witaj w MedCare!</h2>
				<p>Miłego dnia, Łucja!</p>
			</div>
			<div className={styles.welcomeBtns}>
				<button>
					<i className="fa-solid fa-gear"></i>
				</button>
				<button>
					<i className="fa-solid fa-bell"></i>
				</button>
			</div>
		</section>
	);
}
