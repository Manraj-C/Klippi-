
import React from "react"
import { Brain, Layers, Book, Target, Database, Sparkles, Bot } from "lucide-react"

export const AIFeatures = () => {
  return (
    <div className="mt-16 glass-card rounded-xl p-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        <Brain className="h-6 w-6 text-primary mr-3" />
        AI-Powered Intelligence
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start gap-3">
          <div className="p-1.5 rounded-md bg-primary/20 shrink-0 mt-1">
            <Layers className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Multi-Step Automation</h4>
            <p className="text-sm text-foreground/70">Not just simple triggers, but context-aware responses that adapt to situations.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="p-1.5 rounded-md bg-primary/20 shrink-0 mt-1">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Learning & Adaptation</h4>
            <p className="text-sm text-foreground/70">Continuously improves based on your feedback and interaction patterns.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="p-1.5 rounded-md bg-primary/20 shrink-0 mt-1">
            <Book className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Custom Decision Making</h4>
            <p className="text-sm text-foreground/70">Interprets emails and events to take the most appropriate action.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="p-1.5 rounded-md bg-primary/20 shrink-0 mt-1">
            <Target className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Personalized Rules</h4>
            <p className="text-sm text-foreground/70">Set up automation that adapts dynamically to your unique workflow.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="p-1.5 rounded-md bg-primary/20 shrink-0 mt-1">
            <Database className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Secure Cloud Backend</h4>
            <p className="text-sm text-foreground/70">Powered by Supabase for enterprise-grade security and reliability.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="p-1.5 rounded-md bg-primary/20 shrink-0 mt-1">
            <Bot className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium mb-1">GPT-4 Powered Insights</h4>
            <p className="text-sm text-foreground/70">Leverage cutting-edge language models for advanced customer understanding.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <a href="/features" className="text-primary hover:text-primary/90 text-sm font-medium inline-flex items-center">
          Explore all features
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}
