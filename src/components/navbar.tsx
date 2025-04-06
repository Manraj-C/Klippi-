
import React from "react"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-bold text-xl">K</span>
          </div>
          <span className="text-xl font-bold text-white">Klip</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground" asChild>
            <a href="#features">Features</a>
          </Button>
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground" asChild>
            <a href="#integrations">Integrations</a>
          </Button>
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground" asChild>
            <a href="#contact">Contact</a>
          </Button>
          <div className="hidden md:flex items-center gap-3 ml-2 border-l border-white/10 pl-4">
            <a href="https://twitter.com/klipapp" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground">
              <Twitter size={18} />
            </a>
            <a href="https://instagram.com/klipapp" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com/company/klipapp" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/klipapp" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground">
              <Github size={18} />
            </a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90" asChild>
            <a href="#signup">Join Waitlist</a>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
