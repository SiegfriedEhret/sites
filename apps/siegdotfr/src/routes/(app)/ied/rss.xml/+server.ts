import { getFeed } from '@packages/utils/rss';
import type { RssRequest } from '../../../../lib/rss';
import { getContent } from '@packages/utils/api';
import { excludeAlbums } from '../../../../lib/content-albums';

export async function GET() {
	const query = `query getRSS {
  albumCollection(where: { isReviewed: true }) {
    items {
      title
      description
      slug
      publicationDate
    }
  }
  blogPostCollection(where: {
    OR: [
      { language_contains: "fr"}
    ]
  }) {
    items {
      title
      description
      slug
      publicationDate
    }
  }
}`;
	const { body } = await getContent<RssRequest>(query);
	const albums = body.data.albumCollection.items.map((item) => ({
		...item,
		slug: `/ied/mu/${item.slug}`
	}));
	const posts = body.data.blogPostCollection.items
		.filter((item) => excludeAlbums(item))
		.map((item) => ({ ...item, slug: `/ied/${item.slug}` }));
	const items = [...albums, ...posts].sort((a, b) =>
		b.publicationDate.localeCompare(a.publicationDate)
	);

	return new Response(
		getFeed(items, 'https://sieg.fr/ied', "Je m'appelle Siegfried. Je suis développeur."),
		{
			headers: {
				'Cache-Control': `max-age=${30 * 60 * 1e3}`,
				'Content-Type': 'text/xml; charset=UTF-8'
			}
		}
	);
}
