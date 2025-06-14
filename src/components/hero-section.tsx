
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return <section className="relative pt-20 pb-24 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.1)_0%,transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-8 animate-fade-in bg-purple-100">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Customer Success
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl text-gray-900 mb-8 animate-fade-in font-bold lg:text-7xl text-center">
            Meet <span className="text-gradient-purple">Klippi</span>, Your AI Customer Success Manager
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Klippi transforms how you manage customer relationships with intelligent automation, 
            proactive insights, and seamless workflow management.
          </p>

          {/* Single CTA Button */}
          <div className="flex justify-center mb-16 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base font-medium"
              id="contact-cta"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Social proof */}
          
        </div>
      </div>
    </section>;
};

export default HeroSection;
