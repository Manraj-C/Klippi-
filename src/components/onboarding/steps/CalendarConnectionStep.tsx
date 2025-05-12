
import React from "react";
import { Calendar, ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CalendarConnectionStepProps {
  onNext: () => void;
  onPrevious: () => void;
}

export const CalendarConnectionStep: React.FC<CalendarConnectionStepProps> = ({ onNext, onPrevious }) => {
  const handleConnectCalendar = () => {
    // In a real implementation, this would trigger the calendar OAuth flow
    // For now, we'll simulate success and move to the next step
    setTimeout(onNext, 500);
  };
  
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <Calendar className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-medium mb-2">Connect Your Calendar</h3>
        <p className="text-muted-foreground mb-6">
          Connect your calendar so Klippi can help you manage your meetings,
          provide timely reminders, and analyze how you spend time with clients.
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-3 text-sm mb-6">
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-medium">1</span>
              </div>
              <span>Smart meeting scheduling based on your availability</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-medium">2</span>
              </div>
              <span>Automated meeting notes and action items</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-medium">3</span>
              </div>
              <span>AI-powered meeting preparation with client context</span>
            </li>
          </ul>

          <Button 
            variant="outline" 
            onClick={handleConnectCalendar} 
            className="w-full justify-between"
          >
            <div className="flex items-center">
              <img
                src="/integrations/gcal.svg"
                alt="Google Calendar"
                className="w-5 h-5 mr-2"
              />
              Connect Google Calendar
            </div>
            <ExternalLink className="h-4 w-4 opacity-70" />
          </Button>
        </CardContent>
      </Card>

      <div className="flex justify-between mt-8">
        <Button variant="ghost" onClick={onPrevious} className="gap-2">
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>
        <Button onClick={onNext}>Skip this step</Button>
      </div>
      
      <p className="text-xs text-center text-muted-foreground mt-4">
        Klippi only requests read access to your calendar events to analyze meeting patterns.
        You can revoke access at any time.
      </p>
    </div>
  );
};
