"use client";
import styles from "./MessagesMenu.module.css";
import { X } from "lucide-react";
import { useContext, useState, useRef, useEffect } from "react";
import { ChatContext } from "@/app/context/ChatContext";
import { AuthContext } from "@/app/context/AuthContext";

export default function RenderChat() {
	const { closeChat, activeContact, isLoading, messages, sendMessage } =
		useContext(ChatContext);
	const { isDoctor } = useContext(AuthContext);
	const [messageInput, setMessageInput] = useState("");

	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const handleSend = async () => {
		if (!messageInput.trim()) return;
		const text = messageInput;
		setMessageInput("");
		await sendMessage(text);
	};

	return (
		<>
			<header className={styles.header}>
				<h3 className={styles.title}>Wiadomości</h3>
				<button className={styles.back} onClick={closeChat}>
					<X size={20} />
				</button>
			</header>

			{activeContact && (
				<div className={styles.chatDoctorHeader}>
					<div className={styles.doctorName}>{activeContact.name}</div>
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

						const isMe = isDoctor
							? msg.sender === "doctor"
							: msg.sender === "patient";
						return (
							<div
								key={msg.id}
								className={isMe ? styles.patientMsg : styles.doctorMsg}
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
				<div ref={messagesEndRef} />
			</main>

			<footer className={styles.inputBar}>
				<input
					type="text"
					placeholder="Napisz wiadomość..."
					className={styles.input}
					value={messageInput}
					onChange={(e) => setMessageInput(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && handleSend()}
				/>
				<button className={styles.sendBtn} onClick={handleSend}>
					Wyślij
				</button>
			</footer>
		</>
	);
}
