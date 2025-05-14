
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SettingsTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
  children: React.ReactNode;
}

export const SettingsTabs = ({ activeTab, onTabChange, children }: SettingsTabsProps) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-4 md:w-64 md:border-r space-y-1">
        <Tabs value={activeTab} onValueChange={onTabChange} orientation="vertical">
          <TabsList className="flex flex-col w-full h-auto gap-1">
            <TabsTrigger
              className="w-full justify-start px-2 py-1.5 h-auto"
              value="profile"
              data-state={activeTab === "profile" ? "active" : ""}
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              className="w-full justify-start px-2 py-1.5 h-auto"
              value="notifications"
              data-state={activeTab === "notifications" ? "active" : ""}
            >
              Notifications
            </TabsTrigger>
            <TabsTrigger
              className="w-full justify-start px-2 py-1.5 h-auto"
              value="security"
              data-state={activeTab === "security" ? "active" : ""}
            >
              Security
            </TabsTrigger>
            <TabsTrigger
              className="w-full justify-start px-2 py-1.5 h-auto"
              value="appearance"
              data-state={activeTab === "appearance" ? "active" : ""}
            >
              Appearance
            </TabsTrigger>
            <TabsTrigger
              className="w-full justify-start px-2 py-1.5 h-auto"
              value="ai"
              data-state={activeTab === "ai" ? "active" : ""}
            >
              AI Settings
              <Badge className="ml-auto bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">New</Badge>
            </TabsTrigger>
            <TabsTrigger
              className="w-full justify-start px-2 py-1.5 h-auto"
              value="integrations"
              data-state={activeTab === "integrations" ? "active" : ""}
            >
              Integrations
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex-1 p-6">
        <Tabs value={activeTab} onValueChange={onTabChange}>
          {children}
        </Tabs>
      </div>
    </div>
  );
};
