import rss from '@astrojs/rss';
import { allPosts, postUrl } from '../lib/posts';
import { SITE } from '../site.config';

export async function GET() {
  const posts = await allPosts();
  return rss({
    title: 'NoteCountingMachines.com: fake currency news and guides',
    description: 'Counterfeit note news from India and buying guides for note counting machines.',
    site: SITE,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: postUrl(p),
      categories: [p.data.category],
    })),
    customData: '<language>en-in</language>',
  });
}
