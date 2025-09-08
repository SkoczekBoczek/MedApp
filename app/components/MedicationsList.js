"use client";

import styles from "./MedicationsList.module.css";
import {
	forwardRef,
	useRef,
	useImperativeHandle,
	useState,
	useEffect,
} from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function MedicationsModal({}, ref) {
	const [isOpen, setIsOpen] = useState(false);
	const medications = ["Lek 1", "Lek 2", "Lek 3", "Lek 4"];

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

	if (!isOpen) return null;

	return createPortal(
		<dialog
			ref={dialog}
			className={styles.dialogBackdrop}
			onClick={handleClose}
		>
			<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				<div className={styles.header}>
					<h2>Twoje leki</h2>
					<button className={styles.closeBtn} onClick={handleClose}>
						&times;
					</button>
				</div>

				<div className={styles.content}>
					{medications.map((med) => (
						<div className={styles.medicationItem} key={med}>
							<p>{med}</p>
							<button className={styles.addBtn}>Dodaj</button>
						</div>
					))}
				</div>
			</div>
		</dialog>,
		document.body
	);
});
export default Modal;
