import { defineConfig } from "astro/config";
import alpine from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://ehret.me",
  integrations: [alpine()],
  server: {
    port: 5173,
  },
});
