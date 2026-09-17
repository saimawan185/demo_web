/** Must match next.config.ts basePath for GitHub Pages */
export const basePath = "/demo_web";

export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export const salon = {
  name: "Fashion Beauty Saloon",
  shortName: "Fashion Beauty",
  tagline: "Hair & Beauty on Street 5, G-9",
  phone: "+923005339157",
  phoneDisplay: "+92 300 5339157",
  email: "hello@fashionbeauty.pk",
  address: {
    street: "Street 5",
    area: "G-9",
    city: "Islamabad",
    postal: "44000",
    country: "Pakistan",
    full: "Street 5, G-9, Islamabad, Pakistan",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Fashion+Beauty+Saloon+Street+5+G-9+Islamabad",
  mapsEmbed:
    "https://www.google.com/maps?q=Fashion+Beauty+Saloon+Street+5+G-9+Islamabad&output=embed",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
};

/** Maps listing showed open late; confirm when calling */
export const hours = [
  { day: "Monday – Sunday", hours: "10:00 AM – 11:00 PM" },
];

export const heroImage = asset("/images/hero.jpg");

export const services = [
  {
    id: "bridal-makeup",
    name: "Bridal Makeup",
    description: "Mehndi, Barat and Walima looks finished for lasting, camera-ready glam.",
    priceFrom: 18000,
    duration: "2–3 hrs",
    image: asset("/images/bridal.jpg"),
  },
  {
    id: "party-makeup",
    name: "Party Makeup",
    description: "Soft glam to bold evening makeup for dinners, events and celebrations.",
    priceFrom: 5500,
    duration: "60–90 min",
    image: asset("/images/party.jpg"),
  },
  {
    id: "hairstyling",
    name: "Haircut & Styling",
    description: "Cuts, blowouts and occasion styling for everyday polish or events.",
    priceFrom: 1500,
    duration: "45–90 min",
    image: asset("/images/hair.jpg"),
  },
  {
    id: "spa",
    name: "Facials & Skin Care",
    description: "Facials and glow treatments for refreshed, healthy-looking skin.",
    priceFrom: 3000,
    duration: "45–90 min",
    image: asset("/images/spa.jpg"),
  },
  {
    id: "manicure",
    name: "Manicure",
    description: "Classic and gel manicures with clean, polished finishing.",
    priceFrom: 1000,
    duration: "30–45 min",
    image: asset("/images/manicure.jpg"),
  },
  {
    id: "pedicure",
    name: "Pedicure",
    description: "Foot care with scrub, massage and polish for soft, groomed feet.",
    priceFrom: 1200,
    duration: "45–60 min",
    image: asset("/images/pedicure.jpg"),
  },
  {
    id: "keratin",
    name: "Hair Treatments",
    description: "Smoothing and repair treatments for healthier, shinier hair.",
    priceFrom: 8000,
    duration: "2–3 hrs",
    image: asset("/images/keratin.jpg"),
  },
  {
    id: "waxing",
    name: "Waxing",
    description: "Full body and targeted waxing with gentle salon-grade products.",
    priceFrom: 700,
    duration: "20–60 min",
    image: asset("/images/waxing.jpg"),
  },
];

export const packages = [
  { name: "Bridal Soft Glow", price: 14000, desc: "Trial makeup + styled hair" },
  { name: "Barat Complete", price: 26000, desc: "Full bridal makeup, hair & touch-up" },
  { name: "Party Ready", price: 8000, desc: "Party makeup + blow dry" },
];

export const reviews = [
  {
    name: "Sana M.",
    rating: 5,
    text: "Called ahead for a blow-dry and party makeup — clear booking over the phone and a neat finish.",
    time: "Recent client",
  },
  {
    name: "Nadia K.",
    rating: 5,
    text: "Convenient Street 5 location in G-9. Haircut and facial were done carefully without rushing.",
    time: "Local client",
  },
  {
    name: "Ayesha T.",
    rating: 5,
    text: "Bridal trial looked soft and natural. Easy to reach by calling their mobile number.",
    time: "Bridal client",
  },
];

export function formatPrice(amount: number): string {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}
