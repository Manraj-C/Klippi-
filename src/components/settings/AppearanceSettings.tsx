
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { SettingsSection } from "./SettingsSection";

export const AppearanceSettings = () => {
  return (
    <>
      <SettingsSection
        title="Theme"
        description="Customize the look and feel of the application"
        className="mb-4"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 flex flex-col items-center gap-2 bg-background cursor-pointer ring-2 ring-primary">
              <div className="h-20 w-full bg-background border rounded-md flex items-center justify-center">
                <div className="w-10 h-10 bg-primary rounded-md"></div>
              </div>
              <span className="text-sm font-medium">Light</span>
            </div>
            <div className="border rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer">
              <div className="h-20 w-full bg-zinc-950 border rounded-md flex items-center justify-center">
                <div className="w-10 h-10 bg-primary rounded-md"></div>
              </div>
              <span className="text-sm font-medium">Dark</span>
            </div>
            <div className="border rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer">
              <div className="h-20 w-full bg-background border rounded-md flex items-center justify-center">
                <div className="w-10 h-10 bg-primary rounded-md"></div>
                <span className="text-xs">System</span>
              </div>
              <span className="text-sm font-medium">System</span>
            </div>
          </div>
        </div>
      </SettingsSection>

      <SettingsSection
        title="Dashboard Layout"
        description="Customize your dashboard view"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Compact View</div>
              <div className="text-sm text-muted-foreground">Show more items in a condensed view</div>
            </div>
            <Switch />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Show Recent Activities</div>
              <div className="text-sm text-muted-foreground">Display recent activities on dashboard</div>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Show Analytics</div>
              <div className="text-sm text-muted-foreground">Display analytics charts on dashboard</div>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="pt-2 flex justify-end">
            <Button>Save Layout Preferences</Button>
          </div>
        </div>
      </SettingsSection>
    </>
  );
};
