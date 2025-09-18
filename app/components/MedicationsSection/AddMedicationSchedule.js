import styles from "./AddMedicationSchedule.module.css";

export default function AddMedicationSchedule({
	onConfirm,
	onCanel,
	selectedDrug,
	selectedTime,
	setSelectedTime,
	selectedDay,
	setSelectedDay,
}) {
	const days = [
		"Poniedziałek",
		"Wtorek",
		"Środa",
		"Czwartek",
		"Piątek",
		"Sobota",
		"Niedziela",
	];

	return (
		<div className={styles.timeSelection}>
			<h3>Wybierz dzień i godzinę</h3>
			<p className={styles.selectedDrug}>
				<strong>Lek:</strong> {selectedDrug.productName}
			</p>

			<div className={styles.selectionGroup}>
				<label>Dzień tygodnia:</label>
				<select
					value={selectedDay}
					onChange={(e) => setSelectedDay(e.target.value)}
					className={styles.selectInput}
				>
					{days.map((day) => (
						<option key={day} value={day}>
							{day}
						</option>
					))}
				</select>
			</div>

			<div className={styles.selectionGroup}>
				<label>Godzina:</label>
				<input
					type="time"
					value={selectedTime}
					onChange={(e) => setSelectedTime(e.target.value)}
					className={styles.timeInput}
				/>
			</div>

			<div className={styles.timeSelectionButtons}>
				<button className={styles.cancelBtn} onClick={onCanel}>
					Anuluj
				</button>
				<button className={styles.confirmBtn} onClick={onConfirm}>
					Potwierdź
				</button>
			</div>
		</div>
	);
}
