import type { Post } from "@packages/utils/types/posts";
import { contentfulClient } from "../lib/contentful";
import rss from "@astrojs/rss";

const entriesFromContentful = await contentfulClient.getEntries<Post>({
  content_type: "blogPost",
  limit: 10,
  "fields.language": "en",
  order: "-fields.publicationDate",
});
const entriesFromRepository = Object.values(
  import.meta.glob("../../content/posts/*.md", { eager: true })
);

const items = [
  ...entriesFromContentful.items.map((entry) => ({
    link: `https://ehret.me/${entry.fields.slug}`,
    title: entry.fields.title,
    description: entry.fields.description,
    pubDate: entry.fields.publicationDate,
  })),
  ...entriesFromRepository.map((entry) => ({
    link: `https://ehret.me/${entry.frontmatter.slug}`,
    title: entry.frontmatter.title,
    description: entry.frontmatter.description,
    pubDate: entry.frontmatter.date,
  })),
]
  .sort((a, b) => b.pubDate.localeCompare(a.pubDate))
  .slice(0, 10);

export function get(context) {
  return rss({
    title: "I'm Siegfried. A developer. Yep.",
    description: "This is my personal website.",
    site: context.site,
    items: items,
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
    },
    customData: `<atom:link href="${
      context.site
    }/rss.xml" rel="self" type="application/rss+xml" />
<language>en</language>
<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
  });
}
