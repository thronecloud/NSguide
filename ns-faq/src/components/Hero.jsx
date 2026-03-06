import { REFERRAL_URL } from '../config';

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">Frequently Asked Questions</h1>
      <p className="hero-subtitle">
        Everything you need to know before joining Network School
      </p>
      <div className="hero-pills">
        <a href="https://thenetworkstate.com/" className="pill" rel="noopener noreferrer" target="_blank">
          Network State
        </a>
        <a href={REFERRAL_URL} className="pill pill-primary" rel="noopener noreferrer" target="_blank">
          Apply Now
        </a>
        <a href="https://ns.com/reviews" className="pill" rel="noopener noreferrer" target="_blank">
          Community
        </a>
      </div>
    </section>
  );
}
