import { REFERRAL_URL, trackReferralClick } from '../config';

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-inner">
        <h2 className="cta-title">Ready to join Network School?</h2>
        <p className="cta-subtitle">
          Apply now and become part of a frontier community for techno-optimists.
        </p>
        <a
          href={REFERRAL_URL}
          className="cta-button"
          rel="noopener noreferrer"
          target="_blank"
          onClick={trackReferralClick}
        >
          Join Network School
        </a>
      </div>
    </section>
  );
}
