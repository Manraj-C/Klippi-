
import React, { createContext, useContext, useEffect, useState } from 'react';
import { generateCSRFToken, setCSRFToken } from '@/utils/security';

interface SecurityContextType {
  csrfToken: string;
  isSecureConnection: boolean;
}

const SecurityContext = createContext<SecurityContextType | undefined>(undefined);

export const SecurityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [csrfToken, setCsrfToken] = useState<string>('');
  const [isSecureConnection, setIsSecureConnection] = useState<boolean>(false);

  useEffect(() => {
    // Generate CSRF token on mount
    const token = generateCSRFToken();
    setCsrfToken(token);
    setCSRFToken(token);

    // Check if connection is secure
    setIsSecureConnection(window.location.protocol === 'https:');

    // Set security headers via meta tags
    const cspMeta = document.createElement('meta');
    cspMeta.httpEquiv = 'Content-Security-Policy';
    cspMeta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.gpteng.co; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https:; frame-ancestors 'none';";
    document.head.appendChild(cspMeta);

    const xFrameOptions = document.createElement('meta');
    xFrameOptions.httpEquiv = 'X-Frame-Options';
    xFrameOptions.content = 'DENY';
    document.head.appendChild(xFrameOptions);

    const xContentTypeOptions = document.createElement('meta');
    xContentTypeOptions.httpEquiv = 'X-Content-Type-Options';
    xContentTypeOptions.content = 'nosniff';
    document.head.appendChild(xContentTypeOptions);

    return () => {
      document.head.removeChild(cspMeta);
      document.head.removeChild(xFrameOptions);
      document.head.removeChild(xContentTypeOptions);
    };
  }, []);

  return (
    <SecurityContext.Provider value={{ csrfToken, isSecureConnection }}>
      {children}
    </SecurityContext.Provider>
  );
};

export const useSecurity = (): SecurityContextType => {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurity must be used within a SecurityProvider');
  }
  return context;
};
