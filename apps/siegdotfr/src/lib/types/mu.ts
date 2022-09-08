import type { Media } from './media';

export interface Album {
	title: string;
	description: string;
	slug: string;
	publicationDate: string;
	releaseDate: string;
	isReviewed: boolean;
	reviewIntroduction: string;
	reviewIntroductionHtml: string;
	review: string;
	reviewHtml: string;
	reviewConclusion: string;
	reviewConclusionHtml: string;
	tracks: string;
	tracksHtml: string;
	links: string;
	linksHtml: string;
	note: number;
	cover: Media;
}

export interface AlbumRequest {
	data: {
		albumCollection: {
			items: Album[];
		};
	};
}
