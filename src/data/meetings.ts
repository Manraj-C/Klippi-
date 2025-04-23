import { Meeting } from "@/types/meetings";

export const MEETING_CATEGORIES = ["QBR", "Client Escalation", "Pricing Call", "Onboarding", "Demo", "Support"];

export const meetings: Meeting[] = [
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
