
import React from "react"
import { MessageSquare, PieChart, Calendar, Bot } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface DashboardSlideProps {
  active: boolean
}

const DashboardSlide: React.FC<DashboardSlideProps> = ({ active }) => {
  return (
    <div 
      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${active ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
    >
      <div className="w-full max-w-4xl p-4 md:p-8 h-[300px] md:h-[400px] glass-card rounded-xl border border-white/5 shadow-lg overflow-hidden">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-bold">K</span>
          </div>
          <h3 className="text-lg font-semibold text-white">Klippi Dashboard</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100%-40px)]">
          <div className="col-span-1 md:col-span-2 h-full glass-card rounded-lg p-3 overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm font-medium">Client Communication</span>
              </div>
              <Badge variant="outline" className="text-xs">Active</Badge>
            </div>
            
            <div className="space-y-3">
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3 h-3 text-secondary" />
                </div>
                <div className="glass-card p-2 rounded-lg text-xs max-w-[85%]">
                  <p className="text-foreground/80">I've analyzed the recent usage patterns for Acme Corp. Their API usage increased by 25% this month, suggesting product adoption is growing.</p>
                </div>
              </div>
              
              <div className="flex gap-2 justify-end">
                <div className="glass-card p-2 rounded-lg text-xs max-w-[85%] bg-primary/10">
                  <p className="text-foreground/90">Can you draft an email to their team highlighting this positive trend?</p>
                </div>
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs">CM</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3 h-3 text-secondary" />
                </div>
                <div className="glass-card p-2 rounded-lg text-xs max-w-[85%]">
                  <p className="text-foreground/80">Drafting email now. I'll highlight the 25% usage increase, note their successful implementation of the new features, and suggest a quick review call.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-1 space-y-4">
            <div className="glass-card rounded-lg p-3">
              <div className="flex items-center mb-2">
                <PieChart className="w-4 h-4 mr-2 text-primary" />
                <span className="text-xs font-medium">Client Health</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold text-gradient">87%</div>
                <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 text-xs">+5%</Badge>
              </div>
            </div>
            
            <div className="glass-card rounded-lg p-3">
              <div className="flex items-center mb-2">
                <Calendar className="w-4 h-4 mr-2 text-primary" />
                <span className="text-xs font-medium">Upcoming</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-foreground/70">QBR Meeting</span>
                  <span className="text-foreground/50">Today</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-foreground/70">Feature Demo</span>
                  <span className="text-foreground/50">Tomorrow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardSlide
