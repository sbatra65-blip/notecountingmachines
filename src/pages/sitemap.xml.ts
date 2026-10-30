// Main sitemap for Google and Bing: every public page with its last-changed date.
// Posts use their updated/published date; policy pages use their `updated` date; other pages use the build date.
import type { APIRoute } from 'astro';
import { allPosts, postUrl } from '../lib/posts';
import { SITE, CATEGORIES } from '../site.config';

const day = (d: Date) => d.toISOString().slice(0, 10);

export const GET: APIRoute = async () => {
  const posts = await allPosts();
  const built = day(new Date());
  const latest = (list: typeof posts) => (list.length ? day(list.map((p) => p.data.updatedDate ?? p.data.pubDate).sort((a, b) => b.valueOf() - a.valueOf())[0]) : built);

  const urls: { loc: string; lastmod: string }[] = [
    { loc: '/', lastmod: built },
    { loc: '/news/', lastmod: latest(posts.filter((p) => p.collection === 'news')) },
    { loc: '/blog/', lastmod: latest(posts) },
  ];

  for (const cat of Object.keys(CATEGORIES).filter((k) => k !== 'counterfeit-news')) {
    urls.push({ loc: `/blog/category/${cat}/`, lastmod: latest(posts.filter((p) => p.data.category === cat)) });
  }
  for (const p of posts) urls.push({ loc: postUrl(p), lastmod: day(p.data.updatedDate ?? p.data.pubDate) });

  // Markdown pages in src/pages (about, contact, policies)
  const pages = import.meta.glob<{ frontmatter: { updated?: string } }>('./*.md', { eager: true });
  for (const [file, mod] of Object.entries(pages)) {
    const slug = file.replace('./', '').replace(/\.md$/, '');
    urls.push({ loc: `/${slug}/`, lastmod: mod.frontmatter.updated ? day(new Date(mod.frontmatter.updated)) : built });
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE}${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
