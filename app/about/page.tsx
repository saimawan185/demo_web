import type { Metadata } from "next";
import Link from "next/link";
import { team, salon } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about IRIS Salon & Spa — premium beauty services in Gulberg 2, Lahore with family privacy and expert stylists.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-iris-950 py-16 md:py-24 hero-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold-400 text-sm tracking-[0.2em] uppercase mb-4">Our Story</p>
          <h1 className="font-display text-4xl md:text-6xl text-iris-50 font-semibold">About IRIS</h1>
          <p className="mt-6 text-iris-300 max-w-2xl mx-auto text-lg leading-relaxed">
            A premium salon & spa in the heart of Gulberg, dedicated to making every client look and feel their absolute best.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl text-iris-950 font-semibold mb-6">Who We Are</h2>
              <div className="space-y-4 text-iris-700 leading-relaxed">
                <p>
                  <strong className="text-iris-950">IRIS Salon & Spa</strong> is one of Gulberg&apos;s most trusted beauty destinations. Located on Mushtaq Ahmed Gurmani Road, we offer a full range of hair, nail, skin, and wellness services in a calm, luxurious setting.
                </p>
                <p>
                  With a {salon.rating}-star rating and over {salon.reviewCount} Google reviews, we&apos;ve built our reputation on exceptional service, skilled professionals, and a warm, welcoming atmosphere.
                </p>
                <p>
                  What sets us apart is our commitment to <strong className="text-iris-950">family grooming privacy</strong> — a feature our clients consistently praise. Whether you&apos;re preparing for a wedding, a special event, or simply treating yourself, IRIS is your sanctuary.
                </p>
              </div>
            </div>

            <div className="bg-iris-100 rounded-2xl p-8 border border-iris-200">
              <h3 className="font-display text-2xl text-iris-950 mb-6">Why Choose IRIS?</h3>
              <ul className="space-y-4">
                {[
                  "Expert stylists including Shehnaz for classy hairdos",
                  "Premium blowouts that last until your next wash",
                  "Skilled manicure team — Huma & Neha",
                  "Private, comfortable family grooming spaces",
                  "Full-service salon: hair, makeup, nails, spa & waxing",
                  "Convenient Gulberg 2 location with easy parking",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-iris-700">
                    <span className="text-gold-500 shrink-0">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-iris-100/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl text-iris-950 font-semibold text-center mb-12">Meet Our Team</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-6 text-center border border-iris-200 hover:border-gold-400/40 transition-colors"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-iris-200 to-iris-300 flex items-center justify-center text-2xl font-display text-iris-700">
                  {member.name[0]}
                </div>
                <h3 className="font-display text-xl text-iris-950 mt-4">{member.name}</h3>
                <p className="text-sm text-iris-500 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-iris-500 text-sm mt-8">
            And many more talented professionals ready to serve you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl text-iris-950 font-semibold">Experience the IRIS Difference</h2>
          <p className="mt-4 text-iris-600">
            Visit us in Gulberg 2 or explore our services and book your appointment today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/services/"
              className="gradient-gold text-iris-950 font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              View Services
            </Link>
            <Link
              href="/contact/"
              className="border border-iris-300 text-iris-800 font-semibold px-8 py-3.5 rounded-full hover:bg-iris-100 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
