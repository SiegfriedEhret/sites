import { getContent } from '@packages/utils/api';
import type { PostsRequest } from '@packages/utils/types/posts';
import { getNotesCollectionQuery } from '@packages/utils/queries';
import type { PageServerLoad } from './$types';
import { excludeAlbums } from '../../../../lib/content-albums';

export const load: PageServerLoad = async () => {
	const { body } = await getContent<PostsRequest>(getNotesCollectionQuery(200, 'fr'));
	const items = body.data.blogPostCollection.items.filter((item) => excludeAlbums(item));

	return {
		items
	};
};
