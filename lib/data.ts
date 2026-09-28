/** Must match next.config.ts basePath for GitHub Pages */
export const basePath = "/demo_web";

export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export const salon = {
  name: "Beauty Aura Salon",
  shortName: "Beauty Aura",
  tagline: "Laser & Nail Hub · DHA Phase 4, Lahore",
  phone: "+923004776011",
  phoneDisplay: "+92 300 4776011",
  email: "hello@beautyaurasalon.pk",
  rating: 4.8,
  reviewCount: 46,
  ladiesOnly: true,
  address: {
    street: "DD, Sector CCA",
    area: "DHA Phase 4",
    city: "Lahore",
    postal: "54000",
    country: "Pakistan",
    full: "DD, Sector CCA, DHA Phase 4, Lahore, 54000, Pakistan",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Beauty+Aura+Salon+Laser+%26+Nail+Hub+DHA+Phase+4+Lahore",
  mapsEmbed:
    "https://www.google.com/maps?q=Beauty+Aura+Salon+Laser+%26+Nail+Hub+DHA+Phase+4+Lahore&output=embed",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Beauty+Aura+Salon+Laser+%26+Nail+Hub+DHA+Phase+4+Lahore",
  social: {
    facebook: "https://www.facebook.com/search/top?q=Beauty%20Aura%20Salon%20DHA%20Lahore",
    instagram: "https://www.instagram.com/explore/search/keyword/?q=Beauty%20Aura%20Salon%20Lahore",
    tiktok: "https://www.tiktok.com/search?q=Beauty%20Aura%20Salon%20Lahore",
    whatsapp: "https://wa.me/923004776011",
  },
};

/** Based on Google Maps listing */
export const hours = [
  { day: "Monday", hours: "10:30 AM – 8:00 PM" },
  { day: "Tuesday", hours: "Closed" },
  { day: "Wednesday – Sunday", hours: "10:30 AM – 8:00 PM" },
];

export const heroImage = asset("/images/hero.jpg");

export const services = [
  {
    id: "haircut",
    name: "Ladies Haircut",
    description: "Soft layers, butterfly cuts and face-framing styles — guests praise volume and bounce.",
    priceFrom: 1500,
    duration: "30–60 min",
    image: asset("/images/hair.jpg"),
  },
  {
    id: "mani-pedi",
    name: "Manicure & Pedicure",
    description: "Clean, tidy nail care with a hygienic finish clients come back for.",
    priceFrom: 1200,
    duration: "45–75 min",
    image: asset("/images/manicure.jpg"),
  },
  {
    id: "facial",
    name: "Facials & Skin Care",
    description: "Refreshing facials with cooperative staff and a calm salon atmosphere.",
    priceFrom: 2500,
    duration: "45–75 min",
    image: asset("/images/spa.jpg"),
  },
  {
    id: "massage",
    name: "Massage",
    description: "Relaxing massage care — often highlighted in Google reviews.",
    priceFrom: 2000,
    duration: "30–60 min",
    image: asset("/images/pedicure.jpg"),
  },
  {
    id: "laser",
    name: "Laser Hair Removal",
    description: "Laser treatments for smooth results — ask on WhatsApp for package details.",
    priceFrom: 3000,
    duration: "Consultation",
    image: asset("/images/waxing.jpg"),
  },
  {
    id: "waxing",
    name: "Waxing",
    description: "Body and face waxing with gentle technique and hygiene-first care.",
    priceFrom: 500,
    duration: "15–45 min",
    image: asset("/images/waxing.jpg"),
  },
  {
    id: "nails",
    name: "Nail Hub",
    description: "Nail care and polish finishes from Beauty Aura’s dedicated nail services.",
    priceFrom: 1000,
    duration: "30–60 min",
    image: asset("/images/manicure.jpg"),
  },
  {
    id: "party-makeup",
    name: "Party Makeup",
    description: "Event-ready makeup looks for parties and celebrations.",
    priceFrom: 5000,
    duration: "45–90 min",
    image: asset("/images/party.jpg"),
  },
  {
    id: "bridal",
    name: "Bridal Makeup",
    description: "Bridal glam for your big day — message WhatsApp to book a trial.",
    priceFrom: 15000,
    duration: "90–150 min",
    image: asset("/images/bridal.jpg"),
  },
];

export const packages = [
  { name: "Glow Soft", price: 4500, desc: "Facial + manicure" },
  { name: "Hair Refresh", price: 3500, desc: "Haircut + blow-dry finish" },
  { name: "Mani-Pedi Duo", price: 2200, desc: "Hands & feet care" },
];

/** Adapted from public Google Maps reviews for Beauty Aura Salon */
export const reviews = [
  {
    name: "Hania Majeed",
    rating: 5,
    text: "I got a butterfly haircut and I'm really happy with the result. Soft face-framing layers with nice volume and bounce. The staff was professional and listened carefully — I'd definitely recommend it.",
    time: "Google review",
    source: "Google",
  },
  {
    name: "maryam Hussain",
    rating: 5,
    text: "Very good services with cooperative staff and a caring owner. Atmosphere and hygiene are taken care of. I had facial, mani-pedi and haircut — really enjoyed them and will visit again.",
    time: "Google review",
    source: "Google",
  },
  {
    name: "Muniba",
    rating: 5,
    text: "They give the best services in town and care about hygiene. The staff is genuinely cooperative — love the massage!",
    time: "Google review",
    source: "Google",
  },
];

export function formatPrice(amount: number): string {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}
