import { config } from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

// Load env: .env.production (prod defaults), then .env (local overrides). Vercel env vars take precedence.
config({ path: path.join(root, '.env.production') });
config({ path: path.join(root, '.env') });

const { getFaqSchema } = await import('../src/data/faqData.js');

const schema = getFaqSchema();

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'attendNS',
  url: 'https://attendNS.com',
  description: 'Unofficial Network School review and comprehensive guide written by a real resident. 60+ FAQs, in-depth articles on travel, accommodation, visa, food, and activities.',
};

const indexPath = path.join(__dirname, '../index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const schemaScript = `    <script type="application/ld+json">${JSON.stringify(schema)}</script>\n    <script type="application/ld+json">${JSON.stringify(orgSchema)}</script>`;
html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, schemaScript);

fs.writeFileSync(indexPath, html);
console.log('Injected FAQ JSON-LD schema into index.html');
