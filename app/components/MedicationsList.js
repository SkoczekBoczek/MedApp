"use client";

import styles from "./MedicationsList.module.css";
import { Info } from "lucide-react";
import {
	forwardRef,
	useRef,
	useImperativeHandle,
	useState,
	useEffect,
} from "react";
import { createPortal } from "react-dom";
import SelectedDrugInfo from "./SelectedDrugInfo";

const Modal = forwardRef(function MedicationsModal(
	{ onAddMedication /* selectedDay */ },
	ref
) {
	const [selectedDrug, setSelectedDrug] = useState(null);
	const [selectedInfoDrug, setSelectedInfoDrug] = useState(null);
	const [drugs, setDrugs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [findDrug, setFindDrug] = useState("");
	const [showTimeSelection, setShowTimeSelection] = useState(false);

	const [selectedDay, setSelectedDay] = useState("Poniedziałek");
	const [selectedTime, setSelectedTime] = useState("08:00");

	// if (selectedDay === null || selectedDay === undefined) {
	// 	setSelectedDay("Poniedziałek");
	// }

	useEffect(() => {
		async function fetchDrugs() {
			const res = await fetch("/api/drugs");
			const data = await res.json();
			console.log("Fetched drugs:", data);
			setLoading(false);
			setDrugs(data);
		}
		fetchDrugs();
	}, []);

	const results = drugs.filter((d) =>
		d.productName.toLowerCase().includes(findDrug.toLowerCase())
	);

	const [isOpen, setIsOpen] = useState(false);

	const dialog = useRef();

	useImperativeHandle(ref, () => {
		return {
			open: () => setIsOpen(true),
			close: () => setIsOpen(false),
		};
	});

	useEffect(() => {
		if (isOpen) {
			dialog.current.showModal();
		} else if (dialog.current?.open) {
			dialog.current.close();
		}
	}, [isOpen]);

	function handleClose() {
		setIsOpen(false);
		setSelectedInfoDrug(null);
		setSelectedDrug(null);
		setFindDrug("");
		setShowTimeSelection(false);
	}

	useEffect(() => {
		const handleEsc = (e) => {
			if (e.key === "Escape") {
				if (selectedInfoDrug) {
					handleClose();
				}
			}
		};

		document.addEventListener("keydown", handleEsc);

		return () => {
			document.removeEventListener("keydown", handleEsc);
		};
	}, [selectedInfoDrug]);

	const days = [
		"Poniedziałek",
		"Wtorek",
		"Środa",
		"Czwartek",
		"Piątek",
		"Sobota",
		"Niedziela",
	];

	function handleAddMedication(drug) {
		setSelectedDrug(drug);
		setShowTimeSelection(true);
	}

	function handleConfirmMedication() {
		if (!selectedDrug) return;
		const medication = {
			drugId: selectedDrug._id,
			productName: selectedDrug.productName,
			day: selectedDay,
			time: selectedTime,
		};

		onAddMedication(medication);
		handleClose();
	}

	if (!isOpen) return null;

	return createPortal(
		<dialog ref={dialog} className={styles.dialogBackdrop}>
			<div
				className={`${styles.modalWrapper} ${
					selectedDrug ? styles.modalWrapperWithDetails : ""
				}`}
			>
				<div
					className={`${styles.modalContent} ${
						selectedInfoDrug ? styles.modalContentActive : ""
					}`}
					onClick={(e) => e.stopPropagation()}
				>
					<div className={styles.header}>
						<h2>Leki</h2>
						<button className={styles.closeBtn} onClick={handleClose}>
							&times;
						</button>
					</div>

					{!showTimeSelection ? (
						<>
							<input
								type="text"
								placeholder="Wyszukaj lek..."
								value={findDrug}
								onChange={(e) => setFindDrug(e.target.value)}
							/>

							{loading ? (
								<p>Ładowanie leków...</p>
							) : (
								<div className={styles.content}>
									{results.map((drug) => (
										<div className={styles.medicationItem} key={drug._id}>
											<p>{drug.productName}</p>
											<div className={styles.buttons}>
												<button
													className={styles.addBtn}
													onClick={() => handleAddMedication(drug)}
												>
													Dodaj
												</button>
												<button
													className={styles.infoBtn}
													onClick={() => setSelectedInfoDrug(drug)}
												>
													<Info size={18} />
												</button>
											</div>
										</div>
									))}
								</div>
							)}
						</>
					) : (
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
								<button
									className={styles.cancelBtn}
									onClick={() => {
										setShowTimeSelection(false);
										setSelectedDrug(null);
									}}
								>
									Anuluj
								</button>
								<button
									className={styles.confirmBtn}
									onClick={handleConfirmMedication}
								>
									Potwierdź
								</button>
							</div>
						</div>
					)}

					{selectedInfoDrug && !showTimeSelection && (
						<SelectedDrugInfo
							selectedDrug={selectedInfoDrug}
							onClose={() => setSelectedInfoDrug(null)}
						/>
					)}
				</div>
			</div>
		</dialog>,
		document.body
	);
});

export default Modal;
