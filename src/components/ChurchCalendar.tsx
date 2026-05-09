import { useState, useEffect, useRef, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import type { EventClickArg } from "@fullcalendar/core";

const CALENDAR_SOURCES = [
	{
		name: "Worship Services",
		googleCalendarId: "fphroc@gmail.com",
		color: "#5B1924",
		textColor: "#fff",
	},
	{
		name: "HROC Events",
		googleCalendarId: "ngc5qpqbmjcfcgnu69ign2vt58@group.calendar.google.com",
		color: "#E6BD7C",
		textColor: "#3d1018",
	},
	{
		name: "Fast Days",
		googleCalendarId: "kac7561aviq3totv40g23pr234@group.calendar.google.com",
		color: "#945643",
		textColor: "#fff",
	},
	{
		name: "Choir Calendar",
		googleCalendarId: "pvj2v0pn4f95pc7skfjp4v51uo@group.calendar.google.com",
		color: "#728158",
		textColor: "#fff",
	},
	{
		name: "Antiochian Women",
		googleCalendarId: "emu7o5mqkat1oko8j56margj0g@group.calendar.google.com",
		color: "#365A69",
		textColor: "#fff",
	},
];

interface EventDetail {
	title: string;
	start: string;
	location: string;
	description: string;
	calendarName: string;
	color: string;
}

const isMobileWidth = () => window.innerWidth < 768;

export default function ChurchCalendar({ apiKey }: { apiKey: string }) {
	const [hiddenSources, setHiddenSources] = useState<Set<string>>(new Set());
	const [eventDetail, setEventDetail] = useState<EventDetail | null>(null);
	const [showSubscribe, setShowSubscribe] = useState(false);
	const calendarRef = useRef<FullCalendar>(null);
	const modalRef = useRef<HTMLDivElement>(null);

	const handleWindowResize = useCallback(() => {
		const api = calendarRef.current?.getApi();
		if (!api) return;
		const mobile = isMobileWidth();

		if (mobile && api.view.type !== "listMonth") {
			api.changeView("listMonth");
		}

		api.setOption("headerToolbar", {
			left: "prev,next today",
			center: "title",
			right: mobile ? "listMonth,dayGridMonth" : "dayGridMonth,timeGridWeek,listMonth",
		});
	}, []);

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, [handleWindowResize]);

	const toggleSource = (calId: string) => {
		setHiddenSources((prev) => {
			const next = new Set(prev);
			if (next.has(calId)) next.delete(calId);
			else next.add(calId);
			return next;
		});
	};

	const eventSources = CALENDAR_SOURCES.filter(
		(s) => !hiddenSources.has(s.googleCalendarId)
	).map((s) => ({
		googleCalendarId: s.googleCalendarId,
		color: s.color,
		textColor: s.textColor,
	}));

	const handleEventClick = (info: EventClickArg) => {
		info.jsEvent.preventDefault();
		const event = info.event;
		const source = CALENDAR_SOURCES.find(
			(s) => s.googleCalendarId === (event.source as any)?.internalEventSource?.meta?.googleCalendarId
		);

		const start = event.start;
		const end = event.end;
		let timeStr = "";
		if (event.allDay) {
			timeStr = start?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }) || "";
		} else {
			timeStr = (start?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }) || "") +
				" " + (start?.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }) || "");
			if (end) timeStr += ` - ${end.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}`;
		}

		setEventDetail({
			title: event.title,
			start: timeStr,
			location: event.extendedProps.location || "",
			description: event.extendedProps.description || "",
			calendarName: source?.name || "Calendar",
			color: source?.color || "#5B1924",
		});
	};

	const closeModal = () => setEventDetail(null);

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeModal();
		};
		if (eventDetail) {
			document.addEventListener("keydown", handleEsc);
			modalRef.current?.focus();
		}
		return () => document.removeEventListener("keydown", handleEsc);
	}, [eventDetail]);

	const mobile = isMobileWidth();

	return (
		<div className="church-calendar">
			{/* Legend */}
			<div className="calendar-legend">
				{CALENDAR_SOURCES.map((s) => (
					<button
						key={s.googleCalendarId}
						className={`legend-item ${hiddenSources.has(s.googleCalendarId) ? "legend-hidden" : ""}`}
						onClick={() => toggleSource(s.googleCalendarId)}
						title={`${hiddenSources.has(s.googleCalendarId) ? "Show" : "Hide"} ${s.name}`}
					>
						<span
							className="legend-dot"
							style={{ backgroundColor: hiddenSources.has(s.googleCalendarId) ? "#ccc" : s.color }}
						/>
						<span className="legend-label">{s.name}</span>
					</button>
				))}
			</div>

			{/* Calendar wrapper */}
			<div className="calendar-wrapper">
			<FullCalendar
				ref={calendarRef}
				plugins={[dayGridPlugin, timeGridPlugin, listPlugin, googleCalendarPlugin]}
				initialView={mobile ? "listMonth" : "dayGridMonth"}
				googleCalendarApiKey={apiKey}
				eventSources={eventSources}
				headerToolbar={{
					left: "prev,next today",
					center: "title",
					right: mobile ? "listMonth,dayGridMonth" : "dayGridMonth,timeGridWeek,listMonth",
				}}
				buttonText={{
					today: "Today",
					month: "Month",
					week: "Week",
					list: "List",
				}}
				eventClick={handleEventClick}
				handleWindowResize={true}
				height="auto"
				nowIndicator={true}
				dayMaxEvents={3}
				fixedWeekCount={false}
			/>

			{/* Subscribe */}
			<div className="calendar-subscribe">
				<button
					className="subscribe-btn"
					onClick={() => setShowSubscribe(!showSubscribe)}
				>
					+ Add to My Calendar
				</button>
				{showSubscribe && (
					<div className="subscribe-dropdown">
						<p className="subscribe-heading">Subscribe to a calendar:</p>
						{CALENDAR_SOURCES.map((s) => {
							const icalUrl = `https://calendar.google.com/calendar/ical/${encodeURIComponent(s.googleCalendarId)}/public/basic.ics`;
							const googleUrl = `https://calendar.google.com/calendar/render?cid=${encodeURIComponent(s.googleCalendarId)}`;
							return (
								<div key={s.googleCalendarId} className="subscribe-item">
									<span className="subscribe-dot" style={{ backgroundColor: s.color }} />
									<span className="subscribe-name">{s.name}</span>
									<a href={googleUrl} target="_blank" rel="noreferrer" className="subscribe-link">Google</a>
									<a href={icalUrl} className="subscribe-link">iCal</a>
								</div>
							);
						})}
					</div>
				)}
			</div>
			</div>

			{/* Event Detail Modal */}
			{eventDetail && (
				<div className="event-modal-overlay" onClick={closeModal}>
					<div
						className="event-modal"
						ref={modalRef}
						tabIndex={-1}
						role="dialog"
						aria-label={eventDetail.title}
						onClick={(e) => e.stopPropagation()}
					>
						<button className="event-modal-close" onClick={closeModal} aria-label="Close">
							&times;
						</button>
						<div className="event-modal-badge" style={{ backgroundColor: eventDetail.color }}>
							{eventDetail.calendarName}
						</div>
						<h3 className="event-modal-title">{eventDetail.title}</h3>
						<p className="event-modal-time">{eventDetail.start}</p>
						{eventDetail.location && (
							<p className="event-modal-location">{eventDetail.location}</p>
						)}
						{eventDetail.description && (
							<div
								className="event-modal-desc"
								dangerouslySetInnerHTML={{ __html: eventDetail.description }}
							/>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
