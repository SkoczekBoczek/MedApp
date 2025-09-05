"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./SideBar.module.css";

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
					<i className="fas fa-bars"></i>
				</button>
			</div>

			<nav className={`${styles.menu} ${menuActive ? styles.active : ""}`}>
				<Link href="#">
					<i className="fas fa-user"></i> Profil
				</Link>
				<Link href="#">
					<i className="fas fa-comment-dots"></i> Wiadomość
				</Link>
				<Link href="#">
					<i className="fas fa-calendar-alt"></i> Kalendarz
				</Link>
				<Link href="#">
					<i className="fas fa-pills"></i> Leki
				</Link>
			</nav>
		</aside>
	);
}
