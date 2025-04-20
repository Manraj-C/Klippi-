import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  User, Mail, Bell, Lock, Laptop, Bot, Plug, BellOff, Check, X,
  Save, Image as ImageIcon
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const isMobile = useIsMobile();
  
  // Mock user data
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "Customer Success Manager",
    company: "Klippi AI",
    avatar: null,
    timezone: "America/New_York"
  };

  // Mock integration data
  const integrations = [
    {
      id: "gmail",
      name: "Gmail",
      category: "Communications",
      status: "connected",
      icon: "📧",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
      description: "Sync your emails and let Klippi help draft responses and identify risks."
    },
    {
      id: "slack",
      name: "Slack",
      category: "Communications",
      status: "connected",
      icon: "💬",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
      description: "Get AI-powered insights and alerts right in your Slack channels."
    },
    {
      id: "zoom",
      name: "Zoom",
      category: "Communications",
      status: "connected",
      icon: "🎥",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Zoom_Video_Communications_Logo.svg",
      description: "Let Klippi join your meetings to take notes and identify action items."
    },
    {
      id: "gainsight",
      name: "Gainsight",
      category: "CRM",
      status: "connected",
      icon: "📈",
      logo: "https://www.gainsight.com/wp-content/uploads/2020/07/gainsight_primary_logo_horizontal.svg",
      description: "Sync customer health scores and get AI-powered retention insights."
    },
    {
      id: "salesforce",
      name: "Salesforce",
      category: "CRM",
      status: "connected",
      icon: "☁️",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
      description: "Keep your CRM up to date with AI-generated meeting summaries and tasks."
    },
    {
      id: "hubspot",
      name: "HubSpot",
      category: "CRM",
      status: "disconnected",
      icon: "🔷",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/HubSpot_Logo.svg",
      description: "Sync contacts and get AI-powered relationship insights."
    },
    {
      id: "csv_upload",
      name: "CSV Upload",
      category: "CRM",
      status: "disconnected",
      icon: "📄",
      logo: "/placeholder.svg",
      description: "Upload your customer data directly via CSV."
    },
    {
      id: "zendesk",
      name: "Zendesk",
      category: "Support",
      status: "disconnected",
      icon: "🎫",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Zendesk_logo.svg",
      description: "Monitor support tickets and get AI-powered customer satisfaction insights."
    },
    {
      id: "intercom",
      name: "Intercom",
      category: "Support",
      status: "disconnected",
      icon: "💬",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/Intercom_logo.svg",
      description: "Get real-time analysis of customer conversations and sentiment."
    },
    {
      id: "google_drive",
      name: "Google Drive",
      category: "Other",
      status: "connected",
      icon: "📁",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg",
      description: "Store and analyze your documents with AI-powered insights."
    },
    {
      id: "google_calendar",
      name: "Google Calendar",
      category: "Other",
      status: "connected",
      icon: "📅",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
      description: "Let Klippi manage your calendar and prepare for upcoming meetings."
    }
  ];

  return (
    <DashboardLayout>
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Settings</h1>

        <Tabs 
          orientation={isMobile ? "horizontal" : "vertical"}
          defaultValue="profile" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="space-y-4 md:space-y-0"
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="w-full md:w-[200px] flex-shrink-0">
              <TabsList className={`
                w-full flex ${isMobile ? 'flex-row overflow-x-auto' : 'flex-col'} 
                h-auto justify-start bg-transparent gap-2 p-1
              `}>
                <TabsTrigger 
                  value="profile" 
                  className="w-full flex justify-start gap-2 data-[state=active]:bg-muted"
                >
                  <User className="h-4 w-4" />
                  <span className="truncate">Profile</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="notifications" 
                  className="w-full flex justify-start gap-2 data-[state=active]:bg-muted"
                >
                  <Bell className="h-4 w-4" />
                  <span className="truncate">Notifications</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="security" 
                  className="w-full flex justify-start gap-2 data-[state=active]:bg-muted"
                >
                  <Lock className="h-4 w-4" />
                  <span className="truncate">Security</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="appearance" 
                  className="w-full flex justify-start gap-2 data-[state=active]:bg-muted"
                >
                  <Laptop className="h-4 w-4" />
                  <span className="truncate">Appearance</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="ai" 
                  className="w-full flex justify-start gap-2 data-[state=active]:bg-muted"
                >
                  <Bot className="h-4 w-4" />
                  <span className="truncate">AI Settings</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="integrations" 
                  className="w-full flex justify-start gap-2 data-[state=active]:bg-muted"
                >
                  <Plug className="h-4 w-4" />
                  <span className="truncate">Integrations</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="flex-1 space-y-4">
              {/* Profile Settings */}
              <TabsContent value="profile" className="mt-0">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your account details and profile information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                      <div className="w-full md:w-32 flex flex-col items-center gap-2">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 flex items-center justify-center">
                          {user.avatar ? (
                            <img 
                              src={user.avatar} 
                              alt={user.name} 
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : (
                            <span className="text-primary text-4xl font-bold">
                              {user.name.charAt(0)}
                            </span>
                          )}
                        </div>
                        <Button variant="outline" size="sm" className="w-full gap-2">
                          <ImageIcon className="h-4 w-4" />
                          Change
                        </Button>
                      </div>
                      <div className="flex-1 grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" defaultValue={user.name} />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" defaultValue={user.email} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="role">Job Role</Label>
                            <Input id="role" defaultValue={user.role} />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="company">Company</Label>
                            <Input id="company" defaultValue={user.company} />
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="timezone">Time Zone</Label>
                          <select 
                            id="timezone" 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            defaultValue={user.timezone}
                          >
                            <option value="America/New_York">Eastern Time (US & Canada)</option>
                            <option value="America/Chicago">Central Time (US & Canada)</option>
                            <option value="America/Denver">Mountain Time (US & Canada)</option>
                            <option value="America/Los_Angeles">Pacific Time (US & Canada)</option>
                            <option value="Europe/London">London</option>
                            <option value="Europe/Paris">Paris</option>
                            <option value="Asia/Tokyo">Tokyo</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button className="gap-2">
                        <Save className="h-4 w-4" />
                        Save Changes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notifications Settings */}
              <TabsContent value="notifications" className="mt-0">
                <Card className="mb-4">
                  <CardHeader className="pb-3">
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Configure how and when you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="font-medium">Email Notifications</div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Meeting Reminders</div>
                            <div className="text-sm text-muted-foreground">Receive email reminders before scheduled meetings</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Client Updates</div>
                            <div className="text-sm text-muted-foreground">Receive updates when client information changes</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Risk Alerts</div>
                            <div className="text-sm text-muted-foreground">Receive alerts when new risks are detected</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Task Assignments</div>
                            <div className="text-sm text-muted-foreground">Receive notifications when tasks are assigned to you</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Newsletter & Updates</div>
                            <div className="text-sm text-muted-foreground">Receive news about Klippi features and updates</div>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="font-medium">In-App Notifications</div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Messages</div>
                            <div className="text-sm text-muted-foreground">Show notifications for new messages</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Meeting Start</div>
                            <div className="text-sm text-muted-foreground">Show notifications when meetings are about to start</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Task Due Dates</div>
                            <div className="text-sm text-muted-foreground">Show notifications for upcoming due dates</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <Button className="gap-2">
                        <Save className="h-4 w-4" />
                        Save Preferences
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Notification Schedule</CardTitle>
                    <CardDescription>Set quiet hours when you don't want to be disturbed</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Enable Quiet Hours</div>
                          <div className="text-sm text-muted-foreground">Pause notifications during specific times</div>
                        </div>
                        <Switch />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="quiet-start">Start Time</Label>
                          <Input 
                            id="quiet-start" 
                            type="time" 
                            defaultValue="22:00" 
                            disabled
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="quiet-end">End Time</Label>
                          <Input 
                            id="quiet-end" 
                            type="time" 
                            defaultValue="08:00" 
                            disabled
                          />
                        </div>
                      </div>
                      
                      <div className="pt-2 flex justify-end">
                        <Button disabled>Save Schedule</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Settings */}
              <TabsContent value="security" className="mt-0">
                <Card className="mb-4">
                  <CardHeader className="pb-3">
                    <CardTitle>Password</CardTitle>
                    <CardDescription>Change your password to keep your account secure</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <div className="pt-2 flex justify-end">
                      <Button>Update Password</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-4">
                  <CardHeader className="pb-3">
                    <CardTitle>Two-Factor Authentication</CardTitle>
                    <CardDescription>Add an extra layer of security to your account</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Enable Two-Factor Authentication</div>
                          <div className="text-sm text-muted-foreground">
                            Secure your account with a second verification step
                          </div>
                        </div>
                        <Switch />
                      </div>
                      
                      <div className="rounded-lg border p-4 bg-muted/30">
                        <p className="text-sm text-muted-foreground">
                          Two-factor authentication adds an additional layer of security to your account 
                          by requiring more than just a password to sign in.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Active Sessions</CardTitle>
                    <CardDescription>Manage devices that are currently signed in to your account</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div>
                            <div className="font-medium">Current Session</div>
                            <div className="text-sm text-muted-foreground">
                              Chrome on macOS • San Francisco, CA • Active now
                            </div>
                          </div>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            Current
                          </span>
                        </div>
                      </div>
                      
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div>
                            <div className="font-medium">Mobile App</div>
                            <div className="text-sm text-muted-foreground">
                              iPhone • New York, NY • Last active: 2 hours ago
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="text-destructive">Sign Out</Button>
                        </div>
                      </div>
                      
                      <div className="pt-2 flex justify-end">
                        <Button variant="destructive">Sign Out All Other Devices</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Appearance Settings */}
              <TabsContent value="appearance" className="mt-0">
                <Card className="mb-4">
                  <CardHeader className="pb-3">
                    <CardTitle>Theme</CardTitle>
                    <CardDescription>Customize the look and feel of the application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4 flex flex-col items-center gap-2 bg-background cursor-pointer ring-2 ring-primary">
                          <div className="h-20 w-full bg-background border rounded-md flex items-center justify-center">
                            <div className="w-10 h-10 bg-primary rounded-md"></div>
                          </div>
                          <span className="text-sm font-medium">Light</span>
                        </div>
                        <div className="border rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer">
                          <div className="h-20 w-full bg-zinc-950 border rounded-md flex items-center justify-center">
                            <div className="w-10 h-10 bg-primary rounded-md"></div>
                          </div>
                          <span className="text-sm font-medium">Dark</span>
                        </div>
                        <div className="border rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer">
                          <div className="h-20 w-full bg-background border rounded-md flex items-center justify-center">
                            <div className="w-10 h-10 bg-primary rounded-md"></div>
                            <span className="text-xs">System</span>
                          </div>
                          <span className="text-sm font-medium">System</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Dashboard Layout</CardTitle>
                    <CardDescription>Customize your dashboard view</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Compact View</div>
                          <div className="text-sm text-muted-foreground">Show more items in a condensed view</div>
                        </div>
                        <Switch />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Show Recent Activities</div>
                          <div className="text-sm text-muted-foreground">Display recent activities on dashboard</div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Show Analytics</div>
                          <div className="text-sm text-muted-foreground">Display analytics charts on dashboard</div>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="pt-2 flex justify-end">
                        <Button>Save Layout Preferences</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* AI Settings */}
              <TabsContent value="ai" className="mt-0">
                <Card className="mb-4">
                  <CardHeader className="pb-3">
                    <CardTitle>AI Assistant Preferences</CardTitle>
                    <CardDescription>Customize how Klippi AI assists you</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Enable AI Assistant</div>
                          <div className="text-sm text-muted-foreground">Allow Klippi to provide AI-powered assistance</div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Meeting Summaries</div>
                          <div className="text-sm text-muted-foreground">Automatically generate summaries after meetings</div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Risk Detection</div>
                          <div className="text-sm text-muted-foreground">Analyze communications to detect potential risks</div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Email Drafting</div>
                          <div className="text-sm text-muted-foreground">Generate draft responses for client communications</div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Data Usage & Privacy</CardTitle>
                    <CardDescription>Configure how your data is used by our AI systems</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Data Processing Consent</div>
                        <div className="text-sm text-muted-foreground">Allow Klippi to process your data for AI features</div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Improve AI with your data</div>
                        <div className="text-sm text-muted-foreground">Allow anonymous data to help improve our models</div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Data Retention</div>
                        <div className="text-sm text-muted-foreground">How long we store your processed data</div>
                      </div>
                      <select 
                        className="w-32 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        defaultValue="90"
                      >
                        <option value="30">30 days</option>
                        <option value="60">60 days</option>
                        <option value="90">90 days</option>
                        <option value="180">180 days</option>
                        <option value="365">1 year</option>
                      </select>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <Button>Save Privacy Settings</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Integrations Settings */}
              <TabsContent value="integrations" className="mt-0">
                <Card className="mb-4">
                  <CardHeader className="pb-3">
                    <CardTitle>Connected Services</CardTitle>
                    <CardDescription>
                      Supercharge your workflow by connecting Klippi to your tech stack. The more tools you connect, 
                      the better Klippi can assist you as your AI CSM companion.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {/* Communications Section */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Communications</h3>
                        <div className="grid gap-6">
                          {integrations
                            .filter(integration => integration.category === "Communications")
                            .map((integration) => (
                              <div key={integration.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                  <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center text-xl">
                                    {integration.icon}
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

                      {/* CRM Section */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">CRM & Customer Data</h3>
                        <div className="grid gap-6">
                          {integrations
                            .filter(integration => integration.category === "CRM")
                            .map((integration) => (
                              <div key={integration.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                  <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center text-xl">
                                    {integration.icon}
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

                      {/* Support Section */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
                        <div className="grid gap-6">
                          {integrations
                            .filter(integration => integration.category === "Support")
                            .map((integration) => (
                              <div key={integration.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                  <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center text-xl">
                                    {integration.icon}
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

                      {/* Other Tools Section */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Other Tools</h3>
                        <div className="grid gap-6">
                          {integrations
                            .filter(integration => integration.category === "Other")
                            .map((integration) => (
                              <div key={integration.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                  <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center text-xl">
                                    {integration.icon}
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
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>API Access</CardTitle>
                    <CardDescription>Manage API keys for programmatic access to your data</CardDescription>
                  </CardHeader>
                  <CardContent>
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
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
