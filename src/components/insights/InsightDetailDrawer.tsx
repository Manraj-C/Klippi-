
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  ChartPie, 
  UserCheck, 
  Users, 
  AlertTriangle,
  Mail,
  Phone,
  MessageSquare,
  FileText,
  CheckCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SettingsSection } from "@/components/settings/SettingsSection";
import { InsightDetail } from "@/types/insights";

interface InsightDetailDrawerProps {
  open: boolean;
  onClose: () => void;
  insight: InsightDetail | null;
}

const InsightDetailDrawer = ({ open, onClose, insight }: InsightDetailDrawerProps) => {
  const [actionTaken, setActionTaken] = useState<string[]>([]);
  
  // Reset action taken when new insight is loaded
  useEffect(() => {
    setActionTaken([]);
  }, [insight?.id]);

  if (!insight) return null;

  const handleActionClick = (actionId: string) => {
    if (actionTaken.includes(actionId)) {
      setActionTaken(actionTaken.filter(id => id !== actionId));
    } else {
      setActionTaken([...actionTaken, actionId]);
    }
  };

  return (
    <Sheet open={open} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="sm:max-w-md md:max-w-lg lg:max-w-xl overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl">{insight.topic}</SheetTitle>
          <SheetDescription className="text-base">
            {insight.description}
          </SheetDescription>
          <div className="flex items-center mt-2 gap-2">
            <Badge variant={insight.category === "Feature Request" ? "default" : 
                   insight.category === "Churn Risk" ? "destructive" : 
                   insight.category === "Adoption Issue" ? "secondary" : "outline"} 
                   className="font-medium">
              {insight.category}
            </Badge>
            <Badge variant="outline" className="font-medium">
              {insight.mentions} mentions
            </Badge>
          </div>
        </SheetHeader>

        <Separator className="my-4" />

        <SettingsSection title="Business Impact" description="Revenue and client relationships affected by this insight">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Annual Recurring Revenue</p>
                <p className="text-sm text-muted-foreground">Total ARR tied to this insight</p>
              </div>
              <div className="text-xl font-bold">${insight.impactedARR.toLocaleString()}</div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium">Growth Opportunity</p>
                <p className="text-sm font-medium">{insight.growthOpportunity}%</p>
              </div>
              <Progress value={insight.growthOpportunity} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium">Churn Risk</p>
                <p className="text-sm font-medium">{insight.churnRisk}%</p>
              </div>
              <Progress 
                value={insight.churnRisk} 
                className={`h-2 bg-gray-200 ${insight.churnRisk > 66 ? "bg-red-500" : insight.churnRisk > 33 ? "bg-yellow-500" : "bg-green-500"}`} 
              />
            </div>
          </div>
        </SettingsSection>

        <SettingsSection title="Affected Clients" description="Clients who mentioned this topic" className="my-4">
          <div className="grid grid-cols-1 gap-3">
            {insight.affectedClients.map(client => (
              <Card key={client.id} className="border shadow-sm">
                <CardHeader className="p-3 pb-0">
                  <CardTitle className="text-base">{client.name}</CardTitle>
                  <CardDescription className="text-xs">
                    {client.tier} · ${client.arr.toLocaleString()} ARR
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MessageSquare className="h-3 w-3" />
                      <span>{client.mentions} mentions</span>
                    </div>
                    <Badge 
                      variant={client.sentiment === "positive" ? "outline" : 
                              client.sentiment === "negative" ? "destructive" : "secondary"}
                      className="text-xs px-1 h-5"
                    >
                      {client.sentiment}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </SettingsSection>

        <SettingsSection title="Data Sources" description="Where Klippi found this insight" className="my-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {insight.dataSources.map((source, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 border rounded-md">
                {source.type === "email" && <Mail className="h-4 w-4 text-blue-500" />}
                {source.type === "call" && <Phone className="h-4 w-4 text-green-500" />}
                {source.type === "chat" && <MessageSquare className="h-4 w-4 text-purple-500" />}
                {source.type === "document" && <FileText className="h-4 w-4 text-orange-500" />}
                <div>
                  <p className="text-sm font-medium">{source.name}</p>
                  <p className="text-xs text-muted-foreground">{source.count} references</p>
                </div>
              </div>
            ))}
          </div>
        </SettingsSection>
        
        <SettingsSection title="Suggested Actions" description="Recommended next steps from Klippi" className="my-4">
          <div className="space-y-2">
            {insight.suggestedActions.map(action => (
              <Button 
                key={action.id}
                variant={actionTaken.includes(action.id) ? "default" : "outline"} 
                className="w-full justify-start mb-2 gap-2"
                onClick={() => handleActionClick(action.id)}
              >
                {actionTaken.includes(action.id) ? 
                  <CheckCircle className="h-4 w-4 text-white" /> : 
                  <action.icon className="h-4 w-4" />
                }
                {action.text}
              </Button>
            ))}
          </div>
        </SettingsSection>
      </SheetContent>
    </Sheet>
  );
};

export default InsightDetailDrawer;
