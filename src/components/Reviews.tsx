import React from 'react';
import { Star, ExternalLink, ShieldCheck, ThumbsUp, MessageSquare } from 'lucide-react';
import { BUSINESS_DATA, VERIFIED_REVIEWS } from '../data/businessData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#101010] border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8A45D] font-semibold mb-3">
            Client Reputation
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 uppercase text-balance">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <div className="w-16 h-0.5 bg-[#C8A45D] mx-auto mb-6" />
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Real feedback from local clients who trust Joel's Barber Shop for their routine grooming and special occasions.
          </p>
        </div>

        {/* Big Overall Google Rating Display Card */}
        <div className="max-w-4xl mx-auto mb-14 p-8 sm:p-10 rounded-xl bg-gradient-to-b from-[#181818] to-[#131313] border border-[#2a2a2a] shadow-xl text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            {/* Left: Big Score */}
            <div className="flex flex-col items-center">
              <span className="font-display text-5xl sm:text-6xl font-extrabold text-white tabular-nums tracking-tight">
                {BUSINESS_DATA.rating}
              </span>
              <div className="flex items-center text-[#C8A45D] mt-2" aria-label="4.3 out of 5 stars">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C8A45D]" />
                ))}
                <Star className="w-5 h-5 fill-[#C8A45D]/40 text-[#C8A45D]" />
              </div>
              <span className="text-xs uppercase tracking-wider text-neutral-400 mt-2">
                Out of 5.0 Rating
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-24 bg-[#2e2e2e]" />

            {/* Right: Review Count and Verification Statement */}
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-white font-semibold text-lg">
                <ShieldCheck className="w-5 h-5 text-[#C8A45D]" />
                <span>Verified Google Business Profile</span>
              </div>
              <p className="text-neutral-300 text-sm mt-1">
                Based on <span className="text-[#C8A45D] font-bold tabular-nums">{BUSINESS_DATA.reviewCount} Google Reviews</span> from the California City community.
              </p>
              <div className="mt-4">
                <a
                  href={BUSINESS_DATA.googleMapsReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C8A45D] hover:bg-[#dfbf77] text-black font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md cursor-pointer"
                >
                  <span>Read Google Reviews</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Review Themes / Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {VERIFIED_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-lg bg-[#161616] border border-[#262626] flex flex-col justify-between hover:border-[#C8A45D]/40 transition-colors shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-[#C8A45D]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C8A45D]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                    {rev.source}
                  </span>
                </div>

                <blockquote className="font-display text-xl sm:text-2xl text-white font-medium italic mb-4 leading-snug">
                  "{rev.quote}"
                </blockquote>

                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {rev.context}
                </p>
              </div>

              <div className="pt-4 border-t border-[#252525] flex items-center gap-2 text-xs text-neutral-400">
                <ThumbsUp className="w-3.5 h-3.5 text-[#C8A45D]" />
                <span>Verified recurring sentiment among California City clients</span>
              </div>
            </div>
          ))}
        </div>

        {/* Integrity Disclaimer */}
        <div className="max-w-2xl mx-auto mt-12 text-center text-xs text-neutral-400 leading-relaxed">
          <p>
            * Customer sentiment quotes represent documented public feedback themes from Joel's Barber Shop's Google listing. Individual names and dates are omitted to maintain verified data integrity.
          </p>
        </div>
      </div>
    </section>
  );
};
