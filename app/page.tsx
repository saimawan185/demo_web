import Link from "next/link";
import { salon, services, reviews, suggestedHours, formatPrice } from "@/lib/data";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-gold-400" : "text-iris-300"}`}
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
  const featuredServices = services.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center hero-pattern bg-iris-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-gold-500/30 blur-3xl" />
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-iris-600/40 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4 animate-fade-up">
              Gulberg 2, Lahore
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-iris-50 font-semibold leading-tight animate-fade-up animate-delay-1">
              IRIS Salon
              <span className="block text-gradient-gold">& Spa</span>
            </h1>
            <p className="mt-6 text-lg text-iris-200 max-w-md leading-relaxed animate-fade-up animate-delay-2">
              {salon.tagline}. Experience world-class hair, beauty & wellness with complete privacy and care.
            </p>

            <div className="mt-6 flex items-center gap-3 animate-fade-up animate-delay-2">
              <StarRating rating={5} />
              <span className="text-iris-100 font-semibold">{salon.rating}</span>
              <span className="text-iris-400">({salon.reviewCount} Google reviews)</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 animate-fade-up animate-delay-3">
              <a
                href={salon.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-gold text-iris-950 font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Book Appointment
              </a>
              <Link
                href="/services/"
                className="border border-gold-500/50 text-gold-400 font-semibold px-8 py-3.5 rounded-full hover:bg-gold-500/10 transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-up animate-delay-4">
            <div className="aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden border border-gold-500/20 shadow-2xl shadow-black/40">
              <div className="w-full h-full bg-gradient-to-br from-iris-800 via-iris-900 to-iris-950 flex flex-col items-center justify-center p-8 text-center">
                <span className="text-6xl mb-6">✨</span>
                <p className="font-display text-3xl text-gold-400 italic">Beauty Refined</p>
                <p className="text-iris-300 mt-3 text-sm leading-relaxed">
                  Hair · Makeup · Nails · Spa · Waxing
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-xs">
                  {["Hairstyling", "Make-up", "Manicure", "Massage"].map((s) => (
                    <div key={s} className="bg-iris-950/50 rounded-lg py-2 px-3 text-xs text-iris-200 border border-iris-700/50">
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-iris-900 border border-gold-500/30 rounded-xl px-5 py-3 shadow-xl">
              <p className="text-gold-400 text-xs uppercase tracking-wider">Family Privacy</p>
              <p className="text-iris-100 text-sm font-medium">Highly recommended</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-16 md:py-24 bg-iris-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-gold-600 text-sm tracking-[0.2em] uppercase mb-2">Our Services</p>
            <h2 className="font-display text-4xl md:text-5xl text-iris-950 font-semibold">
              Curated Beauty Experiences
            </h2>
            <p className="mt-4 text-iris-600 max-w-xl mx-auto">
              From everyday pampering to bridal glam — every service is delivered with precision and care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="card-shine bg-white rounded-2xl p-6 border border-iris-200 hover:border-gold-400/40 hover:shadow-lg hover:shadow-iris-200/50 transition-all duration-300 group"
              >
                <span className="text-3xl">{service.icon}</span>
                <h3 className="font-display text-xl text-iris-950 mt-4 group-hover:text-iris-700 transition-colors">
                  {service.name}
                </h3>
                <p className="text-iris-600 text-sm mt-2 leading-relaxed">{service.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gold-600 font-semibold">From {formatPrice(service.priceFrom)}</span>
                  <span className="text-iris-400 text-xs">{service.duration}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 text-iris-800 font-semibold hover:text-gold-600 transition-colors"
            >
              See all services & prices
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Hours suggestion */}
      <section className="py-16 md:py-20 bg-iris-950 text-iris-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold-400 text-sm tracking-[0.2em] uppercase mb-2">Suggested Hours</p>
              <h2 className="font-display text-3xl md:text-4xl text-iris-50 font-semibold">
                Visit at Your Convenience
              </h2>
              <p className="mt-4 text-iris-300 leading-relaxed">
                We recommend opening earlier on weekdays for morning appointments and keeping extended hours on weekends when demand is highest.
              </p>
            </div>
            <div className="bg-iris-900/60 rounded-2xl border border-gold-500/20 p-8">
              <h3 className="text-gold-400 text-sm uppercase tracking-wider mb-6">Recommended Schedule</h3>
              <ul className="space-y-4">
                {suggestedHours.map((item) => (
                  <li key={item.day} className="flex justify-between items-center border-b border-iris-800 pb-4 last:border-0 last:pb-0">
                    <span className="font-medium">{item.day}</span>
                    <span className="text-gold-400">{item.hours}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-iris-500">
                Current Google listing: 11:00 AM – 9:30 PM daily. Hours may vary on public holidays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24 bg-iris-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-gold-600 text-sm tracking-[0.2em] uppercase mb-2">Testimonials</p>
            <h2 className="font-display text-4xl md:text-5xl text-iris-950 font-semibold">
              Loved by Our Clients
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review) => (
              <blockquote
                key={review.name}
                className="bg-white rounded-2xl p-6 border border-iris-200 shadow-sm"
              >
                <StarRating rating={review.rating} />
                <p className="mt-4 text-iris-700 text-sm leading-relaxed italic">&ldquo;{review.text}&rdquo;</p>
                <footer className="mt-4 pt-4 border-t border-iris-100">
                  <cite className="not-italic font-semibold text-iris-950">{review.name}</cite>
                  <p className="text-xs text-iris-400 mt-1">{review.time}</p>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={salon.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-iris-600 hover:text-gold-600 transition-colors underline underline-offset-4"
            >
              Read all {salon.reviewCount} reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-iris-800 to-iris-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-iris-50 font-semibold">
            Ready to Feel Beautiful?
          </h2>
          <p className="mt-4 text-iris-200">
            Call us or message on WhatsApp to book your appointment at Gulberg&apos;s favourite salon.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${salon.phone}`}
              className="bg-white text-iris-950 font-semibold px-8 py-3.5 rounded-full hover:bg-iris-50 transition-colors"
            >
              {salon.phoneDisplay}
            </a>
            <Link
              href="/contact/"
              className="border border-gold-400 text-gold-400 font-semibold px-8 py-3.5 rounded-full hover:bg-gold-400/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
