import { getContent } from '@packages/utils/api';
import type { ArtRequest } from '../../../lib/museum/types';
import { getMuseumCollection } from '../../../lib/queries/museum';
import type { PageServerLoad } from './$types';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const load: PageServerLoad = async () => {
	const { body } = await getContent<ArtRequest>(getMuseumCollection());
	return { items: body.data.artCollection.items };
};
