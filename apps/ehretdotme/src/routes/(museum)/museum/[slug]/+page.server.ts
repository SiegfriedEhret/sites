import { error } from '@sveltejs/kit';
import { getContent } from '@packages/utils/api';
import type { ArtRequest } from '$lib/museum/types';
import type { PageServerLoad } from './$types';
import { getMuseumPieceQuery } from '$lib/queries/museum';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const load: PageServerLoad = async ({ params }) => {
	const { body } = await getContent<ArtRequest>(getMuseumPieceQuery(params.slug));
	const items = body.data.artCollection.items;
	if (Array.isArray(items) && items.length === 1) {
		const artPiece = items[0];
		return { artPiece };
	}

	return error(404);
};
