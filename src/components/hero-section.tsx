
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import ProductCarousel from "./product-carousel";

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-24 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40 overflow-hidden">
      {/* Enhanced background pattern with Klippi colors */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.06)_0%,transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Enhanced badge with Klippi branding */}
          <div className="inline-flex items-center px-4 py-2 rounded-full text-primary bg-primary/10 border border-primary/20 text-sm font-medium mb-8 animate-fade-in hover:shadow-klippi transition-all duration-300">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Customer Success
          </div>

          {/* Main headline with enhanced typography */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 font-bold text-center text-gray-900 leading-tight animate-fade-in">
            Meet <span className="klippi-text-gradient">Klippi</span>, Your AI Customer Success Manager
          </h1>

          {/* Enhanced subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Klippi transforms how you manage customer relationships with intelligent automation, 
            proactive insights, and seamless workflow management.
          </p>

          {/* Enhanced CTA Button */}
          <div className="flex justify-center mb-16 animate-slide-up">
            <Button 
              size="lg" 
              className="klippi-gradient text-white hover:shadow-klippi-lg h-12 px-8 text-base font-medium transition-all duration-300 hover:-translate-y-1 group" 
              id="contact-cta"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Product Carousel with enhanced styling */}
        <div className="animate-fade-in">
          <ProductCarousel />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
