import React from 'react';
import { Clock, Info, Calendar } from 'lucide-react';
import { services } from '../data/services';
import { salonConfig } from '../config/salonConfig';

export default function Services({ onSelectService, onOpenBooking }) {
  return (
    <section id="services" className="py-20 sm:py-28 bg-ivory-100/50 dark:bg-charcoal-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-champagne-600 dark:text-champagne-400">
            <span className="w-6 h-[1px] bg-champagne-500" />
            <span>Couture Treatments</span>
            <span className="w-6 h-[1px] bg-champagne-500" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-charcoal-900 dark:text-ivory-50 tracking-tight">
            OUR SERVICES
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 dark:text-charcoal-300">
            A comprehensive suite of expert beauty rituals, designed with clean formulations and personalized care to bring your vision to life.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col rounded-2xl overflow-hidden bg-ivory-50 dark:bg-charcoal-800/90 border border-ivory-200 dark:border-charcoal-700 shadow-soft hover:shadow-luxury transition-all duration-300 flex-1 hover:-translate-y-1"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[16/11] overflow-hidden bg-ivory-200 dark:bg-charcoal-900">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-charcoal-900/70 text-ivory-100 backdrop-blur-md border border-ivory-100/10">
                    {service.category}
                  </span>
                </div>

                {/* Duration */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] text-ivory-200 font-medium">
                  <Clock className="w-3 h-3 text-champagne-300" />
                  <span>{service.duration}</span>
                </div>

                {/* Price */}
                <div className="absolute bottom-3 right-3 text-right">
                  <span className="text-[10px] uppercase text-champagne-300 block -mb-1">From</span>
                  <span className="text-xs font-semibold text-ivory-50">{service.startingPrice}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-serif font-medium text-charcoal-900 dark:text-ivory-100 group-hover:text-champagne-600 dark:group-hover:text-champagne-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-xs text-charcoal-600 dark:text-charcoal-300 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Actions: Learn More (Modal) & Book Now */}
                <div className="pt-3 border-t border-ivory-200 dark:border-charcoal-700/60 flex items-center gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 inline-flex items-center justify-center gap-1 py-2 px-3 rounded-lg border border-charcoal-200 dark:border-charcoal-700 text-[11px] font-semibold uppercase tracking-wider text-charcoal-700 dark:text-ivory-200 hover:bg-ivory-200 dark:hover:bg-charcoal-700 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5 text-champagne-600 dark:text-champagne-400" />
                    <span>Learn More</span>
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.name)}
                    className="flex-1 inline-flex items-center justify-center gap-1 py-2 px-3 rounded-lg bg-charcoal-900 text-ivory-50 dark:bg-champagne-400 dark:text-charcoal-950 text-[11px] font-semibold uppercase tracking-wider hover:bg-champagne-600 dark:hover:bg-champagne-300 transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo pricing disclaimer */}
        <p className="mt-8 text-center text-xs text-charcoal-500 dark:text-charcoal-400 italic">
          {salonConfig.meta.priceDisclaimer}
        </p>

      </div>
    </section>
  );
}
