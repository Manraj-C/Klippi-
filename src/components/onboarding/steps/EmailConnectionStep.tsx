
import React from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface EmailConnectionStepProps {
  onNext: () => void;
}

export const EmailConnectionStep: React.FC<EmailConnectionStepProps> = ({ onNext }) => {
  const handleConnectGmail = () => {
    // In a real implementation, this would trigger the Gmail OAuth flow
    // For now, we'll simulate success and move to the next step
    setTimeout(onNext, 500);
  };
  
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <Mail className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-medium mb-2">Connect Your Gmail</h3>
        <p className="text-muted-foreground mb-6">
          Klippi needs access to your emails to analyze patterns and provide AI-driven insights
          to help you manage client communications more efficiently.
        </p>
      </div>

      <Card className="border-dashed">
        <CardContent className="pt-6">
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-medium">1</span>
              </div>
              <span>Analyze email patterns with clients</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-medium">2</span>
              </div>
              <span>Automate routine follow-ups and check-ins</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-medium">3</span>
              </div>
              <span>Get AI-powered suggestions to improve engagement</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-8">
        <Button onClick={handleConnectGmail} size="lg" className="w-full sm:w-auto">
          Connect Gmail
        </Button>
      </div>
      
      <p className="text-xs text-center text-muted-foreground mt-4">
        Klippi only accesses email data needed for analyzing client communications.
        We never store or read personal emails.
      </p>
    </div>
  );
};
