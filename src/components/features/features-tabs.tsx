
import React from "react"
import { User, Users } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IndividualFeaturesTab } from "./individual-features-tab"
import { TeamFeaturesTab } from "./team-features-tab"

export const FeaturesTabs = () => {
  return (
    <Tabs defaultValue="individual" className="max-w-5xl mx-auto mb-16">
      <div className="flex justify-center mb-8">
        <TabsList className="grid grid-cols-2 w-full max-w-md">
          <TabsTrigger value="individual" className="px-8 py-3">
            <User className="w-4 h-4 mr-2" />
            For Individual CSMs
          </TabsTrigger>
          <TabsTrigger value="team" className="px-8 py-3">
            <Users className="w-4 h-4 mr-2" />
            For CS Teams
          </TabsTrigger>
        </TabsList>
      </div>
      
      <TabsContent value="individual" className="mt-0">
        <IndividualFeaturesTab />
      </TabsContent>
      
      <TabsContent value="team" className="mt-0">
        <TeamFeaturesTab />
      </TabsContent>
    </Tabs>
  )
}
