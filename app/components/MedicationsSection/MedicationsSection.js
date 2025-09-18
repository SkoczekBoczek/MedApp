"use client";
import styles from "./MedicationsSection.module.css";
import MedicationsModal from "./MedicationsList";
import userToken from "@/utils/userToken";
import { useEffect, useRef, useState } from "react";
import { Plus, Pill, Clock, PlusCircle, Trash } from "lucide-react";

export default function MedicationsSection() {
	const [weeklyPlan, setWeeklyPlan] = useState([
		{ day: "Poniedziałek", medications: [] },
		{ day: "Wtorek", medications: [] },
		{ day: "Środa", medications: [] },
		{ day: "Czwartek", medications: [] },
		{ day: "Piątek", medications: [] },
		{ day: "Sobota", medications: [] },
		{ day: "Niedziela", medications: [] },
	]);

	useEffect(() => {
		const token = userToken();
		fetch(`/api/plan?token=${token}`)
			.then((res) => res.json())
			.then((data) => {
				if (data?.weeklyPlan?.length) {
					setWeeklyPlan(data.weeklyPlan);
				}
			});
	}, []);

	const savePlanToBackend = (plan) => {
		const token = userToken();
		fetch("/api/plan", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ userToken: token, plan }),
		});
	};

	const modal = useRef();

	function showModal(day = "Poniedziałek") {
		modal.current.open(day);
	}

	function handleAddMedication(medication) {
		setWeeklyPlan((prevPlan) => {
			const newPlan = prevPlan.map((dayPlan) => {
				if (dayPlan.day === medication.day) {
					return {
						...dayPlan,
						medications: [
							{
								instanceId: medication.instanceId,
								drugId: medication.drugId,
								productName: medication.productName,
								time: medication.time,
								taken: false,
							},
							...dayPlan.medications,
						].sort((a, b) => a.time.localeCompare(b.time)),
					};
				}
				return dayPlan;
			});
			savePlanToBackend(newPlan);
			return newPlan;
		});
	}

	const toggleMedicationTaken = (day, id) => {
		setWeeklyPlan((prevPlan) => {
			const newPlan = prevPlan.map((dayPlan) => {
				if (dayPlan.day === day) {
					return {
						...dayPlan,
						medications: dayPlan.medications.map((med) => {
							if (med.instanceId === id) {
								return { ...med, taken: !med.taken };
							}
							return med;
						}),
					};
				}
				return dayPlan;
			});
			savePlanToBackend(newPlan);
			return newPlan;
		});
	};

	const handleDeleteMedication = (id, day) => {
		setWeeklyPlan((prevPlan) => {
			const newPlan = prevPlan.map((dayPlan) => {
				if (dayPlan.day === day) {
					return {
						...dayPlan,
						medications: dayPlan.medications.filter(
							(med) => med.instanceId !== id
						),
					};
				}
				return dayPlan;
			});
			savePlanToBackend(newPlan);
			return newPlan;
		});
	};

	function isDuplicateMedication(med) {
		const findCorrectDay = weeklyPlan.find((d) => d.day === med.day);

		return findCorrectDay.medications.some(
			(m) => m.productName === med.productName && m.time === med.time
		);
	}

	return (
		<section className={`${styles.bigBox} card`}>
			<div className={styles.sectionHeader}>
				<h2 className={styles.sectionTitle}>Plan przyjmowania leków</h2>
				<button
					className={styles.showModalBtn}
					onClick={() => showModal("Poniedziałek")}
				>
					<PlusCircle size={24} />
				</button>
			</div>

			<div className={styles.weeklyPlanContainer}>
				<div className={styles.weeklyPlan}>
					{weeklyPlan.map((dayPlan) => {
						return (
							<div key={dayPlan.day} className={styles.dayCard}>
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
										<p className={styles.noMedications}>
											Brak zaplanowanych leków
										</p>
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
																handleDeleteMedication(
																	med.instanceId,
																	dayPlan.day
																);
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
					})}
				</div>
			</div>
			<MedicationsModal
				ref={modal}
				onAddMedication={handleAddMedication}
				isDuplicated={isDuplicateMedication}
			></MedicationsModal>
		</section>
	);
}
