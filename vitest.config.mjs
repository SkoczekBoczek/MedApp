import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	oxc: {
		lang: "jsx",
		jsx: {
			runtime: "automatic",
		},
		include: /\.jsx?$/,
		exclude: /node_modules/,
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./", import.meta.url)),
		},
	},
	test: {
		environment: "jsdom",
		setupFiles: ["./vitest.setup.js"],
		passWithNoTests: true,
	},
});
