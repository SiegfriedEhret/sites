import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
	throw redirect(301, `/ied/${params.slug}`);
}
