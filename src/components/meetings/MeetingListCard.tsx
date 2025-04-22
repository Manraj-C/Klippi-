
import React from "react";
import { Button } from "@/components/ui/button";

interface MeetingListCardProps {
  meeting: any;
  onView: (mtg: any) => void;
}

export const MeetingListCard: React.FC<MeetingListCardProps> = ({ meeting, onView }) => (
  <div className="flex items-center bg-white glass-morphism rounded-lg p-4 md:p-6 mb-3 border hover:shadow transition group">
    <div className="rounded-full h-12 w-12 flex items-center justify-center text-lg font-semibold bg-primary/10 text-primary mr-4">
      {meeting.client.charAt(0)}
    </div>
    <div className="flex-1">
      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
        <div>
          <h3 className="font-semibold text-lg">{meeting.title}</h3>
          <span className="text-xs text-muted-foreground">
            {meeting.client} &middot; {meeting.type}
          </span>
        </div>
        <div className="flex gap-3 mt-1 md:mt-0 text-xs text-muted-foreground">
          <span>{new Date(meeting.date).toLocaleDateString()} {new Date(meeting.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          <span>{meeting.duration} min</span>
        </div>
      </div>
    </div>
    <Button variant="outline" className="ml-4" onClick={() => onView(meeting)}>
      View Details
    </Button>
  </div>
);
