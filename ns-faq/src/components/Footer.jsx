import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          <Link to="/articles">Articles</Link>
          <Link to="/faq/how-much-cost">Cost</Link>
          <Link to="/faq/how-apply">Apply</Link>
          <Link to="/faq/where-located">Location</Link>
          <Link to="/articles/malaysia-visa-guide-for-network-school">Visa Guide</Link>
          <Link to="/terms">Terms</Link>
        </div>
        <p className="footer-copyright">
          attendNS: An unofficial third-party guide. Not affiliated with or endorsed by Network School.
        </p>
      </div>
    </footer>
  );
}
