
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  RefreshCw, 
  Database, 
  Search, 
  Link, 
  Mail, 
  ListPlus, 
  Users
} from "lucide-react";

export const FeatureShowcase = () => {
  const features = [
    {
      title: "Automate CRM Updates",
      description: "Automatically update your CRM based on client interactions from emails, calls, and meetings, saving hours of manual data entry.",
      icon: <RefreshCw className="h-6 w-6 text-primary" />,
      image: "/assets/features/crm-updates-mockup.png",
      altText: "CRM updates automation interface showing email integration"
    },
    {
      title: "Knowledge Base Integration",
      description: "Get out of "Customer Support" work - easily integrate with your organisation's knowledge base and have Klippi craft perfect replies.",
      icon: <Database className="h-6 w-6 text-primary" />,
      image: "/assets/features/knowledge-base-mockup.png",
      altText: "Knowledge base integration showing automatic answer generation"
    },
    {
      title: "Automate Client Research",
      description: "Save hours on research with AI-powered client intelligence that gathers relevant information automatically.",
      icon: <Search className="h-6 w-6 text-primary" />,
      image: "/assets/features/client-research-mockup.png",
      altText: "Client research automation dashboard"
    },
    {
      title: "CRM Integration for Customer Research",
      description: "Integrate your CRM and instruct Klippi to conduct customer research; daily news bulletins, meeting preparation or QBR research.",
      icon: <Link className="h-6 w-6 text-primary" />,
      image: "/assets/features/crm-research-mockup.png",
      altText: "CRM integration with research capabilities"
    },
    {
      title: "Email Sentiment Analysis",
      description: "Spot churn signals earlier with AI-powered sentiment analysis that monitors client communications for warning signs.",
      icon: <Mail className="h-6 w-6 text-primary" />,
      image: "/assets/features/sentiment-analysis-mockup.png",
      altText: "Email sentiment analysis dashboard showing risk indicators"
    },
    {
      title: "Automatic Feature Request Tracking",
      description: "Never miss a feature request again. Klippi automatically identifies and logs client requests for your product team.",
      icon: <ListPlus className="h-6 w-6 text-primary" />,
      image: "/assets/features/feature-requests-mockup.png",
      altText: "Feature request tracking system with automated categorization"
    },
    {
      title: "Scale Your Playbooks",
      description: "Scale your playbooks so you can focus on building relationships and driving value with your most important clients.",
      icon: <Users className="h-6 w-6 text-primary" />,
      image: "/assets/features/playbook-scaling-mockup.png",
      altText: "Playbook automation system showing templates and workflows"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background/95 to-background">
      <div className="container px-4 mx-auto">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            feature={feature} 
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, reverse }: { feature: any, reverse: boolean }) => {
  return (
    <div className="mb-24 last:mb-0">
      <Card className="bg-white/70 backdrop-blur-sm border border-white/20 overflow-hidden shadow-xl">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
          <div className="w-full lg:w-1/2 p-8 lg:p-12">
            <div className="mb-6 flex items-center">
              <div className="p-2 rounded-md bg-primary/10 mr-4">
                {feature.icon}
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold">{feature.title}</h2>
            </div>
            
            <p className="text-foreground/80 text-lg mb-6">
              {feature.description}
            </p>
            
            <div className="hidden md:block p-4 bg-muted/50 rounded-lg border border-border">
              <p className="italic text-foreground/70">
                "{getTestimonial(feature.title)}"
              </p>
              <p className="mt-2 text-sm font-medium">
                {getTestimonialAuthor(feature.title)}
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 bg-background/30 p-4">
            <div className="relative rounded-lg overflow-hidden artisan-shadow">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 z-0"></div>
              <img
                src="https://placehold.co/1200x800/f5f5f5/666?text=Product+Mockup"
                alt={feature.altText}
                className="relative z-10 w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

function getTestimonial(featureTitle: string) {
  const testimonials: Record<string, string> = {
    "Automate CRM Updates": "Klippi saved my team over 15 hours per week by automating our CRM updates from client interactions.",
    "Knowledge Base Integration": "Our response time improved by 70% once we integrated our knowledge base with Klippi.",
    "Automate Client Research": "I used to spend hours researching clients before meetings. Now Klippi does it for me in minutes.",
    "CRM Integration for Customer Research": "The QBR preparation that used to take days now happens automatically thanks to Klippi.",
    "Email Sentiment Analysis": "We identified and saved three at-risk accounts in the first month using Klippi's sentiment analysis.",
    "Automatic Feature Request Tracking": "Our product team loves the automatic feature request tracking - it's transformed our roadmap planning.",
    "Scale Your Playbooks": "We've been able to 3x our customer portfolio without adding headcount by scaling our playbooks with Klippi."
  };
  
  return testimonials[featureTitle] || "Klippi has completely transformed how we manage customer success.";
}

function getTestimonialAuthor(featureTitle: string) {
  const authors: Record<string, string> = {
    "Automate CRM Updates": "Sarah J., Head of Customer Success at TechCorp",
    "Knowledge Base Integration": "Michael R., Senior CSM at SoftwareCo",
    "Automate Client Research": "Priya T., Customer Success Manager at DataSolutions",
    "CRM Integration for Customer Research": "David W., CS Director at EnterpriseInc",
    "Email Sentiment Analysis": "Alexandra K., VP of Customer Experience",
    "Automatic Feature Request Tracking": "Thomas B., Product Manager at CloudServices",
    "Scale Your Playbooks": "Jennifer L., CS Team Lead at ScaleUp"
  };
  
  return authors[featureTitle] || "CS Manager at Enterprise Company";
}
