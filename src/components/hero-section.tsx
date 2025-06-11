
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-24 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.02)_0%,transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Customer Success Platform
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 animate-fade-in">
            Your AI Customer Success
            <span className="block text-gradient">Manager</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Klippi transforms how you manage customer relationships with intelligent automation, 
            proactive insights, and seamless workflow management.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in">
            <Link to="/auth">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 h-12 px-8 text-base font-medium">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/features">
              <Button variant="outline" size="lg" className="h-12 px-8 text-base font-medium border-gray-300 hover:bg-gray-50">
                See How It Works
              </Button>
            </Link>
          </div>

          {/* Social proof */}
          <div className="flex flex-col items-center animate-fade-in">
            <p className="text-sm text-gray-500 mb-6">Trusted by customer success teams at</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="h-8 bg-gray-300 rounded w-24"></div>
              <div className="h-8 bg-gray-300 rounded w-20"></div>
              <div className="h-8 bg-gray-300 rounded w-28"></div>
              <div className="h-8 bg-gray-300 rounded w-22"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
