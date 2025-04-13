
import React from "react"
import { 
  Mail, Database, MessageSquare, Settings, 
  TrendingUp, Brain, Layers, Book, CheckCheck,
  Users, User, BarChart, Target, Search, Share,
  HeadsetHelp, InboxCheck
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  badge?: string;
  image?: string;
  cta?: {
    text: string;
    icon?: React.ReactNode;
  };
}

const FeatureCard = ({ title, description, icon, className, badge, image, cta }: FeatureCardProps) => (
  <div className={cn("glass-card rounded-xl p-6 flex flex-col h-full", className)}>
    <div className="mb-4 p-2 w-fit rounded-lg bg-primary/20">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
      {title}
      {badge && (
        <Badge variant="outline" className="text-xs font-normal">
          {badge}
        </Badge>
      )}
    </h3>
    <p className="text-foreground/70 text-sm mb-4">{description}</p>
    
    {image && (
      <div className="mt-auto mb-4 overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-auto object-cover" />
      </div>
    )}
    
    {cta && (
      <div className="mt-auto">
        <Button variant="ghost" size="sm" className="group text-primary hover:text-primary hover:bg-primary/10 p-0">
          <span>{cta.text}</span>
          {cta.icon || (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          )}
        </Button>
      </div>
    )}
  </div>
)

const FeaturesSection = () => {
  const individualFeatures = [
    {
      title: "Auto-Draft Email Replies",
      description: "Save hours every week with intelligent responses to client emails that sound exactly like you wrote them.",
      icon: <Mail className="h-6 w-6 text-primary" />,
      badge: "Individual"
    },
    {
      title: "Knowledge Base Integration",
      description: "Access product knowledge instantly without searching through documents, making you the expert in every conversation.",
      icon: <Database className="h-6 w-6 text-primary" />,
      badge: "Individual"
    },
    {
      title: "Personal Performance Insights",
      description: "Receive actionable feedback on your client interactions and prioritize your day for maximum impact.",
      icon: <BarChart className="h-6 w-6 text-primary" />,
      badge: "Individual"
    }
  ]
  
  const teamFeatures = [
    {
      title: "Team Analytics Dashboard",
      description: "Monitor team-wide metrics, spot trends, and identify opportunities for coaching and process improvement.",
      icon: <Users className="h-6 w-6 text-secondary" />,
      badge: "Team"
    },
    {
      title: "Standardized CS Workflows",
      description: "Ensure consistency across client interactions with templated processes that still allow for personalization.",
      icon: <Settings className="h-6 w-6 text-secondary" />,
      badge: "Team"
    },
    {
      title: "Early Churn Risk Detection",
      description: "Identify at-risk accounts before they become problems through AI-powered sentiment and engagement analysis.",
      icon: <TrendingUp className="h-6 w-6 text-secondary" />,
      badge: "Team"
    }
  ]
  
  const sharedFeatures = [
    {
      title: "Offload Support Emails",
      description: "Get AI to draft customer replies using your knowledge base.",
      icon: <HeadsetHelp className="h-6 w-6 text-primary" />,
      image: "/lovable-uploads/23de9735-893d-4c08-a5c3-b2d4bcdab592.png",
      cta: {
        text: "Try the Support Email Agent"
      }
    },
    {
      title: "Powerful Workflows",
      description: "Automate complex daily tasks with intelligent, adaptive workflows that learn from your preferences.",
      icon: <Settings className="h-6 w-6 text-primary" />
    },
    {
      title: "Automate Customer Research",
      description: "Instantly gather insights from your product data, support tickets, and past communications to understand client health and needs without manual digging.",
      icon: <Search className="h-6 w-6 text-primary" />
    },
    {
      title: "Scale Client Communications",
      description: "Create personalized updates for multiple accounts simultaneously, ensuring consistent messaging while maintaining the human touch your clients expect.",
      icon: <Share className="h-6 w-6 text-primary" />
    }
  ]
  
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose the Right <span className="text-gradient">Klip</span> for You
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Whether you're an individual CSM looking to excel or a CS leader scaling your team's impact,
            Klip provides tailored solutions to elevate your customer success operations.
          </p>
        </div>
        
        <Tabs defaultValue="individual" className="max-w-5xl mx-auto mb-16">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="individual" className="px-8 py-3">
                <User className="w-4 h-4 mr-2" />
                For Individual CSMs
              </TabsTrigger>
              <TabsTrigger value="team" className="px-8 py-3">
                <Users className="w-4 h-4 mr-2" />
                For CS Teams
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="individual" className="mt-0">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-semibold mb-3">Amplify Your Individual Impact</h3>
              <p className="text-foreground/80 max-w-2xl mx-auto">
                Designed for ambitious CSMs who want to deliver exceptional service while managing more accounts efficiently.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {individualFeatures.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  badge={feature.badge}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="team" className="mt-0">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-semibold mb-3">Scale Your CS Organization</h3>
              <p className="text-foreground/80 max-w-2xl mx-auto">
                A comprehensive platform that standardizes excellence across your CS team while providing leadership with valuable insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamFeatures.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  badge={feature.badge}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
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
                <Target className="h-5 w-5 text-primary" />
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
