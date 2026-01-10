import styles from "./DayCard.module.css";
import { Plus, Pill, Clock, Trash, Syringe } from "lucide-react";

export default function DayCard({
	dayPlan,
	onDeleteMedication,
	toggleMedicationTaken,
	showModal,
}) {
	return (
		<div className={styles.dayCard}>
			<div className={styles.dayHeader}>
				<h3 className={styles.dayTitle}>{dayPlan.day}</h3>
				<button
					onClick={() => showModal(dayPlan.day)}
					className={styles.addButton}
					title="Dodaj lek"
				>
					<Plus size={16} />
				</button>
			</div>

			<div className={styles.medicationsList}>
				{dayPlan.medications.length === 0 ? (
					<p className={styles.noMedications}>Brak zaplanowanych leków</p>
				) : (
					dayPlan.medications.map((med) => (
						<div
							key={med.instanceId}
							className={`${styles.medicationItem} ${
								med.taken ? styles.medicationTaken : ""
							}`}
							onClick={() => {
								toggleMedicationTaken(dayPlan.day, med.instanceId);
							}}
						>
							<div className={styles.medicationContent}>
								<div className={styles.medicationInfo}>
									{/* GODZINA */}
									<div className={styles.timeRow}>
										<Clock size={14} className={styles.icon} />
										<span className={styles.time}>{med.time}</span>
									</div>
									{/* NAZWA */}
									<div className={styles.nameRow}>
										<Pill size={14} className={styles.icon} />
										<span className={styles.name}>{med.productName}</span>
									</div>
									{/* DAWAKA */}
									<div className={styles.doseRow}>
										<Syringe size={14} className={styles.icon} />
										<span className={styles.name}>{med.dose}</span>
									</div>
								</div>

								<div className={styles.btnss}>
									<div
										className={`${styles.checkbox} ${
											med.taken ? styles.checkboxChecked : ""
										}`}
									>
										{med.taken && (
											<div className={styles.checkboxInner}>
												<div className={styles.checkboxDot}></div>
											</div>
										)}
									</div>
									<button
										className={styles.deleteBtn}
										onClick={(e) => {
											e.stopPropagation();
											onDeleteMedication(med.instanceId, dayPlan.day);
										}}
									>
										<Trash size={18} />
									</button>
								</div>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
}
