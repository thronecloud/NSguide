import { Link } from 'react-router-dom';
import { articles } from '../data/articleData';

export default function ArticlesPreview() {
  const featured = articles.slice(0, 3);

  return (
    <section className="articles-preview" aria-label="Articles">
      <div className="articles-preview-header">
        <h2 className="articles-preview-title">Resident Guides</h2>
        <Link to="/articles" className="articles-preview-all">View all →</Link>
      </div>
      <div className="articles-preview-grid">
        {featured.map((article) => (
          <Link
            key={article.slug}
            to={`/articles/${article.slug}`}
            className="article-card"
          >
            <h3 className="article-card-title">{article.title}</h3>
            <p className="article-card-excerpt">{article.excerpt}</p>
            <span className="article-card-read">Read article →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
