/**
 * LUMIÈRE BEAUTY - Central Business Configuration
 * 
 * Reusable salon template configuration.
 * All client-specific business information is controlled here.
 * No hardcoded real phone numbers, emails, addresses, or accounts.
 */

export const salonConfig = {
  name: "LUMIÈRE BEAUTY",
  shortName: "LUMIÈRE",
  tagline: "Beauty. Confidence. You.",
  heroHeadline: "BEAUTY, REDEFINED.",
  heroSubheadline: "Thoughtful beauty experiences, personalized treatments and expert care designed to help you feel your best.",
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
    enabled: false,
    number: "",
    message: "Hi, I'd like to know more about your beauty services and appointments.",
  },

  map: {
    enabled: false,
    embedUrl: "",
  },

  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },

  meta: {
    currencySymbol: "₹",
    currencyCode: "INR",
    priceDisclaimer: "Prices shown are for demonstration purposes and can be customized for your salon.",
    demoNotice: "Demo website template for beauty salons and parlours. All data, reviews, and transformations are fictional demonstration content.",
  },
};
