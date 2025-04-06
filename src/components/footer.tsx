
import React from "react"

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8 bg-background">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="text-xl font-bold text-white">Klip</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
            <a href="#features" className="text-sm text-foreground/70 hover:text-foreground">Features</a>
            <a href="#integrations" className="text-sm text-foreground/70 hover:text-foreground">Integrations</a>
            <a href="#signup" className="text-sm text-foreground/70 hover:text-foreground">Sign Up</a>
            <a href="#" className="text-sm text-foreground/70 hover:text-foreground">Privacy</a>
            <a href="#" className="text-sm text-foreground/70 hover:text-foreground">Terms</a>
          </div>
          
          <div className="text-sm text-foreground/70">
            &copy; {new Date().getFullYear()} Klip. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
