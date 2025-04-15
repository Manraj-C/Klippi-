
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { InboxAnalytics } from "@/components/inbox/InboxAnalytics";
import { InboxMessages } from "@/components/inbox/InboxMessages";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Inbox = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Inbox</h1>
        
        <Tabs defaultValue="messages" className="w-full">
          <TabsList>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="messages" className="mt-6">
            <InboxMessages />
          </TabsContent>
          
          <TabsContent value="analytics" className="mt-6">
            <InboxAnalytics />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Inbox;
