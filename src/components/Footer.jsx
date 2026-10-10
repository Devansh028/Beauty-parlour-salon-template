import React from 'react';
import { Sparkles, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { salonConfig } from '../config/salonConfig';
import { scrollToSection } from '../utils/helpers';

// Clean vector icons for social media
function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Menu', id: 'menu' },
    { name: 'Experts', id: 'experts' },
    { name: 'Packages', id: 'packages' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  const serviceCategories = [
    { name: 'Hair Styling & Cuts', id: 'services' },
    { name: 'Restorative Hair Care', id: 'services' },
    { name: 'Facial & Skin Radiance', id: 'services' },
    { name: 'Celebration Makeup', id: 'services' },
    { name: 'Manicure & Pedicure', id: 'services' },
    { name: 'Bridal Haute Suite', id: 'bridal' },
    { name: 'Spa & Tension Relief', id: 'services' },
  ];

  const hasSocial = Boolean(
    salonConfig.social?.instagram || salonConfig.social?.facebook || salonConfig.social?.youtube
  );

  return (
    <footer className="bg-charcoal-900 text-ivory-100 pt-16 pb-12 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-charcoal-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-champagne-500 to-champagne-300 flex items-center justify-center text-charcoal-900 shadow-sm">
                <Sparkles className="w-4 h-4 fill-current text-charcoal-900" />
              </span>
              <div>
                <span className="font-serif tracking-[0.2em] text-xl font-semibold text-ivory-50 uppercase">
                  {salonConfig.name}
                </span>
                <span className="block text-[10px] tracking-[0.25em] text-champagne-400 uppercase font-sans -mt-1 font-medium">
                  Haute Beauté
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-charcoal-300 max-w-sm leading-relaxed">
              "{salonConfig.tagline}"
            </p>
            <p className="text-xs text-charcoal-400 leading-relaxed">
              A bespoke salon sanctuary dedicated to unhurried care, master styling techniques, and botanical luxury treatments.
            </p>

            {/* Social Icons (Only shown if configured per requirement #23) */}
            {hasSocial && (
              <div className="pt-2 flex items-center gap-3">
                {salonConfig.social?.instagram && (
                  <a
                    href={salonConfig.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-charcoal-800 text-ivory-300 hover:text-champagne-300 hover:bg-charcoal-700 flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                )}
                {salonConfig.social?.facebook && (
                  <a
                    href={salonConfig.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-charcoal-800 text-ivory-300 hover:text-champagne-300 hover:bg-charcoal-700 flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                )}
                {salonConfig.social?.youtube && (
                  <a
                    href={salonConfig.social.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-charcoal-800 text-ivory-300 hover:text-champagne-300 hover:bg-charcoal-700 flex items-center justify-center transition-colors"
                    aria-label="YouTube"
                  >
                    <YoutubeIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-champagne-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-charcoal-300 hover:text-champagne-300 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-champagne-400">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {serviceCategories.map((serv, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(serv.id)}
                    className="text-charcoal-300 hover:text-champagne-300 transition-colors text-left"
                  >
                    {serv.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Configurable Contact Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-champagne-400">
              Studio Information
            </h4>
            <div className="space-y-3 text-xs text-charcoal-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-champagne-400 shrink-0 mt-0.5" />
                <span>{salonConfig.contact.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-champagne-400 shrink-0" />
                <span>{salonConfig.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-champagne-400 shrink-0" />
                <span>{salonConfig.contact.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => scrollToSection('booking')}
                className="w-full py-2.5 px-4 rounded-xl bg-champagne-400 text-charcoal-950 hover:bg-champagne-300 font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                Book Appointment
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-400">
          <p>© 2026 {salonConfig.name}. Concept Project.</p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-charcoal-500">Agency Template Demo</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-champagne-400 hover:text-champagne-300 transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
