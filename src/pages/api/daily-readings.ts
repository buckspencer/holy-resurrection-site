import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
	try {
		const response = await fetch(
			"https://antiochian.org/api/antiochian/LiturgicalDaysRssV2",
		);
		if (!response.ok) throw new Error("Failed to fetch liturgical days");

		const text = await response.text();

		// Parse XML manually without dependencies
		const items: any[] = [];
		const itemMatches = text.match(/<item>([\s\S]*?)<\/item>/g) || [];

		for (const itemXml of itemMatches) {
			const get = (tag: string) => {
				const m = itemXml.match(
					new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`),
				);
				if (m) return decodeEntities(m[1]);
				const m2 = itemXml.match(
					new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`),
				);
				return m2 ? decodeEntities(m2[1]) : "";
			};

			const readings = [];
			for (let i = 1; i <= 10; i++) {
				const title = get(`cns:Reading${i}Title`);
				const fullText = get(`cns:Reading${i}FullText`);
				if (title && fullText) {
					readings.push({ title, fullText });
				} else {
					break;
				}
			}

			items.push({
				title: get("title"),
				link: get("link"),
				dailyIcon: get("cns:DailyIcon"),
				feastDayTitle: get("cns:FeastDayTitle"),
				fastDesignation: get("cns:FastDesignation"),
				feastDayDescription: get("cns:FeastDayDescription"),
				readings,
			});
		}

		return new Response(JSON.stringify(items), {
			headers: {
				"Content-Type": "application/json",
				"Cache-Control": "public, max-age=3600",
			},
		});
	} catch (error: any) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
};

function decodeEntities(str: string): string {
	return str
		.replace(/&amp;/g, "&")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/&#x27;/g, "'")
		.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}
