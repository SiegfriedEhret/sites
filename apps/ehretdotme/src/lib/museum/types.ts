import type { Media } from '@packages/utils/types/media';

export interface Artist {
	dateOfBirth: string;
	dateOfDeath: string;
	description: string;
	descriptionHtml: string;
	name: string;
}

export interface Art {
	artist: Artist;
	date: string;
	description: string;
	descriptionHtml: string;
	location: {
		name: string;
	};
	mediaCollection: {
		items: Media[];
	};
	name: string;
	shot: string;
	slug: string;
}

export interface ArtRequest {
	data: {
		artCollection: {
			items: Art[];
		};
	};
}
