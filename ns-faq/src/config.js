/**
 * App configuration — environment-aware.
 *
 * Browser (Vite dev/prod): reads import.meta.env.VITE_* vars.
 * Node.js (build scripts): reads process.env after dotenv loads.
 *
 * Each getter tries import.meta.env first, then process.env, then a default.
 */

/* eslint-disable-next-line no-undef */
const proc = typeof process !== 'undefined' ? process.env : {};
const env = (key) => import.meta.env?.[key] ?? proc[key];

export const SITE_URL =
  env('VITE_SITE_URL') || env('SITE_URL') || 'https://n-s-guide.vercel.app';

export const REFERRAL_URL =
  env('VITE_REFERRAL_URL') || env('REFERRAL_URL') || 'https://ns.com/networkschooler/invite';

const ctaFlag = env('VITE_SHOW_REFERRAL_CTA');
export const SHOW_REFERRAL_CTA_ON_ALL_FAQS = ctaFlag === undefined || ctaFlag === 'true';
