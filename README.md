# LUMIÈRE BEAUTY — Premium Beauty Parlour & Salon Website Template

A modern, elegant, and conversion-focused **Beauty Parlour / Salon Website Template** built for web development agencies to present and customize for salon, parlour, and spa clients.

---

## ✨ Features & Sections Included

1. **Global Responsive Navbar**
   - Sticky blur glassmorphism header (`glass-nav`).
   - Clean luxury brand logo: **LUMIÈRE**.
   - Navigation links to all major sections with smooth scrolling.
   - Primary CTA: **Book Appointment**.
   - Light / Dark mode toggle with Sun/Moon icons.
   - Accessible mobile drawer menu with touch-friendly controls.

2. **Luxury Theme System (Light / Dark Mode)**
   - **Light Mode (Default):** Warm ivory, cream surfaces, charcoal typography, champagne gold accents, soft shadows.
   - **Dark Mode:** Deep charcoal backdrop, warm dark surfaces, ivory typography, champagne accents.
   - Saved in `localStorage` with fallback to system preference.
   - Zero-flash on initial page load via head script.

3. **Hero Section**
   - Headline: **BEAUTY, REDEFINED.**
   - Tagline: *"Beauty. Confidence. You."*
   - Supporting text, dual CTAs (**Book Appointment** and **Explore Services**).
   - Trust statement: `Beauty Care • Expert Stylists • Personalized Experience`.
   - Editorial photography with floating luxury badges.

4. **Brand Intro / Philosophy**
   - Editorial layout: **A BEAUTY EXPERIENCE MADE FOR YOU.**
   - Focus on personalized beauty services, clean products, and relaxing atmosphere (no medical claims).
   - Core pillars: Personalized Consultations, Professional Beauty Care, Premium Products, Relaxing Environment.

5. **Featured Experiences**
   - Highlight of 3 signature experiences:
     - **Signature Glow Facial**
     - **Luxury Hair Ritual**
     - **Event Makeup**
   - Editorial imagery, starting rates, and highlights.

6. **All 8 Salon Services**
   - Hair Styling, Hair Care, Facial & Skin Care, Makeup, Manicure & Pedicure, Waxing, Bridal Beauty, Spa & Relaxation.
   - Service cards with category pills, duration, starting rates, **Learn More**, and **Book Now**.

7. **Service Detail Modal**
   - Reusable accessible modal popup.
   - Detailed description, duration, starting investment, checklist of what's included, and direct appointment booking trigger.
   - Keyboard accessible (Escape key), backdrop click, ARIA attributes.

8. **Service Directory & Pricing Menu**
   - Clean beauty menu with category filter tabs: *All, Hair, Skin, Makeup, Nails, Bridal, Spa*.
   - Clear editable demo pricing with disclaimer note: *"Prices shown are for demonstration purposes and can be customized for your salon."*

9. **Experts & Stylists**
   - Fictional demo stylists:
     - **Aanya Kapoor** (Senior Hair Stylist)
     - **Meera Sharma** (Makeup Artist)
     - **Tara Malhotra** (Skin & Beauty Specialist)
     - **Rhea Verma** (Nail Artist)
   - Professional photography, specialties, bios, experience placeholders, and direct stylist booking buttons.

10. **Curated Packages**
    - **SIGNATURE GLOW** (Facial, Hair Styling, Manicure, Pedicure) — *Most Popular*
    - **BRIDAL BEAUTY** (Bridal Makeup, Hair Styling, Skin Preparation, Nail Care)
    - **SELF-CARE RITUAL** (Facial, Hair Treatment, Manicure, Relaxation Treatment)
    - Value breakdown, checklist, and direct booking CTA.

11. **Bridal Haute Suite**
    - Editorial section: **YOUR MOMENT. YOUR LOOK.**
    - Bridal consultation, skin prep, couture hair sculpting, HD airbrush makeup, and bridal party services.
    - CTA: **Book Bridal Consultation**.

12. **Visual Gallery & Lightbox**
    - Filterable gallery by category (*Salon, Hair, Makeup, Nails, Bridal, Beauty*).
    - Image zoom and overlay on hover.
    - Reusable Lightbox with Next, Previous, Close, Escape key, and keyboard arrow navigation.

13. **Before / After Transformations**
    - Section: **THE ART OF TRANSFORMATION**.
    - Interactive split comparison slider (drag left/right to compare Before vs After).
    - Hair, Skincare, and Bridal transformation tabs.
    - Clearly marked: `Demo Transformation • For Illustration Only`.

14. **Testimonials**
    - Fictional demo reviews with 5-star ratings and quote controls.
    - Clearly labeled as demonstration client reviews.

15. **Appointment Booking**
    - Conversion-focused booking form: Name, Phone, Email, Desired Service dropdown (all 8 services + Other), Preferred Date, Preferred Time Window (*Morning, Afternoon, Evening*), and Message/Special Requests.
    - Client-side validation for required fields, email format, phone digits, and dates.
    - Interactive success confirmation state with reservation reference ID.

16. **FAQ Accordion**
    - Smooth animated expand/collapse accordion covering 8 common client questions.

17. **Contact & Studio Information**
    - Configurable placeholders: `YOUR LOCATION`, `YOUR PHONE`, `YOUR EMAIL`.
    - Direct inquiry message form with validation and success feedback.
    - Studio operating hours schedule.
    - Optional Google Maps embed (disabled by default).

18. **Optional Floating WhatsApp Button**
    - Controlled by `salonConfig.whatsapp.enabled` (default `false`).
    - When enabled, connects to WhatsApp with pre-filled message.

19. **SEO & Performance**
    - Semantic HTML5 structure.
    - Open Graph metadata, Twitter card, favicon SVG, `robots.txt`, and `sitemap.xml`.
    - Optimized Google Fonts loading with preconnect.
    - Responsive across 320px, 375px, 768px, 1024px, and 1440px+.

---

## 🛠️ Central Configuration Guide

All client-specific data is centralized in **`src/config/salonConfig.js`**:

```javascript
export const salonConfig = {
  name: "LUMIÈRE BEAUTY",
  shortName: "LUMIÈRE",
  tagline: "Beauty. Confidence. You.",
  heroHeadline: "BEAUTY, REDEFINED.",
  heroSubheadline: "Thoughtful beauty experiences, personalized treatments and expert care...",
  trustStatement: "Beauty Care • Expert Stylists • Personalized Experience",

  contact: {
    phone: "YOUR PHONE",
    email: "YOUR EMAIL",
    location: "YOUR LOCATION",
  },

  hours: [
    { days: "Monday – Friday", hours: "9:00 AM – 8:00 PM" },
    { days: "Saturday", hours: "9:00 AM – 7:00 PM" },
    { days: "Sunday", hours: "10:00 AM – 5:00 PM" },
  ],

  whatsapp: {
    enabled: false,  // Set to true and provide number to show button
    number: "",
    message: "Hi, I'd like to know more about your beauty services and appointments.",
  },

  map: {
    enabled: false,  // Set to true and provide iframe URL to display map
    embedUrl: "",
  },

  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },
};
```

Content data files can be customized in **`src/data/`**:
- `services.js`: Core services, descriptions, what's included, and menu rates.
- `packages.js`: Bundled beauty packages.
- `experts.js`: Stylist and artist profiles.
- `gallery.js`: Portfolio photography and before/after transformation comparisons.
- `testimonials.js`: Client reviews.
- `faq.js`: Frequently asked questions and answers.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Run Lint Checks
```bash
npm run lint
```

### 4. Build for Production
```bash
npm run build
```

---

## 📄 License & Concept Notice
© 2026 LUMIÈRE BEAUTY. Fictional agency demo template created for salon and beauty studio web development presentations.
