import type { Metadata } from "next";
import Link from "next/link";
import { salon, hours, asset } from "@/lib/data";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Ayesha's Salon Official — women-owned beauty salon in F-11 Markaz, Islamabad.",
};

const values = [
  {
    title: "Bridal artistry",
    text: "From Mehndi soft glam to Barat, Walima and Shalima looks — makeup finished for photos, family events and long celebration days.",
  },
  {
    title: "Personal attention",
    text: "Clients often praise artists like Ayesha and Hannah for listening carefully and matching makeup to each face, outfit and occasion.",
  },
  {
    title: "Trusted locally",
    text: `Rated ${salon.rating}★ on Google from ${salon.reviewCount} public reviews — a favourite stop in F-11 Markaz for party and wedding glam.`,
  },
];

const milestones = [
  { label: "Google rating", value: `${salon.rating}★` },
  { label: "Public reviews", value: `${salon.reviewCount}+` },
  { label: "Open daily", value: "11 AM – 8 PM" },
  { label: "Sector", value: "F-11 Markaz" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink-950 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="eyebrow text-amber-400 mb-4 animate-rise">Our Story</p>
          <h1 className="font-display text-4xl md:text-6xl text-ink-50 animate-rise delay-1">About Ayesha&apos;s</h1>
          <div className="accent-rule w-16 mx-auto mt-6 animate-rise delay-2" />
          <p className="mt-6 text-ink-300 max-w-2xl mx-auto leading-relaxed animate-rise delay-2">
            Women-owned beauty salon in F-11 Markaz, Islamabad — bridal, party glam, hair and spa.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink-200" data-reveal="left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/images/bridal.jpg")} alt="Bridal makeup at Ayesha's Salon Official" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-4 border border-amber-400/35 pointer-events-none" />
          </div>
          <div className="space-y-5 text-ink-700 leading-relaxed" data-reveal="right">
            <p className="eyebrow text-amber-600">Who we are</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink-950">A F-11 Markaz salon built on client trust</h2>
            <p>
              <strong className="text-ink-950">{salon.name}</strong> sits at 1 Select, Meher Ali Road, Street 1, near Sindh Bank in F-11 Markaz, Islamabad. It is listed as women-owned and known for bridal and party makeup that holds through long celebration days.
            </p>
            <p>
              Guests discover the salon on Google Maps and social platforms — Instagram, Facebook and TikTok — because there was no dedicated website before this demo. Bookings usually start with a WhatsApp message to{" "}
              <strong className="text-ink-950">{salon.phoneDisplay}</strong>.
            </p>
            <p>
              Whether you need a full bridal schedule, a Shalima look, or a quick party glam session, the team focuses on clean application, lasting finish and clear communication before you arrive.
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
              Public Google reviews often mention wedding-day makeup, complimentary looks and artists who follow your brief carefully.
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
                "Bridal, Barat, Walima & Shalima makeup",
                "Party and event glam",
                "Hairstyling and treatments",
                "Spa facials and massage",
                "Manicure & pedicure",
                "Waxing and skin care",
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
            <h3 className="font-display text-2xl md:text-3xl text-ink-950">Find us in F-11</h3>
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
            Message Ayesha&apos;s on WhatsApp for bridal trials, party makeup or everyday appointments.
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
