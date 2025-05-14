
import React, { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useToast } from "@/components/ui/use-toast";
import RegionMarker from "./map/RegionMarker";
import MapLegend from "./map/MapLegend";
import WorldMapBackground from "./map/WorldMapBackground";
import MapControls from "./map/MapControls";
import { getRegionPosition } from "./map/utils";
import { RegionData } from "./map/types";

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
          <WorldMapBackground />

          {/* Interactive region markers */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            {regionData.map((region) => {
              const position = getRegionPosition(region.name);
              const isActive = region.name === selectedRegion || region.name === hoveredRegion;
              
              return (
                <RegionMarker
                  key={region.name}
                  region={region}
                  isActive={isActive}
                  onMouseEnter={() => setHoveredRegion(region.name)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  onClick={() => handleRegionClick(region.name)}
                  position={position}
                />
              );
            })}
          </div>

          <MapControls onReset={() => setSelectedRegion(null)} />
          <MapLegend regionData={regionData} />
        </div>
      </AspectRatio>
    </div>
  );
};

export default GeoDistributionMap;
