"use client";

import styles from "./AddEventModal.module.css";
import { forwardRef, useState } from "react";
import { createPortal } from "react-dom";
import userToken from "@/utils/userToken";

const AddEventModal = forwardRef(function MedicationsModal(
	{ isOpen, slotInfo, onClose, setEvents },
	ref
) {
	if (!isOpen) return;

	const [time, setTime] = useState("");
	const [title, setTitle] = useState("");

	function handleClose() {
		setTitle("");
		setTime("");
		onClose();
	}

	function handleAddEvent(slotInfo) {
		if (!title || !time) return;

		const token = userToken();

		const newEvent = {
			title,
			start: slotInfo.start,
			end: slotInfo.end,
			time: time,
			userToken: token,
		};

		fetch("/api/events", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newEvent),
		}).then(() => {
			setEvents((prev) => [...prev, { ...newEvent }]);
			handleClose();
		});
	}

	return createPortal(
		<div className={styles.modalOverlay} ref={ref}>
			<div className={styles.modal}>
				<h2>Dodaj nowe wydarzenie</h2>
				<form
					className={styles.modalForm}
					onSubmit={() => handleAddEvent(slotInfo)}
				>
					<label>
						Tytuł:
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</label>

					<label>Godzina:</label>
					<input
						type="time"
						value={time}
						onChange={(e) => setTime(e.target.value)}
					/>

					<div className={styles.modalButtons}>
						<button type="submit">Dodaj</button>
						<button type="button" onClick={onClose}>
							Anuluj
						</button>
					</div>
				</form>
			</div>
		</div>,
		document.body
	);
});
export default AddEventModal;
