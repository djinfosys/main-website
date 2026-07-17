import { useEffect, useRef } from 'react';
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
  const trackedInitialPageView = useRef(false);

  useEffect(() => {
    if (!shouldLoadAnalytics() || typeof window.gtag !== 'function') {
      return;
    }

    if (!trackedInitialPageView.current) {
      trackedInitialPageView.current = true;
      return;
    }

    window.gtag('config', measurementId, {
      page_path: `${location.pathname}${location.search}${location.hash}`,
    });
  }, [location.hash, location.pathname, location.search]);

  return null;
}
