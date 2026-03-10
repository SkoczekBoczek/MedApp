"use client";

import React, { useState, useContext } from "react";
import Image from "next/image";
import styles from "./ContactCard.module.css";
import MessagesMenu from "./MessagesMenu";
import {
	ArrowLeft,
	ArrowRight,
	MessageCircle,
	MessageSquareHeart,
} from "lucide-react";
import { AuthContext } from "@/app/context/AuthContext";
import { ChatContext } from "@/app/context/ChatContext";

export default function ContactCard() {
	const { openChat, chatItems, isListLoading, isOpen } =
		useContext(ChatContext);
	const { token, isDoctor } = useContext(AuthContext);

	const [currentPage, setCurrentPage] = useState(1);

	const isLoggedIn = !!token;

	const [startPositionX, setStartPositionX] = useState(0);

	function handleTouchStart(e) {
		setStartPositionX(e.touches[0].clientX);
	}

	function handleTouchEnd(e) {
		const endPosiotionX = e.changedTouches[0].clientX;
		const movedPosition = endPosiotionX - startPositionX;

		if (movedPosition > 50 && currentPage > 1) {
			setCurrentPage(currentPage - 1);
		} else if (movedPosition < -50 && currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	}

	const specialities = [
		"Wszyscy",
		"Kardiolog",
		"Stomatolog",
		"Pediatra",
		"Ortopeda",
	];

	const [selectedSpeciality, setSelectedSpeciality] = useState("Wszyscy");

	function handleSpecialityChange(speciality) {
		setSelectedSpeciality(speciality);
		setCurrentPage(1);
	}

	const filteredDoctors =
		selectedSpeciality === "Wszyscy"
			? chatItems
			: chatItems.filter((doctor) => doctor.speciality === selectedSpeciality);

	const doctorsPerPage = 3;

	const indexOfLastDoctor = currentPage * doctorsPerPage;
	const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
	const currentDoctors = filteredDoctors.slice(
		indexOfFirstDoctor,
		indexOfLastDoctor,
	);

	const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);

	return (
		<section className={`${styles.contact} ${styles.card}`}>
			<div className={styles.contactHeader}>
				{isDoctor ? (
					<h2>Skontaktuj się z pacjentem</h2>
				) : (
					<h2>Skontaktuj się z lekarzem</h2>
				)}

				{isLoggedIn && totalPages > 1 && (
					<div className={styles.arrows}>
						<button
							onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
						>
							<ArrowLeft />
						</button>
						<button
							onClick={() =>
								currentPage < totalPages && setCurrentPage(currentPage + 1)
							}
						>
							<ArrowRight />
						</button>
					</div>
				)}
			</div>
			{!isLoggedIn ? (
				<div className={styles.loggedOutInfo}>
					<p>
						Zaloguj się, aby zobaczyć listę dostępnych lekarzy i móc się z nimi
						skontaktować.
					</p>
				</div>
			) : (
				<>
					<div className={styles.categories}>
						{!isDoctor && (
							<ul className={`${styles.categoriesList} ${styles.desktopOnly}`}>
								{specialities.map((spec) => (
									<li key={spec}>
										<button onClick={() => handleSpecialityChange(spec)}>
											{spec}
										</button>
									</li>
								))}
							</ul>
						)}

						<select
							className={`${styles.mobileOnly}`}
							value={selectedSpeciality}
							onChange={(e) => handleSpecialityChange(e.target.value)}
						>
							{specialities.map((spec) => (
								<option key={spec} value={spec}>
									{spec}
								</option>
							))}
						</select>
					</div>
					<div
						className={styles.contactInfo}
						onTouchStart={handleTouchStart}
						onTouchEnd={handleTouchEnd}
					>
						{isListLoading ? (
							<div>Ładowanie...</div>
						) : (
							currentDoctors.map((doctor) => (
								<div className={styles.doctorCard} key={doctor._id}>
									<div className={styles.doctorImg}>
										<Image
											src={
												doctor.image || "https://placehold.co/80x80?text=User"
											}
											alt={doctor.name}
											width={80}
											height={80}
										/>
									</div>
									<div className={styles.doctorInfo}>
										<p className={styles.doctorName}>{doctor.name}</p>
										<p className={styles.doctorSpeciality}>
											{doctor.speciality}
										</p>
										<button
											className={styles.messageBtn}
											onClick={() => {
												openChat(doctor);
											}}
										>
											<MessageCircle /> Wiadomość
										</button>
									</div>
								</div>
							))
						)}
					</div>

					{totalPages > 1 && (
						<div className={styles.paginationDots}>
							{Array.from({ length: totalPages }).map((_, i) => {
								return (
									<span
										key={i}
										onClick={() => setCurrentPage(i + 1)}
										className={`${styles.dot} ${
											i + 1 === currentPage ? styles.activeDot : ""
										}`}
									/>
								);
							})}
						</div>
					)}
				</>
			)}
			{isOpen && <MessagesMenu />}
			{!isOpen && isLoggedIn && (
				<button
					className={styles.floatingClose}
					onClick={() => {
						openChat(null);
					}}
				>
					<MessageSquareHeart className={styles.chatIcon} size={20} />
				</button>
			)}
		</section>
	);
}
