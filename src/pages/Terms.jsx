import SEO from '../components/SEO.jsx';

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service | DJ Information Systems, Inc."
        description="Terms of service for DJ Information Systems, Inc. website visitors and prospective clients."
      />

      <section className="page-hero legal-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">Terms of Service</p>
          <h1>Website and inquiry terms for prospective clients.</h1>
          <p>
            These terms apply to use of the DJ Information Systems, Inc. website and initial project inquiry communications.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <h2>Website Use</h2>
          <p>
            Website content is provided for general business information. It does not create a client relationship,
            guarantee project acceptance, or represent a final proposal.
          </p>

          <h2>Project Inquiries</h2>
          <p>
            Submitted inquiry details are reviewed to determine scope, fit, timing, and next steps. Final pricing,
            deliverables, timelines, and responsibilities are confirmed only through a written agreement or accepted
            proposal.
          </p>

          <h2>Service Availability</h2>
          <p>
            Services may depend on project requirements, technical constraints, third-party platforms, hosting providers,
            licensing, and client readiness. DJ Information Systems, Inc. may decline work that is outside scope,
            unsupported, or misaligned with responsible delivery.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Some work may involve Microsoft, hosting providers, domain registrars, payment processors, cloud platforms,
            or other third-party services. Those services remain subject to their own terms, policies, costs, and
            availability.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to <a href="mailto:contact@djinfosys.com">contact@djinfosys.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
