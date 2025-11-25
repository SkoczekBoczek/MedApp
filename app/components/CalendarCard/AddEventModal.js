"use client";

import styles from "./AddEventModal.module.css";
import { forwardRef, useState } from "react";
import { createPortal } from "react-dom";
import userToken from "@/utils/userToken";

const AddEventModal = forwardRef(function MedicationsModal(
	{ isOpen, slotInfo, onClose, setEvents, deleteEvent, eventInfo },
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

	function handleDelete() {
		if (!eventInfo) return;

		fetch(`api/events?eventId=${eventInfo._id}`, {
			method: "DELETE",
		}).then((res) => {
			if (res.ok) {
				setEvents((prevEvents) =>
					prevEvents.filter((event) => event._id !== eventInfo._id)
				);
				handleClose();
			} else {
				console.error("Nie udało się usunąć wydarzenia.");
			}
		});
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
				<div className={styles.header}>
					{!deleteEvent ? (
						<h2>Dodaj nowe wydarzenie</h2>
					) : (
						<h2>Usuń wydarzenie</h2>
					)}
					<button className={styles.closeBtn} onClick={handleClose}>
						&times;
					</button>
				</div>
				{!deleteEvent ? (
					<form
						className={styles.modalForm}
						onSubmit={() => handleAddEvent(slotInfo)}
					>
						<label>Tytuł:</label>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className={styles.titleInput}
						/>

						<label>Godzina:</label>
						<input
							type="time"
							value={time}
							onChange={(e) => setTime(e.target.value)}
							className={styles.timeInput}
						/>

						<div className={styles.modalButtons}>
							<button type="submit" className={styles.addBtn}>
								Dodaj
							</button>
							<button
								type="button"
								className={styles.cancelBtn}
								onClick={onClose}
							>
								Anuluj
							</button>
						</div>
					</form>
				) : (
					<div className={styles.deleteConfirm}>
						<p>
							Czy na pewno chcesz usunąć wydarzenie:{" "}
							<strong>{eventInfo?.title}</strong>?
						</p>
						<div className={styles.modalButtons}>
							<button onClick={handleDelete} className={styles.deleteBtn}>
								Usuń
							</button>
							<button
								type="button"
								className={styles.cancelBtn}
								onClick={onClose}
							>
								Anuluj
							</button>
						</div>
					</div>
				)}
			</div>
		</div>,
		document.body
	);
});
export default AddEventModal;
