
import React from "react"
import { Network, Workflow } from "lucide-react"
import { Card } from "@/components/ui/card"

interface IntegrationProps {
  name: string;
  logo: string;
}

const IntegrationCard = ({ name, logo }: IntegrationProps) => (
  <div className="min-w-[220px] h-16 glass-card rounded-xl flex items-center justify-center px-6 mx-3">
    <img src={logo} alt={name} className="h-8 object-contain" />
  </div>
)

const IntegrationsSection = () => {
  const integrations = [
    {
      name: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
    },
    {
      name: "Gmail",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
    },
    {
      name: "Google Calendar",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg"
    },
    {
      name: "Slack",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
    },
    {
      name: "Zapier",
      logo: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg"
    },
    {
      name: "Fireflies.ai",
      logo: "https://assets-global.website-files.com/5f16d69f1e28d9a268bde31b/628e7f23271d9ed6e99cb0be_fireflies-icon-blue%20(1).svg"
    },
    {
      name: "ChatGPT",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
    },
    {
      name: "Intercom",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Intercom_logo.svg"
    },
    {
      name: "Jira",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
    },
    {
      name: "Zendesk",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Zendesk_logo.svg"
    },
    {
      name: "HubSpot",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/HubSpot_Logo.svg/2560px-HubSpot_Logo.svg.png"
    }
  ]
  
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
        
        {/* Carousel moved above the feature cards and made more prominent */}
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          <Card className="glass-card p-6 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/20 mt-1">
                <Network className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Seamless Connectivity</h3>
                <p className="text-foreground/80 text-sm">
                  Connect once and let Klippi work across all your tools. No more switching between 
                  interfaces or managing multiple AI solutions. Klippi's unified approach brings 
                  intelligence to where you already work.
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="glass-card p-6 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/20 mt-1">
                <Workflow className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Learning AI Ecosystem</h3>
                <p className="text-foreground/80 text-sm">
                  Replace fragmented tools with one solution that consolidates call recording, 
                  note-taking, email automation, and agentive workflows. Klippi improves with 
                  tenure, continuously learning your business context and preferences.
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-foreground/60 mb-4">One platform, endless possibilities</p>
          <button className="text-sm text-primary hover:underline">See all integrations →</button>
        </div>
      </div>
    </section>
  )
}

export default IntegrationsSection
