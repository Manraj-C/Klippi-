
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { SettingsSection } from "./SettingsSection";

export const SecuritySettings = () => {
  return (
    <>
      <SettingsSection
        title="Password"
        description="Change your password to keep your account secure"
        className="mb-4"
      >
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
          <div className="pt-2 flex justify-end">
            <Button>Update Password</Button>
          </div>
        </div>
      </SettingsSection>

      <SettingsSection
        title="Two-Factor Authentication"
        description="Add an extra layer of security to your account"
        className="mb-4"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Enable Two-Factor Authentication</div>
              <div className="text-sm text-muted-foreground">
                Secure your account with a second verification step
              </div>
            </div>
            <Switch />
          </div>
          
          <div className="rounded-lg border p-4 bg-muted/30">
            <p className="text-sm text-muted-foreground">
              Two-factor authentication adds an additional layer of security to your account 
              by requiring more than just a password to sign in.
            </p>
          </div>
        </div>
      </SettingsSection>

      <SettingsSection
        title="Active Sessions"
        description="Manage devices that are currently signed in to your account"
      >
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <div className="font-medium">Current Session</div>
                <div className="text-sm text-muted-foreground">
                  Chrome on macOS • San Francisco, CA • Active now
                </div>
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Current
              </span>
            </div>
          </div>
          
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <div className="font-medium">Mobile App</div>
                <div className="text-sm text-muted-foreground">
                  iPhone • New York, NY • Last active: 2 hours ago
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-destructive">Sign Out</Button>
            </div>
          </div>
          
          <div className="pt-2 flex justify-end">
            <Button variant="destructive">Sign Out All Other Devices</Button>
          </div>
        </div>
      </SettingsSection>
    </>
  );
};
