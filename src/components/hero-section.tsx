
import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, MessageSquare, PieChart, Bot, Calendar, Mail, Zap, Check, X } from "lucide-react"

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 2;
  
  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };

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
          {/* Carousel Container */}
          <div className="relative h-[350px] md:h-[500px] rounded-2xl bg-gradient-to-br from-muted to-background overflow-hidden">
            {/* Dashboard Mock */}
            <div 
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${activeSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
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
            
            {/* Gmail Integration Mock */}
            <div 
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${activeSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              {/* Gmail-like interface with AI assistant */}
              <div className="w-full max-w-4xl h-[300px] md:h-[400px] glass-card rounded-xl border border-white/5 shadow-lg overflow-hidden">
                {/* Gmail header */}
                <div className="flex items-center justify-between px-4 py-2 bg-background/80 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="font-medium text-white">Gmail</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs text-primary font-bold">K</span>
                    </div>
                    <Badge variant="outline" className="text-xs bg-green-500/20 text-green-400">Active</Badge>
                  </div>
                </div>
                
                {/* Email Content */}
                <div className="p-4 flex flex-col h-[calc(100%-44px)]">
                  {/* Email Thread */}
                  <div className="glass-card rounded-lg p-3 mb-4">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <span className="text-xs text-blue-400">AC</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Anna Chen (Acme Corp)</p>
                          <p className="text-xs text-foreground/60">to me, 30 min ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-foreground/80 mt-2">
                      <p>Hi there,</p>
                      <p className="mt-2">We've been using the API integration for a few weeks now and have run into some issues with the data syncing. Sometimes there's a delay of up to 30 minutes. Is this expected behavior or something we should troubleshoot?</p>
                      <p className="mt-2">Also, we'd love to discuss upgrading to the enterprise plan. When would you be available for a quick call?</p>
                      <p className="mt-2">Best,<br />Anna</p>
                    </div>
                  </div>
                  
                  {/* AI Assistant Interface */}
                  <div className="glass-card rounded-lg bg-primary/5 border border-primary/20 p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Klip Assistant</span>
                      <Badge variant="outline" className="ml-auto text-xs">Suggested Response</Badge>
                    </div>
                    
                    <div className="text-sm text-foreground/80 bg-background/50 rounded-md p-3 mb-2">
                      <p>Hi Anna,</p>
                      <p className="mt-1">Thank you for reaching out. Regarding the API sync delays - this isn't expected behavior. The typical sync time should be under 5 minutes. I'll create a support ticket to investigate this right away.</p>
                      <p className="mt-1">I'd be happy to discuss the enterprise upgrade options. How about this Thursday at 2pm or Friday at 11am? Let me know what works best for you.</p>
                      <p className="mt-1">Best regards,</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3 border-t border-white/10 pt-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-foreground/70">Issues identified:</span>
                        <Badge className="bg-yellow-500/20 text-yellow-400 text-xs">API Sync Delay</Badge>
                        <Badge className="bg-green-500/20 text-green-400 text-xs">Upgrade Opportunity</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="h-7 px-2">
                          <X className="w-3.5 h-3.5 mr-1" />
                          Dismiss
                        </Button>
                        <Button size="sm" className="bg-primary/80 hover:bg-primary h-7 px-2">
                          <Zap className="w-3.5 h-3.5 mr-1" />
                          Use Response
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Carousel Navigation Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {[...Array(totalSlides)].map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${activeSlide === idx ? 'bg-primary w-8' : 'bg-white/30'}`}
                  aria-label={`View slide ${idx + 1}`}
                />
              ))}
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
