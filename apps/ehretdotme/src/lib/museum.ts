import type { CollectionEntry } from "astro:content";
import slugify from "slugify";

export function getTitle(item: CollectionEntry<"museum">) {
  const title = `${item.data.artistName}: ${item.data.name}`;
  if (item.data.year) {
    return `${title} (${item.data.year})`;
  }

  return title;
}

export function getSlug(item: CollectionEntry<"museum">) {
  const { artistName, name, year } = item.data;
  const remove = /[*+~.,()'"!:@]/g;
  return slugify(`${artistName} ${name} ${year}`, { lower: true, remove });
}
