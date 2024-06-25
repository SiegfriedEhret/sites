import { z, defineCollection } from "astro:content";

const badidonCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    updatedAt: z.date(),
    audioUrl: z.string(),
    audioSize: z.number(),
    audioDuration: z.number(),
    tags: z.array(z.string()).optional(),
  }),
});

const postCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      updatedAt: z.date(),
      image: image().optional(),
      imageDescription: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
  badidon: badidonCollection,
  posts: postCollection,
};
