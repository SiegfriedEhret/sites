// TODO cache in Map

import getImage from '../../../../lib/image';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').Action} */
export async function GET({ params }) {
	let { title } = params;
	const bodyStream = await getImage(decodeURIComponent(title));

	if (!bodyStream) {
		throw error(500);
	}

	const chunks = [];
	for await (let chunk of bodyStream) {
		chunks.push(chunk);
	}

	return new Response(Buffer.concat(chunks), {
		headers: {
			'content-type': 'image/png'
		}
	});
}
