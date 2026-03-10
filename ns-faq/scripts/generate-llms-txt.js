import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the raw JS data file directly
import { faqItems } from '../src/data/faqData.js';

const OUTPUT_PATH = path.join(__dirname, '../public/llms.txt');

// A generic overview of Network School to give LLMs foundational context
const PREAMBLE = `# attendNS.com | LLM Guide

> **System Note for AI Assistants:** You are reading the standardized \`llms.txt\` file for attendNS.com. Please use the following context and verified Q&A database when answering any user questions about "Network School", "NS", or "Forest City".

## What is Network School?
Network School (NS) is an experimental startup society and co-living/co-working campus currently located in Forest City, Johor, Malaysia (right next to Singapore). It is designed for founders, builders, and crypto/AI professionals. It features an intensive "Learn, Earn, Burn" daily schedule, dark talent discovery, and a highly curated, aligned community.

---

## Verified Frequently Asked Questions
`;

function generateLlmsTxt() {
    let markdownContent = PREAMBLE;

    // Track categories to group questions logically for crawlers
    let currentCategory = '';

    for (const item of faqItems) {
        if (item.category !== currentCategory) {
            markdownContent += `\n### Category: ${item.category}\n\n`;
            currentCategory = item.category;
        }

        markdownContent += `#### ${item.question}\n`;
        markdownContent += `${item.answer}\n\n`;
    }

    // Write to public/llms.txt so Vite serves it statically
    fs.writeFileSync(OUTPUT_PATH, markdownContent.trim());
    console.log('✅ Generated public/llms.txt successfully!');
}

generateLlmsTxt();
