
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { MeetingSearchBar } from "./MeetingSearchBar";

interface MeetingHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const MeetingHeader: React.FC<MeetingHeaderProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mb-4">
        <h1 className="text-2xl font-bold">Meetings</h1>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Schedule Meeting
        </Button>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-3">
        <MeetingSearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>
    </>
  );
};
