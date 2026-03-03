import styles from "./MessagesMenu.module.css";
import { X } from "lucide-react";

export default function RenderChat({
	activeContact,
	setActiveContact,
	isDoctor,
	onCloseChat,
	isLoading,
	messages,
	messageInput,
	setMessageInput,
	handleSend,
}) {
	return (
		<>
			<header className={styles.header}>
				<h3 className={styles.title}>Wiadomości</h3>
				<button
					className={styles.back}
					onClick={() => {
						setActiveContact(null);
						onCloseChat();
					}}
				>
					<X size={20} />
				</button>
			</header>

			{activeContact && (
				<div className={styles.chatDoctorHeader}>
					<div className={styles.doctorName}>
						{isDoctor ? activeContact.name : `dr ${activeContact.name}`}
					</div>
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
}
