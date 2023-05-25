import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  site: "https://ehret.me",
  server: {
    port: 5173,
  },
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: "storyblok/Page",
        feature: "storyblok/Feature",
        grid: "storyblok/Grid",
        teaser: "storyblok/Teaser",
        Post: "storyblok/Post",
      },
      apiOptions: {
        region: "eu", // optional,  or 'eu' (default)
      },
    }),
  ],
});
