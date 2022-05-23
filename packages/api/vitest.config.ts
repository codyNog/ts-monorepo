import { defineConfig } from "vitest/config";
import AutoImport from "unplugin-auto-import/vite";
import path from "path";

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
	plugins: [
		AutoImport({
			imports: ["vitest"],
			dts: true, // generate TypeScript declaration
		}),
	],
	resolve: { alias: { "~": path.resolve(__dirname, "src") } },
});
