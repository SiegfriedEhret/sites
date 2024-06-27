import { defineConfig } from "astro/config";
import alpine from "@astrojs/alpinejs";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
  site: "https://ehret.me",
  integrations: [alpine()],
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
    ],
  },
  server: {
    port: 5173,
  },
});
