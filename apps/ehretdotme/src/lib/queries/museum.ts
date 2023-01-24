export const getMuseumCollection = () => `query getArt {
  artCollection {
    items {
      artist {
        name
      }
      name
      slug
      mediaCollection {
        items {
          thumbnail: url(transform: {
            width: 300,
            quality: 50
          })
        }
      }
    }
  }
}
`;

export const getMuseumPieceQuery = (slug: string) => `query getArt {
  artCollection(where: {slug: "${slug}"}, skip: 0, limit: 1) {
    items {
      artist {
        name
        dateOfBirth
        dateOfDeath
      }
      description
      name
      date
      location {
        name
        address
      }
      shot
      mediaCollection {
        items {
          url
        }
      }
    }
  }
}
`;
