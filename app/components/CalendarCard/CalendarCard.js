import styles from "./CalendarCard.module.css";

export default function CalendarCard() {
	return (
		<aside className={`${styles.calendar} ${styles.card}`}>
			<h3>Kalendarz</h3>
			<p className={styles.month}>Styczeń 2025</p>
			<div className={styles.appointment}>
				<p>26 Czw - Dr. Max Vita</p>
				<span>10:30</span>
			</div>
		</aside>
	);
}
