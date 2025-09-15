import styles from "./SelectedDrugInfo.module.css";

export default function SelectedDrugInfo({ selectedDrug, onClose }) {
	return (
		<>
			<div className={styles.mobileOverlay} onClick={onClose}></div>

			<div className={styles.detailsPanel}>
				<div className={styles.detailsHeader}>
					<h3>{selectedDrug.productName}</h3>
					<button onClick={onClose} className={styles.closeBtn}>
						&times;
					</button>
				</div>
				<div className={styles.detailsContent}>
					<p>
						<strong>Moc:</strong> {selectedDrug.strength}
					</p>
					<p>
						<strong>Rodzaj preparatu:</strong> {selectedDrug.preparationType}
					</p>
					<p>
						<strong>Kod ATC:</strong> {selectedDrug.atcCode}
					</p>
				</div>
			</div>
		</>
	);
}
