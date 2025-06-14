import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Shield } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { validatePassword, createRateLimiter, sanitizeInput } from "@/utils/security";
import { useSecurity } from "@/contexts/SecurityContext";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signupSchema = z.object({
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
  password: z.string().min(8, "Password must be at least 8 characters")
    .refine((password) => validatePassword(password).isValid, {
      message: "Password must contain uppercase, lowercase, number, and special character"
    }),
});

// Rate limiter: 5 attempts per 15 minutes
const authRateLimiter = createRateLimiter(5, 15 * 60 * 1000);

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [session, setSession] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState<string[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { csrfToken, isSecureConnection } = useSecurity();
  
  const schema = isSignUp ? signupSchema : loginSchema;
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    // Security warning for non-HTTPS connections
    if (!isSecureConnection && window.location.hostname !== 'localhost') {
      toast({
        title: "Security Warning",
        description: "This connection is not secure. Please use HTTPS.",
        variant: "destructive",
      });
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) navigate("/");
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        if (session) navigate("/");
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate, isSecureConnection, toast]);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    form.reset();
    setPasswordStrength([]);
  };

  const handlePasswordChange = (password: string) => {
    if (isSignUp) {
      const validation = validatePassword(password);
      setPasswordStrength(validation.errors);
    }
  };

  const onSubmit = async (values) => {
    const clientIP = 'user-session'; // In production, use actual IP or user ID
    
    if (!authRateLimiter(clientIP)) {
      toast({
        title: "Too many attempts",
        description: "Please wait before trying again.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Sanitize inputs
      const sanitizedEmail = sanitizeInput(values.email.toLowerCase().trim());
      const password = values.password;

      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email: sanitizedEmail,
          password: password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            data: {
              csrf_token: csrfToken
            }
          }
        });

        if (error) {
          if (error.message.includes('already registered')) {
            toast({
              title: "Account exists",
              description: "An account with this email already exists. Try signing in instead.",
              variant: "destructive",
            });
          } else {
            throw error;
          }
        } else {
          toast({
            title: "Account created successfully!",
            description: "Please check your email for verification link.",
          });
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: sanitizedEmail,
          password: password,
        });

        if (error) {
          if (error.message.includes('Invalid login credentials')) {
            toast({
              title: "Invalid credentials",
              description: "Please check your email and password and try again.",
              variant: "destructive",
            });
          } else {
            throw error;
          }
        }
      }
    } catch (error) {
      console.error('Authentication error:', error);
      toast({
        title: "Authentication error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (!authRateLimiter('google-signin')) {
      toast({
        title: "Too many attempts",
        description: "Please wait before trying again.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/`,
          queryParams: {
            csrf_token: csrfToken
          }
        },
      });
      
      if (error) throw error;
    } catch (error) {
      console.error('Google sign in error:', error);
      toast({
        title: "Google sign in error",
        description: "Unable to sign in with Google. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex flex-1 flex-col justify-center items-center px-6 py-12">
        <div className="mb-8 flex flex-col items-center">
          <div className="size-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
            <Shield className="text-white h-6 w-6" />
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            {isSignUp ? "Create your account" : "Welcome back"}
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            {isSignUp 
              ? "Sign up to get started with Klippi" 
              : "Sign in to your account to continue"}
          </p>
          {!isSecureConnection && window.location.hostname !== 'localhost' && (
            <div className="mt-2 text-xs text-red-500 flex items-center gap-1">
              <Shield className="h-3 w-3" />
              Insecure connection detected
            </div>
          )}
        </div>

        <Card className="w-full max-w-md">
          <CardContent className="space-y-6 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 h-12 mb-4"
            >
              {/* Google icon SVG remains the same */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                  fill="#4285F4"
                />
                <path
                  d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
                  fill="#34A853"
                />
                <path
                  d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                  fill="#FBBC05"
                />
                <path
                  d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                  fill="#EA4335"
                />
              </svg>
              <span>Continue with Google</span>
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-4 text-muted-foreground">
                  Or continue with email
                </span>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Hidden CSRF token */}
                <input type="hidden" name="_token" value={csrfToken} />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email address</FormLabel>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        <FormControl>
                          <Input
                            placeholder="you@company.com"
                            className="pl-10"
                            autoComplete="email"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        <FormControl>
                          <Input
                            type={showPassword ? "text" : "password"}
                            className="pl-10 pr-10"
                            autoComplete={isSignUp ? "new-password" : "current-password"}
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              handlePasswordChange(e.target.value);
                            }}
                          />
                        </FormControl>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                          <span className="sr-only">
                            {showPassword ? "Hide password" : "Show password"}
                          </span>
                        </Button>
                      </div>
                      <FormMessage />
                      {isSignUp && passwordStrength.length > 0 && (
                        <div className="text-xs text-red-500 space-y-1">
                          {passwordStrength.map((error, index) => (
                            <div key={index}>• {error}</div>
                          ))}
                        </div>
                      )}
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full h-11 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : (
                    <>
                      {isSignUp ? "Sign up" : "Sign in"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter className="flex justify-center border-t p-6">
            <div className="text-sm text-center text-muted-foreground">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <Button variant="link" className="p-0" onClick={toggleMode}>
                {isSignUp ? "Sign in" : "Sign up"}
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Right side content remains the same */}
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white p-12">
          <div className="max-w-md">
            <div className="size-14 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
              <span className="text-white font-bold text-3xl">K</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Klippi</h2>
            <p className="text-lg mb-6">
              The all-in-one platform that helps Customer Success Managers deliver outstanding service and drive business growth.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-sm opacity-90">Streamline client communication</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-sm opacity-90">Track relationships effortlessly</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-sm opacity-90">Supercharge your productivity</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-sm opacity-90">AI-powered insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
