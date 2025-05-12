
import React from "react";
import { User, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IndividualFeaturesTab } from "./individual-features-tab";
import { TeamFeaturesTab } from "./team-features-tab";

export const FeaturesTabs = () => {
  return <Tabs defaultValue="individual" className="max-w-5xl mx-auto mb-16">
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
        <TabsTrigger value="individual">
          <User className="h-4 w-4 mr-2" />
          For Individuals
        </TabsTrigger>
        <TabsTrigger value="team">
          <Users className="h-4 w-4 mr-2" />
          For Teams
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="individual" className="mt-0">
        <IndividualFeaturesTab />
      </TabsContent>
      
      <TabsContent value="team" className="mt-0">
        <TeamFeaturesTab />
      </TabsContent>
    </Tabs>;
};
