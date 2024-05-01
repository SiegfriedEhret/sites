import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

const items = (await getCollection("posts"))
  .map((entry) => ({
    link: `https://ehret.me/${entry.slug}`,
    title: entry.data.title,
    description: entry.data.description,
    pubDate: entry.data.date,
  }))
  .sort((a, b) =>
    b.pubDate.toISOString().localeCompare(a.pubDate.toISOString())
  )
  .slice(0, 10);

export function GET(context) {
  return rss({
    title: "I'm Siegfried. A developer. Yep.",
    description: "This is my personal website.",
    site: context.site,
    items,
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
    },
    customData: `<atom:link href="${
      context.site
    }rss.xml" rel="self" type="application/rss+xml" />
<language>en</language>
<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
  });
}
