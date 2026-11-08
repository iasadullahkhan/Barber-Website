import React, { useState } from 'react';
import { Phone, MapPin, Sparkles } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { CTASection } from './components/CTASection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { OwnerGuideModal } from './components/OwnerGuideModal';
import { BUSINESS_DATA } from './data/businessData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [isOwnerGuideOpen, setIsOwnerGuideOpen] = useState(false);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#101010] text-white flex flex-col selection:bg-[#C8A45D]/30 selection:text-white pb-14 sm:pb-0">
      {/* Client Pitch Bar (Discreet, professional top notification that can be dismissed or opened) */}
      <div className="bg-[#181818] border-b border-[#292929] px-4 py-2 text-center text-xs text-neutral-300 flex items-center justify-center gap-2 flex-wrap">
        <span className="font-semibold text-[#DFBF77]">Joel's Barber Shop · Client Website Demonstration</span>
        <span className="hidden sm:inline text-neutral-500" aria-hidden="true">·</span>
        <span className="hidden sm:inline text-neutral-400">California City, CA</span>
        <button
          type="button"
          onClick={() => setIsOwnerGuideOpen(true)}
          className="inline-flex items-center gap-1 text-[#C8A45D] hover:underline font-medium cursor-pointer ml-1"
        >
          <Sparkles className="w-3 h-3" />
          <span>View Customization & Handover Guide</span>
        </button>
      </div>

      {/* Main Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <About onOpenBooking={() => handleOpenBooking()} />
        <Services onSelectServiceToBook={(name) => handleOpenBooking(name)} />
        <Gallery />
        <Reviews />
        <CTASection onOpenBooking={() => handleOpenBooking()} />
        <Contact onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer
        onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Mobile Sticky Quick Action Bar (Under 15% viewport height rule) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#121212]/95 backdrop-blur-md border-t border-[#262626] px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-neutral-400">Joel's Barber Shop</span>
          <span className="text-xs font-bold text-white tabular-nums">(760) 373-7367</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={BUSINESS_DATA.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded bg-[#1e1e1e] border border-[#2e2e2e] text-[#C8A45D] hover:text-white"
            aria-label="Directions in Maps"
          >
            <MapPin className="w-4 h-4" />
          </a>
          <a
            href={BUSINESS_DATA.phoneTel}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#C8A45D] hover:bg-[#dfbf77] text-black font-bold text-xs uppercase tracking-wider rounded-sm shadow-md"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call to Book</span>
          </a>
        </div>
      </div>

      {/* Interactive Booking / Call Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedService}
      />

      {/* Owner Demo Handover Guide Modal */}
      <OwnerGuideModal
        isOpen={isOwnerGuideOpen}
        onClose={() => setIsOwnerGuideOpen(false)}
      />
    </div>
  );
}
