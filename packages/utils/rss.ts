import { formatDate } from './date';
import { Post } from './types';

function rssItem(item: Post) {
	const { publicationDate, description, language, slug, title } = item;
	return `<item>
      <description>${description}</description>
      <link>/${language}/${slug}</link>
      <pubDate>${publicationDate}</pubDate>
      <title>${title}</title>
    </item>`;
}

export function getFeed(
	items: Post[] = [],
	link = 'https://ehret.me',
	title = "I'm Siegfried. A developer. Yep."
) {
	return `<?xml version="1.0"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <lastBuildDate>${formatDate(new Date())}</lastBuildDate>
    <link>${link}</link>
    <title>${title}</title>
    ${items.map((i) => rssItem(i)).join('')}
  </channel>
</rss>`;
}
