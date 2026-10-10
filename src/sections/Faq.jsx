import React, { useState } from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';
import { faqList } from '../data/faq';

export default function Faq() {
  const [openId, setOpenId] = useState("faq-1");

  const toggleAccordion = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-ivory-100/50 dark:bg-charcoal-950/40 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-champagne-600 dark:text-champagne-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-charcoal-900 dark:text-ivory-50 tracking-tight">
            FREQUENTLY ASKED
          </h2>
          <p className="text-base text-charcoal-600 dark:text-charcoal-300">
            Find answers to standard inquiries about booking procedures, bridal consultations, packages, and treatments.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqList.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden bg-ivory-50 dark:bg-charcoal-800 border border-ivory-200 dark:border-charcoal-700 shadow-soft transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-charcoal-900 dark:text-ivory-100">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-ivory-100 dark:bg-charcoal-900 flex items-center justify-center text-charcoal-600 dark:text-ivory-300 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-champagne-100 dark:bg-champagne-950 text-champagne-700 dark:text-champagne-300' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed border-t border-ivory-200/60 dark:border-charcoal-700/60 animate-fadeIn"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
