import React from "react";
import { User, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IndividualFeaturesTab } from "./individual-features-tab";
import { TeamFeaturesTab } from "./team-features-tab";
export const FeaturesTabs = () => {
  return <Tabs defaultValue="individual" className="max-w-5xl mx-auto mb-16">
      
      
      
      
      <TabsContent value="team" className="mt-0">
        <TeamFeaturesTab />
      </TabsContent>
    </Tabs>;
};