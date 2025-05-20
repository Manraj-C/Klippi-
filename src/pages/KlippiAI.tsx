
import React, { useState, useRef, useEffect } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { ChatMessage, Message } from "@/components/klippi-ai/chat-message";
import { ChatInput } from "@/components/klippi-ai/chat-input";
import { ChatSidebar } from "@/components/klippi-ai/chat-sidebar";
import { ExamplePrompts } from "@/components/klippi-ai/example-prompts";
import { PanelLeft, PanelLeftClose, Sparkles } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface ChatSession {
  id: string;
  title: string;
  timestamp: Date;
  preview: string;
  messages: Message[];
}

const KlippiAI = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [activeChatId, setActiveChatId] = useState<string | null>("default");
  const [isLoading, setIsLoading] = useState(false);
  const [showExamples, setShowExamples] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Sample data - will be replaced with real data when connected to backend
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([
    {
      id: "default",
      title: "First Conversation",
      timestamp: new Date(),
      preview: "Getting started with Klippi AI",
      messages: [
        {
          id: "welcome",
          role: "assistant",
          content: "👋 Hello! I'm Klippi, your Customer Success assistant. I can help with customer analysis, meeting insights, and tracking performance metrics. How can I help you today?",
          timestamp: new Date()
        }
      ]
    }
  ]);

  // Find the active chat
  const activeChat = chatSessions.find(session => session.id === activeChatId) || chatSessions[0];

  // Scroll to bottom of messages when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeChat?.messages]);

  const handleSendMessage = (content: string) => {
    if (!activeChatId) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date()
    };

    // Update chat sessions
    setChatSessions(prev => 
      prev.map(session => 
        session.id === activeChatId
          ? {
              ...session,
              preview: content,
              messages: [...session.messages, userMessage]
            }
          : session
      )
    );

    // Simulate AI response
    simulateResponse(content);
    
    // Hide examples after first message
    setShowExamples(false);
  };

  const simulateResponse = (userMessage: string) => {
    setIsLoading(true);
    
    // Simulate typing delay
    setTimeout(() => {
      const responseExamples = {
        "Run a comprehensive churn analysis": "## Churn Analysis for SMB Clients (Past 12 Months)\n\n### Key Findings:\n\n- **Overall Churn Rate:** 7.2% (up from 5.8% last year)\n- **Highest Churn Segment:** Manufacturing SMBs at 12.5%\n- **Lowest Churn Segment:** SaaS SMBs at 3.1%\n- **Average Time to Churn:** 8.2 months from signup\n\n### Primary Churn Drivers:\n1. Lack of onboarding completion (42% of churned accounts)\n2. Minimal feature adoption beyond core features (38%)\n3. Low engagement with CSM in months 2-3 (31%)\n\n### Recommended Actions:\n1. Implement automated onboarding checklist with follow-ups\n2. Create feature adoption playbook specifically for manufacturing clients\n3. Schedule mandatory check-ins at 30, 60, and 90-day marks\n4. Develop health score alert system for early warning\n\nWould you like me to prepare a more detailed action plan for any of these recommendations?",
        
        "Check that every CSM": "## Meeting Cadence Compliance Report\n\n### Overview:\n- **Total Enterprise Clients:** 24\n- **Total Mid-Market Clients:** 68\n\n### Compliance Status:\n✅ **Fully Compliant CSMs:** 6/8\n❌ **Non-Compliant CSMs:** 2/8\n\n### Detailed Findings:\n\n**Sarah Johnson (CSM):**\n- Missing monthly meetings with Acme Corp (ENT) for 2 consecutive months\n- Last meeting: March 12, 2024\n\n**David Chen (CSM):**\n- Missing monthly meetings with TechFlow Inc (MM) for 1 month\n- Missing monthly meetings with DataSys (MM) for 3 consecutive months\n- Last meeting with DataSys: February 3, 2024\n\n### Recommended Actions:\n1. Schedule immediate meetings with the flagged accounts\n2. Review David's account load and workload distribution\n3. Enable automated meeting cadence reminders for all CSMs\n\nWould you like me to draft email templates for reaching out to these accounts?",
        
        "Generate a report of all integration-related": "## Integration-Related Feedback Report\n\n### Summary Stats\n- **Total Feedback Items:** 86 mentions across all channels\n- **Sentiment:** 42% positive, 28% neutral, 30% negative\n- **Most Requested Integration:** Salesforce (37 mentions)\n\n### Key Themes\n\n**1. API Limitations (32 mentions)**\n- Rate limiting issues causing sync delays\n- Limited field mapping options\n- Inconsistent error handling\n\n**2. Missing Integrations (28 mentions)**\n- HubSpot Marketing Hub\n- Microsoft Teams\n- Slack advanced features\n\n**3. Setup Complexity (21 mentions)**\n- Integration setup requiring developer resources\n- Lack of clear documentation\n- No self-service options for basic integrations\n\n**4. Success Stories (15 mentions)**\n- Jira integration widely praised\n- Zapier connector saving significant manual work\n\n### Prioritized Recommendations for Product Team\n1. Improve Salesforce integration reliability (high impact/high mention)\n2. Develop self-service integration portal (high impact/medium mention)\n3. Add HubSpot Marketing Hub integration (medium impact/high mention)\n\nWould you like me to prepare specific quotes from customers to support these findings?",
        
        "Which of our high-risk": "## High-Risk Customers Without Recent QBRs\n\n### At-Risk Enterprise Customers (No QBR in Last 6 Months)\n1. **Acme Manufacturing**\n   - Risk Score: 78/100 (Severe)\n   - Last QBR: Q4 2023 (7 months ago)\n   - Key Issues: Low adoption, support tickets increased 32%\n\n2. **TechGlobal Inc.**\n   - Risk Score: 69/100 (High)\n   - Last QBR: Q3 2023 (10 months ago)\n   - Key Issues: Champion left company, declining login rates\n\n### At-Risk Mid-Market Customers (No QBR in Last 6 Months)\n1. **Bright Software Solutions**\n   - Risk Score: 72/100 (High)\n   - Last QBR: Q1 2023 (14 months ago) \n   - Key Issues: Contract renewal in 45 days, features misalignment\n\n2. **DataFlow Systems**\n   - Risk Score: 65/100 (High)\n   - Last QBR: Q4 2023 (7 months ago)\n   - Key Issues: Billing disputes, minimal expansion opportunity\n\n3. **Nexus Healthcare**\n   - Risk Score: 61/100 (High)\n   - Last QBR: Q3 2023 (10 months ago)\n   - Key Issues: Compliance concerns, stakeholder changes\n\n### Recommended Action\nI've drafted a QBR schedule prioritizing these accounts within the next 21 days. Would you like to review the proposed schedule?",
        
        "Give me a summary": "## Q2 CSM Upsell Performance Summary\n\n### Team Overview\n- **Total Upsell Target:** $1.25M\n- **Current Achievement:** $820K (65.6% to target)\n- **Projection by EOQ:** $1.12M (89.6% to target)\n\n### Individual Performance\n\n**Top Performers:**\n1. **Alex Rivera:** 112% of target ($190K/$170K)\n   - Key wins: Expanded Enterprise Acme Corp by $85K\n   - Strong product-led growth strategy\n\n2. **Sarah Johnson:** 97% of target ($145K/$150K)\n   - On track to exceed with pending Globex deal\n   - Excellent at identifying upsell opportunities in QBRs\n\n**At Risk:**\n1. **Michael Chen:** 42% of target ($63K/$150K)\n   - Struggling with value articulation\n   - Multiple deals pushed to Q3\n   - Recommendation: Sales methodology refresher training\n\n2. **Priya Singh:** 51% of target ($92K/$180K)\n   - Good opportunity identification but low close rate\n   - Recommendation: Joint calls with sales leadership\n\n### Common Success Patterns\n- Early identification of use cases (60+ days before proposal)\n- Executive sponsor engagement\n- Value assessment documentation\n\nWould you like me to prepare a team coaching plan to improve overall performance?",
        
        "default": "I've analyzed your request and am gathering the relevant data. Based on your question, I'll need to pull information from several sources including your CRM, meeting notes, and customer feedback systems.\n\nCould you provide any additional context or specific parameters to help narrow down the analysis? For example, a specific time frame, customer segment, or particular metrics you're most interested in?"
      };
      
      const getResponse = () => {
        // Check for specific keywords to match with example responses
        if (userMessage.includes("Run a comprehensive churn analysis")) {
          return responseExamples["Run a comprehensive churn analysis"];
        } else if (userMessage.includes("Check that every CSM")) {
          return responseExamples["Check that every CSM"];
        } else if (userMessage.includes("Generate a report of all integration-related")) {
          return responseExamples["Generate a report of all integration-related"];
        } else if (userMessage.includes("Which of our high-risk")) {
          return responseExamples["Which of our high-risk"];
        } else if (userMessage.includes("Give me a summary")) {
          return responseExamples["Give me a summary"];
        } else {
          return responseExamples["default"];
        }
      };

      // Create AI response
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getResponse(),
        timestamp: new Date()
      };

      // Update chat title based on first interaction
      let updatedTitle = activeChat.title;
      if (activeChat.messages.length <= 1) {
        // This is the first real interaction, generate a title from the user message
        updatedTitle = userMessage.length > 20 
          ? userMessage.substring(0, 20) + "..." 
          : userMessage;
      }

      // Update chat sessions with AI response
      setChatSessions(prev => 
        prev.map(session => 
          session.id === activeChatId
            ? {
                ...session,
                title: updatedTitle,
                messages: [...session.messages, aiMessage]
              }
            : session
        )
      );

      setIsLoading(false);
    }, 1500);
  };

  const handleNewChat = () => {
    const newChatId = Date.now().toString();
    setChatSessions(prev => [
      ...prev,
      {
        id: newChatId,
        title: "New Conversation",
        timestamp: new Date(),
        preview: "Start a new conversation",
        messages: [
          {
            id: "welcome",
            role: "assistant",
            content: "How can I help you today?",
            timestamp: new Date()
          }
        ]
      }
    ]);
    setActiveChatId(newChatId);
    setShowExamples(true);
  };

  const handlePromptSelect = (prompt: string) => {
    handleSendMessage(prompt);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-2rem)] flex flex-col">
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar - Desktop */}
          <div className={cn(
            "w-80 border-r border-border md:flex flex-col h-full transition-all duration-300 ease-in-out bg-background",
            showSidebar ? "flex" : "hidden"
          )}>
            <ChatSidebar 
              sessions={chatSessions} 
              activeChatId={activeChatId}
              onChatSelect={setActiveChatId}
              onNewChat={handleNewChat}
            />
          </div>

          {/* Sidebar - Mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden absolute left-4 top-4 z-10">
                <PanelLeft className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-80">
              <ChatSidebar 
                sessions={chatSessions} 
                activeChatId={activeChatId}
                onChatSelect={(id) => {
                  setActiveChatId(id);
                  document.querySelector('[data-radix-collection-item]')?.click(); // Close sheet
                }}
                onNewChat={() => {
                  handleNewChat();
                  document.querySelector('[data-radix-collection-item]')?.click(); // Close sheet
                }}
              />
            </SheetContent>
          </Sheet>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col h-full relative bg-muted/20">
            {/* Toggle Sidebar Button (Desktop) */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex absolute left-4 top-4 z-10"
              onClick={toggleSidebar}
            >
              {showSidebar ? <PanelLeftClose className="h-5 w-5" /> : <PanelLeft className="h-5 w-5" />}
            </Button>

            {/* Chat Messages */}
            <ScrollArea className="flex-1">
              <div className="py-4 md:py-6">
                {activeChat?.messages.map((message) => (
                  <ChatMessage 
                    key={message.id} 
                    message={message} 
                    onRetry={message.role === "assistant" ? () => simulateResponse(activeChat.messages[activeChat.messages.length - 2]?.content || "") : undefined}
                    onCopy={() => {}}
                  />
                ))}
                
                {/* Loading message */}
                {isLoading && (
                  <div className="py-8 px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                      <div className="flex items-center gap-3 bg-muted/30 rounded-lg p-4">
                        <Sparkles className="h-5 w-5 animate-pulse text-primary" />
                        <span>Klippi is thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Examples section */}
                {showExamples && activeChat?.messages.length <= 1 && (
                  <div className="py-8 px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                      <h2 className="text-lg font-medium mb-4">Try asking Klippi about:</h2>
                      <ExamplePrompts onPromptSelect={handlePromptSelect} />
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Chat Input */}
            <ChatInput 
              onSend={handleSendMessage} 
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default KlippiAI;
