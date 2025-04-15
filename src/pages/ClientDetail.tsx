import { useParams } from "react-router-dom";
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  User, Phone, Mail, Calendar, MessageSquare, 
  FileText, AlertTriangle, RotateCw, Clock,
  CheckCircle, CheckCircle2, XCircle
} from "lucide-react";

const ClientDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  
  const client = {
    id: id,
    name: "Acme Inc.",
    logo: "https://via.placeholder.com/64",
    industry: "Technology",
    contactName: "John Smith",
    contactEmail: "john@acmeinc.com",
    contactPhone: "+1 (555) 123-4567",
    status: "active",
    health: "excellent",
    renewalDate: "2025-09-15",
    customerSince: "2023-05-10",
    notes: [
      { id: 1, date: "2025-04-10", content: "Discussed renewal options and new features", author: "Jane Doe" },
      { id: 2, date: "2025-04-01", content: "Onboarded new team member from client side", author: "Jane Doe" }
    ],
    interactions: [
      { id: 1, type: "meeting", date: "2025-04-12", title: "Quarterly Business Review", summary: "Discussed product roadmap and renewal options" },
      { id: 2, type: "email", date: "2025-04-08", title: "Feature Request Follow-up", summary: "Sent documentation about upcoming features" },
      { id: 3, type: "call", date: "2025-04-05", title: "Support Call", summary: "Resolved integration issue with their CRM" }
    ],
    risks: [
      { id: 1, severity: "medium", title: "Decreasing usage trend", description: "Active users decreased by 15% in the last month" },
      { id: 2, severity: "low", title: "Competitor interest", description: "Client mentioned evaluating a competitor solution" }
    ],
    tasks: [
      { id: 1, title: "Send feature documentation", dueDate: "2025-04-20", status: "pending" },
      { id: 2, title: "Schedule training session", dueDate: "2025-04-25", status: "completed" },
      { id: 3, title: "Prepare renewal proposal", dueDate: "2025-05-15", status: "pending" }
    ]
  };

  const renderHealthBadge = (health) => {
    const badgeClasses = {
      excellent: "bg-green-100 text-green-800",
      good: "bg-blue-100 text-blue-800",
      "needs-attention": "bg-yellow-100 text-yellow-800",
      "at-risk": "bg-red-100 text-red-800"
    };

    const labels = {
      excellent: "Excellent",
      good: "Good",
      "needs-attention": "Needs Attention",
      "at-risk": "At Risk"
    };

    return (
      <span className={`text-xs px-2 py-1 rounded-full ${badgeClasses[health]}`}>
        {labels[health]}
      </span>
    );
  };

  const renderTaskStatus = (status) => {
    if (status === "completed") {
      return <CheckCircle2 className="h-4 w-4 text-green-500" />;
    } else if (status === "in-progress") {
      return <RotateCw className="h-4 w-4 text-blue-500" />;
    } else {
      return <Clock className="h-4 w-4 text-orange-500" />;
    }
  };

  const renderRiskSeverity = (severity) => {
    const severityClasses = {
      high: "bg-red-100 text-red-800",
      medium: "bg-yellow-100 text-yellow-800",
      low: "bg-blue-100 text-blue-800"
    };

    return (
      <span className={`text-xs px-2 py-1 rounded-full ${severityClasses[severity]}`}>
        {severity.charAt(0).toUpperCase() + severity.slice(1)}
      </span>
    );
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
            {client.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-3xl font-bold">{client.name}</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-muted-foreground">{client.industry}</span>
              {renderHealthBadge(client.health)}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Contact</Button>
          <Button>Add Note</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="rounded-full p-2 bg-primary/10">
              <Calendar className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Renewal Date</p>
              <p className="font-medium">{new Date(client.renewalDate).toLocaleDateString()}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="rounded-full p-2 bg-primary/10">
              <Clock className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Customer Since</p>
              <p className="font-medium">{new Date(client.customerSince).toLocaleDateString()}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="rounded-full p-2 bg-primary/10">
              <AlertTriangle className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Risk Level</p>
              <p className="font-medium">{client.risks.length > 0 ? `${client.risks.length} Identified Risks` : "No Risks"}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="rounded-full p-2 bg-primary/10">
              <CheckCircle className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Open Tasks</p>
              <p className="font-medium">{client.tasks.filter(t => t.status !== "completed").length} Tasks</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex items-center gap-3">
              <User className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Primary Contact</p>
                <p className="font-medium">{client.contactName}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{client.contactEmail}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{client.contactPhone}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="grid grid-cols-5 md:w-[600px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="interactions">Interactions</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="risks">Risks</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Interactions</CardTitle>
              <CardDescription>Latest communications with {client.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {client.interactions.slice(0, 3).map(interaction => (
                  <div key={interaction.id} className="flex gap-4 items-start">
                    <div className="rounded-full p-2 bg-primary/10">
                      {interaction.type === "meeting" && <Calendar className="h-4 w-4 text-primary" />}
                      {interaction.type === "email" && <Mail className="h-4 w-4 text-primary" />}
                      {interaction.type === "call" && <Phone className="h-4 w-4 text-primary" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{interaction.title}</p>
                      <p className="text-sm text-muted-foreground">{interaction.summary}</p>
                      <p className="text-xs text-muted-foreground mt-1">{new Date(interaction.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Open Tasks</CardTitle>
              <CardDescription>Upcoming actions for this account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {client.tasks.filter(task => task.status !== "completed").map(task => (
                  <div key={task.id} className="flex gap-4 items-center">
                    <div className="rounded-full p-2 bg-primary/10">
                      {renderTaskStatus(task.status)}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{task.title}</p>
                      <p className="text-xs text-muted-foreground">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                    </div>
                    <Button variant="ghost" size="sm">Mark Complete</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Risk Assessment</CardTitle>
              <CardDescription>Potential issues requiring attention</CardDescription>
            </CardHeader>
            <CardContent>
              {client.risks.length > 0 ? (
                <div className="space-y-4">
                  {client.risks.map(risk => (
                    <div key={risk.id} className="flex gap-4 items-start">
                      <div className="rounded-full p-2 bg-primary/10">
                        <AlertTriangle className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{risk.title}</p>
                          {renderRiskSeverity(risk.severity)}
                        </div>
                        <p className="text-sm text-muted-foreground">{risk.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No risks identified at this time.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interactions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>All Interactions</CardTitle>
              <CardDescription>Complete history of communications with {client.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {client.interactions.map(interaction => (
                  <div key={interaction.id} className="flex gap-4 items-start border-b pb-4 last:border-b-0">
                    <div className="rounded-full p-2 bg-primary/10">
                      {interaction.type === "meeting" && <Calendar className="h-4 w-4 text-primary" />}
                      {interaction.type === "email" && <Mail className="h-4 w-4 text-primary" />}
                      {interaction.type === "call" && <Phone className="h-4 w-4 text-primary" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{interaction.title}</p>
                      <p className="text-sm">{interaction.summary}</p>
                      <p className="text-xs text-muted-foreground mt-1">{new Date(interaction.date).toLocaleDateString()}</p>
                    </div>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Task Management</CardTitle>
                  <CardDescription>Manage tasks related to this account</CardDescription>
                </div>
                <Button>Add New Task</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {client.tasks.map(task => (
                  <div key={task.id} className="flex gap-4 items-center border-b pb-4 last:border-b-0">
                    <div className="rounded-full p-2 bg-primary/10">
                      {renderTaskStatus(task.status)}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{task.title}</p>
                      <p className="text-xs text-muted-foreground">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">Edit</Button>
                      {task.status !== "completed" ? (
                        <Button variant="secondary" size="sm">Mark Complete</Button>
                      ) : (
                        <Button variant="outline" size="sm">Reopen</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="risks" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Risk Management</CardTitle>
                  <CardDescription>Track and mitigate potential issues</CardDescription>
                </div>
                <Button>Add Risk</Button>
              </div>
            </CardHeader>
            <CardContent>
              {client.risks.length > 0 ? (
                <div className="space-y-4">
                  {client.risks.map(risk => (
                    <div key={risk.id} className="flex gap-4 items-start border-b pb-4 last:border-b-0">
                      <div className="rounded-full p-2 bg-primary/10">
                        <AlertTriangle className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{risk.title}</p>
                          {renderRiskSeverity(risk.severity)}
                        </div>
                        <p className="text-sm">{risk.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Mitigate</Button>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <AlertTriangle className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                  <p className="font-medium">No risks identified</p>
                  <p className="text-sm text-muted-foreground">This client appears to be in good standing.</p>
                  <Button variant="outline" className="mt-4">Add Risk Assessment</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notes" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Notes & Documentation</CardTitle>
                  <CardDescription>Important information about this client</CardDescription>
                </div>
                <Button>Add Note</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {client.notes.map(note => (
                  <div key={note.id} className="border rounded-md p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{new Date(note.date).toLocaleDateString()}</p>
                        <p className="text-xs text-muted-foreground">By {note.author}</p>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                    <div className="mt-2">
                      <p>{note.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default ClientDetail;
