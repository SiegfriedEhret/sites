import type { Media } from "@packages/utils/types/media";

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

export function getTitle(item: Art) {
  const title = `${item.artist}: ${item.name}`;
  if (item.date) {
    return `${title} (${item.date})`;
  }

  return title;
}

export function filter(items: Art[], byArtist: string) {
  return items.filter((el) => (byArtist ? el.artist.name === byArtist : true));
}
