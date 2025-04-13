
import React from "react"
import { Headset, Settings, Search, Share } from "lucide-react"
import { FeatureCard } from "./feature-card"

export const SharedFeatures = () => {
  const sharedFeatures = [
    {
      title: "Offload Support Emails",
      description: "Get AI to draft customer replies using your knowledge base.",
      icon: <Headset className="h-6 w-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=450&q=80",
      cta: {
        text: "Try the Support Email Agent"
      }
    },
    {
      title: "Powerful Workflows",
      description: "Automate complex daily tasks with intelligent, adaptive workflows that learn from your preferences.",
      icon: <Settings className="h-6 w-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=450&q=80",
      cta: {
        text: "Explore Workflow Automation"
      }
    },
    {
      title: "Automate Customer Research",
      description: "Instantly gather insights from your product data, support tickets, and past communications to understand client health and needs without manual digging.",
      icon: <Search className="h-6 w-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=450&q=80",
      cta: {
        text: "See Research Tools"
      }
    },
    {
      title: "Scale Client Communications",
      description: "Create personalized updates for multiple accounts simultaneously, ensuring consistent messaging while maintaining the human touch your clients expect.",
      icon: <Share className="h-6 w-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=450&q=80",
      cta: {
        text: "Try Communication Tools"
      }
    }
  ]

  return (
    <>
      <div className="text-center mb-8 mt-16">
        <h3 className="text-2xl font-semibold mb-3">Core Features for Everyone</h3>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          All Klip users benefit from these powerful capabilities, regardless of whether you choose the individual or team solution.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sharedFeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            image={feature.image}
            cta={feature.cta}
            className="flex flex-col h-full"
          />
        ))}
      </div>
    </>
  )
}
