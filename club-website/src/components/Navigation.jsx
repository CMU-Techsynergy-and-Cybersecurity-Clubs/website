import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          CMU Tech Clubs
        </Link>
        <ul className="nav-menu">
          <li>
            <Link
              to="/"
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/cybersecurity"
              className={location.pathname === '/cybersecurity' ? 'nav-link active' : 'nav-link'}
            >
              Cybersecurity Club
            </Link>
          </li>
          <li>
            <Link
              to="/techsynergy"
              className={location.pathname === '/techsynergy' ? 'nav-link active' : 'nav-link'}
            >
              TechSynergy Club
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
