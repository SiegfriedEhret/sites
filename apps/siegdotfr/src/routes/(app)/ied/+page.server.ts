import { getContent } from '@packages/utils/api';
import type { PostsRequests } from '@packages/utils/types/posts';
import { getNotesCollectionQuery } from '@packages/utils/queries';
import type { PageServerLoad } from './$types';
import { excludeAlbums } from '../../../lib/content-albums';

export const load: PageServerLoad = async () => {
	const { body } = await getContent<PostsRequests>(getNotesCollectionQuery(10, 'fr'));
	const items = body.data.blogPostCollection.items.filter((item) => excludeAlbums(item));

	return {
		items
	};
};
