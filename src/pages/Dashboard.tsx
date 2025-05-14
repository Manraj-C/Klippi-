
import { useState, useMemo } from "react";
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
import GeoDistributionMap from "@/components/dashboard/GeoDistributionMap";

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

// Geographic data with enhanced details for visualization
const regionData = [
  { 
    name: "North America", 
    value: 42, 
    color: "#8b5cf6",
    clients: 63,
    revenue: 3540000,
    majorCities: [
      { name: "New York", clients: 22, revenue: 1320000 },
      { name: "San Francisco", clients: 18, revenue: 1080000 },
      { name: "Chicago", clients: 13, revenue: 780000 },
      { name: "Toronto", clients: 10, revenue: 360000 }
    ]
  },
  { 
    name: "Europe", 
    value: 28, 
    color: "#4ADE80",
    clients: 42,
    revenue: 1960000,
    majorCities: [
      { name: "London", clients: 16, revenue: 960000 },
      { name: "Paris", clients: 12, revenue: 580000 },
      { name: "Berlin", clients: 8, revenue: 280000 },
      { name: "Madrid", clients: 6, revenue: 140000 }
    ]
  },
  { 
    name: "Asia Pacific", 
    value: 18, 
    color: "#FACC15",
    clients: 27,
    revenue: 1240000,
    majorCities: [
      { name: "Tokyo", clients: 11, revenue: 660000 },
      { name: "Singapore", clients: 8, revenue: 340000 },
      { name: "Sydney", clients: 5, revenue: 180000 },
      { name: "Mumbai", clients: 3, revenue: 60000 }
    ]
  },
  { 
    name: "Latin America", 
    value: 8, 
    color: "#F87171",
    clients: 12,
    revenue: 460000,
    majorCities: [
      { name: "Mexico City", clients: 5, revenue: 220000 },
      { name: "São Paulo", clients: 4, revenue: 160000 },
      { name: "Buenos Aires", clients: 3, revenue: 80000 }
    ]
  },
  { 
    name: "Other", 
    value: 4, 
    color: "#94a3b8",
    clients: 6,
    revenue: 120000,
    majorCities: [
      { name: "Various", clients: 6, revenue: 120000 }
    ]
  },
];

const Dashboard = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

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

  // Filter region data based on selection
  const filteredRegionData = useMemo(() => {
    if (!selectedRegion) return regionData;
    return regionData.filter(region => region.name === selectedRegion);
  }, [selectedRegion]);

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
                <CardContent className="p-0">
                  <GeoDistributionMap 
                    regionData={regionData} 
                    setSelectedRegion={setSelectedRegion}
                    selectedRegion={selectedRegion}
                  />
                </CardContent>
              </Card>
            </div>
            
            {/* Region Detail Cards if a region is selected */}
            {selectedRegion && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredRegionData.map(region => (
                  <React.Fragment key={region.name}>
                    <Card className="col-span-1">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <MapPin className="h-4 w-4 mr-2" style={{ color: region.color }} />
                          {region.name}
                        </CardTitle>
                        <CardDescription>Region Overview</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Clients</span>
                            <span className="font-semibold">{region.clients}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Revenue</span>
                            <span className="font-semibold">${(region.revenue/1000000).toFixed(2)}M</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Market Share</span>
                            <span className="font-semibold">{region.value}%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="col-span-2">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Top Cities</CardTitle>
                        <CardDescription>Distribution by major city</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {region.majorCities.map((city, idx) => (
                            <div key={idx}>
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-medium">{city.name}</span>
                                <span className="text-sm text-muted-foreground">
                                  {city.clients} clients | ${(city.revenue/1000).toFixed(0)}K
                                </span>
                              </div>
                              <div className="flex gap-2 items-center">
                                <Progress 
                                  value={(city.revenue / region.revenue) * 100} 
                                  className="h-2"
                                  style={{ backgroundColor: `${region.color}20` }}
                                  indicatorClassName={cn("bg-gradient-to-r", { 
                                    "from-purple-500 to-purple-600": region.name === "North America",
                                    "from-green-500 to-green-600": region.name === "Europe",
                                    "from-yellow-500 to-yellow-600": region.name === "Asia Pacific",
                                    "from-red-500 to-red-600": region.name === "Latin America",
                                    "from-gray-500 to-gray-600": region.name === "Other",
                                  })}
                                />
                                <span className="text-xs font-medium">
                                  {((city.revenue / region.revenue) * 100).toFixed(0)}%
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </React.Fragment>
                ))}
                <div className="col-span-1 md:col-span-3 flex justify-end">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setSelectedRegion(null)}
                    className="text-xs"
                  >
                    Back to World View
                  </Button>
                </div>
              </div>
            )}

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
