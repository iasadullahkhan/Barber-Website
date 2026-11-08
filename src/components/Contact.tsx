import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Copy, Check, AlertCircle, ExternalLink, Calendar } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

interface ContactProps {
  onOpenBooking: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenBooking }) => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'address' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'address') {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#101010] border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8A45D] font-semibold mb-3">
            Location & Contact
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 uppercase text-balance">
            VISIT JOEL'S BARBER SHOP
          </h2>
          <div className="w-16 h-0.5 bg-[#C8A45D] mx-auto mb-6" />
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Conveniently situated in California City. Call ahead or stop by for a fresh cut.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Details, Phone, and Hours */}
          <div className="lg:col-span-6 space-y-6">
            {/* Primary Details Card */}
            <div className="p-6 sm:p-8 rounded-lg bg-[#161616] border border-[#282828] shadow-xl">
              <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span>Shop Coordinates</span>
              </h3>

              <div className="space-y-6">
                {/* Address Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-[#202020] border border-[#2e2e2e] flex items-center justify-center text-[#C8A45D] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-neutral-400">Physical Address</p>
                    <p className="text-base font-medium text-white mt-0.5">
                      {BUSINESS_DATA.address.street}
                    </p>
                    <p className="text-sm text-neutral-300">
                      {BUSINESS_DATA.address.city}, {BUSINESS_DATA.address.state} {BUSINESS_DATA.address.zip}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <a
                        href={BUSINESS_DATA.mapsDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C8A45D] hover:underline"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Open in Google Maps</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(BUSINESS_DATA.address.full, 'address')}
                        className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedAddress ? 'Copied' : 'Copy Address'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-4 pt-4 border-t border-[#222222]">
                  <div className="w-10 h-10 rounded-md bg-[#202020] border border-[#2e2e2e] flex items-center justify-center text-[#C8A45D] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-neutral-400">Direct Telephone</p>
                    <a
                      href={BUSINESS_DATA.phoneTel}
                      className="text-lg font-bold text-white hover:text-[#C8A45D] transition-colors tabular-nums mt-0.5 block"
                    >
                      {BUSINESS_DATA.phoneFormatted}
                    </a>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Verified phone line for walk-in checks and chair reservations.
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <a
                        href={BUSINESS_DATA.phoneTel}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#C8A45D] text-black text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#dfbf77]"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Dial Phone</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(BUSINESS_DATA.phone, 'phone')}
                        className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedPhone ? 'Copied' : 'Copy Number'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card (with Owner Confirmation Notice) */}
            <div className="p-6 sm:p-8 rounded-lg bg-[#161616] border border-[#282828] shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#C8A45D]" />
                  <span>Business Hours</span>
                </h3>
                <span className="text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider">
                  Tentative Schedule
                </span>
              </div>

              {/* Hours Notice regarding Google Maps 3:30 AM closing anomaly */}
              <div className="mb-4 p-3 rounded bg-[#1e1e1e] border border-[#2c2c2c] flex items-start gap-2.5 text-xs text-neutral-300">
                <AlertCircle className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white">Owner Notice: </span>
                  Google Maps currently shows a 3:30 AM closing time. We display typical daytime barbershop hours below subject to Joel's confirmation.
                </div>
              </div>

              {/* Tentative Hours Table */}
              <div className="space-y-2.5 divide-y divide-[#222222]">
                {BUSINESS_DATA.hoursTentative.map((item) => (
                  <div key={item.day} className="pt-2.5 first:pt-0 flex items-center justify-between text-sm">
                    <span className="text-neutral-300 font-medium">{item.day}</span>
                    <div className="text-right">
                      <span className="text-white font-semibold tabular-nums">{item.hours}</span>
                      <p className="text-[11px] text-neutral-400">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#242424] flex items-center justify-between text-xs text-neutral-400">
                <span>Need to confirm current day availability?</span>
                <a
                  href={BUSINESS_DATA.phoneTel}
                  className="text-[#C8A45D] font-semibold hover:underline"
                >
                  Call Before Visiting
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Location Embed & Route Launcher */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-lg overflow-hidden border border-[#282828] bg-[#161616] shadow-xl flex flex-col h-full min-h-[460px]">
              {/* Maps Header Bar */}
              <div className="p-4 bg-[#1b1b1b] border-b border-[#282828] flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">Google Maps Location</p>
                  <p className="text-xs text-neutral-400">California City, California</p>
                </div>
                <a
                  href={BUSINESS_DATA.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#C8A45D] hover:bg-[#dfbf77] text-black text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Interactive Google Map Embed Frame */}
              <div className="relative flex-1 w-full min-h-[360px] bg-[#121212]">
                <iframe
                  title="Joel's Barber Shop Location Map"
                  src="https://maps.google.com/maps?q=8209+California+City+Blvd+Suite+114,+California+City,+CA+93505&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full min-h-[360px] border-0 filter invert-[90%] hue-rotate-[180deg] contrast-[85%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Map showing Joel's Barber Shop at 8209 Suite-114 California City Blvd"
                />
              </div>

              {/* Maps Footer Info */}
              <div className="p-4 bg-[#181818] border-t border-[#262626] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-neutral-400">
                <span>Free parking available along California City Blvd plaza.</span>
                <a
                  href={BUSINESS_DATA.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#C8A45D] hover:underline font-medium"
                >
                  <span>Open Full Directions in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
