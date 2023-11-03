import { Tag } from "./tags";
import { Media } from "./media";

export interface Post {
  body: string;
  contentfulMetadata?: {
    tags?: Tag[];
  };
  description: string;
  headings?: string[];
  heroImage: Media;
  language: string;
  publicationDate: string;
  sys: {
    publishedAt: string;
  };
  slug: string;
  title: string;
}

export interface PostsRequest {
  data: {
    blogPostCollection: {
      items: Post[];
    };
  };
}
