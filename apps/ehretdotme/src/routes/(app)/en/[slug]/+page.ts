import type { LoadEvent } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }: LoadEvent) {
	throw redirect(301, `/${params.slug}`);
}
