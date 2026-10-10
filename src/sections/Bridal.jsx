import React from 'react';
import { Calendar, Heart, CheckCircle } from 'lucide-react';
import { scrollToSection } from '../utils/helpers';

export default function Bridal({ onOpenBooking }) {
  const bridalOfferings = [
    {
      title: "Bespoke Bridal Consultation & Trial",
      description: "Comprehensive review of wedding themes, attire, and personal aesthetic with live styling previews."
    },
    {
      title: "Pre-Event Skin & Hair Priming",
      description: "Hydration and radiance therapies scheduled in the weeks leading up to the festivities."
    },
    {
      title: "Couture Hair Sculpting & Veil Art",
      description: "Intricate architectural updos, soft romantic waves, and meticulous bridal jewelry placement."
    },
    {
      title: "High-Definition Long-Wear Makeup",
      description: "Sweat-resistant, camera-tested artistry designed for enduring comfort from ceremony to reception."
    },
    {
      title: "Bridal Party & Family Packages",
      description: "Coordinated beauty services for bridesmaids, mothers, and close celebrations."
    }
  ];

  return (
    <section id="bridal" className="py-20 sm:py-28 bg-ivory-100/60 dark:bg-charcoal-950/60 relative overflow-hidden">
      
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blush-200/20 dark:bg-blush-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bridal Narrative */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-champagne-600 dark:text-champagne-400">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Bridal Haute Suite</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-charcoal-900 dark:text-ivory-50 tracking-tight leading-[1.12]">
              YOUR MOMENT. <br />
              <span className="italic text-champagne-600 dark:text-champagne-400 font-serif">YOUR LOOK.</span>
            </h2>

            <p className="text-base sm:text-lg text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
              Your celebration is a reflection of your unique love story. Our bridal artisans create an unhurried, calm sanctuary where every detail—from pre-event skin preparation to the final veil drape—is executed with patience and artistry.
            </p>

            {/* Bridal Offerings Checklist */}
            <div className="space-y-4 pt-2">
              {bridalOfferings.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-4 h-4 rounded-full bg-champagne-100 dark:bg-champagne-950 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-champagne-600 dark:text-champagne-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal-900 dark:text-ivory-100">
                      {item.title}
                    </h3>
                    <p className="text-xs text-charcoal-600 dark:text-charcoal-300 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onOpenBooking("Bridal Consultation")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest bg-charcoal-900 text-ivory-50 hover:bg-champagne-600 dark:bg-champagne-400 dark:text-charcoal-950 dark:hover:bg-champagne-300 transition-all duration-300 shadow-luxury"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Bridal Consultation</span>
              </button>

              <button
                onClick={() => scrollToSection('gallery')}
                className="w-full sm:w-auto text-center px-6 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-charcoal-700 dark:text-ivory-200 hover:text-champagne-600 dark:hover:text-champagne-400 transition-colors"
              >
                View Bridal Gallery
              </button>
            </div>

            <p className="text-[11px] text-charcoal-400 italic">
              * Demonstration service details. Custom bridal timelines and trials arranged upon salon consultation.
            </p>
          </div>

          {/* Right Column: Editorial Bridal Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              <div className="relative rounded-3xl overflow-hidden shadow-luxury border border-ivory-200 dark:border-charcoal-700 aspect-[4/5] bg-ivory-200 dark:bg-charcoal-800">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
                  alt="Lumière Bridal Styling and Makeup Experience"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-ivory-50">
                  <div className="text-xs uppercase tracking-widest text-champagne-300 font-semibold mb-1">Bridal Suite</div>
                  <div className="font-serif text-xl">Serene celebrations, enduring memories.</div>
                </div>
              </div>

              {/* Floating Quote Badge */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 p-4 rounded-2xl glass-card border border-ivory-300 dark:border-charcoal-700 shadow-luxury max-w-xs">
                <p className="text-xs italic text-charcoal-700 dark:text-ivory-200">
                  "Thoughtful beauty preparation tailored to make your wedding day relaxed and luminous."
                </p>
                <div className="text-[10px] uppercase font-bold tracking-wider text-champagne-600 dark:text-champagne-400 mt-2">
                  — Dedicated Bridal Concierge
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
