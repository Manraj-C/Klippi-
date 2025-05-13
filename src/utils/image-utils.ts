
import { useMemo, useState } from 'react';

/**
 * Utility functions for handling images
 */

// List of valid integration logos with normalized names as keys
export const INTEGRATION_LOGOS: Record<string, string> = {
  salesforce: '/integrations/salesforce.svg',
  gmail: '/integrations/gmail.svg',
  'google-calendar': '/integrations/gcal.svg',
  slack: '/integrations/slack.svg',
  zapier: '/integrations/zapier.svg',
  fireflies: '/integrations/fireflies.svg',
  chatgpt: '/integrations/chatgpt.svg',
  intercom: '/integrations/intercom.svg',
  jira: '/integrations/jira.svg',
  zendesk: '/integrations/zendesk.svg',
  hubspot: '/integrations/hubspot.svg',
  zoom: '/integrations/zoom.svg',
  linkedin: '/integrations/linkedin.svg',
}

// Default fallback image for integrations
export const DEFAULT_INTEGRATION_LOGO = '/integrations/default-integration.svg';

/**
 * Normalizes an integration name for consistent lookup
 */
export function normalizeIntegrationName(name: string): string {
  return name.toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/\.ai$/i, '') // Remove .ai suffix if present
    .replace(/[^\w-]/g, ''); // Remove any non-word chars except dashes
}

/**
 * Returns an integration logo URL, with fallback to default if not found
 * @param name The integration name (lowercase, no spaces)
 * @returns URL to the integration logo
 */
export function getIntegrationLogo(name: string): string {
  // Normalize the name (lowercase, remove spaces, etc)
  const normalizedName = normalizeIntegrationName(name);
  
  // Try exact match first
  if (INTEGRATION_LOGOS[normalizedName]) {
    return INTEGRATION_LOGOS[normalizedName];
  }
  
  // Try partial match (if normalizedName contains one of our known integrations)
  const partialMatch = Object.keys(INTEGRATION_LOGOS).find(key => 
    normalizedName.includes(key) || key.includes(normalizedName)
  );
  
  if (partialMatch) {
    console.log(`Using partial match for ${name}: ${partialMatch}`);
    return INTEGRATION_LOGOS[partialMatch];
  }
  
  console.log(`No logo found for ${name}, using default`);
  return DEFAULT_INTEGRATION_LOGO;
}

/**
 * Image component with built-in error handling
 */
export function useImageWithFallback() {
  // This function is now deprecated in favor of the improved IntegrationLogo component
  // but kept for backward compatibility
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    // Set fallback image when image fails to load
    if (target.src !== DEFAULT_INTEGRATION_LOGO) {
      console.log(`Image failed to load, using fallback: ${target.src}`);
      target.src = DEFAULT_INTEGRATION_LOGO;
    }
  };

  return { handleImageError };
}

/**
 * A hook to preload integration images
 */
export function usePreloadIntegrationLogos() {
  const [loaded, setLoaded] = useState(false);
  
  useMemo(() => {
    if (!loaded) {
      // Preload all integration logos
      Object.values(INTEGRATION_LOGOS).forEach(src => {
        const img = new Image();
        img.src = src;
      });
      
      // Also preload the default logo
      const defaultImg = new Image();
      defaultImg.src = DEFAULT_INTEGRATION_LOGO;
      
      setLoaded(true);
    }
  }, [loaded]);
}
