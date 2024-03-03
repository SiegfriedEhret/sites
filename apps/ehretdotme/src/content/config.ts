import { z, defineCollection } from "astro:content";

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional(),
  imageDescription: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export type PostSchema = z.infer<typeof postSchema>;

const postCollection = defineCollection({
  type: "content",
  schema: postSchema,
});

const museumSchema = ({ image }) =>
  z.object({
    year: z.string(),
    shot: z.string().optional(),
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
  });
const museumCollection = defineCollection({
  type: "content",
  schema: museumSchema,
});

export const collections = {
  posts: postCollection,
  museum: museumCollection,
};
