
import React from "react"
import { Badge } from "@/components/ui/badge"
import { Bot, Calendar, ClipboardList, CheckSquare, Clock, MessageSquare, ExternalLink, Video, Slack } from "lucide-react"

interface MeetingAssistantSlideProps {
  active: boolean
}

const MeetingAssistantSlide: React.FC<MeetingAssistantSlideProps> = ({ active }) => {
  return (
    <div 
      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${active ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
    >
      <div className="w-full max-w-5xl p-4 md:p-6 h-[400px] md:h-[550px] glass-card rounded-xl border border-white/5 shadow-lg overflow-hidden">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-bold">K</span>
          </div>
          <h3 className="text-lg font-semibold text-white">Klippi Meeting Assistant</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100%-40px)]">
          {/* Meeting Preparation Panel */}
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
          
          {/* Live Meeting Notes Panel */}
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
              <div className="glass-card p-2 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium">Summary</span>
                  <Badge variant="outline" className="text-xs">Auto-generated</Badge>
                </div>
                <p className="text-xs text-foreground/80">The team is discussing implementation timelines for the API integration. James mentioned they need to complete this phase by end of May. Sarah raised concerns about resource availability. Michael suggested bringing in additional developers from the platform team.</p>
              </div>
              
              <div className="glass-card p-2 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium">Action Items</span>
                  <Badge className="bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 text-xs">3 items</Badge>
                </div>
                
                <div className="space-y-2 mt-2">
                  <div className="flex items-center gap-2">
                    <CheckSquare className="w-3.5 h-3.5 text-yellow-400" />
                    <span className="text-xs">Share API documentation with TechCorp team</span>
                    <Badge className="ml-auto bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 text-xs">You</Badge>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <CheckSquare className="w-3.5 h-3.5 text-yellow-400" />
                    <span className="text-xs">Schedule follow-up with platform team about resources</span>
                    <Badge className="ml-auto bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 text-xs">Michael</Badge>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <CheckSquare className="w-3.5 h-3.5 text-yellow-400" />
                    <span className="text-xs">Create project timeline in shared workspace</span>
                    <Badge className="ml-auto bg-green-500/20 text-green-400 hover:bg-green-500/30 text-xs">Sarah</Badge>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-2 rounded-lg">
                <div className="flex items-center mb-1">
                  <span className="text-xs font-medium">Detailed Notes</span>
                </div>
                
                <div className="space-y-2 max-h-[140px] overflow-y-auto text-xs text-foreground/80 pr-1">
                  <p><span className="font-medium text-blue-400">17:05</span> - <span className="font-medium">James:</span> "We need to complete the API integration by end of May to align with our product roadmap."</p>
                  <p><span className="font-medium text-blue-400">17:08</span> - <span className="font-medium">Sarah:</span> "I'm concerned about our resource allocation. The dev team is already working on the mobile app updates."</p>
                  <p><span className="font-medium text-blue-400">17:12</span> - <span className="font-medium">Michael:</span> "We can bring in two additional developers from the platform team to help with the integration work."</p>
                  <p><span className="font-medium text-blue-400">17:15</span> - <span className="font-medium">You:</span> "That sounds like a good solution. I'll share our updated API documentation with your team by tomorrow."</p>
                  <p><span className="font-medium text-blue-400">17:17</span> - <span className="font-medium">James:</span> "Great, that will help us get started. Can we also set up a shared workspace for the project timeline?"</p>
                </div>
              </div>
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
        </div>
      </div>
    </div>
  )
}

export default MeetingAssistantSlide
