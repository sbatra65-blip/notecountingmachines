# NoteCountingMachines.com

Astro static site, hosted on Cloudflare (Workers static assets), code on GitHub. Blog and news are edited in the browser with Pages CMS; every save commits to GitHub and Cloudflare rebuilds the site in about a minute.

## 1. Put the code on GitHub

```bash
cd notecountingmachines
git init && git add . && git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-account>/notecountingmachines.git
git push -u origin main
```

## 2. Connect Cloudflare

1. Cloudflare dashboard → **Workers & Pages** → **Create application** → **Import a repository** → pick the repo.
2. Build command: `npm run build` · Deploy command: `npx wrangler deploy`.
3. Environment variable: `NODE_VERSION` = `22` (also set in `.node-version`).
4. **Save and Deploy**. You get a `*.workers.dev` link to check.
5. **Settings → Domains & Routes → Add custom domain**: `www.notecountingmachines.com` (add the bare domain too and redirect it to www).
6. **Security → Bots**: make sure *Block AI bots* is OFF, or ChatGPT / Perplexity / Gemini cannot read the site.

Every push to `main` now redeploys automatically.

## 3. Write blog posts and news (no code)

1. Go to **app.pagescms.org**, sign in with GitHub, install the Pages CMS GitHub App on this repo.
2. Open the repo. You get two sections: **Fake currency news** and **Blog & guides**.
3. **Add an entry**, fill the form, keep **Draft** ticked while writing, untick it and **Save** to publish.

The form fields map to SEO features automatically:

| Field | Becomes |
|---|---|
| Title / Meta description | `<title>` and Google snippet |
| Key takeaways | Summary box at the top; AI search engines quote these |
| FAQ | Questions at the bottom + FAQPage schema |
| Sources | Source list + `citation` schema (always fill for news) |
| Product | Machine card promoted at the end of the post |
| Category / Language | Topic pages under `/blog/category/…`, Hindi posts get `lang="hi"` |

News posts get `NewsArticle` schema, guides get `BlogPosting`, both get breadcrumbs. `/rss.xml` and `/sitemap-index.xml` update on every build.

## 4. Rules for counterfeit news and images (read before posting)

- **Do not post photos of real banknotes, front and back, at full size or in colour.** Making documents that resemble currency notes is an offence under the Bharatiya Nyaya Sanhita (the old IPC 489E). Use text, tables, close-up crops of a single feature, or RBI's own published material linked to rbi.org.in / paisaboltahai.rbi.org.in. Check with your lawyer before using any note image.
- **Never copy news articles.** Write the facts in your own words, link the source, and add what it means for shops. Quote at most one short sentence.
- **Only publish figures you can link to** (RBI, PIB, police press releases, major newspapers). Put the link in *Sources*.
- **Never explain how fakes are made** or name where to get them. Explain how to detect them.
- Fill **Updated** whenever you change facts; freshness helps both Google and AI answers.

## Enquiry form → email

The homepage form posts to `/api/enquiry` (`worker/index.ts`), which emails **notecountingmachines@zohomail.in** through Cloudflare Email Routing. The customer's email (if given) is set as Reply-To, so you can reply directly.

One-time setup (done on 23 Oct 2026, keep for reference):
1. Cloudflare → notecountingmachines.com → Email → Email Routing → Settings → **Add missing records** (MX, SPF, DKIM).
2. Email Routing → **Destination addresses** → add notecountingmachines@zohomail.in and click the link in the verification email.

To change the receiving address, edit `TO` in `worker/index.ts` and `destination_address` in `wrangler.jsonc`, then verify the new address in Email Routing.

Spam protection: a hidden honeypot field, same-site origin check and server-side validation. Add Cloudflare Turnstile later if spam appears.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run preview    # production build + worker served by wrangler (test emails saved as .eml under .wrangler/)
```

## Where things live

| Path | What |
|---|---|
| `src/site.config.ts` | Business name, address, GSTIN, phones, categories |
| `src/pages/index.astro` | Homepage (generated from the design; edit freely now) |
| `src/components/Header.astro`, `Footer.astro` | Site-wide header and footer |
| `src/content/news/`, `src/content/blog/` | Posts as Markdown (what Pages CMS edits) |
| `public/img/` | Product photos; CMS uploads go to `public/img/uploads/` |
| `public/robots.txt`, `public/llms.txt` | Crawler rules and AI-readable summary |
| `.pages.yml` | Pages CMS editor form |
