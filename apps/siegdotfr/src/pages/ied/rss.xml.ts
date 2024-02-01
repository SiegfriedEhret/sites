import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

const items = (await getCollection("posts"))
  .map((entry) => ({
    link: `https://sieg.fr/ied/${entry.slug}`,
    title: entry.data.title,
    description: entry.data.description,
    pubDate: entry.data.date,
  }))
  .sort((a, b) =>
    b.pubDate.toISOString().localeCompare(a.pubDate.toISOString()),
  )
  .slice(0, 10);

export function GET(context) {
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
