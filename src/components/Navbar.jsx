import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Sparkles, Calendar } from 'lucide-react';
import { salonConfig } from '../config/salonConfig';
import { scrollToSection } from '../utils/helpers';

export default function Navbar({ theme, toggleTheme, onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Menu', href: 'menu' },
    { name: 'Experts', href: 'experts' },
    { name: 'Packages', href: 'packages' },
    { name: 'Gallery', href: 'gallery' },
    { name: 'Testimonials', href: 'testimonials' },
    { name: 'Contact', href: 'contact' },
  ];

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  const handleBookingClick = () => {
    setMobileMenuOpen(false);
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      scrollToSection('booking');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-soft py-3 border-b border-ivory-300/60 dark:border-charcoal-700/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400 rounded-sm"
            aria-label={`${salonConfig.name} - Return to top`}
          >
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-champagne-500 to-champagne-300 flex items-center justify-center text-charcoal-900 shadow-sm group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-4 h-4 fill-current text-charcoal-900" />
            </span>
            <div>
              <span className="font-serif tracking-[0.2em] text-xl font-semibold text-charcoal-900 dark:text-ivory-50 uppercase">
                {salonConfig.shortName || salonConfig.name}
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-champagne-600 dark:text-champagne-400 uppercase font-sans -mt-1 font-medium">
                Haute Beauté
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide text-charcoal-700 dark:text-ivory-200 hover:text-champagne-600 dark:hover:text-champagne-300 transition-colors duration-200 rounded-md focus:outline-none focus-visible:ring-1 focus-visible:ring-champagne-400"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Controls: Theme Toggle & Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-charcoal-600 dark:text-ivory-200 hover:text-champagne-600 dark:hover:text-champagne-300 hover:bg-ivory-200/60 dark:hover:bg-charcoal-800 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Primary CTA */}
            <button
              onClick={handleBookingClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-charcoal-900 text-ivory-50 hover:bg-champagne-600 dark:bg-champagne-400 dark:text-charcoal-950 dark:hover:bg-champagne-300 transition-all duration-300 shadow-sm hover:shadow-gold-glow active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Trigger & Mobile Theme Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-charcoal-700 dark:text-ivory-200 hover:bg-ivory-200 dark:hover:bg-charcoal-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-charcoal-800 dark:text-ivory-100 hover:bg-ivory-200/70 dark:hover:bg-charcoal-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-nav border-b border-ivory-300 dark:border-charcoal-700 px-4 pt-4 pb-6 shadow-luxury animate-fadeIn">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-charcoal-800 dark:text-ivory-100 hover:bg-ivory-200/80 dark:hover:bg-charcoal-800 transition-colors"
              >
                {link.name}
              </button>
            ))}

            <div className="pt-4 border-t border-ivory-200 dark:border-charcoal-800 mt-2">
              <button
                onClick={handleBookingClick}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-charcoal-900 text-ivory-50 dark:bg-champagne-400 dark:text-charcoal-950 font-semibold text-xs uppercase tracking-wider shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
