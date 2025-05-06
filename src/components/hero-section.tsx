import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import DashboardSlide from "@/components/slides/dashboard-slide";
import MeetingAssistantSlide from "@/components/slides/meeting-assistant-slide";
import EmailDraftSlide from "@/components/slides/email-draft-slide";
const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % totalSlides);
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };
  return <div className="pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="glowing" className="mb-4 px-4 py-1">
            <Sparkles className="w-4 h-4 mr-1" /> Coming Soon
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Meet <span className="text-gradient">Klippi</span>, Your AI Customer Success Manager <br className="hidden md:block" />
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mb-8">
            The all-in-one integrated solution that works as a co-pilot for individual CSMs while 
            helping teams scale operations across the entire customer lifecycle.
          </p>
          
          <div className="glass-card p-8 rounded-xl border border-primary/20 text-left w-full max-w-4xl mb-10 px-[35px]">
            <Badge className="mb-3 bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 bg-neutral-200 px-0 my-0 mx-0">
              All-in-One Solution
            </Badge>
            <h3 className="text-2xl font-semibold mb-3">Supercharge Your Customer Success</h3>
            <p className="text-foreground/70 mb-6">
              Klippi serves as both your personal co-pilot and a powerful team scaling engine. From automating routine tasks 
              and providing actionable insights to standardizing workflows and optimizing the entire customer lifecycle, 
              Klippi adapts to your needs whether you're an individual CSM or leading an entire department.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10" asChild>
                <a href="#signup">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
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
            <Button size="lg" variant="outline" className="border-white/10 h-12 px-8 text-base" asChild>
              <a href="#signup">
                Contact Us
              </a>
            </Button>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-1 max-w-5xl mx-auto overflow-hidden">
          <div className="relative h-[450px] md:h-[600px] rounded-2xl bg-gradient-to-br from-muted to-background overflow-hidden">
            <DashboardSlide active={activeSlide === 0} />
            <MeetingAssistantSlide active={activeSlide === 1} />
            <EmailDraftSlide active={activeSlide === 2} />
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {[...Array(totalSlides)].map((_, idx) => <button key={idx} onClick={() => handleDotClick(idx)} className={`w-2.5 h-2.5 rounded-full transition-all ${activeSlide === idx ? 'bg-primary w-8' : 'bg-white/30'}`} aria-label={`View slide ${idx + 1}`} />)}
            </div>
            
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>;
};
export default HeroSection;