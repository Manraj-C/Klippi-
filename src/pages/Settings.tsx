
import { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import { ProfileSettings } from "@/components/settings/ProfileSettings";
import { NotificationSettings } from "@/components/settings/NotificationSettings";
import { SecuritySettings } from "@/components/settings/SecuritySettings";
import { AppearanceSettings } from "@/components/settings/AppearanceSettings";
import { AISettings } from "@/components/settings/AISettings";
import { IntegrationSettings } from "@/components/settings/IntegrationSettings";
import { Integration } from "@/types/integration";
import { GetStartedButton } from "@/components/onboarding/GetStartedButton";
import { usePreloadIntegrationLogos } from "@/utils/image-utils";
import { SettingsTabs } from "@/components/settings/SettingsTabs";
import { SettingsContainer } from "@/components/settings/SettingsContainer";
import { SettingsHeader } from "@/components/settings/SettingsHeader";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  
  // Preload all integration logos when the settings page loads
  usePreloadIntegrationLogos();

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  // Mock user data
  const userData = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    role: "Customer Success Manager",
    company: "TechCorp Inc.",
    avatar: null,
    timezone: "America/New_York"
  };

  const integrations: Integration[] = [
    {
      id: "1",
      name: "Gmail",
      category: "Email",
      status: "connected",
      icon: "mail",
      logo: "gmail",
      description: "Connect your Gmail account to receive and send emails directly from Klippi."
    },
    {
      id: "2",
      name: "Slack",
      category: "Communication",
      status: "connected",
      icon: "message-circle",
      logo: "slack",
      description: "Receive notifications and interact with Klippi through Slack."
    },
    {
      id: "3",
      name: "Salesforce",
      category: "CRM",
      status: "connected",
      icon: "database",
      logo: "salesforce",
      description: "Sync customer data, manage contacts, and track sales opportunities."
    },
    {
      id: "4",
      name: "Zoom",
      category: "Meetings",
      status: "disconnected",
      icon: "video",
      logo: "zoom",
      description: "Schedule and join meetings directly from Klippi."
    },
    {
      id: "5",
      name: "Google Calendar",
      category: "Calendar",
      status: "connected",
      icon: "calendar",
      logo: "google-calendar",
      description: "Sync your calendar to schedule meetings and get reminders."
    },
    {
      id: "6",
      name: "Hubspot",
      category: "CRM",
      status: "disconnected",
      icon: "database",
      logo: "hubspot",
      description: "Manage contacts, track customer journeys, and analyze marketing performance."
    },
    {
      id: "7",
      name: "Zendesk",
      category: "Support",
      status: "disconnected",
      icon: "help-circle",
      logo: "zendesk",
      description: "Track and resolve customer support tickets efficiently."
    },
    {
      id: "8",
      name: "Intercom",
      category: "Support",
      status: "disconnected",
      icon: "message-square",
      logo: "intercom",
      description: "Engage with customers through live chat, help articles, and product tours."
    }
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <SettingsHeader title="Settings" />

        <SettingsContainer>
          <SettingsTabs activeTab={activeTab} onTabChange={handleTabChange}>
            <TabsContent value="profile">
              <ProfileSettings user={userData} />
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
          </SettingsTabs>
        </SettingsContainer>
      </div>
      <GetStartedButton />
    </DashboardLayout>
  );
};

export default Settings;
