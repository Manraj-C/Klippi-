
import React from "react";
import { Brain, Layers, Book, Target, Database } from "lucide-react";

export const AIFeatures = () => {
  return (
    <div className="mt-16 glass-card p-8 max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 border border-blue-100/50 shadow-klippi">
      <h3 className="font-bold mb-6 flex items-center text-2xl text-center justify-center">
        <Brain className="h-6 w-6 text-primary mr-3" />
        AI-Powered Intelligence
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start gap-3 hover-lift p-4 rounded-lg bg-white/60">
          <div className="p-1.5 rounded-md bg-primary/20 shrink-0 mt-1">
            <Layers className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium mb-1 text-gray-900">Multi-Step Automation</h4>
            <p className="text-sm text-foreground/70">Not just simple triggers, but context-aware responses that adapt to situations.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3 hover-lift p-4 rounded-lg bg-white/60">
          <div className="p-1.5 rounded-md bg-primary/20 shrink-0 mt-1">
            <Brain className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium mb-1 text-gray-900">Learning & Adaptation</h4>
            <p className="text-sm text-foreground/70">Continuously improves based on your feedback and interaction patterns.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3 hover-lift p-4 rounded-lg bg-white/60">
          <div className="p-1.5 rounded-md bg-primary/20 shrink-0 mt-1">
            <Book className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium mb-1 text-gray-900">Custom Decision Making</h4>
            <p className="text-sm text-foreground/70">Interprets emails and events to take the most appropriate action.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3 hover-lift p-4 rounded-lg bg-white/60">
          <div className="p-1.5 rounded-md bg-primary/20 shrink-0 mt-1">
            <Target className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium mb-1 text-gray-900">Personalized Rules</h4>
            <p className="text-sm text-foreground/70">Set up automation that adapts dynamically to your unique workflow.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
