import React from 'react';
import { Phone, Navigation, Clock } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

interface CTASectionProps {
  onOpenBooking: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#141414] via-[#181818] to-[#101010] border-t border-[#222222] overflow-hidden">
      {/* Subtle gold accent aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C8A45D]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-[#C8A45D] font-semibold mb-3">
          Step Into The Chair
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 uppercase text-balance">
          YOUR NEXT GREAT HAIRCUT STARTS HERE.
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-300 font-light leading-relaxed mb-10 text-balance">
          Ready for a fresh look? Get in touch with Joel's Barber Shop today. We welcome walk-ins and phone appointment inquiries.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* Call Now Button */}
          <a
            href={BUSINESS_DATA.phoneTel}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C8A45D] hover:bg-[#dfbf77] text-black font-semibold text-sm tracking-wider uppercase rounded-sm transition-all duration-200 shadow-xl hover:shadow-[#C8A45D]/25 cursor-pointer whitespace-nowrap shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now · {BUSINESS_DATA.phoneFormatted}</span>
          </a>

          {/* Get Directions Button */}
          <a
            href={BUSINESS_DATA.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-neutral-700 hover:border-[#C8A45D] bg-[#1a1a1a] text-neutral-200 hover:text-white font-medium text-sm tracking-wider uppercase rounded-sm transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
          >
            <Navigation className="w-4 h-4 text-[#C8A45D]" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Quick Location Note */}
        <div className="mt-8 text-xs text-neutral-400 flex items-center justify-center gap-2">
          <Clock className="w-3.5 h-3.5 text-[#C8A45D]" />
          <span>Located at 8209 Suite-114 California City Blvd, California City, CA</span>
        </div>
      </div>
    </section>
  );
};
