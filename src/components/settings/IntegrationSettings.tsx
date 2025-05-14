
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { SettingsSection } from "./SettingsSection";
import { Integration } from "@/types/integration";
import { IntegrationLogo } from "@/components/integrations/IntegrationLogo";
import { usePreloadIntegrationLogos } from "@/utils/image-utils";

interface IntegrationSettingsProps {
  integrations: Integration[];
}

export const IntegrationSettings = ({ integrations }: IntegrationSettingsProps) => {
  // Preload all integration logos to avoid loading issues
  usePreloadIntegrationLogos();
  
  const renderIntegrationSection = (category: string) => {
    const categoryIntegrations = integrations.filter(
      integration => integration.category === category
    );

    if (categoryIntegrations.length === 0) return null;

    return (
      <div>
        <h3 className="text-lg font-semibold mb-4">{category}</h3>
        <div className="grid gap-6">
          {categoryIntegrations.map((integration) => (
            <div key={integration.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center text-xl">
                  {integration.logo.startsWith('http') ? (
                    <img 
                      src={integration.logo}
                      alt={`${integration.name} logo`}
                      className="h-6 w-6 object-contain"
                      onError={(e) => {
                        console.log(`Failed to load image for ${integration.name}`);
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.textContent = integration.name.charAt(0).toUpperCase();
                        }
                      }}
                    />
                  ) : (
                    <span>{integration.name.charAt(0).toUpperCase()}</span>
                  )}
                </div>
                <div>
                  <div className="font-medium">{integration.name}</div>
                  <div className="text-sm text-muted-foreground">{integration.description}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-14 sm:ml-0">
                {integration.status === "connected" ? (
                  <>
                    <span className="flex items-center text-xs text-green-600 gap-1">
                      <Check className="h-3 w-3" /> Connected
                    </span>
                    <Button variant="outline" size="sm">Configure</Button>
                    <Button variant="ghost" size="sm">Disconnect</Button>
                  </>
                ) : (
                  <>
                    <span className="flex items-center text-xs text-muted-foreground gap-1">
                      <X className="h-3 w-3" /> Disconnected
                    </span>
                    <Button size="sm">Connect</Button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <SettingsSection
        title="Connected Services"
        description="Supercharge your workflow by connecting Klippi to your tech stack. The more tools you connect, the better Klippi can assist you as your AI CSM companion."
        className="mb-4"
      >
        <div className="space-y-8">
          {renderIntegrationSection("Communications")}
          {renderIntegrationSection("CRM")}
          {renderIntegrationSection("Support")}
          {renderIntegrationSection("Other")}
        </div>
      </SettingsSection>

      <SettingsSection
        title="API Access"
        description="Manage API keys for programmatic access to your data"
      >
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="api-key">API Key</Label>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                id="api-key" 
                value="••••••••••••••••••••••••••••••" 
                readOnly 
                className="font-mono"
              />
              <Button variant="outline" className="sm:w-auto w-full">Copy</Button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <p className="text-sm text-muted-foreground">Last used: Never</p>
              <p className="text-sm text-muted-foreground">Created on: April 10, 2025</p>
            </div>
            <Button variant="destructive" size="sm">Revoke Key</Button>
          </div>
          
          <div className="pt-2 flex justify-end">
            <Button>Generate New API Key</Button>
          </div>
        </div>
      </SettingsSection>
    </>
  );
};

// Import these from another file where needed
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
