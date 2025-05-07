
import React from "react"

interface IntegrationNode {
  name: string;
  logo: string;
  position: 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | 'top-left';
}

interface IntegrationWheelProps {
  centerLogo: string;
  centerName: string;
  integrations: IntegrationNode[];
}

export const IntegrationWheel = ({ centerLogo, centerName, integrations }: IntegrationWheelProps) => {
  // Helper function to determine positioning class based on position
  const getPositionClass = (position: string) => {
    switch (position) {
      case 'top': return 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2';
      case 'top-right': return 'top-[15%] right-[15%] -translate-x-1/4 -translate-y-1/4';
      case 'right': return 'top-1/2 right-0 translate-y-[-50%] translate-x-1/2';
      case 'bottom-right': return 'bottom-[15%] right-[15%] -translate-x-1/4 translate-y-1/4';
      case 'bottom': return 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2';
      case 'bottom-left': return 'bottom-[15%] left-[15%] translate-x-[-25%] translate-y-1/4';
      case 'left': return 'top-1/2 left-0 translate-y-[-50%] -translate-x-1/2';
      case 'top-left': return 'top-[15%] left-[15%] translate-x-[-25%] -translate-y-1/4';
      default: return '';
    }
  };

  return (
    <div className="relative w-full max-w-[500px] h-[500px] mx-auto">
      {/* Central hub */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center z-10">
        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
          </div>
        </div>
      </div>

      {/* Connecting lines */}
      <div className="absolute inset-0 w-full h-full rounded-full border-2 border-primary/30 p-4">
        <div className="w-full h-full rounded-full border-2 border-primary/10"></div>
      </div>

      {/* Integration nodes */}
      {integrations.map((integration, index) => (
        <div 
          key={index} 
          className={`absolute ${getPositionClass(integration.position)} w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center transition-transform hover:scale-105`}
        >
          <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center p-2">
            <img 
              src={integration.logo} 
              alt={integration.name} 
              className="w-full h-full object-contain" 
            />
          </div>
        </div>
      ))}
    </div>
  );
};
