import Link from "next/link";
import { salon, hours } from "@/lib/data";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-400 border-t border-amber-400/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-display text-2xl text-amber-300 italic">AlmaHA</p>
            <p className="eyebrow text-ink-500 mt-1 mb-4">Beauty Salon · Berlin</p>
            <p className="text-sm leading-relaxed">
              Ladies-only beauty salon in Kreuzberg — hair, colour, styling and beauty care.
            </p>
          </div>
          <div>
            <h3 className="eyebrow text-amber-400 mb-5">Explore</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-amber-300 transition-colors">Home</Link></li>
              <li><Link href="/about/" className="hover:text-amber-300 transition-colors">About</Link></li>
              <li><Link href="/services/" className="hover:text-amber-300 transition-colors">Services</Link></li>
              <li><Link href="/contact/" className="hover:text-amber-300 transition-colors">Contact</Link></li>
              <li><Link href="/privacy/" className="hover:text-amber-300 transition-colors">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="eyebrow text-amber-400 mb-5">Hours</h3>
            <ul className="space-y-2 text-sm">
              {hours.map((item) => (
                <li key={item.day}>
                  <span className="text-ink-200 block">{item.day}</span>
                  <span className="text-ink-500">{item.hours}</span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-ink-600 mt-3">Hours from Google Maps listing.</p>
          </div>
          <div>
            <h3 className="eyebrow text-amber-400 mb-5">Contact & Social</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${salon.phone}`} className="text-ink-200 hover:text-amber-300 transition-colors">
                  {salon.phoneDisplay}
                </a>
              </li>
              <li className="text-ink-500 leading-relaxed">{salon.address.full}</li>
            </ul>
            <SocialLinks variant="dark" size="sm" className="mt-5" />
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] tracking-wide text-ink-600">
          <p>&copy; {new Date().getFullYear()} AlmaHA Beauty Salon. Demo website.</p>
          <p>Indicative prices — confirm when booking.</p>
        </div>
      </div>
    </footer>
  );
}
