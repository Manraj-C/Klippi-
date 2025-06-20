
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Customer Success Cockpit",
    subtitle: "AI-powered activity feed with intelligent priority management and automated insights",
    image: "/lovable-uploads/2c711582-8b01-4711-bd39-e823893871d3.png",
    alt: "Customer Success Cockpit showing activity feed with churn risk detection and priority management"
  },
  {
    id: 2,
    title: "Customer Insights Dashboard",
    subtitle: "Data-driven insights with topic analysis, ARR impact tracking, and actionable recommendations",
    image: "/lovable-uploads/b9037f5e-cd8c-4b35-a5b0-bcc4fede70d6.png",
    alt: "Customer Insights dashboard with analytics, feature requests, and churn risk analysis"
  },
  {
    id: 3,
    title: "AI CSM Flows",
    subtitle: "Pre-built AI assistants to automate your customer success workflows and processes",
    image: "/lovable-uploads/2dd0f2a6-72e6-4635-9fa2-540b45ed3a04.png",
    alt: "AI CSM Flows dashboard with automated workflow cards including QBR prep and sentiment analysis"
  }
];

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Carousel Container with Klippi branding */}
      <div className="relative overflow-hidden rounded-2xl klippi-gradient-subtle shadow-klippi-lg border border-primary/10">
        {/* Device Frame with enhanced branding */}
        <div className="relative bg-white/95 backdrop-blur-sm p-6 md:p-8">
          {/* Browser Header with Klippi colors */}
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-primary/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex-1 ml-4">
              <div className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-2 text-sm text-primary font-medium max-w-md">
                klippi.ai/dashboard
              </div>
            </div>
          </div>

          {/* Screenshot Container with enhanced styling */}
          <div className="relative overflow-hidden rounded-lg shadow-klippi border border-primary/10">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-auto max-h-[500px] object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows with Klippi styling */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white shadow-klippi border-primary/20 hover:border-primary/40 transition-all duration-200"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4 text-primary" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white shadow-klippi border-primary/20 hover:border-primary/40 transition-all duration-200"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4 text-primary" />
        </Button>
      </div>

      {/* Slide Information with enhanced branding */}
      <div className="text-center mt-8 mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {slides[currentSlide].title}
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {slides[currentSlide].subtitle}
        </p>
      </div>

      {/* Slide Indicators with Klippi branding */}
      <div className="flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary scale-110 shadow-klippi"
                : "bg-gray-300 hover:bg-primary/60"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
