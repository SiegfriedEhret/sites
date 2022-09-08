import { convert } from '$lib/content';
import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getContent } from '@packages/utils/api';
import { getNoteQuery } from '@packages/utils/queries';
import type { PostsRequest } from '@packages/utils/types';

const extension = '.html';

export const load: PageServerLoad = async ({ params, url }) => {
	const { slug } = params;
	if (slug.endsWith(extension)) {
		throw redirect(301, `${url.origin}/ied/${slug.slice(0, slug.length - extension.length)}`);
	}

	const { body } = await getContent<PostRequest>(getNoteQuery(slug, 'fr'));

	const numberOfItems = body.data.blogPostCollection.items.length;
	if (numberOfItems === 0) {
		throw error(404);
	}
	const item = body.data.blogPostCollection.items[0];

	return { item, ...(await convert(item.body)) };
};
