
import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { MeetingHeader } from "@/components/meetings/MeetingHeader";
import { MeetingsTabs } from "@/components/meetings/MeetingsTabs";
import { MeetingDetail } from "@/components/meetings/MeetingDetail";
import { meetings } from "@/data/meetings";
import { Meeting } from "@/types/meetings";

const Meetings = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);

  const filteredMeetings = meetings.filter(meeting =>
    meeting.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    meeting.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (meeting.category || meeting.type).toLowerCase().includes(searchQuery.toLowerCase())
  );

  const upcomingMeetings = filteredMeetings.filter(m => m.status === "upcoming");
  const pastMeetings = filteredMeetings.filter(m => m.status === "completed");

  return (
    <DashboardLayout>
      {!selectedMeeting ? (
        <div className="flex flex-col gap-6">
          <MeetingHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <MeetingsTabs
            upcomingMeetings={upcomingMeetings}
            pastMeetings={pastMeetings}
            onView={setSelectedMeeting}
          />
        </div>
      ) : (
        <MeetingDetail meeting={selectedMeeting} onBack={() => setSelectedMeeting(null)} />
      )}
    </DashboardLayout>
  );
};

export default Meetings;
