import { CheckCircle2 } from 'lucide-react';

export default function PricingCard({
  title,
  price,
  summary,
  features,
  featured = false,
  ctaLabel = 'Request Scope Review',
  ctaHref = '#contact-form',
}) {
  return (
    <article className={`pricing-card ${featured ? 'featured' : ''}`}>
      {featured && <span className="pricing-ribbon">Most flexible</span>}
      <div>
        <h3>{title}</h3>
        <p className="pricing-summary">{summary}</p>
      </div>
      <p className="price">{price}</p>
      <ul className="feature-list">
        {features.map((feature) => (
          <li key={feature}>
            <CheckCircle2 size={18} aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a className={featured ? 'button button-primary' : 'button button-secondary'} href={ctaHref}>
        {ctaLabel}
      </a>
    </article>
  );
}
