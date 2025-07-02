
import React, { createContext, useContext, useEffect, useState } from 'react';
import { generateCSRFToken, setCSRFToken, setSecurityHeaders, validateSession } from '@/utils/security';

interface SecurityContextType {
  csrfToken: string;
  isSecureConnection: boolean;
  sessionValid: boolean;
  securityScore: number;
}

const SecurityContext = createContext<SecurityContextType | undefined>(undefined);

export const SecurityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [csrfToken, setCsrfToken] = useState<string>('');
  const [isSecureConnection, setIsSecureConnection] = useState<boolean>(false);
  const [sessionValid, setSessionValid] = useState<boolean>(false);
  const [securityScore, setSecurityScore] = useState<number>(0);

  useEffect(() => {
    // Generate CSRF token on mount
    const token = generateCSRFToken();
    setCsrfToken(token);
    setCSRFToken(token);

    // Check if connection is secure
    const isSecure = window.location.protocol === 'https:';
    setIsSecureConnection(isSecure);

    // Validate session
    const sessionIsValid = validateSession();
    setSessionValid(sessionIsValid);

    // Set security headers
    setSecurityHeaders();

    // Calculate security score
    let score = 0;
    if (isSecure) score += 25;
    if (sessionIsValid) score += 25;
    if (token.length === 64) score += 25;
    if (navigator.userAgent.includes('Chrome') || navigator.userAgent.includes('Firefox')) score += 25;
    setSecurityScore(score);

    // Security monitoring
    const handleSecurityViolation = (event: SecurityPolicyViolationEvent) => {
      console.warn('Security Policy Violation:', event.violatedDirective, event.blockedURI);
    };

    document.addEventListener('securitypolicyviolation', handleSecurityViolation);

    return () => {
      document.removeEventListener('securitypolicyviolation', handleSecurityViolation);
    };
  }, []);

  return (
    <SecurityContext.Provider value={{ 
      csrfToken, 
      isSecureConnection, 
      sessionValid, 
      securityScore 
    }}>
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
