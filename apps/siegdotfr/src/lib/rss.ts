import type { Album } from './types/mu';
import { Post } from '@packages/utils/types';

export interface RssRequest {
	data: {
		albumCollection: {
			items: Album[];
		};
		blogPostCollection: {
			items: Post[];
		};
	};
}
