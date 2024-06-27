import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
  site: "https://sieg.fr",
  integrations: [alpinejs()],
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
    ],
  },
  server: {
    port: 5174,
  },
});
