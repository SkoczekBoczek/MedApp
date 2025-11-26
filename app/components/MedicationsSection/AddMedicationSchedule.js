import styles from "./AddMedicationSchedule.module.css";

export default function AddMedicationSchedule({
	onConfirm,
	onCanel,
	selectedDrug,
	selectedTime,
	setSelectedTime,
	selectedDose,
	setSelectedDose,
	selectedDay,
	setSelectedDay,
	selectedUnit,
	setSelectedUnit,
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

	const units = ["szt.", "tabl.", "ml", "mg", "krople", "łyżeczka", "saszetka"];

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
				<label>Dawka:</label>
				<div className={styles.doseInputGroup}>
					<input
						type="number"
						step="0.1"
						min="0"
						value={selectedDose}
						onChange={(e) => setSelectedDose(e.target.value)}
						className={styles.doseInput}
					/>
					<select
						value={selectedUnit}
						onChange={(e) => setSelectedUnit(e.target.value)}
						className={`${styles.selectInput} ${styles.selectUnit}`}
					>
						{units.map((unit) => (
							<option key={unit} value={unit}>
								{unit}
							</option>
						))}
					</select>
				</div>
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
