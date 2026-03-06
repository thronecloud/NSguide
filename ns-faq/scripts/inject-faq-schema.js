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
const { SITE_URL } = await import('../src/config.js');

const schema = getFaqSchema(SITE_URL);
const schemaJson = JSON.stringify(schema);

const indexPath = path.join(__dirname, '../index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const schemaScript = `    <script type="application/ld+json">${schemaJson}</script>`;
html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, schemaScript);

fs.writeFileSync(indexPath, html);
console.log('Injected FAQ JSON-LD schema into index.html');
