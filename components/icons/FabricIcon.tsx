
import React from 'react';

export const FabricIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.0002 11.2331L2.24609 5.6001V16.8001L12.0002 22.4001V11.2331Z" fill="#71C0F4"/>
    <path d="M12.0002 22.4001L21.7543 16.8001V5.6001L12.0002 11.2331V22.4001Z" fill="#0066B8"/>
    <path d="M12.0002 11.2331L21.7543 5.6001L12.0002 0L2.24609 5.6001L12.0002 11.2331Z" fill="#0083CB"/>
  </svg>
);
