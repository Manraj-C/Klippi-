
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Klippi Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/7a335b69-b060-4fd1-be27-4758850ce2b9.png" 
              alt="Klippi Logo" 
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">
              Features
            </Link>
            <Link to="/platform" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">
              Platform
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">
              Pricing
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">
              Resources
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="ghost" className="text-gray-700 hover:text-primary font-medium">
                Sign In
              </Button>
            </Link>
            <Link to="/auth">
              <Button className="klippi-gradient text-white hover:shadow-klippi font-medium transition-all duration-200 hover:-translate-y-0.5">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 mt-4 pt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/features" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Features
              </Link>
              <Link to="/platform" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Platform
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Pricing
              </Link>
              <Link to="/resources" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Resources
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200 flex flex-col space-y-2">
                <Link to="/auth">
                  <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-primary">
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button className="w-full klippi-gradient text-white hover:shadow-klippi">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
