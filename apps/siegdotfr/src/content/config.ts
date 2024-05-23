import { z, defineCollection } from "astro:content";

const badidonCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      audioUrl: z.string(),
      audioSize: z.number(),
      audioDuration: z.number(),
      date: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      image: image().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

const postCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      image: image().optional(),
      imageDescription: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
  badidon: badidonCollection,
  posts: postCollection,
};
