import { config } from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

// Load env: .env.production (prod defaults), then .env (local overrides). Vercel env vars take precedence.
config({ path: path.join(root, '.env.production') });
config({ path: path.join(root, '.env') });

const { SITE_URL } = await import('../src/config.js');
const { faqItems } = await import('../src/data/faqData.js');

const urls = [
  { loc: `${SITE_URL}/`, priority: '1.0', changefreq: 'weekly' },
  ...faqItems.map((item) => ({
    loc: `${SITE_URL}/faq/${item.slug}`,
    priority: '0.8',
    changefreq: 'monthly',
  })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

const distPath = path.join(__dirname, '../dist');
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemap);

// Update robots.txt with correct sitemap URL
const robotsPath = path.join(distPath, 'robots.txt');
if (fs.existsSync(robotsPath)) {
  let robots = fs.readFileSync(robotsPath, 'utf8');
  robots = robots.replace(/Sitemap:.*/g, `Sitemap: ${SITE_URL}/sitemap.xml`);
  fs.writeFileSync(robotsPath, robots);
}

console.log(`Generated sitemap.xml with ${urls.length} URLs (base: ${SITE_URL})`);
