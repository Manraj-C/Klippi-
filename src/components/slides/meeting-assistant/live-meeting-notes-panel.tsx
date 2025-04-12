
import React from "react"
import { Badge } from "@/components/ui/badge"
import { ClipboardList, MessageSquare, ExternalLink, Clock, Slack } from "lucide-react"
import SummarySection from "./summary-section"
import ActionItemsSection from "./action-items-section"
import DetailedNotesSection from "./detailed-notes-section"

const LiveMeetingNotesPanel = () => {
  return (
    <div className="col-span-1 md:col-span-2 h-full glass-card rounded-lg p-3 overflow-y-auto">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <ClipboardList className="w-4 h-4 mr-2 text-primary" />
          <span className="text-sm font-medium">Live Meeting Notes</span>
        </div>
        <div className="flex gap-1">
          <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 text-xs">
            <span className="animate-pulse mr-1">●</span>Recording
          </Badge>
          <Badge variant="outline" className="text-xs">00:17:42</Badge>
        </div>
      </div>
      
      <div className="space-y-3 mb-4">
        <SummarySection />
        <ActionItemsSection />
        <DetailedNotesSection />
      </div>
      
      <div className="flex justify-between items-center bg-background/30 rounded-lg p-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs">Follow-ups scheduled</span>
          </div>
          <div className="flex items-center gap-1">
            <Slack className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs">Shared in Slack</span>
          </div>
        </div>
        
        <div className="flex gap-1">
          <MessageSquare className="w-4 h-4 text-primary cursor-pointer" />
          <ExternalLink className="w-4 h-4 text-primary cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default LiveMeetingNotesPanel
