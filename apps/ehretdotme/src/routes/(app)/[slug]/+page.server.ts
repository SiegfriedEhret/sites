import { getContent } from '@packages/utils/api';
import type { PostsRequest } from '@packages/utils/types/posts';
import { error } from '@sveltejs/kit';
import type { LoadEvent } from '@sveltejs/kit';
import { getNoteQuery } from '@packages/utils/queries/notes';
import { convert } from '@packages/utils/content';

const extension = '.html';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: LoadEvent) {
	let { slug } = params;
	if (slug.endsWith(extension)) {
		slug = slug.slice(0, slug.length - extension.length);
	}

	const result = await getContent<PostsRequest>(getNoteQuery(slug));

	const { items } = result.body.data.blogPostCollection;
	const [item] = items;
	if (!item) {
		throw error(404);
	}
	return { item, ...(await convert(item.body)) };
}
