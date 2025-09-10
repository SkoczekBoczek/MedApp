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

const Modal = forwardRef(function MedicationsModal({}, ref) {
	const [selectedDrug, setSelectedDrug] = useState(null);
	const [drugs, setDrugs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [findDrug, setFindDrug] = useState("");

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
	}, [handleClose]);

	if (!isOpen) return null;

	return createPortal(
		<dialog ref={dialog} className={styles.dialogBackdrop}>
			<div className={styles.modalWrapper}>
				<div
					className={styles.modalContent}
					onClick={(e) => e.stopPropagation()}
				>
					<div className={styles.header}>
						<h2>Leki</h2>
						<button className={styles.closeBtn} onClick={handleClose}>
							&times;
						</button>
					</div>

					<input
						type="text"
						placeholder="Wyszukaj lek..."
						value={findDrug}
						onChange={(e) => setFindDrug(e.target.value)}
					></input>

					{loading ? (
						<p>Ładowanie leków...</p>
					) : (
						<div className={styles.content}>
							{results.map((drug) => (
								<div className={styles.medicationItem} key={drug._id}>
									<p>{drug.productName}</p>
									<div className={styles.buttons}>
										<button className={styles.addBtn}>Dodaj</button>
										<button
											className={styles.infoBtn}
											onClick={() => setSelectedDrug(drug)}
										>
											<Info size={18} />
										</button>
									</div>
								</div>
							))}
						</div>
					)}
				</div>

				{selectedDrug && (
					<div className={styles.detailsPanel}>
						<div className={styles.detailsHeader}>
							<h3>{selectedDrug.productName}</h3>
							<button
								onClick={() => setSelectedDrug(null)}
								className={styles.closeBtn}
							>
								&times;
							</button>
						</div>
						<div className={styles.detailsContent}>
							<p>
								<strong>Moc:</strong> {selectedDrug.strength}
							</p>
							<p>
								<strong>Rodzaj preparatu:</strong>{" "}
								{selectedDrug.preparationType}
							</p>
							<p>
								<strong>Kod ATC:</strong> {selectedDrug.atcCode}
							</p>
						</div>
					</div>
				)}
			</div>
		</dialog>,
		document.body
	);
});
export default Modal;
