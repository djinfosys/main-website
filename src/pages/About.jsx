import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Landmark,
  Network,
  Server,
  ShieldCheck,
  UsersRound,
  Workflow,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection.jsx';
import SEO from '../components/SEO.jsx';
import cdcLogo from '../assets/logos/cdc-logo-tag-right.svg';
import kr3Logo from '../assets/logos/kr3-logo.avif';
import peratonLogo from '../assets/logos/peraton-logo.svg';
import ugtLogo from '../assets/logos/ugt-logo.avif';

const specializations = [
  '.NET / C# application development',
  'ASP.NET Core web applications',
  'Power Apps development',
  'Power Automate workflow automation',
  'Dataverse implementation and migration',
  'SharePoint modernization',
  'Microsoft 365 consulting',
  'API integrations and SQL Server solutions',
  'Docker, Proxmox, VPS, and server management',
  'Government contracting support and IT modernization',
];

const audiences = [
  {
    icon: Landmark,
    title: 'Government agencies',
    text: 'Modernization support for teams that need dependable systems, documented delivery, and practical technology decisions.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Small businesses',
    text: 'Web presence, internal tools, automation, Microsoft 365 cleanup, and infrastructure support scaled to the business stage.',
  },
  {
    icon: UsersRound,
    title: 'Nonprofits',
    text: 'Affordable operational technology that helps staff coordinate work, report impact, and reduce repetitive administration.',
  },
  {
    icon: Building2,
    title: 'Enterprise teams',
    text: 'Custom applications, integrations, SharePoint improvements, and workflow automation that fits larger operating environments.',
  },
];

const techStack = [
  { icon: Code2, title: 'Application', text: 'C#, .NET, ASP.NET Core, React, REST APIs' },
  { icon: Cloud, title: 'Microsoft Cloud', text: 'Microsoft 365, SharePoint, Power Apps, Power Automate' },
  { icon: Database, title: 'Data', text: 'Dataverse, SQL Server, migrations, reporting foundations' },
  { icon: Server, title: 'Infrastructure', text: 'Docker, Nginx, VPS, Proxmox, virtualization, DevOps' },
  { icon: Workflow, title: 'Automation', text: 'Approvals, notifications, forms, routing, integrations' },
  { icon: Network, title: 'Connectivity', text: 'APIs, backend services, secure system-to-system workflows' },
];

const projectExperience = [
  {
    title: 'Centers for Disease Control and Prevention',
    text: 'Contributed to solution delivery for Centers for Disease Control and Prevention projects through subcontractor engagements with KR3 Information Systems, Inc. and Peraton.',
  },
  {
    title: 'South Carolina Department of Education',
    text: 'Supported technology work for the South Carolina Department of Education while engaged as a W-2 employee through United Global Technologies.',
  },
  {
    title: 'South Carolina Department of Environmental Services',
    text: 'Currently supporting technology solutions connected to the South Carolina Department of Environmental Services.',
  },
];

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

export default function About() {
  return (
    <>
      <SEO
        title="About DJ Information Systems, Inc. | Practical IT Modernization"
        description="Learn about DJ Information Systems, Inc., a professional technology services company specializing in custom software, Microsoft 365, Power Platform, SharePoint, automation, hosting, and government-ready IT modernization."
      />

      <section className="page-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">About DJ Information Systems, Inc.</p>
          <h1>Technology consulting grounded in practical modernization and long-term reliability.</h1>
          <p>
            DJ Information Systems, Inc. helps organizations plan, build, and support technology systems that make daily work
            more organized, secure, and efficient. Our work spans custom software, Microsoft cloud solutions, workflow
            automation, data modernization, hosting infrastructure, and DevOps support.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split-section about-intro">
          <div>
            <p className="eyebrow">Company overview</p>
            <h2>Built for teams that need modern systems without unnecessary complexity.</h2>
            <p>
              Organizations often know where the friction is: manual approvals, disconnected data, aging SharePoint sites,
              brittle spreadsheets, unsupported servers, or custom tools that no longer match the mission. DJ Information
              Systems, Inc. turns those needs into clear technical roadmaps and production-ready solutions.
            </p>
            <p>
              The company is positioned to serve small businesses, government agencies, nonprofits, and enterprise teams that
              need reliable software, Microsoft 365 expertise, modern automation, and infrastructure support from a partner
              who can understand both the operational and technical sides of the problem.
            </p>
          </div>
          <aside className="mission-card" aria-label="Company mission">
            <ShieldCheck size={34} aria-hidden="true" />
            <h2>Mission</h2>
            <p>
              Help organizations make small, strategic technology improvements that compound into stronger operations, better
              services, and more resilient systems.
            </p>
            <span>Global Changes Always Start Small</span>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <p className="eyebrow">Project experience</p>
          <h2>Background supporting public-sector and enterprise technology delivery.</h2>
          <p>
            DJ Information Systems, Inc. brings practical experience from solution delivery environments involving federal
            health programs, the South Carolina Department of Education, and the South Carolina Department of Environmental
            Services.
          </p>
        </div>
        <div className="container experience-logo-strip" aria-label="Organizations and project partners represented in experience">
          {experienceLogos.map((item) => (
            <figure className={`experience-logo ${item.variant === 'dark' ? 'dark' : ''}`} key={item.label}>
              <img src={item.src} alt={item.alt} />
              {!item.hideLabel && <figcaption>{item.label}</figcaption>}
            </figure>
          ))}
        </div>
        <div className="container experience-grid">
          {projectExperience.map((item) => (
            <article className="experience-card" key={item.title}>
              <BadgeCheck size={22} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container section-heading">
          <p className="eyebrow">What we specialize in</p>
          <h2>Focused capabilities across software, Microsoft 365, automation, data, and infrastructure.</h2>
        </div>
        <div className="container specialization-list">
          {specializations.map((item) => (
            <div key={item}>
              <CheckCircle2 size={19} aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <p className="eyebrow">Who we serve</p>
          <h2>Support for organizations that need technology to be dependable, manageable, and mission-aligned.</h2>
        </div>
        <div className="container audience-grid">
          {audiences.map((audience) => (
            <article className="audience-card" key={audience.title}>
              <audience.icon size={27} aria-hidden="true" />
              <h3>{audience.title}</h3>
              <p>{audience.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container section-heading">
          <p className="eyebrow">Technology stack</p>
          <h2>A full-stack toolset for modern business and government systems.</h2>
        </div>
        <div className="container tech-grid">
          {techStack.map((item) => (
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

      <section className="section">
        <div className="container readiness-panel">
          <div>
            <p className="eyebrow">Government and business readiness</p>
            <h2>Prepared for structured delivery, modernization planning, and responsible operations.</h2>
            <p>
              DJ Information Systems, Inc. supports technology initiatives that require clear communication, practical
              documentation, scope discipline, secure configuration, and deployment planning. Whether the project is a
              government modernization effort, a business automation initiative, or an infrastructure refresh, we focus on
              systems that can be maintained after launch.
            </p>
          </div>
          <div className="readiness-points">
            <div>
              <BadgeCheck aria-hidden="true" />
              Requirements and scope clarification
            </div>
            <div>
              <BadgeCheck aria-hidden="true" />
              Secure configuration and access planning
            </div>
            <div>
              <BadgeCheck aria-hidden="true" />
              Documentation-friendly implementation
            </div>
            <div>
              <BadgeCheck aria-hidden="true" />
              Deployment, hosting, and support awareness
            </div>
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container hosting-section">
          <div className="icon-badge light" aria-hidden="true">
            <Server size={28} />
          </div>
          <div>
            <p className="eyebrow">Related service brand</p>
            <h2>For hosting, VPS, and infrastructure services, visit DJ Hosting Solutions.</h2>
            <p>
              DJ Hosting Solutions represents the hosting and infrastructure side of the service offering, including VPS
              hosting, server administration, Docker deployments, virtualization, and infrastructure support.
            </p>
          </div>
          <a className="button button-light" href="https://djhostingsolutions.com">
            Open DJ Hosting Solutions
          </a>
        </div>
      </section>

      <CTASection
        eyebrow="Let’s make the next improvement count."
        title="Bring the system, workflow, or infrastructure challenge you want to solve."
        text="We can help shape the right path, whether that means Microsoft 365 modernization, a custom application, workflow automation, or hosting infrastructure."
      />
    </>
  );
}
