import type { Metadata } from "next";
import Link from "next/link";
import { salon } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Fashion Beauty Saloon on Street 5, G-9 Islamabad.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink-950 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="eyebrow text-steel-400 mb-4 animate-rise">Our Story</p>
          <h1 className="font-display text-4xl md:text-6xl text-ink-50 animate-rise delay-1">About Fashion Beauty</h1>
          <div className="accent-rule w-16 mx-auto mt-6 animate-rise delay-2" />
          <p className="mt-6 text-ink-300 max-w-2xl mx-auto leading-relaxed animate-rise delay-2">
            A hair and beauty saloon in G-9 — book by calling their mobile number.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
          <div className="space-y-4 text-ink-700 leading-relaxed" data-reveal="left">
            <h2 className="font-display text-3xl text-ink-950 mb-6">Who we are</h2>
            <p>
              <strong className="text-ink-950">{salon.name}</strong> is located on Street 5 in G-9, Islamabad. The listing focuses on hairdressing and beauty salon services.
            </p>
            <p>
              Online, they appear with a mobile phone only and no dedicated website. This demo site presents services clearly and points clients to call.
            </p>
            <p>
              Call <strong className="text-ink-950">{salon.phoneDisplay}</strong> to confirm services, rates and appointment times.
            </p>
          </div>
          <div className="bg-white p-8 border border-ink-200" data-reveal="right">
            <h3 className="font-display text-2xl text-ink-950 mb-6">What we offer</h3>
            <ul className="space-y-4">
              {[
                "Bridal & party makeup",
                "Haircuts and styling",
                "Facials and skin care",
                "Manicure & pedicure",
                "Hair treatments and waxing",
                "Booking by phone call",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-ink-700 text-sm">
                  <span className="text-steel-500 shrink-0">—</span>
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
          <p className="mt-4 text-ink-600 text-sm">Indicative prices — confirm when you call.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/services/" className="btn-dark">Services & Prices</Link>
            <Link href="/contact/" className="border border-ink-400 text-ink-800 eyebrow px-6 py-3.5 hover:border-steel-500 hover:text-steel-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
