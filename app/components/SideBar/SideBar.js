"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./SideBar.module.css";
import { Menu, X, User, MessageCircle, Calendar, Pill } from "lucide-react";

export default function SideBar() {
	const [menuActive, setMenuActive] = useState(false);

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
				<Link href="#">
					<User size={18} /> Profil
				</Link>
				<Link href="#">
					<MessageCircle size={18} /> Wiadomość
				</Link>
				<Link href="#">
					<Calendar size={18} /> Kalendarz
				</Link>
				<Link href="#">
					<Pill size={18} /> Leki
				</Link>
			</nav>
		</aside>
	);
}
