import type { Metadata } from "next";
import Link from "next/link";
import { services, formatPrice, salon } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services & Prices",
  description: "Explore IRIS Salon & Spa services and indicative prices — hairstyling, makeup, manicure, pedicure, massage, waxing & more.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-iris-950 py-16 md:py-24 hero-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold-400 text-sm tracking-[0.2em] uppercase mb-4">Price List</p>
          <h1 className="font-display text-4xl md:text-6xl text-iris-50 font-semibold">Services & Prices</h1>
          <p className="mt-6 text-iris-300 max-w-2xl mx-auto">
            Indicative pricing for our most popular treatments. Final prices may vary based on hair length, product choice, and complexity.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid gap-4">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 md:p-8 border border-iris-200 hover:border-gold-400/30 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
              >
                <div className="flex items-center gap-4 md:w-64 shrink-0">
                  <span className="text-3xl">{service.icon}</span>
                  <div>
                    <h2 className="font-display text-xl md:text-2xl text-iris-950">{service.name}</h2>
                    <p className="text-xs text-iris-400 mt-0.5">{service.duration}</p>
                  </div>
                </div>
                <p className="text-iris-600 text-sm md:text-base flex-1 leading-relaxed">
                  {service.description}
                </p>
                <div className="md:text-right shrink-0">
                  <p className="text-xs text-iris-400 uppercase tracking-wider">Starting from</p>
                  <p className="text-2xl font-semibold text-gold-600">{formatPrice(service.priceFrom)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-iris-100 rounded-2xl p-8 border border-iris-200">
            <h3 className="font-display text-xl text-iris-950 mb-4">Package Deals (Demo Pricing)</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Mani-Pedi Combo", price: 2400, desc: "Classic manicure + pedicure" },
                { name: "Bridal Trial", price: 12000, desc: "Makeup trial + hairstyling" },
                { name: "Relax & Refresh", price: 5500, desc: "60-min massage + blowout" },
              ].map((pkg) => (
                <div key={pkg.name} className="bg-white rounded-xl p-5 border border-iris-200">
                  <h4 className="font-semibold text-iris-950">{pkg.name}</h4>
                  <p className="text-sm text-iris-500 mt-1">{pkg.desc}</p>
                  <p className="text-gold-600 font-semibold mt-3">{formatPrice(pkg.price)}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-iris-500">
            * All prices are dummy/demo values for website purposes. Please contact us for current rates.
          </p>

          <div className="mt-10 text-center">
            <a
              href={salon.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-gold text-iris-950 font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity inline-block"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
