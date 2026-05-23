import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputPath = resolve(rootDir, 'public/documents/dj-information-systems-capability-statement.pdf');
const logoPath = resolve(rootDir, 'src/assets/logos/dj-information-systems-logo-web.png');

const logoData = await readFile(logoPath);
const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`;

const html = String.raw`
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>DJ Information Systems Capability Statement</title>
    <style>
      @page {
        size: Letter;
        margin: 0;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: Inter, Arial, sans-serif;
        color: #10233f;
        background: #ffffff;
      }

      .page {
        width: 8.5in;
        min-height: 11in;
        padding: 0.42in;
        background:
          linear-gradient(135deg, rgba(7, 96, 166, 0.08), transparent 31%),
          linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
      }

      .header {
        display: grid;
        grid-template-columns: 1fr 2.3in;
        gap: 0.24in;
        align-items: start;
        padding-bottom: 0.18in;
        border-bottom: 2px solid #0b70b7;
      }

      .brand img {
        width: 2.38in;
        display: block;
        margin-bottom: 0.13in;
      }

      .eyebrow {
        margin: 0 0 0.05in;
        color: #0b70b7;
        font-size: 8.6pt;
        font-weight: 800;
        letter-spacing: 1.1px;
        text-transform: uppercase;
      }

      h1 {
        margin: 0;
        max-width: 5.1in;
        font-size: 26pt;
        line-height: 1.02;
        letter-spacing: 0;
        color: #08213d;
      }

      .intro {
        margin: 0.11in 0 0;
        max-width: 5.25in;
        color: #40516a;
        font-size: 10.1pt;
        line-height: 1.45;
      }

      .entity-card {
        background: #08213d;
        color: #ffffff;
        border-radius: 8px;
        padding: 0.16in;
      }

      .entity-card h2 {
        margin: 0 0 0.09in;
        font-size: 11pt;
        color: #ffffff;
      }

      .entity-row {
        display: grid;
        grid-template-columns: 0.72in 1fr;
        gap: 0.05in;
        padding: 0.052in 0;
        border-top: 1px solid rgba(255, 255, 255, 0.16);
        font-size: 8.7pt;
      }

      .entity-row span {
        color: #9fd6ff;
        font-weight: 800;
      }

      .grid {
        display: grid;
        grid-template-columns: 1.62fr 1fr;
        gap: 0.22in;
        margin-top: 0.22in;
      }

      .section {
        margin-bottom: 0.18in;
      }

      .section h2 {
        margin: 0 0 0.09in;
        color: #08213d;
        font-size: 13.2pt;
      }

      .capabilities {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.095in;
      }

      .capability,
      .box {
        background: rgba(255, 255, 255, 0.92);
        border: 1px solid #d8e7f3;
        border-radius: 8px;
        padding: 0.12in;
        box-shadow: 0 8px 18px rgba(8, 33, 61, 0.06);
      }

      .capability strong,
      .box strong {
        display: block;
        margin-bottom: 0.045in;
        color: #0a4570;
        font-size: 9.4pt;
      }

      .capability p,
      .box p {
        margin: 0;
        color: #45566c;
        font-size: 8.45pt;
        line-height: 1.35;
      }

      ul {
        margin: 0;
        padding-left: 0.15in;
      }

      li {
        margin-bottom: 0.055in;
        color: #45566c;
        font-size: 8.8pt;
        line-height: 1.35;
      }

      .naics {
        border-collapse: collapse;
        width: 100%;
        overflow: hidden;
        border-radius: 8px;
        background: #ffffff;
        border: 1px solid #d8e7f3;
      }

      .naics th,
      .naics td {
        padding: 0.07in 0.08in;
        text-align: left;
        vertical-align: top;
        border-bottom: 1px solid #e3edf6;
        font-size: 8.2pt;
        line-height: 1.25;
      }

      .naics th {
        background: #eef7ff;
        color: #0a4570;
        font-size: 7.7pt;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }

      .naics td:first-child {
        color: #0a4570;
        font-weight: 800;
        white-space: nowrap;
      }

      .naics tr:last-child td {
        border-bottom: 0;
      }

      .note {
        margin-top: 0.06in;
        color: #617087;
        font-size: 6.8pt;
        line-height: 1.35;
      }
    </style>
  </head>
  <body>
    <main class="page">
      <header class="header">
        <div class="brand">
          <img src="${logoSrc}" alt="DJ Information Systems, Inc." />
          <p class="eyebrow">Capability Statement</p>
          <h1>Technology modernization for business and public-sector teams.</h1>
          <p class="intro">
            DJ Information Systems, Inc. provides custom software, Microsoft 365, Power Platform,
            automation, integration, hosting, and infrastructure support for organizations that need
            practical systems built with clarity, documentation, and maintainability.
          </p>
        </div>
        <aside class="entity-card">
          <h2>Vendor Information</h2>
          <div class="entity-row"><span>UEI</span><div>NS3NLWHYEKM3</div></div>
          <div class="entity-row"><span>CAGE</span><div>198F7</div></div>
          <div class="entity-row"><span>Website</span><div>djinfosys.com</div></div>
          <div class="entity-row"><span>Email</span><div>contact@djinfosys.com</div></div>
          <div class="entity-row"><span>Location</span><div>United States</div></div>
        </aside>
      </header>

      <section class="grid">
        <div>
          <section class="section">
            <p class="eyebrow">Core Competencies</p>
            <h2>Services aligned to modernization, integration, and operational improvement.</h2>
            <div class="capabilities">
              <div class="capability">
                <strong>Custom Software and APIs</strong>
                <p>.NET, C#, ASP.NET Core, backend services, secure portals, internal tools, and system integrations.</p>
              </div>
              <div class="capability">
                <strong>Power Platform Automation</strong>
                <p>Power Apps, Power Automate, Dataverse, approvals, notifications, intake, and workflow modernization.</p>
              </div>
              <div class="capability">
                <strong>Microsoft 365 and SharePoint</strong>
                <p>SharePoint modernization, document collaboration, Microsoft 365 planning, and role-aware team solutions.</p>
              </div>
              <div class="capability">
                <strong>Systems Integration</strong>
                <p>APIs, SQL Server, Dataverse, third-party systems, data movement, and reporting foundations.</p>
              </div>
              <div class="capability">
                <strong>Hosting and Infrastructure</strong>
                <p>Docker deployments, VPS planning, Nginx, Proxmox, server management, and deployment-aware support.</p>
              </div>
              <div class="capability">
                <strong>Documentation and Handoff</strong>
                <p>Requirements clarification, administrator handoff, support notes, and maintainable implementation guidance.</p>
              </div>
            </div>
          </section>

          <section class="section">
            <p class="eyebrow">NAICS Alignment</p>
            <h2>Technology service classifications.</h2>
            <table class="naics">
              <thead>
                <tr><th>Code</th><th>Classification</th><th>Fit</th></tr>
              </thead>
              <tbody>
                <tr><td>541511</td><td>Custom Computer Programming Services</td><td>Primary fit for custom apps, APIs, migrations, Power Apps, and software support.</td></tr>
                <tr><td>541512</td><td>Computer Systems Design Services</td><td>Systems planning, Microsoft 365, SharePoint, Power Platform, and integration design.</td></tr>
                <tr><td>541519</td><td>Other Computer Related Services</td><td>IT support, automation, troubleshooting, configuration, and related technical services.</td></tr>
                <tr><td>541513</td><td>Computer Facilities Management Services</td><td>Applicable when a scope includes infrastructure, servers, systems, or IT operations.</td></tr>
                <tr><td>541611</td><td>Management Consulting Services</td><td>Applicable for workflow improvement, requirements, process planning, and documentation.</td></tr>
                <tr><td>611420</td><td>Computer Training</td><td>Applicable for Power Apps, SharePoint, Microsoft 365, end-user, or admin training.</td></tr>
              </tbody>
            </table>
          </section>
        </div>

        <aside>
          <section class="section box">
            <p class="eyebrow">Differentiators</p>
            <ul>
              <li>Practical full-stack delivery across software, data, Microsoft cloud, automation, and infrastructure.</li>
              <li>Comfortable translating business workflow problems into technical implementation plans.</li>
              <li>Focused on requirements clarity, maintainability, documentation, access planning, and operational handoff.</li>
              <li>Small-business responsiveness with public-sector and enterprise-adjacent delivery experience.</li>
            </ul>
          </section>

          <section class="section box">
            <p class="eyebrow">Relevant Experience Context</p>
            <ul>
              <li>Federal health technology environments through subcontractor project support.</li>
              <li>State education technology delivery experience.</li>
              <li>State environmental services technology support context.</li>
              <li>Microsoft 365, Power Platform, custom software, data, and infrastructure-aware delivery.</li>
            </ul>
            <p class="note">Organization references are experience context only and do not imply endorsement.</p>
          </section>

          <section class="section box">
            <p class="eyebrow">Buyer Fit</p>
            <ul>
              <li>Government agencies and subcontracting partners.</li>
              <li>Small businesses and nonprofits modernizing manual workflows.</li>
              <li>Enterprise teams needing focused implementation support.</li>
              <li>Organizations needing practical hosting, deployment, or systems support.</li>
            </ul>
          </section>
        </aside>
      </section>

    </main>
  </body>
</html>
`;

const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle' });
  const pdf = await page.pdf({
    format: 'Letter',
    printBackground: true,
    preferCSSPageSize: true,
    scale: 0.84,
  });
  await writeFile(outputPath, pdf);
  console.log(`Generated ${outputPath}`);
} finally {
  await browser.close();
}
