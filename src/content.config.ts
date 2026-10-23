import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Same fields for blog posts and news, so one editor form in Pages CMS works for both.
const post = z.object({
  title: z.string(),
  description: z.string().max(170),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  category: z.enum(['counterfeit-news', 'spot-fakes', 'buying-guide', 'industry', 'hindi']),
  author: z.string().default('NoteCountingMachines.com team'),
  lang: z.enum(['en', 'hi']).default('en'),
  tile: z.string(),
  tileSub: z.string().default(''),
  tileColor: z.enum(['ink', 'amber', 'mist']).default('ink'),
  takeaways: z.array(z.string()).default([]),
  product: z.enum(['t800', 't100', 'ec442', 'none']).default('t800'),
  faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
});

export const collections = {
  blog: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/blog' }), schema: post }),
  news: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/news' }), schema: post }),
};
