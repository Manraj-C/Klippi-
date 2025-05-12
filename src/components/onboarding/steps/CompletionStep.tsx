
import React from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CompletionStepProps {
  onClose: () => void;
}

export const CompletionStep: React.FC<CompletionStepProps> = ({ onClose }) => {
  return (
    <div className="space-y-6 flex flex-col items-center text-center">
      <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
        <Check className="h-8 w-8 text-primary" />
      </div>
      
      <h3 className="text-xl font-medium">You're all set!</h3>
      
      <p className="text-muted-foreground">
        Thank you for completing the onboarding. Klippi is now configured to help
        you manage client relationships more efficiently.
      </p>
      
      <div className="bg-muted/50 w-full rounded-lg p-4 my-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-primary/20 p-2 rounded-full">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <span className="font-medium">AI is learning about your clients</span>
        </div>
        <p className="text-sm text-muted-foreground text-left">
          Klippi is now analyzing your connected data to build personalized insights for your clients.
          Initial insights will be available within 24 hours.
        </p>
      </div>
      
      <div className="flex justify-center w-full mt-6">
        <Button size="lg" onClick={onClose}>
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};
