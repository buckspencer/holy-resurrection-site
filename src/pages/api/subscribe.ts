import type { APIRoute } from "astro";

const BREVO_API_KEY = import.meta.env.BREVO_API_KEY;
const HROC_LIST_ID = 2; // Default Brevo contact list; update if needed

export const POST: APIRoute = async ({ request }) => {
	try {
		const formData = await request.formData();
		const name = formData.get("name")?.toString().trim() || "";
		const email = formData.get("email")?.toString().trim() || "";

		if (!email) {
			return new Response(JSON.stringify({ error: "Email is required" }), {
				status: 400,
				headers: { "Content-Type": "application/json" },
			});
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return new Response(JSON.stringify({ error: "Invalid email address" }), {
				status: 400,
				headers: { "Content-Type": "application/json" },
			});
		}

		if (!BREVO_API_KEY) {
			console.error("BREVO_API_KEY not configured");
			return new Response(JSON.stringify({ error: "Server configuration error" }), {
				status: 500,
				headers: { "Content-Type": "application/json" },
			});
		}

		// Add contact to Brevo list
		const [firstName, ...rest] = name.split(" ");
		const lastName = rest.join(" ");

		const res = await fetch("https://api.brevo.com/v3/contacts", {
			method: "POST",
			headers: {
				"accept": "application/json",
				"content-type": "application/json",
				"api-key": BREVO_API_KEY,
			},
			body: JSON.stringify({
				email,
				attributes: {
					FIRSTNAME: firstName || "",
					LASTNAME: lastName || "",
				},
				listIds: [HROC_LIST_ID],
				updateEnabled: true,
			}),
		});

		if (!res.ok) {
			const err = await res.text();
			console.error("Brevo API error:", err);
			// 204 = already exists (with updateEnabled, this shouldn't happen)
			if (res.status !== 204) {
				return new Response(JSON.stringify({ error: "Failed to subscribe" }), {
					status: 500,
					headers: { "Content-Type": "application/json" },
				});
			}
		}

		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (err) {
		console.error("Subscribe error:", err);
		return new Response(JSON.stringify({ error: "Server error" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
};
