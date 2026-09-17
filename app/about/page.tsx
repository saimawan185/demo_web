import type { Metadata } from "next";
import Link from "next/link";
import { salon } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Abeera's Beauty Salon — ladies-only salon & spa in G-13, Islamabad.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink-950 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="eyebrow text-amber-400 mb-4 animate-rise">Our Story</p>
          <h1 className="font-display text-4xl md:text-6xl text-ink-50 animate-rise delay-1">About Abeera&apos;s</h1>
          <div className="accent-rule w-16 mx-auto mt-6 animate-rise delay-2" />
          <p className="mt-6 text-ink-300 max-w-2xl mx-auto leading-relaxed animate-rise delay-2">
            A ladies-only beauty salon, spa and training centre in G-13/1.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
          <div className="space-y-4 text-ink-700 leading-relaxed" data-reveal="left">
            <h2 className="font-display text-3xl text-ink-950 mb-6">Who we are</h2>
            <p>
              <strong className="text-ink-950">{salon.name}</strong> is located at Shakeel Arcade, Street 85, G-13/1, Islamabad. The studio is ladies-only and focuses on salon, spa and training services.
            </p>
            <p>
              Clients rate the experience highly online (~{salon.rating}★ from {salon.reviewCount}+ reviews), but the business did not have a dedicated website — only listings and a mobile number.
            </p>
            <p>
              Book on WhatsApp or call <strong className="text-ink-950">{salon.phoneDisplay}</strong>.
            </p>
          </div>
          <div className="bg-white p-8 border border-ink-200" data-reveal="right">
            <h3 className="font-display text-2xl text-ink-950 mb-6">What we offer</h3>
            <ul className="space-y-4">
              {[
                "Bridal & party makeup",
                "Hairstyling and treatments",
                "Spa facials and massage",
                "Manicure & pedicure",
                "Waxing and skin care",
                "Ladies-only private setting",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-ink-700 text-sm">
                  <span className="text-amber-500 shrink-0">—</span>
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
            <a href={salon.social.whatsapp} target="_blank" rel="noopener noreferrer" className="border border-ink-400 text-ink-800 eyebrow px-6 py-3.5 hover:border-amber-500 hover:text-amber-600 transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
