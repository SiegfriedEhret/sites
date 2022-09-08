import { getContent } from '@packages/utils/api';
import type { PostsRequest } from '@packages/utils/types/posts';
import { getNotesCollectionQuery } from '@packages/utils/queries/notes';
import type { PageServerLoad } from './$types';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const load: PageServerLoad = async () => {
	const query = getNotesCollectionQuery(10, 'en');
	const res = await getContent<PostsRequest>(query);
	const { items } = res.body.data.blogPostCollection;
	return { items };
};
