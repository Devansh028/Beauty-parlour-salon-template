import React from 'react';
import { Sparkles, Check, Clock, Calendar, Star } from 'lucide-react';
import { packages } from '../data/packages';
import { salonConfig } from '../config/salonConfig';

export default function Packages({ onOpenBooking }) {
  return (
    <section id="packages" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-champagne-600 dark:text-champagne-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Care Packages</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-charcoal-900 dark:text-ivory-50 tracking-tight">
            CURATED BEAUTY RITUALS
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 dark:text-charcoal-300">
            Indulge in harmonized treatments bundled together for maximum rejuvenation, relaxation, and radiant results.
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col rounded-3xl overflow-hidden bg-ivory-50 dark:bg-charcoal-800 border transition-all duration-300 ${
                pkg.popular
                  ? 'border-champagne-400 dark:border-champagne-500 shadow-luxury ring-1 ring-champagne-400/40 -translate-y-2'
                  : 'border-ivory-200 dark:border-charcoal-700 shadow-soft hover:shadow-luxury'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 right-0 z-20">
                  <div className="bg-gradient-to-r from-champagne-500 to-champagne-400 text-charcoal-950 font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-sm flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Package Header Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-ivory-200 dark:bg-charcoal-900">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent" />
                
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-ivory-50">
                  <div className="flex items-center gap-1 text-[11px] text-ivory-200">
                    <Clock className="w-3.5 h-3.5 text-champagne-300" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-6">
                
                {/* Title & Pricing */}
                <div>
                  <h3 className="text-2xl font-serif font-medium text-charcoal-900 dark:text-ivory-50">
                    {pkg.name}
                  </h3>
                  <div className="text-xs text-champagne-600 dark:text-champagne-400 font-medium mt-1">
                    {pkg.subtitle}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-ivory-200 dark:border-charcoal-700/60 flex items-baseline gap-2">
                    <span className="text-3xl font-serif font-bold text-charcoal-900 dark:text-ivory-50">
                      {pkg.price}
                    </span>
                    {pkg.originalValue && (
                      <span className="text-xs text-charcoal-400 dark:text-charcoal-400 line-through">
                        Value: {pkg.originalValue}
                      </span>
                    )}
                  </div>
                </div>

                {/* Included Services Checklist */}
                <div className="space-y-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal-400">
                    Services Included:
                  </div>
                  <ul className="space-y-2.5">
                    {pkg.includedServices.map((serviceName, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-charcoal-700 dark:text-charcoal-200">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-champagne-100 dark:bg-champagne-950 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-champagne-600 dark:text-champagne-400" />
                        </div>
                        <span>{serviceName}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book Package CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenBooking(pkg.name)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 shadow-sm ${
                      pkg.popular
                        ? 'bg-charcoal-900 text-ivory-50 hover:bg-champagne-600 dark:bg-champagne-400 dark:text-charcoal-950 dark:hover:bg-champagne-300 shadow-gold-glow'
                        : 'border border-charcoal-300 dark:border-charcoal-700 text-charcoal-800 dark:text-ivory-100 hover:bg-charcoal-900 hover:text-ivory-50 dark:hover:bg-charcoal-700'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Package</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Demo Disclaimer */}
        <p className="mt-10 text-center text-xs text-charcoal-500 dark:text-charcoal-400 italic">
          {salonConfig.meta.priceDisclaimer}
        </p>

      </div>
    </section>
  );
}
