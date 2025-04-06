
import React from "react"
import { 
  Mail, Database, MessageSquare, Settings, 
  TrendingUp, Brain, Layers, Book, CheckCheck
} from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard = ({ title, description, icon, className }: FeatureCardProps) => (
  <div className={cn("glass-card rounded-xl p-6 flex flex-col", className)}>
    <div className="mb-4 p-2 w-fit rounded-lg bg-primary/20">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-foreground/70 text-sm">{description}</p>
  </div>
)

const FeaturesSection = () => {
  const features = [
    {
      title: "Auto-Draft Email Replies",
      description: "Intelligent responses to client emails that sound like they came from you.",
      icon: <Mail className="h-6 w-6 text-primary" />
    },
    {
      title: "Knowledge Base Integration",
      description: "Access product knowledge instantly without searching through documents.",
      icon: <Database className="h-6 w-6 text-primary" />
    },
    {
      title: "CRM Actions",
      description: "Complete tasks in Gainsight/Salesforce automatically based on client needs.",
      icon: <CheckCheck className="h-6 w-6 text-primary" />
    },
    {
      title: "Slack Integration",
      description: "Send timely messages and updates to team members and channels.",
      icon: <MessageSquare className="h-6 w-6 text-primary" />
    },
    {
      title: "Powerful Workflows",
      description: "Automate complex daily tasks with intelligent, adaptive workflows.",
      icon: <Settings className="h-6 w-6 text-primary" />
    },
    {
      title: "Churn Risk Automation",
      description: "Proactively identify at-risk accounts before they become problems.",
      icon: <TrendingUp className="h-6 w-6 text-primary" />
    },
  ]
  
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Supercharge Your <span className="text-gradient">Customer Success</span> Operations
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Klip empowers CSMs with intelligent automation and AI assistance to handle routine tasks,
            giving you more time for meaningful client interactions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 glass-card rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Brain className="h-6 w-6 text-primary mr-3" />
            AI-Powered Intelligence
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-md bg-primary/20 shrink-0 mt-1">
                <Layers className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Multi-Step Automation</h4>
                <p className="text-sm text-foreground/70">Not just simple triggers, but context-aware responses that adapt to situations.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-md bg-primary/20 shrink-0 mt-1">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Learning & Adaptation</h4>
                <p className="text-sm text-foreground/70">Continuously improves based on your feedback and interaction patterns.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-md bg-primary/20 shrink-0 mt-1">
                <Book className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Custom Decision Making</h4>
                <p className="text-sm text-foreground/70">Interprets emails and events to take the most appropriate action.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-md bg-primary/20 shrink-0 mt-1">
                <Settings className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Personalized Rules</h4>
                <p className="text-sm text-foreground/70">Set up automation that adapts dynamically to your unique workflow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
