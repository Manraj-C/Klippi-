import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, PlusCircle, Send, Paperclip, Calendar, AlertTriangle, MessageCircle, ChartBar, Newspaper } from "lucide-react";

const Messages = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [messageInput, setMessageInput] = useState("");
  
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

  const filteredConversations = conversations.filter(conversation => 
    conversation.contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conversation.contact.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedConversationData = conversations.find(c => c.id === selectedConversation);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      setMessageInput("");
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Messages</h1>
      
      <div className="flex flex-col md:flex-row h-[calc(100vh-200px)] gap-4">
        <Card className="w-full md:w-80 flex-shrink-0">
          <CardContent className="p-4 h-full flex flex-col">
            <div className="flex gap-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search messages..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="ghost" size="icon">
                <PlusCircle className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex-1 overflow-auto">
              {filteredConversations.map(conversation => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation.id)}
                  className={`flex items-start gap-3 p-3 cursor-pointer rounded-md transition hover:bg-muted/50 ${
                    selectedConversation === conversation.id ? 'bg-muted/50' : ''
                  }`}
                >
                  <div className="relative">
                    <div className="rounded-full h-10 w-10 bg-primary/10 flex items-center justify-center text-primary">
                      {conversation.contact.name.charAt(0)}
                    </div>
                    {conversation.unread && (
                      <span className="absolute -right-1 -top-1 w-3 h-3 bg-primary rounded-full" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <p className="font-medium truncate">{conversation.contact.name}</p>
                      <p className="text-xs text-muted-foreground whitespace-nowrap">
                        {formatTimestamp(conversation.lastUpdated)}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {conversation.messages[conversation.messages.length - 1].content}
                    </p>
                    <p className="text-xs text-muted-foreground">{conversation.contact.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="flex-1">
          {selectedConversationData ? (
            <CardContent className="p-0 h-full flex flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="rounded-full h-8 w-8 bg-primary/10 flex items-center justify-center text-primary">
                    {selectedConversationData.contact.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{selectedConversationData.contact.name}</p>
                    <p className="text-xs text-muted-foreground">{selectedConversationData.contact.company}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">View Profile</Button>
                </div>
              </div>
              
              <div className="flex-1 overflow-auto p-4 space-y-4">
                {selectedConversationData.messages.map(message => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        message.sender === 'me'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'me'
                          ? 'text-primary-foreground/70'
                          : 'text-muted-foreground'
                      }`}>
                        {formatTimestamp(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Input
                    placeholder="Type a message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                  />
                  <Button size="icon" onClick={handleSendMessage}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          ) : (
            <CardContent className="h-full flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-muted-foreground">Select a conversation to start messaging</p>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Messages;
