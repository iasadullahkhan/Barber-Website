import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon, Camera } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/businessData';

export const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'shop' | 'craft' | 'haircut'>('all');

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : 0
        );
      }
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-24 bg-[#141414] border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8A45D] font-semibold mb-3">
            Visual Showcase
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 uppercase text-balance">
            THE CRAFT & ATMOSPHERE
          </h2>
          <div className="w-16 h-0.5 bg-[#C8A45D] mx-auto mb-6" />
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            A visual glimpse into professional barber chair setups, artisan shear work, and sharp finishes.
          </p>
          <p className="text-xs text-neutral-400 mt-2 flex items-center justify-center gap-1.5">
            <Camera className="w-3.5 h-3.5 text-[#C8A45D]" />
            <span>High-definition showcase assets prepared for client presentation</span>
          </p>
        </div>

        {/* Gallery Filter Controls */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#C8A45D] text-black shadow-md'
                : 'bg-[#1a1a1a] text-neutral-400 hover:text-white hover:bg-[#222222] border border-[#2b2b2b]'
            }`}
          >
            All Photos
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('haircut')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
              activeCategory === 'haircut'
                ? 'bg-[#C8A45D] text-black shadow-md'
                : 'bg-[#1a1a1a] text-neutral-400 hover:text-white hover:bg-[#222222] border border-[#2b2b2b]'
            }`}
          >
            Fades & Haircuts
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('craft')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
              activeCategory === 'craft'
                ? 'bg-[#C8A45D] text-black shadow-md'
                : 'bg-[#1a1a1a] text-neutral-400 hover:text-white hover:bg-[#222222] border border-[#2b2b2b]'
            }`}
          >
            Barber Craft & Tools
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('shop')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
              activeCategory === 'shop'
                ? 'bg-[#C8A45D] text-black shadow-md'
                : 'bg-[#1a1a1a] text-neutral-400 hover:text-white hover:bg-[#222222] border border-[#2b2b2b]'
            }`}
          >
            Shop Atmosphere
          </button>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative h-72 sm:h-80 rounded-lg overflow-hidden border border-[#282828] bg-[#181818] cursor-pointer hover:border-[#C8A45D]/80 transition-all duration-300 shadow-lg"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 filter brightness-95"
                referrerPolicy="no-referrer"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Hover Badge / Action */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-75 transition-all duration-200">
                <Maximize2 className="w-4 h-4 text-[#C8A45D]" />
              </div>

              {/* Title & Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-display text-base font-bold text-white group-hover:text-[#C8A45D] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 line-clamp-1 mt-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Top Bar inside modal */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-neutral-400 z-10">
            <span className="text-xs tracking-wider uppercase">
              Photo {selectedImageIndex + 1} of {filteredItems.length}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex(null);
              }}
              className="p-2 text-white hover:text-[#C8A45D] bg-neutral-900/80 rounded-full border border-neutral-700 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex((prev) =>
                prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
              );
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white hover:text-[#C8A45D] bg-neutral-900/80 rounded-full border border-neutral-700 cursor-pointer z-10 transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Image Container */}
          <div
            className="max-w-4xl max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[selectedImageIndex].src}
              alt={filteredItems[selectedImageIndex].alt}
              className="max-h-[70vh] w-auto object-contain rounded-lg border border-neutral-800 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center max-w-xl">
              <h4 className="font-display text-lg font-bold text-white">
                {filteredItems[selectedImageIndex].title}
              </h4>
              <p className="text-sm text-neutral-400 mt-1">
                {filteredItems[selectedImageIndex].caption}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex((prev) =>
                prev !== null ? (prev + 1) % filteredItems.length : 0
              );
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white hover:text-[#C8A45D] bg-neutral-900/80 rounded-full border border-neutral-700 cursor-pointer z-10 transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
