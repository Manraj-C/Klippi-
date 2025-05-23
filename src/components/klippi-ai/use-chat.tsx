
import { useState } from "react";
import { ChatSession } from "./types";
import { Message } from "./chat-message";

export const useChat = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [activeChatId, setActiveChatId] = useState<string | null>("default");
  const [isLoading, setIsLoading] = useState(false);
  const [showExamples, setShowExamples] = useState(true);
  
  // Enhanced sample data with tags for demonstration
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([
    {
      id: "default",
      title: "Getting Started with Klippi AI",
      timestamp: new Date(),
      preview: "Welcome to Klippi AI",
      tags: ["onboarding"],
      messages: [
        {
          id: "welcome",
          role: "system",
          content: "Welcome to Klippi AI. This system is designed to help you analyze customer data, track relationship health, and automate your customer success workflows.",
          timestamp: new Date(Date.now() - 60000)
        },
        {
          id: "welcome2",
          role: "assistant",
          content: "👋 Hello! I'm Klippi, your Customer Success assistant. I can help with customer analysis, meeting insights, and tracking performance metrics. How can I help you today?",
          timestamp: new Date()
        }
      ]
    },
    {
      id: "churn-analysis",
      title: "Q2 Churn Risk Report",
      timestamp: new Date(Date.now() - 86400000),
      preview: "Analysis of SMB clients at risk",
      tags: ["analysis", "churn"],
      messages: [
        {
          id: "welcome-churn",
          role: "assistant",
          content: "How can I help you with churn analysis today?",
          timestamp: new Date(Date.now() - 86400000)
        }
      ]
    },
    {
      id: "team-performance",
      title: "CSM Performance Review",
      timestamp: new Date(Date.now() - 172800000),
      preview: "Performance against upsell targets",
      tags: ["team", "metrics"],
      messages: [
        {
          id: "welcome-perf",
          role: "assistant",
          content: "What metrics would you like to analyze for the CSM team?",
          timestamp: new Date(Date.now() - 172800000)
        }
      ]
    },
    {
      id: "q3-strategy",
      title: "Q3 CS Strategy Planning",
      timestamp: new Date(Date.now() - 130000000),
      preview: "Planning next quarter's strategy",
      tags: ["strategy", "planning"],
      messages: [
        {
          id: "welcome-strategy",
          role: "assistant",
          content: "I'm here to help you plan your Q3 customer success strategy. What would you like to focus on?",
          timestamp: new Date(Date.now() - 130000000)
        },
        {
          id: "strategy-request",
          role: "user",
          content: "Let's plan our Q3 customer success strategy. First, show me churn numbers and analysis from previous quarters so we can identify key issues.",
          timestamp: new Date(Date.now() - 129000000)
        },
        {
          id: "strategy-response-1",
          role: "assistant",
          content: "## Churn Analysis: Previous Quarters\n\n### Q1 & Q2 2024 Overview\n\n| Segment | Q1 2024 Churn | Q2 2024 Churn | YoY Change |\n|---------|--------------|--------------|------------|\n| Enterprise | 2.1% | 1.8% | -0.5% |\n| Mid-Market | 3.7% | 4.2% | +0.8% |\n| SMB | 8.4% | 9.6% | +2.1% |\n| Overall | 5.2% | 5.7% | +1.1% |\n\n### Key Findings\n\n1. **SMB Segment Concerns**:\n   - Significant upward trend in churn rate (9.6% in Q2)\n   - 43% of churned SMBs cited \"lack of feature adoption\" as primary reason\n   - 31% mentioned \"unclear ROI\" in exit surveys\n\n2. **Mid-Market Warning Signs**:\n   - Slight increase quarter-over-quarter (3.7% → 4.2%)\n   - Low engagement scores in the 60-90 day period post-onboarding\n   - 55% of churned accounts had minimal CSM touchpoints\n\n3. **Positive Enterprise Trends**:\n   - Continued improvement in retention\n   - Higher product utilization scores\n   - Strong QBR attendance and engagement\n\n### Engagement Analysis\n\n- **High correlation** between customer engagement frequency and retention\n- Accounts with <1 meaningful touch per month have **3.2x higher churn risk**\n- On-site visits strongly correlated with expansion opportunities (76% of upsells followed visits)\n\nWould you like me to propose strategic initiatives based on these findings?",
          timestamp: new Date(Date.now() - 128000000)
        },
        {
          id: "strategy-request-2",
          role: "user",
          content: "Yes, please suggest strategic initiatives we could implement to address these issues, particularly for the SMB and Mid-Market segments.",
          timestamp: new Date(Date.now() - 127000000)
        },
        {
          id: "strategy-response-2",
          role: "assistant",
          content: "## Strategic Initiatives for Q3\n\n### For SMB Segment (Priority: High)\n\n1. **Feature Adoption Program**\n   - Create segment-specific adoption playbooks for key features\n   - Launch automated \"Feature of the Week\" campaign\n   - Develop quick-win custom reports showing ROI of specific features\n   - Consider: Gamified adoption challenges with incentives\n\n2. **ROI Visibility Framework**\n   - Deploy automated monthly business value reports\n   - Revamp QBR templates to highlight quantified value\n   - Create industry benchmarking data to contextualize success\n\n3. **Revised Engagement Model**\n   - Introduce digital-led \"high-touch\" approach with more frequent, shorter interactions\n   - Standardize proactive health scoring with automated interventions\n\n### For Mid-Market Segment (Priority: Medium)\n\n1. **Enhanced Onboarding Experience**\n   - Extend formal onboarding period from 30 to 90 days\n   - Implement mandatory 30/60/90 day check-ins\n   - Create role-based onboarding paths for different stakeholders\n\n2. **Engagement Cadence Optimization**\n   - Establish minimum monthly touchpoint requirement\n   - Implement quarterly on-site strategy sessions\n   - Create executive sponsor program with VP-level alignment\n\n3. **Cross-Sell Opportunity Framework**\n   - Develop targeted cross-sell playbooks based on usage patterns\n   - Train CSMs on consultative selling approach\n   - Create success metrics for CSM-driven revenue generation\n\n### Implementation Considerations\n\n- **Resources Required**: 2 FTEs for program development, CSM time allocation\n- **Timeline**: Full implementation by mid-Q3\n- **Success Metrics**: Reduce SMB churn by 2%, Mid-Market by 1%, increase cross-sell by 15%\n\nWhich of these initiatives would you like to prioritize for Q3?",
          timestamp: new Date(Date.now() - 126000000)
        },
        {
          id: "strategy-request-3",
          role: "user",
          content: "These look good. I want to implement the following: 1) Engagement cadence - ensuring each CSM engages with every client once a month and visits MM/ENT clients every 90 days, 2) Push each CSM to drive cross-sell activity for specific products. Can you put together an implementation plan for these initiatives?",
          timestamp: new Date(Date.now() - 125000000)
        },
        {
          id: "strategy-response-3",
          role: "assistant",
          content: "## Implementation Plan: Q3 Strategic Initiatives\n\n### Initiative 1: Enhanced Engagement Cadence\n\n**Week 1-2: Preparation Phase**\n- ✅ Create engagement guidelines document with minimum touchpoint requirements\n- ✅ Develop tracking mechanism in CRM for touchpoints and on-site visits\n- ✅ Build automated monthly compliance reports for leadership visibility\n\n**Week 3: Communication & Training**\n- ✅ All-hands training session for CSM team (90 minutes)\n- ✅ One-on-one sessions with each CSM lead to review account allocation\n- ✅ Share templates for different types of engagements (check-ins, QBRs, etc.)\n\n**Week 4-6: Progressive Implementation**\n- ✅ Monitor initial compliance with simple engagement requirements\n- ✅ Schedule all required Q3 on-site visits for MM/ENT clients\n- ✅ Begin weekly team reviews of engagement quality and outcomes\n\n**Week 7+: Full Operation & Optimization**\n- ✅ Implement customer feedback mechanism to measure impact\n- ✅ Weekly reviews of engagement compliance and quality\n- ✅ Monthly executive reporting on engagement metrics and outcomes\n\n### Initiative 2: CSM-Driven Cross-Sell Program\n\n**Week 1-2: Product & Training Prep**\n- ✅ Identify 3-5 priority products for cross-sell focus\n- ✅ Develop product-specific value propositions and battlecards\n- ✅ Create ideal customer profiles for each cross-sell opportunity\n\n**Week 3-4: Enablement & Incentives**\n- ✅ Conduct product training sessions for CS team (2 hours per product)\n- ✅ Role-play exercises for common cross-sell scenarios\n- ✅ Launch incentive program for CSM-influenced cross-sells\n- ✅ Establish tracking mechanism for cross-sell opportunities\n\n**Week 5-6: Account Targeting**\n- ✅ Generate account-specific cross-sell recommendations for each CSM\n- ✅ Each CSM to identify top 10 cross-sell targets in their portfolio\n- ✅ Develop customized approach plans for priority accounts\n\n**Week 7+: Execution & Pipeline Building**\n- ✅ Weekly pipeline reviews with CS and Sales leadership\n- ✅ Bi-weekly CS team knowledge-sharing sessions on wins/challenges\n- ✅ Monthly executive reporting on revenue impact\n\n### Resource Requirements\n\n**People:**\n- CSM team time allocation: 15-20% of weekly capacity\n- CS Ops support: 1 person at 50% capacity for 6 weeks\n- Product specialist support: 10 hours per week for training\n\n**Technology:**\n- CRM dashboard customization\n- Meeting scheduling and tracking tool\n- Cross-sell opportunity tracker\n\n### Success Metrics\n\n**Engagement Initiative:**\n- 95% compliance with monthly touchpoint requirement\n- 100% of MM/ENT clients receive on-site visit within 90 days\n- 15% improvement in overall CSAT scores by end of Q3\n\n**Cross-Sell Initiative:**\n- $500K in CSM-influenced pipeline by end of Q3\n- $150K in closed cross-sell revenue\n- 65% of CSMs successfully closing at least one cross-sell deal\n\n### Timeline\n\nI've scheduled the kickoff meeting for next Monday at 10 AM with the CS leadership team. Would you like me to send calendar invites to the team and share the implementation documents?",
          timestamp: new Date(Date.now() - 124000000)
        }
      ]
    }
  ]);

  // Find the active chat
  const activeChat = chatSessions.find(session => session.id === activeChatId) || chatSessions[0];

  const handleSendMessage = (content: string) => {
    if (!activeChatId) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date()
    };

    // Generate a smart title for new conversations
    let updatedTitle = activeChat.title;
    if (activeChat.messages.length <= 1) {
      updatedTitle = content.length > 30 
        ? content.substring(0, 30) + "..." 
        : content;
    }

    // Update chat sessions
    setChatSessions(prev => 
      prev.map(session => 
        session.id === activeChatId
          ? {
              ...session,
              title: updatedTitle,
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
        
        "Let's plan our Q3 customer success strategy": "## Churn Analysis: Previous Quarters\n\n### Q1 & Q2 2024 Overview\n\n| Segment | Q1 2024 Churn | Q2 2024 Churn | YoY Change |\n|---------|--------------|--------------|------------|\n| Enterprise | 2.1% | 1.8% | -0.5% |\n| Mid-Market | 3.7% | 4.2% | +0.8% |\n| SMB | 8.4% | 9.6% | +2.1% |\n| Overall | 5.2% | 5.7% | +1.1% |\n\n### Key Findings\n\n1. **SMB Segment Concerns**:\n   - Significant upward trend in churn rate (9.6% in Q2)\n   - 43% of churned SMBs cited \"lack of feature adoption\" as primary reason\n   - 31% mentioned \"unclear ROI\" in exit surveys\n\n2. **Mid-Market Warning Signs**:\n   - Slight increase quarter-over-quarter (3.7% → 4.2%)\n   - Low engagement scores in the 60-90 day period post-onboarding\n   - 55% of churned accounts had minimal CSM touchpoints\n\n3. **Positive Enterprise Trends**:\n   - Continued improvement in retention\n   - Higher product utilization scores\n   - Strong QBR attendance and engagement\n\n### Engagement Analysis\n\n- **High correlation** between customer engagement frequency and retention\n- Accounts with <1 meaningful touch per month have **3.2x higher churn risk**\n- On-site visits strongly correlated with expansion opportunities (76% of upsells followed visits)\n\nWould you like me to propose strategic initiatives based on these findings?",
        
        "Yes, please suggest strategic initiatives": "## Strategic Initiatives for Q3\n\n### For SMB Segment (Priority: High)\n\n1. **Feature Adoption Program**\n   - Create segment-specific adoption playbooks for key features\n   - Launch automated \"Feature of the Week\" campaign\n   - Develop quick-win custom reports showing ROI of specific features\n   - Consider: Gamified adoption challenges with incentives\n\n2. **ROI Visibility Framework**\n   - Deploy automated monthly business value reports\n   - Revamp QBR templates to highlight quantified value\n   - Create industry benchmarking data to contextualize success\n\n3. **Revised Engagement Model**\n   - Introduce digital-led \"high-touch\" approach with more frequent, shorter interactions\n   - Standardize proactive health scoring with automated interventions\n\n### For Mid-Market Segment (Priority: Medium)\n\n1. **Enhanced Onboarding Experience**\n   - Extend formal onboarding period from 30 to 90 days\n   - Implement mandatory 30/60/90 day check-ins\n   - Create role-based onboarding paths for different stakeholders\n\n2. **Engagement Cadence Optimization**\n   - Establish minimum monthly touchpoint requirement\n   - Implement quarterly on-site strategy sessions\n   - Create executive sponsor program with VP-level alignment\n\n3. **Cross-Sell Opportunity Framework**\n   - Develop targeted cross-sell playbooks based on usage patterns\n   - Train CSMs on consultative selling approach\n   - Create success metrics for CSM-driven revenue generation\n\n### Implementation Considerations\n\n- **Resources Required**: 2 FTEs for program development, CSM time allocation\n- **Timeline**: Full implementation by mid-Q3\n- **Success Metrics**: Reduce SMB churn by 2%, Mid-Market by 1%, increase cross-sell by 15%\n\nWhich of these initiatives would you like to prioritize for Q3?",
        
        "These look good. I want to implement": "## Implementation Plan: Q3 Strategic Initiatives\n\n### Initiative 1: Enhanced Engagement Cadence\n\n**Week 1-2: Preparation Phase**\n- ✅ Create engagement guidelines document with minimum touchpoint requirements\n- ✅ Develop tracking mechanism in CRM for touchpoints and on-site visits\n- ✅ Build automated monthly compliance reports for leadership visibility\n\n**Week 3: Communication & Training**\n- ✅ All-hands training session for CSM team (90 minutes)\n- ✅ One-on-one sessions with each CSM lead to review account allocation\n- ✅ Share templates for different types of engagements (check-ins, QBRs, etc.)\n\n**Week 4-6: Progressive Implementation**\n- ✅ Monitor initial compliance with simple engagement requirements\n- ✅ Schedule all required Q3 on-site visits for MM/ENT clients\n- ✅ Begin weekly team reviews of engagement quality and outcomes\n\n**Week 7+: Full Operation & Optimization**\n- ✅ Implement customer feedback mechanism to measure impact\n- ✅ Weekly reviews of engagement compliance and quality\n- ✅ Monthly executive reporting on engagement metrics and outcomes\n\n### Initiative 2: CSM-Driven Cross-Sell Program\n\n**Week 1-2: Product & Training Prep**\n- ✅ Identify 3-5 priority products for cross-sell focus\n- ✅ Develop product-specific value propositions and battlecards\n- ✅ Create ideal customer profiles for each cross-sell opportunity\n\n**Week 3-4: Enablement & Incentives**\n- ✅ Conduct product training sessions for CS team (2 hours per product)\n- ✅ Role-play exercises for common cross-sell scenarios\n- ✅ Launch incentive program for CSM-influenced cross-sells\n- ✅ Establish tracking mechanism for cross-sell opportunities\n\n**Week 5-6: Account Targeting**\n- ✅ Generate account-specific cross-sell recommendations for each CSM\n- ✅ Each CSM to identify top 10 cross-sell targets in their portfolio\n- ✅ Develop customized approach plans for priority accounts\n\n**Week 7+: Execution & Pipeline Building**\n- ✅ Weekly pipeline reviews with CS and Sales leadership\n- ✅ Bi-weekly CS team knowledge-sharing sessions on wins/challenges\n- ✅ Monthly executive reporting on revenue impact\n\n### Resource Requirements\n\n**People:**\n- CSM team time allocation: 15-20% of weekly capacity\n- CS Ops support: 1 person at 50% capacity for 6 weeks\n- Product specialist support: 10 hours per week for training\n\n**Technology:**\n- CRM dashboard customization\n- Meeting scheduling and tracking tool\n- Cross-sell opportunity tracker\n\n### Success Metrics\n\n**Engagement Initiative:**\n- 95% compliance with monthly touchpoint requirement\n- 100% of MM/ENT clients receive on-site visit within 90 days\n- 15% improvement in overall CSAT scores by end of Q3\n\n**Cross-Sell Initiative:**\n- $500K in CSM-influenced pipeline by end of Q3\n- $150K in closed cross-sell revenue\n- 65% of CSMs successfully closing at least one cross-sell deal\n\n### Timeline\n\nI've scheduled the kickoff meeting for next Monday at 10 AM with the CS leadership team. Would you like me to send calendar invites to the team and share the implementation documents?",
        
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
        } else if (userMessage.includes("Let's plan our Q3 customer success strategy")) {
          return responseExamples["Let's plan our Q3 customer success strategy"];
        } else if (userMessage.includes("Yes, please suggest strategic initiatives")) {
          return responseExamples["Yes, please suggest strategic initiatives"];
        } else if (userMessage.includes("These look good. I want to implement")) {
          return responseExamples["These look good. I want to implement"];
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

      // Generate tags based on content for new chats
      let updatedTags = activeChat.tags || [];
      if (activeChat.messages.length <= 2) {
        const content = userMessage.toLowerCase();
        if (content.includes("churn")) updatedTags.push("churn");
        if (content.includes("performance") || content.includes("metric")) updatedTags.push("metrics");
        if (content.includes("analysis") || content.includes("report")) updatedTags.push("analysis");
        if (content.includes("team") || content.includes("csm")) updatedTags.push("team");
        if (content.includes("integration")) updatedTags.push("integrations");
        if (content.includes("strategy") || content.includes("plan")) updatedTags.push("strategy");
        
        // Remove duplicates
        updatedTags = Array.from(new Set(updatedTags));
      }

      // Update chat sessions with AI response
      setChatSessions(prev => 
        prev.map(session => 
          session.id === activeChatId
            ? {
                ...session,
                tags: updatedTags,
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

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return {
    showSidebar,
    setShowSidebar,
    activeChatId,
    setActiveChatId,
    isLoading,
    showExamples,
    chatSessions,
    activeChat,
    handleSendMessage,
    simulateResponse,
    handleNewChat,
    toggleSidebar
  };
};
