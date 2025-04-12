
import React from "react"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink, Bot, Video } from "lucide-react"

const MeetingPreparationPanel = () => {
  return (
    <div className="col-span-1 h-full glass-card rounded-lg p-3 overflow-y-auto">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2 text-primary" />
          <span className="text-sm font-medium">Meeting Preparation</span>
        </div>
        <Badge variant="outline" className="text-xs">Today</Badge>
      </div>
      
      <div className="glass-card p-3 rounded-lg mb-3">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <span className="font-semibold text-sm">Project Kickoff: TechCorp</span>
          </div>
          <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 text-xs">2pm</Badge>
        </div>
        
        <div className="text-xs text-foreground/70 mb-3">
          <p className="mb-1">Participants: James Liu, Sarah Chen, Michael Wong</p>
          <p>Last meeting: 2 weeks ago (Implementation planning)</p>
        </div>
        
        <div className="space-y-2 mb-2">
          <div className="flex gap-2">
            <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Bot className="w-3 h-3 text-secondary" />
            </div>
            <div>
              <p className="text-xs text-foreground/80">I've prepared an agenda based on your previous conversations:</p>
            </div>
          </div>
          
          <div className="glass-card p-2 rounded-lg text-xs ml-7">
            <ol className="list-decimal ml-4 space-y-1">
              <li>Welcome and introductions (5 min)</li>
              <li>Review implementation timeline (10 min)</li>
              <li>Discuss integration requirements (15 min)</li>
              <li>Address open questions (10 min)</li>
              <li>Next steps and action items (5 min)</li>
            </ol>
          </div>
        </div>
        
        <div className="flex justify-between items-center text-xs mt-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <ExternalLink className="w-3 h-3 mr-1 text-blue-400" />
              <span className="text-blue-400">Open in Calendar</span>
            </div>
            <div className="flex items-center">
              <Video className="w-3 h-3 mr-1 text-green-400" />
              <span className="text-green-400">Join Meet</span>
            </div>
          </div>
          <Badge className="bg-primary/20 text-primary hover:bg-primary/30 text-xs">Edit Agenda</Badge>
        </div>
      </div>
      
      <div className="glass-card p-3 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <span className="font-semibold text-sm">QBR: GlobalTech Inc.</span>
          </div>
          <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 text-xs">Tomorrow</Badge>
        </div>
        
        <div className="text-xs text-foreground/70">
          <p>Klippi is analyzing this account's data to prepare for your meeting...</p>
        </div>
      </div>
    </div>
  )
}

export default MeetingPreparationPanel
