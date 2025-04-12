
import React from "react"
import { Badge } from "@/components/ui/badge"

const SummarySection = () => {
  return (
    <div className="glass-card p-2 rounded-lg">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-medium">Summary</span>
        <Badge variant="outline" className="text-xs">Auto-generated</Badge>
      </div>
      <p className="text-xs text-foreground/80">The team is discussing implementation timelines for the API integration. James mentioned they need to complete this phase by end of May. Sarah raised concerns about resource availability. Michael suggested bringing in additional developers from the platform team.</p>
    </div>
  )
}

export default SummarySection
