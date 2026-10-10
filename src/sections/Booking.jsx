import React, { useState } from 'react';
import { Calendar, CheckCircle, AlertCircle, Sparkles, RefreshCw } from 'lucide-react';

// Service dropdown options per specification #18
const serviceOptions = [
  "Hair Styling",
  "Hair Care",
  "Facial & Skin Care",
  "Makeup",
  "Manicure & Pedicure",
  "Waxing",
  "Bridal",
  "Spa",
  "Other"
];

// Preferred times per specification #18
const timeOptions = [
  { label: "Morning (9:00 AM – 12:00 PM)", value: "Morning" },
  { label: "Afternoon (12:00 PM – 4:00 PM)", value: "Afternoon" },
  { label: "Evening (4:00 PM – 8:00 PM)", value: "Evening" }
];

export default function Booking({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Hair Styling',
    preferredDate: '',
    preferredTime: 'Morning',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const [prevSelected, setPrevSelected] = useState(preselectedService);

  if (preselectedService !== prevSelected) {
    setPrevSelected(preselectedService);
    if (preselectedService) {
      const matched = serviceOptions.find(s => 
        preselectedService.toLowerCase().includes(s.toLowerCase()) ||
        s.toLowerCase().includes(preselectedService.toLowerCase())
      );
      setFormData(prev => ({
        ...prev,
        service: matched || "Other",
        message: matched ? prev.message : `Selected package/service: ${preselectedService}`
      }));
    }
  }

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please provide your full name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your contact phone number";
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = "Please enter a valid phone number (minimum 8 digits)";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please provide your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email format";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Please choose your preferred date";
    } else {
      const selected = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.preferredDate = "Selected date cannot be in the past";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean API roundtrip for demo
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const randomCode = 'LUM-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomCode);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Hair Styling',
      preferredDate: '',
      preferredTime: 'Morning',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
    setBookingRef('');
  };

  return (
    <section id="booking" className="py-20 sm:py-28 bg-ivory-100/70 dark:bg-charcoal-950/70 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-champagne-600 dark:text-champagne-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Reservations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-charcoal-900 dark:text-ivory-50 tracking-tight">
            BOOK YOUR BEAUTY EXPERIENCE
          </h2>
          <p className="text-base text-charcoal-600 dark:text-charcoal-300">
            Reserve your personal consultation or ritual. Our concierge will review your schedule and confirm your unhurried session.
          </p>
        </div>

        {/* Booking Card Container */}
        <div className="rounded-3xl p-6 sm:p-10 bg-ivory-50 dark:bg-charcoal-800 border border-ivory-200 dark:border-charcoal-700 shadow-luxury">
          
          {isSubmitted ? (
            /* Success Confirmation State */
            <div className="text-center py-8 space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-champagne-100 dark:bg-charcoal-900 mx-auto flex items-center justify-center text-champagne-600 dark:text-champagne-400 shadow-soft">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-champagne-600 dark:text-champagne-400 font-bold">
                  Reservation Received
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-charcoal-900 dark:text-ivory-50">
                  Thank you, {formData.name}
                </h3>
                <p className="text-sm text-charcoal-600 dark:text-charcoal-300 max-w-md mx-auto">
                  Your appointment inquiry for <strong className="text-charcoal-900 dark:text-ivory-100">{formData.service}</strong> has been successfully registered.
                </p>
              </div>

              {/* Confirmation Summary Card */}
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-ivory-100 dark:bg-charcoal-900/70 border border-ivory-200 dark:border-charcoal-700/60 text-left text-xs space-y-2.5">
                <div className="flex justify-between border-b border-ivory-200 dark:border-charcoal-800 pb-2">
                  <span className="text-charcoal-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-champagne-600 dark:text-champagne-400">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-500">Preferred Date:</span>
                  <span className="font-medium text-charcoal-800 dark:text-ivory-100">{formData.preferredDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-500">Preferred Time Window:</span>
                  <span className="font-medium text-charcoal-800 dark:text-ivory-100">{formData.preferredTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-500">Contact Number:</span>
                  <span className="font-medium text-charcoal-800 dark:text-ivory-100">{formData.phone}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-charcoal-900 text-ivory-50 hover:bg-champagne-600 dark:bg-champagne-400 dark:text-charcoal-950 dark:hover:bg-champagne-300 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Book Another Appointment</span>
                </button>
              </div>

              <p className="text-[11px] text-charcoal-400 italic">
                * Demonstration simulation: Form data validated client-side. Backend or SMS/WhatsApp webhooks can be easily linked here.
              </p>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="booking-name" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 dark:text-ivory-200">
                    Full Name <span className="text-blush-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="booking-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className={`w-full px-4 py-3 rounded-xl bg-ivory-100/80 dark:bg-charcoal-900 border text-sm text-charcoal-900 dark:text-ivory-100 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-champagne-400 transition-all ${
                        errors.name ? 'border-red-400' : 'border-ivory-200 dark:border-charcoal-700'
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-[11px] text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="booking-phone" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 dark:text-ivory-200">
                    Phone Number <span className="text-blush-500">*</span>
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl bg-ivory-100/80 dark:bg-charcoal-900 border text-sm text-charcoal-900 dark:text-ivory-100 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-champagne-400 transition-all ${
                      errors.phone ? 'border-red-400' : 'border-ivory-200 dark:border-charcoal-700'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="booking-email" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 dark:text-ivory-200">
                    Email Address <span className="text-blush-500">*</span>
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. client@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-ivory-100/80 dark:bg-charcoal-900 border text-sm text-charcoal-900 dark:text-ivory-100 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-champagne-400 transition-all ${
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

                {/* Service Selection Dropdown */}
                <div className="space-y-1.5">
                  <label htmlFor="booking-service" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 dark:text-ivory-200">
                    Desired Service <span className="text-blush-500">*</span>
                  </label>
                  <select
                    id="booking-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-ivory-100/80 dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-700 text-sm text-charcoal-900 dark:text-ivory-100 focus:outline-none focus:ring-2 focus:ring-champagne-400 transition-all"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-ivory-50 dark:bg-charcoal-900 text-charcoal-900 dark:text-ivory-100">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <label htmlFor="booking-date" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 dark:text-ivory-200">
                    Preferred Date <span className="text-blush-500">*</span>
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-ivory-100/80 dark:bg-charcoal-900 border text-sm text-charcoal-900 dark:text-ivory-100 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-champagne-400 transition-all ${
                      errors.preferredDate ? 'border-red-400' : 'border-ivory-200 dark:border-charcoal-700'
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="text-[11px] text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.preferredDate}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Time Window */}
                <div className="space-y-1.5">
                  <label htmlFor="booking-time" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 dark:text-ivory-200">
                    Preferred Time Window <span className="text-blush-500">*</span>
                  </label>
                  <select
                    id="booking-time"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-ivory-100/80 dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-700 text-sm text-charcoal-900 dark:text-ivory-100 focus:outline-none focus:ring-2 focus:ring-champagne-400 transition-all"
                  >
                    {timeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-ivory-50 dark:bg-charcoal-900 text-charcoal-900 dark:text-ivory-100">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Special Requests / Notes */}
              <div className="space-y-1.5">
                <label htmlFor="booking-message" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 dark:text-ivory-200">
                  Special Requests or Stylist Preference (Optional)
                </label>
                <textarea
                  id="booking-message"
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any sensitivities, stylist preferences, or details about upcoming events..."
                  className="w-full px-4 py-3 rounded-xl bg-ivory-100/80 dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-700 text-sm text-charcoal-900 dark:text-ivory-100 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-champagne-400 transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-charcoal-900 text-ivory-50 hover:bg-champagne-600 dark:bg-champagne-400 dark:text-charcoal-950 dark:hover:bg-champagne-300 font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-luxury hover:shadow-gold-glow flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-champagne-400 border-t-transparent rounded-full animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Book Appointment</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-[11px] text-charcoal-400 italic">
                * We honor your privacy. No spam or unsolicited promotions.
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
