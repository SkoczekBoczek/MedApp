"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext({
	isOpen: false,
	messages: [],
	activeContact: null,
	chatItems: [],
	isLoading: false,
	isListLoading: true,
	openChat: () => {},
	closeChat: () => {},
	sendMessage: () => {},
});

export default function ChatContextProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState([]);
	const [activeContact, setActiveContact] = useState(null);
	const [chatItems, setChatItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isListLoading, setIsListLoading] = useState(true);

	const { token, isDoctor } = useContext(AuthContext);

	useEffect(() => {
		if (!token) {
			setChatItems([]);
			setIsListLoading(false);
			return;
		}

		const fetchChatItems = () => {
			if (isDoctor) {
				fetch("/api/conversations", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
					.then((res) => res.json())
					.then((data) => setChatItems(data.items || []))
					.catch((err) => console.error("Error fetching conversations:", err))
					.finally(() => setIsListLoading(false));
			} else {
				fetch("/api/doctors")
					.then((res) => res.json())
					.then((data) => setChatItems(data))
					.catch((err) => console.error("Error fetching doctors:", err))
					.finally(() => setIsListLoading(false));
			}
		};

		fetchChatItems();
		const interval = setInterval(fetchChatItems, 5000);
		return () => clearInterval(interval);
	}, [token, isDoctor]);

	useEffect(() => {
		if (!activeContact || !token) {
			setMessages([]);
			return;
		}

		setIsLoading(true);

		const fetchMessages = () => {
			const contactId = activeContact._id;
			const queryParam = isDoctor ? `id=${contactId}` : `doctorId=${contactId}`;

			fetch(`/api/conversations?${queryParam}`, {
				headers: { Authorization: `Bearer ${token}` },
			})
				.then((res) => res.json())
				.then((data) => {
					setMessages(data?.messages || []);
				})
				.catch((err) => console.error("Error fetching messages:", err))
				.finally(() => setIsLoading(false));
		};

		fetchMessages();
		const interval = setInterval(fetchMessages, 3000);
		return () => clearInterval(interval);
	}, [activeContact, isDoctor, token]);

	function openChat(contact) {
		setActiveContact(contact);
		setIsOpen(true);
	}

	function closeChat() {
		setIsOpen(false);
		setActiveContact(null);
	}

	async function sendMessage(text) {
		if (!text.trim() || !activeContact || !token) return;

		const contactId = activeContact._id;
		const body = isDoctor
			? { recipientId: contactId, message: text }
			: { doctorId: contactId, message: text };

		const newMessage = {
			id: Date.now().toString(),
			sender: isDoctor ? "doctor" : "patient",
			text: text,
			timestamp: new Date(),
		};
		setMessages((prev) => [...prev, newMessage]);

		try {
			await fetch("/api/conversations", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(body),
			});
		} catch (err) {
			console.error("Error sending message:", err);
		}
	}

	const chatCtx = {
		isOpen,
		messages,
		activeContact,
		chatItems,
		isLoading,
		isListLoading,
		openChat,
		closeChat,
		sendMessage,
	};
	return (
		<ChatContext.Provider value={chatCtx}>{children}</ChatContext.Provider>
	);
}
