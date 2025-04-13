
import React from "react"
import { Users, Settings, TrendingUp } from "lucide-react"
import { FeatureCard } from "./feature-card"

export const TeamFeaturesTab = () => {
  const teamFeatures = [
    {
      title: "Team Analytics Dashboard",
      description: "Monitor team-wide metrics, spot trends, and identify opportunities for coaching and process improvement.",
      icon: <Users className="h-6 w-6 text-secondary" />,
      badge: "Team"
    },
    {
      title: "Standardized CS Workflows",
      description: "Ensure consistency across client interactions with templated processes that still allow for personalization.",
      icon: <Settings className="h-6 w-6 text-secondary" />,
      badge: "Team"
    },
    {
      title: "Early Churn Risk Detection",
      description: "Identify at-risk accounts before they become problems through AI-powered sentiment and engagement analysis.",
      icon: <TrendingUp className="h-6 w-6 text-secondary" />,
      badge: "Team"
    }
  ]

  return (
    <>
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-semibold mb-3">Scale Your CS Organization</h3>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          A comprehensive platform that standardizes excellence across your CS team while providing leadership with valuable insights.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamFeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            badge={feature.badge}
          />
        ))}
      </div>
    </>
  )
}
