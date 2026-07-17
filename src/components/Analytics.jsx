import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const defaultMeasurementId = 'G-7EJ588ECKJ';
const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || defaultMeasurementId;
const analyticsHostnames = new Set(['djinfosys.com', 'www.djinfosys.com']);

function shouldLoadAnalytics() {
  if (!measurementId || typeof window === 'undefined') {
    return false;
  }

  return analyticsHostnames.has(window.location.hostname);
}

export function trackConversion(eventName, params = {}) {
  if (!shouldLoadAnalytics() || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, params);
}

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (!shouldLoadAnalytics()) {
      return undefined;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer.push(arguments);
      };

    const script = document.createElement('script');
    script.async = true;
    script.dataset.cfasync = 'false';
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);

    window.gtag('js', new Date());

    return () => {
      script.remove();
    };
  }, []);

  useEffect(() => {
    if (!shouldLoadAnalytics() || typeof window.gtag !== 'function') {
      return;
    }

    window.gtag('config', measurementId, {
      page_path: `${location.pathname}${location.search}${location.hash}`,
    });
  }, [location.hash, location.pathname, location.search]);

  return null;
}
