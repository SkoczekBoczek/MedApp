import { X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import userToken from "@/utils/userToken";
import styles from "./MessagesMenu.module.css";
import Image from "next/image";

export default function MessagesMenu({ doctors, onCloseChat, selectedDoctor }) {
	const [messages, setMessages] = useState([]);
	const [activeDoctor, setActiveDoctor] = useState(selectedDoctor);
	const [messageInput, setMessageInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!activeDoctor) return;

		setIsLoading(true);

		const token = userToken();
		const doctorId = activeDoctor._id;

		fetch(`/api/conversations?token=${token}&doctorId=${doctorId}`)
			.then((res) => res.json())
			.then((data) => {
				setMessages(data?.messages || []);
			})
			.catch((err) => {
				console.error("Error fetching messages:", err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [activeDoctor]);

	useEffect(() => {
		if (selectedDoctor !== null) {
			handleOpen(selectedDoctor);
		} else {
			setActiveDoctor(null);
		}
	}, [selectedDoctor]);

	const handleOpen = (doc) => {
		setActiveDoctor(doc);
	};

	async function handleSend() {
		if (!messageInput.trim()) return;

		const token = userToken();
		const doctorId = activeDoctor._id;

		await fetch("/api/conversations", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ token, doctorId, message: messageInput }),
		});

		setMessages((prev) => [
			...prev,
			{
				id: Date.now().toString(),
				sender: "patient",
				text: messageInput,
				timestamp: new Date(),
			},
		]);

		setMessageInput("");
	}

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
				{isLoading ? (
					<div className={styles.loader}>
						<div className={styles.spinner}></div>
					</div>
				) : messages.length === 0 ? (
					<div className={styles.emptyChat}>Brak wiadomości</div>
				) : (
					messages.map((msg) => {
						const today = new Date();
						const msgDate = new Date(msg.timestamp);

						const isToday =
							msgDate.getDate() === today.getDate() &&
							msgDate.getMonth() === today.getMonth() &&
							msgDate.getFullYear() === today.getFullYear();

						return (
							<div
								key={msg.id}
								className={
									msg.sender === "patient"
										? styles.patientMsg
										: styles.doctorMsg
								}
							>
								<div className={styles.text}>{msg.text}</div>
								<div className={styles.time}>
									{isToday
										? msgDate.toLocaleTimeString([], {
												hour: "2-digit",
												minute: "2-digit",
										  })
										: msgDate.toLocaleDateString()}
								</div>
							</div>
						);
					})
				)}
			</main>

			<footer className={styles.inputBar}>
				<input
					type="text"
					placeholder="Napisz wiadomość..."
					className={styles.input}
					value={messageInput}
					onChange={(e) => setMessageInput(e.target.value)}
				/>
				<button className={styles.sendBtn} onClick={handleSend}>
					Wyślij
				</button>
			</footer>
		</>
	);

	const renderList = () => (
		<>
			<header className={styles.header}>
				<h3 className={styles.title}>Wiadomości</h3>
				<button
					className={styles.close}
					onClick={() => {
						setActiveDoctor(null);
						onCloseChat();
					}}
				>
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
						<div className={styles.avatar}>
							<Image
								className={styles.doctorImg}
								src={doc.image}
								alt={doc.name}
								width={80}
								height={80}
							/>
						</div>
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
