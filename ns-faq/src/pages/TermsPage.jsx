import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms of Use | attendNS</title>
        <meta name="description" content="Terms of use for attendNS, an unofficial Network School guide. Not affiliated with Network School." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="app">
        <Header />
        <main className="main">
          <div className="question-page">
            <h1>Terms of Use</h1>
            <p>
              <strong>attendNS</strong> is an unofficial third-party guide about Network School.
              We are <strong>not affiliated with</strong> Network School, ns.com, or any related entities.
            </p>
            <h2>Disclaimer</h2>
            <p>
              All information is provided &quot;as is&quot; without warranty. We do not guarantee accuracy,
              completeness, or timeliness. For official information, always verify at{' '}
              <a href="https://ns.com" rel="noopener noreferrer" target="_blank">ns.com</a>.
            </p>
            <h2>No Liability</h2>
            <p>
              We are not liable for any decisions you make based on content on this site.
              Use at your own risk.
            </p>
            <h2>Privacy</h2>
            <p>
              We do not collect personal data from visitors. This site uses no analytics or tracking.
            </p>
            <p>
              <Link to="/">← Back to FAQ</Link>
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
