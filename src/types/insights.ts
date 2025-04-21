
import { LucideIcon } from "lucide-react";

export type InsightCategory = 
  | "Feature Request" 
  | "Churn Risk" 
  | "Adoption Issue" 
  | "Recurring Escalation";

export type InsightSeverity = "Critical" | "High" | "Medium" | "Low";

export type InsightTrend = "up" | "down";

export interface InsightData {
  id: string;
  category: string;
  topic: string;
  description: string;
  mentions: number;
  mentionsLast30Days: number;
  severity: string;
  trend: InsightTrend;
  impactedARR: number;
  firstMentioned: string;
}

export interface AffectedClient {
  id: string;
  name: string;
  tier: string;
  arr: number;
  mentions: number;
  sentiment: "positive" | "neutral" | "negative";
}

export interface DataSource {
  type: "email" | "call" | "chat" | "document";
  name: string;
  count: number;
}

export interface SuggestedAction {
  id: string;
  text: string;
  icon: LucideIcon;
}

export interface InsightDetail extends InsightData {
  growthOpportunity: number;
  churnRisk: number;
  affectedClients: AffectedClient[];
  dataSources: DataSource[];
  suggestedActions: SuggestedAction[];
}
