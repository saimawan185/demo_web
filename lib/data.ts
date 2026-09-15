/** Must match next.config.ts basePath for GitHub Pages static assets */
export const basePath = "/demo_web";

export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export const salon = {
  name: "Allure Salon & Spa",
  tagline: "Beauty, Bridal & Wellness in F-10",
  rating: 4.7,
  reviewCount: 180,
  phone: "0512370345",
  phoneDisplay: "(051) 237-0345",
  phoneAlt: "+92 51 2370345",
  email: "hello@alluresalon.pk",
  address: {
    street: "Street 14, Tariq Market",
    area: "F-10/2",
    city: "Islamabad",
    postal: "44000",
    country: "Pakistan",
    full: "Street 14, Tariq Market, F-10/2, Islamabad, Pakistan",
  },
  branches: [
    "F-10/2, Tariq Market, Islamabad",
    "Bahria Town Phase 6 (bridal & spa)",
  ],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Allure+Salon+%26+Spa+F-10+Islamabad",
  mapsEmbed:
    "https://www.google.com/maps?q=Allure+Salon+%26+Spa+Street+14+Tariq+Market+F-10%2F2+Islamabad&output=embed",
  social: {
    facebook: "https://www.facebook.com/allureislamabad/",
    instagram: "https://www.instagram.com/alluresalonspaofficial/",
    whatsapp: "https://wa.me/92512370345",
  },
};

export const hours = [
  { day: "Monday – Sunday", hours: "10:30 AM – 7:45 PM" },
];

export const heroImage = asset("/images/hero.jpg");

export const services = [
  {
    id: "bridal-makeup",
    name: "Bridal Makeup",
    description: "Mehndi, Barat & Walima looks crafted for lasting camera-ready glam.",
    priceFrom: 25000,
    duration: "2–3 hrs",
    image: asset("/images/bridal.jpg"),
  },
  {
    id: "party-makeup",
    name: "Party Makeup",
    description: "Evening and event makeup with soft glam or bold finishes.",
    priceFrom: 8000,
    duration: "60–90 min",
    image: asset("/images/party.jpg"),
  },
  {
    id: "hairstyling",
    name: "Hairstyling & Blow Dry",
    description: "Cuts, colour consults, blowouts and occasion updos.",
    priceFrom: 2500,
    duration: "45–90 min",
    image: asset("/images/hair.jpg"),
  },
  {
    id: "keratin",
    name: "Keratin & Hair Treatments",
    description: "Smoothing and repair treatments for healthy, shiny hair.",
    priceFrom: 12000,
    duration: "2–3 hrs",
    image: asset("/images/keratin.jpg"),
  },
  {
    id: "manicure",
    name: "Manicure",
    description: "Classic and gel manicures with clean, polished finishes.",
    priceFrom: 1500,
    duration: "30–45 min",
    image: asset("/images/manicure.jpg"),
  },
  {
    id: "pedicure",
    name: "Pedicure",
    description: "Relaxing foot care with scrub, massage and polish.",
    priceFrom: 1800,
    duration: "45–60 min",
    image: asset("/images/pedicure.jpg"),
  },
  {
    id: "spa",
    name: "Spa & Facials",
    description: "Facials, glow treatments and spa rituals for skin refresh.",
    priceFrom: 4500,
    duration: "45–90 min",
    image: asset("/images/spa.jpg"),
  },
  {
    id: "massage",
    name: "Massage Therapy",
    description: "Relaxing body massage to unwind before events or after a long week.",
    priceFrom: 4000,
    duration: "60–90 min",
    image: asset("/images/massage.jpg"),
  },
  {
    id: "waxing",
    name: "Waxing",
    description: "Full body and targeted waxing with gentle salon-grade products.",
    priceFrom: 1200,
    duration: "20–60 min",
    image: asset("/images/waxing.jpg"),
  },
];

export const packages = [
  {
    name: "Mehndi Glow",
    price: 18000,
    desc: "Soft bridal trial makeup + styled hair",
  },
  {
    name: "Barat Complete",
    price: 35000,
    desc: "Full bridal makeup, hair & touch-up kit",
  },
  {
    name: "Spa Escape",
    price: 9000,
    desc: "Facial + 60-min massage + mani",
  },
];

export const reviews = [
  {
    name: "Ayesha R.",
    rating: 5,
    text: "Got my Barat makeup done here — stayed flawless all night and looked amazing in photos. The team was calm, professional and so attentive.",
    time: "Recent client",
  },
  {
    name: "Sana M.",
    rating: 5,
    text: "Love their spa and facial treatments. Clean space, friendly staff, and my skin felt refreshed for days. Highly recommend the F-10 branch.",
    time: "Regular visitor",
  },
  {
    name: "Hira K.",
    rating: 5,
    text: "Came for a party look and blow dry. Exact shade I asked for, finished on time, and the vibe was premium without feeling rushed.",
    time: "Event client",
  },
];

export function formatPrice(amount: number): string {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}
