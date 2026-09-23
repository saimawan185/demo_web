/** Must match next.config.ts basePath for GitHub Pages */
export const basePath = "/demo_web";

export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export const salon = {
  name: "Ayesha's Salon Official",
  shortName: "Ayesha's",
  tagline: "Beauty Salon · F-11 Markaz",
  phone: "+923343777040",
  phoneDisplay: "+92 334 3777040",
  email: "hello@ayeshasalon.pk",
  rating: 4.4,
  reviewCount: 556,
  womenOwned: true,
  address: {
    street: "1 Select, Meher Ali Road, Street 1",
    area: "near Sindh Bank, F-11 Markaz",
    city: "Islamabad",
    postal: "48000",
    country: "Pakistan",
    full: "1 Select, Meher Ali Road, Street 1, near Sindh Bank, F-11 Markaz, Islamabad, Pakistan",
  },
  mapsUrl:
    "https://www.google.com/maps/place/Ayesha's+Salon+Official/@33.6851299,72.9882991,17z",
  mapsEmbed:
    "https://www.google.com/maps?q=Ayesha%27s+Salon+Official+F-11+Markaz+Islamabad&output=embed",
  googleReviewsUrl:
    "https://www.google.com/maps/place/Ayesha's+Salon+Official/@33.6851299,72.9882991,17z/data=!4m8!3m7!1s0x38dfbf9f6758aa07:0x7f07f99ecb3ba370!8m2!3d33.6851299!4d72.9882991!9m1!1b1",
  social: {
    facebook: "https://www.facebook.com/ayeshassalonofficial/",
    instagram: "https://www.instagram.com/ayeshasbeautysalon01",
    tiktok: "https://www.tiktok.com/@ayeshassalonofficial",
    whatsapp: "https://wa.me/923343777040",
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
    description: "Mehndi, Barat, Walima and Shalima looks finished for lasting, camera-ready glam.",
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
    description: "Facials and skin rituals for refreshed, glowing skin.",
    priceFrom: 3500,
    duration: "45–90 min",
    image: asset("/images/spa.jpg"),
  },
  {
    id: "massage",
    name: "Massage Therapy",
    description: "Relaxing body massage in a calm salon setting.",
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
  { name: "Party Ready", price: 8000, desc: "Party makeup + blowout styling" },
];

/** Adapted from public Google Maps reviews for Ayesha's Salon Official */
export const reviews = [
  {
    name: "Bia Hafeez",
    rating: 5,
    text: "Very good experience — we booked Walima makeup and two party makeups for my brother’s wedding. The looks were beautiful and we got so many compliments.",
    time: "Google review",
    source: "Google",
  },
  {
    name: "Sania Aslam",
    rating: 5,
    text: "My Shalima makeup by Exclusive Makeup by Ayesha was absolutely stunning — flawless, fresh and radiant the entire day. I couldn’t stop admiring the result.",
    time: "Google review",
    source: "Google",
  },
  {
    name: "Abeera Mahnoor",
    rating: 5,
    text: "Amazing experience at Ayesha’s Salon. Hannah did my makeup exactly how I wanted — professional, talented, and the finish looked beautiful.",
    time: "Google review",
    source: "Google",
  },
];

export function formatPrice(amount: number): string {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}
