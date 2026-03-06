import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
