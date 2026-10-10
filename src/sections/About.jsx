import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils/helpers';

export default function About({ onOpenBooking }) {
  const features = [
    {
      title: "Personalized Consultations",
      description: "Every appointment begins with attentive listening to tailor each cut, shade, or skin therapy to your individuality."
    },
    {
      title: "Professional Beauty Care",
      description: "Our stylists combine meticulous technical training with a passionate eye for contemporary, effortless elegance."
    },
    {
      title: "Premium Products",
      description: "We handpick clean, high-performance botanical formulations that nourish hair and skin without harsh additives."
    },
    {
      title: "Relaxing Environment",
      description: "Step away from daily bustle into an unhurried, peaceful atmosphere designed for complete sensory unwinding."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-ivory-100/60 dark:bg-charcoal-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Photo Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Large Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-luxury border border-ivory-200 dark:border-charcoal-700 aspect-[4/5] bg-ivory-200 dark:bg-charcoal-800">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80"
                  alt="Lumière Beauty Parlour Interior and Styling Experience"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-ivory-50">
                  <span className="text-xs uppercase tracking-widest text-champagne-300 font-semibold block mb-1">Our Studio</span>
                  <p className="font-serif text-lg">A sanctuary curated for calm, personal rejuvenation.</p>
                </div>
              </div>

              {/* Inset Secondary Image Card */}
              <div className="hidden sm:block absolute -bottom-10 -right-8 w-56 rounded-2xl overflow-hidden shadow-luxury border-4 border-ivory-50 dark:border-charcoal-900 bg-ivory-100">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80"
                  alt="Skin and Wellness Treatment"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-3 text-center bg-ivory-50 dark:bg-charcoal-800">
                  <div className="text-[11px] font-semibold text-charcoal-800 dark:text-ivory-200 uppercase tracking-wider">Holistic Rituals</div>
                </div>
              </div>

              {/* Decorative Accent Tag */}
              <div className="absolute -top-5 -left-5 bg-champagne-400 text-charcoal-950 px-4 py-2 rounded-full font-serif text-xs font-bold tracking-widest uppercase shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Concept Studio</span>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Copy & Key Features */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-champagne-600 dark:text-champagne-400">
                <span className="w-6 h-[1px] bg-champagne-500" />
                <span>Our Philosophy</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-charcoal-900 dark:text-ivory-50 leading-[1.15]">
                A BEAUTY EXPERIENCE <br />
                <span className="italic text-champagne-600 dark:text-champagne-400 font-serif">MADE FOR YOU.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-charcoal-600 dark:text-charcoal-200 leading-relaxed">
              We believe true beauty thrives when you feel completely at ease. Our studio offers a serene, unhurried space where personalized beauty services meet thoughtful care. Every treatment is designed around your individual rhythm, elevating your natural features with artistry and gentle refinement.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-3.5 rounded-xl bg-ivory-50 dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-800 transition-all hover:border-champagne-300 dark:hover:border-champagne-600/40">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-champagne-100 dark:bg-champagne-950 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-champagne-600 dark:text-champagne-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal-900 dark:text-ivory-100 font-serif mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => {
                  if (onOpenBooking) onOpenBooking();
                  else scrollToSection('booking');
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-charcoal-900 text-ivory-50 hover:bg-champagne-600 dark:bg-champagne-400 dark:text-charcoal-950 dark:hover:bg-champagne-300 transition-all duration-300 shadow-sm"
              >
                <span>Book Your Experience</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => scrollToSection('services')}
                className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-charcoal-700 dark:text-ivory-200 hover:text-champagne-600 dark:hover:text-champagne-400 transition-colors"
              >
                <span>View Full Menu</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
