
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { FileText, ChevronLeft, PlayCircle, Settings, Download, FileInput, Sparkles } from "lucide-react";

const AIFlowDetail = () => {
  const [webhookUrl, setWebhookUrl] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  
  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="rounded-full" asChild>
            <a href="/dashboard/ai-flows">
              <ChevronLeft className="w-5 h-5" />
              <span>Back to Flows</span>
            </a>
          </Button>
        </div>

        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">CSM QBR Prep</h1>
              <p className="text-muted-foreground">
                Automatically prepare quarterly business reviews for your clients.
              </p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-1">
              <Settings className="w-4 h-4" />
              Configure
            </Button>
            <Button className="flex items-center gap-1" onClick={handleRun} disabled={isRunning}>
              {isRunning ? (
                <>
                  <div className="animate-spin w-4 h-4 border-2 border-t-transparent border-white rounded-full" />
                  Running...
                </>
              ) : (
                <>
                  <PlayCircle className="w-4 h-4" />
                  Run This Flow
                </>
              )}
            </Button>
          </div>
        </div>

        <Tabs defaultValue="setup">
          <TabsList>
            <TabsTrigger value="setup">Setup</TabsTrigger>
            <TabsTrigger value="history">Run History</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="setup" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Client Selection</CardTitle>
                  <CardDescription>
                    Select which client you want to prepare a QBR for.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Client
                      </label>
                      <select className="w-full p-2 border rounded-md">
                        <option>Acme Corp</option>
                        <option>Globex Corporation</option>
                        <option>Initech Inc</option>
                        <option>Stark Industries</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Time Period
                      </label>
                      <select className="w-full p-2 border rounded-md">
                        <option>Q1 2025</option>
                        <option>Q4 2024</option>
                        <option>Q3 2024</option>
                        <option>Q2 2024</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Data Sources</CardTitle>
                  <CardDescription>
                    Connect your data sources to enhance the QBR.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                          <FileInput className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium">Import Usage Data</span>
                      </div>
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium">AI Insights</span>
                      </div>
                      <Button variant="outline" size="sm" className="text-green-600 bg-green-50">Connected</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Zapier Integration (Optional)</CardTitle>
                  <CardDescription>
                    Connect this flow to other applications using Zapier.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <label className="text-sm font-medium mb-1 block">
                      Zapier Webhook URL
                    </label>
                    <Input 
                      placeholder="https://hooks.zapier.com/hooks/catch/..." 
                      value={webhookUrl}
                      onChange={(e) => setWebhookUrl(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Enter your Zapier webhook URL to send the QBR data to other applications.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Previous Runs</CardTitle>
                <CardDescription>
                  History of all the times this flow has been executed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: "April 12, 2025", client: "Acme Corp", status: "Completed" },
                    { date: "April 2, 2025", client: "Globex Corporation", status: "Completed" },
                    { date: "March 15, 2025", client: "Initech Inc", status: "Failed" }
                  ].map((run, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-md">
                      <div>
                        <div className="font-medium">{run.client}</div>
                        <div className="text-sm text-muted-foreground">{run.date}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm px-2 py-1 rounded-full ${
                          run.status === "Completed" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}>
                          {run.status}
                        </span>
                        <Button variant="outline" size="sm" className="h-8">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Flow Settings</CardTitle>
                <CardDescription>
                  Customize how this flow operates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Output Format
                    </label>
                    <select className="w-full p-2 border rounded-md">
                      <option>PowerPoint (PPTX)</option>
                      <option>PDF Document</option>
                      <option>Google Slides</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      AI Model
                    </label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Klippi AI (Recommended)</option>
                      <option>Standard</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Automatic Scheduling</p>
                      <p className="text-sm text-muted-foreground">
                        Automatically run this flow before quarterly meetings
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default AIFlowDetail;
