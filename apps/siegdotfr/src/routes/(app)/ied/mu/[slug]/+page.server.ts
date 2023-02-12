import { getContent } from '@packages/utils/api';
import { convert } from '@packages/utils/content';
import type { AlbumRequest } from '../../../../../lib/types/mu';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const query = `query getAlbum {
  albumCollection(where: {
    AND: [
      { slug: "${params.slug}"},
      { isReviewed: true }
    ]
  }, skip: 0, limit: 1) {
    items {
      title
      slug
      description
      releaseDate
      isReviewed
      reviewIntroduction
      review
      reviewConclusion
      tracks
      links
      note
      cover {
        contentType
        width
        height
        url
        title
      }
    }
  }
}`;

	try {
		const { body } = await getContent<AlbumRequest>(query);

		const item = body.data.albumCollection.items[0];
		item.reviewIntroductionHtml = await convert(item.reviewIntroduction);
		item.reviewHtml = await convert(item.review);
		item.reviewConclusionHtml = await convert(item.reviewConclusion);
		item.tracksHtml = await convert(item.tracks);
		item.linksHtml = await convert(item.links);

		return {
			item
		};
	} catch (e) {
		return error(404, e.message);
	}
};
