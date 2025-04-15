
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const mockStatsData = [
  { name: "Sent", value: 59, change: "+17%", color: "#4263EB" },
  { name: "Responses", value: 45, change: "+12%", color: "#40C057" },
  { name: "Deliverability", value: "100%", color: "#7950F2" },
  { name: "Inbox Health", value: "88%", color: "#40C057" },
  { name: "Active Mailboxes", value: 3, color: "#4263EB" },
];

const mockEmailData = [
  { name: "jane@company.com", capacity: 30, status: "Fully Operational" },
  { name: "daniel@company.com", capacity: 25, status: "Minor Issues" },
  { name: "sarah@company.com", capacity: 30, status: "Urgent Issues" },
];

const mockChartData = Array.from({ length: 30 }, (_, i) => ({
  date: `${i + 1}`,
  warmup: Math.floor(Math.random() * 50) + 30,
  cold: Math.floor(Math.random() * 20) + 5,
}));

export function InboxAnalytics() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {mockStatsData.map((stat) => (
          <Card key={stat.name} className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardDescription>{stat.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <span 
                  className="text-4xl font-bold"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </span>
                {stat.change && (
                  <span className="text-sm text-green-500 mb-1.5">
                    {stat.change}
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Mailbox Health</CardTitle>
          <CardDescription>Overview of your connected mailboxes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockEmailData.map((email) => (
              <div 
                key={email.name} 
                className="flex items-center justify-between border-b border-border pb-4"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-slate-100 rounded-full p-1">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                      alt="Google" 
                      className="w-6 h-6" 
                    />
                  </div>
                  <span>{email.name}</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100">
                    {email.capacity}
                  </div>

                  <div className="w-32 text-center">
                    <span 
                      className={`px-3 py-1 rounded-full text-xs ${
                        email.status === "Fully Operational" 
                          ? "bg-green-100 text-green-700" 
                          : email.status === "Minor Issues" 
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {email.status}
                    </span>
                  </div>

                  <div className="w-24">
                    <div className="h-2 w-full bg-slate-200 rounded-full">
                      <div 
                        className={`h-full rounded-full ${
                          email.status === "Fully Operational" 
                            ? "bg-green-500 w-full" 
                            : email.status === "Minor Issues" 
                            ? "bg-yellow-500 w-2/3"
                            : "bg-red-500 w-1/3"
                        }`} 
                      />
                    </div>
                  </div>

                  <div>
                    <button 
                      className={`px-3 py-1 rounded-md text-sm border ${
                        email.status === "Urgent Issues" 
                          ? "border-blue-500 text-blue-600"
                          : "border-red-300 text-red-600"
                      }`}
                    >
                      {email.status === "Urgent Issues" ? "Reconnect" : "Disconnect"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Email Activity</CardTitle>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-violet-500"></div>
              <span className="text-sm">Warmup Emails Sent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <span className="text-sm">Cold Emails Sent</span>
            </div>
            <div className="ml-auto">
              <button className="px-3 py-1 bg-slate-100 rounded-md text-sm">Filter by Month</button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ChartContainer config={{}}>
              <BarChart data={mockChartData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="date" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip />
                <Bar dataKey="warmup" stackId="a" fill="#7950F2" radius={[4, 4, 0, 0]} />
                <Bar dataKey="cold" stackId="a" fill="#4dabf7" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Response Times</CardTitle>
          <CardDescription>Average time to reply to client emails</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ChartContainer config={{}}>
              <LineChart data={mockChartData.slice(0, 14)}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="date" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip />
                <Line 
                  type="monotone" 
                  dataKey="warmup" 
                  stroke="#7950F2" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name="Avg. Response Time (hours)"
                />
              </LineChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
