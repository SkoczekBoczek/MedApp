"use client";
import styles from "./MedicationsSection.module.css";
import MedicationsModal from "./MedicationsList";
import { useRef, useState } from "react";
import { Plus, Pill, Clock } from "lucide-react";

export default function MedicationsSection() {
	const [weeklyPlan, setWeeklyPlan] = useState([
		{
			day: "Poniedziałek",
			medications: [
				{ drugId: 1, productName: "Aspiryna", time: "08:00", taken: false },
				{ drugId: 2, productName: "Ibuprofen", time: "20:00", taken: true },
			],
		},
		{
			day: "Wtorek",
			medications: [
				{ drugId: 3, productName: "Paracetamol", time: "09:00", taken: false },
			],
		},
		{
			day: "Środa",
			medications: [],
		},
		{
			day: "Czwartek",
			medications: [
				{ drugId: 4, productName: "Witamina D", time: "07:00", taken: true },
			],
		},
		{
			day: "Piątek",
			medications: [
				{ drugId: 5, productName: "Metformina", time: "08:00", taken: false },
				{ drugId: 6, productName: "Lisinopril", time: "20:00", taken: false },
			],
		},
		{
			day: "Sobota",
			medications: [
				{ drugId: 7, productName: "Omeprazol", time: "09:00", taken: true },
			],
		},
		{
			day: "Niedziela",
			medications: [],
		},
	]);

	const modal = useRef();

	function showModal() {
		modal.current.open();
	}

	function handleAddMedication(medication) {
		setWeeklyPlan((prevPlan) => {
			return prevPlan.map((dayPlan) => {
				if (dayPlan.day === medication.day) {
					return {
						...dayPlan,
						medications: [
							...dayPlan.medications,
							{
								drugId: medication.drugId,
								productName: medication.productName,
								time: medication.time,
								taken: false,
							},
						],
					};
				}
				return dayPlan;
			});
		});p
	}

	const toggleMedicationTaken = (day, id) => {
		setWeeklyPlan((prevPlan) => {
			return prevPlan.map((dayPlan) => {
				if (dayPlan.day === day) {
					return {
						...dayPlan,
						medications: dayPlan.medications.map((med) => {
							if (med.drugId === id) {
								return { ...med, taken: !med.taken };
							}
							return med;
						}),
					};
				}
				return dayPlan;
			});
		});
	};

	return (
		<section className={`${styles.bigBox} card`}>
			<div className={styles.sectionHeader}>
				<h2 className={styles.sectionTitle}>Plan przyjmowania leków</h2>
				<button className={styles.showModalBtn} onClick={showModal}>
					<i className="fa-solid fa-circle-plus"></i>
				</button>
			</div>

			<div className={styles.weeklyPlan}>
				{weeklyPlan.map((dayPlan) => {
					return (
						<div key={dayPlan.day} className={styles.dayCard}>
							<div className={styles.dayHeader}>
								<h3 className={styles.dayTitle}>{dayPlan.day}</h3>
								<button
									onClick={showModal}
									className={styles.addButton}
									title="Dodaj lek"
								>
									<Plus size={16} />
								</button>
							</div>

							<div className={styles.medicationsList}>
								{dayPlan.medications.length === 0 ? (
									<p className={styles.noMedications}>
										Brak zaplanowanych leków
									</p>
								) : (
									dayPlan.medications.map((med) => (
										<div
											key={med.drugId}
											className={`${styles.medicationItem} ${
												med.taken ? styles.medicationTaken : ""
											}`}
										>
											<div className={styles.medicationContent}>
												<div className={styles.medicationInfo}>
													<div className={styles.timeRow}>
														<Clock size={14} className={styles.icon} />
														<span className={styles.time}>{med.time}</span>
													</div>
													<div className={styles.nameRow}>
														<Pill size={14} className={styles.icon} />
														<span className={styles.name}>
															{med.productName}
														</span>
													</div>
												</div>

												<div
													className={`${styles.checkbox} ${
														med.taken ? styles.checkboxChecked : ""
													}`}
													onClick={() => {
														toggleMedicationTaken(dayPlan.day, med.drugId);
													}}
												>
													{med.taken && (
														<div className={styles.checkboxInner}>
															<div className={styles.checkboxDot}></div>
														</div>
													)}
												</div>
											</div>
										</div>
									))
								)}
							</div>
						</div>
					);
				})}
			</div>
			<MedicationsModal
				ref={modal}
				onAddMedication={handleAddMedication}
			></MedicationsModal>
		</section>
	);
}
