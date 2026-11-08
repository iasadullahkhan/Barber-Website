import React from 'react';
import { Phone, ChevronDown, Star, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 lg:pt-36 pb-12 overflow-hidden bg-[#101010]"
    >
      {/* Background Photography with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_barber_chair_1794116229637.jpg"
          alt="Luxury barbershop interior at Joel's Barber Shop with classic leather chairs"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.08] transform scale-[1.02] transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to guarantee WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/60 to-black/70" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#101010]/50 to-[#101010]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        {/* Trust Indicator - Unboxed, Clean Typographic Separators */}
        <div className="inline-flex items-center gap-2 mb-6 text-xs sm:text-sm font-medium tracking-wide text-neutral-300">
          <div className="flex items-center text-[#C8A45D]" aria-label="4.3 out of 5 stars">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#C8A45D]" />
            ))}
            <Star className="w-4 h-4 fill-[#C8A45D]/40 text-[#C8A45D]" />
          </div>
          <span className="text-white font-semibold tabular-nums">4.3 / 5</span>
          <span className="text-neutral-500" aria-hidden="true">·</span>
          <span>Based on 122 Google Reviews</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 uppercase text-balance leading-[1.08]">
          LOOK SHARP. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFBF77] via-[#C8A45D] to-[#B0873E]">
            FEEL CONFIDENT.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed mb-10 text-balance">
          Quality cuts. Great service. A relaxed atmosphere. Experience the difference at Joel's Barber Shop in California City.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C8A45D] hover:bg-[#dfbf77] text-black font-semibold text-sm tracking-wider uppercase rounded-sm transition-all duration-200 shadow-lg hover:shadow-[#C8A45D]/25 cursor-pointer whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-[#C8A45D]"
          >
            <Phone className="w-4 h-4" />
            <span>Book Your Appointment</span>
          </button>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-neutral-700 hover:border-[#C8A45D] bg-[#191919]/80 backdrop-blur-sm text-neutral-200 hover:text-white font-medium text-sm tracking-wider uppercase rounded-sm transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Explore Our Services</span>
          </a>
        </div>
      </div>

      {/* 4-Item Quick Trust & Info Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-lg bg-[#141414]/90 backdrop-blur-md border border-[#262626]">
          {/* Item 1: Location */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-md bg-[#1d1d1d] border border-[#2e2e2e] flex items-center justify-center text-[#C8A45D] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-400">Location</p>
              <p className="text-sm font-semibold text-white truncate">8209 California City Blvd</p>
            </div>
          </div>

          {/* Item 2: Direct Phone */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-md bg-[#1d1d1d] border border-[#2e2e2e] flex items-center justify-center text-[#C8A45D] shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-400">Direct Telephone</p>
              <a
                href={BUSINESS_DATA.phoneTel}
                className="text-sm font-semibold text-white hover:text-[#C8A45D] transition-colors tabular-nums"
              >
                {BUSINESS_DATA.phoneFormatted}
              </a>
            </div>
          </div>

          {/* Item 3: Service Policy */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-md bg-[#1d1d1d] border border-[#2e2e2e] flex items-center justify-center text-[#C8A45D] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-400">Walk-Ins & Bookings</p>
              <p className="text-sm font-semibold text-white">Call Ahead or Visit</p>
            </div>
          </div>

          {/* Item 4: Verified Reputation */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-md bg-[#1d1d1d] border border-[#2e2e2e] flex items-center justify-center text-[#C8A45D] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-400">Google Reputation</p>
              <p className="text-sm font-semibold text-[#DFBF77] tabular-nums">4.3 / 5 ★ (122 Reviews)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="relative z-10 flex justify-center mt-6">
        <a
          href="#about"
          className="text-neutral-500 hover:text-[#C8A45D] transition-colors animate-bounce p-2"
          aria-label="Scroll to About Section"
        >
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
