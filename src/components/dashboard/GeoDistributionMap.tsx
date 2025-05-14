
import React, { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

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
          {/* Map background with subtle grid */}
          <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/50">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsMTAwLDEwMCwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />
          </div>

          {/* World map outlines - simplified representation */}
          <div className="absolute inset-0 opacity-10 p-4">
            <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
              <path d="M217,93l9,1l10,6l13,-3l4,5l15,-11l15,0l6,-6l13,3l-1,-9l11,-9l11,0l10,-6l9,0l9,6l10,0l12,-6l12,-3l1,9l-6,9l-12,6l-10,15l-12,6l-6,9l-10,3l-4,12l-12,3l-9,-3l-10,0l-1,11l-10,0l-9,6l-13,0l-10,-6l-12,0l-10,-20l-12,-12l0,-11l7,-9l-1,-10l-10,-6l0,-6l10,-12l9,0l0,9l10,6l-1,9l10,6l10,-3l9,6Z" fill="currentColor" />
              <path d="M494,96l9,1l9,-3l5,5l13,-8l5,8l9,-1l10,6l-6,9l-16,6l-10,9l-13,0l-9,6l-10,-12l-9,0l0,-9l10,-6l-1,-9l4,-2Z" fill="currentColor" />
              <path d="M533,149l12,-6l9,-9h12l10,-3l10,-9l9,-3l10,-6l9,0l4,8l-10,9l-9,0l-1,9l-9,0l-10,6l-9,0l-10,6l-10,0l-6,-3l-1,1Z" fill="currentColor" />
              <path d="M685,139l13,5l12,-3l9,3l10,-3l15,3l3,5l12,0l1,15l4,12l10,6l14,6l-15,8l-9,-6l-10,-9l-9,-3l-10,-6l-10,0l-9,-3l-10,0l-10,-6l-12,0l-10,6l-16,3l-10,-6l-12,-12l-10,-6l-12,-15l-13,-15l-13,-6l-3,-9l-10,-5l4,-9l13,2l9,15l9,3l4,9l10,0l9,6l10,0l9,9l10,3l7,9l10,6Z" fill="currentColor" />
              <path d="M161,172l10,-17l14,0l6,-6l10,0l9,6l12,-3l6,6l12,0l7,11l-7,9l-10,6l-9,-3l-10,-6l-13,0l-8,-6l-20,0l-9,3Z" fill="currentColor" />
              <path d="M432,220l10,12l9,3l10,-6l9,-3l10,3l9,-6l10,0l7,6l-7,8l-10,6l-12,0l-10,6l-12,3l-13,-9l-9,0l-7,-5l-1,-9l6,-9l1,-10Z" fill="currentColor" />
              <path d="M698,216l9,6l10,0l9,6l10,-6l9,0l10,-6l9,6l3,9l13,5l9,6l-10,6l-14,0l-10,-6l-12,0l-7,-5l-9,5l-10,0l-9,6l-10,-6l-6,-8l-1,-11l9,-3l-1,-10l9,6Z" fill="currentColor" />
              <path d="M381,291l10,-3l9,3l4,18l-10,6l-10,-9l-3,-15Z" fill="currentColor" />
              <path d="M316,264l7,11l13,9l10,0l9,-9l10,0l10,6l12,0l6,8l10,0l10,6l15,3l13,-3l10,0l9,6l12,0l10,9l9,-3l19,9l9,0l10,6l5,12l-5,11l-10,0l-15,-11l-9,0l-10,-6l-12,0l-10,6l-12,-6l-10,0l-9,-6l-10,0l-9,-6l-10,0l-9,-5l-10,0l-10,-6l-9,0l-10,-6l-12,-3l-13,-9l-10,-6l-12,-14l-10,-9l-19,-9l-10,-15l-4,-9l4,-15l6,-11l13,3l9,6l10,12l10,6l10,15l10,6l10,9Z" fill="currentColor" />
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
      return { x: 25, y: 35 };
    case "Europe":
      return { x: 48, y: 30 };
    case "Asia Pacific":
      return { x: 75, y: 40 };
    case "Latin America":
      return { x: 30, y: 65 };
    case "Other":
      return { x: 50, y: 80 };
    default:
      return { x: 50, y: 50 };
  }
}

export default GeoDistributionMap;
