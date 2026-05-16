import { REFERRAL_URL, trackReferralClick } from '../config';
import { faqItems } from '../data/faqData';
import { articles } from '../data/articleData';

const openSearch = () => window.dispatchEvent(new Event('open-search'));

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-eyebrow">An honest guide by a resident</div>
      <h1 className="hero-title">
        Network School: <em>The Honest Review</em>
      </h1>
      <p className="hero-subtitle">
        Written by someone who has spent multiple months living at Network School.
        Practical tips, real experiences, and complete transparency about life at NS.
      </p>

      <button type="button" className="hero-search-bar" onClick={openSearch}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span className="hero-search-placeholder">Search FAQs, guides, quiz...</span>
        <kbd className="hero-search-kbd">&#8984;K</kbd>
      </button>

      <div className="hero-pills">
        <a href="https://thenetworkstate.com/" className="pill" rel="noopener noreferrer" target="_blank">
          Network State
        </a>
        <a href={REFERRAL_URL} className="pill pill-primary" rel="noopener noreferrer" target="_blank" onClick={trackReferralClick}>
          Apply Now
        </a>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <span className="hero-stat-number">{faqItems.length}+</span>
          <span className="hero-stat-label">FAQs</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="hero-stat-number">{articles.length}</span>
          <span className="hero-stat-label">Guides</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="hero-stat-number">25%</span>
          <span className="hero-stat-label">Discount</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="hero-stat-number">$1,500</span>
          <span className="hero-stat-label">/month</span>
        </div>
      </div>
    </section>
  );
}
