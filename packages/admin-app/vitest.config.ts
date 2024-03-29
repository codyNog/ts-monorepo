import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
	define: { "import.meta.vitest": false },
	test: {
		globals: true,
		environment: "jsdom",
		includeSource: ["src/**/*.{js,ts,tsx}"],
	},
	plugins: [react()],
	resolve: { alias: { "~": fileURLToPath(new URL("./src", import.meta.url)) } },
});
