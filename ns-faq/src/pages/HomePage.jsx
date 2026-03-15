import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE_URL, REFERRAL_URL, SHOW_REFERRAL_CTA_ON_ALL_FAQS } from '../config';
import { faqItems, FAQ_CATEGORIES, getFaqByCategory } from '../data/faqData';
import Header from '../components/Header';
import Hero from '../components/Hero';
import NSQuiz from '../components/NSQuiz';
import PhotoGrid from '../components/PhotoGrid';
import ArticlesPreview from '../components/ArticlesPreview';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function HomePage() {
  const { hash } = useLocation();
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [openSlug, setOpenSlug] = useState(null);

  useEffect(() => {
    if (hash && hash.startsWith('#faq-')) {
      const slug = hash.slice(5);
      const item = faqItems.find((i) => i.slug === slug);
      if (item) {
        setExpandedCategories(prev =>
          prev.includes(item.category) ? prev : [...prev, item.category]
        );
        setOpenSlug(item.slug);
        setTimeout(() => {
          document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  const toggleCategory = (catId) => {
    setExpandedCategories(prev =>
      prev.includes(catId)
        ? prev.filter(id => id !== catId)
        : [...prev, catId]
    );
  };

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

          <div id="quiz">
            <NSQuiz />
          </div>

          <section className="campus-map" aria-label="Campus map">
            <h2 className="section-display-title">The Campus</h2>
            <img
              src="/campus-map.jpg"
              alt="Forest City campus map showing NS Coworking, NS Lobby, NS Café, and NS Gym locations"
              className="campus-map-img"
              fetchPriority="high"
              width="800"
              height="566"
            />
            <p className="campus-map-caption">
              NS Coworking, Lobby, Cafe, and Gym — all walkable within the Forest City complex.
            </p>
          </section>

          <section className="faq" id="faq" aria-label="Frequently asked questions">
            <div className="section-header">
              <h2 className="section-display-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">{faqItems.length} questions answered from firsthand experience</p>
            </div>
            <div className="faq-category-list">
              {FAQ_CATEGORIES.map((cat) => {
                const catItems = getFaqByCategory(cat.id);
                const isExpanded = expandedCategories.includes(cat.id);
                return (
                  <div key={cat.id} className={`faq-category-group ${isExpanded ? 'faq-category-group--open' : ''}`}>
                    <button
                      type="button"
                      className="faq-category-header"
                      onClick={() => toggleCategory(cat.id)}
                      aria-expanded={isExpanded}
                    >
                      <div className="faq-category-header-left">
                        <span className="faq-category-name">{cat.label}</span>
                        <span className="faq-category-count">{catItems.length}</span>
                      </div>
                      <svg
                        className={`faq-category-chevron ${isExpanded ? 'faq-category-chevron--open' : ''}`}
                        width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {isExpanded && (
                      <div className="faq-category-items">
                        {catItems.map((item) => (
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
                                Open full page &rarr;
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          <PhotoGrid />

          <ArticlesPreview />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
