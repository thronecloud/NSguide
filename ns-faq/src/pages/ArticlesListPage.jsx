import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '../config';
import { articles } from '../data/articleData';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ArticlesListPage() {
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
              In-depth guides about Network School, written from firsthand experience.
            </p>
            <div className="articles-grid">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/articles/${article.slug}`}
                  className="article-card"
                >
                  <h2 className="article-card-title">{article.title}</h2>
                  <p className="article-card-excerpt">{article.excerpt}</p>
                  <span className="article-card-read">Read article →</span>
                </Link>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
