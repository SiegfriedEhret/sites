import { Tag } from './tags';
import { Media } from './media';

export interface Job {
	title: string;
	company: string;
	url: string;
	startDate: string;
	endDate: string;
	salary: number;
	currency: string;
	bonus: number;
	bonusDescription: string;
	comment: string;
}

export interface JobsRequest {
	data: {
		jobCollection: {
			items: Job[];
		};
	};
}
