import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

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

function watchForProductionBreaks(page) {
  const problems = [];

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

test.describe('production route smoke tests', () => {
  for (const route of routes) {
    test(`loads ${route.path} without blank screen or asset failures`, async ({ page }) => {
      const problems = watchForProductionBreaks(page);
      const response = await page.goto(route.path, { waitUntil: 'networkidle' });

      expect(response?.ok(), `${route.path} should return a successful response`).toBe(true);
      await expect(page.locator('#main-content')).toBeVisible();
      await expect(page.getByRole('heading', { level: 1, name: route.heading })).toBeVisible();
      await expect(page.locator('body')).not.toBeEmpty();

      expect(problems).toEqual([]);
    });
  }
});

test.describe('core navigation behavior', () => {
  test('mobile menu opens and navigates to services', async ({ page }) => {
    const problems = watchForProductionBreaks(page);

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
