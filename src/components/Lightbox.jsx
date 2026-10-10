import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ isOpen, items, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !items || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-950/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-3 rounded-full bg-charcoal-900/80 text-ivory-100 hover:bg-champagne-500 hover:text-charcoal-950 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400"
        aria-label="Close image lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {items.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-charcoal-900/80 text-ivory-100 hover:bg-champagne-500 hover:text-charcoal-950 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {items.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-charcoal-900/80 text-ivory-100 hover:bg-champagne-500 hover:text-charcoal-950 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Image and Caption Container */}
      <div
        className="relative z-10 max-w-5xl max-h-[92vh] flex flex-col items-center justify-center pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-charcoal-800 bg-charcoal-900 max-h-[75vh]">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-auto h-auto max-h-[75vh] max-w-full object-contain"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center text-ivory-50 max-w-xl">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-champagne-400 text-charcoal-950">
              {currentItem.category}
            </span>
            <span className="text-xs text-charcoal-400">
              {currentIndex + 1} of {items.length}
            </span>
          </div>
          <h3 className="font-serif text-lg font-medium text-ivory-100">
            {currentItem.title}
          </h3>
          {currentItem.description && (
            <p className="text-xs text-charcoal-300 mt-1">
              {currentItem.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
