
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
  AreaChart,
  Area,
} from "recharts";
import {
  Users,
  CircleDollarSign,
  AlertTriangle,
  Mail,
  RefreshCw,
  ChevronUp,
  ChartPie,
  TrendingUp,
  Heart,
  MapPin,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GetStartedButton } from "@/components/onboarding/GetStartedButton";

// Sample data for charts
const clientPortfolioData = [
  { name: "Enterprise", value: 45, color: "#4ADE80" },
  { name: "Mid-Market", value: 30, color: "#FACC15" },
  { name: "SMB", value: 25, color: "#8b5cf6" },
];

const revenueData = [
  { name: "Jan", mrr: 12000, arr: 144000 },
  { name: "Feb", mrr: 13500, arr: 162000 },
  { name: "Mar", mrr: 15000, arr: 180000 },
  { name: "Apr", mrr: 14200, arr: 170400 },
  { name: "May", mrr: 16800, arr: 201600 },
  { name: "Jun", mrr: 19500, arr: 234000 },
  { name: "Jul", mrr: 21000, arr: 252000 },
  { name: "Aug", mrr: 22500, arr: 270000 },
  { name: "Sep", mrr: 24000, arr: 288000 },
];

const clientRiskData = [
  { name: "Low Risk", value: 65, color: "#4ADE80" },
  { name: "Medium Risk", value: 25, color: "#FACC15" },
  { name: "High Risk", value: 10, color: "#F87171" },
];

// Geographic data (simplified for visualization)
const regionData = [
  { name: "North America", value: 42, color: "#8b5cf6" },
  { name: "Europe", value: 28, color: "#4ADE80" },
  { name: "Asia Pacific", value: 18, color: "#FACC15" },
  { name: "Latin America", value: 8, color: "#F87171" },
  { name: "Other", value: 4, color: "#94a3b8" },
];

const Dashboard = () => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const calculateHealthScore = () => {
    return {
      score: 78,
      change: 5,
      indicators: [
        { name: "Engagement", value: 82 },
        { name: "Renewal Risk", value: 74 },
        { name: "Product Usage", value: 89 },
        { name: "Support Cases", value: 68 },
      ]
    };
  };

  const healthScore = calculateHealthScore();

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">CSM Dashboard</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Last updated: Today, 10:24 AM</span>
            <Button variant="outline" size="icon" onClick={handleRefresh} className={cn(refreshing && "animate-spin")}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border border-border/40 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500 inline-flex items-center">
                  <ChevronUp className="h-3 w-3 mr-1" /> 6%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-border/40 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total ARR</CardTitle>
              <CircleDollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1.42M</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500 inline-flex items-center">
                  <ChevronUp className="h-3 w-3 mr-1" /> 12.5%
                </span>{" "}
                from last quarter
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-border/40 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customer Health</CardTitle>
              <Heart className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{healthScore.score}%</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500 inline-flex items-center">
                  <ChevronUp className="h-3 w-3 mr-1" /> {healthScore.change}%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-border/40 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Emails Drafted</CardTitle>
              <Mail className="h-4 w-4 text-primary" />
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
        
        <Tabs defaultValue="overview" className="space-y-4">
          <div className="flex justify-between">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="clients">Clients</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="overview" className="space-y-4">
            {/* First row of charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Client Portfolio Breakdown */}
              <Card className="border border-border/40 shadow-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <ChartPie className="h-4 w-4 mr-2 text-primary" />
                        Client Portfolio Breakdown
                      </CardTitle>
                      <CardDescription>Distribution by segment</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <ChartContainer className="h-[240px]" config={{
                      "Enterprise": { color: "#4ADE80" },
                      "Mid-Market": { color: "#FACC15" },
                      "SMB": { color: "#8b5cf6" },
                    }}>
                      <PieChart>
                        <Pie
                          data={clientPortfolioData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          innerRadius={50}
                          fill="#8884d8"
                          dataKey="value"
                          nameKey="name"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          labelLine={false}
                        >
                          {clientPortfolioData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <ChartLegend content={<ChartLegendContent />} />
                      </PieChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
              
              {/* Geographic Breakdown */}
              <Card className="border border-border/40 shadow-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        Geographic Distribution
                      </CardTitle>
                      <CardDescription>Client locations by region</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col h-[240px]">
                    <div className="flex-1 mb-4 opacity-75">
                      <img 
                        src="/placeholder.svg" 
                        alt="World Map" 
                        className="w-full h-full object-contain opacity-25"
                      />
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                      {regionData.map((region, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
                            <div 
                              className="h-1.5 rounded-full" 
                              style={{ width: `${region.value}%`, backgroundColor: region.color }}
                            ></div>
                          </div>
                          <span className="text-xs font-medium text-gray-500">{region.name}</span>
                          <span className="text-xs font-bold">{region.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Second row of charts */}
            <div className="grid grid-cols-1 gap-4">
              {/* Revenue Metrics */}
              <Card className="border border-border/40 shadow-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                        Revenue Metrics
                      </CardTitle>
                      <CardDescription>MRR & ARR growth over time</CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-primary mr-1"></div>
                        <span className="text-xs font-medium">MRR</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-secondary mr-1"></div>
                        <span className="text-xs font-medium">ARR</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ChartContainer className="h-[300px]" config={{
                    "mrr": { color: "#8b5cf6" },
                    "arr": { color: "#7E69AB" },
                  }}>
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient id="colorMrr" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="colorArr" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#7E69AB" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#7E69AB" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
                      <XAxis dataKey="name" />
                      <YAxis tickFormatter={(value) => `$${value/1000}k`} />
                      <ChartTooltip 
                        content={({ payload, label }) => {
                          if (payload && payload.length) {
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="font-medium">{label}</div>
                                <div className="grid grid-cols-2 gap-2 pt-1">
                                  <div className="flex items-center gap-1 text-sm">
                                    <div className="h-2 w-2 rounded bg-primary"></div>
                                    <span>MRR:</span>
                                  </div>
                                  <div className="text-right text-sm font-medium">${payload[0].value?.toLocaleString()}</div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="flex items-center gap-1 text-sm">
                                    <div className="h-2 w-2 rounded bg-secondary"></div>
                                    <span>ARR:</span>
                                  </div>
                                  <div className="text-right text-sm font-medium">${payload[1].value?.toLocaleString()}</div>
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="mrr" 
                        stroke="#8b5cf6" 
                        fillOpacity={1} 
                        fill="url(#colorMrr)" 
                        strokeWidth={2}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="arr" 
                        stroke="#7E69AB" 
                        fillOpacity={1}
                        fill="url(#colorArr)" 
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
            
            {/* Client Risk and Health */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Client Risk */}
              <Card className="border border-border/40 shadow-sm">
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
              
              {/* Health Score Details */}
              <Card className="border border-border/40 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-4 w-4 mr-2 text-primary" />
                    Customer Health Details
                  </CardTitle>
                  <CardDescription>Breakdown of health indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {healthScore.indicators.map((indicator, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{indicator.name}</span>
                          <span className="font-medium">{indicator.value}%</span>
                        </div>
                        <Progress value={indicator.value} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* At-Risk Clients */}
            <Card className="border border-border/40 shadow-sm">
              <CardHeader>
                <CardTitle>At-Risk Clients</CardTitle>
                <CardDescription>Clients that require immediate attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
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
            <Card className="border border-border/40 shadow-sm">
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
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Today, 3:00 PM</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">License Renewal Discussion</h3>
                      <p className="text-sm text-muted-foreground">with TechCorp Solutions</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Tomorrow, 11:00 AM</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Product Feedback Session</h3>
                      <p className="text-sm text-muted-foreground">with Globex Corporation</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
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
      <GetStartedButton />
    </DashboardLayout>
  );
};

export default Dashboard;
