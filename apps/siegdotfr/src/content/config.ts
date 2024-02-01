import { z, defineCollection } from "astro:content";

const badidonSchema = z.object({
  title: z.string(),
  description: z.string(),
  audioUrl: z.string(),
  date: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export type BadidonSchema = z.infer<typeof badidonSchema>;

const badidonCollection = defineCollection({
  type: "content",
  schema: badidonSchema,
});

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export type PostSchema = z.infer<typeof postSchema>;

const postCollection = defineCollection({
  type: "content",
  schema: postSchema,
});

export const collections = {
  badidon: badidonCollection,
  posts: postCollection,
};
