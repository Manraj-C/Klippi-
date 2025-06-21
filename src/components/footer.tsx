
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-gradient-to-b from-gray-50/50 to-background">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/7a335b69-b060-4fd1-be27-4758850ce2b9.png" 
              alt="Klippi" 
              className="h-8 w-auto object-contain" 
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <a href="#features" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200">
              Features
            </a>
            <a href="#integrations" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200">
              Integrations
            </a>
            <a href="#signup" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200">
              Sign Up
            </a>
            <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200">
              Terms
            </a>
          </div>
          
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <a 
              href="https://x.com/Klippiai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/70 hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="https://facebook.com/klippiapp" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/70 hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://instagram.com/klippiapp" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/70 hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/company/klippi-ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/70 hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://github.com/klippiapp" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/70 hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center md:text-left">
          <div className="text-sm text-foreground/60 flex flex-col md:flex-row justify-between items-center">
            <span>&copy; {new Date().getFullYear()} Klippi. All rights reserved.</span>
            <span className="mt-2 md:mt-0 text-xs text-foreground/50">
              AI-powered Customer Success Management
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
