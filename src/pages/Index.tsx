
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
              <p className="text-foreground/80 max-w-2xl mx-auto">
                Join our waitlist to get early access and exclusive updates about Klip.
              </p>
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
