import rss from "@astrojs/rss";
import { type CollectionEntry, getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import type { APIRoute } from "astro";
import { compareDates } from "@packages/utils/date";

const parser = new MarkdownIt();

function getDescription(
  entry: CollectionEntry<"posts"> | CollectionEntry<"badidon">,
) {
  let description = "";
  try {
    description = `<![CDATA[${sanitizeHtml(parser.render(entry.body))}]]>`;
  } catch (e) {
    console.log("Failed to convert body", e);
    description = entry.data.description;
  }

  return description;
}

export const GET: APIRoute = async (context) => {
  const posts = (await getCollection("posts")).map((entry) => ({
    link: `https://sieg.fr/ied/${entry.slug}`,
    title: entry.data.title,
    description: getDescription(entry),
    pubDate: entry.data.date,
  }));

  const badidon = (await getCollection("badidon")).map((entry) => {
    const link = `${context.site}ied/badidon/${entry.slug}`;
    return {
      link,
      title: `🎙️ ${entry.data.title}`,
      description: getDescription(entry),
      pubDate: entry.data.date,
    };
  });

  const items = [...posts, ...badidon]
    .sort((a, b) => compareDates(a.pubDate, b.pubDate))
    .slice(0, 10);

  return rss({
    title: "Je m'appelle Siegfried. Je suis développeur.",
    description: "Ceci est mon site personnel.",
    site: `${(context.site as URL).href}/ied`,
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
};
