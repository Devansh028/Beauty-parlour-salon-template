/**
 * LUMIÈRE BEAUTY - Services Data
 * 
 * Configurable demo service offerings, featured highlights, and menu items.
 * All pricing and durations are demo placeholders easily replaced by salon clients.
 */

export const services = [
  {
    id: "hair-styling",
    name: "Hair Styling",
    category: "Hair",
    shortDescription: "Cuts, styling, blowouts and personalized hair looks tailored to your facial symmetry and lifestyle.",
    fullDescription: "Our bespoke hair styling experience begins with a one-on-one consultation to understand your hair texture, face shape, and personal aesthetic. Includes precision cutting, customized wash ritual, and a signature blowout.",
    duration: "45 – 75 min",
    startingPrice: "₹1,200",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    featured: false,
    included: [
      "One-on-one stylistic consultation",
      "Cleansing and conditioning wash ritual",
      "Precision cut or texture sculpt",
      "Luxury blowout and heat styling",
      "Finishing shine mist & product advice"
    ]
  },
  {
    id: "hair-care",
    name: "Hair Care",
    category: "Hair",
    shortDescription: "Treatments designed to support healthy-looking, beautiful hair with intensive deep conditioning.",
    fullDescription: "Restorative hair therapy crafted to replenish moisture, strengthen strands, and revive natural shine. Ideal for dry, colored, or heat-stressed hair seeking nourishment.",
    duration: "60 – 90 min",
    startingPrice: "₹2,200",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
    featured: true,
    featuredBadge: "Luxury Ritual",
    featuredTitle: "Luxury Hair Ritual",
    included: [
      "Micro-camera scalp analysis",
      "Botanical serum infusion",
      "Deep moisture steam treatment",
      "Acupressure head massage",
      "Keratin protection sealant"
    ]
  },
  {
    id: "facial-skin-care",
    name: "Facial & Skin Care",
    category: "Skin",
    shortDescription: "Relaxing facial experiences and skincare treatments customized to enhance natural radiance.",
    fullDescription: "An indulgent multi-step facial tailored to your skin type. Using botanical serums and gentle massage techniques, this treatment leaves your complexion feeling revitalized and luminous.",
    duration: "60 – 90 min",
    startingPrice: "₹2,500",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    featured: true,
    featuredBadge: "Signature Facial",
    featuredTitle: "Signature Glow Facial",
    included: [
      "Skin barrier & hydration diagnosis",
      "Double cleansing & gentle enzymatic exfoliation",
      "Lymphatic facial contour massage",
      "Custom antioxidant hydrating mask",
      "SPF & radiance defense application"
    ]
  },
  {
    id: "makeup",
    name: "Makeup",
    category: "Makeup",
    shortDescription: "Professional makeup for events, celebrations and special occasions, accentuating your unique elegance.",
    fullDescription: "High-definition makeup designed to look flawless both in person and on camera. Includes personalized color palette curation, skin prep, and optional lightweight lash application.",
    duration: "60 – 90 min",
    startingPrice: "₹3,000",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    featured: true,
    featuredBadge: "Event Elegance",
    featuredTitle: "Event Makeup",
    included: [
      "Pre-makeup skin priming & hydration",
      "HD foundation & seamless contour",
      "Custom eye look & precision brows",
      "Complementary lash enhancement",
      "Long-wear setting veil"
    ]
  },
  {
    id: "manicure-pedicure",
    name: "Manicure & Pedicure",
    category: "Nails",
    shortDescription: "Elegant nail care and relaxing hand and foot treatments that nurture cuticles and nails.",
    fullDescription: "Pampering hand and foot care featuring soothing soaks, gentle exfoliating scrubs, precision nail shaping, cuticle nourishment, and flawless polish application.",
    duration: "45 – 75 min",
    startingPrice: "₹1,000",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
    featured: false,
    included: [
      "Warm botanical soak",
      "Exfoliating sugar buffer scrub",
      "Cuticle shaping & care",
      "Moisturizing hand / foot massage",
      "Classic or gel finish polish"
    ]
  },
  {
    id: "waxing",
    name: "Waxing",
    category: "Skin",
    shortDescription: "Professional waxing services for smooth, well-groomed skin with gentle post-care soothing.",
    fullDescription: "Gentle and hygienic waxing techniques utilizing premium stripless and honey waxes designed for sensitive skin, followed by calming aloe vera and tea tree hydration.",
    duration: "30 – 60 min",
    startingPrice: "₹800",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    featured: false,
    included: [
      "Pre-wax skin cleansing & prep",
      "Premium hypoallergenic wax",
      "Quick and hygienic technique",
      "Post-wax soothing cooling gel",
      "Ingrown hair prevention guidance"
    ]
  },
  {
    id: "bridal-beauty",
    name: "Bridal Beauty",
    category: "Bridal",
    shortDescription: "Personalized bridal beauty and makeup packages to make your celebratory moments unforgettable.",
    fullDescription: "A comprehensive bridal experience encompassing trial consultation, skincare prep, bridal hairstyling, accessory placement, and enduring HD or airbrush makeup.",
    duration: "180 – 240 min",
    startingPrice: "₹12,000",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    featured: false,
    included: [
      "Detailed bridal trial & consultation",
      "Pre-wedding skin priming ritual",
      "Luxury bridal hair styling & drape/veil assistance",
      "Long-wear camera-ready bridal makeup",
      "Touch-up kit for ceremony day"
    ]
  },
  {
    id: "spa-relaxation",
    name: "Spa & Relaxation",
    category: "Spa",
    shortDescription: "Relaxing treatments designed to help you unwind and rejuvenate your body and mind.",
    fullDescription: "An oasis of calm featuring aromatherapy, neck and shoulder tension release, warm towel wraps, and deeply relaxing sensory massages.",
    duration: "60 – 90 min",
    startingPrice: "₹2,800",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    featured: false,
    included: [
      "Aromatherapy scent selection",
      "Stress relief head & neck massage",
      "Warm herb-infused towel compress",
      "Full body rejuvenation massage",
      "Herbal tea soothing finish"
    ]
  }
];

export const serviceCategories = ["All", "Hair", "Skin", "Makeup", "Nails", "Bridal", "Spa"];

/**
 * Detailed Service Menu for section #11 (filterable menu)
 */
export const menuServices = [
  {
    name: "Signature Haircut & Blowout",
    category: "Hair",
    duration: "60 min",
    price: "₹1,500",
    description: "Custom consultation, precision cut, luxury wash, and radiant blowout."
  },
  {
    name: "Organic Scalp & Deep Moisture Spa",
    category: "Hair",
    duration: "75 min",
    price: "₹2,400",
    description: "Stimulating scalp cleanse, botanical steam infusion, and strengthening mask."
  },
  {
    name: "Balayage & Hair Glossing",
    category: "Hair",
    duration: "150 min",
    price: "₹4,800",
    description: "Hand-painted dimension with high-shine conditioning gloss."
  },
  {
    name: "Lumière Radiance Glow Facial",
    category: "Skin",
    duration: "75 min",
    price: "₹2,800",
    description: "Enzyme polish, lymphatic drainage, and vitamin infusion for a natural glow."
  },
  {
    name: "Hydrating Oxygen Infusion Treatment",
    category: "Skin",
    duration: "60 min",
    price: "₹3,200",
    description: "Deep hyaluronic acid delivery to restore plumpness and dewy texture."
  },
  {
    name: "Purifying Clarity Botanical Facial",
    category: "Skin",
    duration: "60 min",
    price: "₹2,200",
    description: "Gentle pore extraction, balancing tea tree clay, and soothing calm mist."
  },
  {
    name: "Special Event HD Makeup",
    category: "Makeup",
    duration: "75 min",
    price: "₹3,500",
    description: "Flawless photo-ready makeup with bespoke eye look and flutter lashes."
  },
  {
    name: "Minimalist Day Glam",
    category: "Makeup",
    duration: "50 min",
    price: "₹2,200",
    description: "Fresh, luminous base with soft definition for daytime celebrations."
  },
  {
    name: "Editorial Couture Makeup",
    category: "Makeup",
    duration: "90 min",
    price: "₹4,200",
    description: "Trend-forward glam featuring bold lips, graphic wings or glass skin styling."
  },
  {
    name: "Rose Petal Luxury Manicure",
    category: "Nails",
    duration: "50 min",
    price: "₹1,200",
    description: "Exfoliating rose sugar scrub, massage, cuticle care, and vegan lacquer."
  },
  {
    name: "Restorative Spa Pedicure",
    category: "Nails",
    duration: "60 min",
    price: "₹1,600",
    description: "Foot soak with mineral salts, callused heel therapy, and cooling mint mask."
  },
  {
    name: "Gel Nail Sculpting & Art",
    category: "Nails",
    duration: "75 min",
    price: "₹2,000",
    description: "Long-lasting gel overlays with delicate chrome or minimalist nail art."
  },
  {
    name: "Royal Bridal Complete Styling",
    category: "Bridal",
    duration: "210 min",
    price: "₹14,500",
    description: "Bridal HD makeup, royal bridal coiffure, dupatta draping & jewelry fixing."
  },
  {
    name: "Bridal Party & Sangeet Package",
    category: "Bridal",
    duration: "120 min",
    price: "₹6,000",
    description: "Celebration makeup, versatile hairstyling, and camera-ready touchup."
  },
  {
    name: "Aromatherapy Full Body Relaxation",
    category: "Spa",
    duration: "75 min",
    price: "₹3,200",
    description: "Essential lavender & cedarwood warm oil massage releasing body tension."
  },
  {
    name: "Deep Tissue Muscle Ease",
    category: "Spa",
    duration: "60 min",
    price: "₹2,900",
    description: "Targeted pressure techniques relieving knots and chronic shoulder tightness."
  }
];
