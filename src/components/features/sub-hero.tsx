
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SubHeroProps {
  title: string;
  subtitle: string;
}

export const SubHero = ({ title, subtitle }: SubHeroProps) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-background/95">
      <div className="container px-4 mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          {title.split(" ").map((word, i, arr) => 
            i === arr.length - 2 ? (
              <span key={i}>
                {word} <span className="text-gradient">{arr[i + 1]}</span>
              </span>
            ) : i === arr.length - 1 ? null : (
              <span key={i}>{word} </span>
            )
          )}
        </h1>
        
        <p className="text-foreground/80 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          {subtitle}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white" size="lg">
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          
          <Button variant="outline" size="lg">
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};
