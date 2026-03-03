import styles from "./MessagesMenu.module.css";
import { X } from "lucide-react";
import Image from "next/image";

export default function RenderList({
	items,
	setActiveContact,
	onCloseChat,
	handleOpen,
}) {
	return (
		<>
			<header className={styles.header}>
				<h3 className={styles.title}>Wiadomości</h3>
				<button
					className={styles.close}
					onClick={() => {
						setActiveContact(null);
						onCloseChat();
					}}
				>
					<X size={20} />
				</button>
			</header>

			<div className={styles.list}>
				{items.map((item) => (
					<div
						key={item._id}
						className={styles.item}
						onClick={() => handleOpen(item)}
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
