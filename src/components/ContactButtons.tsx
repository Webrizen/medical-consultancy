import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const ContactButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4">
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 cursor-hover"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          WhatsApp Chat
        </div>
      </a>
      
      <a
        href="tel:+919876543210"
        className="group w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 cursor-hover"
      >
        <Phone className="w-6 h-6 text-white" />
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Call Now
        </div>
      </a>
    </div>
  );
};

export default ContactButtons;