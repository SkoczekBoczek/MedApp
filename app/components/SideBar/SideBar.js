"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from "./SideBar.module.css";
import { Menu, X, User, MessageCircle, Calendar, Pill } from "lucide-react";
import MessagesMenu from "../ContactCard/MessagesMenu";
import MedicationsModal from "../MedicationsSection/MedicationsList";
import SettingsModal from "../WelcomeCard/SettingsModal";

export default function SideBar() {
	const [menuActive, setMenuActive] = useState(false);
	const [showMessages, setShowMessages] = useState(false);
	const [showSettings, setShowSettings] = useState(false);
	const [doctors, setDoctors] = useState([]);
	const [userName, setUserName] = useState("");
	const medicationsModalRef = useRef();

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
		return () => window.removeEventListener("userNameChange", handleNameChange);
	}, []);

	useEffect(() => {
		if (showMessages && doctors.length === 0) {
			fetch("/api/doctors")
				.then((res) => res.json())
				.then((data) => setDoctors(data));
		}
	}, [showMessages]);

	const saveSettings = (newName) => {
		setUserName(newName);
		localStorage.setItem("userName", newName);
		window.dispatchEvent(new Event("userNameChange"));
		setShowSettings(false);
	};

	return (
		<aside className={styles.sidebar}>
			<div className={styles.sidebarHeader}>
				<h1 className={styles.logo}>MedCare</h1>
				<button
					className={styles.burger}
					onClick={() => setMenuActive(!menuActive)}
				>
					{menuActive ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			<nav className={`${styles.menu} ${menuActive ? styles.active : ""}`}>
				<Link href="#" onClick={() => setShowSettings(true)}>
					<User size={18} /> Profil
				</Link>
				<Link
					href="#"
					onClick={(e) => {
						e.preventDefault();
						setShowMessages(() => !showMessages);
					}}
				>
					<MessageCircle size={18} /> Wiadomość
				</Link>
				{/* <Link href="#">
					<Calendar size={18} /> Kalendarz
				</Link> */}
				<Link
					href="#"
					onClick={(e) => {
						e.preventDefault();
						medicationsModalRef.current?.open("Poniedziałek");
					}}
				>
					<Pill size={18} /> Leki
				</Link>
			</nav>
			{showMessages && (
				<MessagesMenu
					doctors={doctors}
					onCloseChat={() => setShowMessages(false)}
					selectedDoctor={null}
				/>
			)}
			{showSettings && (
				<SettingsModal
					onClose={() => setShowSettings(false)}
					onSave={saveSettings}
					initialName={userName}
				/>
			)}
			<MedicationsModal ref={medicationsModalRef} onAddMedication={() => {}} />
		</aside>
	);
}
