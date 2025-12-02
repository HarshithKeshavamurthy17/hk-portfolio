import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

export const Analytics = () => {
    const location = useLocation();

    useEffect(() => {
        // Initialize GA4 with the Measurement ID from environment variables
        const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

        if (measurementId) {
            ReactGA.initialize(measurementId);
        } else {
            console.warn('Google Analytics Measurement ID is missing. Analytics will not be tracked.');
        }
    }, []);

    useEffect(() => {
        // Send page view event on route change
        const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
        if (measurementId) {
            ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
        }
    }, [location]);

    return null;
};
