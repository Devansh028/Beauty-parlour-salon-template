import React from 'react';
import { Calendar, Compass, Sparkles, Star, ShieldCheck, HeartHandshake } from 'lucide-react';
import { salonConfig } from '../config/salonConfig';
import { scrollToSection } from '../utils/helpers';

export default function Hero({ onOpenBooking }) {
  const handleBooking = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      scrollToSection('booking');
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background with Ambient Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-champagne-200/30 dark:bg-champagne-600/10 blur-[130px]" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-blush-200/25 dark:bg-blush-400/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory-200/80 dark:bg-charcoal-800 border border-champagne-300/60 dark:border-champagne-500/20 text-xs font-medium tracking-widest uppercase text-champagne-700 dark:text-champagne-300 shadow-sm animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 text-champagne-500" />
              <span>{salonConfig.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-medium tracking-tight text-charcoal-900 dark:text-ivory-50 leading-[1.08]">
              BEAUTY, <br className="hidden sm:inline" />
              <span className="italic font-normal text-champagne-600 dark:text-champagne-400 font-serif">REDEFINED.</span>
            </h1>

            {/* Supporting Text */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-charcoal-600 dark:text-charcoal-200 leading-relaxed font-normal">
              {salonConfig.heroSubheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={handleBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest bg-charcoal-900 text-ivory-50 hover:bg-champagne-600 dark:bg-champagne-400 dark:text-charcoal-950 dark:hover:bg-champagne-300 transition-all duration-300 shadow-luxury hover:shadow-gold-glow active:scale-[0.98] group"
              >
                <Calendar className="w-4 h-4 text-champagne-400 dark:text-charcoal-900 group-hover:scale-110 transition-transform" />
                <span>Book Appointment</span>
              </button>

              <button
                onClick={() => scrollToSection('services')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest border border-charcoal-300 dark:border-charcoal-700 text-charcoal-800 dark:text-ivory-200 hover:bg-ivory-200/60 dark:hover:bg-charcoal-800/80 transition-all duration-200"
              >
                <Compass className="w-4 h-4 text-champagne-600 dark:text-champagne-400" />
                <span>Explore Services</span>
              </button>
            </div>

            {/* Trust Statement */}
            <div className="pt-4 border-t border-ivory-300/80 dark:border-charcoal-800/80 max-w-xl mx-auto lg:mx-0">
              <p className="text-xs sm:text-sm tracking-wider uppercase font-medium text-charcoal-500 dark:text-charcoal-300 flex items-center justify-center lg:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne-500" />
                <span>{salonConfig.trustStatement}</span>
              </p>
            </div>

            {/* Mini Trust Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-2 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="p-3 rounded-xl bg-ivory-100/60 dark:bg-charcoal-800/40 border border-ivory-200 dark:border-charcoal-700/60">
                <div className="flex items-center gap-1 text-champagne-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <div className="text-[11px] font-medium text-charcoal-600 dark:text-charcoal-300">Curated Care</div>
              </div>

              <div className="p-3 rounded-xl bg-ivory-100/60 dark:bg-charcoal-800/40 border border-ivory-200 dark:border-charcoal-700/60">
                <div className="flex items-center gap-1.5 text-champagne-600 dark:text-champagne-400 font-semibold text-xs mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>100%</span>
                </div>
                <div className="text-[11px] font-medium text-charcoal-600 dark:text-charcoal-300">Clean Formulations</div>
              </div>

              <div className="p-3 rounded-xl bg-ivory-100/60 dark:bg-charcoal-800/40 border border-ivory-200 dark:border-charcoal-700/60">
                <div className="flex items-center gap-1.5 text-champagne-600 dark:text-champagne-400 font-semibold text-xs mb-1">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>Private</span>
                </div>
                <div className="text-[11px] font-medium text-charcoal-600 dark:text-charcoal-300">Styling Suites</div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Hero Imagery with Floating Luxury Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-3 rounded-3xl border border-champagne-300/40 dark:border-champagne-600/30 transform rotate-1 pointer-events-none" />

              {/* Main Editorial Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-luxury border border-ivory-200 dark:border-charcoal-700 aspect-[4/5] bg-ivory-200 dark:bg-charcoal-800">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                  alt="Lumière Beauty Salon Experience"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Subtle Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                
                {/* In-Image Caption */}
                <div className="absolute bottom-5 left-5 right-5 text-ivory-50">
                  <div className="text-[11px] uppercase tracking-widest text-champagne-300 font-semibold">Haute Sanctuary</div>
                  <div className="font-serif text-lg font-normal">Thoughtful space, timeless serenity.</div>
                </div>
              </div>

              {/* Floating Badge 1: Bespoke Consultations */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl glass-card border border-ivory-300 dark:border-charcoal-700 shadow-luxury max-w-xs animate-slide-up">
                <div className="w-10 h-10 rounded-xl bg-champagne-400 text-charcoal-950 flex items-center justify-center font-serif text-lg font-bold shadow-sm">
                  ✦
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal-900 dark:text-ivory-100">Bespoke Consultations</div>
                  <div className="text-[11px] text-charcoal-500 dark:text-charcoal-300">Customized to your personal aesthetic</div>
                </div>
              </div>

              {/* Floating Badge 2: Organic Botanicals */}
              <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-card border border-ivory-300 dark:border-charcoal-700 shadow-soft">
                <Sparkles className="w-4 h-4 text-champagne-500" />
                <span className="text-xs font-semibold text-charcoal-800 dark:text-ivory-100">
                  Editorial Beauty Rituals
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
