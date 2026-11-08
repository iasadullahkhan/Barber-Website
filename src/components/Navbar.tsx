import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Scissors, MapPin } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#101010]/95 backdrop-blur-md border-b border-[#2A2A2A] py-3.5 shadow-xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (single line, single element) */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-white group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D] rounded"
            aria-label="Joel's Barber Shop Home"
          >
            <div className="w-8 h-8 rounded-full border border-[#C8A45D]/60 flex items-center justify-center text-[#C8A45D] group-hover:bg-[#C8A45D]/10 transition-colors">
              <Scissors className="w-4 h-4" />
            </div>
            <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#C8A45D] transition-colors">
              Joel's Barber Shop
            </span>
          </a>

          {/* Zone 2: Navigation Links (single line, unboxed, hover underline) */}
          <nav
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#C8A45D] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C8A45D] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action (Call to Book) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-black bg-[#C8A45D] hover:bg-[#dfbf77] active:bg-[#b0873e] rounded-sm transition-all duration-200 shadow-md hover:shadow-[#C8A45D]/20 cursor-pointer whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C8A45D]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-[#C8A45D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D] rounded"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141414] border-b border-[#2A2A2A] px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-neutral-200 hover:text-[#C8A45D] hover:bg-[#1f1f1f] rounded transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#2A2A2A] flex flex-col gap-2">
            <a
              href={BUSINESS_DATA.phoneTel}
              className="flex items-center justify-center gap-2 py-3 px-4 bg-[#C8A45D] text-black font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-[#dfbf77]"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BUSINESS_DATA.phoneFormatted}</span>
            </a>
            <a
              href={BUSINESS_DATA.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1f1f1f] text-neutral-300 text-xs font-medium rounded-sm hover:text-white"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span>California City Blvd Directions</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
