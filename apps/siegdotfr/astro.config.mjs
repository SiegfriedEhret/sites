import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://sieg.fr",
  server: {
    port: 5174,
  },
  integrations: [alpinejs()],
});
