
import { formatDistanceToNow } from "date-fns";
import { 
  AlertTriangle, 
  CheckCircle, 
  TrendingDown, 
  Award, 
  Users, 
  Calendar, 
  MessageSquare,
  LucideIcon
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface FeedCardProps {
  item: {
    id: number;
    type: string;
    priority: string;
    timestamp: Date;
    client: {
      name: string;
      logo: string | null;
      initials: string;
    };
    title: string;
    description: string;
    metrics: Array<{
      label: string;
      value: string;
    }>;
    actions: Array<{
      label: string;
      icon: LucideIcon;
    }>;
  };
}

export function FeedCard({ item }: FeedCardProps) {
  // Get icon based on feed type
  const getTypeIcon = () => {
    switch (item.type) {
      case 'churn-risk':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'feature-adoption':
        return <TrendingDown className="h-5 w-5 text-amber-500" />;
      case 'positive-review':
        return <Award className="h-5 w-5 text-green-500" />;
      case 'champion-change':
        return <Users className="h-5 w-5 text-blue-500" />;
      case 'funding-news':
        return <TrendingDown className="h-5 w-5 text-purple-500 rotate-180" />;
      case 'qbr-reminder':
        return <Calendar className="h-5 w-5 text-indigo-500" />;
      default:
        return <CheckCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  // Get badge color based on priority
  const getPriorityBadge = () => {
    switch (item.priority) {
      case 'high':
        return <Badge variant="destructive">High Priority</Badge>;
      case 'medium':
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Medium Priority</Badge>;
      case 'low':
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Low Priority</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className="p-4 hover:shadow-md transition-all border-l-4 relative" 
      style={{ 
        borderLeftColor: 
          item.priority === 'high' ? 'rgb(239, 68, 68)' : 
          item.priority === 'medium' ? 'rgb(245, 158, 11)' : 
          'rgb(34, 197, 94)' 
      }}
    >
      <div className="absolute right-4 top-4">
        {getPriorityBadge()}
      </div>
      
      <div className="flex gap-4">
        <div>
          <div className="p-2 rounded-full bg-muted">
            {getTypeIcon()}
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={item.client.logo || undefined} alt={item.client.name} />
              <AvatarFallback className="text-xs">{item.client.initials}</AvatarFallback>
            </Avatar>
            <h3 className="font-medium text-sm">{item.client.name}</h3>
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(item.timestamp, { addSuffix: true })}
            </span>
          </div>
          
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-sm text-muted-foreground mt-1 mb-3">{item.description}</p>
          
          <div className="grid grid-cols-3 gap-2 mb-4">
            {item.metrics.map((metric, index) => (
              <div key={index} className="bg-muted/50 p-2 rounded text-center">
                <div className="text-xs text-muted-foreground">{metric.label}</div>
                <div className="font-medium">{metric.value}</div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {item.actions.map((action, index) => (
              <Button key={index} variant="outline" size="sm" className="bg-white">
                <action.icon className="h-4 w-4 mr-1" />
                {action.label}
              </Button>
            ))}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Ask Klippi AI
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Get AI assistance with this alert</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </Card>
  );
}
