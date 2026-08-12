export const salon = {
  name: "IRIS Salon & Spa",
  tagline: "Where Beauty Meets Elegance",
  rating: 4.4,
  reviewCount: 320,
  phone: "03018467799",
  phoneDisplay: "0301-8467799",
  email: "hello@irissalon.pk",
  address: {
    street: "Mushtaq Ahmed Gurmani Rd, 2-S Block S",
    area: "Gulberg 2",
    city: "Lahore",
    postal: "54000",
    country: "Pakistan",
    full: "Mushtaq Ahmed Gurmani Rd, 2-S Block S Gulberg 2, Lahore, 54000, Pakistan",
  },
  mapsUrl:
    "https://www.google.com/maps/place/IRIS+Salon+%26+Spa/@31.5249055,74.3511772,17z",
  social: {
    instagram: "https://instagram.com/irissalon",
    facebook: "https://facebook.com/irissalon",
    whatsapp: "https://wa.me/923018467799",
  },
};

/** Suggested hours — opens earlier on weekdays, extended weekends */
export const suggestedHours = [
  { day: "Monday – Thursday", hours: "10:00 AM – 8:30 PM" },
  { day: "Friday – Sunday", hours: "11:00 AM – 9:30 PM" },
];

export const currentHours = [
  { day: "Monday – Sunday", hours: "11:00 AM – 9:30 PM" },
];

export const services = [
  {
    id: "hairstyling",
    name: "Hairstyling",
    description: "Cuts, blowouts, updos & event styling by expert stylists.",
    priceFrom: 2500,
    duration: "45–90 min",
    icon: "✂️",
  },
  {
    id: "hair-extensions",
    name: "Hair Extensions",
    description: "Premium extensions for length, volume & a flawless finish.",
    priceFrom: 8000,
    duration: "2–4 hrs",
    icon: "💫",
  },
  {
    id: "makeup",
    name: "Make-up Services",
    description: "Bridal, party & everyday glam with long-lasting products.",
    priceFrom: 5000,
    duration: "60–120 min",
    icon: "💄",
  },
  {
    id: "manicure",
    name: "Manicure",
    description: "Classic, gel & nail art — polished to perfection.",
    priceFrom: 1200,
    duration: "30–45 min",
    icon: "💅",
  },
  {
    id: "pedicure",
    name: "Pedicure",
    description: "Relaxing foot care with scrub, massage & polish.",
    priceFrom: 1500,
    duration: "45–60 min",
    icon: "🦶",
  },
  {
    id: "massage",
    name: "Massage",
    description: "Swedish, deep tissue & aromatherapy for total relaxation.",
    priceFrom: 3500,
    duration: "60–90 min",
    icon: "🌿",
  },
  {
    id: "waxing",
    name: "Body Waxing",
    description: "Full body & targeted waxing with gentle, premium wax.",
    priceFrom: 1500,
    duration: "20–60 min",
    icon: "✨",
  },
  {
    id: "blowout",
    name: "Blowouts",
    description: "Salon-fresh volume & shine that lasts until your next wash.",
    priceFrom: 2000,
    duration: "30–45 min",
    icon: "💨",
  },
  {
    id: "lashes",
    name: "Lash Extensions",
    description: "Classic, hybrid & volume lashes for a stunning look.",
    priceFrom: 4500,
    duration: "90–120 min",
    icon: "👁️",
  },
];

export const reviews = [
  {
    name: "Noor us Sahar Fatima",
    rating: 5,
    text: "Amazing place! Such nice staff and the blow-dry was mind blowing! It looks so amazing and stayed the way it was until I took a wash!",
    time: "4 months ago",
  },
  {
    name: "Samira Balouch",
    rating: 5,
    text: "I totally appreciate their family grooming privacy. I highly recommend and very nice services undoubtedly.",
    time: "1 year ago",
    services: ["Manicure", "Blowouts", "Hairstyling", "Pedicure", "Massage"],
  },
  {
    name: "Hareem Fatima",
    rating: 5,
    text: "Had an amazing experience at Iris!! Got a mani pedi and lash extensions and they looked BEAUTIFUL. Will definitely come again!!",
    time: "3 years ago",
  },
  {
    name: "Mushk Kaleem",
    rating: 5,
    text: "Had the absolute best time with Huma at IRIS. She's quick, professional and listens to the customer's requests. Will definitely come back again.",
    time: "1 year ago",
    services: ["Manicure", "Shampoo & conditioning", "Massage"],
  },
  {
    name: "Qiraat Shah",
    rating: 5,
    text: "Always a lovely experience. Huma and Neha always give their best in manicure services. 100% recommend Shehnaz for a classy hairdo.",
    time: "1 year ago",
    services: ["Manicure", "Blowouts", "Hairstyling", "Pedicure", "Massage"],
  },
];

export const team = [
  { name: "Huma", role: "Senior Manicurist & Massage Therapist" },
  { name: "Neha", role: "Manicure Specialist" },
  { name: "Shehnaz", role: "Lead Hairstylist" },
];

export function formatPrice(amount: number): string {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}
