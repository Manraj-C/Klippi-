
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
    <div className="relative w-full max-w-[700px] h-[700px] mx-auto">
      {/* Central hub */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center z-10">
        <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center">
          <img 
            src={centerLogo} 
            alt={centerName} 
            className="w-16 h-16 object-contain" 
          />
        </div>
        <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2">
          <div className="cursor-pointer w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 9H6V15H8V9Z" fill="#000"/>
              <path d="M18 9H16V15H18V9Z" fill="#000"/>
              <path d="M12 9H10V15H12V9Z" fill="#000"/>
            </svg>
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
          className={`absolute ${getPositionClass(integration.position)} w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center transition-transform hover:scale-105`}
        >
          <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center p-3">
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
