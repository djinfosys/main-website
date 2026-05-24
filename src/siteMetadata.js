export const CANONICAL_ORIGIN = 'https://djinfosys.com';
export const SITE_NAME = 'DJ Information Systems, Inc.';
export const DEFAULT_SOCIAL_IMAGE = `${CANONICAL_ORIGIN}/dj-information-systems-social.png`;
export const DEFAULT_SOCIAL_IMAGE_ALT = 'DJ Information Systems, Inc. logo';

export const routeMetadata = [
  {
    path: '/',
    title: 'DJ Information Systems, Inc. | Custom Software, Microsoft 365 & Automation',
    description:
      'DJ Information Systems, Inc. builds custom software, Microsoft 365 solutions, Power Platform applications, workflow automation, SharePoint modernization, and deployment-ready systems for government, small business, nonprofit, and enterprise teams.',
  },
  {
    path: '/about',
    title: 'About DJ Information Systems, Inc. | Practical IT Modernization',
    description:
      'Learn about DJ Information Systems, Inc., a professional technology services company specializing in custom software, Microsoft 365, Power Platform, SharePoint, automation, hosting, and government-ready IT modernization.',
  },
  {
    path: '/experience',
    title: 'Experience | DJ Information Systems, Inc.',
    description:
      'Representative project experience for DJ Information Systems, Inc., including public-sector modernization environments, Microsoft 365, Power Platform, custom software, data, and infrastructure-aware delivery.',
  },
  {
    path: '/services',
    title: 'Services | DJ Information Systems, Inc.',
    description:
      'Explore DJ Information Systems, Inc. services for Microsoft 365, Power Platform, SharePoint, custom .NET software, workflow automation, APIs, hosting, VPS, infrastructure, and DevOps support.',
  },
  {
    path: '/capabilities',
    title: 'Capabilities | DJ Information Systems, Inc.',
    description:
      'Government and business capabilities for DJ Information Systems, Inc., including UEI, CAGE, NAICS codes, technology services, and public-sector readiness.',
  },
  {
    path: '/contact-pricing',
    title: 'Contact & Pricing | DJ Information Systems, Inc.',
    description:
      'Contact DJ Information Systems, Inc. for pricing on websites, Microsoft 365 consulting, Power Platform development, custom software, automation, infrastructure planning, and related hosting options through DJ Hosting Solutions.',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | DJ Information Systems, Inc.',
    description:
      'Privacy policy for DJ Information Systems, Inc., including how project inquiry information is used and protected.',
  },
  {
    path: '/terms',
    title: 'Terms of Service | DJ Information Systems, Inc.',
    description: 'Terms of service for DJ Information Systems, Inc. website visitors and prospective clients.',
  },
];

export function normalizeRoutePath(pathname) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  return pathname.replace(/\/$/, '');
}

export function canonicalUrlForPath(pathname) {
  const normalizedPath = normalizeRoutePath(pathname);
  return `${CANONICAL_ORIGIN}${normalizedPath}`;
}

export function metadataForPath(pathname) {
  const normalizedPath = normalizeRoutePath(pathname);
  return routeMetadata.find((route) => route.path === normalizedPath) || null;
}
