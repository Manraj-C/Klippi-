import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { User, Mail, Bell, Lock, Laptop, Bot, Plug } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ProfileSettings } from "@/components/settings/ProfileSettings";
import { NotificationSettings } from "@/components/settings/NotificationSettings";
import { SecuritySettings } from "@/components/settings/SecuritySettings";
import { AppearanceSettings } from "@/components/settings/AppearanceSettings";
import { AISettings } from "@/components/settings/AISettings";
import { IntegrationSettings } from "@/components/settings/IntegrationSettings";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const isMobile = useIsMobile();
  
  // Mock user data
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "Customer Success Manager",
    company: "Klippi AI",
    avatar: null,
    timezone: "America/New_York"
  };

  // Mock integration data
  const integrations = [
    {
      id: "gmail",
      name: "Gmail",
      category: "Communications",
      status: "connected",
      icon: "📧",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
      description: "Sync your emails and let Klippi help draft responses and identify risks."
    },
    {
      id: "slack",
      name: "Slack",
      category: "Communications",
      status: "connected",
      icon: "💬",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
      description: "Get AI-powered insights and alerts right in your Slack channels."
    },
    {
      id: "zoom",
      name: "Zoom",
      category: "Communications",
      status: "connected",
      icon: "🎥",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Zoom_Video_Communications_Logo.svg",
      description: "Let Klippi join your meetings to take notes and identify action items."
    },
    {
      id: "gainsight",
      name: "Gainsight",
      category: "CRM",
      status: "connected",
      icon: "📈",
      logo: "https://www.gainsight.com/wp-content/uploads/2020/07/gainsight_primary_logo_horizontal.svg",
      description: "Sync customer health scores and get AI-powered retention insights."
    },
    {
      id: "salesforce",
      name: "Salesforce",
      category: "CRM",
      status: "connected",
      icon: "☁️",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
      description: "Keep your CRM up to date with AI-generated meeting summaries and tasks."
    },
    {
      id: "hubspot",
      name: "HubSpot",
      category: "CRM",
      status: "disconnected",
      icon: "🔷",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/HubSpot_Logo.svg",
      description: "Sync contacts and get AI-powered relationship insights."
    },
    {
      id: "csv_upload",
      name: "CSV Upload",
      category: "CRM",
      status: "disconnected",
      icon: "📄",
      logo: "/placeholder.svg",
      description: "Upload your customer data directly via CSV."
    },
    {
      id: "zendesk",
      name: "Zendesk",
      category: "Support",
      status: "disconnected",
      icon: "🎫",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Zendesk_logo.svg",
      description: "Monitor support tickets and get AI-powered customer satisfaction insights."
    },
    {
      id: "intercom",
      name: "Intercom",
      category: "Support",
      status: "disconnected",
      icon: "💬",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/Intercom_logo.svg",
      description: "Get real-time analysis of customer conversations and sentiment."
    },
    {
      id: "google_drive",
      name: "Google Drive",
      category: "Other",
      status: "connected",
      icon: "📁",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg",
      description: "Store and analyze your documents with AI-powered insights."
    },
    {
      id: "google_calendar",
      name: "Google Calendar",
      category: "Other",
      status: "connected",
      icon: "📅",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
      description: "Let Klippi manage your calendar and prepare for upcoming meetings."
    }
  ];

  return (
    <DashboardLayout>
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Settings</h1>

        <Tabs 
          orientation={isMobile ? "horizontal" : "vertical"}
          defaultValue="profile" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="space-y-4 md:space-y-0"
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="w-full md:w-[200px] flex-shrink-0">
              <TabsList className={`
                w-full flex ${isMobile ? 'flex-row overflow-x-auto' : 'flex-col'} 
                h-auto justify-start bg-transparent gap-2 p-1
              `}>
                <TabsTrigger 
                  value="profile" 
                  className="w-full flex justify-start gap-2 data-[state=active]:bg-muted"
                >
                  <User className="h-4 w-4" />
                  <span className="truncate">Profile</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="notifications" 
                  className="w-full flex justify-start gap-2 data-[state=active]:bg-muted"
                >
                  <Bell className="h-4 w-4" />
                  <span className="truncate">Notifications</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="security" 
                  className="w-full flex justify-start gap-2 data-[state=active]:bg-muted"
                >
                  <Lock className="h-4 w-4" />
                  <span className="truncate">Security</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="appearance" 
                  className="w-full flex justify-start gap-2 data-[state=active]:bg-muted"
                >
                  <Laptop className="h-4 w-4" />
                  <span className="truncate">Appearance</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="ai" 
                  className="w-full flex justify-start gap-2 data-[state=active]:bg-muted"
                >
                  <Bot className="h-4 w-4" />
                  <span className="truncate">AI Settings</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="integrations" 
                  className="w-full flex justify-start gap-2 data-[state=active]:bg-muted"
                >
                  <Plug className="h-4 w-4" />
                  <span className="truncate">Integrations</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="flex-1 space-y-4">
              <TabsContent value="profile" className="mt-0">
                <ProfileSettings user={user} />
              </TabsContent>

              <TabsContent value="notifications" className="mt-0">
                <NotificationSettings />
              </TabsContent>

              <TabsContent value="security" className="mt-0">
                <SecuritySettings />
              </TabsContent>

              <TabsContent value="appearance" className="mt-0">
                <AppearanceSettings />
              </TabsContent>

              <TabsContent value="ai" className="mt-0">
                <AISettings />
              </TabsContent>

              <TabsContent value="integrations" className="mt-0">
                <IntegrationSettings integrations={integrations} />
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
