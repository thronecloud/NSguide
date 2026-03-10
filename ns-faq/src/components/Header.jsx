import { Link } from 'react-router-dom';
import { REFERRAL_URL } from '../config';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          attend<span className="brand-accent">NS</span>
        </Link>
        <nav className="nav">
          <a href={REFERRAL_URL} className="btn-apply" rel="noopener noreferrer" target="_blank">
            Apply
          </a>
        </nav>
      </div>
    </header>
  );
}
