
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, LineChart, MessageSquare, Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface PromptExample {
  id: string;
  icon: JSX.Element;
  title: string;
  prompt: string;
  category: "analysis" | "monitoring" | "feedback" | "segmentation" | "performance";
}

interface ExamplePromptsProps {
  onPromptSelect: (prompt: string) => void;
}

export const ExamplePrompts = ({ onPromptSelect }: ExamplePromptsProps) => {
  const examples: PromptExample[] = [
    {
      id: "churn-analysis",
      icon: <LineChart className="h-5 w-5" />,
      title: "Run churn analysis",
      prompt: "Run a comprehensive churn analysis for all SMB clients over the past 12 months. Based on the insights, suggest corrective actions.",
      category: "analysis"
    },
    {
      id: "meeting-cadence",
      icon: <Clock className="h-5 w-5" />,
      title: "Enforce meeting cadence",
      prompt: "Check that every CSM is meeting with their MM and ENT clients at least once a month. Flag any gaps.",
      category: "monitoring"
    },
    {
      id: "product-feedback",
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Extract product feedback",
      prompt: "Generate a report of all integration-related feedback from the past 12 months—across emails, notes, and calls. Prepare it for VP Product.",
      category: "feedback"
    },
    {
      id: "customer-segmentation",
      icon: <Users className="h-5 w-5" />,
      title: "Customer segmentation",
      prompt: "Which of our high-risk customers have not received a QBR in the last two quarters?",
      category: "segmentation"
    },
    {
      id: "team-performance",
      icon: <Bot className="h-5 w-5" />,
      title: "Team performance review",
      prompt: "Give me a summary of how each CSM is tracking against their upsell targets this quarter.",
      category: "performance"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {examples.map((example) => (
        <Card 
          key={example.id} 
          className="cursor-pointer hover:shadow-md transition-all duration-200 border-border bg-background hover:bg-muted/20"
          onClick={() => onPromptSelect(example.prompt)}
        >
          <CardContent className="p-4 flex items-start gap-3">
            <div className="mt-1 p-1.5 rounded-md bg-primary/10 text-primary">
              {example.icon}
            </div>
            <div>
              <h3 className="font-medium mb-1">{example.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {example.prompt}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
