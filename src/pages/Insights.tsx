
import { useState, useMemo } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  Lightbulb, 
  AlertTriangle, 
  TrendingDown, 
  Search, 
  ArrowUpRight, 
  UserCheck, 
  BarChart3,
  Mail, 
  Calendar, 
  Phone,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Sparkles,
  RefreshCw,
  ChartPie,
  Users,
} from "lucide-react";

import InsightDetailDrawer from "@/components/insights/InsightDetailDrawer";
import { InsightData, InsightDetail, InsightCategory } from "@/types/insights";
import { cn } from "@/lib/utils";

// Sample data for insights
const insightsData: InsightData[] = [
  {
    id: "insight-1",
    category: "Feature Request",
    topic: "Slack Integration",
    description: "Customers requesting direct integration with Slack for real-time notifications and collaborative workflows.",
    mentions: 47,
    mentionsLast30Days: 18,
    severity: "High",
    trend: "up",
    impactedARR: 520000,
    firstMentioned: "2025-02-15"
  },
  {
    id: "insight-2",
    category: "Churn Risk",
    topic: "Pricing Concerns",
    description: "Multiple enterprise clients expressing concerns about the new pricing model and considering alternatives.",
    mentions: 32,
    mentionsLast30Days: 24,
    severity: "Critical",
    trend: "up",
    impactedARR: 870000,
    firstMentioned: "2025-03-22"
  },
  {
    id: "insight-3",
    category: "Adoption Issue",
    topic: "Report Builder Complexity",
    description: "Users finding the report builder tool too complex and abandoning report creation workflows.",
    mentions: 53,
    mentionsLast30Days: 12,
    severity: "Medium",
    trend: "down",
    impactedARR: 380000,
    firstMentioned: "2025-01-10"
  },
  {
    id: "insight-4",
    category: "Feature Request",
    topic: "Mobile Application",
    description: "Growing demand for a dedicated mobile application for on-the-go access to key features.",
    mentions: 38,
    mentionsLast30Days: 15,
    severity: "Medium",
    trend: "up",
    impactedARR: 290000,
    firstMentioned: "2025-02-28"
  },
  {
    id: "insight-5",
    category: "Churn Risk",
    topic: "Customer Support Response Time",
    description: "Several key accounts expressing frustration with support ticket resolution times.",
    mentions: 29,
    mentionsLast30Days: 8,
    severity: "High",
    trend: "down",
    impactedARR: 430000,
    firstMentioned: "2025-03-05"
  },
  {
    id: "insight-6",
    category: "Recurring Escalation",
    topic: "API Rate Limiting",
    description: "Multiple clients hitting API rate limits and escalating to account managers.",
    mentions: 24,
    mentionsLast30Days: 10,
    severity: "High",
    trend: "up",
    impactedARR: 680000,
    firstMentioned: "2025-03-18"
  },
  {
    id: "insight-7",
    category: "Adoption Issue",
    topic: "Onboarding Experience",
    description: "New customers struggling with self-service onboarding process, requiring additional support.",
    mentions: 36,
    mentionsLast30Days: 5,
    severity: "Low",
    trend: "down",
    impactedARR: 210000,
    firstMentioned: "2025-01-25"
  }
];

const SeverityBadge = ({ severity }: { severity: string }) => {
  switch (severity) {
    case "Critical":
      return <Badge variant="destructive">Critical</Badge>;
    case "High":
      return <Badge variant="warning" className="bg-yellow-500">High</Badge>;
    case "Medium":
      return <Badge variant="secondary">Medium</Badge>;
    case "Low":
      return <Badge variant="outline">Low</Badge>;
    default:
      return <Badge>{severity}</Badge>;
  }
};

const CategoryBadge = ({ category }: { category: string }) => {
  switch (category) {
    case "Feature Request":
      return <Badge variant="default">Feature Request</Badge>;
    case "Churn Risk":
      return <Badge variant="destructive">Churn Risk</Badge>;
    case "Adoption Issue":
      return <Badge variant="warning" className="bg-orange-500">Adoption Issue</Badge>;
    case "Recurring Escalation":
      return <Badge variant="secondary" className="bg-purple-500 hover:bg-purple-600">Recurring Escalation</Badge>;
    default:
      return <Badge variant="outline">{category}</Badge>;
  }
};

const TrendIndicator = ({ trend }: { trend: string }) => {
  return trend === "up" ? 
    <div className="flex items-center text-rose-600"><ArrowUpRight className="h-4 w-4" /><span className="ml-1">↑</span></div> : 
    <div className="flex items-center text-emerald-600"><TrendingDown className="h-4 w-4" /><span className="ml-1">↓</span></div>;
};

const insightDetailData: Record<string, InsightDetail> = {
  "insight-1": {
    id: "insight-1",
    category: "Feature Request",
    topic: "Slack Integration",
    description: "Customers requesting direct integration with Slack for real-time notifications and collaborative workflows.",
    mentions: 47,
    mentionsLast30Days: 18,
    severity: "High",
    trend: "up",
    impactedARR: 520000,
    firstMentioned: "2025-02-15",
    growthOpportunity: 65,
    churnRisk: 30,
    affectedClients: [
      { id: "client-1", name: "Acme Corp", tier: "Enterprise", arr: 180000, mentions: 12, sentiment: "negative" },
      { id: "client-2", name: "TechGlobal", tier: "Enterprise", arr: 150000, mentions: 8, sentiment: "neutral" },
      { id: "client-3", name: "Innovate Inc", tier: "Business", arr: 95000, mentions: 15, sentiment: "negative" },
      { id: "client-4", name: "DataFlow Systems", tier: "Business", arr: 85000, mentions: 7, sentiment: "neutral" },
      { id: "client-5", name: "NextGen Solutions", tier: "Growth", arr: 45000, mentions: 5, sentiment: "positive" }
    ],
    dataSources: [
      { type: "email", name: "Customer Emails", count: 23 },
      { type: "call", name: "Support Calls", count: 12 },
      { type: "chat", name: "Live Chat", count: 8 },
      { type: "document", name: "Feature Requests", count: 4 }
    ],
    suggestedActions: [
      { id: "action-1", text: "Schedule roadmap call with top requesters", icon: Calendar },
      { id: "action-2", text: "Share Slack integration documentation", icon: FileText },
      { id: "action-3", text: "Create targeted survey for requirements", icon: MessageSquare },
      { id: "action-4", text: "Submit formal feature request to product", icon: ChartPie }
    ]
  },
  "insight-2": {
    id: "insight-2",
    category: "Churn Risk",
    topic: "Pricing Concerns",
    description: "Multiple enterprise clients expressing concerns about the new pricing model and considering alternatives.",
    mentions: 32,
    mentionsLast30Days: 24,
    severity: "Critical",
    trend: "up",
    impactedARR: 870000,
    firstMentioned: "2025-03-22",
    growthOpportunity: 15,
    churnRisk: 85,
    affectedClients: [
      { id: "client-6", name: "Global Industries", tier: "Enterprise", arr: 320000, mentions: 8, sentiment: "negative" },
      { id: "client-7", name: "FutureTech", tier: "Enterprise", arr: 280000, mentions: 6, sentiment: "negative" },
      { id: "client-8", name: "MegaCorp", tier: "Enterprise", arr: 210000, mentions: 10, sentiment: "negative" },
      { id: "client-9", name: "OmniSystems", tier: "Business", arr: 60000, mentions: 4, sentiment: "neutral" }
    ],
    dataSources: [
      { type: "call", name: "QBR Meetings", count: 8 },
      { type: "email", name: "Account Manager Emails", count: 15 },
      { type: "document", name: "Contract Renewal Notes", count: 5 },
      { type: "chat", name: "Executive Escalations", count: 4 }
    ],
    suggestedActions: [
      { id: "action-5", text: "Schedule pricing discussion with enterprise clients", icon: Calendar },
      { id: "action-6", text: "Prepare custom pricing proposals", icon: FileText },
      { id: "action-7", text: "Escalate to executive team for review", icon: AlertTriangle },
      { id: "action-8", text: "Identify at-risk clients for executive outreach", icon: Users }
    ]
  },
  "insight-3": {
    id: "insight-3",
    category: "Adoption Issue",
    topic: "Report Builder Complexity",
    description: "Users finding the report builder tool too complex and abandoning report creation workflows.",
    mentions: 53,
    mentionsLast30Days: 12,
    severity: "Medium",
    trend: "down",
    impactedARR: 380000,
    firstMentioned: "2025-01-10",
    growthOpportunity: 40,
    churnRisk: 35,
    affectedClients: [
      { id: "client-10", name: "Data Analytics Ltd", tier: "Business", arr: 85000, mentions: 12, sentiment: "negative" },
      { id: "client-11", name: "Insight Partners", tier: "Growth", arr: 45000, mentions: 8, sentiment: "neutral" },
      { id: "client-12", name: "Research Global", tier: "Business", arr: 75000, mentions: 15, sentiment: "negative" },
      { id: "client-13", name: "MetricsFlow", tier: "Growth", arr: 35000, mentions: 9, sentiment: "negative" },
      { id: "client-14", name: "KPI Solutions", tier: "Business", arr: 70000, mentions: 6, sentiment: "neutral" },
      { id: "client-15", name: "Reporting Experts", tier: "Growth", arr: 40000, mentions: 3, sentiment: "positive" }
    ],
    dataSources: [
      { type: "email", name: "Support Tickets", count: 28 },
      { type: "call", name: "Training Sessions", count: 15 },
      { type: "document", name: "Feature Usage Analytics", count: 6 },
      { type: "chat", name: "In-App Chat Support", count: 4 }
    ],
    suggestedActions: [
      { id: "action-9", text: "Schedule report builder training sessions", icon: Calendar },
      { id: "action-10", text: "Create simplified templates for common reports", icon: FileText },
      { id: "action-11", text: "Share tutorial videos with affected clients", icon: MessageSquare },
      { id: "action-12", text: "Submit UX improvement request to product", icon: ChartPie }
    ]
  }
};

const Insights = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<InsightCategory | "all">("all");
  const [sortBy, setSortBy] = useState<string>("mentions");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [selectedInsight, setSelectedInsight] = useState<InsightDetail | null>(null);
  const [insightDrawerOpen, setInsightDrawerOpen] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleOpenInsight = (insightId: string) => {
    const insight = insightDetailData[insightId];
    if (insight) {
      setSelectedInsight(insight);
      setInsightDrawerOpen(true);
    }
  };

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortDir("desc");
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 800);
  };

  const filteredInsights = useMemo(() => {
    return insightsData
      .filter(insight => {
        // Apply category filter
        if (categoryFilter !== "all" && insight.category !== categoryFilter) {
          return false;
        }
        
        // Apply search query
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          return (
            insight.topic.toLowerCase().includes(query) ||
            insight.description.toLowerCase().includes(query)
          );
        }
        
        return true;
      })
      .sort((a, b) => {
        // Apply sorting
        let comparison = 0;
        
        switch (sortBy) {
          case "topic":
            comparison = a.topic.localeCompare(b.topic);
            break;
          case "category":
            comparison = a.category.localeCompare(b.category);
            break;
          case "mentions":
            comparison = a.mentions - b.mentions;
            break;
          case "mentionsLast30Days":
            comparison = a.mentionsLast30Days - b.mentionsLast30Days;
            break;
          case "severity":
            const severityOrder = { "Critical": 4, "High": 3, "Medium": 2, "Low": 1 };
            comparison = severityOrder[a.severity as keyof typeof severityOrder] - 
                        severityOrder[b.severity as keyof typeof severityOrder];
            break;
          case "impactedARR":
            comparison = a.impactedARR - b.impactedARR;
            break;
          default:
            comparison = 0;
        }
        
        return sortDir === "asc" ? comparison : -comparison;
      });
  }, [insightsData, searchQuery, categoryFilter, sortBy, sortDir]);

  // Calculate summary metrics
  const totalARR = useMemo(() => {
    return insightsData.reduce((sum, insight) => sum + insight.impactedARR, 0);
  }, [insightsData]);

  const totalMentions = useMemo(() => {
    return insightsData.reduce((sum, insight) => sum + insight.mentions, 0);
  }, [insightsData]);

  const totalInteractions = useMemo(() => {
    // This would typically come from a real data source
    return 1243;
  }, []);

  const recentMentions = useMemo(() => {
    return insightsData.reduce((sum, insight) => sum + insight.mentionsLast30Days, 0);
  }, [insightsData]);

  const categoryBreakdown = useMemo(() => {
    const counts: Record<string, number> = {};
    insightsData.forEach(insight => {
      counts[insight.category] = (counts[insight.category] || 0) + 1;
    });
    return counts;
  }, [insightsData]);

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Customer Insights</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Last updated: Today at 10:23 AM
            </span>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleRefresh} 
              className={cn(refreshing && "animate-spin")}
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Interactions</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalInteractions.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Analyzed from all connected data sources
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Topic Mentions</CardTitle>
              <Lightbulb className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalMentions}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500 inline-flex items-center">
                  {recentMentions} <span className="ml-1">in last 30 days</span>
                </span>
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Impacted ARR</CardTitle>
              <ChartPie className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${(totalARR/1000000).toFixed(2)}M</div>
              <p className="text-xs text-muted-foreground mt-1">
                Total customer ARR impacted by insights
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Insight Categories</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Object.keys(categoryBreakdown).length}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Most common: {Object.entries(categoryBreakdown)
                  .sort((a, b) => b[1] - a[1])[0][0]}
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setCategoryFilter("all")}>All Insights</TabsTrigger>
              <TabsTrigger value="feature" onClick={() => setCategoryFilter("Feature Request")}>
                Feature Requests
              </TabsTrigger>
              <TabsTrigger value="churn" onClick={() => setCategoryFilter("Churn Risk")}>
                Churn Risks
              </TabsTrigger>
              <TabsTrigger value="adoption" onClick={() => setCategoryFilter("Adoption Issue")}>
                Adoption Issues
              </TabsTrigger>
            </TabsList>
            
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search insights..."
                className="pl-8 w-full md:w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead 
                      className="cursor-pointer hover:text-primary" 
                      onClick={() => handleSort("category")}
                    >
                      Category
                      {sortBy === "category" && (
                        sortDir === "asc" ? <ChevronUp className="inline ml-1 h-4 w-4" /> : 
                        <ChevronDown className="inline ml-1 h-4 w-4" />
                      )}
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer hover:text-primary"
                      onClick={() => handleSort("topic")}
                    >
                      Topic
                      {sortBy === "topic" && (
                        sortDir === "asc" ? <ChevronUp className="inline ml-1 h-4 w-4" /> : 
                        <ChevronDown className="inline ml-1 h-4 w-4" />
                      )}
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer hover:text-primary text-right"
                      onClick={() => handleSort("mentions")}
                    >
                      Mentions
                      {sortBy === "mentions" && (
                        sortDir === "asc" ? <ChevronUp className="inline ml-1 h-4 w-4" /> : 
                        <ChevronDown className="inline ml-1 h-4 w-4" />
                      )}
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer hover:text-primary text-right"
                      onClick={() => handleSort("mentionsLast30Days")}
                    >
                      Last 30 Days
                      {sortBy === "mentionsLast30Days" && (
                        sortDir === "asc" ? <ChevronUp className="inline ml-1 h-4 w-4" /> : 
                        <ChevronDown className="inline ml-1 h-4 w-4" />
                      )}
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer hover:text-primary"
                      onClick={() => handleSort("severity")}
                    >
                      Severity
                      {sortBy === "severity" && (
                        sortDir === "asc" ? <ChevronUp className="inline ml-1 h-4 w-4" /> : 
                        <ChevronDown className="inline ml-1 h-4 w-4" />
                      )}
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer hover:text-primary text-right"
                      onClick={() => handleSort("impactedARR")}
                    >
                      Impacted ARR
                      {sortBy === "impactedARR" && (
                        sortDir === "asc" ? <ChevronUp className="inline ml-1 h-4 w-4" /> : 
                        <ChevronDown className="inline ml-1 h-4 w-4" />
                      )}
                    </TableHead>
                    <TableHead className="text-right">Trend</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInsights.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-8">
                        <div className="flex flex-col items-center gap-2">
                          <Sparkles className="h-8 w-8 text-muted-foreground" />
                          <p className="text-muted-foreground">No insights match your filters</p>
                          {(searchQuery || categoryFilter !== "all") && (
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => {
                                setSearchQuery("");
                                setCategoryFilter("all");
                              }}
                            >
                              Clear filters
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredInsights.map((insight) => (
                      <TableRow 
                        key={insight.id} 
                        className="cursor-pointer hover:bg-muted/50"
                        onClick={() => handleOpenInsight(insight.id)}
                      >
                        <TableCell>
                          <CategoryBadge category={insight.category} />
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{insight.topic}</p>
                            <p className="text-xs text-muted-foreground truncate max-w-[300px]">
                              {insight.description}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-medium">{insight.mentions}</TableCell>
                        <TableCell className="text-right">{insight.mentionsLast30Days}</TableCell>
                        <TableCell>
                          <SeverityBadge severity={insight.severity} />
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          ${insight.impactedARR.toLocaleString()}
                        </TableCell>
                        <TableCell className="text-right">
                          <TrendIndicator trend={insight.trend} />
                        </TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenInsight(insight.id);
                            }}
                          >
                            <ArrowUpRight className="h-4 w-4" />
                            <span className="sr-only">Open detail</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Tabs>
      </div>
      
      <InsightDetailDrawer 
        open={insightDrawerOpen} 
        onClose={() => setInsightDrawerOpen(false)} 
        insight={selectedInsight}
      />
    </DashboardLayout>
  );
};

export default Insights;
