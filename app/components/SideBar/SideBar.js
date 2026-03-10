"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useContext } from "react";
import styles from "./SideBar.module.css";
import {
	Menu,
	X,
	User,
	MessageCircle,
	LogIn,
	LogOut,
	Pill,
} from "lucide-react";
import MessagesMenu from "../ContactCard/MessagesMenu";
import MedicationsModal from "../MedicationsSection/MedicationsList";
import SettingsModal from "../WelcomeCard/SettingsModal";
import AuthForm from "../AuthModal/AuthForm";
import RegisterForm from "../AuthModal/RegisterForm";
import { AuthContext } from "@/app/context/AuthContext";
import { ChatContext } from "@/app/context/ChatContext";

export default function SideBar() {
	const [menuActive, setMenuActive] = useState(false);
	const [showSettings, setShowSettings] = useState(false);

	const medicationsModalRef = useRef();
	const authDialogRef = useRef();
	const registerDialogRef = useRef();

	const authCtx = useContext(AuthContext);
	const { isOpen, openChat, closeChat } = useContext(ChatContext);

	const saveSettings = (newName) => {
		authCtx.handleLogin({
			user: newName,
			token: authCtx.token,
			isDoctor: authCtx.isDoctor,
		});

		setShowSettings(false);
	};

	function handleShowLogin() {
		authDialogRef.current.showModal();
		registerDialogRef.current.close();
	}
	function handleShowRegister() {
		registerDialogRef.current.showModal();
		authDialogRef.current.close();
	}

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
				<Link
					href="#"
					onClick={(e) => {
						e.preventDefault();
						setShowSettings(true);
					}}
				>
					<User size={18} /> Profil
				</Link>
				{authCtx.user && (
					<Link
						href="#"
						onClick={(e) => {
							e.preventDefault();
							isOpen ? closeChat() : openChat(null);
						}}
					>
						<MessageCircle size={18} /> Wiadomość
					</Link>
				)}
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
				{authCtx.user ? (
					<Link
						href="#"
						onClick={(e) => {
							authCtx.handleLogout(e);
							closeChat();
						}}
					>
						<LogOut size={18} /> Wyloguj się
					</Link>
				) : (
					<Link
						href="#"
						onClick={(e) => {
							e.preventDefault();
							authDialogRef.current?.showModal();
						}}
					>
						<LogIn size={18} /> Zaloguj się
					</Link>
				)}
			</nav>
			{isOpen && <MessagesMenu />}
			{showSettings && (
				<SettingsModal
					onClose={() => setShowSettings(false)}
					onSave={saveSettings}
					initialName={authCtx.user}
				/>
			)}
			<MedicationsModal ref={medicationsModalRef} onAddMedication={() => {}} />
			<AuthForm ref={authDialogRef} onShowRegister={handleShowRegister} />
			<RegisterForm ref={registerDialogRef} onShowLogin={handleShowLogin} />
		</aside>
	);
}
