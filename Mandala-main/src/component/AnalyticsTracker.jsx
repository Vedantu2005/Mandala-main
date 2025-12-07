import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if the Google Analytics gtag function exists
    if (typeof window.gtag === 'function') {
      // Send a page_view event to Google Analytics
      window.gtag('config', 'G-BCHFWWBF0V', {
        'page_path': location.pathname + location.search,
      });
    }
  }, [location]); // Re-run this effect every time the location changes

  return null; // This component doesn't render anything
};

export default AnalyticsTracker;