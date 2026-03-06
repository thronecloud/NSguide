import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copyright">
          Unofficial third-party FAQ. Not affiliated with Network School.{' '}
          <Link to="/terms">Terms</Link>
        </p>
      </div>
    </footer>
  );
}
