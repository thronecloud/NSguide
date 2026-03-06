/**
 * App configuration — environment-aware.
 *
 * Local (npm run dev):  Uses .env — VITE_* vars for browser, SITE_URL for build scripts.
 * Production (Vercel):  Uses env vars set in Vercel dashboard; .env.production has defaults.
 *
 * Vite exposes only VITE_* prefixed vars to the client bundle.
 */

const isBrowser = typeof window !== 'undefined';
const isNode = typeof process !== 'undefined';

// SITE_URL: used for sitemap, canonical URLs, JSON-LD schema
const getSiteUrl = () => {
  if (isNode && process.env.SITE_URL) return process.env.SITE_URL;
  if (!isBrowser && process.env.SITE_URL) return process.env.SITE_URL;
  const vite = typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL;
  if (vite) return vite;
  return import.meta.env?.MODE === 'development'
    ? 'http://localhost:5173'
    : 'https://n-s-guide.vercel.app';
};

// REFERRAL_URL: apply link for CTAs
const getReferralUrl = () => {
  if (isNode && process.env.REFERRAL_URL) return process.env.REFERRAL_URL;
  const vite = typeof import.meta !== 'undefined' && import.meta.env?.VITE_REFERRAL_URL;
  return vite || 'https://ns.com/networkschooler/invite';
};

// SHOW_REFERRAL_CTA: whether to show "Apply now" on FAQ pages
const getShowReferralCta = () => {
  if (isNode && process.env.VITE_SHOW_REFERRAL_CTA !== undefined) {
    return process.env.VITE_SHOW_REFERRAL_CTA === 'true';
  }
  const vite = typeof import.meta !== 'undefined' && import.meta.env?.VITE_SHOW_REFERRAL_CTA;
  return vite === 'true' || vite === undefined;
};

export const SITE_URL = getSiteUrl();
export const REFERRAL_URL = getReferralUrl();
export const SHOW_REFERRAL_CTA_ON_ALL_FAQS = getShowReferralCta();
