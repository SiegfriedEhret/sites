import type { Lang } from '@packages/utils/types/lang';
import type { ContentfulMetadata } from '@packages/utils/types/metas';
import type { Media } from '@packages/utils/types/media';

export interface BadidonBase {
	title: string;
	content: string;
	language: Lang;
	publicationDate: string;
	mediaCollection: {
		items: Media[];
	};
	contentfulMetadata: ContentfulMetadata;
}

export interface BadidonContent extends BadidonBase {
	contentHtml: string;
}

export interface BadidonRequest {
	data: {
		badidonCollection: {
			items: BadidonBase[];
		};
	};
}
