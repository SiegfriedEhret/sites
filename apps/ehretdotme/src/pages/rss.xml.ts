import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import type { APIRoute } from "astro";
import { compareDates } from "@packages/utils/date";
import { inline_comment_plugin } from "@packages/utils/markdown-remove-comments";

const parser = new MarkdownIt().use(inline_comment_plugin);

const items = (await getCollection("posts"))
  .map((entry) => {
    let description = "";
    try {
      description = sanitizeHtml(parser.render(entry.body));
    } catch (e) {
      console.log("Failed to convert body", e);
      description = entry.data.description;
    }

    return {
      link: `https://ehret.me/${entry.slug}`,
      title: entry.data.title,
      description,
      pubDate: entry.data.date,
    };
  })
  .sort((a, b) => compareDates(a.pubDate, b.pubDate))
  .slice(0, 10);

export const GET: APIRoute = async (context) => {
  return rss({
    title: "I'm Siegfried. A developer. Yep.",
    description: "This is my personal website.",
    site: (context.site as URL).href,
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
};
