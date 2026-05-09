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
					// Try to fetch verse-by-verse data
					const verses = await fetchVerses(title);
					readings.push({ title, fullText, verses });
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

// Map liturgical book names to bible-api.com format
function normalizeBibleRef(title: string): string | null {
	// Title is like "ACTS OF THE APOSTLES 12:1-11" or "JOHN 8:31-42" or "1 CORINTHIANS 3:1-5"
	const bookMap: Record<string, string> = {
		"GENESIS": "genesis",
		"EXODUS": "exodus",
		"LEVITICUS": "leviticus",
		"NUMBERS": "numbers",
		"DEUTERONOMY": "deuteronomy",
		"JOSHUA": "joshua",
		"JUDGES": "judges",
		"RUTH": "ruth",
		"1 SAMUEL": "1 samuel",
		"2 SAMUEL": "2 samuel",
		"1 KINGS": "1 kings",
		"2 KINGS": "2 kings",
		"1 CHRONICLES": "1 chronicles",
		"2 CHRONICLES": "2 chronicles",
		"EZRA": "ezra",
		"NEHEMIAH": "nehemiah",
		"JOB": "job",
		"PSALMS": "psalms",
		"PSALM": "psalms",
		"PROVERBS": "proverbs",
		"ECCLESIASTES": "ecclesiastes",
		"SONG OF SOLOMON": "song of solomon",
		"ISAIAH": "isaiah",
		"JEREMIAH": "jeremiah",
		"LAMENTATIONS": "lamentations",
		"EZEKIEL": "ezekiel",
		"DANIEL": "daniel",
		"HOSEA": "hosea",
		"JOEL": "joel",
		"AMOS": "amos",
		"OBADIAH": "obadiah",
		"JONAH": "jonah",
		"MICAH": "micah",
		"NAHUM": "nahum",
		"HABAKKUK": "habakkuk",
		"ZEPHANIAH": "zephaniah",
		"HAGGAI": "haggai",
		"ZECHARIAH": "zechariah",
		"MALACHI": "malachi",
		"MATTHEW": "matthew",
		"MARK": "mark",
		"LUKE": "luke",
		"JOHN": "john",
		"ACTS OF THE APOSTLES": "acts",
		"ACTS": "acts",
		"ROMANS": "romans",
		"1 CORINTHIANS": "1 corinthians",
		"2 CORINTHIANS": "2 corinthians",
		"GALATIANS": "galatians",
		"EPHESIANS": "ephesians",
		"PHILIPPIANS": "philippians",
		"COLOSSIANS": "colossians",
		"1 THESSALONIANS": "1 thessalonians",
		"2 THESSALONIANS": "2 thessalonians",
		"1 TIMOTHY": "1 timothy",
		"2 TIMOTHY": "2 timothy",
		"TITUS": "titus",
		"PHILEMON": "philemon",
		"HEBREWS": "hebrews",
		"JAMES": "james",
		"1 PETER": "1 peter",
		"2 PETER": "2 peter",
		"1 JOHN": "1 john",
		"2 JOHN": "2 john",
		"3 JOHN": "3 john",
		"JUDE": "jude",
		"REVELATION": "revelation",
	};

	// Extract book name and verse reference (e.g., "ACTS OF THE APOSTLES 12:1-11")
	const match = title.match(/^(.+?)\s+(\d+:\d+(?:-\d+)?)$/);
	if (!match) return null;

	const bookName = match[1].trim();
	const verseRef = match[2];
	const mapped = bookMap[bookName];
	if (!mapped) return null;

	return `${mapped}+${verseRef}`;
}

async function fetchVerses(title: string): Promise<{ verse: number; text: string }[] | null> {
	try {
		const ref = normalizeBibleRef(title);
		if (!ref) return null;

		const res = await fetch(`https://bible-api.com/${ref}?translation=kjv`);
		if (!res.ok) return null;

		const data = await res.json();
		if (!data.verses || !Array.isArray(data.verses)) return null;

		return data.verses.map((v: any) => ({
			verse: v.verse,
			text: v.text.replace(/\n/g, " ").trim(),
		}));
	} catch {
		return null;
	}
}

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
