import { redirect } from '@sveltejs/kit';

export async function load() {
	throw redirect(301, 'https://sieg.fr/ied');
}
