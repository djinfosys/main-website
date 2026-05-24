import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  DEFAULT_SOCIAL_IMAGE,
  DEFAULT_SOCIAL_IMAGE_ALT,
  SITE_NAME,
  canonicalUrlForPath,
  routeMetadata,
} from '../src/siteMetadata.js';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(currentDir, '..');
const distDir = path.join(projectRoot, 'dist');
const indexPath = path.join(distDir, 'index.html');
const baseHtml = await readFile(indexPath, 'utf8');

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function removeGeneratedMetadata(html) {
  const metadataPatterns = [
    /<title>[\s\S]*?<\/title>\s*/i,
    /<meta\s+name=["']description["'][^>]*>\s*/gi,
    /<meta\s+name=["']robots["'][^>]*>\s*/gi,
    /<meta\s+name=["']twitter:[^"']+["'][^>]*>\s*/gi,
    /<meta\s+property=["']og:[^"']+["'][^>]*>\s*/gi,
    /<link\s+rel=["']canonical["'][^>]*>\s*/gi,
  ];

  return metadataPatterns.reduce((updatedHtml, pattern) => updatedHtml.replace(pattern, ''), html);
}

function metadataBlock(route) {
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const canonicalUrl = escapeHtml(canonicalUrlForPath(route.path));
  const socialImage = escapeHtml(DEFAULT_SOCIAL_IMAGE);
  const socialImageAlt = escapeHtml(DEFAULT_SOCIAL_IMAGE_ALT);
  const siteName = escapeHtml(SITE_NAME);

  return `    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${siteName}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${socialImage}" />
    <meta property="og:image:alt" content="${socialImageAlt}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${socialImage}" />`;
}

function applyMetadata(html, route) {
  const cleanedHtml = removeGeneratedMetadata(html);
  return cleanedHtml.replace(/\s*<\/head>/i, `\n${metadataBlock(route)}\n  </head>`);
}

for (const route of routeMetadata) {
  const html = applyMetadata(baseHtml, route);

  if (route.path === '/') {
    await writeFile(indexPath, html);
    continue;
  }

  const routeDir = path.join(distDir, route.path.replace(/^\//, ''));
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, 'index.html'), html);
}

console.log(`Generated social metadata HTML for ${routeMetadata.length} routes.`);
