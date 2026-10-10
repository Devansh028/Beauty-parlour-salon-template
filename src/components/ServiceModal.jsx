import React, { useEffect } from 'react';
import { X, Clock, Sparkles, Check, Calendar } from 'lucide-react';

export default function ServiceModal({ service, onClose, onBook }) {
  useEffect(() => {
    if (!service) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Lock body scroll
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-ivory-50 dark:bg-charcoal-800 rounded-3xl overflow-hidden shadow-luxury border border-ivory-300 dark:border-charcoal-700 z-10 max-h-[90vh] flex flex-col animate-slide-up">
        
        {/* Top Image Banner */}
        <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-ivory-200 dark:bg-charcoal-900 shrink-0">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/30 to-transparent" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-charcoal-900/70 text-ivory-100 hover:bg-charcoal-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400"
            aria-label="Close service details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Service Title on Banner */}
          <div className="absolute bottom-4 left-6 right-6 text-ivory-50">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-champagne-500 text-charcoal-950 inline-block mb-2">
              {service.category}
            </span>
            <h3 id="modal-service-title" className="text-2xl sm:text-3xl font-serif font-medium">
              {service.name}
            </h3>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Price & Duration Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-ivory-100 dark:bg-charcoal-900/60 border border-ivory-200 dark:border-charcoal-700/60">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-champagne-600 dark:text-champagne-400" />
              <div>
                <div className="text-[11px] uppercase tracking-wider text-charcoal-400">Duration</div>
                <div className="text-sm font-semibold text-charcoal-800 dark:text-ivory-100">{service.duration}</div>
              </div>
            </div>

            <div>
              <div className="text-[11px] uppercase tracking-wider text-charcoal-400 text-right">Starting Investment</div>
              <div className="text-lg font-serif font-semibold text-champagne-700 dark:text-champagne-300">{service.startingPrice}</div>
            </div>
          </div>

          {/* Full Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-charcoal-500 dark:text-charcoal-400 mb-2">
              About This Experience
            </h4>
            <p className="text-sm sm:text-base text-charcoal-700 dark:text-charcoal-200 leading-relaxed">
              {service.fullDescription || service.shortDescription}
            </p>
          </div>

          {/* What's Included */}
          {service.included && service.included.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-charcoal-500 dark:text-charcoal-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-champagne-500" />
                <span>What's Included in This Ritual</span>
              </h4>
              <ul className="space-y-2.5">
                {service.included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700 dark:text-ivory-200">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-champagne-100 dark:bg-champagne-950 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-champagne-600 dark:text-champagne-400" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Demo Note */}
          <div className="text-xs text-charcoal-400 dark:text-charcoal-400 italic bg-ivory-100/50 dark:bg-charcoal-900/30 p-3 rounded-xl border border-ivory-200 dark:border-charcoal-800">
            Note: All treatments and timings can be personalized to suit individual preferences. Prices are editable demo rates.
          </div>

        </div>

        {/* Fixed Footer Buttons */}
        <div className="p-4 sm:p-6 bg-ivory-100 dark:bg-charcoal-900 border-t border-ivory-200 dark:border-charcoal-700 flex items-center justify-end gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-charcoal-700 dark:text-ivory-200 hover:bg-ivory-200 dark:hover:bg-charcoal-800 transition-colors"
          >
            Close
          </button>
          
          <button
            onClick={() => {
              onClose();
              onBook(service.name);
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-charcoal-900 text-ivory-50 dark:bg-champagne-400 dark:text-charcoal-950 hover:bg-champagne-600 dark:hover:bg-champagne-300 transition-colors shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Appointment</span>
          </button>
        </div>

      </div>
    </div>
  );
}
