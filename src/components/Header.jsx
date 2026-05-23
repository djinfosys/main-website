import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoMark from '../assets/logos/dj-information-systems-mark-web.png';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Services', to: '/services' },
  { label: 'Capabilities', to: '/capabilities' },
  { label: 'Contact', to: '/contact-pricing' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="container header-inner">
        <Link className="brand" to="/" aria-label="DJ Information Systems, Inc. home" onClick={closeMenu}>
          <img className="brand-mark" src={logoMark} alt="DJ Information Systems, Inc. logo mark" />
          <span className="brand-copy" aria-hidden="true">
            <strong>DJ Information Systems</strong>
            <span>Inc.</span>
          </span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <nav id="primary-navigation" className={`primary-nav ${isOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            className="nav-link nav-link-external"
            href="https://djhostingsolutions.com"
            target="_blank"
            rel="noreferrer"
          >
            DJ Hosting Solutions
          </a>
          <Link className="button button-small button-primary" to="/contact-pricing" onClick={closeMenu}>
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
