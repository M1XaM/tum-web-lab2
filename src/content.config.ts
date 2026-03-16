import { defineCollection, z } from "astro:content";

const features = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
    hidden: z.boolean().optional().default(false),
  }),
});

const pricing = defineCollection({
  schema: z.object({
    name: z.string(),
    subtitle: z.string(),
    price: z.string(),
    period: z.string(),
    features: z.array(z.string()),
    ctaLabel: z.string(),
    ctaHref: z.string(),
    highlight: z.boolean().optional().default(false),
    order: z.number(),
    hidden: z.boolean().optional().default(false),
  }),
});

const reviews = defineCollection({
  schema: z.object({
    author: z.string(),
    comment: z.string(),
    order: z.number().optional(),
    hidden: z.boolean().optional().default(false),
  }),
});

export const collections = {
  features,
  pricing,
  reviews,
};
