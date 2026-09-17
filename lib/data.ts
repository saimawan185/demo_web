/** Must match next.config.ts basePath for GitHub Pages */
export const basePath = "/demo_web";

export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export const salon = {
  name: "Abeera's Beauty Salon",
  shortName: "Abeera's",
  tagline: "Ladies Salon, Spa & Training · G-13",
  phone: "+923345414171",
  phoneDisplay: "+92 334 5414171",
  email: "hello@abeerasbeauty.pk",
  rating: 4.8,
  reviewCount: 50,
  address: {
    street: "Shakeel Arcade, Street 85",
    area: "G-13/1",
    city: "Islamabad",
    postal: "44000",
    country: "Pakistan",
    full: "Shakeel Arcade, Street 85, G-13/1, Islamabad, Pakistan",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Abeera%27s+Beauty+Salon+Street+85+G-13+Islamabad",
  mapsEmbed:
    "https://www.google.com/maps?q=Abeera%27s+Beauty+Salon+Shakeel+Arcade+Street+85+G-13%2F1+Islamabad&output=embed",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    whatsapp: "https://wa.me/923345414171",
  },
};

/** Maps listing showed open until 9:00 PM */
export const hours = [
  { day: "Monday – Sunday", hours: "10:00 AM – 9:00 PM" },
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
    priceFrom: 6000,
    duration: "60–90 min",
    image: asset("/images/party.jpg"),
  },
  {
    id: "hairstyling",
    name: "Haircut & Styling",
    description: "Cuts, blowouts and occasion styling for everyday polish or events.",
    priceFrom: 1800,
    duration: "45–90 min",
    image: asset("/images/hair.jpg"),
  },
  {
    id: "spa",
    name: "Spa & Facials",
    description: "Facials and spa rituals for refreshed, glowing skin.",
    priceFrom: 3500,
    duration: "45–90 min",
    image: asset("/images/spa.jpg"),
  },
  {
    id: "massage",
    name: "Massage Therapy",
    description: "Relaxing body massage in a ladies-only spa setting.",
    priceFrom: 3000,
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
  { name: "Barat Complete", price: 30000, desc: "Full bridal makeup, hair & touch-up" },
  { name: "Spa Refresh", price: 7000, desc: "Facial + 60-min massage" },
];

export const reviews = [
  {
    name: "Zoya A.",
    rating: 5,
    text: "Calm ladies-only space and a careful spa session. Easy to book on WhatsApp and the team was professional throughout.",
    time: "Recent client",
  },
  {
    name: "Maria B.",
    rating: 5,
    text: "Came for a facial and manicure in G-13. Hygienic, friendly, and worth the visit — one of my favourite local salons.",
    time: "Regular visitor",
  },
  {
    name: "Hira S.",
    rating: 5,
    text: "Bridal trial looked soft and natural. They take one client with care — felt private and unhurried.",
    time: "Bridal client",
  },
];

export function formatPrice(amount: number): string {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}
