
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sanitizeInput, validateEmail, createRateLimiter } from "@/utils/security";
import { useSecurity } from "@/contexts/SecurityContext";

interface ContactFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  role: string;
  plan: string;
}

// Rate limiter: 3 submissions per 10 minutes
const submissionRateLimiter = createRateLimiter(3, 10 * 60 * 1000);

const ContactFormPopup: React.FC<ContactFormPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    role: "",
    plan: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [honeypot, setHoneypot] = useState("");
  const { toast } = useToast();
  const { csrfToken } = useSecurity();

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    // Sanitize and validate name
    const sanitizedName = sanitizeInput(formData.name);
    if (!sanitizedName.trim()) {
      newErrors.name = "Name is required";
    } else if (sanitizedName.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (sanitizedName.length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Corporate email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please use a valid corporate email address";
    }

    // Validate role
    const sanitizedRole = sanitizeInput(formData.role);
    if (!sanitizedRole.trim()) {
      newErrors.role = "Role is required";
    } else if (sanitizedRole.length > 100) {
      newErrors.role = "Role must be less than 100 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot (bot detection)
    if (honeypot) {
      console.log("Bot detected");
      return;
    }

    // Rate limiting
    if (!submissionRateLimiter('contact-form')) {
      toast({
        title: "Too many submissions",
        description: "Please wait before submitting again.",
        variant: "destructive",
      });
      return;
    }
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare sanitized data for Google Sheets
      const submissionData = {
        Name: sanitizeInput(formData.name),
        "Corporate Email": sanitizeInput(formData.email.toLowerCase()),
        Role: sanitizeInput(formData.role),
        Plan: formData.plan || "Not specified",
        Timestamp: new Date().toISOString(),
        "Source Page": window.location.href,
        "User Agent": navigator.userAgent.substring(0, 200), // Truncate for security
        "CSRF Token": csrfToken
      };

      // Google Sheets Web App URL
      const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbzA5T1zAp9GK18koQtcm-pluHEE1AFk_9p87tuuepzWPE1kWOTjkOU7t1Z3Lw_b0BOT/exec";
      
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      // Show success message
      toast({
        title: "Thanks for your interest!",
        description: "We'll be in touch shortly.",
      });

      // Reset form and close popup
      setFormData({ name: "", email: "", role: "", plan: "" });
      setErrors({});
      onClose();

      // Optional: Send analytics event
      if (typeof (window as any).gtag !== "undefined") {
        (window as any).gtag("event", "ContactFormSubmitted", {
          event_category: "engagement",
          event_label: sanitizeInput(formData.plan || "unspecified_plan"),
        });
      }

    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    // Basic length validation on input
    if (value.length > 500) return;
    
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold flex items-center justify-between">
            📝 Let's Connect
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-6 w-6"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot field for spam protection */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Hidden CSRF token */}
          <input type="hidden" name="_token" value={csrfToken} />

          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className={errors.name ? "border-red-500" : ""}
              placeholder="Your full name"
              maxLength={100}
              autoComplete="name"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Corporate Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={errors.email ? "border-red-500" : ""}
              placeholder="you@company.com"
              maxLength={254}
              autoComplete="email"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Role *</Label>
            <Input
              id="role"
              type="text"
              value={formData.role}
              onChange={(e) => handleInputChange("role", e.target.value)}
              className={errors.role ? "border-red-500" : ""}
              placeholder="e.g., Customer Success Manager"
              maxLength={100}
              autoComplete="organization-title"
            />
            {errors.role && (
              <p className="text-sm text-red-500">{errors.role}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="plan">Plan (Optional)</Label>
            <Select value={formData.plan} onValueChange={(value) => handleInputChange("plan", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Assistant">Assistant</SelectItem>
                <SelectItem value="Full-Time CSM">Full-Time CSM</SelectItem>
                <SelectItem value="Consultant">Consultant</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormPopup;
