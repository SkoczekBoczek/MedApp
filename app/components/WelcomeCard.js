"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import "./WelcomeCard.css";

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

			const newformattedDate = `${month} ${day}, ${year} ${hour}:${minutes}`;
			setFormattedDate(newformattedDate);
		}

		updateDate();
		const runningTime = setInterval(updateDate, 1000);

		return () => {
			clearInterval(runningTime);
		};
	}, []);

	return (
		<section className="welcome card">
			<div className="welcomeBtns">
				<button>
					<i className="fa-solid fa-gear"></i>
				</button>
				<button>
					<i className="fa-solid fa-bell"></i>
				</button>
			</div>

			<div className="welcomeText">
				<div className="currentDate">
					<i className="fa-solid fa-calendar"></i>
					<p className="date">{formattedDate}</p>
				</div>
				<h2>Witaj w MedCare!</h2>
				<p>Miłego dnia, Łucja!</p>
			</div>

			<div className="welcomeImg">
				<Image 
					src="/ilustracja-lekarzy.png" 
					alt="lekarze" 
					width={600}
					height={400}
					priority
				/>
			</div>
		</section>
	);
}