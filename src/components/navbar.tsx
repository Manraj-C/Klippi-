
import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { supabase } from "@/integrations/supabase/client"
import { LogIn, LogOut, User, LayoutDashboard, Menu, X } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  const [session, setSession] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHomepage = location.pathname === "/"

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="text-xl font-bold text-foreground">Klippi</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {/* Solutions dropdown removed */}
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                Features
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link to="/features/ai-assistant">AI Assistant</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/features/meeting-support">Meeting Support</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/features/client-management">Client Management</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                Platform
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link to="/platform/integrations">Integrations</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/platform/security">Security</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                Resources
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link to="/resources/case-studies">Case Studies</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/resources/guides">Guides</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/blog">Blog</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground" asChild>
            <Link to="/pricing">Pricing</Link>
          </Button>
          
          {/* About link temporarily hidden */}
          {/* <Button variant="ghost" className="text-foreground/80 hover:text-foreground" asChild>
            <Link to="/about">About</Link>
          </Button> */}
          
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground" asChild>
            <Link to="/contact">Contact</Link>
          </Button>
          
          {session ? (
            <div className="flex items-center gap-4 ml-4">
              <Button 
                variant="default" 
                className="bg-primary text-white hover:bg-primary/90"
                asChild
              >
                <Link to="/dashboard">
                  <LayoutDashboard className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
              </Button>
              <Button 
                variant="outline" 
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign out
              </Button>
            </div>
          ) : (
            <div className="ml-4">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white" asChild>
                <Link to="/auth">
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </Link>
              </Button>
            </div>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-4 border-t border-border">
          <div className="space-y-4">
            {/* Solutions section removed from mobile menu */}
            
            <div>
              <div className="font-medium mb-2">Features</div>
              <div className="space-y-2 ml-4">
                <div>
                  <Link 
                    to="/features/ai-assistant" 
                    className="text-foreground/80 hover:text-foreground"
                    onClick={closeMobileMenu}
                  >
                    AI Assistant
                  </Link>
                </div>
                <div>
                  <Link 
                    to="/features/meeting-support" 
                    className="text-foreground/80 hover:text-foreground"
                    onClick={closeMobileMenu}
                  >
                    Meeting Support
                  </Link>
                </div>
                <div>
                  <Link 
                    to="/features/client-management" 
                    className="text-foreground/80 hover:text-foreground"
                    onClick={closeMobileMenu}
                  >
                    Client Management
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div>
                <Link 
                  to="/pricing" 
                  className="text-foreground/80 hover:text-foreground"
                  onClick={closeMobileMenu}
                >
                  Pricing
                </Link>
              </div>
              {/* About link temporarily hidden */}
              {/* <div>
                <Link 
                  to="/about" 
                  className="text-foreground/80 hover:text-foreground"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </div> */}
              <div>
                <Link 
                  to="/contact" 
                  className="text-foreground/80 hover:text-foreground"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </div>
              <div>
                <Link 
                  to="/blog" 
                  className="text-foreground/80 hover:text-foreground"
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
              </div>
            </div>
            
            <div className="pt-2 border-t border-border">
              {session ? (
                <div className="space-y-2">
                  <Button 
                    variant="default" 
                    className="w-full bg-primary text-white hover:bg-primary/90"
                    asChild
                  >
                    <Link to="/dashboard" onClick={closeMobileMenu}>
                      <LayoutDashboard className="h-4 w-4 mr-2" />
                      Dashboard
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      handleLogout();
                      closeMobileMenu();
                    }}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign out
                  </Button>
                </div>
              ) : (
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white" asChild>
                  <Link to="/auth" onClick={closeMobileMenu}>
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
