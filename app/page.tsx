import Link from "next/link";
import { salon, services, reviews, hours, formatPrice, heroImage, asset } from "@/lib/data";

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
      <section className="relative min-h-[100svh] md:min-h-[110vh] flex items-end md:items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImage}
          alt="Premium beauty styling at Allure Salon & Spa"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/92 via-ink-950/72 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-ink-950/45" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-rise delay-4">
          <span className="text-[10px] tracking-[0.25em] uppercase text-ink-300">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-champagne-400 to-transparent animate-float" />
        </div>

        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-28 md:py-36 lg:py-40">
          <p className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-rose-300 tracking-wide animate-rise">
            Allure
          </p>
          <p className="mt-2 text-xs sm:text-sm tracking-[0.35em] uppercase text-champagne-400 animate-rise delay-1">
            Salon & Spa · F-10 Islamabad
          </p>
          <h1 className="mt-8 font-display text-3xl sm:text-4xl md:text-5xl text-ink-50 font-medium leading-tight max-w-xl animate-rise delay-2">
            Beauty refined for every occasion
          </h1>
          <p className="mt-5 text-base md:text-lg text-ink-200 max-w-lg leading-relaxed animate-rise delay-2">
            Bridal glam, hair artistry and spa care in the heart of Tariq Market — trusted by thousands across Islamabad.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-rise delay-3">
            <a
              href={salon.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lift btn-shimmer gradient-rose text-white font-medium px-8 py-3.5 rounded-full"
            >
              Book Appointment
            </a>
            <Link
              href="/services/"
              className="border border-white/40 text-ink-50 font-medium px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-10 md:py-14 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Bridal & Party", value: "Glam Looks" },
            { label: "Open Daily", value: "10:30 – 7:45" },
            { label: "Location", value: "F-10 Tariq Market" },
            { label: "Community", value: "100K+ Followers" },
          ].map((item, i) => (
            <div key={item.label} data-reveal data-reveal-delay={String(i + 1)}>
              <p className="font-display text-xl md:text-2xl text-rose-300">{item.value}</p>
              <p className="mt-1 text-xs tracking-[0.2em] uppercase text-ink-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-14" data-reveal>
            <p className="text-rose-600 text-sm tracking-[0.2em] uppercase mb-2">Services</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink-950 font-semibold">
              Crafted for every occasion
            </h2>
            <p className="mt-4 text-ink-600">
              From everyday polish to Barat-ready glam — hair, makeup, nails and spa under one roof.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {featured.map((service, i) => (
              <Link
                key={service.id}
                href="/services/"
                className="group block"
                data-reveal
                data-reveal-delay={String((i % 3) + 1)}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-ink-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.name}
                    className="img-zoom absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-display text-2xl text-ink-50">{service.name}</h3>
                    <p className="mt-1 text-sm text-champagne-300">
                      From {formatPrice(service.priceFrom)}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-ink-600 text-sm leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12" data-reveal>
            <Link href="/services/" className="text-ink-800 font-medium hover:text-rose-600 transition-colors inline-flex items-center gap-2 group">
              Full menu & packages
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ink-100/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] md:aspect-[5/4] overflow-hidden bg-ink-200 group" data-reveal="left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/spa.jpg")}
              alt="Relaxing spa experience at Allure"
              className="img-zoom absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div data-reveal="right">
            <p className="text-rose-600 text-sm tracking-[0.2em] uppercase mb-2">The Allure Experience</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink-950 font-semibold leading-tight">
              A calm studio for bridal days and everyday glow
            </h2>
            <p className="mt-5 text-ink-600 leading-relaxed">
              Whether you are preparing for Mehndi and Barat or booking a facial and manicure, our F-10 team focuses on clean finishes, attentive service and looks that last through the moment.
            </p>
            <p className="mt-4 text-ink-600 leading-relaxed">
              Visit us in Tariq Market or ask about bridal and spa appointments for Bahria Town Phase 6 clients.
            </p>
            <Link
              href="/about/"
              className="btn-lift inline-block mt-8 gradient-rose text-white font-medium px-7 py-3 rounded-full"
            >
              About Allure
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-ink-950 text-ink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div data-reveal="left">
            <p className="text-champagne-400 text-sm tracking-[0.2em] uppercase mb-2">Visit Us</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink-50 font-semibold">
              Open every day in Tariq Market
            </h2>
            <p className="mt-4 text-ink-300 leading-relaxed">
              Walk in or book ahead for bridal trials, spa sessions and event styling at our F-10/2 studio.
            </p>
          </div>
          <div className="border border-white/10 p-8 bg-white/5" data-reveal="right">
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

      <section className="py-16 md:py-24 bg-ink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12" data-reveal>
            <p className="text-rose-600 text-sm tracking-[0.2em] uppercase mb-2">Testimonials</p>
            <h2 className="font-display text-4xl text-ink-950 font-semibold">Loved by clients</h2>
            <p className="mt-3 text-sm text-ink-500">Sample testimonials for this demo website.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <blockquote
                key={review.name}
                className="card-float bg-white p-6 border border-ink-200"
                data-reveal
                data-reveal-delay={String(i + 1)}
              >
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

      <section className="py-16 md:py-20 bg-gradient-to-br from-rose-600 via-rose-600 to-ink-900 animate-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center text-white" data-reveal="scale">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">Ready for your glow-up?</h2>
          <p className="mt-4 text-white/85">
            Call or WhatsApp Allure to reserve bridal, party or spa appointments in F-10.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${salon.phone}`}
              className="btn-lift btn-shimmer bg-white text-ink-950 font-medium px-8 py-3.5 rounded-full hover:bg-ink-50"
            >
              {salon.phoneDisplay}
            </a>
            <Link
              href="/contact/"
              className="border border-white/50 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
