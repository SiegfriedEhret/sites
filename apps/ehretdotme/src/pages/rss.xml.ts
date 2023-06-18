import rss from "@astrojs/rss";
import { formatDate } from "@packages/utils/date";
import {useStoryblokApi} from "@storyblok/astro";

const storyblokApi = useStoryblokApi();

const { data } = await storyblokApi.get("cdn/stories", {
  version: import.meta.env.DEV ? "draft" : "published",
  content_type: "post",
  page: 1,
  per_page: 10,
  sort_by: "content.date:desc",
});

export function get(context) {
  const items = data.stories.map((story) => {
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
