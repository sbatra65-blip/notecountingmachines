import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.notecountingmachines.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // keep scripts as files so the Content-Security-Policy can forbid inline scripts
  vite: { build: { assetsInlineLimit: 0 } },
});
