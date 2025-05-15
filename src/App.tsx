
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import ClientDetail from "./pages/ClientDetail";
import Meetings from "./pages/Meetings";
import Messages from "./pages/Messages";
import Documents from "./pages/Documents";
import Settings from "./pages/Settings";
import Klippi from "./pages/Klippi";
import Inbox from "./pages/Inbox";
import AIFlows from "./pages/AIFlows";
import AIFlowDetail from "./pages/AIFlowDetail";
import Insights from "./pages/Insights";
// Import site structure pages
// Solutions page removed
import Features from "./pages/site/Features";
import Platform from "./pages/site/Platform";
import Resources from "./pages/site/Resources";
import Blog from "./pages/site/Blog";
import BlogPost from "./pages/site/BlogPost";
import About from "./pages/site/About";
import Pricing from "./pages/site/Pricing";
import Contact from "./pages/site/Contact";

const queryClient = new QueryClient();

// Create a wrapper component to handle redirection based on auth state
const HomeRedirect = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  // Show nothing while loading
  if (loading) {
    return null;
  }

  // Redirect to Dashboard if logged in, otherwise show landing page
  return session ? <Navigate to="/dashboard" replace /> : <Index />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeRedirect />} />
          <Route path="/auth" element={<Auth />} />
          
          {/* Public Site Structure */}
          {/* Solutions routes removed */}
          <Route path="/features" element={<Features />} />
          <Route path="/features/ai-assistant" element={<Features />} />
          <Route path="/features/meeting-support" element={<Features />} />
          <Route path="/features/client-management" element={<Features />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/platform/integrations" element={<Platform />} />
          <Route path="/platform/security" element={<Platform />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/case-studies" element={<Resources />} />
          <Route path="/resources/guides" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* About page temporarily hidden */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Dashboard Structure */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/clients" element={<Clients />} />
          <Route path="/dashboard/clients/:id" element={<ClientDetail />} />
          <Route path="/dashboard/meetings" element={<Meetings />} />
          <Route path="/dashboard/messages" element={<Messages />} />
          <Route path="/dashboard/documents" element={<Documents />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/klippi" element={<Klippi />} />
          <Route path="/dashboard/inbox" element={<Inbox />} />
          <Route path="/dashboard/insights" element={<Insights />} />
          <Route path="/dashboard/ai-flows" element={<AIFlows />} />
          <Route path="/dashboard/ai-flows/:id" element={<AIFlowDetail />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
