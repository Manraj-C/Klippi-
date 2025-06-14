import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/39e2f289-0d35-4b3e-b968-b310ff607ecc.png" 
              alt="Klippi" 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <a href="#features" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Features</a>
            <a href="#integrations" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Integrations</a>
            <a href="#signup" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Sign Up</a>
            <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Terms</a>
          </div>
          
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <a href="https://x.com/Klippiai" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Twitter size={18} />
            </a>
            <a href="https://facebook.com/klippiapp" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com/klippiapp" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com/company/klippi-ai" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/klippiapp" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Github size={18} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center md:text-left">
          <div className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} Klippi. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
