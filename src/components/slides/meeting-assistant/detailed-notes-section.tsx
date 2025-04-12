
import React from "react"

const DetailedNotesSection = () => {
  return (
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
  )
}

export default DetailedNotesSection
