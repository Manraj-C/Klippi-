
import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { supabase } from "@/integrations/supabase/client"
import { LogIn, LogOut, User, LayoutDashboard } from "lucide-react"

const Navbar = () => {
  const [session, setSession] = useState(null)
  const navigate = useNavigate()

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-bold text-xl">K</span>
          </div>
          <span className="text-xl font-bold text-foreground">Klippi</span>
        </div>
        
        <div className="flex items-center gap-4">
          {!session && (
            <>
              <Button variant="ghost" className="text-foreground/80 hover:text-foreground" asChild>
                <a href="#features">Features</a>
              </Button>
              <Button variant="ghost" className="text-foreground/80 hover:text-foreground" asChild>
                <a href="#integrations">Integrations</a>
              </Button>
              <Button variant="ghost" className="text-foreground/80 hover:text-foreground" asChild>
                <a href="#contact">Contact</a>
              </Button>
            </>
          )}
          
          {session ? (
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                className="flex items-center gap-2"
                asChild
              >
                <Link to="/dashboard">
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </Button>
            </div>
          ) : (
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white" asChild>
              <Link to="/auth">
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
