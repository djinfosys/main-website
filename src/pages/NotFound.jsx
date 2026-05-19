import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | DJ Information Systems, Inc."
        description="The requested DJ Information Systems, Inc. page could not be found."
        noIndex
      />

      <section className="page-hero legal-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">Page Not Found</p>
          <h1>This page is not available.</h1>
          <p>
            The page may have moved, or the address may be incorrect. Use the links below to return to active website
            content.
          </p>
          <div className="hero-actions">
            <Link className="button button-light" to="/">
              Return Home
            </Link>
            <Link className="button button-ghost-light" to="/contact-pricing">
              Contact DJ Information Systems
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
