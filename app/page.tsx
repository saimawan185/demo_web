import Link from "next/link";
import { salon, services, reviews, hours, formatPrice, heroImage, asset } from "@/lib/data";
import { socialPlatforms, SocialIcon } from "@/components/SocialLinks";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i < rating ? "text-amber-400" : "text-ink-300"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const highlights = [
  { label: "Location", value: "F-11 Markaz" },
  { label: "Google", value: `${salon.rating}★` },
  { label: "Reviews", value: `${salon.reviewCount}+` },
  { label: "Booking", value: "WhatsApp" },
];

export default function HomePage() {
  const featured = services.slice(0, 6);

  return (
    <>
      <section className="relative min-h-[88svh] md:min-h-[92vh] flex flex-col overflow-hidden bg-ink-950">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={heroImage} alt="Ayesha's Salon Official" className="absolute inset-0 w-full h-full object-cover object-[center_30%] animate-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/78 to-ink-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/45" />

        <div className="relative flex-1 flex items-end md:items-center">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-10 md:pt-32 md:pb-16">
            <p className="font-display text-[3.2rem] sm:text-6xl md:text-7xl leading-[0.95] text-amber-300 italic animate-rise">
              Ayesha&apos;s
            </p>
            <div className="mt-3 flex items-center gap-3 animate-rise delay-1">
              <span className="h-px w-8 bg-amber-400" />
              <p className="eyebrow text-amber-400">Salon Official · F-11 Markaz Islamabad</p>
            </div>
            <h1 className="mt-6 font-display text-2xl sm:text-3xl md:text-4xl text-ink-50 font-normal leading-snug max-w-xl animate-rise delay-2">
              Bridal & party glam in the heart of F-11
            </h1>
            <p className="mt-4 text-sm md:text-base text-ink-300 max-w-md leading-relaxed animate-rise delay-2">
              Women-owned beauty salon — book on WhatsApp at {salon.phoneDisplay}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-rise delay-3">
              <a href={salon.social.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book on WhatsApp
              </a>
              <Link href="/services/" className="btn-ghost">View Services</Link>
            </div>
          </div>
        </div>

        <div className="relative border-t border-amber-400/20 bg-ink-950/75 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 md:py-6 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-0 md:divide-x md:divide-white/10">
            {highlights.map((item, i) => (
              <div key={item.label} className="md:px-6 first:md:pl-0 last:md:pr-0 animate-rise" style={{ animationDelay: `${0.35 + i * 0.08}s` }}>
                <p className="font-display text-lg md:text-xl text-amber-300 leading-tight">{item.value}</p>
                <p className="mt-1 eyebrow text-ink-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14" data-reveal>
            <div className="max-w-xl">
              <p className="eyebrow text-amber-600 mb-3">Services</p>
              <h2 className="font-display text-4xl md:text-5xl text-ink-950 leading-tight">Makeup, hair & spa care</h2>
            </div>
            <p className="text-ink-600 text-sm md:text-base max-w-sm leading-relaxed">
              From bridal and Shalima looks to everyday beauty — hair, makeup, nails and wellness.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
            {featured.map((service, i) => (
              <Link key={service.id} href="/services/" className="group block" data-reveal data-reveal-delay={String((i % 3) + 1)}>
                <div className="service-frame relative aspect-[4/5] overflow-hidden bg-ink-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={service.image} alt={service.name} className="img-zoom absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/15 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h3 className="font-display text-2xl text-ink-50">{service.name}</h3>
                    <p className="mt-1 text-xs tracking-[0.16em] uppercase text-amber-300">From {formatPrice(service.priceFrom)}</p>
                  </div>
                </div>
                <p className="mt-3 text-ink-600 text-sm leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12" data-reveal>
            <Link href="/services/" className="eyebrow text-ink-800 hover:text-amber-600 transition-colors inline-flex items-center gap-3 group">
              Full menu & packages
              <span className="h-px w-8 bg-ink-400 group-hover:w-12 group-hover:bg-amber-500 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ink-950 text-ink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden" data-reveal="left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/images/bridal.jpg")} alt="Bridal glam at Ayesha's" className="img-zoom absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-4 border border-amber-400/30 pointer-events-none" />
          </div>
          <div data-reveal="right">
            <p className="eyebrow text-amber-400 mb-4">Why Ayesha&apos;s</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink-50 leading-tight">
              Women-owned salon in F-11 Markaz
            </h2>
            <div className="accent-rule w-16 my-6" />
            <p className="text-ink-300 leading-relaxed">
              Ayesha&apos;s Salon Official sits near Sindh Bank in F-11 Markaz — known for bridal, Walima and party makeup. Clients rate it {salon.rating}★ on Google across {salon.reviewCount} reviews, yet the salon had no dedicated website until now (only Instagram & socials).
            </p>
            <p className="mt-4 text-ink-400 leading-relaxed text-sm">
              Message on WhatsApp <strong className="text-amber-300">{salon.phoneDisplay}</strong> to book.
            </p>
            <Link href="/about/" className="btn-primary mt-8">About Ayesha&apos;s</Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-ink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10" data-reveal>
            <p className="eyebrow text-amber-600 mb-3">Connect</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink-950">All social platforms</h2>
            <div className="accent-rule w-20 mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4" data-reveal>
            {socialPlatforms.map((platform) => (
              <a
                key={platform.key}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform.name}
                className="group border border-ink-300/80 bg-ink-50 p-5 md:p-6 text-center hover:border-amber-500 transition-colors"
              >
                <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink-200 text-ink-800 group-hover:border-amber-500 group-hover:text-amber-600 transition-colors">
                  <SocialIcon name={platform.key} className="w-5 h-5" />
                </span>
                <p className="mt-4 font-display text-lg text-ink-950 group-hover:text-amber-600 transition-colors">{platform.name}</p>
                <p className="mt-2 text-[11px] tracking-wide text-ink-500 leading-snug">{platform.hint}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-ink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div data-reveal="left">
            <p className="eyebrow text-amber-600 mb-3">Visit</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink-950">Find us in F-11 Markaz</h2>
            <p className="mt-4 text-ink-600 leading-relaxed text-sm md:text-base">
              Near Sindh Bank on Meher Ali Road — book ahead for bridal trials, party glam and everyday beauty.
            </p>
          </div>
          <div className="border border-ink-300/80 bg-white p-7 md:p-8" data-reveal="right">
            {hours.map((item) => (
              <div key={item.day} className="flex justify-between gap-4 border-b border-ink-200 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
                <span className="text-ink-800 text-sm">{item.day}</span>
                <span className="text-amber-600 text-sm tracking-wide">{item.hours}</span>
              </div>
            ))}
            <p className="mt-5 text-xs text-ink-500 leading-relaxed">{salon.address.full}</p>
            <a href={salon.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs text-amber-600 hover:underline">
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-ink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12" data-reveal>
            <p className="eyebrow text-amber-600 mb-3">Google Reviews</p>
            <h2 className="font-display text-4xl text-ink-950">{salon.rating}★ from {salon.reviewCount} clients</h2>
            <div className="accent-rule w-20 mx-auto mt-5" />
            <p className="mt-3 text-xs text-ink-500">Selected from public Google Maps reviews for Ayesha&apos;s Salon Official.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((review, i) => (
              <blockquote key={review.name} className="border border-ink-200 bg-white p-7" data-reveal data-reveal-delay={String(i + 1)}>
                <div className="flex items-center justify-between gap-3">
                  <Stars rating={review.rating} />
                  <span className="text-[10px] tracking-[0.16em] uppercase text-ink-400">{review.source}</span>
                </div>
                <p className="mt-5 font-display text-lg text-ink-800 leading-relaxed italic">&ldquo;{review.text}&rdquo;</p>
                <footer className="mt-6 pt-4 border-t border-ink-100">
                  <cite className="not-italic text-sm tracking-wide text-ink-950">{review.name}</cite>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-ink-400 mt-1">{review.time}</p>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-10 text-center" data-reveal>
            <a href={salon.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="eyebrow text-ink-800 hover:text-amber-600 transition-colors inline-flex items-center gap-3 group">
              Read all Google reviews
              <span className="h-px w-8 bg-ink-400 group-hover:w-12 group-hover:bg-amber-500 transition-all duration-300" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-ink-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${asset("/images/party.jpg")})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-ink-950/85" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center" data-reveal="scale">
          <p className="eyebrow text-amber-400 mb-4">Book Ayesha&apos;s</p>
          <h2 className="font-display text-3xl md:text-5xl text-ink-50">Ready for your next appointment?</h2>
          <p className="mt-4 text-ink-300 text-sm md:text-base">
            WhatsApp Ayesha&apos;s Salon Official in F-11 to reserve your time.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href={salon.social.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
              WhatsApp {salon.phoneDisplay}
            </a>
            <Link href="/contact/" className="btn-ghost">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
