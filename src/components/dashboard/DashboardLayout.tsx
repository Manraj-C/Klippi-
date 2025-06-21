import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Users,
  Calendar,
  MessageSquare,
  FileText,
  Settings,
  LogOut,
  Sparkles,
  Inbox,
  Zap,
  Lightbulb,
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (!session) {
        navigate('/auth');
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        if (!session) {
          navigate('/auth');
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen bg-gray-50/50">
        <Sidebar variant="inset" className="border-r border-gray-200">
          <SidebarHeader className="border-b border-gray-200 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-lg klippi-gradient flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Klippi</span>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="px-4 py-6">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">
                Dashboard
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="h-10 px-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-colors">
                      <Link to="/dashboard" className="flex items-center gap-3">
                        <LayoutDashboard className="h-4 w-4" />
                        <span className="font-medium">Overview</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="h-10 px-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-colors">
                      <Link to="/clients" className="flex items-center gap-3">
                        <Users className="h-4 w-4" />
                        <span className="font-medium">Clients</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="h-10 px-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-colors">
                      <Link to="/meetings" className="flex items-center gap-3">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">Meetings</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="h-10 px-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-colors">
                      <Link to="/messages" className="flex items-center gap-3">
                        <MessageSquare className="h-4 w-4" />
                        <span className="font-medium">Messages</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="h-10 px-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-colors">
                      <Link to="/inbox" className="flex items-center gap-3">
                        <Inbox className="h-4 w-4" />
                        <span className="font-medium">Inbox</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="h-10 px-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-colors">
                      <Link to="/documents" className="flex items-center gap-3">
                        <FileText className="h-4 w-4" />
                        <span className="font-medium">Documents</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="h-10 px-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-colors">
                      <Link to="/insights" className="flex items-center gap-3">
                        <Lightbulb className="h-4 w-4" />
                        <span className="font-medium">Insights</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup className="mt-8">
              <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">
                AI Tools
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="h-10 px-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-colors">
                      <Link to="/klippi-ai" className="flex items-center gap-3">
                        <Sparkles className="h-4 w-4" />
                        <span className="font-medium">Klippi AI</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="h-10 px-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-colors">
                      <Link to="/ai-flows" className="flex items-center gap-3">
                        <Zap className="h-4 w-4" />
                        <span className="font-medium">AI Flows</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-gray-200 p-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-10 px-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md transition-colors">
                  <Link to="/settings" className="flex items-center gap-3">
                    <Settings className="h-4 w-4" />
                    <span className="font-medium">Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-gray-500 hover:text-primary hover:bg-primary/10 mt-2" 
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-3" />
              Sign out
            </Button>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset className="flex-1">
          <div className="h-full w-full">
            <header className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-gray-200 px-6 py-4">
              <SidebarTrigger className="md:hidden" />
            </header>
            <main className="p-6">{children}</main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
