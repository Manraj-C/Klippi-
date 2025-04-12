import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, MessageSquare, PieChart, Bot, Calendar, Mail, Zap, Check, X, Edit2, Database, CheckCircle, FileText, ExternalLink, Save } from "lucide-react"

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;
  
  // Auto-rotate carousel every 7 seconds (increased from 6 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 7000);
    
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
            Meet <span className="text-gradient">Klip</span>, Your AI Customer Success Manager <br className="hidden md:block" />
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mb-8">
            Empowering Customer Success Managers to streamline workflows, automate tasks, 
            and deliver exceptional client experiences with intelligent AI assistance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-10">
            <div className="glass-card p-6 rounded-xl border border-primary/20 text-left">
              <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">For Individual CSMs</Badge>
              <h3 className="text-xl font-semibold mb-2">Supercharge Your Performance</h3>
              <p className="text-sm text-foreground/70 mb-4">Get ahead in your role with AI assistance that helps you handle more accounts, deliver exceptional service, and stand out in your organization.</p>
              <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="glass-card p-6 rounded-xl border border-secondary/20 text-left">
              <Badge className="mb-3 bg-secondary/10 text-secondary hover:bg-secondary/20">For CS Teams</Badge>
              <h3 className="text-xl font-semibold mb-2">Elevate Your Entire Team</h3>
              <p className="text-sm text-foreground/70 mb-4">Scale your CS operations with a unified platform that standardizes workflows, provides actionable insights, and boosts efficiency across your entire department.</p>
              <Button variant="outline" size="sm" className="border-secondary/30 text-secondary hover:bg-secondary/10">
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
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
            <div 
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${activeSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <div className="w-full max-w-4xl p-4 md:p-8 h-[300px] md:h-[400px] glass-card rounded-xl border border-white/5 shadow-lg overflow-hidden relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">K</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Klip Dashboard</h3>
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
            
            <div 
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${activeSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <div className="w-full max-w-4xl h-[300px] md:h-[400px] glass-card rounded-xl border border-white/5 shadow-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-white/95 text-gray-800 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-gray-500" />
                      <span className="font-medium text-red-500 text-lg ml-1">Gmail</span>
                    </div>
                    <div className="bg-gray-100 rounded-md px-3 py-1 text-sm text-gray-600 hidden md:flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                      Search mail
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs text-primary font-bold">K</span>
                    </div>
                    <Badge variant="outline" className="text-xs bg-green-500/20 text-green-400">Klip Active</Badge>
                  </div>
                </div>
                
                <div className="p-4 flex flex-col h-[calc(100%-44px)] bg-white/90 text-gray-800">
                  <div className="glass-card rounded-lg p-3 mb-4 bg-white border border-gray-200 shadow-sm">
                    <div className="flex justify-between mb-2 items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500/80 flex items-center justify-center text-white">
                          <span className="text-xs">AC</span>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <p className="text-sm font-medium text-gray-900">Anna Chen (Acme Corp)</p>
                            <span className="mx-1 text-xs text-gray-500">&#60;anna@acmecorp.com&#62;</span>
                          </div>
                          <div className="flex items-center text-xs text-gray-500">
                            <span>to me</span>
                            <span className="mx-1">•</span>
                            <span>30 min ago</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 15 5.12 3.72L19 9"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      </div>
                    </div>
                    <div className="text-sm text-gray-700 mt-3 border-t border-gray-100 pt-3">
                      <p>Hi there,</p>
                      <p className="mt-2">We've been using the API integration for a few weeks now and have run into some issues with the data syncing. Sometimes there's a delay of up to 30 minutes. Is this expected behavior or something we should troubleshoot?</p>
                      <p className="mt-2">Also, we'd love to discuss upgrading to the enterprise plan. When would you be available for a quick call?</p>
                      <p className="mt-2">Best,<br />Anna</p>
                    </div>
                  </div>
                  
                  <div className="glass-card rounded-lg bg-primary/5 border border-primary/20 p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Klip Assistant</span>
                      <Badge variant="outline" className="ml-auto text-xs">Suggested Response</Badge>
                    </div>
                    
                    <div className="text-sm text-gray-700 bg-white rounded-md p-3 mb-2 border border-gray-200">
                      <p>Hi Anna,</p>
                      <p className="mt-1">Thank you for reaching out. Regarding the API sync delays - this isn't expected behavior. The typical sync time should be under 5 minutes. I'll create a support ticket to investigate this right away.</p>
                      <p className="mt-1">I'd be happy to discuss the enterprise upgrade options. How about this Thursday at 2pm or Friday at 11am? Let me know what works best for you.</p>
                      <p className="mt-1">Best regards,</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3 border-t border-white/10 pt-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-gray-600">Issues identified:</span>
                        <Badge className="bg-yellow-500/20 text-yellow-600 text-xs">API Sync Delay</Badge>
                        <Badge className="bg-green-500/20 text-green-600 text-xs">Upgrade Opportunity</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="h-7 px-2 border-gray-300 text-gray-500 hover:bg-gray-100">
                          <X className="w-3.5 h-3.5 mr-1" />
                          Dismiss
                        </Button>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 h-7 px-2 text-white">
                          <Zap className="w-3.5 h-3.5 mr-1" />
                          Use Response
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${activeSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <div className="w-full max-w-4xl h-[300px] md:h-[400px] glass-card rounded-xl border border-white/5 shadow-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-blue-600 text-white border-b border-blue-500">
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-white" />
                    <span className="font-medium text-white">Gainsight</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <span className="text-xs text-blue-600 font-bold">K</span>
                    </div>
                    <Badge variant="outline" className="text-xs bg-white/20 text-white border-white/40">Connected</Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 h-[calc(100%-44px)]">
                  <div className="p-4 border-r border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="w-4 h-4 text-blue-400" />
                      <h3 className="text-sm font-medium">TechCorp Customer Profile</h3>
                    </div>
                    
                    <div className="glass-card rounded-lg p-3 text-sm">
                      <div className="flex justify-between mb-3">
                        <div className="text-foreground/60 text-xs">Customer Since:</div>
                        <div className="text-xs font-medium">Apr 2024</div>
                      </div>
                      <div className="flex justify-between mb-3">
                        <div className="text-foreground/60 text-xs">Health Score:</div>
                        <div className="text-green-400 font-medium">85% (Healthy)</div>
                      </div>
                      <div className="flex justify-between mb-3">
                        <div className="text-foreground/60 text-xs">Renewal Date:</div>
                        <div className="text-xs font-medium">Jan 15, 2026</div>
                      </div>
                      <div className="flex justify-between mb-3">
                        <div className="text-foreground/60 text-xs">ARR:</div>
                        <div className="text-xs font-medium">$125,000</div>
                      </div>
                      
                      <div className="mt-3 pt-2 border-t border-white/10">
                        <div className="flex items-center">
                          <Bot className="w-4 h-4 text-blue-400 mr-2" />
                          <span className="text-xs text-blue-400">AI Insights:</span>
                        </div>
                        <p className="mt-1.5 text-xs text-foreground/80">This account has been consistently expanding usage. Consider discussing enterprise features during next QBR.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white/5">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center">
                        <Edit2 className="w-4 h-4 text-blue-400 mr-2" />
                        <h3 className="text-sm font-medium">Update Customer Profile</h3>
                      </div>
                      <Button size="sm" className="h-7 px-3 bg-blue-600 hover:bg-blue-700 text-white">
                        <Save className="w-3.5 h-3.5 mr-1.5" />
                        Save Changes
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="glass-card rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <span className="text-xs font-medium text-blue-400">Technology Stack</span>
                          </div>
                          <Badge className="text-xs bg-blue-500/20 text-blue-400">Editable</Badge>
                        </div>
                        
                        <div className="mt-1 p-2 rounded-md text-sm flex flex-wrap gap-1.5 bg-white/5 border border-white/10">
                          <Badge className="bg-white/10 text-foreground border border-white/20 hover:bg-white/20">Internal Analytics</Badge>
                          <Badge className="bg-white/10 text-foreground border border-white/20 hover:bg-white/20">Power BI</Badge>
                          <Badge className="bg-white/10 text-foreground border border-white/20 hover:bg-white/20">Tableau</Badge>
                          <Badge className="bg-blue-500/20 text-blue-400 border border-blue-400/30 hover:bg-blue-500/30">+ Add</Badge>
                        </div>
                      </div>
                      
                      <div className="glass-card rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-blue-400">Integration Interests</span>
                          <Badge className="text-xs bg-blue-500/20 text-blue-400">Editable</Badge>
                        </div>
                        <div className="mt-1 p-2 rounded-md flex flex-wrap gap-1.5 bg-white/5 border border-white/10">
                          <Badge className="bg-white/10 text-foreground border border-white/20 hover:bg-white/20">API</Badge>
                          <Badge className="bg-white/10 text-foreground border border-white/20 hover:bg-white/20">Webhooks</Badge>
                          <Badge className="bg-white/10 text-foreground border border-white/20 hover:bg-white/20">Zapier</Badge>
                          <Badge className="bg-blue-500/20 text-blue-400 border border-blue-400/30 hover:bg-blue-500/30">+ Add</Badge>
                        </div>
                      </div>
                      
                      <div className="glass-card rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-blue-400">Action Items</span>
                          <Badge className="text-xs bg-blue-500/20 text-blue-400">Priority</Badge>
                        </div>
                        <div className="mt-1 text-sm">
                          <div className="flex items-center gap-2 p-2 bg-white/5 rounded-md border border-white/10 mb-1.5">
                            <Check className="w-3.5 h-3.5 text-blue-400" />
                            <span className="text-xs">Share Zapier integration documentation</span>
                          </div>
                          <div className="flex items-center gap-2 p-2 bg-white/5 rounded-md border border-white/10">
                            <Check className="w-3.5 h-3.5 text-blue-400" />
                            <span className="text-xs">Schedule enterprise feature demo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
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
            
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
