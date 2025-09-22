import { X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import userToken from "@/utils/userToken";
import styles from "./MessagesMenu.module.css";

export default function MessagesMenu({ doctors, onCloseChat, selectedDoctor }) {
	const [messages, setMessages] = useState([]);
	const [activeDoctor, setActiveDoctor] = useState(selectedDoctor);

	useEffect(() => {
		if (!activeDoctor) return;

		const token = userToken();
		const doctorId = activeDoctor._id;

		fetch(`/api/conversations?token=${token}&doctorId=${doctorId}`)
			.then((res) => res.json())
			.then((data) => {
				setMessages(data?.messages || []);
			});
	}, [activeDoctor]);

	useEffect(() => {
		if (selectedDoctor !== null) {
			handleOpen(selectedDoctor);
		}
	}, [selectedDoctor]);

	const handleOpen = (doc) => {
		setActiveDoctor(doc);
	};

	const renderChat = () => (
		<>
			<header className={styles.header}>
				<h3 className={styles.title}>Wiadomości</h3>
				<button
					className={styles.back}
					onClick={() => {
						setActiveDoctor(null);
						onCloseChat();
					}}
				>
					<X size={20} />
				</button>
			</header>

			{activeDoctor && (
				<div className={styles.chatDoctorHeader}>
					<div className={styles.doctorName}>dr {activeDoctor.name}</div>
				</div>
			)}
			<main className={styles.chatWindow}>
				{messages.length === 0 ? (
					<div className={styles.emptyChat}>Brak wiadomości</div>
				) : (
					messages.map((msg) => (
						<div
							key={msg.id}
							className={
								msg.sender === "patient" ? styles.patientMsg : styles.doctorMsg
							}
						>
							<div className={styles.text}>{msg.text}</div>
							<div className={styles.time}>23:66</div>
						</div>
					))
				)}
			</main>

			<footer className={styles.inputBar}>
				<input
					type="text"
					placeholder="Napisz wiadomość..."
					className={styles.input}
				/>
				<button className={styles.sendBtn}>Wyślij</button>
			</footer>
		</>
	);

	const renderList = () => (
		<>
			<header className={styles.header}>
				<h3 className={styles.title}>Wiadomości</h3>
				<button className={styles.close} onClick={onCloseChat}>
					<X size={20} />
				</button>
			</header>

			<div className={styles.list}>
				{doctors.map((doc) => (
					<div
						key={doc._id}
						className={styles.item}
						onClick={() => handleOpen(doc)}
					>
						<div className={styles.avatar}></div>
						<div className={styles.content}>
							<div className={styles.name}>dr {doc.name}</div>
							<div className={styles.subtitle}>Kliknij, aby otworzyć</div>
						</div>
					</div>
				))}
			</div>
		</>
	);

	return createPortal(
		<>
			<div className={styles.shell}>
				{activeDoctor ? renderChat() : renderList()}

				<div className={styles.askBar}>
					<button className={styles.ask}>Ask a question</button>
				</div>

				<div className={styles.tabs}>
					<div className={styles.tab}>Start</div>
					<div
						className={`${styles.tab} ${styles.active}`}
						onClick={() => setActiveDoctor(null)}
					>
						Wiadomości
					</div>
					<div className={styles.tab}>Pomoc</div>
				</div>
			</div>

			<button
				className={styles.floatingClose}
				onClick={() => {
					onCloseChat();
				}}
			>
				<ChevronDown className={styles.arrowIcon} size={20} />
			</button>
		</>,
		document.body
	);
}
