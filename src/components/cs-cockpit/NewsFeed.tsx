
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { 
  AlertTriangle, 
  CheckCircle, 
  TrendingDown, 
  TrendingUp, 
  Award, 
  Users, 
  ExternalLink, 
  Calendar, 
  MessageSquare,
  Bell
} from "lucide-react";
import { FeedCard } from "./FeedCard";
import { formatDistanceToNow } from "date-fns";

export function NewsFeed() {
  const [filterType, setFilterType] = useState<string>("all");
  
  // Mock feed data
  const feedItems = [
    {
      id: 1,
      type: "churn-risk",
      priority: "high",
      timestamp: new Date(2025, 4, 22, 10, 15),
      client: {
        name: "TechCorp Inc.",
        logo: null,
        initials: "TC"
      },
      title: "Churn Risk Detected",
      description: "Usage has dropped 32% over the past 30 days. Key features remain unused since the last QBR.",
      metrics: [
        { label: "Usage Decline", value: "32%" },
        { label: "Days Since Login", value: "15" },
        { label: "Health Score", value: "63/100" }
      ],
      actions: [
        { label: "Schedule Check-in", icon: Calendar },
        { label: "Create Re-engagement Plan", icon: Users }
      ]
    },
    {
      id: 2,
      type: "feature-adoption",
      priority: "medium",
      timestamp: new Date(2025, 4, 22, 9, 30),
      client: {
        name: "Global Systems",
        logo: null,
        initials: "GS"
      },
      title: "Low Feature Adoption",
      description: "The team has not used the new reporting features since onboarding 3 weeks ago.",
      metrics: [
        { label: "Features Used", value: "6/15" },
        { label: "Adoption Rate", value: "47%" },
        { label: "Onboarded", value: "21 days ago" }
      ],
      actions: [
        { label: "Schedule Training", icon: Calendar },
        { label: "Send Best Practices", icon: MessageSquare }
      ]
    },
    {
      id: 3,
      type: "positive-review",
      priority: "low",
      timestamp: new Date(2025, 4, 22, 8, 45),
      client: {
        name: "Acme Corp",
        logo: null,
        initials: "AC"
      },
      title: "Positive Review on Capterra",
      description: "Sarah Johnson from Acme Corp left a 5-star review highlighting our exceptional customer service.",
      metrics: [
        { label: "Rating", value: "⭐⭐⭐⭐⭐" },
        { label: "Platform", value: "Capterra" },
        { label: "Reviewer", value: "Sarah J." }
      ],
      actions: [
        { label: "Request Case Study", icon: Award },
        { label: "Send Thank You", icon: MessageSquare }
      ]
    },
    {
      id: 4,
      type: "champion-change",
      priority: "high",
      timestamp: new Date(2025, 4, 21, 16, 20),
      client: {
        name: "DataFlow Inc",
        logo: null,
        initials: "DF"
      },
      title: "Champion Role Change",
      description: "Michael Chen, your main point of contact, has been promoted to CTO. There's no new primary contact assigned yet.",
      metrics: [
        { label: "Client Since", value: "2 years" },
        { label: "ARR", value: "$125,000" },
        { label: "Health Score", value: "87/100" }
      ],
      actions: [
        { label: "Schedule Introduction", icon: Calendar },
        { label: "Update CRM", icon: CheckCircle }
      ]
    },
    {
      id: 5,
      type: "funding-news",
      priority: "medium",
      timestamp: new Date(2025, 4, 21, 14, 10),
      client: {
        name: "StartupXYZ",
        logo: null,
        initials: "SX"
      },
      title: "Funding Round Announced",
      description: "StartupXYZ has raised $12M in Series A funding, featured in TechCrunch today.",
      metrics: [
        { label: "Funding", value: "$12M Series A" },
        { label: "Projected Growth", value: "3x" },
        { label: "Current Plan", value: "Business" }
      ],
      actions: [
        { label: "Discuss Expansion", icon: TrendingUp },
        { label: "Read TechCrunch Article", icon: ExternalLink }
      ]
    },
    {
      id: 6,
      type: "qbr-reminder",
      priority: "medium",
      timestamp: new Date(2025, 4, 21, 11, 5),
      client: {
        name: "Innovate Ltd",
        logo: null,
        initials: "IL"
      },
      title: "QBR Due Next Week",
      description: "Quarterly Business Review for Innovate Ltd needs to be scheduled before May 30.",
      metrics: [
        { label: "Last QBR", value: "90 days ago" },
        { label: "Health Score", value: "79/100" },
        { label: "Open Items", value: "3" }
      ],
      actions: [
        { label: "Schedule QBR", icon: Calendar },
        { label: "Prepare QBR Deck", icon: CheckCircle }
      ]
    },
  ];
  
  // Filter feed items based on selected filter
  const filteredFeedItems = filterType === "all" 
    ? feedItems 
    : feedItems.filter(item => item.type === filterType);

  return (
    <div className="flex-1">
      <TooltipProvider>
        <Card className="p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Activity Feed</h2>
            <Tabs defaultValue="all" onValueChange={setFilterType}>
              <TabsList className="mb-4">
                <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
                <TabsTrigger value="churn-risk" className="text-xs">Churn Risk</TabsTrigger>
                <TabsTrigger value="feature-adoption" className="text-xs">Adoption</TabsTrigger>
                <TabsTrigger value="champion-change" className="text-xs">Champion Changes</TabsTrigger>
                <TabsTrigger value="funding-news" className="text-xs">Company News</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="space-y-4">
            {filteredFeedItems.map((item) => (
              <FeedCard 
                key={item.id} 
                item={item} 
              />
            ))}

            {filteredFeedItems.length === 0 && (
              <div className="text-center py-10">
                <p className="text-muted-foreground">No items match the selected filter</p>
              </div>
            )}
          </div>
        </Card>
      </TooltipProvider>
    </div>
  );
}
