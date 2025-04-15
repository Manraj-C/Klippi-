import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        
        <Tabs defaultValue="overview">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Welcome to your Customer Success dashboard!</h2>
              <p>This is the main dashboard view. Navigate using the sidebar to access different sections.</p>
            </CardContent>
          </Card>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
