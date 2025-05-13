
import React from "react";
import { IntegrationLogo } from "./IntegrationLogo";

interface IntegrationCardProps {
  name: string;
  logo: string;
}

export const IntegrationCard = ({ name, logo }: IntegrationCardProps) => (
  <div className="min-w-[220px] h-16 glass-card rounded-xl flex items-center justify-center px-6 mx-3">
    <IntegrationLogo name={name} className="h-8 object-contain" alt={name} />
  </div>
);
