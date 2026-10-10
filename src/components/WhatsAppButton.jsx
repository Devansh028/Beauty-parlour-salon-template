import React from 'react';
import { MessageCircle } from 'lucide-react';
import { salonConfig } from '../config/salonConfig';
import { formatWhatsAppUrl } from '../utils/helpers';

export default function WhatsAppButton() {
  // If disabled or no number, hide completely per specification #20
  if (!salonConfig.whatsapp?.enabled || !salonConfig.whatsapp?.number) {
    return null;
  }

  const whatsappUrl = formatWhatsAppUrl(
    salonConfig.whatsapp.number,
    salonConfig.whatsapp.message
  );

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 p-3.5 sm:px-4 sm:py-3 rounded-full bg-[#25D366] text-white shadow-luxury hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden sm:inline text-xs font-bold tracking-wider uppercase">
          WhatsApp
        </span>
      </a>
    </aside>
  );
}
