import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection({
  eyebrow = 'Ready to modernize with confidence?',
  title = 'Start with a focused conversation about the system, workflow, or platform you need to improve.',
  text = 'DJ Information Systems, Inc. helps teams move from operational friction to dependable technology that is easier to manage, extend, and support.',
}) {
  return (
    <section className="cta-band">
      <div className="container cta-content">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <Link className="button button-light" to="/contact-pricing">
            Discuss a Project
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <a className="button button-ghost-light" href="mailto:contact@djinfosys.com">
            <Mail size={18} aria-hidden="true" />
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
