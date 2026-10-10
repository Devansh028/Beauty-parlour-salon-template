import React, { useState } from 'react';
import { Sparkles, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 sm:py-28 relative overflow-hidden">
      
      {/* Ambient background light */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-champagne-200/20 dark:bg-champagne-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-champagne-600 dark:text-champagne-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-charcoal-900 dark:text-ivory-50 tracking-tight">
            WORDS OF SERENITY
          </h2>
          <p className="text-base text-charcoal-600 dark:text-charcoal-300">
            Fictional reflections highlighting the calm, attentive atmosphere and personal artistry of our sanctuary.
          </p>
        </div>

        {/* Testimonial Feature Card */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-ivory-50 dark:bg-charcoal-800 border border-ivory-200 dark:border-charcoal-700 shadow-luxury text-center">
          
          {/* Quote Icon */}
          <div className="mx-auto w-12 h-12 rounded-full bg-champagne-100 dark:bg-charcoal-900 flex items-center justify-center text-champagne-600 dark:text-champagne-400 mb-6">
            <Quote className="w-6 h-6 fill-current" />
          </div>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 text-champagne-500 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>

          {/* Quote Body */}
          <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-charcoal-900 dark:text-ivory-50 leading-relaxed font-normal max-w-3xl mx-auto mb-8">
            "{current.quote}"
          </blockquote>

          {/* Client Details */}
          <div className="flex flex-col items-center justify-center space-y-1">
            <div className="text-sm font-semibold tracking-wider uppercase text-charcoal-900 dark:text-ivory-100">
              {current.author}
            </div>
            <div className="text-xs text-champagne-600 dark:text-champagne-400 font-medium">
              {current.role} • {current.service}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-charcoal-200 dark:border-charcoal-700 text-charcoal-700 dark:text-ivory-200 hover:bg-champagne-100 dark:hover:bg-charcoal-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-6 bg-champagne-500 dark:bg-champagne-400'
                      : 'w-2 bg-ivory-300 dark:bg-charcoal-700'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-charcoal-200 dark:border-charcoal-700 text-charcoal-700 dark:text-ivory-200 hover:bg-champagne-100 dark:hover:bg-charcoal-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Demo Notice */}
        <p className="mt-8 text-center text-xs text-charcoal-400 dark:text-charcoal-400 italic">
          * Fictional client reviews created for salon template demonstration. Fictional testimonials are not presented as real customer reviews.
        </p>

      </div>
    </section>
  );
}
