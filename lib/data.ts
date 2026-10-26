/** Must match next.config.ts basePath for GitHub Pages */
export const basePath = "/demo_web";

export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export const salon = {
  name: "Maria's Beauty Parlour",
  shortName: "Maria's",
  tagline: "Hair & Skin Care · Gulshan Block 11, Karachi",
  phone: "+923348592187",
  phoneDisplay: "+92 334 8592187",
  email: "hello@mariasbeautyparlour.pk",
  rating: 4.9,
  reviewCount: 160,
  ladiesOnly: true,
  address: {
    street: "Moon Garden Street",
    area: "Block 11, Gulshan-e-Iqbal",
    city: "Karachi",
    postal: "",
    country: "Pakistan",
    full: "Moon Garden St, Block 11 Gulshan-e-Iqbal, Karachi, Pakistan",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Maria%27s+Beauty+Parlour+hair+%26+skin+care+Gulshan+Karachi",
  mapsEmbed:
    "https://www.google.com/maps?q=Maria%27s+Beauty+Parlour+hair+%26+skin+care+Gulshan-e-Iqbal+Karachi&output=embed",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Maria%27s+Beauty+Parlour+hair+%26+skin+care+Gulshan+Karachi",
  social: {
    facebook: "https://www.facebook.com/mariasbeautyparlour",
    instagram: "https://www.instagram.com/explore/search/keyword/?q=Maria%27s%20Beauty%20Parlour%20Gulshan",
    tiktok: "https://www.tiktok.com/search?q=Maria%27s%20Beauty%20Parlour%20Karachi",
    whatsapp: "https://wa.me/923348592187",
  },
};

/** Based on Google Maps listing */
export const hours = [
  { day: "Monday – Sunday", hours: "10:00 AM – 10:00 PM" },
];

export const heroImage = asset("/images/hero.jpg");

export const services = [
  {
    id: "haircut",
    name: "Express Haircut",
    description: "Sharp cuts with guidance that leaves you smiling — guests call it outstanding express service.",
    priceFrom: 800,
    duration: "30–45 min",
    image: asset("/images/hair.jpg"),
  },
  {
    id: "color",
    name: "Hair Colour & Dye",
    description: "Bold colour that goes beyond expectations — rich tones with a fresh finish.",
    priceFrom: 2500,
    duration: "90–150 min",
    image: asset("/images/keratin.jpg"),
  },
  {
    id: "keratin",
    name: "Keratin & Protein",
    description: "Smoothing keratin and protein treatments for softer, stronger hair.",
    priceFrom: 8000,
    duration: "2–3 hrs",
    image: asset("/images/spa.jpg"),
  },
  {
    id: "facial",
    name: "Glow Facials",
    description: "Fruit facials and skin care that leave soft, glowy skin — a client favourite.",
    priceFrom: 2000,
    duration: "45–75 min",
    image: asset("/images/spa.jpg"),
  },
  {
    id: "bridal",
    name: "Bridal Makeup",
    description: "Wedding-day glam that turns heads — book early on WhatsApp for your date.",
    priceFrom: 12000,
    duration: "90–150 min",
    image: asset("/images/bridal.jpg"),
  },
  {
    id: "party-makeup",
    name: "Party Makeup",
    description: "Urgent or planned — event-ready makeup that looks camera-fresh.",
    priceFrom: 4000,
    duration: "45–75 min",
    image: asset("/images/party.jpg"),
  },
  {
    id: "mani-pedi",
    name: "Manicure & Pedicure",
    description: "Hands and feet that look loved — tidy, polished finishes every time.",
    priceFrom: 1500,
    duration: "45–75 min",
    image: asset("/images/manicure.jpg"),
  },
  {
    id: "waxing",
    name: "Waxing",
    description: "Smooth, clean waxing with a comfortable parlour vibe.",
    priceFrom: 300,
    duration: "15–45 min",
    image: asset("/images/waxing.jpg"),
  },
  {
    id: "skin",
    name: "Skin Care",
    description: "Everyday glow rituals for softer skin and a fresh face.",
    priceFrom: 1500,
    duration: "30–60 min",
    image: asset("/images/pedicure.jpg"),
  },
];

export const packages = [
  { name: "Glow Soft", price: 4500, desc: "Facial + manicure" },
  { name: "Colour Pop", price: 5500, desc: "Hair dye + blow-dry finish" },
  { name: "Party Ready", price: 6500, desc: "Party makeup + styling" },
];

/** Adapted from public Google Maps reviews for Maria's Beauty Parlour */
export const reviews = [
  {
    name: "Fatima Farhad",
    rating: 5,
    text: "I got my hair cut here and after many other places I was never satisfied — this time I'm very pleased. Excellent express service, outstanding guidance. Highly recommended!",
    time: "Google review",
    source: "Google",
  },
  {
    name: "Imtesaal Khalid",
    rating: 5,
    text: "Loved Maria's in Gulshan Block 11 near Moon Garden. Hair dye beyond my expectations, facials leave skin soft and glowy, and manicure-pedicure looked amazing. Definitely visiting again.",
    time: "Google review",
    source: "Google",
  },
  {
    name: "Sohail Ahmed",
    rating: 5,
    text: "My wife went for urgent makeup service. Overall great.",
    time: "Google review",
    source: "Google",
  },
];

export function formatPrice(amount: number): string {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}
