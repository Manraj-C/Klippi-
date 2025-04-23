
import React from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search, Mail, FileText, TrendingUp, Lightbulb, MessageSquare, Tag, CheckCircle } from "lucide-react";

// MeetingAINotetakerProps now with transcript and meetingSummary props
interface MeetingAINotetakerProps {
  meetingTitle: string;
  client: string;
  aiTopicTrackers?: string[];
  aiFollowUps?: string[];
  aiSummary?: string;
  aiSentimentScore?: number; // 0-100
  csmActions?: string[];
  transcript?: string;
  meetingSummary?: string;
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
  ],
  transcript = "Speaker 1: Welcome everyone...\nSpeaker 2: Thank you! Let's get started...",
  meetingSummary = "This meeting focused on project updates, actions required, and next steps. Attendees were satisfied with discussions."
}) => {
  return (
    <section className="w-full mx-auto rounded-xl bg-white">
      <Tabs defaultValue="notes" className="w-full">
        <div className="border-b">
          <div className="flex items-center justify-between px-6 pt-5 pb-2">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold">{meetingTitle}</h2>
              <span className="text-sm text-muted-foreground">{client}</span>
            </div>
            <TabsList>
              <TabsTrigger value="notes">AI Notetaker</TabsTrigger>
              <TabsTrigger value="transcription">Transcript</TabsTrigger>
              <TabsTrigger value="summary">Meeting Summary</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
          </div>
        </div>
        <TabsContent value="notes" className="px-0 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Left panel with filters */}
            <div className="border-r p-4 flex flex-col gap-6">
              <div>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Smart Search..."
                    className="pl-8 bg-muted border-0"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium flex items-center gap-1.5">
                    <Tag className="h-4 w-4 text-primary" />
                    Topic Trackers
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {aiTopicTrackers.map((topic, idx) => (
                      <Badge
                        variant="outline"
                        className="text-xs font-normal bg-primary/5 hover:bg-primary/10 transition-colors"
                        key={idx}
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium flex items-center gap-1.5">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    Sentiment Analysis
                  </h3>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
                        style={{
                          backgroundColor: aiSentimentScore > 70 ? '#e2f7e9' : aiSentimentScore > 45 ? '#f2f6fd' : '#fee7e7',
                          color: aiSentimentScore > 70 ? '#16a34a' : aiSentimentScore > 45 ? '#4b7fd1' : '#ef4444'
                        }}
                      >
                        {aiSentimentScore}%
                      </div>
                      <span className="text-sm">
                        {aiSentimentScore > 70 ? "Positive" : aiSentimentScore > 45 ? "Neutral" : "Negative"}
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${aiSentimentScore}%`,
                          backgroundColor: aiSentimentScore > 70 ? '#16a34a' : aiSentimentScore > 45 ? '#4b7fd1' : '#ef4444'
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium flex items-center gap-1.5">
                    <Mail className="h-4 w-4 text-primary" />
                    AI Follow-ups
                  </h3>
                  <ul className="space-y-1.5">
                    {aiFollowUps.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Main content - AI Notetaker */}
            <div className="col-span-2 p-6">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold flex items-center gap-1.5">
                    <FileText className="h-5 w-5 text-primary" />
                    Instant Meeting Summary
                  </h3>
                  <p className="text-sm leading-relaxed">{aiSummary}</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold flex items-center gap-1.5">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Suggested CSM Actions
                  </h3>
                  <ul className="space-y-2">
                    {csmActions.map((action, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="mt-0.5">
                          <input type="checkbox" id={`action-${idx}`} className="rounded text-primary focus:ring-primary" />
                        </div>
                        <label htmlFor={`action-${idx}`} className="text-sm">{action}</label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 flex gap-3">
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <Mail className="h-4 w-4" />
                    Send to Client
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <FileText className="h-4 w-4" />
                    Export Notes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="transcription">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Transcript</h3>
            <pre className="text-muted-foreground text-sm bg-muted rounded p-4 whitespace-pre-wrap">{transcript}</pre>
          </div>
        </TabsContent>
        <TabsContent value="summary">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Meeting Summary</h3>
            <p className="text-muted-foreground text-sm">{meetingSummary}</p>
          </div>
        </TabsContent>
        <TabsContent value="analytics">
          <div className="p-6">
            <p className="text-muted-foreground text-sm">Meeting analytics and insights will appear here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default MeetingAINotetaker;
