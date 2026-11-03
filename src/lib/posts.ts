import { getCollection, type CollectionEntry } from 'astro:content';
import { CATEGORIES } from '../site.config';

export type Post = CollectionEntry<'blog'> | CollectionEntry<'news'>;

export async function allPosts(): Promise<Post[]> {
  const live = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;
  const [blog, news] = await Promise.all([getCollection('blog', live), getCollection('news', live)]);
  return [...news, ...blog].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export const postUrl = (p: Post) => `/${p.collection}/${p.id}/`;

export const categoryLabel = (key: string) => CATEGORIES[key] ?? key;

export const fmtDate = (d: Date, lang = 'en') =>
  d.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Kolkata' });

export const readMinutes = (body = '') => Math.max(2, Math.round(body.split(/\s+/).length / 200));

export const PRODUCTS = {
  t800: { name: 'T-800 mix value counter', blurb: 'UV, MG, IR and MT fake note detection, 1,200 notes a minute. MRP ₹24,990.', img: '/img/t800-mix-value-note-counting-machine.webp', href: '/machines/t800-mix-value-note-counting-machine/', hiHref: '/hi/machines/t800-mix-value-note-counting-machine/', hiName: 'T-800 मिक्स वैल्यू मशीन', hiBlurb: 'UV, MG, IR और MT से नकली नोट जांच, 1,200 नोट/मिनट। MRP ₹24,990।' },
  t100: { name: 'T-100 semi value counter', blurb: 'UV, MG, IR and MT detection, 1,200 notes a minute. MRP ₹13,990.', img: '/img/t100-semi-value-note-counting-machine.webp', href: '/machines/t100-semi-value-note-counting-machine/', hiHref: '/hi/machines/t100-semi-value-note-counting-machine/', hiName: 'T-100 सेमी वैल्यू मशीन', hiBlurb: 'UV, MG, IR और MT जांच, 1,200 नोट/मिनट। MRP ₹13,990।' },
  ec442: { name: 'Kores EasyCount 442', blurb: 'UV, MG and IR detection, 900 notes a minute, runs 5 hours. MRP ₹13,750.', img: '/img/kores-easycount-442-note-counting-machine.webp', href: '/machines/kores-easycount-442-note-counting-machine/', hiHref: '/hi/machines/kores-easycount-442-note-counting-machine/', hiName: 'कोरस ईज़ीकाउंट 442', hiBlurb: 'UV, MG और IR जांच, 900 नोट/मिनट, 5 घंटे लगातार। MRP ₹13,750।' },
} as const;
