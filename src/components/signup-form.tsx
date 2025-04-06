
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { ArrowRight, Mail, CheckCircle } from "lucide-react"

const SignupForm = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [role, setRole] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast({
        title: "Thanks for joining the waitlist!",
        description: "We'll notify you when Klip is ready.",
      })
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="glass-card rounded-xl p-8 text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
        <p className="text-foreground/70 mb-6">
          We'll notify you when Klip is ready to revolutionize your Customer Success workflow.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          Back to form
        </Button>
      </div>
    )
  }

  return (
    <div className="glass-card rounded-xl p-8">
      <h3 className="text-2xl font-bold mb-6">Join the Waitlist</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-white/5 border-white/10 focus-visible:ring-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Work Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/5 border-white/10 focus-visible:ring-primary pl-10"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              placeholder="Your Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              className="bg-white/5 border-white/10 focus-visible:ring-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Input
              id="role"
              placeholder="Customer Success Manager"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="bg-white/5 border-white/10 focus-visible:ring-primary"
            />
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 h-12"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : (
            <>
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
        
        <p className="text-xs text-foreground/60 text-center">
          By signing up, you agree to our Privacy Policy and Terms of Service.
        </p>
      </form>
    </div>
  )
}

export default SignupForm
