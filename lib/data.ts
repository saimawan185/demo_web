/** Must match next.config.ts basePath for GitHub Pages */
export const basePath = "/demo_web";

export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export const salon = {
  name: "Jasmine Beauty Salon & SPA",
  shortName: "Jasmine",
  tagline: "Beauty & Spa Care in F-10 Markaz",
  phone: "0514349949",
  phoneDisplay: "(051) 434-9949",
  email: "hello@jasminesalon.pk",
  address: {
    street: "7K, F-10 Markaz",
    area: "F-10",
    city: "Islamabad",
    postal: "44000",
    country: "Pakistan",
    full: "7K, F-10 Markaz, Islamabad, Pakistan",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Jasmine+Beauty+Salon+SPA+F-10+Markaz+Islamabad",
  mapsEmbed:
    "https://www.google.com/maps?q=Jasmine+Beauty+Salon+%26+SPA+F-10+Markaz+7K+Islamabad&output=embed",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    whatsapp: "https://wa.me/92514349949",
  },
};

/** Suggested hours — listing hours were incomplete online */
export const hours = [
  { day: "Monday – Sunday", hours: "11:00 AM – 8:00 PM" },
];

export const heroImage = asset("/images/hero.jpg");

export const services = [
  {
    id: "bridal-makeup",
    name: "Bridal Makeup",
    description: "Mehndi, Barat and Walima looks finished for lasting, camera-ready glam.",
    priceFrom: 22000,
    duration: "2–3 hrs",
    image: asset("/images/bridal.jpg"),
  },
  {
    id: "party-makeup",
    name: "Party Makeup",
    description: "Soft glam to bold evening makeup for dinners, events and celebrations.",
    priceFrom: 7000,
    duration: "60–90 min",
    image: asset("/images/party.jpg"),
  },
  {
    id: "hairstyling",
    name: "Hairstyling & Blow Dry",
    description: "Cuts, blowouts and occasion styling for everyday polish or events.",
    priceFrom: 2200,
    duration: "45–90 min",
    image: asset("/images/hair.jpg"),
  },
  {
    id: "spa",
    name: "Spa & Facials",
    description: "Facials and spa rituals to refresh skin and restore a healthy glow.",
    priceFrom: 4000,
    duration: "45–90 min",
    image: asset("/images/spa.jpg"),
  },
  {
    id: "massage",
    name: "Massage Therapy",
    description: "Relaxing body massage to unwind before events or after a long week.",
    priceFrom: 3500,
    duration: "60–90 min",
    image: asset("/images/massage.jpg"),
  },
  {
    id: "manicure",
    name: "Manicure",
    description: "Classic and gel manicures with clean, polished finishing.",
    priceFrom: 1200,
    duration: "30–45 min",
    image: asset("/images/manicure.jpg"),
  },
  {
    id: "pedicure",
    name: "Pedicure",
    description: "Foot care with scrub, massage and polish for soft, groomed feet.",
    priceFrom: 1500,
    duration: "45–60 min",
    image: asset("/images/pedicure.jpg"),
  },
  {
    id: "keratin",
    name: "Hair Treatments",
    description: "Smoothing and repair treatments for healthier, shinier hair.",
    priceFrom: 10000,
    duration: "2–3 hrs",
    image: asset("/images/keratin.jpg"),
  },
  {
    id: "waxing",
    name: "Waxing",
    description: "Full body and targeted waxing with gentle salon-grade products.",
    priceFrom: 1000,
    duration: "20–60 min",
    image: asset("/images/waxing.jpg"),
  },
];

export const packages = [
  { name: "Bridal Soft Glow", price: 16000, desc: "Trial makeup + styled hair" },
  { name: "Barat Complete", price: 32000, desc: "Full bridal makeup, hair & touch-up" },
  { name: "Spa Refresh", price: 7500, desc: "Facial + 60-min massage" },
];

export const reviews = [
  {
    name: "Amina S.",
    rating: 5,
    text: "Got my party makeup and blow-dry done — soft, elegant finish and the spa area felt calm and clean. Highly recommend for F-10.",
    time: "Recent client",
  },
  {
    name: "Hira N.",
    rating: 5,
    text: "Came for a facial and manicure. Staff listened carefully and the results looked fresh for days. Will book again.",
    time: "Regular visitor",
  },
  {
    name: "Saba K.",
    rating: 5,
    text: "Bridal trial was exactly what I asked for. Professional team, good timing, and a premium feel without being rushed.",
    time: "Bridal client",
  },
];

export function formatPrice(amount: number): string {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}
