
/**
 * Utility functions for handling images
 */

// List of valid integration logos
export const INTEGRATION_LOGOS = {
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
 * Returns an integration logo URL, with fallback to default if not found
 * @param name The integration name (lowercase, no spaces)
 * @returns URL to the integration logo
 */
export function getIntegrationLogo(name: string): string {
  // Normalize the name (lowercase, remove spaces, etc)
  const normalizedName = name.toLowerCase().replace(/\s+/g, '-');
  
  // Try to find the logo in our map
  const logoPath = INTEGRATION_LOGOS[normalizedName as keyof typeof INTEGRATION_LOGOS];
  
  return logoPath || DEFAULT_INTEGRATION_LOGO;
}

/**
 * Image component with built-in error handling
 */
export function useImageWithFallback() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    // Set fallback image when image fails to load
    if (target.src !== DEFAULT_INTEGRATION_LOGO) {
      target.src = DEFAULT_INTEGRATION_LOGO;
    }
  };

  return { handleImageError };
}
