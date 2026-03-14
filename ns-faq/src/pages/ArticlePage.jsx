import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE_URL, REFERRAL_URL } from '../config';
import { getArticleBySlug, getArticleSchema, articles, ARTICLE_CATEGORIES, getReadingTime } from '../data/articleData';
import Header from '../components/Header';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

function slugifyHeading(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

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
  const cat = ARTICLE_CATEGORIES.find((c) => c.id === article.category);
  const readingTime = getReadingTime(article);

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

            {cat && <span className="article-page-category">{cat.label}</span>}
            <h1 className="article-page-title">{article.title}</h1>
            <div className="article-meta">
              <span>By a Network School Resident</span>
              <span className="article-meta-sep">·</span>
              <span>{new Date(article.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span className="article-meta-sep">·</span>
              <span>{readingTime} min read</span>
            </div>

            {article.summary && (
              <div className="article-summary-box">
                <strong>Quick Summary</strong>
                <p>{article.summary}</p>
              </div>
            )}

            <nav className="article-toc" aria-label="Table of contents">
              <strong>In this article</strong>
              <ol>
                {article.sections.map((section, i) => (
                  <li key={i}>
                    <a href={`#${slugifyHeading(section.heading)}`}>{section.heading}</a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="article-body">
              {article.sections.map((section, i) => (
                <section key={i} id={slugifyHeading(section.heading)}>
                  <h2>{section.heading}</h2>
                  {section.content.split('\n\n').map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>

            <div className="article-apply-cta">
              <p className="article-apply-cta-text">Ready to experience Network School for yourself?</p>
              <a href={REFERRAL_URL} className="quiz-btn quiz-btn-primary" rel="noopener noreferrer" target="_blank">
                Apply to Network School →
              </a>
            </div>

            <div className="article-author-bio">
              <strong>About the Author</strong>
              <p>This guide was written by an attendNS contributor who spent multiple months living at Network School. All observations are based on firsthand experience. This is an unofficial, independent resource — not affiliated with or endorsed by Network School.</p>
            </div>

            {relatedArticles.length > 0 && (
              <div className="article-related">
                <h3>Continue Reading</h3>
                <div className="article-related-grid">
                  {relatedArticles.map((a) => {
                    const rCat = ARTICLE_CATEGORIES.find((c) => c.id === a.category);
                    return (
                      <Link key={a.slug} to={`/articles/${a.slug}`} className="article-card article-card--compact">
                        <div className="article-card-meta-row">
                          {rCat && <span className="article-card-category">{rCat.label}</span>}
                          <span className="article-card-reading-time">{getReadingTime(a)} min read</span>
                        </div>
                        <h4 className="article-card-title">{a.title}</h4>
                        <span className="article-card-read">Read guide →</span>
                      </Link>
                    );
                  })}
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
