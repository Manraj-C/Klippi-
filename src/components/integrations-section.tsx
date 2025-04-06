
import React from "react"

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
  ]
  
  return (
    <section id="integrations" className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seamless <span className="text-gradient">Integrations</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Klip connects with your existing tech stack, bringing AI assistance to the tools you already use.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <div className="overflow-hidden">
            <div className="flex animate-carousel">
              {integrations.map((integration, index) => (
                <IntegrationCard key={index} name={integration.name} logo={integration.logo} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-foreground/60">
          <p>More integrations coming soon...</p>
        </div>
      </div>
    </section>
  )
}

export default IntegrationsSection
