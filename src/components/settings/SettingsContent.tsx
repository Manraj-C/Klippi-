
import { TabsContent } from "@/components/ui/tabs";
import { ProfileSettings } from "@/components/settings/ProfileSettings";
import { NotificationSettings } from "@/components/settings/NotificationSettings";
import { SecuritySettings } from "@/components/settings/SecuritySettings";
import { AppearanceSettings } from "@/components/settings/AppearanceSettings";
import { AISettings } from "@/components/settings/AISettings";
import { IntegrationSettings } from "@/components/settings/IntegrationSettings";
import { SettingsTabs } from "@/components/settings/SettingsTabs";
import { useSettings } from "@/components/settings/SettingsDataProvider";

export const SettingsContent = () => {
  const { activeTab, setActiveTab, userData, integrations } = useSettings();

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
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
  );
};
