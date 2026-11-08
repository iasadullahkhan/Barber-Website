import React from 'react';
import { X, CheckCircle2, AlertCircle, Sparkles, Phone, MapPin, Clock, Camera } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

interface OwnerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerGuideModal: React.FC<OwnerGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="owner-guide-title"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#161616] border border-[#333333] rounded-xl shadow-2xl p-6 sm:p-8 text-white my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white bg-[#222222] rounded-full transition-colors cursor-pointer"
          aria-label="Close Guide"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C8A45D] uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Commercial Presentation & Handover Blueprint</span>
          </div>
          <h3 id="owner-guide-title" className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
            Client Demonstration Guide
          </h3>
          <p className="text-sm text-neutral-300 mt-2">
            Prepared for presenting this custom website demonstration to the owner of <span className="text-[#C8A45D] font-semibold">Joel's Barber Shop</span>.
          </p>
        </div>

        {/* Section 1: Verified Data Already Integrated */}
        <div className="mb-6 p-4 rounded-lg bg-[#1a1a1a] border border-[#2b2b2b]">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>1. Verified Live Business Data (Active)</span>
          </h4>
          <ul className="space-y-2 text-xs text-neutral-300">
            <li>• <strong className="text-white">Business Name:</strong> Joel's Barber Shop</li>
            <li>• <strong className="text-white">Address:</strong> 8209 Suite-114 California City Blvd, California City, CA 93505</li>
            <li>• <strong className="text-white">Direct Phone:</strong> +1 760-373-7367 (Dialable one-tap button on mobile)</li>
            <li>• <strong className="text-white">Google Social Proof:</strong> 4.3 / 5.0 Star Rating backed by 122 Google Reviews</li>
            <li>• <strong className="text-white">Verified Customer Themes:</strong> "Perfect haircuts and great service", "Relaxed atmosphere and quality haircuts"</li>
          </ul>
        </div>

        {/* Section 2: Items Flagged for Owner Confirmation */}
        <div className="mb-6 p-4 rounded-lg bg-[#1f1d18] border border-[#44381e]">
          <h4 className="text-sm font-semibold text-[#DFBF77] uppercase tracking-wider mb-3 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#C8A45D]" />
            <span>2. Customization Checklist for Joel</span>
          </h4>
          <div className="space-y-3 text-xs text-neutral-200">
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Business Hours Confirmation:</strong> Google Maps lists a closing time of 3:30 AM (potential listing typo). The site features standard daytime placeholders ready to update in 1 minute.
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Menu & Live Pricing:</strong> The 6 service cards (Classic Haircut, Modern Fade, Beard Trim, Combo, etc.) are placeholders. The owner can provide exact dollar prices or keep "Price upon request".
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Camera className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Authentic Shop Photography:</strong> High-resolution luxury barbershop demonstration photos are currently displayed. These can be seamlessly replaced with real photos of Joel's shop interior, barber chairs, and actual haircuts.
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Booking Mechanism:</strong> Configured for direct phone call booking (`tel:+17603737367`), avoiding fake scheduling systems. If Joel uses Booksy, Square, or Fresha, a direct booking link can be hooked up instantly.
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Technical & SEO Value Props for the Pitch */}
        <div className="p-4 rounded-lg bg-[#141414] border border-[#262626] mb-6 text-xs text-neutral-300">
          <p className="font-semibold text-white uppercase tracking-wider mb-2">
            Key Selling Points for the Business Owner:
          </p>
          <ul className="space-y-1.5 list-disc list-inside">
            <li>100% Mobile-first responsive design tailored for local California City searches.</li>
            <li>Embedded Schema.org LocalBusiness / BarberShop JSON-LD for higher Google ranking.</li>
            <li>Fast loading with zero clutter, zero fake reviews, and authentic luxury aesthetic.</li>
            <li>High conversion CTA buttons placing calls directly to the shop phone.</li>
          </ul>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#292929]">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded bg-[#C8A45D] hover:bg-[#dfbf77] text-black text-xs font-semibold uppercase tracking-wider cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
