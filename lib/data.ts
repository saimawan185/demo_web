/** Must match next.config.ts basePath for GitHub Pages */
export const basePath = "/demo_web";

export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export const salon = {
  name: "Diana's Glamour Salon",
  shortName: "Diana's",
  tagline: "Beauty & Glamour in G-9 Markaz",
  phone: "+923175481454",
  phoneDisplay: "+92 317 5481454",
  email: "hello@dianasglamour.pk",
  address: {
    street: "G-9 Markaz",
    area: "G-9",
    city: "Islamabad",
    postal: "44000",
    country: "Pakistan",
    full: "G-9 Markaz, Islamabad, Pakistan",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Diana%27s+Glamour+Salon+G-9+Markaz+Islamabad",
  mapsEmbed:
    "https://www.google.com/maps?q=Diana%27s+Glamour+Salon+G-9+Markaz+Islamabad&output=embed",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    whatsapp: "https://wa.me/923175481454",
  },
};

/** Maps listing showed open until 8:00 PM */
export const hours = [
  { day: "Monday – Sunday", hours: "10:00 AM – 8:00 PM" },
];

export const heroImage = asset("/images/hero.jpg");

export const services = [
  {
    id: "bridal-makeup",
    name: "Bridal Makeup",
    description: "Mehndi, Barat and Walima looks finished for lasting, camera-ready glam.",
    priceFrom: 20000,
    duration: "2–3 hrs",
    image: asset("/images/bridal.jpg"),
  },
  {
    id: "party-makeup",
    name: "Party Makeup",
    description: "Soft glam to bold evening makeup for dinners, events and celebrations.",
    priceFrom: 6500,
    duration: "60–90 min",
    image: asset("/images/party.jpg"),
  },
  {
    id: "hairstyling",
    name: "Hairstyling & Blow Dry",
    description: "Cuts, blowouts and occasion styling for everyday polish or events.",
    priceFrom: 2000,
    duration: "45–90 min",
    image: asset("/images/hair.jpg"),
  },
  {
    id: "spa",
    name: "Facials & Skin Care",
    description: "Facials and glow treatments for refreshed, healthy-looking skin.",
    priceFrom: 3500,
    duration: "45–90 min",
    image: asset("/images/spa.jpg"),
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
    priceFrom: 9000,
    duration: "2–3 hrs",
    image: asset("/images/keratin.jpg"),
  },
  {
    id: "waxing",
    name: "Waxing",
    description: "Full body and targeted waxing with gentle salon-grade products.",
    priceFrom: 800,
    duration: "20–60 min",
    image: asset("/images/waxing.jpg"),
  },
];

export const packages = [
  { name: "Bridal Soft Glow", price: 15000, desc: "Trial makeup + styled hair" },
  { name: "Barat Complete", price: 28000, desc: "Full bridal makeup, hair & touch-up" },
  { name: "Party Ready", price: 9000, desc: "Party makeup + blow dry" },
];

export const reviews = [
  {
    name: "Fatima R.",
    rating: 5,
    text: "Booked party makeup on WhatsApp — soft glam finish and on time. Easy to reach on their mobile number.",
    time: "Recent client",
  },
  {
    name: "Mehwish A.",
    rating: 5,
    text: "Came for a facial and blow-dry in G-9 Markaz. Clean space, careful work, and fair pricing.",
    time: "Regular visitor",
  },
  {
    name: "Iqra S.",
    rating: 5,
    text: "Bridal trial was exactly what I asked for. Friendly team and a polished, glamorous look.",
    time: "Bridal client",
  },
];

export function formatPrice(amount: number): string {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}
