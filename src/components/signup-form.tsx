import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Mail, CheckCircle, AlertCircle } from "lucide-react";
import { supabase, testSupabaseConnection } from "@/lib/supabase";
import { useSecurity } from "@/contexts/SecurityContext";
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [licenseType, setLicenseType] = useState("individual");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<{
    checked: boolean;
    success: boolean;
    message: string;
  }>({
    checked: false,
    success: false,
    message: "Checking connection...",
  });
  const { toast } = useToast();
  const { csrfToken } = useSecurity();
  useEffect(() => {
    const checkConnection = async () => {
      const result = await testSupabaseConnection();
      setConnectionStatus({
        checked: true,
        success: result.success,
        message: result.message,
      });
    };
    checkConnection();
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Insert data into the "Website registrations" table
      const { error } = await supabase.from("Website registrations").insert([
        {
          email,
          name,
          company,
          license_type: licenseType,
          created_at: new Date().toISOString(),
        },
      ]);
      if (error) throw error;

      // Also send to Google Sheets
      try {
        const submissionData = {
          Name: name,
          "Corporate Email": email,
          Role: "Waitlist Registration",
          Plan: licenseType === "individual" ? "Individual CSM" : "Team",
          Timestamp: new Date().toISOString(),
          "Source Page": window.location.href,
          "User Agent": navigator.userAgent.substring(0, 200), // Truncate for security
          "Form Type": "Waitlist",
          "CSRF Token": csrfToken,
        };

        console.log("Submitting to Google Sheets:", submissionData);

        const GOOGLE_SHEETS_URL =
          "https://script.google.com/macros/s/AKfycbxtDUXcJy7jha2cYbbjSYPDk-MFfM69Zp0VKK1UBNwgwV7OPI2Sxx96YswjLJU-BFHM/exec";

        // Using no-cors mode for Google Apps Script endpoints
        await fetch(GOOGLE_SHEETS_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        });

        // With no-cors mode, we can't read the response, but we'll assume it worked
        console.log(
          "Submitted to Google Sheets (response not readable in no-cors mode)"
        );
      } catch (googleSheetsError) {
        console.error("Error sending to Google Sheets:", googleSheetsError);
        // Don't fail the submission if Google Sheets fails
      }

      // Try to send email notification if the Edge Function exists
      try {
        await supabase.functions.invoke("send-waitlist-notification", {
          body: {
            email,
            name,
            company,
            licenseType,
            recipientEmail: "manraj@klippi.ai",
          },
        });
      } catch (emailError) {
        console.error("Error sending notification email:", emailError);
        // Don't fail the submission if just the email notification fails
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Thanks for joining the waitlist!",
        description: "We'll notify you when Klippi is ready.",
      });

      // Optional: Send analytics event
      if (typeof (window as any).gtag !== "undefined") {
        (window as any).gtag("event", "WaitlistSignup", {
          event_category: "engagement",
          event_label: licenseType,
        });
      }
    } catch (error: any) {
      console.error("Error submitting to waitlist:", error);
      setIsSubmitting(false);
      toast({
        title: "Something went wrong",
        description: "We couldn't add you to the waitlist. Please try again.",
        variant: "destructive",
      });
    }
  };
  if (isSubmitted) {
    return (
      <div className="glass-card rounded-xl p-8 text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
        <p className="text-foreground/70 mb-6">
          We'll notify you when Klippi is ready to revolutionize your Customer
          Success workflow.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          Back to form
        </Button>
      </div>
    );
  }
  return (
    <div className="glass-card rounded-xl p-8">
      <h3 className="text-2xl font-bold mb-4">Join the Waitlist</h3>

      {connectionStatus.checked}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot field for spam protection */}
        <input
          type="text"
          name="honeypot"
          style={{
            display: "none",
          }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-white/5 border-white/10 focus-visible:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Work Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/5 border-white/10 focus-visible:ring-primary pl-10"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              placeholder="Your Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              className="bg-white/5 border-white/10 focus-visible:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label>License Type</Label>
            <RadioGroup
              value={licenseType}
              onValueChange={setLicenseType}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="individual" id="individual" />
                <Label
                  htmlFor="individual"
                  className="font-normal cursor-pointer"
                >
                  Individual CSM
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="team" id="team" />
                <Label htmlFor="team" className="font-normal cursor-pointer">
                  Team
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 h-12"
          disabled={isSubmitting || !connectionStatus.success}
        >
          {isSubmitting ? (
            "Submitting..."
          ) : (
            <>
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>

        <p className="text-xs text-foreground/60 text-center">
          By signing up, you agree to our Privacy Policy and Terms of Service.
        </p>
      </form>
    </div>
  );
};
export default SignupForm;
