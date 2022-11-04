export const getNotesCollectionQuery = (limit: number, language = 'en') => {
	return `query getPosts {
  blogPostCollection(where: {
    OR: [
      { language_contains: "${language}" }
    ]
  }, order: publicationDate_DESC, skip: 0, limit: ${limit}) {
    items {
      publicationDate
      description
      language
      slug
      title
      contentfulMetadata {
        tags {
          name
        }
      }
    }
    skip
    limit
    total
  }
}
`;
};

export const getNoteQuery = (slug: string, language = 'en') => {
	return `query getPost {
  blogPostCollection(where: {
    AND: [
      { language_contains: "${language}" }
      { slug: "${slug}"}
    ]
  }, skip: 0, limit: 1) {
    items {
      body
      publicationDate
      sys {
        publishedAt
      }
      description
      language
      slug
      title
      heroImage {
        title
        url
        width
        height
      }
      contentfulMetadata {
        tags {
          name
        }
      }
    }
  }
}
`;
};
