
import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  badge?: string;
  image?: string;
  cta?: {
    text: string;
    icon?: React.ReactNode;
  };
}

export const FeatureCard = ({ title, description, icon, className, badge, image, cta }: FeatureCardProps) => (
  <div className={cn("glass-card rounded-xl p-6 flex flex-col h-full", className)}>
    <div className="mb-4 p-2 w-fit rounded-lg bg-primary/20">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
      {title}
      {badge && (
        <Badge variant="outline" className="text-xs font-normal">
          {badge}
        </Badge>
      )}
    </h3>
    <p className="text-foreground/70 text-sm mb-4">{description}</p>
    
    {image && (
      <div className="mt-auto mb-4 overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-auto object-cover" />
      </div>
    )}
    
    {cta && (
      <div className="mt-auto">
        <Button variant="ghost" size="sm" className="group text-primary hover:text-primary hover:bg-primary/10 p-0">
          <span>{cta.text}</span>
          {cta.icon || (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          )}
        </Button>
      </div>
    )}
  </div>
)
