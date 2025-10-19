"use client";

import "react-big-calendar/lib/css/react-big-calendar.css";
import styles from "./CalendarCard.module.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/pl";
import { useEffect, useState } from "react";
import userToken from "@/utils/userToken";

moment.locale("pl");
const localizer = momentLocalizer(moment);

export default function CalendarCard() {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		const token = userToken();
		fetch(`/api/events?token=${token}`)
			.then((res) => res.json())
			.then((data) => {
				const formatted = data.map((event) => ({
					...event,
					start: new Date(event.start),
					end: new Date(event.end),
				}));
				setEvents(formatted);
			});
	}, []);

	function handleAddEvent(slotInfo) {
		const title = prompt("Wpisz nazwę wydarzenia");
		if (!title) return;

		const token = userToken();

		const newEvent = {
			title,
			start: slotInfo.start,
			end: slotInfo.end,
			userToken: token,
		};

		fetch("/api/events", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newEvent),
		}).then(() => {
			setEvents((prev) => [...prev, { ...newEvent }]);
		});
	}

	const upcomingEvents = events
		.filter((e) => e.start > new Date())
		.sort((a, b) => a.start - b.start)
		.splice(0, 3);

	return (
		<aside className={`${styles.calendar} ${styles.card}`}>
			<Calendar
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
				selectable
				style={{ height: 600 }}
				onSelectSlot={handleAddEvent}
			/>
			<div className={styles.upcoming}>
				<h3>Najbliższe wydarzenia:</h3>
				{upcomingEvents.length > 0 ? (
					<ul className={styles.eventList}>
						{upcomingEvents.map((upcomingEvent, i) => {
							const dayName = moment(upcomingEvent.start).format("ddd");
							const dayNumber = moment(upcomingEvent.start).format("DD");
							const eventTime = moment(upcomingEvent.start).format("HH:hh");

							return (
								<li key={i} className={styles.eventCard}>
									<div className={styles.dateBox}>
										<span className={styles.dayName}>{dayName}</span>
										<span className={styles.dayNumber}>{dayNumber}</span>
									</div>
									<div className={styles.infoBox}>
										<h4 className={styles.title}>{upcomingEvent.title}</h4>
										<div className={styles.timeBox}>{eventTime}</div>
									</div>
								</li>
							);
						})}
					</ul>
				) : (
					<p>Brak nadchodzących wydarzeń </p>
				)}
			</div>
		</aside>
	);
}
