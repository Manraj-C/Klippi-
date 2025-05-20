
import React from "react";
import { AIFeatures } from "./features/ai-features";
import { ValuePillars } from "./features/value-pillars";

const FeaturesSection = () => {
  return <section id="features" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Klippi</span> Works for Everyone
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">Whether you're an individual CSM looking to excel or a CS leader scaling your team's impact, Klippi provides tailored solutions to elevate your customer success operations.</p>
        </div>
        
        <ValuePillars />
        <AIFeatures />
      </div>
    </section>;
};

export default FeaturesSection;
