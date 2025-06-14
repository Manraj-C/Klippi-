
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

const ContactFormPopup: React.FC<ContactFormPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    role: "",
    plan: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const { toast } = useToast();

  const validateEmail = (email: string): boolean => {
    const corporateEmailRegex = /^[a-zA-Z0-9._%+-]+@(?!(gmail|yahoo|hotmail|outlook)\.).+\..+$/;
    return corporateEmailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Corporate email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please use a corporate email address";
    }

    if (!formData.role.trim()) {
      newErrors.role = "Role is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for Google Sheets
      const submissionData = {
        Name: formData.name,
        "Corporate Email": formData.email,
        Role: formData.role,
        Plan: formData.plan || "Not specified",
        Timestamp: new Date().toISOString(),
        "Source Page": window.location.href,
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
          event_label: formData.plan || "unspecified_plan",
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
            name="honeypot"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className={errors.name ? "border-red-500" : ""}
              placeholder="Your full name"
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
