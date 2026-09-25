/** Must match next.config.ts basePath for GitHub Pages */
export const basePath = "/demo_web";

export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export const salon = {
  name: "Dejas Beauty Saloon",
  shortName: "Dejas",
  tagline: "Beauty Salon · I-10 Markaz",
  phone: "+923335321321",
  phoneDisplay: "+92 333 5321321",
  landline: "+92514441441",
  landlineDisplay: "+92 51 4441441",
  email: "hello@dejasbeauty.pk",
  rating: 4.4,
  reviewCount: 97,
  address: {
    street: "Basement #10, Pervaiz Plaza",
    area: "near Kashmir General Store, I-10 Markaz",
    city: "Islamabad",
    postal: "44000",
    country: "Pakistan",
    full: "Basement #10, Pervaiz Plaza, near Kashmir General Store, I-10 Markaz, Islamabad, Pakistan",
  },
  mapsUrl:
    "https://www.google.com/maps/place/Dejas+Beauty+Saloon/@33.6457505,73.0355214,17z",
  mapsEmbed:
    "https://www.google.com/maps?q=Dejas+Beauty+Saloon+Pervaiz+Plaza+I-10+Markaz+Islamabad&output=embed",
  googleReviewsUrl:
    "https://www.google.com/maps/place/Dejas+Beauty+Saloon/@33.6457505,73.0355214,17z/data=!4m8!3m7!1s0x38df95a662d83e05:0xd51187ed6b042ec8!8m2!3d33.6457505!4d73.0355214!9m1!1b1",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100054276260209",
    instagram: "https://www.instagram.com/dejasbeautysaloon/",
    tiktok: "https://www.tiktok.com/@dejas_saloon",
    whatsapp: "https://wa.me/923335321321",
  },
};

/** Confirmed on Google Maps listing */
export const hours = [
  { day: "Monday – Sunday", hours: "11:00 AM – 8:00 PM" },
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
    priceFrom: 5000,
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
    id: "hair-color",
    name: "Hair Color & Highlights",
    description: "Colour, highlights and dye services clients often praise on Google.",
    priceFrom: 4500,
    duration: "90–180 min",
    image: asset("/images/keratin.jpg"),
  },
  {
    id: "spa",
    name: "Spa & Facials",
    description: "Facials and skin rituals for refreshed, glowing skin.",
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
    id: "waxing",
    name: "Waxing",
    description: "Full body and targeted waxing with gentle salon-grade products.",
    priceFrom: 700,
    duration: "20–60 min",
    image: asset("/images/waxing.jpg"),
  },
  {
    id: "massage",
    name: "Massage Therapy",
    description: "Relaxing body massage in a calm salon setting.",
    priceFrom: 2500,
    duration: "60–90 min",
    image: asset("/images/massage.jpg"),
  },
];

export const packages = [
  { name: "Party Ready", price: 7000, desc: "Party makeup + blowout styling" },
  { name: "Color Refresh", price: 9000, desc: "Highlights consultation + styling" },
  { name: "Spa Soft Glow", price: 5500, desc: "Facial + manicure" },
];

/** Adapted from public Google Maps reviews for Dejas Beauty Saloon */
export const reviews = [
  {
    name: "Saher Ahmed",
    rating: 5,
    text: "Amazing as always — all services are up to the mark with reasonable prices. I’ve had party makeups multiple times, plus haircut, highlights, manicure and pedicure. Love the results.",
    time: "Google review",
    source: "Google",
  },
  {
    name: "Shafaq Fatima Khan",
    rating: 5,
    text: "Superb services. I am extremely satisfied with Ma’am Uzma and her staff.",
    time: "Google review",
    source: "Google",
  },
  {
    name: "Local client",
    rating: 5,
    text: "Clients often mention cooperative staff, hair colour and highlights in Google reviews — a trusted I-10 Markaz salon stop.",
    time: "Google themes",
    source: "Google",
  },
];

export function formatPrice(amount: number): string {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}
