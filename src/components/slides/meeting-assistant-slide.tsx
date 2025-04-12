
import React from "react"
import { Badge } from "@/components/ui/badge"
import KlippiHeader from "./meeting-assistant/klippi-header"
import MeetingPreparationPanel from "./meeting-assistant/meeting-preparation-panel"
import LiveMeetingNotesPanel from "./meeting-assistant/live-meeting-notes-panel"

interface MeetingAssistantSlideProps {
  active: boolean
}

const MeetingAssistantSlide: React.FC<MeetingAssistantSlideProps> = ({ active }) => {
  return (
    <div 
      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${active ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
    >
      <div className="w-full max-w-5xl p-4 md:p-6 h-[400px] md:h-[550px] glass-card rounded-xl border border-white/5 shadow-lg overflow-hidden">
        <KlippiHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100%-40px)]">
          <MeetingPreparationPanel />
          <LiveMeetingNotesPanel />
        </div>
      </div>
    </div>
  )
}

export default MeetingAssistantSlide
