
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  BarChart3,
  Calendar,
  CheckCircle2,
  Clock,
  ListTodo,
  MessageSquare,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function InsightsSidebar() {
  return (
    <div className="w-full xl:w-80 space-y-4">
      {/* Today's Priorities */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-md">Today's Priorities</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="bg-red-100 p-1.5 rounded-md">
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Follow up with DataFlow Inc.</p>
              <p className="text-xs text-muted-foreground">
                No response to renewal proposal
              </p>
              <div className="flex gap-2 pt-1">
                <Button variant="outline" size="sm" className="h-7 text-xs">
                  <Clock className="mr-1 h-3 w-3" />
                  Reschedule
                </Button>
                <Button size="sm" className="h-7 text-xs">
                  <MessageSquare className="mr-1 h-3 w-3" />
                  Call
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-amber-100 p-1.5 rounded-md">
              <Calendar className="h-4 w-4 text-amber-500" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">QBR with TechCorp</p>
              <p className="text-xs text-muted-foreground">
                2:00 PM - 3:30 PM today
              </p>
              <div className="flex gap-2 pt-1">
                <Button variant="outline" size="sm" className="h-7 text-xs">
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  Review Deck
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 p-1.5 rounded-md">
              <ListTodo className="h-4 w-4 text-blue-500" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Complete 3 customer health scores</p>
              <p className="text-xs text-muted-foreground">
                Due by end of day
              </p>
              <div className="flex gap-2 pt-1">
                <Button size="sm" className="h-7 text-xs">
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  Complete Now
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Team Performance */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-md">Team Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Renewal Rate</p>
                <div className="flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-sm font-medium text-green-500">93%</span>
                </div>
              </div>
              <Progress value={93} className="h-1" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Onboarding Progress</p>
                <div className="flex items-center">
                  <TrendingDown className="h-3 w-3 mr-1 text-amber-500" />
                  <span className="text-sm font-medium text-amber-500">78%</span>
                </div>
              </div>
              <Progress value={78} className="h-1" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">QBR Completion</p>
                <div className="flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-sm font-medium text-green-500">89%</span>
                </div>
              </div>
              <Progress value={89} className="h-1" />
            </div>

            <div className="pt-2">
              <Button variant="outline" size="sm" className="w-full">
                <BarChart3 className="h-4 w-4 mr-1" />
                View Full Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* At-Risk Accounts */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-md">At-Risk Accounts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-3">
            {['TechCorp', 'DataFlow Inc', 'Innovate Ltd'].map((company, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{company.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{company}</p>
                    <p className="text-xs text-muted-foreground">
                      {i === 0 ? 'Usage dropped 32%' : 
                       i === 1 ? 'Missed 2 check-ins' : 
                       'Support tickets up 40%'}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Users className="h-4 w-4" />
                </Button>
              </div>
            ))}
            
            <Button variant="outline" size="sm" className="w-full">
              <AlertTriangle className="h-4 w-4 mr-1" />
              View All Risk Alerts
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
