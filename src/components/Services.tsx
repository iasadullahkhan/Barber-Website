import React, { useState } from 'react';
import { Phone, Clock, CheckCircle2, Info, Sparkles, Filter } from 'lucide-react';
import { SERVICES_LIST, ServiceItem, BUSINESS_DATA } from '../data/businessData';

interface ServicesProps {
  onSelectServiceToBook: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceToBook }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'haircut' | 'beard' | 'combo'>('all');

  const filteredServices = activeFilter === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(item => {
        if (activeFilter === 'haircut') return item.category === 'haircut' || item.category === 'special';
        return item.category === activeFilter;
      });

  return (
    <section id="services" className="py-24 bg-[#101010] border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8A45D] font-semibold mb-3">
            Precision & Craft
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 uppercase text-balance">
            SERVICES & EXPERIENCES
          </h2>
          <div className="w-16 h-0.5 bg-[#C8A45D] mx-auto mb-6" />
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            From modern skin fades to traditional cuts and complete beard grooming. Browse our standard service offerings below.
          </p>
        </div>

        {/* Business Owner Customization Notice Banner */}
        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-md bg-[#191919] border border-[#2e2e2e] flex items-start sm:items-center gap-3 text-xs sm:text-sm text-neutral-300">
          <Info className="w-5 h-5 text-[#C8A45D] shrink-0 mt-0.5 sm:mt-0" />
          <div className="flex-1">
            <span className="font-semibold text-white">Owner Confirmation Note: </span>
            The services and pricing listed below are suggested industry categories. Live in-shop pricing is confirmed upon consultation or appointment call with Joel.
          </div>
        </div>

        {/* Interactive Filter Tabs (Functional Buttons) */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#C8A45D] text-black shadow-md'
                : 'bg-[#181818] text-neutral-400 hover:text-white hover:bg-[#202020] border border-[#282828]'
            }`}
          >
            All Offerings
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('haircut')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
              activeFilter === 'haircut'
                ? 'bg-[#C8A45D] text-black shadow-md'
                : 'bg-[#181818] text-neutral-400 hover:text-white hover:bg-[#202020] border border-[#282828]'
            }`}
          >
            Haircuts & Fades
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('beard')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
              activeFilter === 'beard'
                ? 'bg-[#C8A45D] text-black shadow-md'
                : 'bg-[#181818] text-neutral-400 hover:text-white hover:bg-[#202020] border border-[#282828]'
            }`}
          >
            Beard Grooming
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('combo')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
              activeFilter === 'combo'
                ? 'bg-[#C8A45D] text-black shadow-md'
                : 'bg-[#181818] text-neutral-400 hover:text-white hover:bg-[#202020] border border-[#282828]'
            }`}
          >
            Combos
          </button>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-6 rounded-lg bg-[#151515] border border-[#262626] hover:border-[#C8A45D]/60 hover:bg-[#181818] transition-all duration-300 shadow-lg"
            >
              {/* Card Top */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-[#C8A45D] transition-colors">
                    {service.name}
                  </h3>
                  {service.popular && (
                    <span className="text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider">
                      Popular
                    </span>
                  )}
                </div>

                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Card Bottom: Metadata and CTA */}
              <div className="pt-4 border-t border-[#242424]">
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Est. {service.durationEstimate}</span>
                  </div>
                  <span className="text-neutral-300 font-medium italic">
                    {service.pricePlaceholder}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectServiceToBook(service.name)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-[#1e1e1e] group-hover:bg-[#C8A45D] text-neutral-200 group-hover:text-black font-semibold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call to Book Service</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Service Bottom Callout */}
        <div className="mt-14 text-center">
          <p className="text-sm text-neutral-400">
            Looking for a specific styling cut or hot towel treatment? Call us directly at{' '}
            <a
              href={BUSINESS_DATA.phoneTel}
              className="text-[#C8A45D] font-semibold hover:underline tabular-nums"
            >
              {BUSINESS_DATA.phoneFormatted}
            </a>{' '}
            to discuss your haircut preference.
          </p>
        </div>
      </div>
    </section>
  );
};
