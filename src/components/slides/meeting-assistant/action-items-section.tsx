
import React from "react"
import { Badge } from "@/components/ui/badge"
import { CheckSquare } from "lucide-react"

const ActionItemsSection = () => {
  return (
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
  )
}

export default ActionItemsSection
