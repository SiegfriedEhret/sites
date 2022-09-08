import type { Art } from '$lib/museum/types';

export function getTitle(item: Art) {
	const title = `${item.artist.name}: ${item.name}`;
	if (item.date) {
		return `${title} (${item.date})`;
	}

	return title;
}

export function filter(items: Art[], byArtist: string) {
	return items.filter((el) => (byArtist ? el.artist.name === byArtist : true));
}
