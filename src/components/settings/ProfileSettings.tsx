
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SettingsSection } from "./SettingsSection";
import { ImageIcon, Save } from "lucide-react";

interface ProfileSettingsProps {
  user: {
    name: string;
    email: string;
    role: string;
    company: string;
    avatar: string | null;
    timezone: string;
  };
}

export const ProfileSettings = ({ user }: ProfileSettingsProps) => {
  return (
    <SettingsSection
      title="Profile Information"
      description="Update your account details and profile information"
    >
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-full md:w-32 flex flex-col items-center gap-2">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 flex items-center justify-center">
            {user.avatar ? (
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-primary text-4xl font-bold">
                {user.name.charAt(0)}
              </span>
            )}
          </div>
          <Button variant="outline" size="sm" className="w-full gap-2">
            <ImageIcon className="h-4 w-4" />
            Change
          </Button>
        </div>
        <div className="flex-1 grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" defaultValue={user.name} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" defaultValue={user.email} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="role">Job Role</Label>
              <Input id="role" defaultValue={user.role} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" defaultValue={user.company} />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="timezone">Time Zone</Label>
            <select 
              id="timezone" 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              defaultValue={user.timezone}
            >
              <option value="America/New_York">Eastern Time (US & Canada)</option>
              <option value="America/Chicago">Central Time (US & Canada)</option>
              <option value="America/Denver">Mountain Time (US & Canada)</option>
              <option value="America/Los_Angeles">Pacific Time (US & Canada)</option>
              <option value="Europe/London">London</option>
              <option value="Europe/Paris">Paris</option>
              <option value="Asia/Tokyo">Tokyo</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button className="gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </SettingsSection>
  );
};
