
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { sanitizeInput, validateEmail } from '@/utils/security';
import { useSecurity } from '@/contexts/SecurityContext';

interface SecureFormProps {
  onSubmit: (data: { [key: string]: string }) => void;
  fields: Array<{
    name: string;
    label: string;
    type: string;
    required?: boolean;
    validation?: (value: string) => string | null;
  }>;
  submitLabel: string;
  className?: string;
}

export const SecureForm: React.FC<SecureFormProps> = ({
  onSubmit,
  fields,
  submitLabel,
  className = ''
}) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { csrfToken } = useSecurity();

  const validateField = (name: string, value: string): string | null => {
    const field = fields.find(f => f.name === name);
    if (!field) return null;

    if (field.required && !value.trim()) {
      return `${field.label} is required`;
    }

    if (field.type === 'email' && value && !validateEmail(value)) {
      return 'Please enter a valid email address';
    }

    if (field.validation) {
      return field.validation(value);
    }

    return null;
  };

  const handleInputChange = (name: string, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const newErrors: { [key: string]: string } = {};
    fields.forEach(field => {
      const error = validateField(field.name, formData[field.name] || '');
      if (error) {
        newErrors[field.name] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Add CSRF token to form data
      const secureFormData = { ...formData, _token: csrfToken };
      await onSubmit(secureFormData);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {/* Honeypot field for bot detection */}
      <input
        type="text"
        name="website"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />
      
      {fields.map(field => (
        <div key={field.name} className="space-y-2">
          <Label htmlFor={field.name}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </Label>
          <Input
            id={field.name}
            name={field.name}
            type={field.type}
            value={formData[field.name] || ''}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            className={errors[field.name] ? 'border-red-500' : ''}
            autoComplete={field.type === 'password' ? 'new-password' : 'on'}
          />
          {errors[field.name] && (
            <p className="text-sm text-red-500">{errors[field.name]}</p>
          )}
        </div>
      ))}
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Processing...' : submitLabel}
      </Button>
    </form>
  );
};
