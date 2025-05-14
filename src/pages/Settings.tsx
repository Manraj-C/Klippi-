
import { SettingsContainer } from "@/components/settings/SettingsContainer";
import { SettingsHeader } from "@/components/settings/SettingsHeader";
import { GetStartedButton } from "@/components/onboarding/GetStartedButton";
import { SettingsDataProvider } from "@/components/settings/SettingsDataProvider";
import { SettingsContent } from "@/components/settings/SettingsContent";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <SettingsHeader title="Settings" />

        <SettingsContainer>
          <SettingsDataProvider>
            <SettingsContent />
          </SettingsDataProvider>
        </SettingsContainer>
      </div>
      <GetStartedButton />
    </DashboardLayout>
  );
};

export default Settings;
