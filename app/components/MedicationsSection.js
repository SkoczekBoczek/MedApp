"use client";
import styles from "./MedicationsSection.module.css";
import MedicationsModal from "./MedicationsList";
import { useRef } from "react";

export default function MedicationsSection() {
	const modal = useRef();

	function showModal() {
		modal.current.open();
		// return;
	}

	return (
		<section className={`${styles.bigBox} card`}>
			<MedicationsModal ref={modal}></MedicationsModal>
			<button className={styles.showModalBtn} onClick={showModal}>
				<i className="fa-solid fa-circle-plus"></i>
			</button>
		</section>
	);
}
