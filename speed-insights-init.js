// Vercel Speed Insights Initialization
// This script loads and initializes Speed Insights for the site
import { injectSpeedInsights } from './vendor/vercel-speed-insights/speed-insights.mjs';

// Initialize Speed Insights when the page loads
if (typeof window !== 'undefined') {
    injectSpeedInsights({
        debug: false, // Set to true for debugging in development
        framework: 'vanilla'
    });
}
