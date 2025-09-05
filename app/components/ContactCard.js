"use client";

"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";

import "./ContactCard.css";

export default function ContactCard() {
	const doctors = [
		{
			id: 1,
			name: "Dr. Nick Jonas",
			specialty: "Stomatolog",
			image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400",
		},
		{
			id: 2,
			name: "Dr. Miles Teller",
			specialty: "Kardiolog",
			image: "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=400",
		},
		{
			id: 3,
			name: "Dr. Frank Ocean",
			specialty: "Pediatra",
			image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400",
		},
		{
			id: 4,
			name: "Dr. Cristiano Ronaldo",
			specialty: "Ortopeda",
			image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400",
		},
	];

	const [currentPage, setCurrentPage] = useState(1);

	const doctorsPerPage = 3;

	const indexOfLastDoctor = currentPage * doctorsPerPage;
	const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
	const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

	const totalPages = Math.ceil(doctors.length / doctorsPerPage);

	return (
		<section className="contact card">
			<div className="contactHeader">
				<h3>Skontaktuj się z lekarzem</h3>
				<div className="arrows">
					<button
						onClick={() => {
							if (currentPage > 1) {
								setCurrentPage(currentPage - 1);
							}
						}}
					>
						<i className="fas fa-arrow-left"></i>
					</button>
					<button
						onClick={() => {
							if (currentPage < totalPages) {
								setCurrentPage(currentPage + 1);
							}
						}}
					>
						<i className="fas fa-arrow-right"></i>
					</button>
				</div>
			</div>
			<div className="contactInfo">
				{currentDoctors.map((doctor) => (
					<div className="doctorCard" key={doctor.id}>
						<div className="doctorImg">
							<Image 
								src={doctor.image} 
								alt={doctor.name}
								width={80}
								height={80}
							/>
						</div>
						<div className="doctorInfo">
							<p className="doctorName">{doctor.name}</p>
							<p className="doctorSpecialty">{doctor.specialty}</p>
							<button className="messageBtn">
								<i className="fas fa-comment-dots">Wiadomość</i>
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}