import { error } from '@sveltejs/kit';
import { getContent } from '@packages/utils/api';
import type { ArtRequest } from '$lib/museum/types';
import type { PageServerLoad } from './$types';
import { getMuseumPieceQuery } from '$lib/queries/museum';
import { convert } from '$lib/content';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const load: PageServerLoad = async ({ params }) => {
	const { body } = await getContent<ArtRequest>(getMuseumPieceQuery(params.slug));
	const items = body.data.artCollection.items;
	if (Array.isArray(items) && items.length === 1) {
		const artPiece = items[0];
		artPiece.descriptionHtml = (await convert(artPiece.description ?? '')).html;
		artPiece.artist.descriptionHtml = (await convert(artPiece.artist.description ?? '')).html;
		return { artPiece };
	}

	return error(404);
};
