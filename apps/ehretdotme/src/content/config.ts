import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      updatedAt: z.date(),
      // date: z.string().transform((str) => new Date(str)),
      // updatedAt: z.string().transform((str) => new Date(str)),
      image: image().optional(),
      imageDescription: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

const museumCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      year: z.string(),
      shot: z.date(),
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
  type: "data",
  schema: z.object({
    title: z.string(),
    company: z.string(),
    url: z.string(),
    country: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    salary: z.number(),
    variable: z.number().optional(),
    bonus: z.number().optional(),
    bonusDescription: z.string().optional(),
    currency: z.string(),
    comment: z.string().optional(),
  }),
});

export const collections = {
  posts: postCollection,
  museum: museumCollection,
  jobs: jobCollection,
};
