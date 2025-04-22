
import React from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search, List, Mail, FileText, TrendingUp, Lightbulb } from "lucide-react";

interface MeetingAINotetakerProps {
  meetingTitle: string;
  client: string;
  aiTopicTrackers?: string[];
  aiFollowUps?: string[];
  aiSummary?: string;
  aiSentimentScore?: number; // 0-100
  csmActions?: string[];
}

const MeetingAINotetaker: React.FC<MeetingAINotetakerProps> = ({
  meetingTitle,
  client,
  aiTopicTrackers = [
    "Growth Strategy",
    "Integration",
    "Timeline",
    "Resource Allocation"
  ],
  aiFollowUps = [
    "Send meeting notes to client",
    "Confirm next meeting time",
    "Share API documentation"
  ],
  aiSummary = "The team discussed the implementation timeline and resource allocation for the API integration. Next steps include sharing updated documentation and scheduling a follow-up call.",
  aiSentimentScore = 86,
  csmActions = [
    "Remind client of project milestones",
    "Suggest best practices for integration",
    "Send feedback request survey"
  ]
}) => {
  return (
    <section className="w-full max-w-4xl mx-auto mt-8 rounded-xl shadow-md bg-white border">
      <header className="border-b px-6 pt-5 pb-3 bg-muted rounded-t-xl">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-xl flex items-center gap-2 font-bold">
            <FileText className="text-primary" />
            <span>AI Notetaker: {meetingTitle}</span>
          </h2>
          <span className="text-sm text-muted-foreground">{client}</span>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white">
        {/* Left section: Smart Search, Topics, Follow-ups */}
        <div className="flex flex-col gap-5">

          {/* Smart Search */}
          <div>
            <label className="flex items-center gap-2 mb-2 text-xs font-medium">
              <Search className="w-4 h-4 text-primary" />
              Smart Search
            </label>
            <Input placeholder="Search notes, topics, people..." className="bg-muted" />
          </div>

          {/* Topic Trackers */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-medium">
              <List className="w-4 h-4 text-primary" />
              Topic Trackers
            </div>
            <div className="flex flex-wrap gap-2">
              {aiTopicTrackers.map((topic, idx) => (
                <Badge variant="outline" className="text-xs" key={idx}>{topic}</Badge>
              ))}
            </div>
          </div>

          {/* AI Automated Follow-ups */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-medium">
              <Mail className="w-4 h-4 text-primary" />
              AI Automated Follow-ups
            </div>
            <ul className="list-disc list-inside text-xs text-foreground/80 pl-2 space-y-0.5">
              {aiFollowUps.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right section: Summary, Sentiment, CSM Actions */}
        <div className="flex flex-col gap-5">

          {/* Instant Summary */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-medium">
              <FileText className="w-4 h-4 text-primary" />
              Instant Summary
            </div>
            <div className="bg-muted rounded-lg p-3 text-xs text-foreground/90">{aiSummary}</div>
          </div>

          {/* Sentiment Score */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-medium">
              <TrendingUp className="w-4 h-4 text-primary" />
              Sentiment Analysis
            </div>
            <div className="flex items-center gap-3">
              <div 
                className="relative w-12 h-12 rounded-full border-4 border-green-400 flex items-center justify-center text-lg font-bold text-green-600"
                title="AI-assessed Sentiment Score"
              >
                {aiSentimentScore}
                <span className="absolute text-[10px] font-semibold text-green-500 top-1/2 left-full ml-1 -translate-y-1/2">/100</span>
              </div>
              <span className="text-xs text-muted-foreground">
                {aiSentimentScore > 70 ? "Positive" : aiSentimentScore > 45 ? "Neutral" : "Negative"}
              </span>
            </div>
          </div>

          {/* Suggest CSM Actions */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-medium">
              <Lightbulb className="w-4 h-4 text-primary" />
              Suggested CSM Actions
            </div>
            <ul className="space-y-1">
              {csmActions.map((action, idx) => (
                <li key={idx} className="flex items-center text-xs">
                  <input type="checkbox" className="mr-2 accent-primary h-4 w-4" />
                  {action}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingAINotetaker;
