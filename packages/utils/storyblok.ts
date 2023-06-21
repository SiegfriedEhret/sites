const maxPerPage = 100;
const version = 'published';

export async function doFetch(
	token: string,
	query: string,
	variables: Record<string, string | number>
) {
	const res = await fetch('https://gapi.storyblok.com/v1/api', {
		method: 'POST',
		headers: {
			Token: token,
			Version: version
		},
		body: JSON.stringify({
			query,
			variables
		})
	});

	return await res.json();
}

async function paginate(
	page = 1,
	query: string,
	variables: Record<string, string | number>,
	token = ''
) {
	const result = await doFetch(token, query, {...variables, page} );
	const { total, items } = result.data.PostItems;
	if (page * maxPerPage < total) {
		return [...items, ...(await paginate(page + 1, query, variables, token))];
	} else {
		return items;
	}
}

type Language = 'en' | 'fr' | 'test';
type Options = { language?: Language; page?: number; perPage?: number; token?: string };

export async function getNumberOfNotes(options: Options): Promise<number> {
	const { language = 'en', token = '' } = options;
	const query = `query getNumberOfPosts {
  PostItems(filter_query: {language: {in: ${language}}}, per_page: 0, page: 1) {
    total
  }
}`;
	const result = await doFetch(token, query, {});
	const { total } = result.data.PostItems;
	return total;
}

export async function getAllNotes(options: Options) {
	const { language = 'en', page = 1, perPage = maxPerPage, token = '' } = options;
	const query = `query($page: Int!, $perPage: Int!) {
  PostItems(filter_query: {language: {in: ${language}}}, per_page: $perPage, page: $page, sort_by: "content.date:desc") {
    total
    items {
      name
      slug
      content {
        component
        date
        content
        image {
          alt
          filename
        }
      }
    }
  }
}`;
	const variables = {
		language,
		perPage
	};

	return paginate(page, query, variables, token);
}

export async function getNotes(options: Options) {
	const { language = 'en', page = 1, perPage = 10, token = '' } = options;
	const query = `query($page: Int!, $perPage: Int!) {
  PostItems(filter_query: {language: {in: ${language}}}, per_page: $perPage, page: $page, sort_by: "content.date:desc") {
    total
    items {
      name
      slug
      content {
        component
        date
        description
      }
    }
  }
}`;
	const variables = {
		language,
		perPage
	};

	const result = await doFetch(token, query, {...variables, page});
	const { items } = result.data.PostItems;
	return items;
}
