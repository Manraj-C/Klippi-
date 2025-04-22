import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import MeetingAINotetaker from "@/components/meetings/MeetingAINotetaker";
import { MeetingTable } from "@/components/meetings/MeetingTable";
import { MeetingSearchBar } from "@/components/meetings/MeetingSearchBar";
import { MeetingListCard } from "@/components/meetings/MeetingListCard";

const MEETING_CATEGORIES = ["QBR", "Client Escalation", "Pricing Call", "Onboarding", "Demo", "Support"];

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
  },
  {
    id: 100,
    title: "QBR with Future Tech",
    date: "2025-03-20T09:30:00",
    duration: 60,
    client: "Future Tech",
    type: "QBR",
    status: "completed",
    category: "QBR",
    participants: ["Clara Jones", "You"],
    summary: "Reviewed quarterly objectives and KPIs, discussed growth initiatives.",
    action_items: [
      "Share updated project roadmap",
      "Schedule account expansion session",
      "Send QBR recording"
    ]
  },
  {
    id: 101,
    title: "Escalation: Delayed Integration for Nano Systems",
    date: "2025-03-15T13:00:00",
    duration: 45,
    client: "Nano Systems",
    type: "Support",
    status: "completed",
    category: "Client Escalation",
    participants: ["Liam Smith", "You"],
    summary: "Escalated delay concerns; action plan for expedited resolution agreed.",
    action_items: [
      "Provide new timeline to client",
      "Escalate with engineering lead",
      "Draft root-cause document"
    ]
  },
  {
    id: 102,
    title: "Renewal & Pricing Review - Alpha Beta",
    date: "2025-03-10T16:30:00",
    duration: 50,
    client: "Alpha Beta",
    type: "Pricing Call",
    status: "completed",
    category: "Pricing Call",
    participants: ["Isabella Green", "You"],
    summary: "Engaged in pricing plan options for renewal and upsell.",
    action_items: [
      "Send new quote",
      "Arrange finance review",
      "Update CRM record"
    ]
  },
  {
    id: 103,
    title: "Onboarding Kickoff - Gamma Solutions",
    date: "2025-03-05T10:00:00",
    duration: 60,
    client: "Gamma Solutions",
    type: "Onboarding",
    status: "completed",
    category: "Onboarding",
    participants: ["Peter Brown", "You"],
    summary: "Walked through onboarding checklist; client successfully setup.",
    action_items: [
      "Send onboarding docs",
      "Check integration progress",
      "Get feedback after 1 week"
    ]
  },
  {
    id: 104,
    title: "Demo: Feature Walkthrough - DataWave",
    date: "2025-02-28T14:30:00",
    duration: 30,
    client: "DataWave",
    type: "Demo",
    status: "completed",
    category: "Demo",
    participants: ["Angela Lee", "You"],
    summary: "Highlighted analytics and reporting capabilities.",
    action_items: [
      "Send recorded demo",
      "Book Q&A",
      "Share release notes"
    ]
  },
  {
    id: 105,
    title: "CSAT Check-in - SecureLogic",
    date: "2025-02-23T09:00:00",
    duration: 30,
    client: "SecureLogic",
    type: "Support",
    status: "completed",
    category: "Support",
    participants: ["Oliver White", "You"],
    summary: "Reviewed CSAT feedback survey results and next steps for support improvement.",
    action_items: [
      "Document feedback themes",
      "Update support knowledge base",
      "Book client follow-up"
    ]
  }
];

const dummyTranscript = `Speaker 1: Thank you everyone for joining the call.
Speaker 2: Excited to dive into our Q2 goals.
Speaker 1: First agenda item, progress since last meeting.
Speaker 2: Integration is going well, but we have one blocker on API authentication.
Speaker 1: Noted, let's flag it for our engineering team to resolve after this call.
Speaker 2: Sounds great, looking forward to updates next week.`;

const dummyMeetingSummary = `This session covered quarterly results, reviewed key account objectives, and addressed integration updates. Follow-up actions were established and sentiment was positive throughout.`;

const Meetings = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMeeting, setSelectedMeeting] = useState<any>(null);

  const filteredMeetings = meetings.filter(meeting =>
    meeting.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    meeting.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (meeting.category || meeting.type).toLowerCase().includes(searchQuery.toLowerCase())
  );

  const upcomingMeetings = filteredMeetings.filter(m => m.status === "upcoming");
  const pastMeetings = filteredMeetings.filter(m => m.status === "completed");

  return (
    <DashboardLayout>
      {!selectedMeeting ? (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mb-4">
            <h1 className="text-2xl font-bold">Meetings</h1>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Schedule Meeting
            </Button>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <MeetingSearchBar value={searchQuery} onChange={setSearchQuery} />
            {/* Room for a filter button in the future */}
          </div>
          <Tabs defaultValue="upcoming" className="mt-2">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past Meetings</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming" className="mt-4">
              {upcomingMeetings.length > 0 ? (
                <div className="space-y-3">
                  {upcomingMeetings.map(meeting => (
                    <MeetingListCard key={meeting.id} meeting={meeting} onView={setSelectedMeeting} />
                  ))}
                </div>
              ) : (
                <div className="text-center text-muted-foreground mt-10">
                  No upcoming meetings. Schedule one!
                </div>
              )}
            </TabsContent>
            <TabsContent value="past" className="mt-4">
              {pastMeetings.length > 0 ? (
                <MeetingTable data={pastMeetings} onView={setSelectedMeeting} />
              ) : (
                <div className="text-center text-muted-foreground mt-10">
                  No past meetings found.
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5 mt-1">
            <Button
              variant="ghost"
              size="sm"
              className="gap-1"
              onClick={() => setSelectedMeeting(null)}
            >
              ← Back
            </Button>
            <h2 className="text-xl font-bold truncate">{selectedMeeting.title}</h2>
          </div>
          <MeetingAINotetaker
            meetingTitle={selectedMeeting.title}
            client={selectedMeeting.client}
            aiSummary={selectedMeeting.summary || "The meeting was productive and action-oriented."}
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
            transcript={dummyTranscript}
            meetingSummary={dummyMeetingSummary}
          />
        </div>
      )}
    </DashboardLayout>
  );
};

export default Meetings;
