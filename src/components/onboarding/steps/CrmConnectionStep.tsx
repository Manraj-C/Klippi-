
import React, { useState } from "react";
import { Database, FileUp, ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CrmConnectionStepProps {
  onNext: () => void;
  onPrevious: () => void;
}

export const CrmConnectionStep: React.FC<CrmConnectionStepProps> = ({ onNext, onPrevious }) => {
  const [selectedTab, setSelectedTab] = useState("crm");
  
  const handleConnect = () => {
    // In a real implementation, this would trigger the appropriate connection flow
    // For now, we'll simulate success and move to the next step
    setTimeout(onNext, 500);
  };

  const handleCsvUpload = () => {
    // In a real implementation, this would open a file picker
    // For now, we'll simulate success and move to the next step
    setTimeout(onNext, 500);
  };
  
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <Database className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-medium mb-2">Connect Your Client Data</h3>
        <p className="text-muted-foreground mb-6">
          Connect Klippi to your book of business so we can help you manage client relationships
          and provide tailored insights for each account.
        </p>
      </div>

      <Tabs
        defaultValue="crm"
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="crm">CRM Integration</TabsTrigger>
          <TabsTrigger value="csv">CSV Upload</TabsTrigger>
        </TabsList>
        
        <TabsContent value="crm">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <Button
                variant="outline"
                onClick={handleConnect}
                className="w-full justify-between"
              >
                <div className="flex items-center">
                  <img
                    src="/integrations/salesforce.svg"
                    alt="Salesforce"
                    className="w-5 h-5 mr-2"
                  />
                  Connect Salesforce
                </div>
                <ExternalLink className="h-4 w-4 opacity-70" />
              </Button>
              
              <Button
                variant="outline"
                onClick={handleConnect}
                className="w-full justify-between"
              >
                <div className="flex items-center">
                  <img
                    src="/integrations/hubspot.svg"
                    alt="Hubspot"
                    className="w-5 h-5 mr-2"
                  />
                  Connect Hubspot
                </div>
                <ExternalLink className="h-4 w-4 opacity-70" />
              </Button>
              
              <Button
                variant="outline"
                onClick={handleConnect}
                className="w-full justify-between"
              >
                <div className="flex items-center">
                  <img
                    src="/integrations/intercom.svg"
                    alt="Intercom"
                    className="w-5 h-5 mr-2"
                  />
                  Connect Intercom
                </div>
                <ExternalLink className="h-4 w-4 opacity-70" />
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="csv">
          <Card className="border-dashed">
            <CardContent className="py-8 flex flex-col items-center justify-center text-center">
              <FileUp className="h-10 w-10 text-muted-foreground mb-4" />
              <h4 className="text-lg font-medium mb-2">Upload Client CSV</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Drag and drop your CSV file or click below to upload
              </p>
              <Button onClick={handleCsvUpload}>
                Upload CSV
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Need a template? <a href="#" className="underline">Download here</a>
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between mt-8">
        <Button variant="ghost" onClick={onPrevious} className="gap-2">
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>
        <Button onClick={onNext}>Skip this step</Button>
      </div>
    </div>
  );
};
