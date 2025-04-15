
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Users,
  DollarSign,
  Activity,
  AlertTriangle,
  Mail,
  Clock,
  CalendarClock,
  ArrowUpRight,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Sample data for charts
const clientActivityData = [
  { name: "Mon", active: 65, inactive: 35 },
  { name: "Tue", active: 70, inactive: 30 },
  { name: "Wed", active: 80, inactive: 20 },
  { name: "Thu", active: 75, inactive: 25 },
  { name: "Fri", active: 60, inactive: 40 },
  { name: "Sat", active: 45, inactive: 55 },
  { name: "Sun", active: 40, inactive: 60 },
];

const clientRiskData = [
  { name: "Low Risk", value: 65, color: "#4ADE80" },
  { name: "Medium Risk", value: 25, color: "#FACC15" },
  { name: "High Risk", value: 10, color: "#F87171" },
];

const responseTimeData = [
  { name: "Week 1", time: 16 },
  { name: "Week 2", time: 12 },
  { name: "Week 3", time: 8 },
  { name: "Week 4", time: 6 },
];

const Dashboard = () => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">CSM Dashboard</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Auto refreshes every 60s</span>
            <Button variant="outline" size="icon" onClick={handleRefresh} className={cn(refreshing && "animate-spin")}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <div className="flex justify-between">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="clients">Clients</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="overview" className="space-y-4">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">142</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-green-500 inline-flex items-center">
                      +6% <ArrowUpRight className="h-3 w-3" />
                    </span>{" "}
                    from last month
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total ARR</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$1.42M</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-green-500 inline-flex items-center">
                      +12.5% <ArrowUpRight className="h-3 w-3" />
                    </span>{" "}
                    from last quarter
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">26m 50s</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-green-500 inline-flex items-center">
                      -15% <ArrowUpRight className="h-3 w-3" />
                    </span>{" "}
                    improved from last week
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Emails Drafted</CardTitle>
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">127</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-gray-500">
                      89% sent, 11% pending
                    </span>
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Client Risk */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Client Risk Distribution</CardTitle>
                  <CardDescription>AI generated risk signals based on client data</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <ChartContainer className="h-[240px]" config={{
                    "low": { color: "#4ADE80" },
                    "medium": { color: "#FACC15" },
                    "high": { color: "#F87171" },
                  }}>
                    <PieChart>
                      <Pie
                        data={clientRiskData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {clientRiskData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Response Time Trend</CardTitle>
                  <CardDescription>Average weekly response time to client inquiries</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer className="h-[240px]" config={{
                    "time": { color: "#8b5cf6" },
                  }}>
                    <LineChart data={responseTimeData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" />
                      <YAxis tickFormatter={(value) => `${value}m`} />
                      <Tooltip content={({ payload }) => {
                        if (payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="font-medium">{payload[0].payload.name}</div>
                                <div className="font-medium text-right">{`${payload[0].value}m`}</div>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }} />
                      <Line
                        type="monotone"
                        dataKey="time"
                        stroke="#8b5cf6"
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
            
            {/* Client Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Weekly Client Activity</CardTitle>
                <CardDescription>Active vs inactive clients over the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer className="h-[300px]" config={{
                  "active": { color: "#8b5cf6" },
                  "inactive": { color: "#e5e7eb" },
                }}>
                  <BarChart data={clientActivityData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="active" stackId="a" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="inactive" stackId="a" fill="#e5e7eb" radius={[4, 4, 0, 0]} />
                    <ChartLegend content={<ChartLegendContent />} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
            
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>At-Risk Clients</CardTitle>
                <CardDescription>Clients that require immediate attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span className="font-medium">Acme Inc.</span>
                    </div>
                    <div className="text-sm text-muted-foreground">No activity in 30 days</div>
                    <Button variant="outline" size="sm">Contact</Button>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      <span className="font-medium">TechCorp Solutions</span>
                    </div>
                    <div className="text-sm text-muted-foreground">License expires in 14 days</div>
                    <Button variant="outline" size="sm">Contact</Button>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span className="font-medium">Global Industries</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Support tickets increased by 40%</div>
                    <Button variant="outline" size="sm">Contact</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Upcoming Meetings */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Meetings</CardTitle>
                <CardDescription>Your schedule for today and tomorrow</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Quarterly Business Review</h3>
                      <p className="text-sm text-muted-foreground">with Acme Inc.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarClock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Today, 3:00 PM</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">License Renewal Discussion</h3>
                      <p className="text-sm text-muted-foreground">with TechCorp Solutions</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarClock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Tomorrow, 11:00 AM</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Product Feedback Session</h3>
                      <p className="text-sm text-muted-foreground">with Globex Corporation</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarClock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Tomorrow, 2:30 PM</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="clients" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Client Information</CardTitle>
                <CardDescription>View detailed client information and metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Detailed client information will be displayed here. Navigate to the Clients page for complete details.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="activity" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Activity Log</CardTitle>
                <CardDescription>Recent client interactions and system activities</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Detailed activity logs will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
