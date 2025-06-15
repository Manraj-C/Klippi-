import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <nav className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/b34edeee-8ced-4968-bbdb-1d436f697376.png" alt="Klippi" className="h-8 w-auto object-fill" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-600 hover:text-primary font-medium transition-colors">
              Features
            </Link>
            <Link to="/platform" className="text-gray-600 hover:text-primary font-medium transition-colors">
              Platform
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-primary font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/resources" className="text-gray-600 hover:text-primary font-medium transition-colors">
              Resources
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="ghost" className="text-gray-600 hover:text-primary font-medium">
                Sign In
              </Button>
            </Link>
            <Link to="/auth">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden border-t border-gray-200 mt-4 pt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/features" className="text-gray-600 hover:text-primary font-medium">
                Features
              </Link>
              <Link to="/platform" className="text-gray-600 hover:text-primary font-medium">
                Platform
              </Link>
              <Link to="/pricing" className="text-gray-600 hover:text-primary font-medium">
                Pricing
              </Link>
              <Link to="/resources" className="text-gray-600 hover:text-primary font-medium">
                Resources
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-primary font-medium">
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200 flex flex-col space-y-2">
                <Link to="/auth">
                  <Button variant="ghost" className="w-full justify-start text-gray-600">
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;