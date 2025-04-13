
import React from "react"
import { Mail, Database, BarChart } from "lucide-react"
import { FeatureCard } from "./feature-card"

export const IndividualFeaturesTab = () => {
  const individualFeatures = [
    {
      title: "Auto-Draft Email Replies",
      description: "Save hours every week with intelligent responses to client emails that sound exactly like you wrote them.",
      icon: <Mail className="h-6 w-6 text-primary" />,
      badge: "Individual"
    },
    {
      title: "Knowledge Base Integration",
      description: "Access product knowledge instantly without searching through documents, making you the expert in every conversation.",
      icon: <Database className="h-6 w-6 text-primary" />,
      badge: "Individual"
    },
    {
      title: "Personal Performance Insights",
      description: "Receive actionable feedback on your client interactions and prioritize your day for maximum impact.",
      icon: <BarChart className="h-6 w-6 text-primary" />,
      badge: "Individual"
    }
  ]

  return (
    <>
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-semibold mb-3">Amplify Your Individual Impact</h3>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Designed for ambitious CSMs who want to deliver exceptional service while managing more accounts efficiently.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {individualFeatures.map((feature, index) => (
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
