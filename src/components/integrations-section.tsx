
import React from "react";
import { IntegrationCard } from "./integrations/integration-card";

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
        
        <div className="mt-8 text-center">
          <p className="text-sm text-foreground/60 mb-4">One platform, endless possibilities</p>
          <button className="text-sm text-primary hover:underline">See all integrations →</button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
