import Link from "next/link";
import { salon, services, reviews, hours, formatPrice } from "@/lib/data";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-champagne-400" : "text-ink-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomePage() {
  const featured = services.slice(0, 6);

  return (
    <>
      <section className="relative min-h-[88vh] flex items-center bg-ink-950 hero-glow overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/3 -right-16 w-[28rem] h-[28rem] rounded-full bg-rose-500/25 blur-3xl" />
          <div className="absolute bottom-10 -left-10 w-72 h-72 rounded-full bg-champagne-500/20 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <p className="text-champagne-400 text-sm tracking-[0.32em] uppercase mb-5 animate-rise">
            F-10 · Islamabad
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-ink-50 font-semibold leading-[1.05] max-w-3xl animate-rise delay-1">
            Allure
            <span className="block text-gradient-rose italic font-medium">Salon & Spa</span>
          </h1>
          <p className="mt-6 text-lg text-ink-300 max-w-xl leading-relaxed animate-rise delay-2">
            {salon.tagline}. Bridal glam, hair artistry and spa care — trusted by thousands across Islamabad.
          </p>

          <div className="mt-6 flex items-center gap-3 animate-rise delay-2">
            <Stars rating={5} />
            <span className="text-ink-100 font-medium">{salon.rating}</span>
            <span className="text-ink-400 text-sm">client favourite · 100K+ on Facebook</span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 animate-rise delay-3">
            <a
              href={salon.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-rose text-white font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Book Appointment
            </a>
            <Link
              href="/services/"
              className="border border-champagne-400/40 text-champagne-300 font-medium px-8 py-3.5 rounded-full hover:bg-white/5 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-rose-600 text-sm tracking-[0.2em] uppercase mb-2">Services</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink-950 font-semibold">
              Crafted for every occasion
            </h2>
            <p className="mt-4 text-ink-600">
              From everyday polish to Barat-ready glam — one salon for hair, makeup, nails and spa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 border border-ink-100 hover:border-rose-300/50 transition-colors"
              >
                <h3 className="font-display text-xl text-ink-950">{service.name}</h3>
                <p className="text-ink-600 text-sm mt-2 leading-relaxed">{service.description}</p>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="text-rose-600 font-medium">From {formatPrice(service.priceFrom)}</span>
                  <span className="text-ink-400">{service.duration}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/services/" className="text-ink-800 font-medium hover:text-rose-600 transition-colors">
              Full menu & packages →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-ink-950 text-ink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-champagne-400 text-sm tracking-[0.2em] uppercase mb-2">Visit Us</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink-50 font-semibold">
              Open every day in Tariq Market
            </h2>
            <p className="mt-4 text-ink-300 leading-relaxed">
              Walk in or book ahead for bridal trials, spa sessions and event styling at our F-10/2 studio.
            </p>
          </div>
          <div className="border border-white/10 p-8 bg-white/5">
            {hours.map((item) => (
              <div key={item.day} className="flex justify-between gap-4 border-b border-white/10 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
                <span>{item.day}</span>
                <span className="text-champagne-400">{item.hours}</span>
              </div>
            ))}
            <p className="mt-6 text-sm text-ink-400">{salon.address.full}</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ink-100/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-rose-600 text-sm tracking-[0.2em] uppercase mb-2">Testimonials</p>
            <h2 className="font-display text-4xl text-ink-950 font-semibold">Loved by clients</h2>
            <p className="mt-3 text-sm text-ink-500">Sample testimonials for this demo website.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <blockquote key={review.name} className="bg-white p-6 border border-ink-200">
                <Stars rating={review.rating} />
                <p className="mt-4 text-ink-700 text-sm leading-relaxed italic">&ldquo;{review.text}&rdquo;</p>
                <footer className="mt-4 pt-4 border-t border-ink-100">
                  <cite className="not-italic font-medium text-ink-950">{review.name}</cite>
                  <p className="text-xs text-ink-400 mt-1">{review.time}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-rose-600 to-ink-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">Ready for your glow-up?</h2>
          <p className="mt-4 text-white/85">
            Call or WhatsApp Allure to reserve bridal, party or spa appointments in F-10.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${salon.phone}`}
              className="bg-white text-ink-950 font-medium px-8 py-3.5 rounded-full hover:bg-ink-50 transition-colors"
            >
              {salon.phoneDisplay}
            </a>
            <Link
              href="/contact/"
              className="border border-white/50 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
