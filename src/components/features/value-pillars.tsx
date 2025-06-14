
import React from "react";
import { Bot, Zap, Database, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const ValuePillars = () => {
  const pillars = [
    {
      title: "Agentic AI",
      icon: <Bot className="h-6 w-6 text-primary" />,
      description: "AI that works proactively for you",
      features: ["Powerful AI Workflows", "Multi-Trigger Flows", "AI-Based Logic", "Process Automation"]
    },
    {
      title: "Automation",
      icon: <Zap className="h-6 w-6 text-primary" />,
      description: "Save time on routine tasks",
      features: ["CRM Data Entry", "Email Management", "Call Recording", "Customer Research"]
    },
    {
      title: "Customer Intelligence",
      icon: <Database className="h-6 w-6 text-primary" />,
      description: "Actionable insights from your data",
      features: ["Meeting Preparation", "Churn Prediction & Risk Intelligence", "Automated Reporting"]
    },
    {
      title: "Voice of the Customer",
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      description: "Connect stakeholders with valuable feedback",
      features: ["Connect Product, Sales, Execs with Insights", "Automate Customer Feedback", "Feedback on Product, Service & Sentiment"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
      {pillars.map((pillar, index) => (
        <Card key={index} className="glass-card border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-3 justify-center">
              <div className="p-2.5 rounded-lg bg-primary/20 flex items-center justify-center">
                {pillar.icon}
              </div>
              {pillar.title}
            </CardTitle>
            <CardDescription className="text-center">{pillar.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {pillar.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
