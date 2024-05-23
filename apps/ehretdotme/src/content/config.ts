import { defineCollection, z } from "astro:content";

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

const museumCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      year: z.string(),
      shot: z.coerce.date().optional(),
      location: z.string().optional(),
      name: z.string(),
      artistName: z.string(),
      artistBirth: z.string(),
      artistDeath: z.string().optional(),
      images: z.array(
        z.object({
          image: image(),
          imageDescription: z.string().optional(),
        }),
      ),
      description: z.string().optional(),
    }),
});

const jobCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    company: z.string(),
    url: z.string(),
    country: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    salary: z.number(),
    currency: z.string(),
    comment: z.string().optional(),
  }),
});

export const collections = {
  posts: postCollection,
  museum: museumCollection,
  jobs: jobCollection,
};
