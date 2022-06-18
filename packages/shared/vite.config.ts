import { defineConfig } from "vitest/config";
import path from "path";

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  define: {
    "import.meta.vitest": false,
  },
  resolve: { alias: { "@my/shared": path.resolve(__dirname) } },
  test: {
    includeSource: ["**/*.{js,ts}"],
    exclude: ["vite.config.ts", "node_modules"],
  },
});
