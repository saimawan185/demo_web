import type { Metadata } from "next";
import Link from "next/link";
import { salon } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Allure Salon & Spa — bridal, hair and spa studio in F-10/2 Islamabad.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink-950 hero-glow py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-champagne-400 text-sm tracking-[0.2em] uppercase mb-4">Our Story</p>
          <h1 className="font-display text-4xl md:text-6xl text-ink-50 font-semibold">About Allure</h1>
          <p className="mt-6 text-ink-300 max-w-2xl mx-auto text-lg leading-relaxed">
            A ladies beauty destination in Tariq Market, F-10 — known for bridal glam, hair and spa care.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
          <div className="space-y-4 text-ink-700 leading-relaxed">
            <h2 className="font-display text-3xl text-ink-950 font-semibold mb-6">Who we are</h2>
            <p>
              <strong className="text-ink-950">{salon.name}</strong> is a full-service salon and spa in the heart of Islamabad&apos;s F-10 sector. From everyday hair and nails to complete Mehndi, Barat and Walima bridal packages, the team focuses on polished results and a calm, welcoming experience.
            </p>
            <p>
              With a strong following on Facebook and Instagram, Allure has become a go-to for clients who want reliable bridal and party looks without the stress. Services also include spa facials, massage and waxing.
            </p>
            <p>
              Alongside the flagship F-10/2 studio, Allure also serves clients from{" "}
              <strong className="text-ink-950">Bahria Town Phase 6</strong> for bridal and spa bookings.
            </p>
          </div>

          <div className="bg-ink-100 p-8 border border-ink-200">
            <h3 className="font-display text-2xl text-ink-950 mb-6">Why clients choose Allure</h3>
            <ul className="space-y-4">
              {[
                "Bridal packages for Mehndi, Barat & Walima",
                "Experienced makeup and hair stylists",
                "Spa, facial and wellness treatments",
                "Convenient Tariq Market, F-10 location",
                "Active social community with 100K+ Facebook followers",
                "Open daily for appointments and walk-ins",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-ink-700">
                  <span className="text-rose-500 shrink-0">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-ink-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl text-ink-950 font-semibold">See our services</h2>
          <p className="mt-4 text-ink-600">Explore indicative prices and book your next visit.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/services/"
              className="gradient-rose text-white font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Services & Prices
            </Link>
            <Link
              href="/contact/"
              className="border border-ink-300 text-ink-800 font-medium px-8 py-3.5 rounded-full hover:bg-ink-100 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
