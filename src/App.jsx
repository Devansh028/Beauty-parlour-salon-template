import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { scrollToSection } from './utils/helpers';

// Components & Sections
import TemplateBanner from './components/TemplateBanner';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import FeaturedServices from './sections/FeaturedServices';
import Services from './sections/Services';
import ServiceModal from './components/ServiceModal';
import PricingMenu from './sections/PricingMenu';
import Experts from './sections/Experts';
import Packages from './sections/Packages';
import Bridal from './sections/Bridal';
import Gallery from './sections/Gallery';
import BeforeAfter from './sections/BeforeAfter';
import Testimonials from './sections/Testimonials';
import Booking from './sections/Booking';
import Contact from './sections/Contact';
import Faq from './sections/Faq';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeModalService, setActiveModalService] = useState(null);
  const [preselectedBookingService, setPreselectedBookingService] = useState('');

  const handleOpenBooking = (serviceName = '') => {
    if (serviceName) {
      setPreselectedBookingService(serviceName);
    }
    scrollToSection('booking');
  };

  const handleModalBook = (serviceName) => {
    setActiveModalService(null);
    handleOpenBooking(serviceName);
  };

  return (
    <div className="min-h-screen bg-ivory-50 text-charcoal-800 dark:bg-charcoal-900 dark:text-ivory-100 transition-colors duration-300 font-sans selection:bg-champagne-300 selection:text-charcoal-950">
      
      {/* Agency Template Banner */}
      <TemplateBanner />

      {/* Global Responsive Sticky Navbar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Sections */}
      <main>
        {/* Section 6: Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Section 7: Intro / Brand Statement */}
        <About onOpenBooking={() => handleOpenBooking()} />

        {/* Section 10: Featured Services */}
        <FeaturedServices
          onSelectService={(service) => setActiveModalService(service)}
          onOpenBooking={handleOpenBooking}
        />

        {/* Section 8: All Services */}
        <Services
          onSelectService={(service) => setActiveModalService(service)}
          onOpenBooking={handleOpenBooking}
        />

        {/* Section 11: Pricing / Service Menu */}
        <PricingMenu onOpenBooking={handleOpenBooking} />

        {/* Section 12: Experts / Stylists */}
        <Experts onOpenBooking={handleOpenBooking} />

        {/* Section 13: Packages */}
        <Packages onOpenBooking={handleOpenBooking} />

        {/* Section 14: Bridal Section */}
        <Bridal onOpenBooking={handleOpenBooking} />

        {/* Section 15: Gallery */}
        <Gallery />

        {/* Section 16: Before / After Transformations */}
        <BeforeAfter />

        {/* Section 17: Testimonials */}
        <Testimonials />

        {/* Section 18: Appointment Booking */}
        <Booking preselectedService={preselectedBookingService} />

        {/* Section 24: FAQ Accordion */}
        <Faq />

        {/* Section 21: Contact Section & Hours */}
        <Contact />
      </main>

      {/* Section 25: Footer */}
      <Footer />

      {/* Section 9: Service Details Modal */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onBook={handleModalBook}
      />

      {/* Section 20: Optional WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
