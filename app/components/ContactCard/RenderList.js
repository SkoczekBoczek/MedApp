"use client";
import styles from "./MessagesMenu.module.css";
import { X } from "lucide-react";
import Image from "next/image";
import { ChatContext } from "@/app/context/ChatContext";
import { useContext } from "react";

export default function RenderList() {
	const { chatItems, closeChat, openChat } = useContext(ChatContext);

	return (
		<>
			<header className={styles.header}>
				<h3 className={styles.title}>Wiadomości</h3>
				<button className={styles.close} onClick={closeChat}>
					<X size={20} />
				</button>
			</header>

			<div className={styles.list}>
				{chatItems.map((item) => (
					<div
						key={item._id}
						className={styles.item}
						onClick={() => openChat(item)}
					>
						<div className={styles.avatar}>
							<Image
								className={styles.doctorImg}
								src={item.image || "https://placehold.co/80x80?text=User"}
								alt={item.name}
								width={80}
								height={80}
								unoptimized
							/>
						</div>
						<div className={styles.content}>
							<div className={styles.name}>{item.name}</div>
							<div className={styles.subtitle}>Kliknij, aby otworzyć</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
