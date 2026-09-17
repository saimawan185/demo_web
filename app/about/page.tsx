import type { Metadata } from "next";
import Link from "next/link";
import { salon } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Diana's Glamour Salon in G-9 Markaz, Islamabad.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink-950 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="eyebrow text-rose-400 mb-4 animate-rise">Our Story</p>
          <h1 className="font-display text-4xl md:text-6xl text-ink-50 animate-rise delay-1">About Diana&apos;s</h1>
          <div className="accent-rule w-16 mx-auto mt-6 animate-rise delay-2" />
          <p className="mt-6 text-ink-300 max-w-2xl mx-auto leading-relaxed animate-rise delay-2">
            A beauty salon in G-9 Markaz — bridal glam, party looks and everyday polish.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
          <div className="space-y-4 text-ink-700 leading-relaxed" data-reveal="left">
            <h2 className="font-display text-3xl text-ink-950 mb-6">Who we are</h2>
            <p>
              <strong className="text-ink-950">{salon.name}</strong> is located in G-9 Markaz, Islamabad. The studio focuses on bridal and party makeup, hair styling, facials and nail care.
            </p>
            <p>
              This demo website was prepared because Diana&apos;s did not have a dedicated online presence — only a mobile number for WhatsApp and calls.
            </p>
            <p>
              Reach us on WhatsApp or call <strong className="text-ink-950">{salon.phoneDisplay}</strong> to confirm services and appointments.
            </p>
          </div>
          <div className="bg-white p-8 border border-ink-200" data-reveal="right">
            <h3 className="font-display text-2xl text-ink-950 mb-6">What we offer</h3>
            <ul className="space-y-4">
              {[
                "Bridal & party makeup",
                "Hairstyling and blow dry",
                "Facials and skin care",
                "Manicure & pedicure",
                "Hair treatments and waxing",
                "Easy booking via WhatsApp",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-ink-700 text-sm">
                  <span className="text-rose-500 shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center" data-reveal="scale">
          <h2 className="font-display text-3xl text-ink-950">Explore services</h2>
          <p className="mt-4 text-ink-600 text-sm">Indicative prices and booking details await.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/services/" className="btn-dark">Services & Prices</Link>
            <Link href="/contact/" className="border border-ink-400 text-ink-800 eyebrow px-6 py-3.5 hover:border-rose-500 hover:text-rose-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
