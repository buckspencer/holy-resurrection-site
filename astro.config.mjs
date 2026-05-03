import node from "@astrojs/node";
import react from "@astrojs/react";
import { auditLogPlugin } from "@emdash-cms/plugin-audit-log";
import { formsPlugin } from "@emdash-cms/plugin-forms";
import emdash, { local } from "emdash/astro";
import { sqlite } from "emdash/db";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
	output: "server",
	adapter: node({ mode: "standalone" }),
	image: {
		layout: "constrained",
		experimentalResponsiveStyles: true,
	},
	integrations: [
		react(),
		emdash({
			database: sqlite({ url: "file:./data.db" }),
			storage: local({
				directory: "./uploads",
				baseUrl: "/_emdash/api/media/file",
			}),
			plugins: [
				formsPlugin(),
				auditLogPlugin(),
			],
		}),
	],
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Quando",
			cssVariable: "--font-body",
		},
		{
			provider: fontProviders.google(),
			name: "Great Vibes",
			cssVariable: "--font-quote",
		},
	],
	devToolbar: { enabled: false },
});
