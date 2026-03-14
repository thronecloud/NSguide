import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE_URL, REFERRAL_URL } from '../config';
import { getArticleBySlug, getArticleSchema, articles } from '../data/articleData';
import Header from '../components/Header';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <>
        <Helmet>
          <title>Article Not Found | attendNS</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="app">
          <Header />
          <main className="main">
            <div className="question-page">
              <h1>Article not found</h1>
              <p>This article doesn't exist. <Link to="/articles">Browse all articles</Link>.</p>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  const pageUrl = `${SITE_URL}/articles/${slug}`;
  const schema = getArticleSchema(article);

  const relatedArticles = (article.relatedArticles || [])
    .map((s) => articles.find((a) => a.slug === s))
    .filter(Boolean);

  return (
    <>
      <Helmet>
        <title>{article.seo.title}</title>
        <meta name="description" content={article.seo.description} />
        <meta name="keywords" content={article.seo.keywords} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.seo.title} />
        <meta property="og:description" content={article.seo.description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="article:published_time" content={article.publishedDate} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={article.seo.title} />
        <meta name="twitter:description" content={article.seo.description} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <div className="app">
        <Header />
        <main className="main">
          <article className="article-page">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">/</span>
              <Link to="/articles">Articles</Link>
              <span className="breadcrumb-sep">/</span>
              <span>{article.title}</span>
            </nav>
            <h1 className="article-page-title">{article.title}</h1>
            <p className="article-meta">
              By a Network School Resident · {new Date(article.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <div className="article-body">
              {article.sections.map((section, i) => (
                <section key={i}>
                  <h2>{section.heading}</h2>
                  {section.content.split('\n\n').map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>
            <div className="article-apply-cta">
              <a href={REFERRAL_URL} className="btn-apply" rel="noopener noreferrer" target="_blank">
                Apply to Network School
              </a>
            </div>
            {relatedArticles.length > 0 && (
              <div className="article-related">
                <h3>Related Articles</h3>
                <div className="article-related-list">
                  {relatedArticles.map((a) => (
                    <Link key={a.slug} to={`/articles/${a.slug}`} className="article-related-link">
                      {a.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <Link to="/articles" className="question-page-back">← All articles</Link>
          </article>
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
