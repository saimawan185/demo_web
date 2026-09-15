import type { Metadata } from "next";
import Image from "next/image";
import { services, packages, formatPrice, salon } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services & Prices",
  description: "Allure Salon & Spa service menu with indicative PKR pricing — bridal, hair, spa and nails in Islamabad.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/hair.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-ink-950/75" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-champagne-400 text-sm tracking-[0.2em] uppercase mb-4">Menu</p>
          <h1 className="font-display text-4xl md:text-6xl text-ink-50 font-semibold">Services & Prices</h1>
          <p className="mt-6 text-ink-200 max-w-2xl mx-auto">
            Demo pricing for planning — final rates depend on look complexity, hair length and products used.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <article key={service.id} className="group">
                <div className="relative aspect-[5/4] overflow-hidden bg-ink-200">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="pt-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="font-display text-xl md:text-2xl text-ink-950">{service.name}</h2>
                      <p className="text-xs text-ink-400 mt-1">{service.duration}</p>
                    </div>
                    <p className="text-rose-600 font-semibold whitespace-nowrap">
                      {formatPrice(service.priceFrom)}+
                    </p>
                  </div>
                  <p className="mt-2 text-ink-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 bg-ink-100 p-8 border border-ink-200">
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

          <p className="text-center text-sm text-ink-500 pt-8">
            * Dummy prices for website demo. Confirm current rates when you book.
          </p>

          <div className="text-center pt-6">
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
