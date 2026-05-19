import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Cloud,
  Code2,
  Database,
  Network,
  ServerCog,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection.jsx';
import SEO from '../components/SEO.jsx';

const serviceGroups = [
  {
    icon: Blocks,
    title: 'Microsoft 365, Power Platform, and SharePoint',
    summary:
      'Planning, cleanup, buildout, and modernization for organizations that already rely on Microsoft tools but need them to work like connected business systems.',
    outcomes: [
      'Power Apps for intake, inspections, approvals, internal requests, and operational tracking',
      'Power Automate flows for routing, notifications, reviews, and data handoffs',
      'SharePoint modernization for document collaboration, permissions, and team sites',
      'Dataverse and Microsoft 365 governance planning for cleaner data and administration',
    ],
    bestFor: 'Teams with spreadsheet-heavy processes, aging SharePoint sites, manual approvals, or disconnected Microsoft 365 usage.',
  },
  {
    icon: Code2,
    title: 'Custom Software, .NET Applications, and APIs',
    summary:
      'Custom business applications, secure portals, API integrations, backend services, and internal tools built around real workflows and maintainable architecture.',
    outcomes: [
      'ASP.NET Core and C# application development',
      'Role-aware internal portals and secure business tools',
      'REST APIs, system integrations, and data movement between platforms',
      'SQL Server-backed applications, reporting foundations, and migration support',
    ],
    bestFor: 'Organizations that need a purpose-built application instead of forcing a workflow into a generic tool.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation and Operational Modernization',
    summary:
      'Process improvement and automation support for repetitive work, approval delays, manual reporting, and operational handoffs that slow teams down.',
    outcomes: [
      'Workflow discovery and process mapping',
      'Automation planning across Microsoft 365, APIs, databases, and web applications',
      'Data consistency improvements and reporting-ready structures',
      'Documentation and handoff support for administrators and future maintainers',
    ],
    bestFor: 'Business, nonprofit, government, and enterprise teams that know the pain points but need a practical technical path.',
  },
  {
    icon: ServerCog,
    title: 'Hosting, VPS, Infrastructure, and DevOps Support',
    summary:
      'Hosting-aware deployment and infrastructure support connected to DJ Hosting Solutions for teams that need reliable websites, servers, and deployment paths.',
    outcomes: [
      'Docker and Nginx deployment planning',
      'VPS, Proxmox, virtualization, and server administration guidance',
      'Website hosting, migration, and managed support coordination',
      'Infrastructure planning for maintainable operations after launch',
    ],
    bestFor: 'Teams that need the application, website, or automation work to launch cleanly and be supportable after delivery.',
  },
];

const deliveryStandards = [
  {
    icon: ShieldCheck,
    title: 'Security and access planning',
    text: 'Permission models, role awareness, secure configuration, and responsible handling of operational data are considered early.',
  },
  {
    icon: Database,
    title: 'Data integrity',
    text: 'Dataverse, SQL Server, SharePoint, and API work is planned around cleaner structures, migration paths, and reporting needs.',
  },
  {
    icon: Network,
    title: 'Integration awareness',
    text: 'Systems are designed with the surrounding environment in mind, including Microsoft 365, third-party tools, hosting, and support workflows.',
  },
  {
    icon: Cloud,
    title: 'Deployable outcomes',
    text: 'The goal is not just a demo. Work is shaped around deployment, documentation, administrator handoff, and long-term operations.',
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Services | DJ Information Systems, Inc."
        description="Explore DJ Information Systems, Inc. services for Microsoft 365, Power Platform, SharePoint, custom .NET software, workflow automation, APIs, hosting, VPS, infrastructure, and DevOps support."
      />

      <section className="page-hero services-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">Services</p>
          <h1>Focused technology services for systems that need to work in the real world.</h1>
          <p>
            DJ Information Systems, Inc. helps teams modernize Microsoft 365, build custom software, automate workflows,
            connect data, and plan infrastructure with a practical delivery path from scope to support.
          </p>
          <div className="hero-actions">
            <Link className="button button-light" to="/contact-pricing">
              Request Scope Review
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a className="button button-ghost-light" href="https://djhostingsolutions.com">
              Hosting Services
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <p className="eyebrow">Core service areas</p>
          <h2>Clear offers without forcing every project into the same box.</h2>
          <p>
            Some clients need a small automation fix. Others need a full application, Microsoft 365 modernization, or
            infrastructure planning. The work starts by matching the service path to the actual operational problem.
          </p>
        </div>

        <div className="container service-detail-grid">
          {serviceGroups.map((service) => (
            <article className="service-detail-card" key={service.title}>
              <div className="icon-badge" aria-hidden="true">
                <service.icon size={24} />
              </div>
              <div>
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
              </div>
              <ul className="feature-list">
                {service.outcomes.map((outcome) => (
                  <li key={outcome}>
                    <BadgeCheck size={18} aria-hidden="true" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
              <div className="best-fit-note">
                <strong>Best fit</strong>
                <p>{service.bestFor}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container split-section">
          <div>
            <p className="eyebrow">Delivery standards</p>
            <h2>Built around maintainability, not just launch-day appearance.</h2>
            <p>
              Production-ready technology work needs a practical plan for access, data, deployment, support, and future
              changes. These standards guide every service area, from a small Power Automate flow to a custom application.
            </p>
          </div>
          <div className="check-grid">
            {deliveryStandards.map((item) => (
              <div key={item.title}>
                <item.icon aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container readiness-panel">
          <div>
            <p className="eyebrow">How projects usually start</p>
            <h2>Start with scope clarity before jumping into tools.</h2>
            <p>
              A useful first conversation should identify the business process, current systems, users, security needs,
              timeline, data sources, deployment expectations, and support model. That keeps the solution practical and
              prevents the work from becoming a disconnected prototype.
            </p>
          </div>
          <div className="readiness-points">
            <div>
              <BadgeCheck aria-hidden="true" />
              Define the workflow, users, and success criteria
            </div>
            <div>
              <BadgeCheck aria-hidden="true" />
              Identify existing Microsoft 365, database, or hosting constraints
            </div>
            <div>
              <BadgeCheck aria-hidden="true" />
              Choose the right path: configure, automate, integrate, or build
            </div>
            <div>
              <BadgeCheck aria-hidden="true" />
              Plan launch, documentation, and ongoing support expectations
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Have a service need in mind?"
        title="Bring the workflow, platform, application, or infrastructure challenge you want to solve."
        text="A scope review can separate quick improvements from larger modernization work and identify the right technical path."
      />
    </>
  );
}
