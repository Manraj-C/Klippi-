import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, MessageSquare, PieChart, Bot, Calendar, Mail, Zap, Check, X, Edit2, Database, CheckCircle, FileText, ExternalLink, Save, Search, Settings, Inbox, Star, Clock, Archive, Trash2, Tag, ChevronDown, Menu, Paperclip, MoreVertical, Users, BarChart4, Bell, AlertCircle, CheckSquare, User, Filter, ArrowUpRight, ChevronRight } from "lucide-react"

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;
  
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
            Meet <span className="text-gradient">Klippi</span>, Your AI Customer Success Manager <br className="hidden md:block" />
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
            
            <div 
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${activeSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <div className="w-full max-w-4xl h-[300px] md:h-[400px] glass-card rounded-xl border border-white/5 shadow-lg overflow-hidden">
                <div className="flex flex-col h-full bg-white text-gray-800">
                  <div className="flex items-center justify-between bg-white border-b border-gray-200 px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Menu className="w-5 h-5 text-gray-600" />
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-red-500" />
                        <span className="font-medium text-gray-700 text-lg ml-1">Gmail</span>
                      </div>
                    </div>
                    
                    <div className="flex-1 mx-4">
                      <div className="bg-gray-100 rounded-lg flex items-center px-4 py-2 max-w-xl mx-auto">
                        <Search className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-500">Search mail</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Settings className="w-5 h-5 text-gray-600" />
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                        <span className="text-sm">K</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-1 overflow-hidden">
                    <div className="hidden md:block w-48 bg-white border-r border-gray-200 py-2 pr-1">
                      <Button variant="outline" className="mb-4 ml-2 bg-blue-50 text-gray-700 border border-gray-300 rounded-2xl pl-2 pr-4 py-1.5 h-auto flex justify-start items-center w-36">
                        <Edit2 className="w-4 h-4 mr-3 text-gray-600" />
                        <span className="text-sm font-medium">Compose</span>
                      </Button>
                      
                      <div className="space-y-1">
                        <div className="flex items-center pl-2 pr-3 py-1.5 rounded-r-full bg-blue-100 text-blue-800">
                          <Inbox className="w-4 h-4 mr-3" />
                          <span className="text-sm font-medium">Inbox</span>
                          <Badge className="ml-auto bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">4</Badge>
                        </div>
                        
                        <div className="flex items-center pl-2 pr-3 py-1.5 rounded-r-full text-gray-700 hover:bg-gray-100">
                          <Star className="w-4 h-4 mr-3" />
                          <span className="text-sm">Starred</span>
                        </div>
                        
                        <div className="flex items-center pl-2 pr-3 py-1.5 rounded-r-full text-gray-700 hover:bg-gray-100">
                          <Clock className="w-4 h-4 mr-3" />
                          <span className="text-sm">Snoozed</span>
                        </div>
                        
                        <div className="flex items-center pl-2 pr-3 py-1.5 rounded-r-full text-gray-700 hover:bg-gray-100">
                          <Archive className="w-4 h-4 mr-3" />
                          <span className="text-sm">Archived</span>
                        </div>
                        
                        <div className="flex items-center pl-2 pr-3 py-1.5 rounded-r-full text-gray-700 hover:bg-gray-100">
                          <Trash2 className="w-4 h-4 mr-3" />
                          <span className="text-sm">Trash</span>
                        </div>
                      </div>
                      
                      <div className="mt-3 pt-2 border-t border-gray-200">
                        <div className="flex items-center pl-2 pr-3 py-1.5 text-gray-700 justify-between">
                          <span className="text-sm font-medium">Labels</span>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                        
                        <div className="flex items-center pl-2 pr-3 py-1.5 rounded-r-full text-gray-700 hover:bg-gray-100">
                          <Tag className="w-4 h-4 mr-3 text-green-600" />
                          <span className="text-sm">Clients</span>
                        </div>
                        
                        <div className="flex items-center pl-2 pr-3 py-1.5 rounded-r-full text-gray-700 hover:bg-gray-100">
                          <Tag className="w-4 h-4 mr-3 text-yellow-600" />
                          <span className="text-sm">Important</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center justify-between py-1 px-3 border-b border-gray-200">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center">
                            <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                          </div>
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" className="h-8 w-8 p-1" title="Refresh">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>
                            </Button>
                            <Button variant="ghost" className="h-8 w-8 p-1" title="More actions">
                              <MoreVertical className="w-4 h-4 text-gray-600" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="text-xs text-gray-500">1-10 of 356</div>
                      </div>
                      
                      <div className="flex-1 overflow-auto">
                        <div className="flex items-center px-3 py-2 border-b border-gray-100 bg-gray-50 hover:shadow-md hover:z-10 relative transition-shadow cursor-pointer">
                          <div className="flex items-center gap-3 min-w-0">
                            <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                            <Star className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                            <Tag className="w-4 h-4 text-yellow-400" />
                            
                            <div className="flex-shrink-0 font-medium w-48 truncate">Anna Chen (Acme Corp)</div>
                            
                            <div className="flex flex-1 min-w-0">
                              <span className="font-medium mr-1.5">API sync delays and upgrade discussion</span>
                              <span className="text-gray-600 truncate"> - We've been using the API integration for a few weeks now and have run into some issues with the data syncing...</span>
                            </div>
                            
                            <div className="flex items-center gap-2 ml-2">
                              <Paperclip className="w-4 h-4 text-gray-400" />
                              <span className="text-xs whitespace-nowrap font-medium">11:42 AM</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center px-3 py-2 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                          <div className="flex items-center gap-3 min-w-0">
                            <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                            <Star className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                            <div className="flex-shrink-0 w-48 truncate">TechCorp Team</div>
                            <div className="flex flex-1 min-w-0">
                              <span className="mr-1.5">Monthly usage report</span>
                              <span className="text-gray-500 truncate"> - Your April usage report is now available. Total API calls: 243,500...</span>
                            </div>
                            <div className="text-xs whitespace-nowrap ml-2">10:15 AM</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center px-3 py-2 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                          <div className="flex items-center gap-3 min-w-0">
                            <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                            <Star className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                            <div className="flex-shrink-0 w-48 truncate">DataFlow Solutions</div>
                            <div className="flex flex-1 min-w-0">
                              <span className="mr-1.5">RE: Integration partnership</span>
                              <span className="text-gray-500 truncate"> - Thank you for your interest in partnering with us. We'd love to schedule a call...</span>
                            </div>
                            <div className="text-xs whitespace-nowrap ml-2">Apr 11</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center px-3 py-2 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                          <div className="flex items-center gap-3 min-w-0">
                            <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                            <Star className="w-4 h-4 text-yellow-400" />
                            <Tag className="w-4 h-4 text-green-400" />
                            <div className="flex-shrink-0 w-48 truncate">Sarah Johnson</div>
                            <div className="flex flex-1 min-w-0">
                              <span className="mr-1.5">Customer success metrics</span>
                              <span className="text-gray-500 truncate"> - I've attached the latest customer success metrics for Q1. Notable improvements in...</span>
                            </div>
                            <div className="text-xs whitespace-nowrap ml-2">Apr 10</div>
                          </div>
                        </div>

                        <div className="flex items-center px-3 py-2 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                          <div className="flex items-center gap-3 min-w-0">
                            <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                            <Star className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                            <div className="flex-shrink-0 w-48 truncate">Product Updates</div>
                            <div className="flex flex-1 min-w-0">
                              <span className="mr-1.5">New features released</span>
                              <span className="text-gray-500 truncate"> - We're excited to announce our latest feature updates including improved analytics...</span>
                            </div>
                            <div className="text-xs whitespace-nowrap ml-2">Apr 9</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border-t border-blue-100 py-2 px-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white mr-2">
                        <span className="text-xs">K</span>
                      </div>
                      <span className="text-sm text-blue-800">Klippi Assistant is active</span>
                      <Badge className="ml-2 bg-green-100 text-green-700 border-green-200">Auto-responses enabled</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="h-7 px-2 border-gray-300 text-gray-600 hover:bg-gray-100">
                        <Settings className="w-3.5 h-3.5 mr-1" />
                        Configure
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 h-7 px-2 text-white">
                        <Zap className="w-3.5 h-3.5 mr-1" />
                        Analyze Emails
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${activeSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <div className="w-full max-w-4xl h-[300px] md:h-[400px] glass-card rounded-xl border border-white/5 shadow-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-blue-600 text-white">
                  <div className="flex items-center gap-3">
                    <img src="https://www.gainsight.com/wp-content/themes/gainsight/assets/images/logos/Logo/Gainsight-Standard.svg" alt="Gainsight" className="h-5" />
                  </div>
                  <div className="flex items-center gap-3">
                    <Bell className="w-4 h-4 text-white/80" />
                    <Settings className="w-4 h-4 text-white/80" />
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center ml-2">
                      <span className="text-xs text-blue-600 font-bold">K</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-100 text-gray-800 h-[calc(100%-40px)] flex">
                  <div className="w-48 bg-white border-r border-gray-200 shrink-0 hidden md:block">
                    <div className="py-2">
                      <div className="px-3 py-2 text-sm font-medium text-blue-600">Cockpit</div>
                      
                      <div className="space-y-0.5 mt-2">
                        <div className="flex items-center px-3 py-2 text-gray-700 bg-blue-50 border-l-2 border-blue-600">
                          <Users className="w-4 h-4 mr-2 text-gray-500" />
                          <span className="text-sm">Customers</span>
                        </div>
                        
                        <div className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50">
                          <BarChart4 className="w-4 h-4 mr-2 text-gray-500" />
                          <span className="text-sm">Analytics</span>
                        </div>
                        
                        <div className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50">
                          <AlertCircle className="w-4 h-4 mr-2 text-gray-500" />
                          <span className="text-sm">Risk Center</span>
                        </div>
                        
                        <div className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50">
                          <CheckSquare className="w-4 h-4 mr-2 text-gray-500" />
                          <span className="text-sm">Success Plans</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="bg-white px-4 py-3 border-b border-gray-200 flex flex-wrap justify-between items-center">
                      <div className="flex items-center mb-2 md:mb-0">
                        <h3 className="text-lg font-medium text-gray-800">TechCorp Inc.</h3>
                        <Badge className="ml-2 bg-green-100 text-green-700 border border-green-200">Active</Badge>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-8 text-xs bg-white border-gray-300 text-gray-700 flex items-center gap-1">
                          <Filter className="w-3.5 h-3.5" />
                          Filter
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 text-xs bg-white border-gray-300 text-gray-700">
                          <MoreVertical className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex-1 overflow-auto bg-gray-50 p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden">
                          <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                                <User className="w-3.5 h-3.5 text-blue-600" />
                              </div>
                              <span className="ml-2 text-sm font-medium text-gray-700">Customer Information</span>
                            </div>
                            <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                              <Edit2 className="h-3.5 w-3.5 text-gray-500" />
                            </Button>
                          </div>
                          
                          <div className="p-4">
                            <div className="space-y-3 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-500">Customer Since</span>
                                <span className="text-gray-900 font-medium">Apr 2024</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">ARR</span>
                                <span className="text-gray-900 font-medium">$125,000</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">Renewal Date</span>
                                <span className="text-gray-900 font-medium">Jan 15, 2026</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">Segment</span>
                                <Badge className="bg-blue-100 text-blue-700 border border-blue-200">Enterprise</Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden">
                          <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                <PieChart className="w-3.5 h-3.5 text-green-600" />
                              </div>
                              <span className="ml-2 text-sm font-medium text-gray-700">Health Score</span>
                            </div>
                          </div>
                          
                          <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-2xl font-bold text-green-600">85</span>
                              <Badge className="bg-green-100 text-green-700 border border-green-200">Healthy</Badge>
                            </div>
                            
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                            
                            <div className="mt-3 pt-3 border-t border-gray-100">
                              <div className="flex items-center">
                                <ArrowUpRight className="w-4 h-4 text-green-600 mr-1" />
                                <span className="text-xs text-green-600">+5% from last quarter</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden">
                          <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                                <CheckSquare className="w-3.5 h-3.5 text-purple-600" />
                              </div>
                              <span className="ml-2 text-sm font-medium text-gray-700">Success Plan</span>
                            </div>
                            <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                              <MoreVertical className="h-3.5 w-3.5 text-gray-500" />
                            </Button>
                          </div>
                          
                          <div className="p-4">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded bg-green-100 flex items-center justify-center flex-shrink-0">
                                  <Check className="w-3 h-3 text-green-600" />
                                </div>
                                <span className="text-sm text-gray-700">API integration complete</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded bg-green-100 flex items-center justify-center flex-shrink-0">
                                  <Check className="w-3 h-3 text-green-600" />
                                </div>
                                <span className="text-sm text-gray-700">User onboarding workshop</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded bg-gray-100 flex items-center justify-center flex-shrink-0">
                                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                </div>
                                <span className="text-sm text-gray-700">Schedule enterprise feature demo</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden">
                          <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                                <Bot className="w-3.5 h-3.5 text-blue-600" />
                              </div>
                              <span className="ml-2 text-sm font-medium text-gray-700">Klippi AI Insights</span>
                            </div>
                            <Badge className="bg-blue-100 text-blue-700 border border-blue-200">New</Badge>
                          </div>
                          
                          <div className="p-4">
                            <div className="text-sm text-gray-600 mb-3">
                              This account has been consistently expanding usage. Consider discussing enterprise features during next QBR.
                            </div>
                            
                            <Button variant="outline" size="sm" className="w-full justify-between text-blue-600 border-blue-200 hover:bg-blue-50">
                              <span>View full analysis</span>
                              <ChevronRight className="w-4 h-4" />
                            </Button>
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
