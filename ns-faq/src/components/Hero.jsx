import { REFERRAL_URL } from '../config';

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">Network School: The Honest Review</h1>
      <p className="hero-subtitle">
        This guide is written by someone who has spent multiple months living at NetworkSchool and offers practical guide with complete honesty and transparency about actually living at NS. Moving your life to a new city can be a big decision and we are here to help you make that decision by providing you with all information, tricks, and tips for your journey at NS which has been very rewarding for a lot of people.
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
