
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FeatureShowcase } from "@/components/features/feature-showcase";
import { SubHero } from "@/components/features/sub-hero";

const Features = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <SubHero 
          title="Powerful Features for Modern CSMs"
          subtitle="Klippi transforms how Customer Success Managers work with cutting-edge AI tools that automate routine tasks and enhance customer relationships."
        />
        <FeatureShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
