
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MeetingTable } from "./MeetingTable";
import { MeetingListCard } from "./MeetingListCard";
import { Meeting } from "@/types/meetings";

interface MeetingsTabsProps {
  upcomingMeetings: Meeting[];
  pastMeetings: Meeting[];
  onView: (meeting: Meeting) => void;
}

export const MeetingsTabs: React.FC<MeetingsTabsProps> = ({
  upcomingMeetings,
  pastMeetings,
  onView,
}) => {
  return (
    <Tabs defaultValue="upcoming" className="mt-2 w-full">
      <TabsList>
        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        <TabsTrigger value="past">Past Meetings</TabsTrigger>
      </TabsList>
      <TabsContent value="upcoming" className="mt-4">
        {upcomingMeetings.length > 0 ? (
          <div className="space-y-3">
            {upcomingMeetings.map(meeting => (
              <MeetingListCard key={meeting.id} meeting={meeting} onView={onView} />
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
          <MeetingTable data={pastMeetings} onView={onView} />
        ) : (
          <div className="text-center text-muted-foreground mt-10">
            No past meetings found.
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
};
