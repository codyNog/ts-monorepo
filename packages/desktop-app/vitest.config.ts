import { defineConfig } from "vitest/config";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  define: {
    "import.meta.vitest": false,
  },
  test: {
    includeSource: ["**/*.{js,ts}"],
    exclude: ["vite.config.ts", "vitest.config.ts", "node_modules"],
  },
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
