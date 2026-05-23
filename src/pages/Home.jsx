import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Building2,
  Cloud,
  Code2,
  Database,
  FileText,
  FileCode2,
  GitBranch,
  Network,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection.jsx';
import SEO from '../components/SEO.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import cdcLogo from '../assets/logos/cdc-logo-tag-right.svg';
import kr3Logo from '../assets/logos/kr3-logo.avif';
import peratonLogo from '../assets/logos/peraton-logo.svg';
import ugtLogo from '../assets/logos/ugt-logo.avif';

const services = [
  {
    icon: Code2,
    title: '.NET and ASP.NET Core Development',
    copy: 'Custom C# applications, secure web portals, internal tools, and API-driven platforms designed around real business workflows.',
  },
  {
    icon: Blocks,
    title: 'Power Apps and Power Automate',
    copy: 'Low-code business applications, workflow automation, approvals, notifications, and data-connected experiences across Microsoft 365.',
  },
  {
    icon: Database,
    title: 'Dataverse and SQL Solutions',
    copy: 'Dataverse implementation, data migration, SQL Server design, reporting foundations, and integrations that keep information consistent.',
  },
  {
    icon: Cloud,
    title: 'Microsoft 365 and SharePoint',
    copy: 'SharePoint modernization, document collaboration, governance-ready Microsoft 365 consulting, and team productivity improvements.',
  },
  {
    icon: Network,
    title: 'API Integrations and Automation',
    copy: 'Backend services, third-party integrations, business process automation, and dependable data movement between critical systems.',
  },
  {
    icon: ServerCog,
    title: 'Hosting, VPS, and DevOps',
    copy: 'Docker deployments, Proxmox, virtualization, server management, VPS solutions, infrastructure planning, and operational support.',
  },
];

const processSteps = [
  {
    title: 'Discover',
    text: 'We clarify the operational goal, current technical environment, stakeholders, constraints, and success criteria before writing code.',
  },
  {
    title: 'Design',
    text: 'We translate requirements into a pragmatic technical plan, interface direction, data model, integration map, and deployment path.',
  },
  {
    title: 'Build',
    text: 'We deliver in focused increments with attention to security, maintainability, documentation, and administrator-friendly handoff.',
  },
  {
    title: 'Support',
    text: 'We help stabilize launches, improve performance, modernize hosting, and plan the next wave of automation or platform growth.',
  },
];

const representativeLogos = [
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

const capabilityStatementUrl = '/documents/dj-information-systems-capability-statement.pdf';

export default function Home() {
  return (
    <>
      <SEO
        title="DJ Information Systems, Inc. | Custom Software, Microsoft 365 & Automation"
        description="DJ Information Systems, Inc. builds custom software, Microsoft 365 solutions, Power Platform applications, workflow automation, SharePoint modernization, and deployment-ready systems for government, small business, nonprofit, and enterprise teams."
      />

      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Global Changes Always Start Small</p>
            <h1>Custom software, Microsoft 365 modernization, and automation for dependable operations.</h1>
            <p className="hero-lede">
              DJ Information Systems, Inc. helps government, business, nonprofit, and enterprise teams replace manual work,
              aging SharePoint sites, disconnected data, and fragile tools with maintainable applications, workflows, and
              deployment-ready systems.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/contact-pricing#contact-form">
                Start Scope Review
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className="button button-secondary" to="/services">
                View Services
              </Link>
            </div>
            <dl className="hero-metrics" aria-label="Company strengths">
              <div>
                <dt>.NET</dt>
                <dd>Custom applications and APIs</dd>
              </div>
              <div>
                <dt>M365</dt>
                <dd>SharePoint, Power Apps, automation</dd>
              </div>
              <div>
                <dt>UEI</dt>
                <dd>SAM.gov identifiers on file</dd>
              </div>
            </dl>
          </div>

          <div className="hero-panel" aria-label="Technology services overview">
            <div className="hero-panel-top">
              <div>
                <span className="status-dot"></span>
                Solution readiness
              </div>
              <span>Consulting + Build + Deploy</span>
            </div>
            <div className="system-map">
              <div className="map-node primary">
                <ShieldCheck size={27} aria-hidden="true" />
                Secure Apps
              </div>
              <div className="map-node">
                <Workflow size={23} aria-hidden="true" />
                Automation
              </div>
              <div className="map-node">
                <Database size={23} aria-hidden="true" />
                Dataverse
              </div>
              <div className="map-node">
                <Cloud size={23} aria-hidden="true" />
                Microsoft 365
              </div>
              <div className="map-node">
                <GitBranch size={23} aria-hidden="true" />
                DevOps
              </div>
            </div>
            <div className="panel-insight">
              <BadgeCheck size={22} aria-hidden="true" />
              <p>
                Built for practical modernization: align people, data, software, and infrastructure without unnecessary
                complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section logo-showcase-section">
        <div className="container logo-showcase-heading">
          <div>
            <p className="eyebrow">Representative experience</p>
            <h2>Project experience includes federal health, state education, and public-sector modernization environments.</h2>
          </div>
          <div className="logo-showcase-actions">
            <p>
              Experience represented here includes subcontractor, partner, and employment-based engagements supporting
              technology delivery.
            </p>
            <Link className="button button-secondary" to="/experience">
              View Experience
            </Link>
          </div>
        </div>
        <div className="container experience-logo-strip">
          {representativeLogos.map((item) => (
            <figure className={`experience-logo ${item.variant === 'dark' ? 'dark' : ''}`} key={item.label}>
              <img src={item.src} alt={item.alt} />
              {!item.hideLabel && <figcaption>{item.label}</figcaption>}
            </figure>
          ))}
        </div>
        <p className="container logo-disclaimer">
          Logos represent project experience and do not imply endorsement or a direct contractual relationship with DJ
          Information Systems, Inc.
        </p>
      </section>

      <section className="section proof-section">
        <div className="container proof-panel">
          <div className="proof-copy">
            <p className="eyebrow">Proof and procurement packet</p>
            <h2>Capability, experience, and vendor details are easy to review.</h2>
            <p>
              Serious buyers should not have to hunt for basic credibility signals. Use this section to review the
              capability statement, representative project experience, and public-sector identifiers in one path.
            </p>
          </div>
          <div className="proof-grid">
            <article className="proof-card">
              <FileText size={25} aria-hidden="true" />
              <h3>Capability statement</h3>
              <p>Download the one-page procurement profile with NAICS alignment, core competencies, and contact details.</p>
              <a href={capabilityStatementUrl} target="_blank" rel="noreferrer">
                Download PDF
              </a>
            </article>
            <article className="proof-card">
              <Building2 size={25} aria-hidden="true" />
              <h3>Registered vendor details</h3>
              <p>Review UEI, CAGE / NCAGE, NAICS codes, and public-sector readiness details for qualification review.</p>
              <Link to="/capabilities">View Capabilities</Link>
            </article>
            <article className="proof-card">
              <BadgeCheck size={25} aria-hidden="true" />
              <h3>Representative experience</h3>
              <p>See delivery context connected to federal health, state education, and public-sector environments.</p>
              <Link to="/experience">View Experience</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <p className="eyebrow">Core capabilities</p>
          <h2>Technology services that connect strategy, delivery, and long-term operations.</h2>
          <p>
            From Microsoft 365 consulting to custom APIs and server infrastructure, we focus on reliable systems that are
            practical for administrators, intuitive for users, and ready for future growth.
          </p>
        </div>
        <div className="container service-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} icon={service.icon} title={service.title}>
              {service.copy}
            </ServiceCard>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container split-section">
          <div>
            <p className="eyebrow">Why choose DJ Information Systems, Inc.</p>
            <h2>Senior technical execution with a practical business lens.</h2>
            <p>
              We help teams make durable technology decisions, not just finish tickets. Every engagement is shaped around
              maintainability, security, administrator control, data integrity, and the realities of daily operations.
            </p>
            <div className="experience-note">
              <strong>Relevant project background</strong>
              <p>
                Experience includes supporting solution delivery for Centers for Disease Control and Prevention projects
                through subcontractor work with KR3 Information Systems, Inc. and Peraton, plus public-sector work connected
                to the South Carolina Department of Education and the South Carolina Department of Environmental Services.
              </p>
            </div>
          </div>
          <div className="check-grid">
            <div>
              <BadgeCheck aria-hidden="true" />
              <h3>Government and business ready</h3>
              <p>Documentation-minded delivery, scope clarity, and modernization support for public-sector and business teams.</p>
            </div>
            <div>
              <ShieldCheck aria-hidden="true" />
              <h3>Secure by design</h3>
              <p>Solutions designed with access control, data protection, maintainability, and operational resilience in mind.</p>
            </div>
            <div>
              <Sparkles aria-hidden="true" />
              <h3>Automation first</h3>
              <p>We identify repetitive work, approval delays, manual reporting, and data handoffs that software can simplify.</p>
            </div>
            <div>
              <FileCode2 aria-hidden="true" />
              <h3>Full-stack perspective</h3>
              <p>Frontend, backend, database, cloud, hosting, and DevOps experience under one consulting relationship.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container feature-panel">
          <div className="feature-copy">
            <p className="eyebrow">Microsoft 365 and Power Platform</p>
            <h2>Turn Microsoft tools into connected business systems.</h2>
            <p>
              Many organizations already own the platform they need. DJ Information Systems, Inc. helps configure, extend,
              and modernize Microsoft 365 with Power Apps, Power Automate, Dataverse, and SharePoint so teams can manage
              work without spreadsheet sprawl or disconnected processes.
            </p>
            <ul className="feature-list">
              <li>
                <BadgeCheck size={18} aria-hidden="true" />
                Power Apps for inspections, intake, approvals, operations, and internal service requests
              </li>
              <li>
                <BadgeCheck size={18} aria-hidden="true" />
                Power Automate flows for notifications, routing, review cycles, and data synchronization
              </li>
              <li>
                <BadgeCheck size={18} aria-hidden="true" />
                Dataverse migrations and SharePoint modernization for cleaner governance and reporting
              </li>
            </ul>
          </div>
          <div className="feature-dashboard" aria-label="Microsoft 365 solution capabilities">
            <div className="dashboard-card wide">
              <span>Workflow automation</span>
              <strong>Intake to approval</strong>
              <div className="progress-bar">
                <span></span>
              </div>
            </div>
            <div className="dashboard-card">
              <span>Dataverse</span>
              <strong>Structured data</strong>
            </div>
            <div className="dashboard-card">
              <span>SharePoint</span>
              <strong>Modern sites</strong>
            </div>
            <div className="dashboard-card wide">
              <span>Power Apps</span>
              <strong>Role-based user experiences</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container hosting-section">
          <div className="icon-badge light" aria-hidden="true">
            <ServerCog size={28} />
          </div>
          <div>
            <p className="eyebrow">DJ Hosting Solutions</p>
            <h2>Hosting, VPS, and infrastructure services are supported through DJ Hosting Solutions.</h2>
            <p>
              For teams that need reliable web hosting, VPS services, server support, Docker deployment, Proxmox
              virtualization, or infrastructure planning, DJ Hosting Solutions provides the hosting and infrastructure side
              of the DJ Information Systems service family.
            </p>
          </div>
          <a className="button button-light" href="https://djhostingsolutions.com" target="_blank" rel="noreferrer">
            Visit DJ Hosting Solutions
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <p className="eyebrow">How we work</p>
          <h2>A clear process for moving from need to dependable solution.</h2>
        </div>
        <div className="container process-grid">
          {processSteps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
