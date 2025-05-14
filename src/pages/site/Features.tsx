
import React from "react";
import SiteLayout from "@/components/site/SiteLayout";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Calendar, UserCircle } from "lucide-react";

const Features = () => {
  return (
    <SiteLayout>
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Powerful Features</h1>
          <p className="text-lg text-muted-foreground">
            Discover how Klippi's features can transform your customer success operations.
          </p>
        </div>
        
        <Tabs defaultValue="ai-assistant" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="ai-assistant" className="flex items-center gap-2">
              <Bot className="h-4 w-4" />
              <span>AI Assistant</span>
            </TabsTrigger>
            <TabsTrigger value="meeting-support" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Meeting Support</span>
            </TabsTrigger>
            <TabsTrigger value="client-management" className="flex items-center gap-2">
              <UserCircle className="h-4 w-4" />
              <span>Client Management</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="ai-assistant" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">AI-Powered Customer Success</h2>
                <p className="mb-4 text-muted-foreground">
                  Transform your customer interactions with Klippi's AI assistant that helps you draft emails, prepare for meetings, and surface relevant insights.
                </p>
                <Link to="/features/ai-assistant" className="text-primary hover:underline">
                  Learn more about AI features
                </Link>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span>Smart email drafting based on context</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span>Meeting preparation with relevant data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span>Automated meeting summarization</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="meeting-support" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Streamlined Meeting Workflows</h2>
                <p className="mb-4 text-muted-foreground">
                  Never miss important details with comprehensive meeting support that helps you prepare, conduct, and follow up on customer meetings.
                </p>
                <Link to="/features/meeting-support" className="text-primary hover:underline">
                  Learn more about meeting features
                </Link>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span>Automated meeting notes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span>Action item extraction and tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span>Calendar integration and preparation</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="client-management" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Complete Client Management</h2>
                <p className="mb-4 text-muted-foreground">
                  Manage your entire client portfolio with powerful tools to track health, monitor usage, and identify opportunities.
                </p>
                <Link to="/features/client-management" className="text-primary hover:underline">
                  Learn more about client management
                </Link>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span>Customer health scoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span>Usage and engagement analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span>Communication history and timeline</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SiteLayout>
  );
};

export default Features;
