
import React from "react"

interface IntegrationCardProps {
  name: string;
  logo: string;
}

export const IntegrationCard = ({ name, logo }: IntegrationCardProps) => (
  <div className="min-w-[220px] h-16 glass-card rounded-xl flex items-center justify-center px-6 mx-3">
    <img src={logo} alt={name} className="h-8 object-contain" />
  </div>
)
