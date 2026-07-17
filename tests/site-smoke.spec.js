import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readFile } from 'node:fs/promises';
import { DEFAULT_SOCIAL_IMAGE, canonicalUrlForPath, routeMetadata } from '../src/siteMetadata.js';

const routes = [
  {
    path: '/',
    heading: /Custom software, Microsoft 365 modernization, and automation/i,
  },
  {
    path: '/about',
    heading: /Technology consulting grounded in practical modernization/i,
  },
  {
    path: '/experience',
    heading: /Representative technology delivery experience/i,
  },
  {
    path: '/services',
    heading: /Focused technology services/i,
  },
  {
    path: '/capabilities',
    heading: /Government and business technology capabilities/i,
  },
  {
    path: '/contact-pricing',
    heading: /Clear starting points for technology projects/i,
  },
  {
    path: '/privacy',
    heading: /How project and contact information is handled/i,
  },
  {
    path: '/terms',
    heading: /Website and inquiry terms/i,
  },
];

const watchedResourceTypes = new Set(['script', 'stylesheet', 'image', 'font']);
const canonicalOrigin = 'https://djinfosys.com';
const capabilityStatementPath = '/documents/dj-information-systems-capability-statement.pdf';
const externalAnalyticsUrlPattern =
  /^https:\/\/(?:[^/]+\.)?(?:googletagmanager\.com|google-analytics\.com|analytics\.google\.com|g\.doubleclick\.net|tagassistant\.google\.com)\//;

function expectedCanonicalUrl(path) {
  const cleanPath = path.split(/[?#]/)[0];
  const normalizedPath = cleanPath === '/' ? '/' : cleanPath.replace(/\/$/, '');
  return `${canonicalOrigin}${normalizedPath}`;
}

async function watchForProductionBreaks(page) {
  const problems = [];

  await page.route(externalAnalyticsUrlPattern, async (route) => {
    const resourceType = route.request().resourceType();
    await route.fulfill({
      status: resourceType === 'script' ? 200 : 204,
      contentType: resourceType === 'script' ? 'application/javascript' : 'text/plain',
      body: '',
    });
  });

  page.on('console', (message) => {
    if (message.type() === 'error') {
      problems.push(`Console error: ${message.text()}`);
    }
  });

  page.on('pageerror', (error) => {
    problems.push(`Page error: ${error.message}`);
  });

  page.on('requestfailed', (request) => {
    problems.push(`Request failed: ${request.url()} ${request.failure()?.errorText ?? ''}`.trim());
  });

  page.on('response', (response) => {
    const resourceType = response.request().resourceType();
    if (watchedResourceTypes.has(resourceType) && response.status() >= 400) {
      problems.push(`Asset returned ${response.status()}: ${response.url()}`);
    }
  });

  return problems;
}

function summarizeAccessibilityViolations(violations) {
  return violations.map((violation) => ({
    id: violation.id,
    impact: violation.impact,
    help: violation.help,
    targets: violation.nodes.map((node) => node.target.join(' ')),
  }));
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

async function fillProjectBriefForm(page) {
  await page.getByLabel('Name').fill('Test Visitor');
  await page.getByLabel('Email').fill('test@example.com');
  await page.getByLabel('Organization Type').selectOption('Small Business');
  await page.getByLabel('Service Needed').selectOption('Custom Software / Automation');
  await page.getByLabel('Timeline').selectOption('30-60 days');
  await page.getByLabel('Estimated Budget Range').selectOption('$5,000-$15,000');
  await page.getByLabel('Message').fill('Testing the production contact form flow.');
}

test.describe('production route smoke tests', () => {
  for (const route of routes) {
    test(`loads ${route.path} without blank screen or asset failures`, async ({ page }) => {
      const problems = await watchForProductionBreaks(page);
      const response = await page.goto(route.path, { waitUntil: 'networkidle' });

      expect(response?.ok(), `${route.path} should return a successful response`).toBe(true);
      await expect(page.locator('#main-content')).toBeVisible();
      await expect(page.getByRole('heading', { level: 1, name: route.heading })).toBeVisible();
      await expect(page.locator('body')).not.toBeEmpty();
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', expectedCanonicalUrl(route.path));
      await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', expectedCanonicalUrl(route.path));

      expect(problems).toEqual([]);
    });
  }
});

test.describe('core navigation behavior', () => {
  test('canonical URL uses the apex domain and ignores tracking details', async ({ page }) => {
    await page.goto('/services?utm_source=qa#services', { waitUntil: 'networkidle' });

    await expect(page.getByRole('heading', { level: 1, name: /Focused technology services/i })).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://djinfosys.com/services');
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', 'https://djinfosys.com/services');
  });

  test('mobile menu opens and navigates to services', async ({ page }) => {
    const problems = await watchForProductionBreaks(page);

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.getByRole('button', { name: /open navigation menu/i }).click();

    const primaryNavigation = page.getByRole('navigation', { name: /primary navigation/i });
    await expect(primaryNavigation).toHaveClass(/is-open/);

    await primaryNavigation.getByRole('link', { name: 'Services' }).click();
    await expect(page).toHaveURL(/\/services$/);
    await expect(page.getByRole('heading', { level: 1, name: /Focused technology services/i })).toBeVisible();

    expect(problems).toEqual([]);
  });

  test('primary CTA routes to the contact form section', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.getByRole('link', { name: /start scope review/i }).click();

    await expect(page).toHaveURL(/\/contact-pricing#contact-form$/);
    await expect(page.locator('#contact-form')).toBeVisible();
    await expect(page.locator('#contact-form')).toBeInViewport();
  });

  test('capability statement PDF is linked and served', async ({ page, request }) => {
    await page.goto('/capabilities', { waitUntil: 'networkidle' });

    await expect(page.getByRole('link', { name: /download capability statement/i })).toHaveAttribute(
      'href',
      capabilityStatementPath,
    );

    const response = await request.get(capabilityStatementPath);
    const body = await response.body();

    expect(response.ok()).toBe(true);
    expect(response.headers()['content-type']).toContain('application/pdf');
    expect(body.length).toBeGreaterThan(10000);
  });

  test('footer service links navigate to specific service sections', async ({ page }) => {
    await page.goto('/capabilities', { waitUntil: 'networkidle' });

    await page
      .getByRole('contentinfo')
      .getByRole('link', { name: 'Custom software and APIs' })
      .click();

    await expect(page).toHaveURL(/\/services#custom-software$/);
    await expect(page.locator('#custom-software')).toBeInViewport();
  });

  test('project brief form posts and shows a success message', async ({ page }) => {
    await page.route('**/*', async (route) => {
      if (route.request().url().endsWith('/test-contact-submit')) {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ success: true }),
        });
        return;
      }

      await route.continue();
    });

    await page.goto('/contact-pricing#contact-form', { waitUntil: 'networkidle' });

    await fillProjectBriefForm(page);
    await page.getByRole('button', { name: /send project brief/i }).click();

    await expect(page.getByRole('status')).toContainText(/project brief was sent/i);
  });

  test('project brief form recovers cleanly when the submit endpoint fails', async ({ page }) => {
    const pageErrors = [];

    page.on('pageerror', (error) => {
      pageErrors.push(error.message);
    });

    await page.route('**/*', async (route) => {
      if (route.request().url().endsWith('/test-contact-submit')) {
        await route.fulfill({
          status: 500,
          contentType: 'application/json',
          body: JSON.stringify({ success: false }),
        });
        return;
      }

      await route.continue();
    });

    await page.goto('/contact-pricing#contact-form', { waitUntil: 'networkidle' });

    await fillProjectBriefForm(page);
    await page.getByRole('button', { name: /send project brief/i }).click();

    const status = page.getByRole('status');

    await expect(status).toContainText(/form could not send/i);
    await expect(status.getByRole('link', { name: 'projects@djinfosys.com' })).toHaveAttribute(
      'href',
      'mailto:projects@djinfosys.com',
    );
    await expect(page.getByRole('button', { name: /send project brief/i })).toBeEnabled();
    expect(pageErrors).toEqual([]);
  });
});

test.describe('accessibility smoke tests', () => {
  for (const path of ['/', '/services', '/capabilities', '/contact-pricing']) {
    test(`has no serious accessibility violations on ${path}`, async ({ page }) => {
      await page.goto(path, { waitUntil: 'networkidle' });

      const scan = await new AxeBuilder({ page }).analyze();
      const seriousViolations = scan.violations.filter((violation) => ['critical', 'serious'].includes(violation.impact));

      expect(seriousViolations, JSON.stringify(summarizeAccessibilityViolations(seriousViolations), null, 2)).toEqual([]);
    });
  }
});

test.describe('production nginx config', () => {
  let nginxConfig;

  test.beforeAll(async () => {
    nginxConfig = await readFile(new URL('../nginx.conf', import.meta.url), 'utf8');
  });

  test('sets core production security headers', async () => {
    for (const header of [
      'Strict-Transport-Security',
      'Content-Security-Policy',
      'Permissions-Policy',
      'X-Frame-Options',
      'X-Content-Type-Options',
      'Referrer-Policy',
    ]) {
      expect(nginxConfig).toContain(header);
    }

    expect(nginxConfig).toContain("connect-src 'self' https://formsubmit.co");
    expect(nginxConfig).toContain("form-action 'self' https://formsubmit.co");
  });

  test('serves only known app routes through React and returns 404 for unknown paths', async () => {
    expect(nginxConfig).toContain(
      'location ~ ^/(?<app_route>about|experience|services|capabilities|contact-pricing|privacy|terms)/?$',
    );
    expect(nginxConfig).toContain('try_files /$app_route/index.html /index.html =404');
    expect(nginxConfig).toContain('location = /dj-information-systems-social.png');
    expect(nginxConfig).toContain('error_page 404 /index.html');
    expect(nginxConfig).toContain('return 404');
  });
});

test.describe('static route social metadata', () => {
  test('build generates route-specific HTML for social crawlers', async () => {
    for (const route of routeMetadata) {
      const htmlPath =
        route.path === '/'
          ? new URL('../dist/index.html', import.meta.url)
          : new URL(`../dist${route.path}/index.html`, import.meta.url);
      const html = await readFile(htmlPath, 'utf8');
      const canonicalUrl = canonicalUrlForPath(route.path);
      const title = escapeHtml(route.title);
      const description = escapeHtml(route.description);

      expect(html).toContain(`<title>${title}</title>`);
      expect(html).toContain(`<meta name="description" content="${description}" />`);
      expect(html).toContain(`<link rel="canonical" href="${canonicalUrl}" />`);
      expect(html).toContain(`<meta property="og:title" content="${title}" />`);
      expect(html).toContain(`<meta property="og:description" content="${description}" />`);
      expect(html).toContain(`<meta property="og:url" content="${canonicalUrl}" />`);
      expect(html).toContain(`<meta property="og:image" content="${DEFAULT_SOCIAL_IMAGE}" />`);
      expect(html).toContain(`<meta name="twitter:card" content="summary_large_image" />`);
      expect(html).toContain(`<meta name="twitter:title" content="${title}" />`);
    }
  });
});
