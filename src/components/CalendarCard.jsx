import "../components/CalendarCard.css";

export default function CalendarCard() {
	return (
		<aside className="calendar card">
			<h3>Kalendarz</h3>
			<p className="month">Styczeń 2025</p>
			<div className="appointment">
				<p>26 Czw - Dr. Max Vita</p>
				<span>10:30</span>
			</div>
		</aside>
	);
}
