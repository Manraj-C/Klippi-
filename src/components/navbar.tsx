
import React from "react"
import { Button } from "@/components/ui/button"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
          </Link>
          <Link to="/">
            <span className="text-xl font-bold text-foreground">Klippi</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            className={`text-foreground/80 hover:text-foreground ${location.pathname === '/features' ? 'text-foreground' : ''}`} 
            asChild
          >
            <Link to="/features">Features</Link>
          </Button>
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground" asChild>
            <a href="#integrations">Integrations</a>
          </Button>
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground" asChild>
            <a href="#contact">Contact</a>
          </Button>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white" asChild>
            <a href="#signup">Join Waitlist</a>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
