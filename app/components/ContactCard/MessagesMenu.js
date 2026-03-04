"use client";

import { ChevronDown } from "lucide-react";
import { useContext } from "react";
import { createPortal } from "react-dom";
import styles from "./MessagesMenu.module.css";
import RenderChat from "./RenderChat";
import RenderList from "./RenderList";
import { ChatContext } from "@/app/context/ChatContext";

export default function MessagesMenu() {
	const { closeChat, activeContact, openChat } = useContext(ChatContext);

	return createPortal(
		<>
			<div className={styles.shell}>
				{activeContact ? <RenderChat /> : <RenderList />}

				<div className={styles.tabs}>
					<div className={styles.tab}>Start</div>
					<div
						className={`${styles.tab} ${styles.active}`}
						onClick={() => openChat(null)}
					>
						Wiadomości
					</div>
					<div className={styles.tab}>Pomoc</div>
				</div>
			</div>

			<button
				className={styles.floatingClose}
				onClick={() => {
					closeChat();
				}}
			>
				<ChevronDown className={styles.arrowIcon} size={20} />
			</button>
		</>,
		document.body,
	);
}
