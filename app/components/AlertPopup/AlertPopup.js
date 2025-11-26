"use client";

import styles from "./AlertPopup.module.css";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function AlertPopup({ message, type = "error", onClose }) {
	const [exit, setExit] = useState(false);

	useEffect(() => {
		if (!message) return;
		setExit(false);

		const timeoutExit = setTimeout(() => setExit(true), 3000);
		const timeoutClose = setTimeout(() => onClose(), 4000);

		return () => {
			clearTimeout(timeoutExit);
			clearTimeout(timeoutClose);
		};
	}, [message, onClose]);

	if (!message) return null;

	return createPortal(
		<div
			className={`${styles.alertPopup} ${styles[type]} ${
				exit ? styles.exit : ""
			}`}
		>
			<p>{message}</p>
		</div>,
		document.body
	);
}
