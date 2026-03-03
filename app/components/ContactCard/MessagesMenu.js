import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { getAuthToken } from "@/utils/userToken";
import styles from "./MessagesMenu.module.css";
import RenderChat from "./RenderChat";
import RenderList from "./RenderList";

export default function MessagesMenu({
	items,
	onCloseChat,
	selectedDoctor,
	isDoctor,
}) {
	const [messages, setMessages] = useState([]);
	const [activeContact, setActiveContact] = useState(selectedDoctor);
	const [messageInput, setMessageInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!activeContact) return;

		setIsLoading(true);

		const token = getAuthToken();
		const contactId = activeContact._id;

		const queryParam = isDoctor ? `id=${contactId}` : `doctorId=${contactId}`;

		fetch(`/api/conversations?${queryParam}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
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
	}, [activeContact]);

	useEffect(() => {
		if (selectedDoctor !== null) {
			handleOpen(selectedDoctor);
		} else {
			setActiveContact(null);
		}
	}, [selectedDoctor]);

	const handleOpen = (doc) => {
		setActiveContact(doc);
	};

	async function handleSend() {
		if (!messageInput.trim()) return;

		const token = getAuthToken();
		const contactId = activeContact._id;
		const body = isDoctor
			? { recipientId: contactId, message: messageInput }
			: { doctorId: contactId, message: messageInput };

		await fetch("/api/conversations", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(body),
		});

		setMessages((prev) => [
			...prev,
			{
				id: Date.now().toString(),
				sender: isDoctor ? "doctor" : "patient",
				text: messageInput,
				timestamp: new Date(),
			},
		]);

		setMessageInput("");
	}

	return createPortal(
		<>
			<div className={styles.shell}>
				{activeContact ? (
					<RenderChat
						activeContact={activeContact}
						setActiveContact={setActiveContact}
						isDoctor={isDoctor}
						onCloseChat={onCloseChat}
						isLoading={isLoading}
						messages={messages}
						messageInput={messageInput}
						setMessageInput={setMessageInput}
						handleSend={handleSend}
					/>
				) : (
					<RenderList
						items={items}
						setActiveContact={setActiveContact}
						onCloseChat={onCloseChat}
						handleOpen={handleOpen}
					/>
				)}

				<div className={styles.tabs}>
					<div className={styles.tab}>Start</div>
					<div
						className={`${styles.tab} ${styles.active}`}
						onClick={() => setActiveContact(null)}
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
		document.body,
	);
}
