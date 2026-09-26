/** Must match next.config.ts basePath for GitHub Pages */
export const basePath = "/demo_web";

export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export const salon = {
  name: "Almaha Beauty Salon",
  shortName: "Almaha",
  tagline: "Ladies Beauty Salon · Berlin Kreuzberg",
  phone: "+4917645292648",
  phoneDisplay: "+49 176 45292648",
  email: "hello@almahabbeauty.de",
  rating: 4.9,
  reviewCount: 102,
  ladiesOnly: true,
  address: {
    street: "Graefestraße 30",
    area: "Kreuzberg",
    city: "Berlin",
    postal: "10967",
    country: "Germany",
    full: "Graefestraße 30, 10967 Berlin, Germany",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=ALMAHA+BEAUTY+SALON+Graefestra%C3%9Fe+30+Berlin",
  mapsEmbed:
    "https://www.google.com/maps?q=ALMAHA+BEAUTY+SALON+Graefestra%C3%9Fe+30+Berlin&output=embed",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=ALMAHA+BEAUTY+SALON+Graefestra%C3%9Fe+30+Berlin",
  social: {
    facebook: "https://www.facebook.com/search/top?q=Almaha%20Beauty%20Salon%20Berlin",
    instagram: "https://www.instagram.com/al_maha_beauty_salon/",
    tiktok: "https://www.tiktok.com/search?q=Almaha%20Beauty%20Salon%20Berlin",
    whatsapp: "https://wa.me/4917645292648",
  },
};

/** Based on Google Maps / Treatwell listings */
export const hours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday – Saturday", hours: "10:30 AM – 6:30 PM" },
  { day: "Sunday", hours: "Closed" },
];

export const heroImage = asset("/images/hero.jpg");

export const services = [
  {
    id: "haircut",
    name: "Ladies Haircut",
    description: "Wash, cut and style tailored to your face shape and hair texture.",
    priceFrom: 30,
    duration: "25–60 min",
    image: asset("/images/hair.jpg"),
  },
  {
    id: "color",
    name: "Colour & Highlights",
    description: "Root touch-ups, full colour and modern colour work with professional care.",
    priceFrom: 100,
    duration: "90–180 min",
    image: asset("/images/keratin.jpg"),
  },
  {
    id: "keratin",
    name: "Keratin Treatment",
    description: "Smoothing Brazilian keratin for softer, manageable hair.",
    priceFrom: 250,
    duration: "2–3 hrs",
    image: asset("/images/spa.jpg"),
  },
  {
    id: "bridal",
    name: "Bridal Hairstyle",
    description: "Wedding-day updos and soft glam styles for your special occasion.",
    priceFrom: 200,
    duration: "90–120 min",
    image: asset("/images/bridal.jpg"),
  },
  {
    id: "party-makeup",
    name: "Styling & Blow-dry",
    description: "Event-ready blow-dries, straightening and polished finishing.",
    priceFrom: 55,
    duration: "45–75 min",
    image: asset("/images/party.jpg"),
  },
  {
    id: "brows",
    name: "Brows & Lashes",
    description: "Threading, tinting and lash care for clean, defined eyes.",
    priceFrom: 10,
    duration: "15–45 min",
    image: asset("/images/spa.jpg"),
  },
  {
    id: "waxing",
    name: "Waxing & Threading",
    description: "Face and body hair removal with gentle, precise technique.",
    priceFrom: 5,
    duration: "10–45 min",
    image: asset("/images/waxing.jpg"),
  },
  {
    id: "pmu",
    name: "Permanent Make-up",
    description: "Brows and pigment work for lasting definition — consult on WhatsApp.",
    priceFrom: 200,
    duration: "Consultation",
    image: asset("/images/manicure.jpg"),
  },
  {
    id: "care",
    name: "Hair Treatments",
    description: "Nourishing cures and care rituals for healthier-feeling hair.",
    priceFrom: 50,
    duration: "30–60 min",
    image: asset("/images/pedicure.jpg"),
  },
];

export const packages = [
  { name: "Cut & Style", price: 60, desc: "Wash, cut and blow-dry" },
  { name: "Colour Refresh", price: 130, desc: "Root colour + styling" },
  { name: "Bridal Soft Glow", price: 220, desc: "Bridal hairstyle trial-ready finish" },
];

/** Adapted from public Google Maps reviews for AlmaHA Beauty Salon */
export const reviews = [
  {
    name: "Yasser Alotaibi",
    rating: 5,
    text: "This salon is only for ladies — good atmosphere and professional service. Prices are logical and acceptable.",
    time: "Google review",
    source: "Google",
  },
  {
    name: "Lea Simon",
    rating: 5,
    text: "I needed a spontaneous haircut and could just drop in. She cut my hair exactly how I wanted and everyone was super friendly.",
    time: "Google review",
    source: "Google",
  },
  {
    name: "Ray San",
    rating: 5,
    text: "A super friendly little salon! Short-notice appointment, butterfly layers with bangs — the result is beautiful and the hairdresser was incredibly nice.",
    time: "Google review",
    source: "Google",
  },
];

export function formatPrice(amount: number): string {
  return `€${amount.toLocaleString("de-DE")}`;
}
