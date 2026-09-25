import type { Metadata } from "next";
import Link from "next/link";
import { salon, hours, asset } from "@/lib/data";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Dejas Beauty Saloon — beauty salon in I-10 Markaz, Islamabad.",
};

const values = [
  {
    title: "Party & everyday glam",
    text: "Clients return for party makeup, haircuts and polish that holds through dinners, events and busy weeks.",
  },
  {
    title: "Colour & highlights",
    text: "Hair colour, highlights and dye work are frequently mentioned in Google reviews — with results guests love.",
  },
  {
    title: "Warm local team",
    text: `Rated ${salon.rating}★ from ${salon.reviewCount} Google reviews. Guests often praise Ma’am Uzma and a cooperative staff.`,
  },
];

const milestones = [
  { label: "Google rating", value: `${salon.rating}★` },
  { label: "Public reviews", value: `${salon.reviewCount}+` },
  { label: "Open daily", value: "11 AM – 8 PM" },
  { label: "Sector", value: "I-10 Markaz" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink-950 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="eyebrow text-amber-400 mb-4 animate-rise">Our Story</p>
          <h1 className="font-display text-4xl md:text-6xl text-ink-50 animate-rise delay-1">About Dejas</h1>
          <div className="accent-rule w-16 mx-auto mt-6 animate-rise delay-2" />
          <p className="mt-6 text-ink-300 max-w-2xl mx-auto leading-relaxed animate-rise delay-2">
            Beauty salon in I-10 Markaz, Islamabad — makeup, hair, nails and spa care.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink-200" data-reveal="left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/images/hair.jpg")} alt="Hair styling at Dejas Beauty Saloon" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-4 border border-amber-400/35 pointer-events-none" />
          </div>
          <div className="space-y-5 text-ink-700 leading-relaxed" data-reveal="right">
            <p className="eyebrow text-amber-600">Who we are</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink-950">A trusted salon stop in I-10 Markaz</h2>
            <p>
              <strong className="text-ink-950">{salon.name}</strong> is at Basement #10, Pervaiz Plaza, near Kashmir General Store in I-10 Markaz, Islamabad. Guests find them on Google Maps, Instagram, Facebook and TikTok — there was no dedicated website before this demo.
            </p>
            <p>
              Public reviews highlight reasonable prices, party makeup, hair colour and a welcoming team. Bookings usually start with a WhatsApp message to{" "}
              <strong className="text-ink-950">{salon.phoneDisplay}</strong>.
            </p>
            <p>
              Whether you need a quick manicure, a colour refresh or full party glam, Dejas focuses on clear communication and lasting results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-ink-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 md:divide-x md:divide-white/10">
          {milestones.map((item, i) => (
            <div key={item.label} className="md:px-6 text-center md:text-left" data-reveal data-reveal-delay={String(i + 1)}>
              <p className="font-display text-2xl md:text-3xl text-amber-300">{item.value}</p>
              <p className="mt-2 eyebrow text-ink-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12" data-reveal>
            <p className="eyebrow text-amber-600 mb-3">How we work</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink-950">What clients come back for</h2>
            <p className="mt-4 text-ink-600 leading-relaxed text-sm md:text-base">
              Google reviews often mention cooperative service, hair colour and repeat party makeup visits.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {values.map((item, i) => (
              <article key={item.title} className="border border-ink-200 bg-white p-7 md:p-8" data-reveal data-reveal-delay={String(i + 1)}>
                <h3 className="font-display text-2xl text-ink-950">{item.title}</h3>
                <div className="accent-rule w-12 my-4" />
                <p className="text-ink-600 text-sm leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
          <div data-reveal="left">
            <p className="eyebrow text-amber-600 mb-3">Services</p>
            <h2 className="font-display text-3xl text-ink-950 mb-6">What we offer</h2>
            <ul className="space-y-4">
              {[
                "Bridal & party makeup",
                "Haircut, colour & highlights",
                "Spa facials and massage",
                "Manicure & pedicure",
                "Waxing and skin care",
                "Reasonable, client-focused pricing",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-ink-700 text-sm border-b border-ink-200 pb-3 last:border-0">
                  <span className="text-amber-500 shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-ink-200 bg-white p-8 md:p-10" data-reveal="right">
            <p className="eyebrow text-amber-600 mb-3">Visit</p>
            <h3 className="font-display text-2xl md:text-3xl text-ink-950">Find us in I-10</h3>
            <p className="mt-4 text-ink-600 text-sm leading-relaxed">{salon.address.full}</p>
            <div className="mt-6 space-y-3 text-sm">
              {hours.map((item) => (
                <p key={item.day} className="flex justify-between gap-4 border-b border-ink-100 pb-3">
                  <span className="text-ink-800">{item.day}</span>
                  <span className="text-amber-600">{item.hours}</span>
                </p>
              ))}
            </div>
            <a href={salon.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-5 text-sm text-amber-600 hover:underline">
              Open in Google Maps →
            </a>
            <div className="mt-8">
              <p className="eyebrow text-ink-500 mb-4">Follow along</p>
              <SocialLinks variant="light" size="md" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center" data-reveal="scale">
          <h2 className="font-display text-3xl md:text-4xl text-ink-950">Ready to book?</h2>
          <p className="mt-4 text-ink-600 text-sm md:text-base">
            Message Dejas on WhatsApp for party makeup, colour or everyday appointments.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/services/" className="btn-dark">Services & Prices</Link>
            <a href={salon.social.whatsapp} target="_blank" rel="noopener noreferrer" className="border border-ink-400 text-ink-800 eyebrow px-6 py-3.5 hover:border-amber-500 hover:text-amber-600 transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
