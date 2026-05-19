import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Cloud,
  Code2,
  Database,
  FileText,
  Landmark,
  Network,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection.jsx';
import SEO from '../components/SEO.jsx';
import cdcLogo from '../assets/logos/cdc-logo-tag-right.svg';
import kr3Logo from '../assets/logos/kr3-logo.avif';
import peratonLogo from '../assets/logos/peraton-logo.svg';
import ugtLogo from '../assets/logos/ugt-logo.avif';

const experienceLogos = [
  {
    src: cdcLogo,
    alt: 'Centers for Disease Control and Prevention logo',
    label: 'Centers for Disease Control and Prevention',
  },
  {
    src: kr3Logo,
    alt: 'KR3 Information Systems, Inc. logo',
    label: 'KR3 Information Systems, Inc.',
  },
  {
    src: peratonLogo,
    alt: 'Peraton logo',
    label: 'Peraton',
    variant: 'dark',
    hideLabel: true,
  },
  {
    src: ugtLogo,
    alt: 'United Global Technologies logo',
    label: 'United Global Technologies',
  },
];

const environments = [
  {
    icon: Landmark,
    title: 'Federal health technology environments',
    text: 'Experience includes supporting solution delivery connected to Centers for Disease Control and Prevention projects through subcontractor work with KR3 Information Systems, Inc. and Peraton.',
  },
  {
    icon: Building2,
    title: 'State education technology work',
    text: 'Experience includes technology delivery connected to the South Carolina Department of Education while engaged as a W-2 employee through United Global Technologies.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'State environmental services support',
    text: 'Experience includes current technology support connected to the South Carolina Department of Environmental Services, with public-facing details kept intentionally limited.',
  },
];

const proofAreas = [
  {
    icon: Code2,
    title: 'Custom software and APIs',
    text: 'C#, ASP.NET Core, internal tools, secure portals, backend services, and integration-aware application planning.',
  },
  {
    icon: Cloud,
    title: 'Microsoft 365 modernization',
    text: 'SharePoint, Power Apps, Power Automate, Dataverse, document collaboration, and workflow improvements across Microsoft environments.',
  },
  {
    icon: Database,
    title: 'Data and reporting foundations',
    text: 'SQL Server, Dataverse, migration planning, data cleanup, and structures that make operational reporting more dependable.',
  },
  {
    icon: Network,
    title: 'Infrastructure-aware delivery',
    text: 'Deployment planning, hosting awareness, Docker, Nginx, VPS, Proxmox, access planning, and supportable launch paths.',
  },
  {
    icon: Workflow,
    title: 'Workflow automation',
    text: 'Intake, approvals, routing, notifications, review cycles, handoffs, and repetitive process reduction.',
  },
  {
    icon: FileText,
    title: 'Documentation and handoff',
    text: 'Requirements clarification, administrator handoff, maintainability notes, and practical operating context for future support.',
  },
];

const buyerConfidence = [
  'Experience in environments where security, documentation, access control, and responsible handoff matter.',
  'Practical delivery across low-code, custom software, data, Microsoft 365, and infrastructure concerns.',
  'Ability to discuss both business workflow and technical implementation without forcing every project into one tool.',
  'Clear separation between representative experience, current services, and any formal client relationship claims.',
];

export default function Experience() {
  return (
    <>
      <SEO
        title="Experience | DJ Information Systems, Inc."
        description="Representative project experience for DJ Information Systems, Inc., including public-sector modernization environments, Microsoft 365, Power Platform, custom software, data, and infrastructure-aware delivery."
      />

      <section className="page-hero experience-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">Experience</p>
          <h1>Representative technology delivery experience for serious business and public-sector work.</h1>
          <p>
            DJ Information Systems, Inc. brings practical delivery background from government, public-sector, and
            enterprise-adjacent environments where clarity, documentation, security awareness, and dependable execution matter.
          </p>
          <div className="hero-actions">
            <Link className="button button-light" to="/contact-pricing">
              Discuss Project Fit
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button button-ghost-light" to="/capabilities">
              View Capabilities
            </Link>
          </div>
        </div>
      </section>

      <section className="section logo-showcase-section">
        <div className="container logo-showcase-heading">
          <div>
            <p className="eyebrow">Representative environments</p>
            <h2>Experience includes federal health, state education, and public-sector modernization contexts.</h2>
          </div>
          <p>
            These logos provide context for experience gained through employment, subcontractor, or partner delivery roles.
          </p>
        </div>
        <div className="container experience-logo-strip">
          {experienceLogos.map((item) => (
            <figure className={`experience-logo ${item.variant === 'dark' ? 'dark' : ''}`} key={item.label}>
              <img src={item.src} alt={item.alt} />
              {!item.hideLabel && <figcaption>{item.label}</figcaption>}
            </figure>
          ))}
        </div>
        <div className="container experience-disclaimer-card">
          <ShieldCheck size={22} aria-hidden="true" />
          <p>
            Logos and organization names represent project experience context only. They do not imply endorsement,
            sponsorship, a direct contractual relationship with DJ Information Systems, Inc., or permission to speak on behalf
            of those organizations.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <p className="eyebrow">Project environment examples</p>
          <h2>Relevant background without overstating private or restricted details.</h2>
          <p>
            The goal is to show the type of environments and delivery expectations DJIS understands while keeping client,
            employer, and partner boundaries clear.
          </p>
        </div>
        <div className="container experience-environment-grid">
          {environments.map((item) => (
            <article className="experience-environment-card" key={item.title}>
              <div className="icon-badge" aria-hidden="true">
                <item.icon size={24} />
              </div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container section-heading">
          <p className="eyebrow">Capabilities demonstrated</p>
          <h2>Experience that maps directly to the services DJIS provides today.</h2>
          <p>
            Buyers should not have to guess whether past delivery background is relevant. These are the practical technical
            areas represented across the experience and current service offering.
          </p>
        </div>
        <div className="container evidence-grid">
          {proofAreas.map((area) => (
            <article className="evidence-card" key={area.title}>
              <area.icon size={24} aria-hidden="true" />
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container readiness-panel">
          <div>
            <p className="eyebrow">Why this matters to buyers</p>
            <h2>Proof should reduce risk, not just decorate the page.</h2>
            <p>
              Government prospects, enterprise teams, and business owners need confidence that the provider understands more
              than the tool. They need a partner who can reason through workflow, users, data, security, deployment, and
              support after launch.
            </p>
          </div>
          <div className="readiness-points">
            {buyerConfidence.map((point) => (
              <div key={point}>
                <BadgeCheck aria-hidden="true" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Need proof tied to your project?"
        title="Bring the workflow, system, or modernization challenge you need evaluated."
        text="A project review can connect your need to the relevant experience, service path, and practical next step."
      />
    </>
  );
}
