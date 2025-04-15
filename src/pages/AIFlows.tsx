
import { FileText, BarChart2, Mail, Globe, Bot, Zap, PlusCircle } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { FeatureCard } from "@/components/features/feature-card";

const AIFlows = () => {
  const flowCards = [
    {
      title: "CSM QBR Prep",
      description: "Automatically prepare quarterly business reviews with key insights from your client data.",
      icon: <FileText className="w-5 h-5 text-primary" />,
      badge: "Popular",
      className: "bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100",
      cta: { text: "Use This Flow" }
    },
    {
      title: "Customer Sentiment Analysis",
      description: "Analyze customer feedback and communications to gauge sentiment and identify trends.",
      icon: <BarChart2 className="w-5 h-5 text-primary" />,
      className: "bg-gradient-to-br from-gray-50 to-slate-50 border border-slate-100",
      cta: { text: "Use This Flow" }
    },
    {
      title: "Email Auto-Replier",
      description: "Draft personalized replies to client emails based on communication history and context.",
      icon: <Mail className="w-5 h-5 text-primary" />,
      className: "bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100",
      badge: "New",
      cta: { text: "Use This Flow" }
    },
    {
      title: "Customer Research",
      description: "Generate newsletters with top articles and insights relevant to your book of business.",
      icon: <Globe className="w-5 h-5 text-primary" />,
      className: "bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100",
      cta: { text: "Use This Flow" }
    },
    {
      title: "Meeting Preparation",
      description: "Create comprehensive briefings for upcoming client meetings with key talking points.",
      icon: <Calendar className="w-5 h-5 text-primary" />,
      className: "bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100",
      cta: { text: "Use This Flow" }
    },
    {
      title: "Churn Risk Predictor",
      description: "Identify clients at risk of churning based on engagement patterns and product usage.",
      icon: <Bot className="w-5 h-5 text-primary" />,
      className: "bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100",
      cta: { text: "Use This Flow" }
    }
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">AI CSM Flows</h1>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors">
              <PlusCircle className="w-5 h-5" />
              <span>Create Custom Flow</span>
            </button>
          </div>
          <p className="text-muted-foreground">
            Pre-built AI assistants to help you manage your customer relationships more effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flowCards.map((card, index) => (
            <div key={index} className="transition-all hover:scale-[1.02] hover:shadow-md">
              <FlowCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

interface FlowCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
  className?: string;
  cta?: { text: string };
}

const FlowCard = ({ title, description, icon, badge, className, cta }: FlowCardProps) => {
  return (
    <div className={`rounded-xl p-6 flex flex-col h-full shadow-sm ${className}`}>
      <div className="mb-4">
        <div className="p-2 w-fit rounded-lg bg-white shadow-sm">
          {icon}
        </div>
      </div>
      
      <div className="flex items-center mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        {badge && (
          <span className="ml-2 text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      
      <div className="mt-auto">
        <div className="flex items-center justify-between">
          <button className="text-primary font-medium text-sm flex items-center gap-1 hover:underline">
            <span>{cta?.text || "Learn More"}</span>
            <Zap className="w-4 h-4" />
          </button>
          
          <div className="flex">
            <div className="w-6 h-6 rounded-md overflow-hidden bg-blue-100 flex items-center justify-center">
              <FileText className="w-3 h-3 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Need to add the Calendar icon since we're using it in the component
import { Calendar } from "lucide-react";

export default AIFlows;
