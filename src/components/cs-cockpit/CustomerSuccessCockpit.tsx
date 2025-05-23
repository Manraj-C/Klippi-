import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NewsFeed } from "@/components/cs-cockpit/NewsFeed";
import { InsightsSidebar } from "@/components/cs-cockpit/InsightsSidebar";
import { MessageList } from "@/components/messages/MessageList";
import { MessageContent } from "@/components/messages/MessageContent";
import { Badge } from "@/components/ui/badge";

export function CustomerSuccessCockpit() {
  const [activeTab, setActiveTab] = useState<string>("news-feed");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [messageInput, setMessageInput] = useState("");
  
  // Mock conversations from the original Messages component
  const conversations = [
    {
      id: 1,
      contact: {
        name: "Klippi QBR Assistant",
        company: "AI Assistant",
        avatar: null
      },
      messages: [
        {
          id: 101,
          sender: "me",
          content: "Hi Klippi, I just received the Q1 performance data for TechStart Inc. Could you analyze this Excel file and prepare a QBR deck for next week's meeting? Focus on user adoption metrics and feature usage trends.",
          timestamp: "2025-04-20T08:25:00",
          attachments: [
            {
              name: "TechStart_Q1_2025_Metrics.xlsx",
              type: "spreadsheet"
            }
          ]
        },
        {
          id: 102,
          sender: "them",
          content: "I'll analyze the Excel file and prepare a comprehensive QBR deck for TechStart Inc. Here's what I've found from the data:\n\n📈 Key Insights:\n- User adoption increased 27% QoQ\n- Feature engagement up 15% across core modules\n- API usage doubled since January\n\nI've prepared a draft QBR deck incorporating these insights. Would you like me to:\n1. Add benchmarks against similar customers?\n2. Include success stories from similar implementations?\n3. Generate talking points for areas of improvement?",
          timestamp: "2025-04-20T08:30:00"
        },
        {
          id: 103,
          sender: "me",
          content: "Yes, please add all three! Also, could you analyze our recent support tickets and customer feedback to identify any potential risks or areas we should proactively address during the QBR?",
          timestamp: "2025-04-20T08:35:00"
        },
        {
          id: 104,
          sender: "them",
          content: "I've updated the QBR deck and analyzed recent interactions. Here's what I found:\n\n🎯 Support Ticket Analysis:\n- 80% of tickets resolved within SLA\n- Common theme: Advanced reporting features requests\n- No critical issues reported\n\n💡 Proactive Discussion Points:\n1. Opportunity to upgrade to Enterprise plan\n2. Interest in beta testing new analytics module\n3. Potential for customer advisory board participation\n\nI've added these insights to the deck and included talking points. Would you like me to schedule a prep session to review the deck together?",
          timestamp: "2025-04-20T08:40:00"
        }
      ],
      unread: true,
      lastUpdated: "2025-04-20T08:40:00"
    },
    {
      id: 2,
      contact: {
        name: "Klippi Risk Monitor",
        company: "AI Assistant",
        avatar: null
      },
      messages: [
        {
          id: 201,
          sender: "them",
          content: "⚠️ Weekly Risk Report Summary:\n\nHigh Attention Needed:\n- DataFlow Inc: Decrease in product usage (-25% MoM)\n- TechCorp: Missed two scheduled check-ins\n\nPositive Signals:\n- Acme Corp: Increased feature adoption (+15%)\n- StartupXYZ: Positive sentiment in recent communications\n\nBased on email and call analysis, would you like me to draft engagement plans for the at-risk accounts?",
          timestamp: "2025-04-20T09:15:00"
        }
      ],
      unread: true,
      lastUpdated: "2025-04-20T09:15:00"
    },
    {
      id: 3,
      contact: {
        name: "Klippi Feedback Bot",
        company: "AI Assistant",
        avatar: null
      },
      messages: [
        {
          id: 301,
          sender: "them",
          content: "📊 Customer Feedback Update:\n\nI've collected new feedback from 5 clients this week:\n\nCSM Performance Rating: 4.8/5\nKey Highlights:\n- 'Exceptional proactive support'\n- 'Great strategic guidance'\n\nProduct Satisfaction: 4.5/5\nSuggested Areas for Focus:\n- Advanced reporting features\n- API documentation\n\nWould you like to see the detailed responses?",
          timestamp: "2025-04-20T10:00:00"
        }
      ],
      unread: false,
      lastUpdated: "2025-04-20T10:00:00"
    },
    {
      id: 4,
      contact: {
        name: "Klippi Productivity Report",
        company: "AI Assistant",
        avatar: null
      },
      messages: [
        {
          id: 401,
          sender: "them",
          content: "📈 Monthly Productivity Impact:\n\nTime Saved This Month:\n- 24.5 hours on email management\n- 12 hours on CRM updates\n- 8 hours on meeting preparation\n\nAutomation Metrics:\n- 145 CRM entries automated\n- 67 follow-up emails drafted\n- 28 meeting summaries generated\n\nEstimated Monthly Time Savings: 44.5 hours\nWould you like a detailed breakdown by task?",
          timestamp: "2025-04-20T11:30:00"
        }
      ],
      unread: false,
      lastUpdated: "2025-04-20T11:30:00"
    },
    {
      id: 5,
      contact: {
        name: "Klippi News Digest",
        company: "AI Assistant",
        avatar: null
      },
      messages: [
        {
          id: 501,
          sender: "them",
          content: "📰 Morning News Brief - Top Client Updates:\n\n1. Acme Corp: Announced new sustainability initiative, potential expansion opportunity\n2. TechStart Inc: Raised Series B funding ($50M)\n3. Global Systems: New CTO appointment\n4. DataFlow Inc: Released new API platform\n5. TechCorp: Featured in TechCrunch for innovation award\n\nWould you like me to prepare outreach messages for any of these updates?",
          timestamp: "2025-04-20T07:00:00"
        }
      ],
      unread: true,
      lastUpdated: "2025-04-20T07:00:00"
    }
  ];

  const selectedConversationData = conversations.find(c => c.id === selectedConversation);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      setMessageInput("");
    }
  };

  return (
    <div className="flex flex-col space-y-6">
      <Tabs 
        defaultValue="news-feed" 
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList className="grid w-full max-w-xl grid-cols-3 mb-2">
          <TabsTrigger value="news-feed" className="relative">
            News Feed
            <Badge className="absolute -top-2 -right-2 px-1.5 py-0.5 text-[10px]" variant="destructive">14</Badge>
          </TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="news-feed" className="space-y-4">
          <div className="flex flex-col xl:flex-row gap-4">
            <NewsFeed />
            <InsightsSidebar />
          </div>
        </TabsContent>
        
        <TabsContent value="insights" className="space-y-4">
          <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-semibold">Customer Insights</h2>
            <p className="text-muted-foreground">Detailed insights dashboard coming soon...</p>
          </div>
        </TabsContent>

        <TabsContent value="messages" className="space-y-4">
          <div className="flex flex-col md:flex-row h-[calc(100vh-200px)] gap-4">
            <MessageList
              conversations={conversations}
              selectedConversation={selectedConversation}
              setSelectedConversation={setSelectedConversation}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            
            <MessageContent
              selectedConversation={selectedConversationData}
              messageInput={messageInput}
              setMessageInput={setMessageInput}
              handleSendMessage={handleSendMessage}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
