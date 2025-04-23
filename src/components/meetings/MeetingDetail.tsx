
import React from "react";
import { Button } from "@/components/ui/button";
import MeetingAINotetaker from "./MeetingAINotetaker";
import { Meeting } from "@/types/meetings";

interface MeetingDetailProps {
  meeting: Meeting;
  onBack: () => void;
}

export const MeetingDetail: React.FC<MeetingDetailProps> = ({ meeting, onBack }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-5 mt-1">
        <Button
          variant="ghost"
          size="sm"
          className="gap-1"
          onClick={onBack}
        >
          ← Back
        </Button>
        <h2 className="text-xl font-bold truncate">{meeting.title}</h2>
      </div>
      <MeetingAINotetaker
        meetingTitle={meeting.title}
        client={meeting.client}
        aiSummary={meeting.summary || "The meeting was productive and action-oriented."}
        aiTopicTrackers={[
          "Customer Success", "Product Integration", "Timeline Planning", "Resource Allocation"
        ]}
        aiFollowUps={[
          "Send meeting notes to client",
          "Schedule technical follow-up",
          "Share integration documentation"
        ]}
        aiSentimentScore={86}
        csmActions={[
          "Create personalized onboarding plan",
          "Set up check-in cadence",
          "Document success metrics"
        ]}
      />
    </div>
  );
};
