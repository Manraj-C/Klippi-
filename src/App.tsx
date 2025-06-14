import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SecurityProvider } from "@/contexts/SecurityContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import ClientDetail from "./pages/ClientDetail";
import Meetings from "./pages/Meetings";
import Messages from "./pages/Messages";
import Inbox from "./pages/Inbox";
import Documents from "./pages/Documents";
import Settings from "./pages/Settings";
import AIFlows from "./pages/AIFlows";
import AIFlowDetail from "./pages/AIFlowDetail";
import Insights from "./pages/Insights";
import Klippi from "./pages/Klippi";
import KlippiAI from "./pages/KlippiAI";
import NotFound from "./pages/NotFound";

// Site pages
import About from "./pages/site/About";
import Features from "./pages/site/Features";
import Platform from "./pages/site/Platform";
import Pricing from "./pages/site/Pricing";
import Resources from "./pages/site/Resources";
import Contact from "./pages/site/Contact";
import Blog from "./pages/site/Blog";
import BlogPost from "./pages/site/BlogPost";
import Solutions from "./pages/site/Solutions";
import GlobalContactForm from "./components/GlobalContactForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SecurityProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/clients/:id" element={<ClientDetail />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/ai-flows" element={<AIFlows />} />
            <Route path="/ai-flows/:id" element={<AIFlowDetail />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/klippi" element={<Klippi />} />
            <Route path="/klippi-ai" element={<KlippiAI />} />
            
            {/* Site pages */}
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/solutions" element={<Solutions />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          <GlobalContactForm />
        </BrowserRouter>
      </TooltipProvider>
    </SecurityProvider>
  </QueryClientProvider>
);

export default App;
