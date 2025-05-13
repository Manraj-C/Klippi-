
import React from 'react';
import { getIntegrationLogo } from '@/utils/image-utils';
import { cn } from '@/lib/utils';

interface IntegrationLogoProps {
  name: string;
  className?: string;
  alt?: string;
}

/**
 * A component for displaying integration logos with automatic fallback
 */
export const IntegrationLogo: React.FC<IntegrationLogoProps> = ({ 
  name, 
  className = "h-6 w-6 object-contain",
  alt
}) => {
  const [hasError, setHasError] = React.useState(false);
  const normalizedName = name.toLowerCase().replace(/\s+/g, '-').replace(/\.ai$/i, '');
  
  const handleImageError = () => {
    setHasError(true);
    console.log(`Failed to load image for ${name}, using fallback`);
  };

  // If there was an error loading the image, show a fallback
  if (hasError) {
    return (
      <div className={cn("flex items-center justify-center bg-muted rounded-md", className)}>
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }
  
  return (
    <img 
      src={getIntegrationLogo(normalizedName)} 
      alt={alt || `${name} logo`} 
      className={className}
      onError={handleImageError}
    />
  );
};

export default IntegrationLogo;
