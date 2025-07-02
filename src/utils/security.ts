
import DOMPurify from 'dompurify';

// Enhanced input sanitization utilities
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, { ALLOWED_TAGS: [] });
};

export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'ul', 'ol', 'li', 'a'],
    ALLOWED_ATTR: ['href', 'target', 'rel']
  });
};

// Enhanced email validation with additional security checks
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const sanitizedEmail = sanitizeInput(email);
  
  // Additional security checks
  if (sanitizedEmail.length > 254) return false;
  if (sanitizedEmail.includes('<script>') || sanitizedEmail.includes('javascript:')) return false;
  
  return emailRegex.test(sanitizedEmail);
};

// Enhanced password strength validation
export const validatePassword = (password: string): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  
  if (password.length > 128) {
    errors.push('Password must be less than 128 characters long');
  }
  
  if (!/(?=.*[a-z])/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (!/(?=.*[A-Z])/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (!/(?=.*\d)/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  if (!/(?=.*[!@#$%^&*])/.test(password)) {
    errors.push('Password must contain at least one special character');
  }
  
  // Check for common patterns
  if (/(.)\1{2,}/.test(password)) {
    errors.push('Password should not contain repeated characters');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Enhanced rate limiting with IP tracking simulation
export const createRateLimiter = (maxAttempts: number, windowMs: number) => {
  const attempts = new Map<string, { count: number; resetTime: number; blocked: boolean }>();
  
  return (identifier: string): { allowed: boolean; remaining: number; resetTime: number } => {
    const now = Date.now();
    const record = attempts.get(identifier);
    
    if (!record || now > record.resetTime) {
      attempts.set(identifier, { count: 1, resetTime: now + windowMs, blocked: false });
      return { allowed: true, remaining: maxAttempts - 1, resetTime: now + windowMs };
    }
    
    if (record.blocked) {
      return { allowed: false, remaining: 0, resetTime: record.resetTime };
    }
    
    if (record.count >= maxAttempts) {
      record.blocked = true;
      return { allowed: false, remaining: 0, resetTime: record.resetTime };
    }
    
    record.count++;
    return { allowed: true, remaining: maxAttempts - record.count, resetTime: record.resetTime };
  };
};

// Enhanced CSRF token utilities
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

export const setCSRFToken = (token: string): void => {
  sessionStorage.setItem('csrf_token', token);
  // Also store in a secure cookie if possible
  document.cookie = `csrf_token=${token}; Secure; SameSite=Strict; Path=/`;
};

export const getCSRFToken = (): string | null => {
  return sessionStorage.getItem('csrf_token');
};

export const validateCSRFToken = (token: string): boolean => {
  const storedToken = getCSRFToken();
  return storedToken === token && token.length === 64;
};

// URL validation utility
export const validateURL = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url);
    return ['http:', 'https:'].includes(parsedUrl.protocol);
  } catch {
    return false;
  }
};

// SQL injection prevention for client-side filtering
export const sanitizeSearchQuery = (query: string): string => {
  return query
    .replace(/['"`;\\]/g, '') // Remove dangerous characters
    .replace(/\b(DROP|DELETE|INSERT|UPDATE|SELECT|UNION|ALTER|CREATE)\b/gi, '') // Remove SQL keywords
    .trim()
    .substring(0, 100); // Limit length
};

// XSS prevention utility
export const escapeHtml = (text: string): string => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

// Content Security Policy utility
export const setSecurityHeaders = (): void => {
  // Create CSP meta tag if it doesn't exist
  if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
    const cspMeta = document.createElement('meta');
    cspMeta.httpEquiv = 'Content-Security-Policy';
    cspMeta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.gpteng.co https://static.elfsight.com https://api.allorigins.win; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https: wss:; frame-ancestors 'none'; base-uri 'self'; form-action 'self';";
    document.head.appendChild(cspMeta);
  }

  // Add other security headers
  const headers = [
    { name: 'X-Frame-Options', content: 'DENY' },
    { name: 'X-Content-Type-Options', content: 'nosniff' },
    { name: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
    { name: 'Permissions-Policy', content: 'camera=(), microphone=(), geolocation=()' }
  ];

  headers.forEach(({ name, content }) => {
    if (!document.querySelector(`meta[http-equiv="${name}"]`)) {
      const meta = document.createElement('meta');
      meta.httpEquiv = name;
      meta.content = content;
      document.head.appendChild(meta);
    }
  });
};

// Session security utility
export const validateSession = (): boolean => {
  const token = getCSRFToken();
  const isSecure = window.location.protocol === 'https:';
  return Boolean(token && isSecure);
};
