import { Link } from 'react-router-dom';
import { articles, ARTICLE_CATEGORIES, getReadingTime } from '../data/articleData';

export default function ArticlesPreview() {
  const featured = articles.slice(0, 3);

  return (
    <section className="articles-preview" aria-label="Articles">
      <div className="articles-preview-header">
        <div>
          <h2 className="articles-preview-title">Resident Guides</h2>
          <p className="articles-preview-subtitle">In-depth guides written from firsthand experience at Network School.</p>
        </div>
        <Link to="/articles" className="articles-preview-all">View all {articles.length} guides →</Link>
      </div>
      <div className="articles-preview-grid">
        {featured.map((article) => {
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
              <h3 className="article-card-title">{article.title}</h3>
              <p className="article-card-excerpt">{article.excerpt}</p>
              <span className="article-card-read">Read guide →</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
