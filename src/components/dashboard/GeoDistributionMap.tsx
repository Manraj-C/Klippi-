
import React, { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface CityData {
  name: string;
  clients: number;
  revenue: number;
}

interface RegionData {
  name: string;
  value: number;
  color: string;
  clients: number;
  revenue: number;
  majorCities: CityData[];
}

interface GeoDistributionMapProps {
  regionData: RegionData[];
  selectedRegion: string | null;
  setSelectedRegion: (region: string | null) => void;
}

const GeoDistributionMap = ({ 
  regionData, 
  selectedRegion, 
  setSelectedRegion 
}: GeoDistributionMapProps) => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const { toast } = useToast();

  const handleRegionClick = (regionName: string) => {
    setSelectedRegion(regionName);
    toast({
      title: `${regionName} Selected`,
      description: `Viewing detailed breakdown for ${regionName} region`,
    });
  };

  return (
    <div className="relative w-full h-full">
      <AspectRatio ratio={16/9} className="bg-muted/30 overflow-hidden rounded-b-lg">
        <div className="relative w-full h-full">
          {/* Map background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/50">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsMTAwLDEwMCwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />
          </div>

          {/* World map - more detailed and realistic representation */}
          <div className="absolute inset-0 opacity-25 p-4">
            <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
              {/* North America */}
              <path d="M148,117 l12,-3 l7,-9 l-7,-5 l-14,3 l-10,9 l12,5 Z" fill="currentColor" />
              <path d="M158,108 l15,-12 l10,0 l16,-13 l-6,-13 l-11,-9 l-14,3 l-11,12 l-12,6 l7,9 l6,17 Z" fill="currentColor" />
              <path d="M198,83 l13,-12 l9,0 l10,-6 l8,-12 l-9,-6 l-10,0 l-9,6 l-12,0 l-7,6 l6,13 l1,11 Z" fill="currentColor" />
              <path d="M228,53 l21,-21 l21,-7 l30,-18 l-8,-7 l-17,7 l-13,0 l-9,11 l-19,9 l-15,12 l9,14 Z" fill="currentColor" />
              
              {/* Central America */}
              <path d="M213,157 l-9,-13 l-10,-3 l-10,6 l-8,12 l-12,11 l-10,15 l9,6 l10,-5 l8,-10 l13,-8 l19,-11 Z" fill="currentColor" />
              
              {/* South America */}
              <path d="M278,193 l-19,-9 l-12,-12 l-9,-3 l-10,6 l-8,13 l-11,18 l-6,21 l-9,17 l-13,15 l-9,18 l-4,22 l-9,18 l-4,24 l8,21 l13,15 l14,9 l15,3 l15,-6 l12,-15 l10,-6 l13,-3 l12,6 l10,15 l13,12 l10,3 l9,-6 l8,-12 l4,-19 l9,-18 l-4,-10 l-13,-6 l-13,6 l-11,-6 l-4,-12 l5,-15 l13,-12 l10,-3 l11,-9 l10,-21 l1,-21 l-12,-21 l-13,-15 l-12,-12 l-13,-9 Z" fill="currentColor" />
              
              {/* Europe */}
              <path d="M493,104 l-10,6 l-7,15 l9,9 l12,0 l10,-6 l9,-12 l-9,-12 l-14,0 Z" fill="currentColor" />
              <path d="M516,90 l16,-9 l12,0 l6,6 l15,-6 l9,0 l1,9 l-12,12 l-15,6 l-10,0 l-12,6 l-10,-12 l0,-12 Z" fill="currentColor" />
              <path d="M555,87 l13,-9 l11,0 l9,-6 l10,6 l0,12 l-7,9 l-13,6 l-10,-6 l-13,-12 Z" fill="currentColor" />
              <path d="M598,78 l11,-12 l10,0 l10,-6 l9,9 l-6,9 l-13,6 l-10,6 l-11,-12 Z" fill="currentColor" />
              
              {/* Africa */}
              <path d="M493,180 l-9,-15 l-3,-18 l9,-18 l14,-12 l15,-6 l21,-3 l21,6 l15,15 l9,18 l9,18 l4,18 l9,12 l16,9 l21,9 l12,15 l6,15 l12,12 l-3,15 l-12,12 l-15,15 l-12,21 l-9,15 l-6,24 l-9,0 l-6,9 l-13,0 l-9,-9 l-12,0 l-9,-9 l-9,0 l-7,-6 l-12,0 l-9,-6 l-10,-18 l-9,-18 l-6,-27 l-7,-24 l-9,-18 l-10,-18 l-6,-24 l9,-15 l16,-12 Z" fill="currentColor" />
              
              {/* Asia */}
              <path d="M703,139 l-14,-18 l-6,-21 l9,-15 l15,-9 l16,-3 l15,-9 l12,-12 l15,-6 l18,-6 l21,0 l18,6 l15,9 l15,15 l21,9 l18,15 l10,18 l9,27 l9,18 l15,9 l18,15 l15,12 l10,15 l12,15 l9,18 l-9,9 l-12,-9 l-12,-6 l-21,-6 l-18,-9 l-24,-6 l-18,0 l-15,9 l-18,3 l-16,9 l-18,9 l-9,12 l-15,6 l-16,9 l-15,0 l-15,6 l-12,18 l-15,0 l-15,-24 l-9,-24 l0,-30 l-12,-36 l-6,-24 l-9,-21 Z" fill="currentColor" />
              
              {/* Australia */}
              <path d="M853,312 l-6,-18 l-9,-18 l-15,-9 l-19,-9 l-21,0 l-18,9 l-15,18 l-9,18 l-3,24 l6,18 l10,15 l15,6 l19,9 l21,-6 l18,-15 l12,-18 l9,-24 l5,-1 Z" fill="currentColor" />
              
              {/* Japan */}
              <path d="M865,166 l6,-15 l9,-6 l6,12 l-6,15 l-15,17 l-12,6 l0,12 l9,9 l0,15 l-10,6 l-8,-12 l-4,-18 l0,-18 l10,-12 l15,-11 Z" fill="currentColor" />
              
              {/* UK */}
              <path d="M446,114 l-9,-9 l-6,0 l-3,9 l9,12 l9,-12 Z" fill="currentColor" />
              <path d="M459,98 l-6,-6 l-9,0 l-6,6 l0,7 l6,6 l9,-1 l6,-12 Z" fill="currentColor" />
              
              {/* Indonesia */}
              <path d="M763,284 l15,-6 l16,6 l0,12 l-16,0 l-15,-12 Z" fill="currentColor" />
              <path d="M799,284 l13,0 l12,6 l-9,9 l-16,-6 l0,-9 Z" fill="currentColor" />
              <path d="M824,275 l13,0 l9,9 l-9,9 l-13,-3 l-9,-6 l9,-9 Z" fill="currentColor" />
            </svg>
          </div>

          {/* Interactive region markers */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            {regionData.map((region) => {
              const position = getRegionPosition(region.name);
              const isActive = region.name === selectedRegion || region.name === hoveredRegion;
              
              return (
                <div 
                  key={region.name}
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
                    onMouseEnter={() => setHoveredRegion(region.name)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    onClick={() => handleRegionClick(region.name)}
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
            })}
          </div>

          {/* Controls */}
          <div className="absolute bottom-3 right-3">
            <Button 
              variant="secondary" 
              size="icon" 
              className="size-8 rounded-full bg-background/80 backdrop-blur-sm shadow-lg"
              onClick={() => setSelectedRegion(null)}
            >
              <Globe className="h-4 w-4" />
            </Button>
          </div>

          {/* Legend */}
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
        </div>
      </AspectRatio>
    </div>
  );
};

// Helper function to position regions on the map
function getRegionPosition(region: string): { x: number; y: number } {
  switch (region) {
    case "North America":
      return { x: 23, y: 35 };
    case "Europe":
      return { x: 48, y: 28 };
    case "Asia Pacific":
      return { x: 75, y: 37 };
    case "Latin America":
      return { x: 30, y: 65 };
    case "Other":
      return { x: 50, y: 80 };
    default:
      return { x: 50, y: 50 };
  }
}

export default GeoDistributionMap;
