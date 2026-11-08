import React from 'react';
import { Scissors, Phone, MapPin, Star, HelpCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

interface FooterProps {
  onOpenOwnerGuide: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOwnerGuide, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0b0b] border-t border-[#1f1f1f] text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-full border border-[#C8A45D]/60 flex items-center justify-center text-[#C8A45D]">
                <Scissors className="w-4 h-4" />
              </div>
              <span className="font-display text-xl font-bold tracking-wider text-white">
                Joel's Barber Shop
              </span>
            </div>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Premium barbershop in California City, California. Committed to precision haircuts, relaxed atmosphere, and genuine customer satisfaction.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[#C8A45D]">
              <Star className="w-4 h-4 fill-[#C8A45D]" />
              <span className="font-semibold text-white">4.3 / 5.0 Rating</span>
              <span className="text-neutral-500">·</span>
              <span className="text-neutral-400">122 Verified Google Reviews</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs uppercase tracking-wider text-white font-semibold">
              Explore
            </p>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-[#C8A45D] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#C8A45D] transition-colors">About the Shop</a></li>
              <li><a href="#services" className="hover:text-[#C8A45D] transition-colors">Service Offerings</a></li>
              <li><a href="#gallery" className="hover:text-[#C8A45D] transition-colors">Photo Gallery</a></li>
              <li><a href="#reviews" className="hover:text-[#C8A45D] transition-colors">Customer Reviews</a></li>
              <li><a href="#contact" className="hover:text-[#C8A45D] transition-colors">Location & Hours</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-wider text-white font-semibold">
              California City Shop
            </p>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C8A45D] shrink-0 mt-0.5" />
                <span>8209 Suite-114 California City Blvd, California City, CA 93505</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                <a href={BUSINESS_DATA.phoneTel} className="text-white hover:text-[#C8A45D] transition-colors tabular-nums">
                  {BUSINESS_DATA.phoneFormatted}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#C8A45D] text-black text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#dfbf77]"
              >
                <Phone className="w-3 h-3" />
                <span>Call to Book</span>
              </button>
            </div>
          </div>

          {/* Social Channels & Owner Presentation Helper */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-wider text-white font-semibold">
              Social & Online Channels
            </p>
            <p className="text-xs text-neutral-400">
              Social channels (Instagram, Facebook) are set as placeholders pending business owner verification.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <span className="px-2 py-1 rounded bg-[#161616] border border-[#262626]">Instagram [Coming Soon]</span>
              <span className="px-2 py-1 rounded bg-[#161616] border border-[#262626]">Facebook [Coming Soon]</span>
            </div>

            {/* Pitch Guide Trigger */}
            <div className="pt-3">
              <button
                type="button"
                onClick={onOpenOwnerGuide}
                className="w-full flex items-center justify-center gap-2 p-2.5 rounded bg-[#171717] hover:bg-[#202020] border border-[#2b2b2b] hover:border-[#C8A45D]/50 text-neutral-300 hover:text-white text-xs transition-colors cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5 text-[#C8A45D]" />
                <span>Client Presentation & Handover Guide</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#1c1c1c] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Joel's Barber Shop. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-neutral-400">
              8209 Suite-114 California City Blvd, CA 93505
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-neutral-400 hover:text-[#C8A45D] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
