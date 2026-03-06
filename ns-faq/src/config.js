/**
 * Site configuration — update these when deploying.
 * SITE_URL is set via env in CI (e.g. GitHub Pages); fallback for local dev.
 */
export const SITE_URL = process.env.SITE_URL || 'https://example.com';
export const REFERRAL_URL = 'https://ns.com/networkschooler/invite'; // Your Network School referral link
export const SHOW_REFERRAL_CTA_ON_ALL_FAQS = true; // When true, every FAQ shows an "Apply now" link
