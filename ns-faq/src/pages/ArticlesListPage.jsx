import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '../config';
import { articles, ARTICLE_CATEGORIES, getReadingTime } from '../data/articleData';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ArticlesListPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Network School Articles & Guides | attendNS</title>
        <meta name="description" content="In-depth articles about Network School from a real resident. Travel guide, accommodation review, food breakdown, visa options, and daily activities at the startup society in Forest City, Malaysia." />
        <meta name="keywords" content="Network School articles, NS guides, Network School blog, Network School experience, Forest City guides" />
        <link rel="canonical" href={`${SITE_URL}/articles`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Network School Articles & Guides | attendNS" />
        <meta property="og:description" content="In-depth articles about Network School from a real resident. Travel, accommodation, food, visa, and activities guides." />
        <meta property="og:url" content={`${SITE_URL}/articles`} />
      </Helmet>
      <div className="app">
        <Header />
        <main className="main">
          <section className="articles-list-page">
            <h1 className="articles-list-title">Articles & Guides</h1>
            <p className="articles-list-subtitle">
              In-depth guides about Network School, written from firsthand experience by a resident.
            </p>
            <nav className="article-categories" aria-label="Article categories">
              <button
                type="button"
                className={`faq-category-btn ${activeCategory === 'all' ? 'faq-category-btn--active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All
              </button>
              {ARTICLE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`faq-category-btn ${activeCategory === cat.id ? 'faq-category-btn--active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </nav>
            <div className="articles-grid">
              {filtered.map((article) => {
                const cat = ARTICLE_CATEGORIES.find((c) => c.id === article.category);
                return (
                  <Link
                    key={article.slug}
                    to={`/articles/${article.slug}`}
                    className="article-card"
                  >
                    <div className="article-card-meta-row">
                      {cat && <span className="article-card-category">{cat.label}</span>}
                      <span className="article-card-reading-time">{getReadingTime(article)} min read</span>
                    </div>
                    <h2 className="article-card-title">{article.title}</h2>
                    <p className="article-card-excerpt">{article.excerpt}</p>
                    <span className="article-card-read">Read guide →</span>
                  </Link>
                );
              })}
              {filtered.length === 0 && (
                <p className="articles-empty">No articles in this category yet.</p>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
