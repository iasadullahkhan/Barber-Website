import React, { useState } from 'react';
import { X, Phone, Copy, Check, Clock, Calendar, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(BUSINESS_DATA.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#161616] border border-[#2e2e2e] rounded-xl shadow-2xl p-6 sm:p-8 text-white my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white bg-[#222222] rounded-full transition-colors cursor-pointer"
          aria-label="Close Appointment Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#C8A45D]/15 border border-[#C8A45D]/40 text-[#C8A45D] flex items-center justify-center mx-auto mb-3">
            <Phone className="w-6 h-6" />
          </div>
          <h3 id="booking-modal-title" className="font-display text-2xl font-bold uppercase tracking-tight">
            Call to Book Chair Time
          </h3>
          <p className="text-sm text-neutral-300 mt-1">
            Joel's Barber Shop schedules all appointments and walk-in inquiries directly via phone.
          </p>
        </div>

        {/* Preselected Service Callout */}
        {preselectedService && (
          <div className="mb-5 p-3.5 rounded bg-[#1e1e1e] border border-[#333333] flex items-center justify-between text-xs sm:text-sm">
            <span className="text-neutral-400">Selected Service:</span>
            <span className="text-[#C8A45D] font-semibold">{preselectedService}</span>
          </div>
        )}

        {/* Big Direct Call Card */}
        <div className="p-5 rounded-lg bg-[#121212] border border-[#262626] text-center mb-6">
          <p className="text-xs uppercase tracking-wider text-neutral-400 mb-1">
            Direct Shop Telephone
          </p>
          <p className="font-display text-3xl font-extrabold text-white tracking-wide tabular-nums mb-4">
            {BUSINESS_DATA.phoneFormatted}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={BUSINESS_DATA.phoneTel}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 bg-[#C8A45D] hover:bg-[#dfbf77] text-black font-bold text-sm uppercase tracking-wider rounded-sm transition-all shadow-lg shadow-[#C8A45D]/20 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 bg-[#222222] hover:bg-[#2c2c2c] text-neutral-200 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors border border-[#333333] cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied' : 'Copy Number'}</span>
            </button>
          </div>
        </div>

        {/* Helpful Pre-Call Checklist */}
        <div className="space-y-3 mb-6 text-xs text-neutral-300">
          <p className="font-semibold text-white uppercase tracking-wider text-[11px]">
            Quick Pre-Call Checklist:
          </p>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center gap-2.5 p-2.5 rounded bg-[#1c1c1c] border border-[#262626]">
              <Sparkles className="w-4 h-4 text-[#C8A45D] shrink-0" />
              <span>Specify your preferred haircut (Fade, Scissor Cut, Beard Combo)</span>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 rounded bg-[#1c1c1c] border border-[#262626]">
              <Calendar className="w-4 h-4 text-[#C8A45D] shrink-0" />
              <span>Have your preferred day and time window ready</span>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 rounded bg-[#1c1c1c] border border-[#262626]">
              <MapPin className="w-4 h-4 text-[#C8A45D] shrink-0" />
              <span>Located at 8209 Suite-114 California City Blvd</span>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center pt-4 border-t border-[#262626]">
          <p className="text-xs text-neutral-400">
            Prefer to drop by? Walk-ins are always welcomed based on chair availability.
          </p>
        </div>
      </div>
    </div>
  );
};
