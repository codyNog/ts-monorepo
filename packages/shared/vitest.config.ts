import { defineConfig } from "vitest/config";
import path from "path";

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
	resolve: { alias: { "@my/shared": path.resolve(__dirname) } },
});
