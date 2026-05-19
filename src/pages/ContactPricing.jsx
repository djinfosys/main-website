import { BadgeCheck, BriefcaseBusiness, Mail, Phone, Send, ServerCog } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection.jsx';
import PricingCard from '../components/PricingCard.jsx';
import SEO from '../components/SEO.jsx';

const packages = [
  {
    title: 'Starter Website / Business Presence Package',
    price: 'Starting at $750',
    summary: 'A polished static website for small businesses, consultants, nonprofits, or new service brands.',
    features: [
      'Responsive multi-page website',
      'Professional copy and structure',
      'Basic SEO setup',
      'Docker-ready deployment package',
    ],
  },
  {
    title: 'Microsoft 365 / SharePoint / Power Platform Consulting',
    price: 'Starting at $1,500',
    summary: 'Planning, cleanup, development, and modernization across the Microsoft business cloud.',
    features: [
      'Power Apps and Power Automate planning',
      'SharePoint modernization',
      'Dataverse design or migration guidance',
      'Microsoft 365 workflow consulting',
    ],
    featured: true,
  },
  {
    title: 'Custom Software / Automation Package',
    price: 'Custom Quote',
    summary: 'Custom applications, APIs, databases, integrations, and workflow automation based on scope.',
    features: [
      '.NET / C# and ASP.NET Core development',
      'Backend APIs and integrations',
      'SQL Server and data workflows',
      'Business process automation',
    ],
  },
  {
    title: 'Shared Hosting Plans via DJ Hosting Solutions',
    price: 'Plans from $17.99/month',
    summary:
      'Monthly hosting plans are provided separately through DJ Hosting Solutions, not bundled into DJIS consulting pricing.',
    features: [
      'Shared hosting and managed website hosting options',
      'VPS hosting options for larger technical needs',
      'Hosting support through DJ Hosting Solutions',
      'Useful path after a website or application launch',
    ],
    ctaLabel: 'View Hosting Plans',
    ctaHref: 'https://djhostingsolutions.com',
  },
];

const nextSteps = [
  {
    title: 'Submit a project brief',
    text: 'Share the goal, timeline, service area, and any systems or constraints that matter.',
  },
  {
    title: 'Scope and fit review',
    text: 'We review whether the request fits DJIS services, DJ Hosting Solutions, or a different technical path.',
  },
  {
    title: 'Follow-up discussion',
    text: 'If the work is a fit, the next conversation narrows requirements, stakeholders, risks, and priorities.',
  },
  {
    title: 'Estimate or next-step recommendation',
    text: 'You receive a practical direction, whether that is a quote, phased scope, discovery step, or referral.',
  },
];

const trustPoints = [
  'SAM.gov identifiers: UEI NS3NLWHYEKM3 and CAGE 198F7',
  'Microsoft 365, SharePoint, Power Platform, .NET, APIs, and SQL Server experience',
  'Documentation, handoff, access planning, and deployment awareness included where appropriate',
  'Hosting questions are routed separately through DJ Hosting Solutions when monthly plans are needed',
];

export default function ContactPricing() {
  const handleProjectBriefSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('Name') || '';
    const email = formData.get('Email') || '';
    const company = formData.get('Company') || 'Not provided';
    const organizationType = formData.get('Organization Type') || 'Not specified';
    const service = formData.get('Service Needed') || 'Not specified';
    const timeline = formData.get('Timeline') || 'Not specified';
    const budget = formData.get('Estimated Budget Range') || 'Not specified';
    const currentPlatforms = formData.get('Current Platforms / Tools') || 'Not provided';
    const message = formData.get('Message') || '';
    const subject = `Project inquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Organization type: ${organizationType}`,
      `Service needed: ${service}`,
      `Timeline: ${timeline}`,
      `Estimated budget range: ${budget}`,
      `Current platforms / tools: ${currentPlatforms}`,
      '',
      'Project details:',
      message,
    ].join('\n');

    window.location.href = `mailto:projects@djinfosys.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <SEO
        title="Contact & Pricing | DJ Information Systems, Inc."
        description="Contact DJ Information Systems, Inc. for pricing on websites, Microsoft 365 consulting, Power Platform development, custom software, automation, infrastructure planning, and related hosting options through DJ Hosting Solutions."
      />

      <section className="page-hero contact-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">Contact / Pricing</p>
          <h1>Clear starting points for technology projects, with scope shaped around your needs.</h1>
          <p>
            Use the packages below as planning anchors. Final pricing depends on requirements, integrations, timeline,
            content readiness, deployment needs, and the level of support required after launch.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <p className="eyebrow">Service packages</p>
          <h2>Professional technology services with flexible pricing for real project scope.</h2>
        </div>
        <div className="container pricing-grid">
          {packages.map((item) => (
            <PricingCard key={item.title} {...item} />
          ))}
        </div>
        <p className="container pricing-note">
          Published starting points are planning ranges. Final quotes are confirmed after scope, compliance needs,
          integrations, content volume, infrastructure requirements, and support expectations are reviewed. DJ Hosting
          Solutions plans are listed separately for monthly hosting needs.
        </p>

        <div className="container next-steps-panel" aria-labelledby="next-steps-heading">
          <div>
            <p className="eyebrow">What happens next</p>
            <h2 id="next-steps-heading">A project inquiry should lead to a practical decision, not a vague sales loop.</h2>
            <p>
              The first review is meant to clarify fit, urgency, and the right technical path before anyone commits to a
              build, migration, automation, or modernization effort.
            </p>
          </div>
          <div className="next-steps-grid">
            {nextSteps.map((step, index) => (
              <article className="next-step-card" key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="contact-form">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2>Tell us what you need to build, modernize, automate, or deploy.</h2>
            <p>
              Share the current goal, timeline, systems involved, and known constraints. The project brief will open in your
              email app so you can review it before sending.
            </p>
            <div className="contact-trust-panel" aria-label="Project review trust points">
              {trustPoints.map((point) => (
                <div key={point}>
                  <BadgeCheck size={18} aria-hidden="true" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <form
              className="contact-form"
              onSubmit={handleProjectBriefSubmit}
            >
              <label>
                Name
                <input type="text" name="Name" autoComplete="name" required />
              </label>
              <label>
                Email
                <input type="email" name="Email" autoComplete="email" required />
              </label>
              <label>
                Company
                <input type="text" name="Company" autoComplete="organization" />
              </label>
              <label>
                Organization Type
                <select name="Organization Type" defaultValue="" required>
                  <option value="" disabled>
                    Select organization type
                  </option>
                  <option>Small Business</option>
                  <option>Government / Public Sector</option>
                  <option>Nonprofit</option>
                  <option>Healthcare</option>
                  <option>Education</option>
                  <option>Startup</option>
                  <option>Enterprise / Corporate</option>
                  <option>Other / Not Sure Yet</option>
                </select>
              </label>
              <label>
                Service Needed
                <select name="Service Needed" defaultValue="" required>
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Starter Website / Business Presence</option>
                  <option>Microsoft 365 / SharePoint / Power Platform</option>
                  <option>Custom Software / Automation</option>
                  <option>Infrastructure / Deployment Support</option>
                  <option>Government IT Modernization</option>
                  <option>Other / Not Sure Yet</option>
                </select>
              </label>
              <label>
                Timeline
                <select name="Timeline" defaultValue="" required>
                  <option value="" disabled>
                    Select timeline
                  </option>
                  <option>As soon as possible</option>
                  <option>30-60 days</option>
                  <option>60-90 days</option>
                  <option>Planning for later</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label>
                Estimated Budget Range
                <select name="Estimated Budget Range" defaultValue="" required>
                  <option value="" disabled>
                    Select budget range
                  </option>
                  <option>Under $1,000</option>
                  <option>$1,000-$5,000</option>
                  <option>$5,000-$15,000</option>
                  <option>$15,000+</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="form-wide">
                Current Platforms / Tools
                <input
                  type="text"
                  name="Current Platforms / Tools"
                  placeholder="Microsoft 365, SharePoint, Power Apps, existing website, spreadsheets, custom app, or not sure"
                />
              </label>
              <label className="form-wide">
                Message
                <textarea
                  name="Message"
                  rows="6"
                  placeholder="Briefly describe your goals, users, existing systems, integrations, constraints, or the problem you need solved."
                  required
                ></textarea>
              </label>
              <p className="form-disclosure form-wide">
                By preparing a project brief, you can review the message in your email app before sending. Website inquiry
                information is handled according to our <Link to="/privacy">Privacy Policy</Link> and{' '}
                <Link to="/terms">Terms of Service</Link>.
              </p>
              <button className="button button-primary form-wide" type="submit">
                <Send size={18} aria-hidden="true" />
                Prepare Project Brief
              </button>
            </form>
          </div>

          <aside className="contact-card" aria-label="Contact information">
            <h2>Contact Information</h2>
            <p>
              For project discovery, consulting requests, Microsoft 365 modernization, custom software, automation, or
              infrastructure questions, reach out below.
            </p>
            <div className="contact-method">
              <Mail size={22} aria-hidden="true" />
              <div>
                <span>Email</span>
                <a href="mailto:contact@djinfosys.com">contact@djinfosys.com</a>
              </div>
            </div>
            <div className="contact-method">
              <BriefcaseBusiness size={22} aria-hidden="true" />
              <div>
                <span>Project Inquiries</span>
                <a href="mailto:projects@djinfosys.com">projects@djinfosys.com</a>
              </div>
            </div>
            <div className="contact-method">
              <Phone size={22} aria-hidden="true" />
              <div>
                <span>Phone</span>
                <p>Available after project review</p>
              </div>
            </div>
            <div className="hosting-callout">
              <ServerCog size={25} aria-hidden="true" />
              <h3>DJ Hosting Solutions</h3>
              <p>For monthly hosting plans, VPS accounts, and managed website hosting:</p>
              <a href="https://djhostingsolutions.com">Visit djhostingsolutions.com</a>
              <a href="mailto:support@djhostingsolutions.com">support@djhostingsolutions.com</a>
            </div>
          </aside>
        </div>
      </section>

      <CTASection
        eyebrow="Need a custom quote?"
        title="Share the current challenge and we’ll help define the right first step."
        text="Pricing depends on scope, but the first conversation can quickly separate small fixes from larger modernization work."
      />
    </>
  );
}
