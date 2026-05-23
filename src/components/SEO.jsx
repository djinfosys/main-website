import { useEffect } from 'react';

const CANONICAL_ORIGIN = 'https://djinfosys.com';

function setMeta(name, content, attribute = 'name') {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setCanonical(href) {
  let element = document.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function getCanonicalUrl() {
  const path = window.location.pathname === '/' ? '/' : window.location.pathname.replace(/\/$/, '');
  return `${CANONICAL_ORIGIN}${path}`;
}

export default function SEO({ title, description, noIndex = false }) {
  useEffect(() => {
    const canonicalUrl = getCanonicalUrl();

    document.title = title;
    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonicalUrl, 'property');
    setMeta('robots', noIndex ? 'noindex, nofollow' : 'index, follow');
    setCanonical(canonicalUrl);
  }, [title, description, noIndex]);

  return null;
}
