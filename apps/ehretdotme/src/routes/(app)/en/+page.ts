import { redirect } from '@sveltejs/kit';
import type { LoadEvent } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params, url }: LoadEvent) {
	throw redirect(301, `${url.origin}/${params.url}`);
}
