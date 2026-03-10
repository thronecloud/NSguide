import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copyright">
          attendNS: An unofficial third-party guide. Not affiliated with Network School.{' '}
          <Link to="/terms">Terms</Link>
        </p>
      </div>
    </footer>
  );
}
