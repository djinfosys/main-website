import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Code2,
  FileText,
  Landmark,
  Network,
  ServerCog,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection.jsx';
import SEO from '../components/SEO.jsx';

const identifiers = [
  { label: 'Unique Entity ID', value: 'NS3NLWHYEKM3' },
  { label: 'CAGE / NCAGE', value: '198F7' },
];

const naicsCodes = [
  {
    priority: 'Primary',
    code: '541511',
    title: 'Custom Computer Programming Services',
    fit: 'Custom .NET development, Power Apps builds, migrations, custom applications, APIs, automation, and client software work.',
  },
  {
    priority: 'Secondary',
    code: '541512',
    title: 'Computer Systems Design Services',
    fit: 'Enterprise architecture, SharePoint and Microsoft 365 solutions, Power Platform design, system planning, and integration work.',
  },
  {
    priority: 'Secondary',
    code: '541519',
    title: 'Other Computer Related Services',
    fit: 'IT support, automation, troubleshooting, configuration, and technical services that do not fit cleanly under programming or design.',
  },
  {
    priority: 'As Applicable',
    code: '541513',
    title: 'Computer Facilities Management Services',
    fit: 'Client infrastructure, server, systems, or outsourced IT operations management when the scope requires it.',
  },
  {
    priority: 'As Applicable',
    code: '541611',
    title: 'Administrative Management and General Management Consulting Services',
    fit: 'Business process consulting, workflow improvement, requirements documentation, and process planning engagements.',
  },
  {
    priority: 'As Applicable',
    code: '611420',
    title: 'Computer Training',
    fit: 'Power Apps, SharePoint, Microsoft 365, end-user, or administrator training when included in the scope.',
  },
];

const capabilityAreas = [
  {
    icon: Code2,
    title: 'Custom software and APIs',
    text: '.NET, C#, ASP.NET Core, backend services, secure portals, data-connected tools, and system integrations.',
  },
  {
    icon: Workflow,
    title: 'Power Platform automation',
    text: 'Power Apps, Power Automate, Dataverse, approvals, notifications, intake processes, and workflow modernization.',
  },
  {
    icon: Building2,
    title: 'Microsoft 365 and SharePoint',
    text: 'SharePoint modernization, document collaboration, Microsoft 365 governance support, and role-aware team solutions.',
  },
  {
    icon: ServerCog,
    title: 'Hosting and infrastructure',
    text: 'Docker deployments, VPS planning, Nginx, Proxmox, server management, and deployment-aware support.',
  },
  {
    icon: Network,
    title: 'Systems integration',
    text: 'APIs, SQL Server, Dataverse, third-party systems, data movement, and operational reporting foundations.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure delivery practices',
    text: 'Access planning, data protection awareness, documentation, maintainability, and responsible operational handoff.',
  },
];

const readinessPoints = [
  'SAM.gov registration details available for procurement review',
  'Prepared for subcontractor, small business, public-sector, and commercial technology work',
  'Experience supporting federal health, state education, and state environmental services environments',
  'Delivery approach focused on requirements clarity, security, documentation, deployment, and support',
];

export default function Capabilities() {
  return (
    <>
      <SEO
        title="Capabilities | DJ Information Systems, Inc."
        description="Government and business capabilities for DJ Information Systems, Inc., including UEI, CAGE, NAICS codes, technology services, and public-sector readiness."
      />

      <section className="page-hero capabilities-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">Capabilities</p>
          <h1>Government and business technology capabilities for modernization work.</h1>
          <p>
            DJ Information Systems, Inc. provides custom software, Microsoft 365, Power Platform, automation, integration,
            hosting, and infrastructure support for public-sector, small business, nonprofit, and enterprise teams.
          </p>
          <div className="hero-actions">
            <Link className="button button-light" to="/contact-pricing">
              Request Capability Discussion
            </Link>
            <Link className="button button-ghost-light" to="/services">
              Review Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container capability-summary-grid">
          <div>
            <p className="eyebrow">Entity details</p>
            <h2>Registered vendor identifiers for procurement review.</h2>
            <p>
              These identifiers support vendor lookup, subcontracting conversations, teaming discussions, and initial
              public-sector qualification review.
            </p>
          </div>
          <div className="identifier-grid">
            {identifiers.map((item) => (
              <article className="identifier-card" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container section-heading">
          <p className="eyebrow">NAICS codes</p>
          <h2>Technology service classifications aligned to current work.</h2>
          <p>
            The primary classification is custom programming, supported by systems design and related computer services.
            Additional classifications apply when a specific opportunity includes infrastructure management, business
            process consulting, or training.
          </p>
        </div>
        <div className="container naics-grid">
          {naicsCodes.map((item) => (
            <article className="naics-card" key={item.code}>
              <span className={`priority-pill ${item.priority.toLowerCase()}`}>{item.priority}</span>
              <strong>{item.code}</strong>
              <h3>{item.title}</h3>
              <p>{item.fit}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <p className="eyebrow">Core capabilities</p>
          <h2>Practical technology delivery across software, Microsoft cloud, data, and infrastructure.</h2>
        </div>
        <div className="container capability-grid">
          {capabilityAreas.map((item) => (
            <article className="tech-card" key={item.title}>
              <div className="icon-badge" aria-hidden="true">
                <item.icon size={23} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container readiness-panel">
          <div>
            <p className="eyebrow">Readiness signals</p>
            <h2>Structured for public-sector and business technology conversations.</h2>
            <p>
              DJ Information Systems, Inc. is positioned for modernization work that requires clear requirements, responsible
              configuration, documentation, and long-term support awareness.
            </p>
          </div>
          <div className="readiness-points">
            {readinessPoints.map((point) => (
              <div key={point}>
                <BadgeCheck aria-hidden="true" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">Procurement note</p>
            <h2>Available for direct discussions, subcontracting, and teaming conversations.</h2>
            <p>
              Prospective partners, agencies, and business teams can request a capabilities discussion for technology
              modernization, Microsoft 365, Power Platform, custom software, automation, hosting, or infrastructure needs.
            </p>
          </div>
          <aside className="mission-card" aria-label="Capability document note">
            <FileText size={34} aria-hidden="true" />
            <h2>Capability Statement</h2>
            <p>
              A formal capability statement can be prepared or shared for opportunities that require a concise procurement
              profile, NAICS alignment, past-performance context, and contact details.
            </p>
            <Link className="button button-light" to="/contact-pricing">
              Request Details
            </Link>
          </aside>
        </div>
      </section>

      <CTASection
        eyebrow="Need procurement or teaming details?"
        title="Start with the opportunity, scope, timeline, and required capability area."
        text="DJ Information Systems, Inc. can support public-sector, subcontracting, and business technology discussions with a practical modernization lens."
      />
    </>
  );
}
