
import React from 'react';
import { getIntegrationLogo, useImageWithFallback } from '@/utils/image-utils';

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
  const { handleImageError } = useImageWithFallback();
  
  return (
    <img 
      src={getIntegrationLogo(name)} 
      alt={alt || `${name} logo`} 
      className={className}
      onError={handleImageError}
    />
  );
};

export default IntegrationLogo;
