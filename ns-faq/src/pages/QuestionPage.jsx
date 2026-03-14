import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE_URL, REFERRAL_URL, SHOW_REFERRAL_CTA_ON_ALL_FAQS } from '../config';
import { getFaqBySlug, getQuestionSchema } from '../data/faqData';
import Header from '../components/Header';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function QuestionPage() {
  const { slug } = useParams();
  const item = getFaqBySlug(slug);

  if (!item) {
    return (
      <>
        <Helmet>
          <title>Question Not Found | attendNS</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="app">
          <Header />
          <main className="main">
            <div className="question-page">
              <h1>Question not found</h1>
              <p>This FAQ doesn't exist. <Link to="/">Browse all questions</Link>.</p>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  const { question, answer, seo, ctaText, ctaUrl, image, imageAlt } = item;
  const pageUrl = `${SITE_URL}/faq/${slug}`;
  const schema = getQuestionSchema(item);
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 3, name: question },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <div className="app">
        <Header />
        <main className="main">
          <article className="question-page">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">FAQ</Link>
              <span className="breadcrumb-sep">/</span>
              <span>{question}</span>
            </nav>
            <h1 className="question-page-title">{question}</h1>
            <div className="question-page-answer">
              {image && (
                <figure className="question-page-figure">
                  <img
                    src={image}
                    alt={imageAlt || ''}
                    className="question-page-img"
                    loading="lazy"
                    width="800"
                    height="566"
                  />
                </figure>
              )}
              <p>{answer}</p>
              {((ctaText && ctaUrl) || (SHOW_REFERRAL_CTA_ON_ALL_FAQS && REFERRAL_URL)) && (
                <p>
                  <a
                    href={ctaUrl || REFERRAL_URL}
                    className="faq-cta-link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {ctaText || 'Apply now'}
                  </a>
                </p>
              )}
            </div>
            <Link to={`/#faq-${slug}`} className="question-page-back">← Back to FAQ</Link>
          </article>
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
