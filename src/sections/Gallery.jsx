import React, { useState } from 'react';
import { Sparkles, Maximize2 } from 'lucide-react';
import { galleryItems, galleryCategories } from '../data/gallery';
import Lightbox from '../components/Lightbox';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-champagne-600 dark:text-champagne-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-charcoal-900 dark:text-ivory-50 tracking-tight">
            THE SALON GALLERY
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 dark:text-charcoal-300">
            A glimpse into our serene interior aesthetic, hairstyling creations, skincare rituals, and celebration looks.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-charcoal-900 text-ivory-50 dark:bg-champagne-400 dark:text-charcoal-950 shadow-md scale-105'
                  : 'bg-ivory-100 dark:bg-charcoal-800 text-charcoal-700 dark:text-ivory-200 hover:bg-ivory-200 dark:hover:bg-charcoal-700 border border-ivory-200 dark:border-charcoal-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-ivory-200 dark:bg-charcoal-900 cursor-pointer shadow-soft hover:shadow-luxury border border-ivory-200 dark:border-charcoal-700"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
              />
              
              {/* Overlay with Hover Reveal */}
              <div className="absolute inset-0 bg-charcoal-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-charcoal-900/80 text-champagne-400 border border-champagne-400/30">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-champagne-300">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-ivory-50 mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ivory-200/80 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Gallery Disclaimer */}
        <div className="mt-10 text-center text-xs text-charcoal-400 dark:text-charcoal-400 italic">
          * Gallery images represent demonstration aesthetic photography for salon template showcase.
        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxIndex !== null}
        items={filteredItems}
        currentIndex={lightboxIndex || 0}
        onClose={handleCloseLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
