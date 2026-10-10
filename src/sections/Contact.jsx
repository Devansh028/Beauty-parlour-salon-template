import React, { useState } from 'react';
import { Sparkles, MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { salonConfig } from '../config/salonConfig';

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!contactForm.name.trim()) errs.name = "Name is required";
    if (!contactForm.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email.trim())) {
      errs.email = "Valid email is required";
    }
    if (!contactForm.message.trim()) errs.message = "Message cannot be empty";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setContactForm({ name: '', email: '', subject: '', message: '' });
    }, 700);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-champagne-600 dark:text-champagne-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-charcoal-900 dark:text-ivory-50 tracking-tight">
            GET IN TOUCH
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 dark:text-charcoal-300">
            Have questions regarding treatments, private bridal reservations, or stylist consultations? We are here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Configurable Contact Information & Hours */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 rounded-3xl bg-ivory-50 dark:bg-charcoal-800 border border-ivory-200 dark:border-charcoal-700 shadow-soft space-y-6">
              <h3 className="text-xl font-serif font-medium text-charcoal-900 dark:text-ivory-50 border-b border-ivory-200 dark:border-charcoal-700 pb-4">
                Concierge & Studio Details
              </h3>

              <div className="space-y-5">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-champagne-100 dark:bg-charcoal-900 flex items-center justify-center text-champagne-600 dark:text-champagne-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-400">
                      Telephone / Appointments
                    </div>
                    <div className="text-sm font-semibold text-charcoal-900 dark:text-ivory-100 mt-0.5">
                      {salonConfig.contact.phone}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-champagne-100 dark:bg-charcoal-900 flex items-center justify-center text-champagne-600 dark:text-champagne-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-400">
                      Email Inquiries
                    </div>
                    <div className="text-sm font-semibold text-charcoal-900 dark:text-ivory-100 mt-0.5">
                      {salonConfig.contact.email}
                    </div>
                  </div>
                </div>

                {/* Location (Configurable placeholder) */}
                {salonConfig.contact.location && (
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-champagne-100 dark:bg-charcoal-900 flex items-center justify-center text-champagne-600 dark:text-champagne-400 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-400">
                        Studio Address
                      </div>
                      <div className="text-sm font-semibold text-charcoal-900 dark:text-ivory-100 mt-0.5">
                        {salonConfig.contact.location}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Hours of Operation */}
              {salonConfig.hours && salonConfig.hours.length > 0 && (
                <div className="pt-6 border-t border-ivory-200 dark:border-charcoal-700/60 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal-700 dark:text-ivory-200">
                    <Clock className="w-4 h-4 text-champagne-600 dark:text-champagne-400" />
                    <span>Studio Hours</span>
                  </div>
                  
                  <div className="space-y-2 text-xs">
                    {salonConfig.hours.map((schedule, idx) => (
                      <div key={idx} className="flex justify-between items-center text-charcoal-600 dark:text-charcoal-300">
                        <span>{schedule.days}</span>
                        <span className="font-semibold text-charcoal-800 dark:text-ivory-100">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Optional Map Component (Shown ONLY when salonConfig.map.enabled === true) */}
            {salonConfig.map.enabled && salonConfig.map.embedUrl && (
              <div className="rounded-3xl overflow-hidden border border-ivory-200 dark:border-charcoal-700 shadow-soft aspect-[16/9] w-full">
                <iframe
                  src={salonConfig.map.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Salon Location Map"
                />
              </div>
            )}

          </div>

          {/* Right Column: Direct Inquiry Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-ivory-50 dark:bg-charcoal-800 border border-ivory-200 dark:border-charcoal-700 shadow-luxury">
              
              <h3 className="text-2xl font-serif font-medium text-charcoal-900 dark:text-ivory-50 mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 mb-6">
                Fill out the form below and our team will get in touch with you shortly.
              </p>

              {isSubmitted ? (
                <div className="p-8 text-center rounded-2xl bg-champagne-50 dark:bg-charcoal-900 border border-champagne-300 dark:border-champagne-800/40 space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-champagne-200 dark:bg-charcoal-800 text-champagne-700 dark:text-champagne-400 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-serif font-medium text-charcoal-900 dark:text-ivory-100">
                    Message Successfully Sent
                  </h4>
                  <p className="text-xs text-charcoal-600 dark:text-charcoal-300 max-w-sm mx-auto">
                    Thank you for reaching out. We have received your inquiry and will respond within 24 business hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-block mt-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-charcoal-900 text-ivory-50 dark:bg-champagne-400 dark:text-charcoal-950"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Name */}
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 dark:text-ivory-200">
                        Your Name <span className="text-blush-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="e.g. Aarti Mehta"
                        className={`w-full px-4 py-3 rounded-xl bg-ivory-100/80 dark:bg-charcoal-900 border text-sm text-charcoal-900 dark:text-ivory-100 focus:outline-none focus:ring-2 focus:ring-champagne-400 transition-all ${
                          errors.name ? 'border-red-400' : 'border-ivory-200 dark:border-charcoal-700'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 dark:text-ivory-200">
                        Your Email <span className="text-blush-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="e.g. aarti@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-ivory-100/80 dark:bg-charcoal-900 border text-sm text-charcoal-900 dark:text-ivory-100 focus:outline-none focus:ring-2 focus:ring-champagne-400 transition-all ${
                          errors.email ? 'border-red-400' : 'border-ivory-200 dark:border-charcoal-700'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 dark:text-ivory-200">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      placeholder="e.g. Bridal Inquiry, Private Event, or Service Question"
                      className="w-full px-4 py-3 rounded-xl bg-ivory-100/80 dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-700 text-sm text-charcoal-900 dark:text-ivory-100 focus:outline-none focus:ring-2 focus:ring-champagne-400 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 dark:text-ivory-200">
                      Message <span className="text-blush-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows="4"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="How can we assist you?"
                      className={`w-full px-4 py-3 rounded-xl bg-ivory-100/80 dark:bg-charcoal-900 border text-sm text-charcoal-900 dark:text-ivory-100 focus:outline-none focus:ring-2 focus:ring-champagne-400 transition-all resize-none ${
                        errors.message ? 'border-red-400' : 'border-ivory-200 dark:border-charcoal-700'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-2xl bg-charcoal-900 text-ivory-50 hover:bg-champagne-600 dark:bg-champagne-400 dark:text-charcoal-950 dark:hover:bg-champagne-300 font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-champagne-400 border-t-transparent rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
