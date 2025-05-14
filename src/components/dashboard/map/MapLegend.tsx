
import React from 'react';
import { RegionData } from "./types";

interface MapLegendProps {
  regionData: RegionData[];
}

const MapLegend = ({ regionData }: MapLegendProps) => {
  return (
    <div className="absolute top-3 left-3 p-2 bg-background/80 backdrop-blur-sm rounded-md shadow-md border border-border/40">
      <div className="text-xs font-medium mb-1">Region Distribution</div>
      <div className="space-y-1">
        {regionData.map((region) => (
          <div key={region.name} className="flex items-center gap-1.5 text-xs">
            <div 
              className="w-2 h-2 rounded-full" 
              style={{ backgroundColor: region.color }}
            ></div>
            <span>{region.name}</span>
            <span className="text-muted-foreground">{region.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapLegend;
