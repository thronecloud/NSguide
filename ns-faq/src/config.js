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
  env('VITE_SITE_URL') || env('SITE_URL') || 'https://attendNS.com';

export const REFERRAL_URL =
  env('VITE_REFERRAL_URL') || env('REFERRAL_URL') || 'https://ns.com/attendns/invite';

const ctaFlag = env('VITE_SHOW_REFERRAL_CTA');
export const SHOW_REFERRAL_CTA_ON_ALL_FAQS = ctaFlag === undefined || ctaFlag === 'true';

export const ADS_CONVERSION_SEND_TO = 'AW-18053224646/PY7dCNSrga4cEMaxuaBD';

export function trackReferralClick() {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  const transactionId =
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  window.gtag('event', 'conversion', {
    send_to: ADS_CONVERSION_SEND_TO,
    value: 1.0,
    currency: 'INR',
    transaction_id: transactionId,
  });
}
