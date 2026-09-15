import Link from "next/link";
import { salon, services, reviews, hours, formatPrice, heroImage, asset } from "@/lib/data";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? "text-gold-400" : "text-ink-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const highlights = [
  { label: "Bridal & Party", value: "Glam Looks" },
  { label: "Open Daily", value: "10:30 – 7:45" },
  { label: "Location", value: "F-10 Tariq Market" },
  { label: "Community", value: "100K+ Followers" },
];

export default function HomePage() {
  const featured = services.slice(0, 6);

  return (
    <>
      {/* Hero + highlights as one composition — no gap */}
      <section className="relative min-h-[88svh] md:min-h-[92vh] flex flex-col overflow-hidden bg-ink-950">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImage}
          alt="Premium beauty styling at Allure Salon & Spa"
          className="absolute inset-0 w-full h-full object-cover object-[center_25%] animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-ink-950/50" />

        <div className="relative flex-1 flex items-end md:items-center">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-10 md:py-20">
            <p className="font-display text-[3.4rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.92] text-gold-200 tracking-[0.02em] animate-rise">
              Allure
            </p>
            <div className="mt-3 flex items-center gap-3 animate-rise delay-1">
              <span className="h-px w-8 bg-gold-400" />
              <p className="eyebrow text-gold-400">Salon & Spa · F-10 Islamabad</p>
            </div>
            <h1 className="mt-6 font-display text-2xl sm:text-3xl md:text-4xl text-ink-50 font-medium leading-snug max-w-lg animate-rise delay-2">
              An elite beauty atelier for bridal days and everyday refinement
            </h1>
            <p className="mt-4 text-sm md:text-base text-ink-300 max-w-md leading-relaxed animate-rise delay-2">
              Hair, makeup and spa — composed with precision in Tariq Market.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-rise delay-3">
              <a
                href={salon.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Appointment
              </a>
              <Link href="/services/" className="btn-ghost">
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* Highlights attached to hero bottom */}
        <div className="relative border-t border-gold-400/20 bg-ink-950/70 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 md:py-6 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-0 md:divide-x md:divide-white/10">
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="md:px-6 first:md:pl-0 last:md:pr-0 text-left animate-rise"
                style={{ animationDelay: `${0.35 + i * 0.08}s` }}
              >
                <p className="font-display text-lg md:text-xl text-gold-300 leading-tight">{item.value}</p>
                <p className="mt-1 eyebrow text-ink-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-ink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14" data-reveal>
            <div className="max-w-xl">
              <p className="eyebrow text-gold-600 mb-3">The Collection</p>
              <h2 className="font-display text-4xl md:text-5xl text-ink-950 font-medium leading-tight">
                Services composed with care
              </h2>
            </div>
            <p className="text-ink-600 text-sm md:text-base max-w-sm leading-relaxed">
              From Barat-ready glam to quiet spa rituals — every detail finished with intention.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
            {featured.map((service, i) => (
              <Link
                key={service.id}
                href="/services/"
                className="group block"
                data-reveal
                data-reveal-delay={String((i % 3) + 1)}
              >
                <div className="service-frame relative aspect-[4/5] overflow-hidden bg-ink-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.name}
                    className="img-zoom absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/15 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h3 className="font-display text-2xl text-ink-50">{service.name}</h3>
                    <p className="mt-1 text-xs tracking-[0.16em] uppercase text-gold-300">
                      From {formatPrice(service.priceFrom)}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-ink-600 text-sm leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12" data-reveal>
            <Link href="/services/" className="eyebrow text-ink-800 hover:text-gold-600 transition-colors inline-flex items-center gap-3 group">
              Full menu & packages
              <span className="h-px w-8 bg-ink-400 group-hover:w-12 group-hover:bg-gold-500 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 md:py-28 bg-ink-950 text-ink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden" data-reveal="left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/spa.jpg")}
              alt="Relaxing spa experience at Allure"
              className="img-zoom absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-4 border border-gold-400/30 pointer-events-none" />
          </div>
          <div data-reveal="right">
            <p className="eyebrow text-gold-400 mb-4">The Allure Standard</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink-50 font-medium leading-tight">
              Quiet luxury for bridal days and everyday glow
            </h2>
            <div className="gold-rule w-16 my-6" />
            <p className="text-ink-300 leading-relaxed">
              Whether you are preparing for Mehndi and Barat or booking a facial and manicure, our F-10 atelier focuses on clean finishes, attentive service and looks that last through the moment.
            </p>
            <p className="mt-4 text-ink-400 leading-relaxed text-sm">
              Visit us in Tariq Market, or enquire about bridal and spa appointments for Bahria Town Phase 6.
            </p>
            <Link href="/about/" className="btn-primary mt-8">
              Discover Allure
            </Link>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="py-16 md:py-20 bg-ink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div data-reveal="left">
            <p className="eyebrow text-gold-600 mb-3">Visit</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink-950 font-medium">
              Open every day in Tariq Market
            </h2>
            <p className="mt-4 text-ink-600 leading-relaxed text-sm md:text-base">
              Walk in or book ahead for bridal trials, spa sessions and event styling at our F-10/2 studio.
            </p>
          </div>
          <div className="border border-ink-300/80 bg-ink-50 p-7 md:p-8" data-reveal="right">
            {hours.map((item) => (
              <div key={item.day} className="flex justify-between gap-4 border-b border-ink-200 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
                <span className="text-ink-800 text-sm">{item.day}</span>
                <span className="text-gold-600 text-sm tracking-wide">{item.hours}</span>
              </div>
            ))}
            <p className="mt-5 text-xs text-ink-500 leading-relaxed">{salon.address.full}</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-24 bg-ink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12" data-reveal>
            <p className="eyebrow text-gold-600 mb-3">Client Notes</p>
            <h2 className="font-display text-4xl text-ink-950 font-medium">Voices of Allure</h2>
            <div className="gold-rule w-20 mx-auto mt-5" />
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((review, i) => (
              <blockquote
                key={review.name}
                className="border border-ink-200 bg-white p-7"
                data-reveal
                data-reveal-delay={String(i + 1)}
              >
                <Stars rating={review.rating} />
                <p className="mt-5 font-display text-lg text-ink-800 leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <footer className="mt-6 pt-4 border-t border-ink-100">
                  <cite className="not-italic text-sm tracking-wide text-ink-950">{review.name}</cite>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-ink-400 mt-1">{review.time}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-ink-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url(${asset("/images/bridal.jpg")})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-ink-950/85" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center" data-reveal="scale">
          <p className="eyebrow text-gold-400 mb-4">Reserve Your Moment</p>
          <h2 className="font-display text-3xl md:text-5xl text-ink-50 font-medium">
            Ready for an elevated appointment?
          </h2>
          <p className="mt-4 text-ink-300 text-sm md:text-base">
            Call or WhatsApp Allure to book bridal, party or spa services in F-10.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href={`tel:${salon.phone}`} className="btn-primary">
              {salon.phoneDisplay}
            </a>
            <Link href="/contact/" className="btn-ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
