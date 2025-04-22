
import React from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, Play, Download } from "lucide-react";
import { MeetingCategoryTag } from "./MeetingCategoryTag";

interface MeetingTableProps {
  data: any[];
  onView: (meeting: any) => void;
}

export const MeetingTable: React.FC<MeetingTableProps> = ({ data, onView }) => (
  <div className="overflow-x-auto rounded-lg bg-background border">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Meeting</TableHead>
          <TableHead>Date &amp; Time</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Summary</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((meeting) => (
          <TableRow key={meeting.id}>
            <TableCell>
              <div className="font-medium">{meeting.title}</div>
              <div className="text-xs text-muted-foreground">{meeting.type}</div>
            </TableCell>
            <TableCell>
              {new Date(meeting.date).toLocaleDateString()}<br />
              <span className="text-xs">{new Date(meeting.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </TableCell>
            <TableCell>{meeting.client}</TableCell>
            <TableCell>
              <MeetingCategoryTag category={meeting.category || meeting.type} />
            </TableCell>
            <TableCell className="max-w-[200px] truncate text-xs">
              {meeting.summary || "-"}
            </TableCell>
            <TableCell className="text-right">
              <div className="flex items-center gap-1 justify-end">
                {meeting.recording_url && (
                  <Button variant="ghost" size="icon">
                    <Play className="h-4 w-4" />
                  </Button>
                )}
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1"
                  onClick={() => onView(meeting)}
                >
                  View <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);
