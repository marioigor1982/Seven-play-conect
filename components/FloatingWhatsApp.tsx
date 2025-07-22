import React from 'react';
import { FLOATING_WHATSAPP_URL } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={FLOATING_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50 transform hover:scale-110 transition-all duration-300 animate-bounce"
      aria-label="Fale conosco pelo WhatsApp"
      style={{ background: 'linear-gradient(135deg, #25D366 60%, #128C7E 100%)' }}
    >
      <img src="/img/whatsapp.png" alt="WhatsApp" className="h-10 w-10 drop-shadow-lg" />
    </a>
  );
};

export default FloatingWhatsApp;