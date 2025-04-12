
import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"
import DashboardSlide from "@/components/slides/dashboard-slide"
import EmailInboxSlide from "@/components/slides/email-inbox-slide"
import EmailDraftSlide from "@/components/slides/email-draft-slide"

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
          <div className="relative h-[450px] md:h-[600px] rounded-2xl bg-gradient-to-br from-muted to-background overflow-hidden">
            <DashboardSlide active={activeSlide === 0} />
            <EmailInboxSlide active={activeSlide === 1} />
            <EmailDraftSlide active={activeSlide === 2} />
            
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
