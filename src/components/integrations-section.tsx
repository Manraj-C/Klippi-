import React from "react";
import { IntegrationCard } from "./integrations/integration-card";
const IntegrationsSection = () => {
  const integrations = [
    {
      name: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    },
    {
      name: "Gmail",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
    },
    {
      name: "Google Calendar",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
    },
    {
      name: "Slack",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    },
    {
      name: "Zapier",
      logo: "https://cdn.worldvectorlogo.com/logos/zapier-2.svg",
    },
    {
      name: "Fireflies.ai",
      logo: "https://fireflies.ai/logo.png",
    },
    {
      name: "ChatGPT",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    },
    {
      name: "Intercom",
      logo: "https://cdn.worldvectorlogo.com/logos/intercom-1.svg",
    },
    {
      name: "Jira",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
    },
    {
      name: "Zendesk",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Zendesk_logo.svg",
    },
    {
      name: "HubSpot",
      logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg",
    },
  ];

  const wheelIntegrations = [
    {
      name: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
      position: "top",
    },
    {
      name: "LinkedIn",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
      position: "top-right",
    },
    {
      name: "Atlassian",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/atlassian/atlassian-original.svg",
      position: "right",
    },
    {
      name: "HubSpot",
      logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg",
      position: "bottom-right",
    },
    {
      name: "Google Sheets",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg",
      position: "bottom",
    },
    {
      name: "Gmail",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
      position: "bottom-left",
    },
    {
      name: "Zoom",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Zoom_logo.svg",
      position: "left",
    },
    {
      name: "Intercom",
      logo: "https://cdn.worldvectorlogo.com/logos/intercom-1.svg",
      position: "top-left",
    },
  ];
  return (
    <section
      id="integrations"
      className="py-20 bg-gradient-to-b from-background/50 to-background"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Powerful</span> Integrations
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-8">
            Supercharge your customer success operations by adding AI automation
            to where you already work. Klippi instantly connects to your tools
            and works with you across your entire go-to-market tech stack.
            Klippi's native intergations also replace fragmented solutions to
            create a unified platform that  Instantly connect your tools and
            allow AI to work for you across your entire tech stack. Klippi
            eliminates the need for multiple point solutions.  The Klippi Way
            Supercharge your customer success operations by adding AI automation
            to where you already work. Connect once and let Klippi work across
            all your tools, replacing fragmented solutions with one unified
            platform that learns your business context and continuously improves
            with usage.
          </p>
        </div>

        {/* Integration carousel */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>

          <div className="overflow-hidden py-4">
            <div className="flex animate-carousel">
              {integrations.map((integration, index) => (
                <IntegrationCard
                  key={index}
                  name={integration.name}
                  logo={integration.logo}
                />
              ))}
              {/* Duplicate first few items to create seamless loop */}
              {integrations.slice(0, 4).map((integration, index) => (
                <IntegrationCard
                  key={`dup-${index}`}
                  name={integration.name}
                  logo={integration.logo}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-foreground/60 mb-4">
            One platform, endless possibilities
          </p>
          <button className="text-sm text-primary hover:underline">
            See all integrations →
          </button>
        </div>
      </div>
    </section>
  );
};
export default IntegrationsSection;
