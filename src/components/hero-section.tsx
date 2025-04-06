
import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, MessageSquare, PieChart, Bot, Calendar } from "lucide-react"

const HeroSection = () => {
  return (
    <div className="pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="glowing" className="mb-4 px-4 py-1">
            <Sparkles className="w-4 h-4 mr-1" /> Coming Soon
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Meet <span className="text-gradient">Klip</span>, Your AI CSM <br className="hidden md:block" /> Assistant
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mb-8">
            Empowering Customer Success Managers to streamline workflows, automate tasks, 
            and deliver exceptional client experiences with intelligent AI assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white h-12 px-8 text-base" asChild>
              <a href="#signup">
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 h-12 px-8 text-base">
              Learn More
            </Button>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-1 max-w-5xl mx-auto overflow-hidden">
          <div className="relative h-[350px] md:h-[500px] rounded-2xl bg-gradient-to-br from-muted to-background overflow-hidden">
            {/* Product Visualization Mock */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Dashboard-like interface */}
              <div className="w-full max-w-4xl p-4 md:p-8 h-[300px] md:h-[400px] glass-card rounded-xl border border-white/5 shadow-lg overflow-hidden relative">
                {/* Header with logo */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">K</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Klip Dashboard</h3>
                </div>
                
                {/* Main interface */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100%-40px)]">
                  {/* Chat section */}
                  <div className="col-span-1 md:col-span-2 h-full glass-card rounded-lg p-3 overflow-hidden">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                        <span className="text-sm font-medium">Client Communication</span>
                      </div>
                      <Badge variant="outline" className="text-xs">Active</Badge>
                    </div>
                    
                    <div className="space-y-3">
                      {/* Chat bubbles */}
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
                  
                  {/* Sidebar */}
                  <div className="col-span-1 space-y-4">
                    {/* Metrics card */}
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
                    
                    {/* Calendar */}
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
            
            {/* Glowing effect in background */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
