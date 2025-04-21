
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { InboxAnalytics } from "@/components/inbox/InboxAnalytics";
import { InboxMessages } from "@/components/inbox/InboxMessages";
import { ClientDetailsPanel } from "@/components/inbox/ClientDetailsPanel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Inbox as InboxIcon, RefreshCcw, MailPlus, Settings } from "lucide-react";

const Inbox = () => {
  const [showClientDetails, setShowClientDetails] = useState(true);
  const [autoReplyEnabled, setAutoReplyEnabled] = useState(true);
  const [selectedClientId, setSelectedClientId] = useState(1);

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <InboxIcon className="h-6 w-6" />
            <h1 className="text-3xl font-bold">Inbox</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Automate Replies</span>
              <Switch 
                checked={autoReplyEnabled} 
                onCheckedChange={setAutoReplyEnabled} 
                className="data-[state=checked]:bg-green-500"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <RefreshCcw className="mr-2 h-4 w-4" />
                Refresh
              </Button>
              <Button variant="outline" size="sm">
                <MailPlus className="mr-2 h-4 w-4" />
                Compose
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="messages" className="w-full">
          <TabsList>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="drafts">Smart Drafts</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <div className="mt-6 flex gap-4">
            <div className={`flex-1 transition-all ${showClientDetails ? 'max-w-[calc(100%-320px)]' : 'max-w-full'}`}>
              <TabsContent value="messages">
                <InboxMessages 
                  showClientDetails={showClientDetails} 
                  setShowClientDetails={setShowClientDetails}
                  setSelectedClientId={setSelectedClientId}
                  autoReplyEnabled={autoReplyEnabled}
                />
              </TabsContent>
              
              <TabsContent value="drafts">
                <div className="bg-muted/50 rounded-lg p-8 text-center">
                  <h3 className="text-lg font-medium mb-2">Smart Drafts</h3>
                  <p className="text-muted-foreground mb-4">
                    Klippi has created 3 draft responses based on recent client communications.
                  </p>
                  <Button>View Smart Drafts</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="analytics">
                <InboxAnalytics />
              </TabsContent>
            </div>
            
            {showClientDetails && (
              <ClientDetailsPanel 
                clientId={selectedClientId}
                onClose={() => setShowClientDetails(false)} 
              />
            )}
          </div>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Inbox;
