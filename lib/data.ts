/** Must match next.config.ts basePath for GitHub Pages */
export const basePath = "/demo_web";

export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export const salon = {
  name: "Lavanya BeautyParlour",
  shortName: "Lavanya",
  tagline: "Ladies Beauty Parlour · Motichur, Haridwar",
  phone: "+919410934055",
  phoneDisplay: "+91 94109 34055",
  email: "hello@lavanyabeautyharidwar.com",
  rating: 4.7,
  reviewCount: 225,
  ladiesOnly: true,
  address: {
    street: "Gayatri Vihar, opp. Shanti Kunj",
    area: "Motichur",
    city: "Haridwar",
    postal: "249410",
    country: "India",
    full: "Gayatri Vihar, opp. Shanti Kunj, Motichur, Haridwar, Uttarakhand 249410, India",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Lavanya+BeautyParlour+Ladies+only+Motichur+Haridwar",
  mapsEmbed:
    "https://www.google.com/maps?q=Lavanya+BeautyParlour(Ladies+only)+Motichur+Haridwar&output=embed",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Lavanya+BeautyParlour+Ladies+only+Motichur+Haridwar",
  social: {
    facebook: "https://www.facebook.com/search/top?q=Lavanya%20BeautyParlour%20Haridwar",
    instagram: "https://www.instagram.com/explore/search/keyword/?q=Lavanya%20BeautyParlour%20Haridwar",
    tiktok: "https://www.tiktok.com/search?q=Lavanya%20BeautyParlour%20Haridwar",
    whatsapp: "https://wa.me/919410934055",
  },
};

/** Based on Google Maps listing */
export const hours = [
  { day: "Monday – Sunday", hours: "7:00 AM – 7:00 PM" },
];

export const heroImage = asset("/images/hero.jpg");

export const services = [
  {
    id: "bridal",
    name: "Bridal Makeup",
    description: "Wedding-day makeup and styling for brides — a specialty guests often mention.",
    priceFrom: 2500,
    duration: "90–150 min",
    image: asset("/images/bridal.jpg"),
  },
  {
    id: "party-makeup",
    name: "Party Makeup",
    description: "Event-ready makeup with soft or glam looks for parties and celebrations.",
    priceFrom: 800,
    duration: "45–90 min",
    image: asset("/images/party.jpg"),
  },
  {
    id: "hairstyle",
    name: "Hairstyling",
    description: "Blow-dry, updos and polished styles — frequently praised on Google reviews.",
    priceFrom: 300,
    duration: "30–75 min",
    image: asset("/images/hair.jpg"),
  },
  {
    id: "haircut",
    name: "Ladies Haircut",
    description: "Wash, cut and finish tailored to your face shape and hair texture.",
    priceFrom: 200,
    duration: "30–60 min",
    image: asset("/images/keratin.jpg"),
  },
  {
    id: "brows",
    name: "Eyebrow Threading",
    description: "Smooth, precise threading with soft technique guests trust for shaping.",
    priceFrom: 50,
    duration: "10–20 min",
    image: asset("/images/spa.jpg"),
  },
  {
    id: "waxing",
    name: "Waxing",
    description: "Face and body waxing with gentle care for a clean finish.",
    priceFrom: 100,
    duration: "15–45 min",
    image: asset("/images/waxing.jpg"),
  },
  {
    id: "facial",
    name: "Facials & Skin Care",
    description: "Refreshing facials and skin care for a healthy, glowing look.",
    priceFrom: 400,
    duration: "45–75 min",
    image: asset("/images/spa.jpg"),
  },
  {
    id: "manicure",
    name: "Manicure & Pedicure",
    description: "Nail care and tidy finishes for hands and feet.",
    priceFrom: 250,
    duration: "30–60 min",
    image: asset("/images/manicure.jpg"),
  },
  {
    id: "spa",
    name: "Spa & Massage",
    description: "Relaxing head, foot and body massage options for a calm break.",
    priceFrom: 500,
    duration: "30–90 min",
    image: asset("/images/pedicure.jpg"),
  },
];

export const packages = [
  { name: "Bridal Soft Glow", price: 3500, desc: "Bridal makeup + hairstyle" },
  { name: "Party Ready", price: 1200, desc: "Party makeup + styling" },
  { name: "Threading Duo", price: 150, desc: "Eyebrows + upper lip" },
];

/** Adapted from public Google Maps reviews for Lavanya BeautyParlour */
export const reviews = [
  {
    name: "Babita",
    rating: 5,
    text: "It was a very warm experience… I'm satisfied. The lady is welcoming — make sure to wash your hair before going for hair services.",
    time: "Google review",
    source: "Google",
  },
  {
    name: "Supriya Ladekar",
    rating: 5,
    text: "When we visited Rishikesh we visited Lavanya Beauty Parlour as well. She is good at styling hair. Thank you so much — one happy customer.",
    time: "Google review",
    source: "Google",
  },
  {
    name: "Ishika Jangalwa",
    rating: 5,
    text: "It's hard to trust a random parlour in another state, but the beautician really won my trust with smooth threading, soft hands and a friendly personality. Fine work — you must visit Lavanya in Haridwar.",
    time: "Google review",
    source: "Google",
  },
];

export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}
