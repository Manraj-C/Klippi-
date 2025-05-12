
import React, { useState } from "react";
import { Power } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OnboardingWizard } from "./OnboardingWizard";

export const GetStartedButton: React.FC = () => {
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  
  const handleOpenWizard = () => {
    setIsWizardOpen(true);
  };
  
  const handleCloseWizard = () => {
    setIsWizardOpen(false);
  };
  
  return (
    <>
      <Button
        onClick={handleOpenWizard}
        className="fixed bottom-6 right-6 shadow-lg z-40 px-6"
      >
        <Power className="mr-2 h-4 w-4" />
        Get Started
      </Button>
      
      <OnboardingWizard
        isOpen={isWizardOpen}
        onClose={handleCloseWizard}
      />
    </>
  );
};
