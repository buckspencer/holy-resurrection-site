import type { APIRoute } from "astro";

const CALENDAR_IDS = [
	{ id: "fphroc@gmail.com", name: "Worship Services" },
	{ id: "ngc5qpqbmjcfcgnu69ign2vt58@group.calendar.google.com", name: "HROC Events" },
	{ id: "kac7561aviq3totv40g23pr234@group.calendar.google.com", name: "Fast Days" },
	{ id: "pvj2v0pn4f95pc7skfjp4v51uo@group.calendar.google.com", name: "Choir Calendar" },
	{ id: "emu7o5mqkat1oko8j56margj0g@group.calendar.google.com", name: "Antiochian Women" },
];

export const GET: APIRoute = async () => {
	const apiKey = import.meta.env.PUBLIC_GOOGLE_CALENDAR_API_KEY;
	if (!apiKey) {
		return new Response(JSON.stringify([]), { headers: { "Content-Type": "application/json" } });
	}

	const now = new Date().toISOString();
	const maxResults = 4;

	try {
		const allEvents: any[] = [];

		await Promise.all(
			CALENDAR_IDS.map(async (cal) => {
				try {
					const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(cal.id)}/events?key=${apiKey}&timeMin=${now}&maxResults=${maxResults}&singleEvents=true&orderBy=startTime`;
					const res = await fetch(url);
					if (!res.ok) return;
					const data = await res.json();
					for (const item of data.items || []) {
						allEvents.push({
							title: item.summary || "",
							start: item.start?.dateTime || item.start?.date || "",
							end: item.end?.dateTime || item.end?.date || "",
							allDay: !!item.start?.date,
							calendar: cal.name,
						});
					}
				} catch {}
			})
		);

		allEvents.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());

		return new Response(JSON.stringify(allEvents.slice(0, 6)), {
			headers: {
				"Content-Type": "application/json",
				"Cache-Control": "public, max-age=900",
			},
		});
	} catch {
		return new Response(JSON.stringify([]), { headers: { "Content-Type": "application/json" } });
	}
};
