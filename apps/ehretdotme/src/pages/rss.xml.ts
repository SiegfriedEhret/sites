import rss from "@astrojs/rss";
import { formatDate } from "@packages/utils/date";
import { getNotes } from "@packages/utils/storyblok";

const posts = await getNotes({
  language: "en",
  page: 1,
  perPage: 5,
  token: import.meta.env.STORYBLOK_TOKEN,
});

export function get(context) {
  const items = posts.map((story) => {
    return {
      title: story.name,
      pubDate: formatDate(new Date(story.content.date)),
      description: story.content.description,
      link: `${context.site}${story.slug}`,
    };
  });

  return rss({
    // `<title>` field in output xml
    title: "I'm Siegfried. A developer. Yep.",
    // `<description>` field in output xml
    description: "This is my personal website.",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: items,
    // (optional) inject custom xml
    customData: `<language>en</language>
<lastBuildDate>${formatDate(new Date())}</lastBuildDate>`,
  });
}
