import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Search, Filter, Play, Download, ArrowRight, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import MeetingAINotetaker from "@/components/meetings/MeetingAINotetaker";

const categoryColors: { [key: string]: string } = {
  "QBR": "bg-purple-100 text-purple-700",
  "Client Escalation": "bg-red-100 text-red-600",
  "Pricing Call": "bg-yellow-100 text-yellow-700",
  "Onboarding": "bg-green-100 text-green-700",
  "Demo": "bg-blue-100 text-blue-700",
  "Support": "bg-gray-100 text-gray-700"
};

const meetings = [
  {
    id: 1,
    title: "Quarterly Business Review - Acme Inc.",
    date: "2025-04-20T14:00:00",
    duration: 60,
    client: "Acme Inc.",
    type: "QBR",
    status: "upcoming",
    participants: ["John Smith", "Sarah Johnson", "You"],
  },
  {
    id: 2,
    title: "Onboarding Follow-up - Tech Corp",
    date: "2025-04-18T10:30:00",
    duration: 45,
    client: "Tech Corp",
    type: "Onboarding",
    status: "upcoming",
    participants: ["Mike Williams", "Emily Brown", "You"],
  },
  {
    id: 3,
    title: "Product Demo - Global Industries",
    date: "2025-04-15T09:00:00",
    duration: 30,
    client: "Global Industries",
    type: "Demo",
    status: "completed",
    participants: ["Sarah Johnson", "You"],
    summary: "Demonstrated new analytics features. Client was impressed with the dashboards and requested follow-up on API capabilities.",
    action_items: [
      "Send API documentation",
      "Schedule follow-up technical call",
      "Create custom report example"
    ],
    recording_url: "https://example.com/recording/123"
  },
  {
    id: 4,
    title: "Support Check-in - Digital Solutions",
    date: "2025-04-10T11:00:00",
    duration: 30,
    client: "Digital Solutions",
    type: "Support",
    status: "completed",
    participants: ["Emily Brown", "David Lee", "You"],
    summary: "Addressed ongoing issues with data import. Provided temporary workaround and timeline for permanent fix.",
    action_items: [
      "Share documentation on CSV format requirements",
      "Create support ticket for engineering team",
      "Schedule follow-up next week"
    ]
  },
  {
    id: 5,
    title: "Renewal & Pricing - Northwind Traders",
    date: "2025-04-03T13:30:00",
    duration: 45,
    client: "Northwind Traders",
    type: "Pricing Call",
    status: "completed",
    category: "Pricing Call",
    participants: ["Cara Lopez", "You"],
    summary: "Reviewed renewal pricing. Discussed next contract. Client responded positively to new discount model.",
    action_items: [
      "Send updated contract",
      "Confirm discount eligibility",
      "Arrange finance review call"
    ]
  },
  {
    id: 6,
    title: "Quarterly Business Review - Beta LLC",
    date: "2025-03-29T09:30:00",
    duration: 50,
    client: "Beta LLC",
    type: "QBR",
    status: "completed",
    category: "QBR",
    participants: ["Anya Singh", "You"],
    summary: "Reviewed account health, KPIs, and planned next quarter goals.",
    action_items: [
      "Send QBR slides",
      "Schedule success metrics check-in",
      "Share adoption dashboard"
    ]
  },
  {
    id: 7,
    title: "Escalation Meeting - Omega FinTech",
    date: "2025-03-27T12:00:00",
    duration: 30,
    client: "Omega FinTech",
    type: "Support",
    status: "completed",
    category: "Client Escalation",
    participants: ["Sam Turner", "Nina Patel", "You"],
    summary: "Urgent discussion on API downtime. Client expressed urgency and requested compensatory SLA.",
    action_items: [
      "Provide incident report",
      "Coordinate with engineering for fix",
      "Setup follow-up next day"
    ]
  },
  {
    id: 8,
    title: "Onboarding Workshop - Alpha Design",
    date: "2025-03-24T15:00:00",
    duration: 60,
    client: "Alpha Design",
    type: "Onboarding",
    status: "completed",
    category: "Onboarding",
    participants: ["Jordan Wu", "Leah Moss", "You"],
    summary: "Walked through API onboarding, demonstrated workflows, set account milestones.",
    action_items: [
      "Share onboarding resources",
      "Book next milestone review",
      "Send personalized workflow tips"
    ]
  },
  {
    id: 9,
    title: "Feature Demo - Visionary Retail",
    date: "2025-03-18T14:00:00",
    duration: 30,
    client: "Visionary Retail",
    type: "Demo",
    status: "completed",
    category: "Demo",
    participants: ["Derek Yu", "You"],
    summary: "Presented advanced analytics features; client interested in early access.",
    action_items: [
      "Grant early access",
      "Book analytics Q&A",
      "Share product roadmap"
    ]
  }
];

const Meetings = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMeeting, setSelectedMeeting] = useState<any>(null);
  const [showMeetingDetail, setShowMeetingDetail] = useState(false);

  const filteredMeetings = meetings.filter(meeting => 
    meeting.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    meeting.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
    meeting.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const upcomingMeetings = filteredMeetings.filter(meeting => meeting.status === "upcoming");
  const pastMeetings = filteredMeetings.filter(meeting => meeting.status === "completed");

  const handleViewMeeting = (meeting: any) => {
    setSelectedMeeting(meeting);
    setShowMeetingDetail(true);
  };

  return (
    <DashboardLayout>
      {!showMeetingDetail ? (
        <>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Customer Meetings</h1>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Schedule Meeting
            </Button>
          </div>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search meetings..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="outline" className="gap-2 whitespace-nowrap">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="upcoming">
            <TabsList className="mb-6">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past Meetings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="mt-0">
              {upcomingMeetings.length > 0 ? (
                <div className="space-y-4">
                  {upcomingMeetings.map(meeting => (
                    <Card key={meeting.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="p-4 border-l-4 border-primary">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-start gap-4">
                                <div className="rounded-full h-10 w-10 bg-primary/10 flex items-center justify-center text-primary font-medium">
                                  {meeting.client.charAt(0)}
                                </div>
                                <div>
                                  <h3 className="font-semibold text-lg">{meeting.title}</h3>
                                  <p className="text-sm text-muted-foreground">{meeting.client} • {meeting.type}</p>
                                  <div className="flex items-center gap-4 mt-1 text-sm">
                                    <span>{new Date(meeting.date).toLocaleDateString()} at {new Date(meeting.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                                    <span>{meeting.duration} mins</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mt-4 lg:mt-0">
                              <Button variant="outline" size="sm">Prepare</Button>
                              <Button size="sm">Join Meeting</Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center p-8">
                  <CalendarIcon className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                  <p className="font-medium">No upcoming meetings</p>
                  <p className="text-sm text-muted-foreground">Schedule a new meeting to get started.</p>
                  <Button className="mt-4">Schedule Meeting</Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="past" className="mt-0">
              {pastMeetings.length > 0 ? (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Meeting</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Client</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Summary</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pastMeetings.map(meeting => (
                        <TableRow key={meeting.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{meeting.title}</div>
                              <div className="text-xs text-muted-foreground">{meeting.type}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            {new Date(meeting.date).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            {meeting.client}
                          </TableCell>
                          <TableCell>
                            {meeting.category && (
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded-full font-medium text-xs ${categoryColors[meeting.category] || "bg-gray-200 text-gray-700"}`}
                              >
                                {meeting.category}
                              </span>
                            )}
                          </TableCell>
                          <TableCell className="max-w-[240px] truncate">
                            {meeting.summary || "-"}
                          </TableCell>
                          <TableCell>
                            <div className="flex justify-end gap-2">
                              {meeting.recording_url && (
                                <Button variant="ghost" size="icon">
                                  <Play className="h-4 w-4" />
                                </Button>
                              )}
                              <Button variant="ghost" size="icon">
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="gap-1"
                                onClick={() => handleViewMeeting(meeting)}
                              >
                                View <ArrowRight className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="text-center p-8">
                  <CalendarIcon className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                  <p className="font-medium">No past meetings found</p>
                  <p className="text-sm text-muted-foreground">Past meetings will appear here once completed.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </>
      ) : (
        <>
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="ghost"
              size="sm"
              className="gap-1"
              onClick={() => setShowMeetingDetail(false)}
            >
              <ArrowRight className="h-4 w-4 rotate-180" /> Back to meetings
            </Button>
            <h1 className="text-2xl font-bold truncate">{selectedMeeting?.title}</h1>
          </div>
          
          <MeetingAINotetaker
            meetingTitle={selectedMeeting.title}
            client={selectedMeeting.client}
            aiSummary={selectedMeeting.summary || "The meeting was productive and action-oriented."}
            transcript={
              `Speaker 1: Welcome everyone, let's begin the review. 
Speaker 2: Thanks, excited to discuss our Q1 achievements! 
Speaker 1: We'll cover KPIs, then have time for Q&A.
Speaker 2: Can we get an update on integration?
Speaker 1: Yes, the timeline is on track.`
            }
            aiTopicTrackers={[
              "Customer Success", "Product Integration", "Timeline Planning", "Resource Allocation"
            ]}
            aiFollowUps={[
              "Send meeting notes to client",
              "Schedule technical follow-up",
              "Share integration documentation"
            ]}
            aiSentimentScore={selectedMeeting.sentimentScore || 86}
            csmActions={[
              "Create personalized onboarding plan",
              "Set up check-in cadence",
              "Document success metrics"
            ]}
            meetingSummary={
              `During this meeting, attendees reviewed the project timeline, discussed integration challenges, and highlighted next steps for both teams. The discussion was positive, and the client is engaged with upcoming milestones.`
            }
          />
        </>
      )}
    </DashboardLayout>
  );
};

export default Meetings;
