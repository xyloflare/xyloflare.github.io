import { defineCollection, z } from "astro:content";

export const collections = {
  posts: defineCollection({
    schema: z.object({
      draft: z.boolean().default(false),
      date: z.string().transform(str => new Date(str)),
      title: z.string(),
      slug: z.string().optional(),
      category: z.string(),
      tags: z.array(z.string().optional()),
      share: z.object({
        image: z.string().optional(),
        title: z.string(),
        description: z.string(),
      }).strict(),
    })
  }),
  works: defineCollection({
    schema: z.object({
      draft: z.boolean().default(false),
      date: z.string().transform(str => new Date(str)),
      title: z.string(),
      slug: z.string().optional(),
      category: z.string().optional(),
      tags: z.array(z.string().optional()),
      share: z.object({
        image: z.string().optional(),
        title: z.string(),
        description: z.string(),
      }).strict(),
    })
  }),
};
