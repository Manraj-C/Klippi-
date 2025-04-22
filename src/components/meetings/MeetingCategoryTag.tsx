
import React from "react";
import { Badge } from "@/components/ui/badge";

const CATEGORY_COLORS: Record<string, string> = {
  QBR: "bg-purple-100 text-purple-700 border-purple-300",
  "Client Escalation": "bg-red-100 text-red-600 border-red-300",
  "Pricing Call": "bg-yellow-100 text-yellow-700 border-yellow-400",
  Onboarding: "bg-green-100 text-green-700 border-green-400",
  Demo: "bg-blue-100 text-blue-700 border-blue-400",
  Support: "bg-gray-100 text-gray-700 border-gray-300"
};

export const MeetingCategoryTag: React.FC<{ category: string }> = ({ category }) => (
  <Badge
    variant="outline"
    className={`!px-3 !py-1 capitalize ${CATEGORY_COLORS[category] || "bg-gray-100 text-gray-700 border-gray-300"}`}
    style={{ minWidth: "88px", textAlign: "center" }}
  >
    {category}
  </Badge>
);
