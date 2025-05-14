
import React from "react";
import { IntegrationLogo } from "./IntegrationLogo";

interface IntegrationCardProps {
  name: string;
  logo: string;
}

export const IntegrationCard = ({ name, logo }: IntegrationCardProps) => (
  <div className="min-w-[220px] h-16 glass-card rounded-xl flex items-center justify-center px-6 mx-3">
    <img 
      src={logo} 
      alt={`${name} logo`} 
      className="h-8 object-contain"
      onError={(e) => {
        console.log(`Failed to load image for ${name}`);
        e.currentTarget.style.display = 'none';
        const parent = e.currentTarget.parentElement;
        if (parent) {
          const fallback = document.createElement('div');
          fallback.className = 'flex items-center justify-center bg-muted rounded-md h-8 w-8';
          fallback.textContent = name.charAt(0).toUpperCase();
          parent.appendChild(fallback);
        }
      }}
    />
  </div>
);
