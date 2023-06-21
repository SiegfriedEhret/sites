import rss from "@astrojs/rss";
import type { Post } from "@packages/utils/types/posts";
import { formatDate } from "@packages/utils/date";
import { contentfulClient } from "../../lib/contentful";

const entries = await contentfulClient.getEntries<Post>({
  content_type: "blogPost",
  limit: 10,
  "fields.language": "fr",
  order: "-fields.publicationDate",
});

const items = entries.items.map((entry) => ({
  link: `https://sieg.fr/ied/${entry.fields.slug}`,
  title: entry.fields.title,
  description: entry.fields.description,
  pubDate: entry.fields.publicationDate,
}));

export function get(context) {
  return rss({
    // `<title>` field in output xml
    title: "Je m'appelle Siegfried. Je suis développeur.",
    // `<description>` field in output xml
    description: "Ceci est mon site personnel.",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: `${context.site}/ied`,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: items,
    // (optional) inject custom xml
    customData: `<language>fr</language>
<lastBuildDate>${formatDate(new Date())}</lastBuildDate>`,
  });
}
