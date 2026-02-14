"use client";

import { useState } from "react";
import styles from "./SettingsModal.module.css";

export default function SettingsModal({ onClose, onSave, initialName }) {
	const [tempName, setTempName] = useState(initialName);

	return (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<h3 className={styles.title}>Ustawienia</h3>
				<div className={styles.inputGroup}>
					<label className={styles.label}>Imię użytkownika</label>
					<input
						type="text"
						value={tempName}
						onChange={(e) => setTempName(e.target.value)}
						className={styles.input}
					/>
				</div>
				<div className={styles.buttons}>
					<button
						onClick={onClose}
						className={`${styles.btn} ${styles.cancelBtn}`}
					>
						Anuluj
					</button>
					<button
						onClick={() => onSave(tempName)}
						className={`${styles.btn} ${styles.saveBtn}`}
					>
						Zapisz
					</button>
				</div>
			</div>
		</div>
	);
}
