
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileSettings } from "@/components/settings/ProfileSettings";
import { NotificationSettings } from "@/components/settings/NotificationSettings";
import { SecuritySettings } from "@/components/settings/SecuritySettings";
import { AppearanceSettings } from "@/components/settings/AppearanceSettings";
import { AISettings } from "@/components/settings/AISettings";
import { IntegrationSettings } from "@/components/settings/IntegrationSettings";
import { Integration } from "@/types/integration";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const integrations: Integration[] = [
    {
      id: "1",
      name: "Gmail",
      category: "Email",
      status: "connected",
      icon: "mail",
      logo: "/integrations/gmail.svg",
      description: "Connect your Gmail account to receive and send emails directly from Klippi."
    },
    {
      id: "2",
      name: "Slack",
      category: "Communication",
      status: "connected",
      icon: "message-circle",
      logo: "/integrations/slack.svg",
      description: "Receive notifications and interact with Klippi through Slack."
    },
    {
      id: "3",
      name: "Salesforce",
      category: "CRM",
      status: "connected",
      icon: "database",
      logo: "/integrations/salesforce.svg",
      description: "Sync customer data, manage contacts, and track sales opportunities."
    },
    {
      id: "4",
      name: "Zoom",
      category: "Meetings",
      status: "disconnected",
      icon: "video",
      logo: "/integrations/zoom.svg",
      description: "Schedule and join meetings directly from Klippi."
    },
    {
      id: "5",
      name: "Google Calendar",
      category: "Calendar",
      status: "connected",
      icon: "calendar",
      logo: "/integrations/gcal.svg",
      description: "Sync your calendar to schedule meetings and get reminders."
    },
    {
      id: "6",
      name: "Hubspot",
      category: "CRM",
      status: "disconnected",
      icon: "database",
      logo: "/integrations/hubspot.svg",
      description: "Manage contacts, track customer journeys, and analyze marketing performance."
    },
    {
      id: "7",
      name: "Zendesk",
      category: "Support",
      status: "disconnected",
      icon: "help-circle",
      logo: "/integrations/zendesk.svg",
      description: "Track and resolve customer support tickets efficiently."
    },
    {
      id: "8",
      name: "Intercom",
      category: "Support",
      status: "disconnected",
      icon: "message-square",
      logo: "/integrations/intercom.svg",
      description: "Engage with customers through live chat, help articles, and product tours."
    }
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Settings</h1>
        </div>

        <Card className="p-0">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="p-4 md:w-64 md:border-r space-y-1">
                <TabsList className="flex flex-col w-full h-auto gap-1" orientation="vertical">
                  <TabsTrigger
                    className="w-full justify-start px-2 py-1.5 h-auto"
                    value="profile"
                    onClick={() => handleTabChange("profile")}
                    data-state={activeTab === "profile" ? "active" : ""}
                  >
                    Profile
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-full justify-start px-2 py-1.5 h-auto"
                    value="notifications"
                    onClick={() => handleTabChange("notifications")}
                    data-state={activeTab === "notifications" ? "active" : ""}
                  >
                    Notifications
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-full justify-start px-2 py-1.5 h-auto"
                    value="security"
                    onClick={() => handleTabChange("security")}
                    data-state={activeTab === "security" ? "active" : ""}
                  >
                    Security
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-full justify-start px-2 py-1.5 h-auto"
                    value="appearance"
                    onClick={() => handleTabChange("appearance")}
                    data-state={activeTab === "appearance" ? "active" : ""}
                  >
                    Appearance
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-full justify-start px-2 py-1.5 h-auto"
                    value="ai"
                    onClick={() => handleTabChange("ai")}
                    data-state={activeTab === "ai" ? "active" : ""}
                  >
                    AI Settings
                    <Badge className="ml-auto bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">New</Badge>
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-full justify-start px-2 py-1.5 h-auto"
                    value="integrations"
                    onClick={() => handleTabChange("integrations")}
                    data-state={activeTab === "integrations" ? "active" : ""}
                  >
                    Integrations
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="flex-1 p-6">
                <Tabs value={activeTab} onValueChange={handleTabChange}>
                  <TabsContent value="profile">
                    <ProfileSettings />
                  </TabsContent>
                  <TabsContent value="notifications">
                    <NotificationSettings />
                  </TabsContent>
                  <TabsContent value="security">
                    <SecuritySettings />
                  </TabsContent>
                  <TabsContent value="appearance">
                    <AppearanceSettings />
                  </TabsContent>
                  <TabsContent value="ai">
                    <AISettings />
                  </TabsContent>
                  <TabsContent value="integrations">
                    <IntegrationSettings integrations={integrations} />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
