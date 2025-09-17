import React from 'react';
import whatsappLogo from '@/assets/whatsapp-logo.png';

interface WhatsAppIconProps {
  size?: number;
  className?: string;
}

const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ size = 20, className = "" }) => {
  return (
    <img 
      src={whatsappLogo} 
      alt="WhatsApp" 
      width={size} 
      height={size} 
      className={`inline-block ${className}`}
    />
  );
};

export default WhatsAppIcon;