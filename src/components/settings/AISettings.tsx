
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { SettingsSection } from "./SettingsSection";

export const AISettings = () => {
  return (
    <>
      <SettingsSection
        title="AI Assistant Preferences"
        description="Customize how Klippi AI assists you"
        className="mb-4"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Enable AI Assistant</div>
              <div className="text-sm text-muted-foreground">Allow Klippi to provide AI-powered assistance</div>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Meeting Summaries</div>
              <div className="text-sm text-muted-foreground">Automatically generate summaries after meetings</div>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Risk Detection</div>
              <div className="text-sm text-muted-foreground">Analyze communications to detect potential risks</div>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Email Drafting</div>
              <div className="text-sm text-muted-foreground">Generate draft responses for client communications</div>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </SettingsSection>
      
      <SettingsSection
        title="Data Usage & Privacy"
        description="Configure how your data is used by our AI systems"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Data Processing Consent</div>
              <div className="text-sm text-muted-foreground">Allow Klippi to process your data for AI features</div>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Improve AI with your data</div>
              <div className="text-sm text-muted-foreground">Allow anonymous data to help improve our models</div>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Data Retention</div>
              <div className="text-sm text-muted-foreground">How long we store your processed data</div>
            </div>
            <select 
              className="w-32 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              defaultValue="90"
            >
              <option value="30">30 days</option>
              <option value="60">60 days</option>
              <option value="90">90 days</option>
              <option value="180">180 days</option>
              <option value="365">1 year</option>
            </select>
          </div>

          <div className="pt-2 flex justify-end">
            <Button>Save Privacy Settings</Button>
          </div>
        </div>
      </SettingsSection>
    </>
  );
};
