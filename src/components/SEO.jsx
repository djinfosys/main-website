import { useEffect } from 'react';
import {
  DEFAULT_SOCIAL_IMAGE,
  DEFAULT_SOCIAL_IMAGE_ALT,
  SITE_NAME,
  canonicalUrlForPath,
} from '../siteMetadata.js';

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

export default function SEO({ title, description, noIndex = false }) {
  useEffect(() => {
    const canonicalUrl = canonicalUrlForPath(window.location.pathname);

    document.title = title;
    setMeta('description', description);
    setMeta('robots', noIndex ? 'noindex, nofollow' : 'index, follow');
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonicalUrl, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:site_name', SITE_NAME, 'property');
    setMeta('og:image', DEFAULT_SOCIAL_IMAGE, 'property');
    setMeta('og:image:alt', DEFAULT_SOCIAL_IMAGE_ALT, 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', DEFAULT_SOCIAL_IMAGE);
    setCanonical(canonicalUrl);
  }, [title, description, noIndex]);

  return null;
}
