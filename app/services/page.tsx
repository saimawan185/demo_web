import type { Metadata } from "next";
import { services, packages, formatPrice, salon } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services & Prices",
  description: "Allure Salon & Spa service menu with indicative PKR pricing — bridal, hair, spa and nails in Islamabad.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink-950 hero-glow py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-champagne-400 text-sm tracking-[0.2em] uppercase mb-4">Menu</p>
          <h1 className="font-display text-4xl md:text-6xl text-ink-50 font-semibold">Services & Prices</h1>
          <p className="mt-6 text-ink-300 max-w-2xl mx-auto">
            Demo pricing for planning — final rates depend on look complexity, hair length and products used.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 md:p-8 border border-ink-200 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
            >
              <div className="md:w-56 shrink-0">
                <h2 className="font-display text-xl md:text-2xl text-ink-950">{service.name}</h2>
                <p className="text-xs text-ink-400 mt-1">{service.duration}</p>
              </div>
              <p className="text-ink-600 text-sm flex-1 leading-relaxed">{service.description}</p>
              <div className="md:text-right shrink-0">
                <p className="text-xs text-ink-400 uppercase tracking-wider">From</p>
                <p className="text-2xl font-semibold text-rose-600">{formatPrice(service.priceFrom)}</p>
              </div>
            </div>
          ))}

          <div className="mt-12 bg-ink-100 p-8 border border-ink-200">
            <h3 className="font-display text-xl text-ink-950 mb-6">Popular packages (demo)</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {packages.map((pkg) => (
                <div key={pkg.name} className="bg-white p-5 border border-ink-200">
                  <h4 className="font-medium text-ink-950">{pkg.name}</h4>
                  <p className="text-sm text-ink-500 mt-1">{pkg.desc}</p>
                  <p className="text-rose-600 font-semibold mt-3">{formatPrice(pkg.price)}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-ink-500 pt-6">
            * Dummy prices for website demo. Confirm current rates when you book.
          </p>

          <div className="text-center pt-4">
            <a
              href={salon.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block gradient-rose text-white font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
