import { Link } from 'react-router-dom';
import { Headset, Mail, MapPin, Server } from 'lucide-react';
import logo from '../assets/logos/dj-information-systems-logo-web.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" aria-label="DJ Information Systems, Inc. home">
            <img src={logo} alt="DJ Information Systems, Inc. logo" />
          </Link>
          <p>
            Professional technology consulting, software development, Microsoft 365 solutions, automation, and infrastructure
            services for organizations ready to modernize.
          </p>
          <p className="tagline">Global Changes Always Start Small</p>
        </div>

        <div>
          <h2>Company</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/capabilities">Capabilities</Link>
            </li>
            <li>
              <a href="/documents/dj-information-systems-capability-statement.pdf">Capability Statement PDF</a>
            </li>
            <li>
              <Link to="/contact-pricing">Contact</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Service</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>Services</h2>
          <ul>
            <li>
              <Link to="/services#microsoft-365">Microsoft 365 consulting</Link>
            </li>
            <li>
              <Link to="/services#microsoft-365">Power Platform development</Link>
            </li>
            <li>
              <Link to="/services#custom-software">Custom software and APIs</Link>
            </li>
            <li>
              <Link to="/services#hosting-infrastructure">Hosting and infrastructure</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>Contact</h2>
          <ul className="footer-contact">
            <li>
              <Mail size={17} aria-hidden="true" />
              <a href="mailto:contact@djinfosys.com">contact@djinfosys.com</a>
            </li>
            <li>
              <Headset size={17} aria-hidden="true" />
              <a href="mailto:support@djhostingsolutions.com">support@djhostingsolutions.com</a>
            </li>
            <li>
              <MapPin size={17} aria-hidden="true" />
              United States
            </li>
            <li>
              <Server size={17} aria-hidden="true" />
              <a href="https://djhostingsolutions.com">DJ Hosting Solutions</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>&copy; {new Date().getFullYear()} DJ Information Systems, Inc. All rights reserved.</span>
        <span>Professional technology services, modernization consulting, and infrastructure support.</span>
      </div>
    </footer>
  );
}
