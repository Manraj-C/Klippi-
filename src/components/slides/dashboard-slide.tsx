import React from "react";
import { MessageSquare, PieChart, Calendar, Bot, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
interface DashboardSlideProps {
  active: boolean;
}
const DashboardSlide: React.FC<DashboardSlideProps> = ({
  active
}) => {
  return <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${active ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
      <div className="w-full max-w-5xl p-4 md:p-6 h-[400px] md:h-[550px] glass-card rounded-xl border border-white/5 shadow-lg overflow-hidden">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-bold">K</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Klippi </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100%-40px)]">
          <div className="col-span-1 md:col-span-2 h-full glass-card rounded-lg p-3 overflow-y-auto">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm font-medium">Client Communication</span>
              </div>
              <Badge variant="outline" className="text-xs">Active</Badge>
            </div>
            
            <div className="space-y-3">
              <div className="flex gap-2 justify-end">
                <div className="glass-card p-2 rounded-lg text-xs max-w-[85%] bg-primary/10">
                  <p className="text-foreground/90">Hi Klippi, I have a QBR meeting with Acme Corp tomorrow and I haven't had time to prepare. Could you help me research their account and usage patterns?</p>
                </div>
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs">CM</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3 h-3 text-secondary" />
                </div>
                <div className="glass-card p-2 rounded-lg text-xs max-w-[85%]">
                  <p className="text-foreground/80">I'll help you prepare for tomorrow's QBR with Acme Corp. Let me analyze their account data and generate a comprehensive summary.</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3 h-3 text-secondary" />
                </div>
                <div className="glass-card p-2 rounded-lg text-xs max-w-[85%]">
                  <p className="text-foreground/80">
                    <span className="font-medium text-primary">Acme Corp Account Analysis:</span><br />
                    <br />
                    <span className="font-medium">Usage Trends:</span><br />
                    • API usage increased 25% MoM<br />
                    • Active users up 18% (42 → 49)<br />
                    • Average session duration: 32 mins (+7% from last quarter)<br />
                    <br />
                    <span className="font-medium">Feature Adoption:</span><br />
                    • 85% adoption of new dashboard analytics<br />
                    • Low usage (23%) of custom reporting features<br />
                    • Integration with Salesforce successfully implemented last month<br />
                    <br />
                    <span className="font-medium">Support Tickets:</span><br />
                    • 7 tickets this quarter (down from 12)<br />
                    • Average resolution time: 4.2 hours<br />
                    • No critical issues reported<br />
                    <br />
                    <span className="font-medium">Contract Status:</span><br />
                    • 8 months remaining in current term<br />
                    • Opportunity for upsell to Enterprise tier (+$15K ARR)
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2 justify-end">
                <div className="glass-card p-2 rounded-lg text-xs max-w-[85%] bg-primary/10">
                  <p className="text-foreground/90">This is amazing, Klippi!. Can you draft an email to their team highlighting these KPIs ahead of tomorrows QBR</p>
                </div>
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs">CM</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3 h-3 text-secondary" />
                </div>
                <div className="glass-card p-2 rounded-lg text-xs max-w-[85%]">
                  <p className="text-foreground/80">Drafting email now. I'll highlight the 25% usage increase, note their successful Salesforce integration, and suggest discussing the underutilized reporting features during the QBR. I'll also prepare talking points about the Enterprise tier upgrade opportunity.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-1 space-y-4">
            <div className="glass-card rounded-lg p-3">
              <div className="flex items-center mb-2">
                <PieChart className="w-4 h-4 mr-2 text-primary" />
                <span className="text-xs font-medium">Client Health</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold text-gradient">87%</div>
                <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 text-xs">+5%</Badge>
              </div>
            </div>
            
            <div className="glass-card rounded-lg p-3">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                <span className="text-xs font-medium">Growth Opportunity</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-xs">
                  <span className="text-foreground/70">Enterprise Tier</span>
                  <Badge className="bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 text-xs">$15K</Badge>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-foreground/70">Add-on Services</span>
                  <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 text-xs">$8K</Badge>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-lg p-3">
              <div className="flex items-center mb-2">
                <Calendar className="w-4 h-4 mr-2 text-primary" />
                <span className="text-xs font-medium">Upcoming</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-foreground/70">QBR Meeting</span>
                  <span className="text-foreground/50">Today</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-foreground/70">Feature Demo</span>
                  <span className="text-foreground/50">Tomorrow</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-foreground/70">Contract Review</span>
                  <span className="text-foreground/50">Next Week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default DashboardSlide;