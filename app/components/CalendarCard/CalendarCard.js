"use client";

import "react-big-calendar/lib/css/react-big-calendar.css";
import styles from "./CalendarCard.module.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/pl";
import { useEffect, useState, useRef } from "react";
import userToken from "@/utils/userToken";
import AddEventModal from "./AddEventModal";

moment.locale("pl");
const localizer = momentLocalizer(moment);

export default function CalendarCard() {
	const [events, setEvents] = useState([]);
	const [deleteEvent, setDeleteEvent] = useState(false);
	const [selectedEvent, setSelectedEvent] = useState(false);

	useEffect(() => {
		const token = userToken();
		fetch(`/api/events?token=${token}`)
			.then((res) => res.json())
			.then((data) => {
				if (Array.isArray(data)) {
					const formatted = data.map((event) => ({
						...event,
						start: new Date(event.start),
						end: new Date(event.end),
					}));
					setEvents(formatted);
				} else {
					console.error("Invalid events data received", data);
				}
			})
			.catch((err) => console.error("Error fetching events", err));
	}, []);

	function eventPropGetter(event) {
		const isPast = new Date(event.start) < new Date();
		if (isPast) {
			return { className: "old" };
		}
		return { className: "accurate" };
	}

	function handleDeleteEvent(eventToDelete) {
		setDeleteEvent(true);
		setSelectedEvent(eventToDelete);
		setIsOpen(true);
	}

	const [selectedSlot, setSelectedSlot] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	const modal = useRef();

	function handleSelectSlot(slotInfo) {
		setSelectedSlot(slotInfo);
		setIsOpen(true);
		console.log(upcomingEvents);
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
				eventPropGetter={eventPropGetter}
				messages={{
					today: "Dziś",
					next: "Dalej",
					previous: "Wstecz",
					week: "Week",
					day: "Day",
					month: "Month",
					day: "Dzień",
					month: "Miesiąc",
				}}
				views={["month", "day"]}
				style={{ height: 600 }}
				onSelectEvent={handleDeleteEvent}
				onSelectSlot={handleSelectSlot}
			/>
			<div className={styles.upcoming}>
				<h3>Najbliższe wydarzenia:</h3>
				{upcomingEvents.length > 0 ? (
					<ul className={styles.eventList}>
						{upcomingEvents.map((upcomingEvent, i) => {
							const dayName = moment(upcomingEvent.start).format("ddd");
							const dayNumber = moment(upcomingEvent.start).format("DD");

							return (
								<li key={i} className={styles.eventCard}>
									<div className={styles.dateBox}>
										<span className={styles.dayName}>{dayName}</span>
										<span className={styles.dayNumber}>{dayNumber}</span>
									</div>
									<div className={styles.infoBox}>
										<h4 className={styles.title}>{upcomingEvent.title}</h4>
										<div className={styles.timeBox}>{upcomingEvent.time}</div>
									</div>
								</li>
							);
						})}
					</ul>
				) : (
					<p>Brak nadchodzących wydarzeń </p>
				)}
			</div>
			<AddEventModal
				ref={modal}
				isOpen={isOpen}
				slotInfo={selectedSlot}
				eventInfo={selectedEvent}
				onClose={() => {
					setIsOpen(false);
					setDeleteEvent(false);
					setSelectedEvent(null);
				}}
				setEvents={setEvents}
				deleteEvent={deleteEvent}
			></AddEventModal>
		</aside>
	);
}
