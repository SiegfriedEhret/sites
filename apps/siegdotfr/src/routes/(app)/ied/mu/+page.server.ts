import { getContent } from '@packages/utils/api';
import type { AlbumRequest } from '../../../../lib/types/mu';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const query = `query getAlbums {
  albumCollection {
    items {
      title
      slug
      releaseDate
      isReviewed
      note
    }
  }
}`;
	const { body } = await getContent<AlbumRequest>(query);
	const { items } = body.data.albumCollection;

	return { items };
};
