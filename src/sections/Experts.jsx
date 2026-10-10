import React from 'react';
import { Calendar } from 'lucide-react';
import { experts } from '../data/experts';

export default function Experts({ onOpenBooking }) {
  return (
    <section id="experts" className="py-20 sm:py-28 bg-ivory-100/50 dark:bg-charcoal-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-champagne-600 dark:text-champagne-400">
            <span className="w-6 h-[1px] bg-champagne-500" />
            <span>Master Stylists & Artists</span>
            <span className="w-6 h-[1px] bg-champagne-500" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-charcoal-900 dark:text-ivory-50 tracking-tight">
            MEET OUR EXPERTS
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 dark:text-charcoal-300">
            Passionate artisans dedicated to tailored consultations, gentle techniques, and timeless aesthetic refinement.
          </p>
        </div>

        {/* 4 Experts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="group flex flex-col rounded-3xl overflow-hidden bg-ivory-50 dark:bg-charcoal-800 border border-ivory-200 dark:border-charcoal-700 shadow-soft hover:shadow-luxury transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] overflow-hidden bg-ivory-200 dark:bg-charcoal-900">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                {/* Experience Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-ivory-50">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-charcoal-900/80 text-champagne-300 backdrop-blur-md border border-champagne-400/20">
                    {expert.experience}
                  </span>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4 text-left">
                <div>
                  <h3 className="text-xl font-serif font-medium text-charcoal-900 dark:text-ivory-100">
                    {expert.name}
                  </h3>
                  <div className="text-xs font-semibold uppercase tracking-wider text-champagne-600 dark:text-champagne-400 mt-1">
                    {expert.specialty}
                  </div>
                  <p className="mt-3 text-xs text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                    {expert.bio}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="pt-3 border-t border-ivory-200 dark:border-charcoal-700/60">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {expert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-ivory-200/70 dark:bg-charcoal-900 text-charcoal-700 dark:text-charcoal-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenBooking(`Consultation with ${expert.name}`)}
                    className="w-full py-2.5 px-3 rounded-xl bg-charcoal-900 text-ivory-50 dark:bg-champagne-400 dark:text-charcoal-950 text-xs font-semibold uppercase tracking-wider hover:bg-champagne-600 dark:hover:bg-champagne-300 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book with {expert.name.split(' ')[0]}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Notice */}
        <div className="mt-12 text-center text-xs text-charcoal-400 dark:text-charcoal-400 italic">
          * Stylist bios, names, and images represent fictional demonstration profiles for salon template preview.
        </div>

      </div>
    </section>
  );
}
