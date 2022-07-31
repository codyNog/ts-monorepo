import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
	plugins: [react()],
	resolve: { alias: { "~": path.resolve(__dirname + "/src") } },
	test: {
		globals: true,
		environment: "happy-dom",
		setupFiles: "vitest.setup.ts",
	},
});
