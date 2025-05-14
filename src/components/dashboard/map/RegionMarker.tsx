
import React from 'react';
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CityData, RegionData } from "./types";

interface RegionMarkerProps {
  region: RegionData;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
  position: { x: number; y: number };
}

const RegionMarker = ({ 
  region, 
  isActive, 
  onMouseEnter, 
  onMouseLeave, 
  onClick, 
  position 
}: RegionMarkerProps) => {
  return (
    <div 
      className={`absolute transition-all duration-300 ease-in-out ${isActive ? 'z-20 scale-110' : 'z-10'}`}
      style={{ 
        top: `${position.y}%`, 
        left: `${position.x}%`,
        transform: 'translate(-50%, -50%)' 
      }}
    >
      <div 
        className={`
          group cursor-pointer flex flex-col items-center
          ${isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100'}
        `}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        {/* Data point marker */}
        <div 
          className={`
            rounded-full relative mb-2 border-2 border-white shadow-lg
            flex items-center justify-center transition-all
            ${isActive ? 'h-12 w-12' : 'h-10 w-10 group-hover:h-11 group-hover:w-11'}
          `}
          style={{ backgroundColor: region.color }}
        >
          <MapPin 
            className="h-5 w-5 text-white" 
            style={{ filter: 'drop-shadow(0px 1px 1px rgba(0,0,0,0.5))' }}
          />
          
          {/* Ripple effect */}
          <div 
            className={`
              absolute inset-0 rounded-full animate-ping
              bg-current opacity-30 ${isActive ? 'opacity-30' : 'opacity-0 group-hover:opacity-20'}
            `}
            style={{ backgroundColor: region.color }}
          ></div>
        </div>
        
        {/* Region info card */}
        <div 
          className={`
            bg-card/95 backdrop-blur-sm rounded-lg shadow-lg border border-border/40 p-2
            transition-all duration-300 transform
            ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'}
          `}
        >
          <div className="flex flex-col items-center gap-1">
            <div className="font-semibold text-sm">{region.name}</div>
            <Badge 
              className="text-xs font-normal" 
              style={{ backgroundColor: `${region.color}20`, color: region.color }}
            >
              {region.value}% Market Share
            </Badge>
            <div className="flex justify-between gap-4 mt-1 text-xs text-muted-foreground">
              <div className="flex flex-col items-center">
                <span className="font-medium">{region.clients}</span>
                <span>Clients</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">${(region.revenue/1000000).toFixed(1)}M</span>
                <span>Revenue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionMarker;
