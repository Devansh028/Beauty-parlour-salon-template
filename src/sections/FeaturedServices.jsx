import React from 'react';
import { Sparkles, Clock, ArrowRight, Check } from 'lucide-react';
import { services } from '../data/services';
import { scrollToSection } from '../utils/helpers';

export default function FeaturedServices({ onSelectService, onOpenBooking }) {
  // Filter the 3 featured services
  const featured = services.filter((s) => s.featured);

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-champagne-600 dark:text-champagne-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-charcoal-900 dark:text-ivory-50 tracking-tight">
            SIGNATURE EXPERIENCES
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 dark:text-charcoal-300">
            Three hallmark treatments celebrated for transformative results, refined technique, and supreme relaxation.
          </p>
        </div>

        {/* 3 Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col rounded-3xl overflow-hidden bg-ivory-50 dark:bg-charcoal-800 border border-ivory-200 dark:border-charcoal-700/80 shadow-soft hover:shadow-luxury transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Editorial Image with Badge */}
              <div className="relative aspect-[4/3] overflow-hidden bg-ivory-200 dark:bg-charcoal-900">
                <img
                  src={service.image}
                  alt={service.featuredTitle || service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-charcoal-900/80 text-champagne-300 backdrop-blur-md border border-champagne-400/30">
                    {service.featuredBadge || "Signature"}
                  </span>
                </div>

                {/* Price and Duration Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-ivory-50">
                  <div className="flex items-center gap-1.5 text-xs text-ivory-200 bg-charcoal-900/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-champagne-300" />
                    <span>{service.duration}</span>
                  </div>
                  <span className="font-serif text-lg font-medium text-champagne-300">
                    From {service.startingPrice}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-medium text-charcoal-900 dark:text-ivory-100 group-hover:text-champagne-600 dark:group-hover:text-champagne-400 transition-colors">
                    {service.featuredTitle || service.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* What's included preview */}
                <div className="space-y-2 pt-2 border-t border-ivory-200 dark:border-charcoal-700">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-400 dark:text-charcoal-400">
                    Experience Highlights
                  </div>
                  <ul className="space-y-1.5 text-xs text-charcoal-700 dark:text-charcoal-200">
                    {service.included.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-champagne-600 dark:text-champagne-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => {
                      if (onOpenBooking) onOpenBooking(service.name);
                      else scrollToSection('booking');
                    }}
                    className="flex-1 py-3 px-4 rounded-xl bg-charcoal-900 text-ivory-50 dark:bg-champagne-400 dark:text-charcoal-950 font-semibold text-xs uppercase tracking-wider hover:bg-champagne-600 dark:hover:bg-champagne-300 transition-colors text-center"
                  >
                    Book Now
                  </button>

                  <button
                    onClick={() => onSelectService(service)}
                    className="p-3 rounded-xl border border-charcoal-200 dark:border-charcoal-700 text-charcoal-700 dark:text-ivory-200 hover:bg-ivory-200 dark:hover:bg-charcoal-700 transition-colors text-xs font-medium"
                    aria-label={`Learn more about ${service.name}`}
                    title="View details"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to view all */}
        <div className="mt-14 text-center">
          <button
            onClick={() => scrollToSection('services')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-charcoal-300 dark:border-charcoal-700 text-xs font-bold uppercase tracking-widest text-charcoal-800 dark:text-ivory-100 hover:bg-ivory-200/70 dark:hover:bg-charcoal-800 transition-colors"
          >
            <span>Explore All 8 Salon Services</span>
            <ArrowRight className="w-4 h-4 text-champagne-600 dark:text-champagne-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
