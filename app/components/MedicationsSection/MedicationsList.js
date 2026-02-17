"use client";

import styles from "./MedicationsList.module.css";
import { v4 as uuidv4 } from "uuid";
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
import AddMedicationSchedule from "./AddMedicationSchedule";
import { useVirtualizer } from "@tanstack/react-virtual";

const Modal = forwardRef(function MedicationsModal(
	{ onAddMedication, isDuplicated },
	ref,
) {
	const [selectedDrug, setSelectedDrug] = useState(null);
	const [selectedInfoDrug, setSelectedInfoDrug] = useState(null);
	const [drugs, setDrugs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [findDrug, setFindDrug] = useState("");
	const [showTimeSelection, setShowTimeSelection] = useState(false);

	const [selectedDay, setSelectedDay] = useState("Poniedziałek");
	const [selectedTime, setSelectedTime] = useState("08:00");
	const [selectedDose, setSelectedDose] = useState(1);
	const [selectedUnit, setSelectedUnit] = useState("szt.");

	const parentRef = useRef(null);
	const rowVirtualizer = useVirtualizer({
		count: drugs.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 70,
		overscan: 5,
	});

	useEffect(() => {
		async function fetchDrugs() {
			const res = await fetch(`/api/drugs?query=${findDrug}&limit=1000&skip=0`);
			const data = await res.json();
			console.log("Fetched drugs:", data);
			setLoading(false);
			setDrugs(data);
		}
		fetchDrugs();
	}, [findDrug]);

	// const results = drugs.filter((d) =>
	// 	d.productName.toLowerCase().includes(findDrug.toLowerCase())
	// );

	const [isOpen, setIsOpen] = useState(false);

	const dialog = useRef();

	useImperativeHandle(ref, () => {
		return {
			open: (day) => {
				setSelectedDay(day);
				setIsOpen(true);
			},
			close: () => setIsOpen(false),
		};
	});

	useEffect(() => {
		if (isOpen) {
			dialog.current.showModal();
			document.body.style.overflow = "hidden";
		} else if (dialog.current?.open) {
			dialog.current.close();
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
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
				handleClose();
			}
		};

		document.addEventListener("keydown", handleEsc);

		return () => {
			document.removeEventListener("keydown", handleEsc);
		};
	}, [selectedInfoDrug]);

	function handleAddMedication(drug) {
		setSelectedDrug(drug);
		setShowTimeSelection(true);
	}

	function handleConfirmMedication() {
		if (!selectedDrug) return;
		const medication = {
			instanceId: uuidv4(),
			drugId: selectedDrug._id,
			productName: selectedDrug.productName,
			day: selectedDay,
			dose: `${selectedDose} ${selectedUnit}`,
			time: selectedTime,
		};

		if (isDuplicated && isDuplicated(medication)) {
			alert("Ten lek już jest zaplanowany na ten dzień i godzinę!");
			return;
		}

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
								<div
									ref={parentRef}
									className={styles.virtualList}
									style={{
										height: "435px",
										overflowY: "auto",
										width: "100%",
										position: "relative",
									}}
								>
									<div
										style={{
											height: `${rowVirtualizer.getTotalSize()}px`,
											width: "100%",
											position: "relative",
										}}
									>
										{rowVirtualizer.getVirtualItems().map((virtualRow) => {
											const drug = drugs[virtualRow.index];
											return (
												<div
													key={drug._id}
													className={styles.medicationItem}
													style={{
														position: "absolute",
														top: 0,
														left: 0,
														width: "100%",
														transform: `translateY(${virtualRow.start}px)`,
													}}
												>
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
											);
										})}
									</div>
								</div>
							)}
						</>
					) : (
						<AddMedicationSchedule
							onConfirm={handleConfirmMedication}
							onCanel={() => {
								setShowTimeSelection(false);
								setSelectedDrug(null);
							}}
							selectedDrug={selectedDrug}
							selectedTime={selectedTime}
							setSelectedTime={setSelectedTime}
							selectedDay={selectedDay}
							setSelectedDay={setSelectedDay}
							selectedDose={selectedDose}
							setSelectedDose={setSelectedDose}
							selectedUnit={selectedUnit}
							setSelectedUnit={setSelectedUnit}
						/>
					)}
				</div>
				{selectedInfoDrug && !showTimeSelection && (
					<SelectedDrugInfo
						selectedDrug={selectedInfoDrug}
						onClose={() => setSelectedInfoDrug(null)}
					/>
				)}
			</div>
		</dialog>,
		document.body,
	);
});

export default Modal;
