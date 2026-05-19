import SEO from '../components/SEO.jsx';

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | DJ Information Systems, Inc."
        description="Privacy policy for DJ Information Systems, Inc., including how project inquiry information is used and protected."
      />

      <section className="page-hero legal-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">Privacy Policy</p>
          <h1>How project and contact information is handled.</h1>
          <p>
            DJ Information Systems, Inc. collects only the information needed to respond to inquiries, evaluate project fit,
            and provide technology services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <h2>Information We Collect</h2>
          <p>
            When you contact DJ Information Systems, Inc., you may provide your name, email address, company name, service
            interest, project goals, timeline, and other details you choose to share.
          </p>

          <h2>How Information Is Used</h2>
          <p>
            Information is used to respond to inquiries, review project requirements, prepare estimates, coordinate service
            delivery, and maintain business communication related to requested services.
          </p>

          <h2>Information Sharing</h2>
          <p>
            DJ Information Systems, Inc. does not sell inquiry information. Information may be shared only when needed to
            provide requested services, comply with legal obligations, or coordinate directly authorized project work.
          </p>

          <h2>Security</h2>
          <p>
            Reasonable administrative and technical safeguards are used to protect business communications and project
            information. Do not submit sensitive credentials, regulated data, or confidential production access details
            through the website inquiry form.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about privacy practices can be sent to <a href="mailto:contact@djinfosys.com">contact@djinfosys.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
