import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
	integrations: [react()],
});
