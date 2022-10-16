import { getContent } from '@packages/utils/api';
import type { JobsRequest } from '@packages/utils/types/jobs';
import type { PageServerLoad } from './$types';
import { getJobs } from '@packages/utils/queries/jobs';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const load: PageServerLoad = async () => {
	const { body } = await getContent<JobsRequest>(getJobs());
	const { items } = body.data.jobCollection;
	return { items };
};
