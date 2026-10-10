import React, { useState } from 'react';
import { Clock, Calendar, Sparkles } from 'lucide-react';
import { menuServices, serviceCategories } from '../data/services';
import { salonConfig } from '../config/salonConfig';

export default function PricingMenu({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu = activeCategory === "All"
    ? menuServices
    : menuServices.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-champagne-600 dark:text-champagne-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Service Directory</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-charcoal-900 dark:text-ivory-50 tracking-tight">
            BEAUTY SERVICE MENU
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 dark:text-charcoal-300">
            Transparent pricing, unhurried care, and master craftsmanship. Explore our specialized offerings by category.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {serviceCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-charcoal-900 text-ivory-50 dark:bg-champagne-400 dark:text-charcoal-950 shadow-md scale-105'
                  : 'bg-ivory-100 dark:bg-charcoal-800 text-charcoal-700 dark:text-ivory-200 hover:bg-ivory-200 dark:hover:bg-charcoal-700 border border-ivory-200 dark:border-charcoal-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredMenu.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-ivory-50 dark:bg-charcoal-800/80 border border-ivory-200 dark:border-charcoal-700 hover:border-champagne-400/50 transition-all duration-300 flex flex-col justify-between shadow-soft group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-champagne-600 dark:text-champagne-400 block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-serif font-medium text-charcoal-900 dark:text-ivory-50 group-hover:text-champagne-600 dark:group-hover:text-champagne-400 transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-base sm:text-lg font-serif font-bold text-champagne-700 dark:text-champagne-300">
                      {item.price}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-ivory-200 dark:border-charcoal-700/60 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-charcoal-500 dark:text-charcoal-400 font-medium">
                  <Clock className="w-3.5 h-3.5 text-champagne-500" />
                  <span>{item.duration}</span>
                </div>

                <button
                  onClick={() => onOpenBooking(item.name)}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-charcoal-800 dark:text-ivory-100 hover:bg-champagne-100 dark:hover:bg-charcoal-700 transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5 text-champagne-600 dark:text-champagne-400" />
                  <span>Book</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Demo pricing disclaimer note */}
        <div className="mt-12 text-center p-4 rounded-2xl bg-ivory-100/70 dark:bg-charcoal-900/50 border border-ivory-200 dark:border-charcoal-800 max-w-2xl mx-auto">
          <p className="text-xs text-charcoal-600 dark:text-charcoal-300 italic">
            "{salonConfig.meta.priceDisclaimer}"
          </p>
        </div>

      </div>
    </section>
  );
}
