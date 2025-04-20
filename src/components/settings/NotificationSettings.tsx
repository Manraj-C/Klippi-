
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";
import { SettingsSection } from "./SettingsSection";

export const NotificationSettings = () => {
  return (
    <>
      <SettingsSection
        title="Notification Preferences"
        description="Configure how and when you receive notifications"
        className="mb-4"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="font-medium">Email Notifications</div>
            <div className="space-y-3">
              <NotificationOption
                title="Meeting Reminders"
                description="Receive email reminders before scheduled meetings"
                defaultChecked
              />
              <Separator />
              <NotificationOption
                title="Client Updates"
                description="Receive updates when client information changes"
                defaultChecked
              />
              <Separator />
              <NotificationOption
                title="Risk Alerts"
                description="Receive alerts when new risks are detected"
                defaultChecked
              />
              <Separator />
              <NotificationOption
                title="Task Assignments"
                description="Receive notifications when tasks are assigned to you"
                defaultChecked
              />
              <Separator />
              <NotificationOption
                title="Newsletter & Updates"
                description="Receive news about Klippi features and updates"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="font-medium">In-App Notifications</div>
            <div className="space-y-3">
              <NotificationOption
                title="Messages"
                description="Show notifications for new messages"
                defaultChecked
              />
              <Separator />
              <NotificationOption
                title="Meeting Start"
                description="Show notifications when meetings are about to start"
                defaultChecked
              />
              <Separator />
              <NotificationOption
                title="Task Due Dates"
                description="Show notifications for upcoming due dates"
                defaultChecked
              />
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <Button className="gap-2">
              <Save className="h-4 w-4" />
              Save Preferences
            </Button>
          </div>
        </div>
      </SettingsSection>

      <SettingsSection
        title="Notification Schedule"
        description="Set quiet hours when you don't want to be disturbed"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Enable Quiet Hours</div>
              <div className="text-sm text-muted-foreground">
                Pause notifications during specific times
              </div>
            </div>
            <Switch />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="quiet-start">Start Time</Label>
              <Input 
                id="quiet-start" 
                type="time" 
                defaultValue="22:00" 
                disabled
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="quiet-end">End Time</Label>
              <Input 
                id="quiet-end" 
                type="time" 
                defaultValue="08:00" 
                disabled
              />
            </div>
          </div>
          
          <div className="pt-2 flex justify-end">
            <Button disabled>Save Schedule</Button>
          </div>
        </div>
      </SettingsSection>
    </>
  );
};

interface NotificationOptionProps {
  title: string;
  description: string;
  defaultChecked?: boolean;
}

const NotificationOption = ({ title, description, defaultChecked }: NotificationOptionProps) => (
  <div className="flex items-center justify-between">
    <div>
      <div className="font-medium">{title}</div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </div>
    <Switch defaultChecked={defaultChecked} />
  </div>
);
