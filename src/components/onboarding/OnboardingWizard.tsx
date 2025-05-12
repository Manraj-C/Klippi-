
import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { EmailConnectionStep } from "./steps/EmailConnectionStep";
import { CrmConnectionStep } from "./steps/CrmConnectionStep";
import { CalendarConnectionStep } from "./steps/CalendarConnectionStep";
import { CompletionStep } from "./steps/CompletionStep";

interface OnboardingWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OnboardingWizard: React.FC<OnboardingWizardProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <EmailConnectionStep onNext={handleNext} />;
      case 2:
        return <CrmConnectionStep onNext={handleNext} onPrevious={handlePrevious} />;
      case 3:
        return <CalendarConnectionStep onNext={handleNext} onPrevious={handlePrevious} />;
      case 4:
        return <CompletionStep onClose={onClose} />;
      default:
        return <EmailConnectionStep onNext={handleNext} />;
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="w-full sm:max-w-md flex flex-col overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Getting Started with Klippi</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-7 w-7">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-center mb-8">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div 
              key={i}
              className={`h-1 rounded-full mx-1 ${
                i + 1 <= step ? "bg-primary w-12" : "bg-muted w-6"
              } transition-all duration-300`}
            />
          ))}
        </div>

        <div className="flex-1 overflow-y-auto pb-6 px-1">
          {renderStep()}
        </div>
      </SheetContent>
    </Sheet>
  );
};
