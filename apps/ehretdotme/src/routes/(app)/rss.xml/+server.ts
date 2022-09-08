import { getFeed } from '@packages/utils/rss';
import { getContent } from '@packages/utils/api';
import type { PostsRequest } from '@packages/utils/types/posts';
import { getNotesCollectionQuery } from '@packages/utils/queries/notes';

export async function GET() {
	const { body } = await getContent<PostsRequest>(getNotesCollectionQuery(10));
	const { items } = body.data.blogPostCollection;

	return new Response(getFeed(items), {
		headers: {
			'Cache-Control': `max-age=${30 * 60 * 1e3}`,
			'Content-Type': 'text/xml; charset=UTF-8'
		}
	});
}
