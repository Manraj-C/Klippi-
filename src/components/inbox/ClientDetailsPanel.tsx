
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  ChevronLeft, 
  X, 
  Building, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Users, 
  Clock,
  Link,
  Phone,
  Mail,
  FileText,
  ChartPie,
  CheckCircle2,
  AlertTriangle,
  Tag,
  MessageSquare
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface ClientDetailsPanelProps {
  clientId: number;
  onClose: () => void;
}

interface ClientData {
  id: number;
  name: string;
  company: string;
  avatar?: string;
  segment: string;
  arr: number;
  location: string;
  lastInteraction: string;
  email: string;
  phone?: string;
  customerSince: string;
  nextQBR: string;
  website: string;
  stakeholders: {
    name: string;
    role: string;
    linkedin?: string;
    email?: string;
  }[];
  products: {
    name: string;
    status: "active" | "pending" | "inactive";
  }[];
  healthScore: number;
  nps?: number;
  recentActivity: {
    type: string;
    description: string;
    date: string;
  }[];
  openIssues: number;
  tags: string[];
}

const mockClientData: Record<number, ClientData> = {
  1: {
    id: 1,
    name: "VerticalGrow",
    company: "VerticalGrow.io",
    segment: "Mid-Market",
    arr: 120000,
    location: "San Francisco, CA",
    lastInteraction: "23 mins ago",
    email: "support@verticalgrow.io",
    phone: "+1 (415) 555-7890",
    customerSince: "Jun 2023",
    nextQBR: "May 15, 2025",
    website: "verticalgrow.io",
    stakeholders: [
      {
        name: "Jane Smith",
        role: "CTO",
        linkedin: "linkedin.com/in/janesmith",
        email: "jane.smith@verticalgrow.io"
      },
      {
        name: "Robert Chen",
        role: "Engineering Manager",
        linkedin: "linkedin.com/in/robertchen",
        email: "robert.chen@verticalgrow.io"
      },
      {
        name: "Maria Lopez",
        role: "Product Owner",
        linkedin: "linkedin.com/in/marialopez",
        email: "maria.lopez@verticalgrow.io"
      }
    ],
    products: [
      { name: "API Platform", status: "active" },
      { name: "Analytics Dashboard", status: "active" },
      { name: "Workflow Automation", status: "pending" }
    ],
    healthScore: 78,
    nps: 8,
    recentActivity: [
      { type: "Support", description: "Opened ticket #4532: API Sync Issues", date: "1 day ago" },
      { type: "Meeting", description: "Technical Implementation Review", date: "1 week ago" },
      { type: "Usage", description: "API call volume increased by 25%", date: "2 weeks ago" }
    ],
    openIssues: 2,
    tags: ["Technical", "Growing", "Strategic"]
  },
  2: {
    id: 2,
    name: "TechCorp",
    company: "TechCorp Inc.",
    segment: "Enterprise",
    arr: 450000,
    location: "New York, NY",
    lastInteraction: "1 hour ago",
    email: "enterprise@techcorp.com",
    phone: "+1 (212) 555-1234",
    customerSince: "Feb 2022",
    nextQBR: "May 5, 2025",
    website: "techcorp.com",
    stakeholders: [
      {
        name: "Michael Johnson",
        role: "VP of Operations",
        linkedin: "linkedin.com/in/michaeljohnson",
        email: "michael.johnson@techcorp.com"
      },
      {
        name: "Sarah Williams",
        role: "Director of Technology",
        linkedin: "linkedin.com/in/sarahwilliams",
        email: "sarah.williams@techcorp.com"
      },
      {
        name: "James Rodriguez",
        role: "Operations Manager",
        linkedin: "linkedin.com/in/jamesrodriguez",
        email: "james.rodriguez@techcorp.com"
      }
    ],
    products: [
      { name: "Enterprise Suite", status: "active" },
      { name: "Data Integration Platform", status: "active" },
      { name: "Advanced Analytics", status: "active" },
      { name: "AI Assistant", status: "pending" }
    ],
    healthScore: 92,
    nps: 9,
    recentActivity: [
      { type: "Meeting", description: "Executive Business Review", date: "2 weeks ago" },
      { type: "Usage", description: "Added 50 new user licenses", date: "1 month ago" },
      { type: "Contract", description: "Renewed Enterprise Agreement", date: "3 months ago" }
    ],
    openIssues: 0,
    tags: ["Strategic", "Enterprise", "Expansion", "Advocate"]
  },
  3: {
    id: 3,
    name: "Innovate Co",
    company: "Innovate Co",
    segment: "Mid-Market",
    arr: 85000,
    location: "Austin, TX",
    lastInteraction: "Yesterday",
    email: "support@innovate.co",
    phone: "+1 (512) 555-6789",
    customerSince: "Nov 2023",
    nextQBR: "Jun 1, 2025",
    website: "innovate.co",
    stakeholders: [
      {
        name: "Sarah Chen",
        role: "Operations Director",
        linkedin: "linkedin.com/in/sarahchen",
        email: "sarah.chen@innovate.co"
      },
      {
        name: "Mark Davis",
        role: "CFO",
        linkedin: "linkedin.com/in/markdavis",
        email: "mark.davis@innovate.co"
      }
    ],
    products: [
      { name: "Basic Platform", status: "active" },
      { name: "Reporting Tools", status: "inactive" }
    ],
    healthScore: 45,
    nps: 6,
    recentActivity: [
      { type: "Meeting", description: "Renewal Discussion", date: "3 days ago" },
      { type: "Support", description: "Escalation to Technical Team", date: "2 weeks ago" },
      { type: "Usage", description: "Usage declined by 15%", date: "1 month ago" }
    ],
    openIssues: 3,
    tags: ["Churn Risk", "ROI Concerns", "Needs Attention"]
  },
  4: {
    id: 4,
    name: "Enterprise Org",
    company: "Enterprise Organization",
    segment: "Enterprise",
    arr: 320000,
    location: "Chicago, IL",
    lastInteraction: "2 days ago",
    email: "tech@enterprise.org",
    phone: "+1 (312) 555-4321",
    customerSince: "Aug 2022",
    nextQBR: "Jul 10, 2025",
    website: "enterprise.org",
    stakeholders: [
      {
        name: "David Wilson",
        role: "IT Director",
        linkedin: "linkedin.com/in/davidwilson",
        email: "david.wilson@enterprise.org"
      },
      {
        name: "Jennifer Lee",
        role: "Business Analyst",
        linkedin: "linkedin.com/in/jenniferlee",
        email: "jennifer.lee@enterprise.org"
      },
      {
        name: "Thomas Brown",
        role: "CIO",
        linkedin: "linkedin.com/in/thomasbrown",
        email: "thomas.brown@enterprise.org"
      }
    ],
    products: [
      { name: "Enterprise Suite", status: "active" },
      { name: "Reporting Platform", status: "active" },
      { name: "Mobile Access", status: "pending" }
    ],
    healthScore: 86,
    nps: 8,
    recentActivity: [
      { type: "Feature", description: "Requested Enhanced Reporting", date: "2 days ago" },
      { type: "Meeting", description: "Product Roadmap Discussion", date: "2 weeks ago" },
      { type: "Support", description: "Training Session for New Users", date: "1 month ago" }
    ],
    openIssues: 1,
    tags: ["Strategic", "Product Feedback", "Growth Potential"]
  }
};

export function ClientDetailsPanel({ clientId, onClose }: ClientDetailsPanelProps) {
  const [client, setClient] = useState<ClientData | null>(null);
  const [sectionsOpen, setSectionsOpen] = useState({
    stakeholders: true,
    activity: true,
    products: true
  });

  useEffect(() => {
    // In a real app, this would be an API call
    setClient(mockClientData[clientId] || null);
  }, [clientId]);

  if (!client) {
    return null;
  }

  const getHealthColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <Card className="w-80 flex-shrink-0">
      <CardContent className="p-0 h-full">
        <div className="p-4 border-b flex justify-between items-center">
          <Button variant="ghost" size="sm" onClick={onClose}>
            <ChevronLeft className="h-4 w-4 mr-1" />
            Hide Details
          </Button>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <ScrollArea className="h-[calc(100vh-200px)] p-4">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {client.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-bold">{client.name}</h3>
                <p className="text-sm text-muted-foreground">{client.company}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                {client.segment}
              </Badge>
              {client.healthScore >= 80 && (
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Healthy
                </Badge>
              )}
              {client.healthScore < 80 && client.healthScore >= 60 && (
                <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                  Attention Needed
                </Badge>
              )}
              {client.healthScore < 60 && (
                <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                  At Risk
                </Badge>
              )}
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border p-3">
                <div className="text-xs text-muted-foreground">Annual Revenue</div>
                <div className="font-bold">${(client.arr / 1000).toFixed(0)}k</div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="text-xs text-muted-foreground">Health Score</div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">{client.healthScore}%</span>
                  <div className="w-10 h-2 rounded-full bg-gray-200">
                    <div className={`h-2 rounded-full ${getHealthColor(client.healthScore)}`} style={{ width: `${client.healthScore}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{client.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{client.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Customer since {client.customerSince}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Last interaction: {client.lastInteraction}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Next QBR: {client.nextQBR}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{client.email}</span>
              </div>
              {client.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{client.phone}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Link className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{client.website}</span>
              </div>
            </div>
            
            <Separator />
            
            <Collapsible
              open={sectionsOpen.stakeholders}
              onOpenChange={(open) => setSectionsOpen({ ...sectionsOpen, stakeholders: open })}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Key Stakeholders</h3>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm">
                    {sectionsOpen.stakeholders ? "-" : "+"}
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <div className="space-y-2 mt-2">
                  {client.stakeholders.map((stakeholder, index) => (
                    <div key={index} className="rounded-lg border p-2">
                      <div className="font-medium text-sm">{stakeholder.name}</div>
                      <div className="text-xs text-muted-foreground">{stakeholder.role}</div>
                      <div className="flex items-center gap-2 mt-1">
                        {stakeholder.linkedin && (
                          <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                            <a href={`https://${stakeholder.linkedin}`} target="_blank" rel="noopener noreferrer">
                              <Link className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        {stakeholder.email && (
                          <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                            <a href={`mailto:${stakeholder.email}`}>
                              <Mail className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
            
            <Separator />
            
            <Collapsible
              open={sectionsOpen.products}
              onOpenChange={(open) => setSectionsOpen({ ...sectionsOpen, products: open })}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Products</h3>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm">
                    {sectionsOpen.products ? "-" : "+"}
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <div className="space-y-1 mt-2">
                  {client.products.map((product, index) => (
                    <div key={index} className="flex items-center justify-between py-1">
                      <span className="text-sm">{product.name}</span>
                      <Badge 
                        variant={
                          product.status === "active" ? "default" : 
                          product.status === "pending" ? "secondary" : 
                          "outline"
                        }
                        className={
                          product.status === "active" ? "bg-green-500" : 
                          product.status === "pending" ? "bg-amber-500" : 
                          "bg-gray-200 text-gray-700"
                        }
                      >
                        {product.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
            
            <Separator />
            
            <Collapsible
              open={sectionsOpen.activity}
              onOpenChange={(open) => setSectionsOpen({ ...sectionsOpen, activity: open })}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Recent Activity</h3>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm">
                    {sectionsOpen.activity ? "-" : "+"}
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <div className="space-y-2 mt-2">
                  {client.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-2">
                      {activity.type === "Support" && <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />}
                      {activity.type === "Meeting" && <Users className="h-4 w-4 text-blue-500 mt-0.5" />}
                      {activity.type === "Usage" && <ChartPie className="h-4 w-4 text-violet-500 mt-0.5" />}
                      {activity.type === "Feature" && <Tag className="h-4 w-4 text-green-500 mt-0.5" />}
                      {activity.type === "Contract" && <FileText className="h-4 w-4 text-gray-500 mt-0.5" />}
                      <div>
                        <div className="text-sm">{activity.description}</div>
                        <div className="text-xs text-muted-foreground">{activity.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
            
            <Separator />
            
            <div>
              <h3 className="text-sm font-medium mb-2">Tags</h3>
              <div className="flex flex-wrap gap-1">
                {client.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            {client.openIssues > 0 && (
              <div className="rounded-lg bg-amber-50 border border-amber-200 p-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <span className="text-sm font-medium text-amber-800">
                    {client.openIssues} Open Issue{client.openIssues !== 1 ? "s" : ""}
                  </span>
                </div>
              </div>
            )}
            
            <div className="flex justify-center mt-4">
              <Button variant="outline" size="sm" className="w-full">
                <MessageSquare className="h-4 w-4 mr-2" />
                View Full Client Profile
              </Button>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
