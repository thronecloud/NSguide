import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Network School FAQ</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="app">
        <Header />
        <main className="main">
          <div className="question-page">
            <h1>Page not found</h1>
            <p>
              The page you're looking for doesn't exist.{' '}
              <Link to="/">Browse all FAQ questions</Link>.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
