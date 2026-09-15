import Link from "next/link";
import { salon, hours } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-display text-2xl text-rose-300">Allure</p>
            <p className="text-xs tracking-[0.22em] uppercase text-ink-400 mb-4">Salon & Spa</p>
            <p className="text-sm leading-relaxed">
              Premium bridal, hair & spa experiences in the heart of F-10, Islamabad.
            </p>
          </div>

          <div>
            <h3 className="text-champagne-400 text-sm font-medium uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-rose-300 transition-all duration-300 hover:translate-x-1 inline-block">Home</Link></li>
              <li><Link href="/about/" className="hover:text-rose-300 transition-all duration-300 hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link href="/services/" className="hover:text-rose-300 transition-all duration-300 hover:translate-x-1 inline-block">Services & Prices</Link></li>
              <li><Link href="/contact/" className="hover:text-rose-300 transition-all duration-300 hover:translate-x-1 inline-block">Contact</Link></li>
              <li><Link href="/privacy/" className="hover:text-rose-300 transition-all duration-300 hover:translate-x-1 inline-block">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-champagne-400 text-sm font-medium uppercase tracking-wider mb-4">Hours</h3>
            <ul className="space-y-2 text-sm">
              {hours.map((item) => (
                <li key={item.day}>
                  <span className="text-ink-100">{item.day}</span>
                  <br />
                  <span className="text-ink-400">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-champagne-400 text-sm font-medium uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${salon.phone}`} className="hover:text-rose-300 transition-colors">
                  {salon.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={salon.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-rose-300 transition-colors">
                  Facebook
                </a>
                {" · "}
                <a href={salon.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-rose-300 transition-colors">
                  Instagram
                </a>
              </li>
              <li className="text-ink-400 leading-relaxed">{salon.address.full}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-ink-500">
          <p>&copy; {new Date().getFullYear()} Allure Salon & Spa. Demo website.</p>
          <p>Prices are indicative only — confirm when booking.</p>
        </div>
      </div>
    </footer>
  );
}
