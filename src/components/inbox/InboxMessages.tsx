
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Edit, 
  RefreshCcw, 
  Search, 
  Trash2, 
  Send, 
  UserPlus,
  Tag,
  Star,
  Clock,
  AlertCircle,
  CheckCircle,
  ChevronRight,
  Info
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface InboxMessagesProps {
  showClientDetails: boolean;
  setShowClientDetails: (show: boolean) => void;
  setSelectedClientId: (id: number) => void;
  autoReplyEnabled: boolean;
}

const mockEmails = [
  {
    id: 1,
    clientId: 1,
    to: "jane.smith@verticalgrow.io",
    avatar: "J",
    subject: "API Integration Issues",
    preview: "Hi Cynthia, We've been experiencing some difficulties with the API integration we discussed last week. The data sync is not working as expected, and we're seeing discrepancies in the client information being pulled. Could you please help us troubleshoot this issue as soon as possible?",
    date: "23 mins ago",
    read: false,
    category: "Technical Support",
    priority: "High",
    labels: ["Technical", "Urgent", "Integration"],
    suggestedActions: [
      { id: "schedule-call", text: "Schedule a Technical Call", icon: Clock },
      { id: "create-ticket", text: "Create Support Ticket", icon: AlertCircle },
      { id: "share-docs", text: "Share API Documentation", icon: Send }
    ]
  },
  {
    id: 2,
    clientId: 2,
    to: "michael.johnson@techcorp.com",
    avatar: "M",
    subject: "Quarterly Business Review Scheduling",
    preview: "Hello Cynthia, I hope you're well. I'd like to schedule our quarterly business review for next month. We have some exciting growth numbers to share and would also like to discuss expanding our usage of your platform across additional departments.",
    date: "1 hour ago",
    read: true,
    category: "Account Management",
    priority: "Medium",
    labels: ["QBR", "Expansion", "Strategic"],
    suggestedActions: [
      { id: "schedule-qbr", text: "Propose QBR Dates", icon: Clock },
      { id: "prepare-assets", text: "Prepare Account Review", icon: CheckCircle },
      { id: "loop-in-am", text: "Loop in Account Manager", icon: UserPlus }
    ]
  },
  {
    id: 3,
    clientId: 3,
    to: "sarah.chen@innovate.co",
    avatar: "S",
    subject: "Renewal Discussion",
    preview: "Hi Cynthia, Our contract is coming up for renewal in 45 days. Before we proceed, I'd like to discuss some concerns our team has about the ROI we're seeing. Could we set up a call to review usage metrics and the value we're getting?",
    date: "Yesterday",
    read: true,
    category: "Renewal",
    priority: "Critical",
    labels: ["Churn Risk", "Renewal", "ROI Concern"],
    suggestedActions: [
      { id: "value-deck", text: "Send Value Assessment", icon: Send },
      { id: "exec-touch", text: "Schedule Executive Touch", icon: UserPlus },
      { id: "success-metrics", text: "Prepare Success Metrics", icon: CheckCircle }
    ]
  },
  {
    id: 4,
    clientId: 4,
    to: "david.wilson@enterprise.org",
    avatar: "D",
    subject: "Feature Request: Enhanced Reporting",
    preview: "Hello Cynthia, Our team has been using your platform extensively and we've identified some reporting capabilities that would make it even more valuable for us. Specifically, we'd like to see customizable dashboards that our executives can use for quick insights.",
    date: "2 days ago",
    read: false,
    category: "Feature Request",
    priority: "Medium",
    labels: ["Feature Request", "Reporting", "Product Feedback"],
    suggestedActions: [
      { id: "add-to-roadmap", text: "Add to Product Roadmap", icon: CheckCircle },
      { id: "share-workaround", text: "Share Current Workarounds", icon: Info },
      { id: "connect-pm", text: "Connect with Product Manager", icon: UserPlus }
    ]
  }
];

export function InboxMessages({ showClientDetails, setShowClientDetails, setSelectedClientId, autoReplyEnabled }: InboxMessagesProps) {
  const [activeEmailId, setActiveEmailId] = useState<number | null>(1);
  const [filterView, setFilterView] = useState("all");
  const activeEmail = mockEmails.find(email => email.id === activeEmailId);

  const handleEmailSelect = (emailId: number, clientId: number) => {
    setActiveEmailId(emailId);
    setSelectedClientId(clientId);
    if (!showClientDetails) {
      setShowClientDetails(true);
    }
  };
  
  const filteredEmails = filterView === "all" 
    ? mockEmails 
    : filterView === "urgent" 
      ? mockEmails.filter(email => email.priority === "High" || email.priority === "Critical") 
      : mockEmails.filter(email => email.labels.includes(filterView));

  const renderLabel = (label: string) => {
    let color = "";
    
    switch(label) {
      case "Urgent":
      case "Churn Risk":
        color = "bg-red-100 text-red-800 border-red-200";
        break;
      case "Technical":
      case "Integration":
        color = "bg-blue-100 text-blue-800 border-blue-200";
        break;
      case "QBR":
      case "Strategic":
        color = "bg-purple-100 text-purple-800 border-purple-200";
        break;
      case "Expansion":
      case "Feature Request":
        color = "bg-green-100 text-green-800 border-green-200";
        break;
      case "Renewal":
      case "ROI Concern":
        color = "bg-amber-100 text-amber-800 border-amber-200";
        break;
      case "Reporting":
      case "Product Feedback":
        color = "bg-indigo-100 text-indigo-800 border-indigo-200";
        break;
      default:
        color = "bg-gray-100 text-gray-800 border-gray-200";
    }
    
    return (
      <Badge variant="outline" className={`${color} text-xs`}>
        {label}
      </Badge>
    );
  };

  const renderPriority = (priority: string) => {
    switch(priority) {
      case "Critical":
        return <Badge className="bg-red-500">Critical</Badge>;
      case "High":
        return <Badge className="bg-orange-500">High</Badge>;
      case "Medium":
        return <Badge className="bg-blue-500">Medium</Badge>;
      case "Low":
        return <Badge className="bg-green-500">Low</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-1">
        <Card className="h-full">
          <div className="p-4">
            <div className="flex items-center space-x-2 mb-4">
              <Input placeholder="Search emails..." className="flex-1" />
              <Button variant="outline" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            <Tabs defaultValue="all" onValueChange={setFilterView}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="urgent">Urgent</TabsTrigger>
                <TabsTrigger value="Technical">Technical</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="overflow-y-auto" style={{ maxHeight: "calc(100vh - 270px)" }}>
            {filteredEmails.map((email) => (
              <div
                key={email.id}
                className={`p-4 border-b cursor-pointer hover:bg-muted/30 ${
                  activeEmailId === email.id ? "bg-muted/50" : ""
                } ${!email.read ? "font-medium" : ""}`}
                onClick={() => handleEmailSelect(email.id, email.clientId)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                    {email.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm truncate">{email.to}</p>
                    <p className="text-xs text-muted-foreground">{email.date}</p>
                  </div>
                  <div>
                    {!email.read && (
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    )}
                  </div>
                </div>
                <h3 className="mt-2 text-sm font-medium">{email.subject}</h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                  {email.preview}
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {email.labels.slice(0, 2).map((label, idx) => (
                    <span key={idx}>{renderLabel(label)}</span>
                  ))}
                  {email.labels.length > 2 && (
                    <span className="text-xs text-muted-foreground">+{email.labels.length - 2}</span>
                  )}
                  <div className="ml-auto">{renderPriority(email.priority)}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="lg:col-span-2">
        {activeEmail ? (
          <Card className="h-full">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="bg-violet-100 text-violet-700 hover:bg-violet-100">
                      {activeEmail.category}
                    </Badge>
                    <span className="text-muted-foreground text-sm">{activeEmail.date}</span>
                  </div>
                  <h2 className="text-xl font-bold">{activeEmail.subject}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Star className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <RefreshCcw className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="font-medium">To:</span>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs">
                    {activeEmail.avatar}
                  </div>
                  <span className="ml-2">{activeEmail.to}</span>
                </div>
              </div>

              <div className="prose max-w-none mb-6">
                <p>Hi Cynthia,</p>
                {activeEmail.id === 1 && (
                  <>
                    <p>We've been experiencing some difficulties with the API integration we discussed last week. The <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded">data sync is not working as expected</span>, and we're seeing discrepancies in the client information being pulled.</p>
                    <p>Specifically, we're noticing:</p>
                    <ul>
                      <li>User profile data isn't syncing correctly</li>
                      <li>Some API calls are timing out after 30 seconds</li>
                      <li>The error logs aren't providing useful debugging information</li>
                    </ul>
                    <p>Could you please help us troubleshoot this issue as soon as possible? Our development team is blocked on this integration.</p>
                  </>
                )}
                {activeEmail.id === 2 && (
                  <>
                    <p>I hope you're well. I'd like to schedule our quarterly business review for next month. We have some exciting growth numbers to share and would also like to discuss <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">expanding our usage of your platform across additional departments</span>.</p>
                    <p>Our leadership team is particularly interested in:</p>
                    <ul>
                      <li>Results from our initial implementation</li>
                      <li>ROI metrics and success stories</li>
                      <li>Opportunities for expanding to our marketing team</li>
                    </ul>
                    <p>Would you be available sometime in the second week of May? We'd prefer a 90-minute slot if possible.</p>
                  </>
                )}
                {activeEmail.id === 3 && (
                  <>
                    <p>Our contract is coming up for renewal in 45 days. Before we proceed, I'd like to discuss some concerns our team has about the ROI we're seeing.</p>
                    <p>While we appreciate the platform's capabilities, we've had some challenges with:</p>
                    <ul>
                      <li><span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded">User adoption rates being lower than expected</span></li>
                      <li>Difficulty quantifying the time savings</li>
                      <li>Integration costs being higher than anticipated</li>
                    </ul>
                    <p>Could we set up a call to review usage metrics and the value we're getting? I'd like to bring my director into this conversation as well.</p>
                  </>
                )}
                {activeEmail.id === 4 && (
                  <>
                    <p>Our team has been using your platform extensively and we've identified some reporting capabilities that would make it even more valuable for us.</p>
                    <p>Specifically, we'd like to see:</p>
                    <ul>
                      <li><span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">Customizable dashboards that our executives can use for quick insights</span></li>
                      <li>The ability to export report data in various formats (PDF, Excel, CSV)</li>
                      <li>Advanced filtering options by user role and department</li>
                    </ul>
                    <p>These improvements would significantly enhance our experience and help us better track the value your solution is providing.</p>
                  </>
                )}
                <p>
                  Best regards,<br />
                  {activeEmail.to.split('@')[0].split('.').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </p>
              </div>

              {autoReplyEnabled && (
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-100 text-blue-700 border-blue-200">AI Suggested Reply</Badge>
                    <span className="text-xs text-blue-700">Generated based on client history and context</span>
                  </div>
                  
                  {activeEmail.id === 1 && (
                    <p className="text-sm text-gray-700">
                      "I'm sorry to hear about the API integration issues. I'll connect you with our technical team right away. In the meantime, could you share your error logs? I've also attached our updated API troubleshooting guide that addresses common sync issues."
                    </p>
                  )}
                  {activeEmail.id === 2 && (
                    <p className="text-sm text-gray-700">
                      "I'd be happy to schedule our QBR! I have availability on May 10th or 12th from 1-2:30pm EST. I'm excited to hear about your growth and discuss expansion opportunities across departments. I'll prepare our success metrics and ROI analysis for the meeting."
                    </p>
                  )}
                  {activeEmail.id === 3 && (
                    <p className="text-sm text-gray-700">
                      "Thank you for bringing up your concerns before renewal. I'd like to schedule a call with you and your director to address these ROI questions. I'll also prepare a comprehensive value assessment based on your current usage patterns to identify opportunities for improvement."
                    </p>
                  )}
                  {activeEmail.id === 4 && (
                    <p className="text-sm text-gray-700">
                      "Thanks for this valuable feedback! I'm pleased to let you know that customizable dashboards are actually on our Q3 roadmap. I'll connect you with our product team to provide more input, and I'd also like to show you some current workarounds that might help until the feature is released."
                    </p>
                  )}

                  <div className="flex justify-end mt-2">
                    <Button variant="outline" size="sm" className="mr-2">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm">
                      <Send className="h-3 w-3 mr-1" />
                      Send
                    </Button>
                  </div>
                </div>
              )}

              <div className="rounded-lg border p-4 bg-muted/10">
                <h3 className="font-medium text-sm mb-2">Suggested CSM Actions</h3>
                <div className="flex flex-wrap gap-2">
                  {activeEmail.suggestedActions.map((action) => (
                    <TooltipProvider key={action.id}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="sm" className="bg-white">
                            <action.icon className="h-4 w-4 mr-1" />
                            {action.text}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Click to execute this action</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <div className="relative">
                  <div className="border rounded-lg">
                    <div className="p-4">
                      <textarea
                        className="w-full resize-none focus:outline-none min-h-[100px]"
                        placeholder="Type your reply here..."
                      />
                    </div>
                    <div className="flex justify-between items-center p-2 border-t">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <RefreshCcw className="h-4 w-4 mr-1" />
                          AI Draft
                        </Button>
                      </div>
                      <Button>
                        <Send className="h-4 w-4 mr-1" />
                        Send Reply
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ) : (
          <Card className="h-full flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground">Select an email to view</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
