"use client";

import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import styles from "./ContactCard.module.css";
import MessagesMenu from "./MessagesMenu";
import { AuthContext } from "@/app/context/AuthContext";
import {
	ArrowLeft,
	ArrowRight,
	MessageCircle,
	MessageSquareHeart,
} from "lucide-react";

export default function ContactCard() {
	const [doctors, setDoctors] = useState([]);
	const [chatListItems, setChatListItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);

	const { token, isDoctor } = useContext(AuthContext);
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

	useEffect(() => {
		if (!token) {
			setIsChatOpen(false);
			setSelectedDoctor(null);
		}
	}, [token]);

	useEffect(() => {
		const fetchData = () => {
			if (!token) {
				return;
			}

			if (isDoctor) {
				fetch("/api/conversations", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
					.then((res) => res.json())
					.then((data) => {
						setChatListItems(data.items || []);
						setLoading(false);
					})
					.catch((err) => {
						console.error("Error fetching conversations", err);
						setLoading(false);
					});
			} else {
				fetch("/api/doctors")
					.then((res) => res.json())
					.then((data) => {
						if (Array.isArray(data)) {
							setDoctors(data);
							setChatListItems(data);
						} else {
							setChatListItems([]);
							setDoctors([]);
						}
						setLoading(false);
					})
					.catch((err) => {
						console.error("Error fetching data", err);
						setLoading(false);
					});
			}
		};

		fetchData();
		const interval = setInterval(fetchData, 5000);
		return () => clearInterval(interval);
	}, [token, isDoctor]);

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
			? doctors
			: doctors.filter((doctor) => doctor.speciality === selectedSpeciality);

	const doctorsPerPage = 3;

	const indexOfLastDoctor = currentPage * doctorsPerPage;
	const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
	const currentDoctors = filteredDoctors.slice(
		indexOfFirstDoctor,
		indexOfLastDoctor,
	);

	const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);

	const [isChatOpen, setIsChatOpen] = useState(false);
	const [selectedDoctor, setSelectedDoctor] = useState(null);

	function openChat() {
		setIsChatOpen(true);
	}
	function closeChat() {
		setIsChatOpen(false);
	}

	return (
		<section className={`${styles.contact} ${styles.card}`}>
			<div className={styles.contactHeader}>
				<h2>Skontaktuj się z lekarzem</h2>

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
			</div>
			<div className={styles.categories}>
				<ul className={`${styles.categoriesList} ${styles.desktopOnly}`}>
					{specialities.map((spec) => (
						<li key={spec}>
							<button onClick={() => handleSpecialityChange(spec)}>
								{spec}
							</button>
						</li>
					))}
				</ul>

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
				{loading ? (
					<div>Ładowanie...</div>
				) : (
					currentDoctors.map((doctor) => (
						<div className={styles.doctorCard} key={doctor._id}>
							<div className={styles.doctorImg}>
								<Image
									src={doctor.image}
									alt={doctor.name}
									width={80}
									height={80}
								/>
							</div>
							<div className={styles.doctorInfo}>
								<p className={styles.doctorName}>{doctor.name}</p>
								<p className={styles.doctorSpeciality}>{doctor.speciality}</p>
								<button
									className={styles.messageBtn}
									onClick={() => {
										openChat();
										setSelectedDoctor(doctor);
									}}
								>
									<MessageCircle /> Wiadomość
								</button>
							</div>
						</div>
					))
				)}
			</div>

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
			{isChatOpen && (
				<MessagesMenu
					items={chatListItems}
					onCloseChat={closeChat}
					selectedDoctor={selectedDoctor}
				/>
			)}
			{!isChatOpen && isLoggedIn && (
				<button
					className={styles.floatingClose}
					onClick={() => {
						setSelectedDoctor(null);
						setIsChatOpen(true);
					}}
				>
					<MessageSquareHeart className={styles.chatIcon} size={20} />
				</button>
			)}
		</section>
	);
}
