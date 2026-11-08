import React from 'react';
import { Sparkles, Smile, Scissors, Award } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const craftPillars = [
    {
      icon: Scissors,
      title: "Quality Haircuts",
      description: "Every cut is crafted with precision scissors, balanced clippers, and sharp detail tailored to your personal aesthetic.",
    },
    {
      icon: Smile,
      title: "Relaxed Atmosphere",
      description: "A comfortable, welcoming shop environment where you can unwind, talk with your barber, and enjoy your grooming time.",
    },
    {
      icon: Award,
      title: "Professional Service",
      description: "Courteous consultations, reliable consistency, and genuine respect for every client who walks through the door.",
    },
    {
      icon: Sparkles,
      title: "Attention to Detail",
      description: "From clean neck tapers to meticulous beard contours and lineup symmetry, the fine details make the true difference.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#141414] border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8A45D] font-semibold mb-3">
            The Joel's Experience
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 uppercase text-balance">
            MORE THAN JUST A HAIRCUT
          </h2>
          <div className="w-16 h-0.5 bg-[#C8A45D] mx-auto mb-6" />
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            At Joel's Barber Shop in California City, we believe grooming is an essential craft. It's about how you feel when you step out of the chair—confident, refreshed, and sharp.
          </p>
        </div>

        {/* 2-Column Balanced Content & Media Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-[#2A2A2A] shadow-2xl">
              <img
                src="/src/assets/images/about_barber_craft_1794116230388.jpg"
                alt="Professional barber precision haircut detailing at Joel's Barber Shop"
                className="w-full h-[460px] object-cover object-center filter brightness-[0.9] hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded bg-[#101010]/85 backdrop-blur-md border border-[#2e2e2e]">
                <p className="text-xs uppercase tracking-wider text-[#C8A45D] font-semibold">Craft & Community</p>
                <p className="text-sm text-neutral-200 mt-1">
                  Serving California City residents and visitors with dedicated barbering.
                </p>
              </div>
            </div>
            {/* Subtle decorative gold frame outline */}
            <div className="hidden sm:block absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-[#C8A45D]/40 pointer-events-none rounded-tl-lg" />
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-[#C8A45D]/40 pointer-events-none rounded-br-lg" />
          </div>

          {/* Right Column: Values & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
                Dedicated to Craftsmanship & Customer Satisfaction
              </h3>
              <p className="text-neutral-300 leading-relaxed mb-4 text-base">
                Whether you're maintaining a sharp weekly skin fade, refining your beard, or treating yourself to a traditional haircut, Joel's Barber Shop is committed to providing consistent, high-standard barbering in a genuinely comfortable setting.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Located conveniently on California City Boulevard in Suite 114, our shop is built around genuine hospitality and meticulous technique. No rushed cuts, no cutting corners—just honest craftsmanship and a welcoming seat.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {craftPillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-md bg-[#191919] border border-[#282828] hover:border-[#C8A45D]/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded bg-[#202020] text-[#C8A45D] flex items-center justify-center mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1.5">{pillar.title}</h4>
                    <p className="text-neutral-400 text-xs leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Quick Action */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-3 bg-[#C8A45D] hover:bg-[#dfbf77] text-black font-semibold text-xs tracking-wider uppercase rounded-sm transition-all duration-200 cursor-pointer shadow-md text-center"
              >
                Schedule Chair Time · {BUSINESS_DATA.phoneFormatted}
              </button>
              <a
                href={BUSINESS_DATA.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 border border-neutral-700 hover:border-[#C8A45D] text-neutral-300 hover:text-white font-medium text-xs tracking-wider uppercase rounded-sm transition-colors text-center"
              >
                Find Us on California City Blvd
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
