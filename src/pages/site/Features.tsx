
import React from "react";
import SiteLayout from "@/components/site/SiteLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Zap, Database, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const pillars = [
    {
      id: "agentic-ai",
      title: "Agentic AI",
      icon: <Bot className="h-4 w-4" />,
      description: "AI that works proactively for you, automating complex workflows and making intelligent decisions based on your customer data.",
      features: [
        "Powerful AI Workflows",
        "Multi-Trigger Flows",
        "AI-Based Logic",
        "Process Automation"
      ]
    },
    {
      id: "automation",
      title: "Automation",
      icon: <Zap className="h-4 w-4" />,
      description: "Save valuable time by automating repetitive tasks, allowing you to focus on high-value customer interactions.",
      features: [
        "CRM Data Entry",
        "Email Management",
        "Call Recording",
        "Customer Research"
      ]
    },
    {
      id: "customer-intelligence",
      title: "Customer Intelligence",
      icon: <Database className="h-4 w-4" />,
      description: "Gain deeper insights into customer behavior with predictive analytics and intelligent data processing.",
      features: [
        "Meeting Preparation",
        "Churn Prediction & Risk Intelligence",
        "Automated Reporting"
      ]
    },
    {
      id: "voice-of-customer",
      title: "Voice of the Customer",
      icon: <MessageSquare className="h-4 w-4" />,
      description: "Capture, analyze, and distribute customer feedback to the right stakeholders automatically.",
      features: [
        "Connect Product, Sales, Execs with Insights",
        "Automate Customer Feedback",
        "Feedback on Product, Service & Sentiment"
      ]
    }
  ];

  return (
    <SiteLayout>
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Powerful Features</h1>
          <p className="text-lg text-muted-foreground">
            Discover how Klippi's features can transform your customer success operations.
          </p>
        </div>
        
        <Tabs defaultValue="agentic-ai" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            {pillars.map((pillar) => (
              <TabsTrigger key={pillar.id} value={pillar.id} className="flex items-center gap-2">
                {pillar.icon}
                <span className="hidden sm:inline">{pillar.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {pillars.map((pillar) => (
            <TabsContent key={pillar.id} value={pillar.id} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">{pillar.title}</h2>
                  <p className="mb-4 text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
                <div className="bg-muted/30 rounded-lg p-6">
                  <ul className="space-y-3">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </SiteLayout>
  );
};

export default Features;
