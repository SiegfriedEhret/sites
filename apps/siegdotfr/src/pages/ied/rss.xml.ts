import type { Post } from "@packages/utils/types/posts";
import { contentfulClient } from "../../lib/contentful";
import rss from "@astrojs/rss";

const entriesFromContentful = await contentfulClient.getEntries<Post>({
  content_type: "blogPost",
  limit: 10,
  "fields.language": "fr",
  order: "-fields.publicationDate",
});
const entriesFromRepository = Object.values(
  import.meta.glob("../../../content/posts/*.md", { eager: true })
);

const items = [
  ...entriesFromContentful.items.map((entry) => ({
    link: `https://sieg.fr/ied/${entry.fields.slug}`,
    title: entry.fields.title,
    description: entry.fields.description,
    pubDate: entry.fields.publicationDate,
  })),
  ...entriesFromRepository.map((entry) => ({
    link: `https://sieg.fr/ied/${entry.slug}`,
    title: entry.frontmatter.title,
    description: entry.frontmatter.description,
    pubDate: entry.frontmatter.date,
  })),
]
  .sort((a, b) => b.pubDate.localeCompare(a.pubDate))
  .slice(0, 10);

export function get(context) {
  return rss({
    title: "Je m'appelle Siegfried. Je suis développeur.",
    description: "Ceci est mon site personnel.",
    site: `${context.site}/ied`,
    items: items,
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
    },
    customData: `<atom:link href="${
      context.site
    }/ied/rss.xml" rel="self" type="application/rss+xml" />
<language>fr</language>
<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
  });
}
