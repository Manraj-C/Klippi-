
import React from 'react';
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface MapControlsProps {
  onReset: () => void;
}

const MapControls = ({ onReset }: MapControlsProps) => {
  return (
    <div className="absolute bottom-3 right-3">
      <Button 
        variant="secondary" 
        size="icon" 
        className="size-8 rounded-full bg-background/80 backdrop-blur-sm shadow-lg"
        onClick={onReset}
      >
        <Globe className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default MapControls;
