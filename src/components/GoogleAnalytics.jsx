import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const GoogleAnalytics = () => {
  const location = useLocation();
  const gtagId = import.meta.env.VITE_GTAG_ID;

  useEffect(() => {
    if (gtagId) {
      ReactGA.initialize(gtagId);
    }
  }, [gtagId]);

  // Track page views on route changes
  useEffect(() => {
    if (gtagId) {
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname + location.search,
      });
    }
  }, [location, gtagId]);

  return null;
};

export default GoogleAnalytics;
