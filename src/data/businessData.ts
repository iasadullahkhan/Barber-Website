export interface ServiceItem {
  id: string;
  name: string;
  category: 'haircut' | 'beard' | 'combo' | 'special';
  description: string;
  pricePlaceholder: string;
  durationEstimate: string;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'shop' | 'craft' | 'haircut';
  src: string;
  alt: string;
  caption: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  category: string;
  rating: number;
  reviewCount: number;
  phone: string;
  phoneFormatted: string;
  phoneTel: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  mapsDirectionsUrl: string;
  googleMapsReviewUrl: string;
  hoursNote: string;
  hoursTentative: { day: string; hours: string; note?: string }[];
}

export const BUSINESS_DATA: BusinessInfo = {
  name: "Joel's Barber Shop",
  tagline: "Look Sharp. Feel Confident.",
  category: "Barber Shop",
  rating: 4.3,
  reviewCount: 122,
  phone: "+1 760-373-7367",
  phoneFormatted: "(760) 373-7367",
  phoneTel: "tel:+17603737367",
  address: {
    street: "8209 Suite-114 California City Blvd",
    city: "California City",
    state: "CA",
    zip: "93505",
    full: "8209 Suite-114 California City Blvd, California City, CA 93505, United States",
  },
  mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=8209+California+City+Blvd+Suite+114,+California+City,+CA+93505",
  googleMapsReviewUrl: "https://www.google.com/maps/search/?api=1&query=Joel's+Barber+Shop+8209+Suite-114+California+City+Blvd+California+City+CA+93505",
  hoursNote: "Google Maps lists a closing time of 3:30 AM, which is flagged for owner verification. Standard daytime barbershop hours are shown as placeholders below.",
  hoursTentative: [
    { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM", note: "Pending owner confirmation" },
    { day: "Saturday", hours: "9:00 AM – 6:00 PM", note: "Pending owner confirmation" },
    { day: "Sunday", hours: "10:00 AM – 4:00 PM", note: "Pending owner confirmation" },
  ],
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "classic-haircut",
    name: "Classic Haircut",
    category: "haircut",
    description: "Traditional tailored haircut with consultation, precision scissor work, neck taper, and finished styling.",
    pricePlaceholder: "Price upon request",
    durationEstimate: "30–45 min",
    popular: true,
  },
  {
    id: "modern-haircut",
    name: "Modern Haircut",
    category: "haircut",
    description: "Contemporary texture cuts, pompadours, and layered styling customized to head shape and hair texture.",
    pricePlaceholder: "Price upon request",
    durationEstimate: "35–45 min",
  },
  {
    id: "fade-haircut",
    name: "Fade Haircut",
    category: "haircut",
    description: "Seamless skin fade, high/low/mid taper fade, or drop fade executed with high precision and clean edge-up.",
    pricePlaceholder: "Price upon request",
    durationEstimate: "40–50 min",
    popular: true,
  },
  {
    id: "beard-trim",
    name: "Beard Trim & Sculpt",
    category: "beard",
    description: "Symmetrical beard shaping, line cleanup with straight razor precision, length graduation, and beard oil.",
    pricePlaceholder: "Price upon request",
    durationEstimate: "20–30 min",
  },
  {
    id: "haircut-and-beard",
    name: "Haircut & Beard Combo",
    category: "combo",
    description: "The complete grooming ritual: full precision haircut paired with comprehensive beard trimming and outline.",
    pricePlaceholder: "Price upon request",
    durationEstimate: "50–60 min",
    popular: true,
  },
  {
    id: "kids-haircut",
    name: "Kids Haircut",
    category: "special",
    description: "Patient, attentive, and respectful grooming experience for young clients of all ages.",
    pricePlaceholder: "Price upon request",
    durationEstimate: "25–35 min",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Luxury Barber Station & Interior",
    category: "shop",
    src: "/src/assets/images/hero_barber_chair_1794116229637.jpg",
    alt: "Luxury barbershop interior with tufted leather chairs and warm pendant lighting",
    caption: "Demonstration image: A refined, welcoming shop atmosphere with classic leather chairs and warm lighting.",
  },
  {
    id: "gallery-2",
    title: "Artisan Shear Work & Precision Detailing",
    category: "craft",
    src: "/src/assets/images/about_barber_craft_1794116230388.jpg",
    alt: "Master barber carefully trimming hair with classic shears and comb",
    caption: "Demonstration image: Master craftsmanship, steady hands, and meticulous attention to every strand.",
  },
  {
    id: "gallery-3",
    title: "Professional Grooming Tools & Pomades",
    category: "craft",
    src: "/src/assets/images/gallery_tools_station_1794116230420.jpg",
    alt: "Barber station with straight razor, brass clippers, shave brush, and pomade",
    caption: "Demonstration image: Premium tools, hot straight razors, and artisan pomades for a superior finish.",
  },
  {
    id: "gallery-4",
    title: "Clean Skin Fade & Razor Lineup",
    category: "haircut",
    src: "/src/assets/images/gallery_fade_cut_1794116231027.jpg",
    alt: "Side profile of a sharp skin fade and beard lineup",
    caption: "Demonstration image: High-contrast skin fade with ultra-crisp temple and beard alignment.",
  },
];

export const VERIFIED_REVIEWS = [
  {
    id: "rev-theme-1",
    theme: "Service & Haircut Excellence",
    quote: "Perfect haircuts and great service.",
    context: "Consistent feedback from local California City clients praising the sharp craftsmanship and friendly barbers.",
    source: "Google Verified Review Highlight",
  },
  {
    id: "rev-theme-2",
    theme: "Shop Atmosphere & Reliability",
    quote: "Relaxed atmosphere and quality haircuts.",
    context: "Customers consistently highlight the comfortable, laid-back vibe paired with uncompromising cut standards.",
    source: "Google Verified Review Highlight",
  },
];
