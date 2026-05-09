import type { APIRoute } from "astro";

const BREVO_API_KEY = import.meta.env.BREVO_API_KEY;
const TO_EMAIL = "noreply@phronemalabs.com";
const TO_NAME = "Phronema Labs";
const FROM_EMAIL = "noreply@phronemalabs.com";
const FROM_NAME = "HROC Website";

export const POST: APIRoute = async ({ request }) => {
	try {
		const formData = await request.formData();
		const firstName = formData.get("firstName")?.toString().trim() || "";
		const lastName = formData.get("lastName")?.toString().trim() || "";
		const email = formData.get("email")?.toString().trim() || "";
		const phone = formData.get("phone")?.toString().trim() || "";
		const message = formData.get("message")?.toString().trim() || "";

		// Validate required fields
		if (!firstName || !lastName || !email || !message) {
			return new Response(JSON.stringify({ error: "Missing required fields" }), {
				status: 400,
				headers: { "Content-Type": "application/json" },
			});
		}

		// Basic email validation
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

		// Send via Brevo transactional email API
		const res = await fetch("https://api.brevo.com/v3/smtp/email", {
			method: "POST",
			headers: {
				"accept": "application/json",
				"content-type": "application/json",
				"api-key": BREVO_API_KEY,
			},
			body: JSON.stringify({
				sender: { name: FROM_NAME, email: FROM_EMAIL },
				to: [{ email: TO_EMAIL, name: TO_NAME }],
				replyTo: { email, name: `${firstName} ${lastName}` },
				subject: `HROC Website Contact: ${firstName} ${lastName}`,
				htmlContent: `
					<h2>New Contact Form Submission</h2>
					<table style="border-collapse:collapse;width:100%;max-width:600px;">
						<tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${firstName} ${lastName}</td></tr>
						<tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
						${phone ? `<tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${phone}</td></tr>` : ""}
						<tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Message</td><td style="padding:8px;">${message.replace(/\n/g, "<br>")}</td></tr>
					</table>
				`,
			}),
		});

		if (!res.ok) {
			const err = await res.text();
			console.error("Brevo API error:", err);
			return new Response(JSON.stringify({ error: "Failed to send message" }), {
				status: 500,
				headers: { "Content-Type": "application/json" },
			});
		}

		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (err) {
		console.error("Contact form error:", err);
		return new Response(JSON.stringify({ error: "Server error" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
};
