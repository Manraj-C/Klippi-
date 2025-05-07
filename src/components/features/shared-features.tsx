import React from "react";
import { Headset, Settings, Search, Share } from "lucide-react";
import { FeatureCard } from "./feature-card";
export const SharedFeatures = () => {
  const sharedFeatures = [{
    title: "Offload Support Emails",
    description: "Get AI to draft customer replies using your knowledge base.",
    icon: <Headset className="h-6 w-6 text-primary" />,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=450&q=80",
    cta: {
      text: "Try the Support Email Agent"
    }
  }, {
    title: "Agentive AI Workflows",
    description: "Experience true AI partnership with autonomous agents that learn your preferences, adapt to your processes, and work alongside you across your entire G2M tech stack.",
    icon: <Settings className="h-6 w-6 text-primary" />,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&h=450&q=80",
    cta: {
      text: "Explore Workflow Automation"
    }
  }, {
    title: "Automate Customer Research",
    description: "Instantly gather insights from your product data, support tickets, and past communications to understand client health and needs without manual digging.",
    icon: <Search className="h-6 w-6 text-primary" />,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=450&q=80",
    cta: {
      text: "See Research Tools"
    }
  }, {
    title: "Scale Client Communications",
    description: "Create personalized updates for multiple accounts simultaneously, ensuring consistent messaging while maintaining the human touch your clients expect.",
    icon: <Share className="h-6 w-6 text-primary" />,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=450&q=80",
    cta: {
      text: "Try Communication Tools"
    }
  }];
  return <>
      <div className="text-center mb-8 mt-16">
        
        
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sharedFeatures.map((feature, index) => <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} image={feature.image} cta={feature.cta} className="flex flex-col h-full" />)}
      </div>
    </>;
};