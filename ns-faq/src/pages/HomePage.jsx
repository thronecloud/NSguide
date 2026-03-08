import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE_URL, REFERRAL_URL, SHOW_REFERRAL_CTA_ON_ALL_FAQS } from '../config';
import { faqItems, FAQ_CATEGORIES, getFaqByCategory } from '../data/faqData';
import Header from '../components/Header';
import Hero from '../components/Hero';
import NSQuiz from '../components/NSQuiz';
import PhotoCarousel from '../components/PhotoCarousel';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function HomePage() {
  const { hash } = useLocation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [openSlug, setOpenSlug] = useState(null);

  useEffect(() => {
    if (hash && hash.startsWith('#faq-')) {
      const slug = hash.slice(5);
      const item = faqItems.find((i) => i.slug === slug);
      if (item) {
        setActiveCategory(item.category);
        setOpenSlug(item.slug);
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const itemsToShow =
    activeCategory === 'all'
      ? faqItems
      : getFaqByCategory(activeCategory);

  return (
    <>
      <Helmet>
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:url" content={SITE_URL} />
      </Helmet>
      <div className="app">
        <Header />
        <main className="main">
          <Hero />
          <NSQuiz />
          <PhotoCarousel />
          <section className="campus-map" aria-label="Campus map">
            <h2 className="campus-map-title">The Campus</h2>
            <img
              src="/campus-map.jpg"
              alt="Forest City campus map showing NS Coworking, NS Lobby, NS Café, and NS Gym locations"
              className="campus-map-img"
              fetchPriority="high"
              width="800"
              height="566"
            />
            <p className="campus-map-caption">
              NS Coworking, Lobby, Café, and Gym — all walkable within the Forest City complex.
            </p>
          </section>
          <section className="faq" aria-label="Frequently asked questions">
            <h2 className="faq-section-title">FAQ</h2>
            <nav className="faq-categories" aria-label="FAQ categories">
              <button
                type="button"
                className={`faq-category-btn ${activeCategory === 'all' ? 'faq-category-btn--active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All
              </button>
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`faq-category-btn ${activeCategory === cat.id ? 'faq-category-btn--active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOpenSlug(null);
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </nav>
            <div className="faq-list faq-list--accordion">
              {itemsToShow.map((item) => {
                return (
                  <div
                    key={item.slug}
                    id={`faq-${item.slug}`}
                    className={`faq-item ${openSlug === item.slug ? 'faq-item--open' : ''}`}
                  >
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => setOpenSlug(openSlug === item.slug ? null : item.slug)}
                      aria-expanded={openSlug === item.slug}
                      aria-controls={`faq-answer-${item.slug}`}
                      id={`faq-question-${item.slug}`}
                    >
                      <span className="faq-link-question">{item.question}</span>
                      <span className="faq-chevron" aria-hidden="true">
                        {openSlug === item.slug ? '−' : '+'}
                      </span>
                    </button>
                    <div
                      id={`faq-answer-${item.slug}`}
                      className="faq-answer"
                      role="region"
                      aria-labelledby={`faq-question-${item.slug}`}
                      hidden={openSlug !== item.slug}
                    >
                      <p>{item.answer}</p>
                      {((item.ctaText && item.ctaUrl) || (SHOW_REFERRAL_CTA_ON_ALL_FAQS && REFERRAL_URL)) && (
                        <p>
                          <a
                            href={item.ctaUrl || REFERRAL_URL}
                            className="faq-cta-link"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {item.ctaText || 'Apply now'}
                          </a>
                        </p>
                      )}
                      <Link
                        to={`/faq/${item.slug}`}
                        className="faq-permalink"
                        title="Open this question on its own page"
                      >
                        Open full page →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
