import { getContent } from '@packages/utils/api';
import type { PostsRequest } from '@packages/utils/types/posts';
import type { PageServerLoad } from './$types';
import { getNotesCollectionQuery } from '@packages/utils/queries/notes';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const load: PageServerLoad = async () => {
	const { body } = await getContent<PostsRequest>(getNotesCollectionQuery(200));
	const { items } = body.data.blogPostCollection;
	return { items };
};
