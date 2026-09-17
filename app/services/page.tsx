import type { Metadata } from "next";
import { services, packages, formatPrice, salon, asset } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services & Prices",
  description: "Diana's Glamour Salon services and indicative prices in G-9 Markaz, Islamabad.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset("/images/hair.jpg")} alt="" className="absolute inset-0 w-full h-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-ink-950/80" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="eyebrow text-rose-400 mb-4 animate-rise">The Menu</p>
          <h1 className="font-display text-4xl md:text-6xl text-ink-50 animate-rise delay-1">Services & Prices</h1>
          <div className="accent-rule w-16 mx-auto mt-6 animate-rise delay-2" />
          <p className="mt-6 text-ink-300 max-w-2xl mx-auto text-sm md:text-base animate-rise delay-2">
            Demo pricing for planning — confirm final rates when you book.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <article key={service.id} className="group" data-reveal data-reveal-delay={String((i % 3) + 1)}>
                <div className="service-frame relative aspect-[5/4] overflow-hidden bg-ink-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={service.image} alt={service.name} className="img-zoom absolute inset-0 w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="pt-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="font-display text-xl md:text-2xl text-ink-950">{service.name}</h2>
                      <p className="text-[11px] tracking-[0.16em] uppercase text-ink-400 mt-1">{service.duration}</p>
                    </div>
                    <p className="text-rose-600 font-semibold text-sm whitespace-nowrap tracking-wide">
                      {formatPrice(service.priceFrom)}+
                    </p>
                  </div>
                  <p className="mt-2 text-ink-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 border border-ink-200 bg-white p-8" data-reveal>
            <h3 className="font-display text-2xl text-ink-950 mb-6">Signature packages</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {packages.map((pkg, i) => (
                <div key={pkg.name} className="border border-ink-200 p-5 hover:border-rose-400/60 transition-colors" data-reveal data-reveal-delay={String(i + 1)}>
                  <h4 className="font-display text-lg text-ink-950">{pkg.name}</h4>
                  <p className="text-sm text-ink-500 mt-1">{pkg.desc}</p>
                  <p className="text-rose-600 font-semibold mt-3 text-sm tracking-wide">{formatPrice(pkg.price)}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-xs text-ink-500 pt-8 tracking-wide" data-reveal>
            * Dummy prices for website demo. Confirm current rates when you book.
          </p>
          <div className="text-center pt-6" data-reveal>
            <a href={salon.social.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-dark">
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
