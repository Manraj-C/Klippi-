
import React from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import IntegrationsSection from "@/components/integrations-section"
import SignupForm from "@/components/signup-form"
import Footer from "@/components/footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <IntegrationsSection />
        
        <section id="signup" className="py-20 bg-gradient-to-b from-background to-background/90">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Be the <span className="text-gradient">First to Know</span>
              </h2>
              <p className="text-foreground/80 max-w-2xl mx-auto mb-6">
                Join our waitlist to get early access to Klip, whether you're an individual CSM or leading a team.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground/80">Perfect for individual CSMs</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Users className="w-3.5 h-3.5 text-secondary" />
                  </div>
                  <span className="text-foreground/80">Tailored for CS teams</span>
                </div>
              </div>
            </div>
            
            <div className="max-w-xl mx-auto">
              <SignupForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default Index
