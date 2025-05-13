
import React from "react";
import { IntegrationCard } from "./integrations/integration-card";
import { IntegrationWheel } from "./integrations/integration-wheel";

const IntegrationsSection = () => {
  const integrations = [
    {
      name: "Salesforce",
      logo: "salesforce"
    },
    {
      name: "Gmail",
      logo: "gmail"
    },
    {
      name: "Google Calendar",
      logo: "google-calendar"
    },
    {
      name: "Slack",
      logo: "slack"
    },
    {
      name: "Zapier",
      logo: "zapier"
    },
    {
      name: "Fireflies.ai",
      logo: "fireflies"
    },
    {
      name: "ChatGPT",
      logo: "chatgpt"
    },
    {
      name: "Intercom",
      logo: "intercom"
    },
    {
      name: "Jira",
      logo: "jira"
    },
    {
      name: "Zendesk",
      logo: "zendesk"
    },
    {
      name: "HubSpot",
      logo: "hubspot"
    }
  ];
  
  // Define the wheel integrations with proper type-safe positions
  const wheelIntegrations = [
    {
      name: "Salesforce",
      logo: "salesforce",
      position: "top" as const
    },
    {
      name: "LinkedIn",
      logo: "linkedin",
      position: "top-right" as const
    },
    {
      name: "Jira",
      logo: "jira",
      position: "right" as const
    },
    {
      name: "HubSpot",
      logo: "hubspot",
      position: "bottom-right" as const
    },
    {
      name: "Google Calendar",
      logo: "google-calendar",
      position: "bottom" as const
    },
    {
      name: "Gmail",
      logo: "gmail",
      position: "bottom-left" as const
    },
    {
      name: "Slack",
      logo: "slack",
      position: "left" as const
    },
    {
      name: "Intercom",
      logo: "intercom",
      position: "top-left" as const
    }
  ];
  
  return (
    <section id="integrations" className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Powerful</span> Integrations
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-8">
            Instantly connect your tools and allow AI to work for you across your entire tech stack.
            Klippi eliminates the need for multiple point solutions.
          </p>
        </div>
        
        {/* Integration carousel */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <div className="overflow-hidden py-4">
            <div className="flex animate-carousel">
              {integrations.map((integration, index) => (
                <IntegrationCard key={index} name={integration.name} logo={integration.logo} />
              ))}
              {/* Duplicate first few items to create seamless loop */}
              {integrations.slice(0, 4).map((integration, index) => (
                <IntegrationCard key={`dup-${index}`} name={integration.name} logo={integration.logo} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Integration wheel section - new component */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">The Klippi Way</h3>
          <p className="text-foreground/80 max-w-3xl mx-auto mb-10">
            Supercharge your customer success operations by adding AI automation to where
            you already work. Connect once and let Klippi work across all your tools, replacing 
            fragmented solutions with one unified platform that learns your business 
            context and continuously improves with usage.
          </p>
          
          <div className="flex justify-center">
            <IntegrationWheel 
              centerLogo="klippi" 
              centerName="Klippi"
              integrations={wheelIntegrations} 
            />
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-foreground/60 mb-4">One platform, endless possibilities</p>
          <button className="text-sm text-primary hover:underline">See all integrations →</button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
