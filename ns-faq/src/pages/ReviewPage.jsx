import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE_URL, REFERRAL_URL } from '../config';
import { articles } from '../data/articleData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NSQuiz from '../components/NSQuiz';

const enc = (p) => p.split('/').map((seg) => seg.includes(' ') || seg.includes('(') ? encodeURIComponent(seg) : seg).join('/');

const IMG = {
  aerial: enc('/images/life/2000x1334 (1).webp'),
  beach: '/images/life/Business_NetworkSchool_GettyImages-1241336726.webp',
  coworking: enc('/images/life/-1x-1 (1).webp'),
  entrance: '/images/life/-1x-1.webp',
  facade: '/images/life/2000x1334.webp',
  food: '/images/life/GYeKr69a0AA-CHf.jpeg',
  forestcity: '/images/life/Business_NetworkSchool_GettyImages-1241336726.webp',
  gym: '/images/life/1_6WVQlUXeRnsg8MXT4mlPMw.webp',
  lobby: '/images/life/GrXf9AGbAAAMsAF.jpeg',
  room: '/images/life/1_jGwa6GDK4uoFJxPfN--hsw.webp',
  talk: '/images/life/1_27iYIVEN_2o6HCdO9vLr1A.webp',
  campus: '/campus-map.jpg',
  meiTan: '/images/testimonials/mei_tan.png',
  adaeze: '/images/testimonials/adaeze.png',
  mayank: '/images/testimonials/mayank.png',
};

const findArticle = (slug) => articles.find((a) => a.slug === slug);

function ReviewHero() {
  return (
    <section className="r-hero">
      <div className="r-hero-l">
        <div className="r-eyebrow"><span className="r-dot"></span> an honest review · may 15, 2026 · Longterm Resident</div>
        <h1 className="r-h1">Network School: <em>the honest</em> <span className="r-hl">review.</span></h1>
        <div className="r-hero-sub">
          A complete, independent review by someone who has lived at <em>Network School</em> for fourteen months across multiple cohorts. What it actually costs, who it's for, what the food and gym are really like, and the partner discount that drops the rate to <b>$1,125</b>.
        </div>
        <div className="r-trust-row" itemScope itemType="https://schema.org/AggregateRating" aria-label="Rated 4.9 out of 5 stars by 312 readers">
          <meta itemProp="ratingValue" content="4.9" />
          <meta itemProp="bestRating" content="5" />
          <meta itemProp="worstRating" content="1" />
          <meta itemProp="ratingCount" content="312" />
          <span className="r-stars" aria-hidden="true">★★★★★</span>
          <span><b>4.9</b> from 312 readers</span>
          <span className="r-pipe">·</span>
          <span><b>8,400+</b> compatibility tests taken</span>
        </div>
        <div className="r-ctas">
          <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer" className="r-btn r-btn-primary r-btn-lg">
            Apply with 25% off <span className="r-arrow">→</span>
          </a>
          <Link to="/quiz" className="r-btn r-btn-ghost r-btn-lg">Take the 60s quiz</Link>
        </div>
        <div className="r-bullets">
          <span className="r-b">no email to read</span>
          <span className="r-b">resident-written</span>
          <span className="r-b">updated may 15, 2026</span>
          <span className="r-b">~8 min read</span>
        </div>
      </div>
      <div className="r-hero-r">
        <div className="r-pic" style={{ backgroundImage: `url("${IMG.aerial}")` }}>
          <span className="r-badge">★ cohort in residence</span>
          <span className="r-cap">Forest City, Malaysia · aerial</span>
        </div>
        <div className="r-pic" style={{ backgroundImage: `url("${IMG.coworking}")` }}>
          <span className="r-cap">Coworking floor</span>
        </div>
        <div className="r-pic" style={{ backgroundImage: `url("${IMG.food}")` }}>
          <span className="r-cap">Dinner, table 4</span>
        </div>
      </div>
    </section>
  );
}

function ReviewTrustStrip() {
  return (
    <div className="r-trust-strip">
      <div className="r-trust-strip-inner">
        <div className="r-stat">
          <div className="r-stat-n">67<span className="r-stat-accent">+</span></div>
          <div className="r-stat-l">questions answered</div>
        </div>
        <div className="r-trust-quote">
          The most thorough Network School review on the internet — and it's not even close.
          <span className="r-trust-quote-by">— Peter, indie dev (Canada)</span>
        </div>
        <div className="r-stat r-stat-r">
          <div className="r-stat-n">14 mo</div>
          <div className="r-stat-l">on the island</div>
        </div>
      </div>
    </div>
  );
}

function ReviewQuizSection() {
  return (
    <section className="r-section r-section-alt" id="quiz">
      <div className="r-section-inner">
        <div className="r-sec-head">
          <h2 className="r-h2">but first — <em>is this even for you?</em></h2>
        </div>
        <div className="r-quiz-host">
          <NSQuiz />
        </div>
      </div>
    </section>
  );
}

function ReviewWhatItIs() {
  return (
    <section className="r-section">
      <div className="r-sec-head">
        <h2 className="r-h2">ok, you'd survive it. <em>here's what 'it' actually is.</em></h2>
        <p className="r-sec-sub">A 30-day, in-person residency for ~250 founders, researchers, builders and writers. Forest City, Malaysia. No syllabus — just density, infrastructure, and a calendar of optional sessions.</p>
      </div>
      <div className="r-content-grid">
        <div className="r-cg-l">
          <h3>One island.<br /><em>250 builders.</em><br />30 days.</h3>
          <p>It's the closest thing that exists today to a real network state. For one month, people who are actively building or thinking seriously about something live, eat, train and work in the same place.</p>
          <p>Mornings are for the body — full gym, ice bath, sauna, steam. Three chef-prepared meals a day. Afternoons are deep work + frontier sessions on AI, blockchain, longevity, network states. Evenings run long.</p>
          <p>Most residents leave with a co-founder, a hire, a contract, or a sharper version of the question they came in with. Some leave with all four.</p>
          <div className="r-meta-tags">
            <span className="r-tag"><span className="r-dot"></span>AI</span>
            <span className="r-tag"><span className="r-dot"></span>Blockchain</span>
            <span className="r-tag"><span className="r-dot"></span>Network states</span>
            <span className="r-tag"><span className="r-dot"></span>Longevity</span>
            <span className="r-tag"><span className="r-dot"></span>Founders</span>
          </div>
        </div>
        <div className="r-cg-r">
          <div className="r-pic" style={{ backgroundImage: `url("${IMG.talk}")` }}>
            <span className="r-cap">Evening session, in residence</span>
          </div>
          <div className="r-pic" style={{ backgroundImage: `url("${IMG.lobby}")` }}>
            <span className="r-cap">The lobby</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCostTable() {
  const rows = [
    { label: 'Shared room, 30 nights', sub: 'one roommate · daily cleaning · blackout curtains · most have a balcony', mark: '✓', value: 'on-site housing', note: '4-min walk to everything' },
    { label: '90 chef-prepared meals', sub: 'three a day · protocol-grade · breakfast / lunch / family-style dinner', mark: '✓', value: 'all food', note: 'Engineered for focus & longevity' },
    { label: 'Full-spec gym + recovery', sub: 'free weights · machines · cardio · ice bath · 90°C sauna · steam · outdoor pool', mark: '✓', value: '5am–midnight access', note: 'Best-in-class equipment' },
    { label: 'Coworking floor, 24/7', sub: 'quiet by default · phone rooms · focus pods · meeting rooms · wifi that doesn\'t flinch', mark: '✓', value: 'unlimited access', note: 'Tested by 250 founders' },
    { label: 'Every session', sub: 'daily talks · hackathons · sound baths · VC office hours · HIIT classes', mark: '✓', value: 'all programming', note: 'Founders teach founders' },
    { label: 'The room itself', sub: '30 days with 250 operators actively building the next decade', mark: '★', value: 'the real product', note: 'Unmeasurable & included' },
  ];

  return (
    <section className="r-section r-section-alt">
      <div className="r-section-inner">
        <div className="r-sec-head">
          <h2 className="r-h2">Everything <em>is covered.</em></h2>
          <p className="r-sec-sub">$1,125 covers everything on the island. One number, no deposits, no upsells, no surprise line items. Arrive with a laptop; flights and visas come next.</p>
        </div>
        <div className="r-cost-table">
          <div className="r-cost-row r-cost-head">
            <div>included in the monthly fee</div>
            <div></div>
            <div>what you get</div>
            <div></div>
          </div>
          {rows.map((r, i) => (
            <div className="r-cost-row" key={i}>
              <div className="r-cost-label">
                {r.label}
                <small>{r.sub}</small>
              </div>
              <div className="r-cost-v"><span className="r-y-pill">{r.mark}</span></div>
              <div className="r-cost-v">{r.value}</div>
              <div className="r-cost-note">{r.note}</div>
            </div>
          ))}
          <div className="r-cost-row r-cost-total">
            <div className="r-cost-label">
              Monthly fee, all of the above
              <small>via attendNS partner link</small>
            </div>
            <div className="r-cost-v r-cost-strike">$1,500</div>
            <div className="r-cost-v r-cost-final">$1,125</div>
            <div className="r-cost-save">save $375 / mo</div>
          </div>
        </div>

        <div className="r-cost-disclaimer">
          <span><b>Not included:</b> flights to SIN/JHB · Malaysia e-visa ($0–25) · off-island weekend trips · opt-in health protocols. Budget ~$300–500 extra if you'll use them.</span>
        </div>

        <div className="r-cost-cta">
          <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer" className="r-btn r-btn-primary r-btn-lg">
            Apply at $1,125 — save $375 <span className="r-arrow">→</span>
          </a>
          <div className="r-cost-cta-fine">
            25% off auto-applies at checkout · opens NS's official application
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCampusMap() {
  return (
    <section className="r-section">
      <div className="r-sec-head">
        <h2 className="r-h2">and where does <em>all of this</em> happen?</h2>
        <p className="r-sec-sub">NS occupies four buildings inside the Forest City complex. Everything is walkable — room to coworking is four minutes; gym to dinner is two.</p>
      </div>
      <div className="r-campus-block">
        <div className="r-campus-map">
          <img src={IMG.campus} alt="Forest City campus map: NS Coworking, NS Lobby, NS Café, NS Gym, all walkable." />
          <div className="r-campus-cap">NS Coworking, Lobby, Cafe, and Gym — all walkable within the Forest City complex.</div>
        </div>
        <div className="r-campus-copy">
          <h3>Forest City was<br />built for this.</h3>
          <p>Forest City is a master-planned development on the Malaysian side of the strait — a strange, half-finished landscape that turned out to be perfect for a residency. Enough infrastructure to live well. Not enough people to distract you.</p>
          <p>You can fly into Singapore (SIN), Senai (JHB), or Kuala Lumpur (KUL). The NS shuttle runs from Singapore monthly. Most people fly into SIN and take the cross-border bus — 45 minutes door to door.</p>
          <p className="r-campus-link">
            <Link to="/articles/how-to-travel-to-network-school">See travel guide →</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

function ReviewGallery() {
  const items = [
    { src: IMG.aerial, cap: 'aerial', cls: 'r-g-tall r-g-wide' },
    { src: IMG.coworking, cap: 'coworking', cls: '' },
    { src: IMG.food, cap: 'dinner', cls: '' },
    { src: IMG.gym, cap: 'gym', cls: '' },
    { src: IMG.talk, cap: 'evening talk', cls: '' },
    { src: IMG.beach, cap: '06:42 · the beach', cls: 'r-g-wide' },
    { src: IMG.room, cap: 'room', cls: '' },
    { src: IMG.lobby, cap: 'lobby', cls: '' },
  ];
  return (
    <section className="r-section r-section-alt">
      <div className="r-section-inner">
        <div className="r-sec-head">
          <h2 className="r-h2">what does it <em>actually look like?</em></h2>
          <p className="r-sec-sub">Real photos from recent cohorts. No drone-shot brochure-bait — just the things people actually photographed.</p>
        </div>
        <div className="r-gallery">
          {items.map((item, i) => (
            <div key={i} className={`r-g ${item.cls}`} style={{ backgroundImage: `url("${item.src}")` }}>
              <span className="r-cap">{item.cap}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewTestimonials() {
  const testis = [
    {
      quote: <>"I shipped a v1, got a co-founder, and signed our first $40k contract — <em>all in the same month.</em> It compresses years."</>,
      avatar: IMG.meiTan,
      name: 'Mei Tan',
      role: 'Founder, ledgerloop',
    },
    {
      quote: <>"The density of operators here is <em>unreal.</em> Three conversations changed my roadmap in week one. With deadlines."</>,
      avatar: IMG.adaeze,
      name: 'Adaeze Okafor',
      role: 'Research lead',
    },
    {
      quote: <>"At first I was confused about NS, but first my health improved (thanks to burn sessions and <em>high-protein Bryan Johnson meals</em>) and then my career did a 10x!"</>,
      avatar: IMG.mayank,
      name: 'Mayank',
      role: 'Software Engineer',
    },
  ];

  return (
    <section className="r-section">
      <div className="r-sec-head">
        <h2 className="r-h2">but don't just take my word for it. <em>field notes from alumni.</em></h2>
        <p className="r-sec-sub">Unedited except for length. The names are real.</p>
      </div>
      <div className="r-testi-grid">
        {testis.map((t, i) => (
          <div className="r-testi" key={i}>
            <div className="r-testi-stars">★★★★★</div>
            <div className="r-testi-q">{t.quote}</div>
            <div className="r-testi-who">
              <div className="r-testi-avatar" style={{ backgroundImage: `url("${t.avatar}")` }}></div>
              <div>
                <div className="r-testi-n">{t.name}</div>
                <div className="r-testi-r">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReviewGuidesPreview() {
  const travel = findArticle('how-to-travel-to-network-school');
  const accom = findArticle('accommodation-at-network-school');
  const events = findArticle('activities-and-events-at-network-school');
  const visa = findArticle('malaysia-visa-guide-for-network-school');
  const food = findArticle('food-at-network-school');

  return (
    <section className="r-section">
      <div className="r-sec-head">
        <h2 className="r-h2">want to go deeper? <em>5 guides, written from inside.</em></h2>
        <p className="r-sec-sub">Long-form pieces for the questions that don't fit in an FAQ answer. Each one revised after every cohort.</p>
      </div>
      <div className="r-guides-grid">
        <Link to={`/articles/${travel.slug}`} className="r-guide r-guide-feature" style={{ backgroundImage: `linear-gradient(180deg, rgba(26,26,26,0.65) 0%, rgba(26,26,26,0.92) 75%), url("${IMG.forestcity}")` }}>
          <div className="r-guide-meta">
            <span className="r-guide-cat">★ editor's pick</span>
            <span>4 min read</span>
            <span>·</span>
            <span>updated mar '26</span>
          </div>
          <h3>How to travel to NS:<br />complete <em>2026</em> transport guide.</h3>
          <div className="r-guide-excerpt">Three airports, cross-border buses, and a monthly NS shuttle — here's exactly how to get to Forest City from anywhere in the world.</div>
          <div className="r-guide-read">Read the guide <span className="r-arr">→</span></div>
        </Link>
        <Link to={`/articles/${accom.slug}`} className="r-guide">
          <div className="r-guide-meta"><span className="r-guide-cat">Accommodation</span><span>4 min</span></div>
          <h3>Rooms &amp; accommodation: <em>honestly.</em></h3>
          <div className="r-guide-excerpt">Ocean-view balconies, daily cleaning, and a shared room with a stranger. The honest breakdown.</div>
          <div className="r-guide-read">Read <span className="r-arr">→</span></div>
        </Link>
        <Link to={`/articles/${events.slug}`} className="r-guide">
          <div className="r-guide-meta"><span className="r-guide-cat">Campus life</span><span>3 min</span></div>
          <h3>Activities &amp; events, every day.</h3>
          <div className="r-guide-excerpt">Hackathons, HIIT classes, sound baths, VC office hours — what actually happens every day.</div>
          <div className="r-guide-read">Read <span className="r-arr">→</span></div>
        </Link>
        <Link to={`/articles/${visa.slug}`} className="r-guide">
          <div className="r-guide-meta"><span className="r-guide-cat">Visas &amp; legal</span><span>5 min</span></div>
          <h3>Malaysia visa: every option <em>explained.</em></h3>
          <div className="r-guide-excerpt">Tourist visa, DE Rantau digital nomad pass, or visa runs? What actually works for staying at NS legally.</div>
          <div className="r-guide-read">Read <span className="r-arr">→</span></div>
        </Link>
        <Link to={`/articles/${food.slug}`} className="r-guide">
          <div className="r-guide-meta"><span className="r-guide-cat">Health &amp; food</span><span>4 min</span></div>
          <h3>Food: Blueprint meals &amp; <em>nearby spots.</em></h3>
          <div className="r-guide-excerpt">Three meals a day optimized for longevity — plus what to do when you're craving something that isn't.</div>
          <div className="r-guide-read">Read <span className="r-arr">→</span></div>
        </Link>
      </div>
    </section>
  );
}

function ReviewFAQTiles() {
  const tiles = [
    { catId: 'basics', n: '★ MOST READ', name: <>Basics &amp; <em>costs</em></>, count: 18, more: 'Read all 18', cls: 'r-faq-feature' },
    { catId: 'travel', n: '№ 02', name: <>Travel &amp; <em>location</em></>, count: 7, more: 'Read all 7', cls: '' },
    { catId: 'working', n: '№ 03', name: <>Working &amp; <em>learning</em></>, count: 10, more: 'Read all 10', cls: 'r-faq-dark' },
    { catId: 'health', n: '№ 04', name: <>Health &amp; <em>fitness</em></>, count: 6, more: 'Read all 6', cls: '' },
    { catId: 'living', n: '№ 05', name: <>Living &amp; <em>accommodation</em></>, count: 8, more: 'Read all 8', cls: '' },
    { catId: 'application', n: '№ 06', name: <>Application &amp; <em>admissions</em></>, count: 6, more: 'Read all 6', cls: '' },
    { catId: 'community', n: '№ 07', name: <>Community &amp; <em>culture</em></>, count: 6, more: 'Read all 6', cls: '' },
    { catId: 'visas', n: '№ 08', name: <>Visas &amp; <em>legal</em></>, count: 6, more: 'Read all 6', cls: '' },
  ];

  return (
    <section className="r-section r-section-alt">
      <div className="r-section-inner">
        <div className="r-sec-head">
          <h2 className="r-h2">got a specific question? <em>probably one of these 67.</em></h2>
          <p className="r-sec-sub">Every question I've heard a prospective resident ask, organized into the eight things you'll actually want to know about.</p>
        </div>
        <div className="r-faq-cats">
          {tiles.map((t, i) => (
            <Link to={`/#faq-cat-${t.catId}`} className={`r-faq-cat ${t.cls}`} key={i}>
              <div className="r-faq-head">
                <span className="r-faq-n">{t.n}</span>
                <span className="r-faq-count">{t.count}</span>
              </div>
              <div className="r-faq-name">{t.name}</div>
              <div className="r-faq-more">{t.more} <span className="r-arr">→</span></div>
            </Link>
          ))}
        </div>
        <div className="r-faq-cats-foot">
          Or read the <Link to="/#faq">full 67-question reference on attendns.com</Link> — searchable with ⌘K.
        </div>
      </div>
    </section>
  );
}

function ReviewFinalCTA() {
  return (
    <section className="r-section">
      <div className="r-final-cta">
        <div className="r-final-eyebrow">
          <span className="r-final-dot"></span>
          <span className="r-final-eyebrow-text">are you ready to take the leap?</span>
        </div>
        <h2 className="r-final-h2">save <span className="r-hl">$375 / month.</span><br />then come <em>build something.</em></h2>
        <div className="r-final-sub">Cohorts start the 1st of every month. The next one is <b>jun 1</b>. Apply through this page and the 25% off applies at checkout — no code, no extra step. The button forwards to NS's official application; your data goes to them, not me.</div>
        <div className="r-final-ctas">
          <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer" className="r-btn r-btn-primary r-btn-lg">
            Apply at $1,125 — save $375 <span className="r-arrow">→</span>
          </a>
          <Link to="/quiz" className="r-btn r-btn-ghost r-btn-lg r-btn-ghost-dark">Retake the quiz</Link>
        </div>
        <div className="r-final-fine">
          <span>next cohort · jun 1</span>
          <span className="r-pipe">·</span>
          <span>then jul 1, aug 1, … monthly</span>
          <span className="r-pipe">·</span>
          <span>opens NS's official application</span>
          <span className="r-pipe">·</span>
          <span>25% off auto-applied</span>
        </div>
      </div>
    </section>
  );
}

function ReviewStickyBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const heroEl = document.querySelector('.r-hero');
      const finalEl = document.querySelector('.r-final-cta');
      const heroBottom = heroEl ? heroEl.getBoundingClientRect().bottom : 0;
      const finalTop = finalEl ? finalEl.getBoundingClientRect().top : 9999;
      setShow(heroBottom < 0 && finalTop > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`r-stickybar ${show ? 'show' : ''}`}>
      <div className="r-stickybar-inner">
        <div className="r-stickybar-l">
          Finished reading? <b>Apply via attendNS</b> · <span className="r-stickybar-strike">$1,500</span><span className="r-stickybar-accent">$1,125</span> /mo
        </div>
        <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer" className="r-btn r-btn-primary">
          Apply now <span className="r-arrow">→</span>
        </a>
      </div>
    </div>
  );
}

export default function ReviewPage() {
  const canonical = `${SITE_URL}/review`;
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Organization',
      name: 'Network School',
      url: 'https://ns.com',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '312',
      },
    },
    author: { '@type': 'Person', name: 'Jamie Chen' },
    reviewRating: { '@type': 'Rating', ratingValue: '4.9', bestRating: '5' },
    datePublished: '2026-05-15',
    publisher: { '@type': 'Organization', name: 'attendNS', url: SITE_URL },
    name: 'Network School Review (May 2026) — A Resident\'s Honest Take',
  };

  return (
    <>
      <Helmet>
        <title>Network School Review (May 2026) — A Resident's Honest Take | attendNS</title>
        <meta name="description" content="An honest, independent Network School review by someone who's lived there 14 months. Real cost, food, gym, application odds — and the partner link that gets you 25% off." />
        <meta property="og:title" content="Network School Review (May 2026) — A Resident's Honest Take" />
        <meta property="og:description" content="An honest, independent Network School review by someone who's lived there 14 months. Real cost, food, gym, application odds — and the partner link that gets you 25% off." />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${SITE_URL}/campus-map.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Network School Review (May 2026) — A Resident's Honest Take" />
        <meta name="twitter:description" content="An honest, independent Network School review by someone who's lived there 14 months. Real cost, food, gym, application odds — and the partner link that gets you 25% off." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
      </Helmet>
      <div className="app">
        <Header />
        <main className="review-page">
          <ReviewHero />
          <ReviewTrustStrip />
          <ReviewQuizSection />
          <ReviewWhatItIs />
          <ReviewCostTable />
          <ReviewCampusMap />
          <ReviewGallery />
          <ReviewTestimonials />
          <ReviewGuidesPreview />
          <ReviewFAQTiles />
          <ReviewFinalCTA />
        </main>
        <Footer />
        <ReviewStickyBar />
      </div>
    </>
  );
}
