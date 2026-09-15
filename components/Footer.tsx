import Link from "next/link";
import { salon, hours } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-400 border-t border-gold-400/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-display text-2xl text-gold-200 tracking-wide">Allure</p>
            <p className="eyebrow text-ink-500 mt-1 mb-4">Salon & Spa</p>
            <p className="text-sm leading-relaxed text-ink-400">
              An elite beauty atelier in F-10 Islamabad — bridal, hair and spa with quiet precision.
            </p>
          </div>

          <div>
            <h3 className="eyebrow text-gold-400 mb-5">Explore</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-gold-300 transition-colors">Home</Link></li>
              <li><Link href="/about/" className="hover:text-gold-300 transition-colors">About</Link></li>
              <li><Link href="/services/" className="hover:text-gold-300 transition-colors">Services</Link></li>
              <li><Link href="/contact/" className="hover:text-gold-300 transition-colors">Contact</Link></li>
              <li><Link href="/privacy/" className="hover:text-gold-300 transition-colors">Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold-400 mb-5">Hours</h3>
            <ul className="space-y-2 text-sm">
              {hours.map((item) => (
                <li key={item.day}>
                  <span className="text-ink-200 block">{item.day}</span>
                  <span className="text-ink-500">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold-400 mb-5">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${salon.phone}`} className="text-ink-200 hover:text-gold-300 transition-colors">
                  {salon.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={salon.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300 transition-colors">Facebook</a>
                {" · "}
                <a href={salon.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300 transition-colors">Instagram</a>
              </li>
              <li className="text-ink-500 leading-relaxed">{salon.address.full}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] tracking-wide text-ink-600">
          <p>&copy; {new Date().getFullYear()} Allure Salon & Spa. Demo website.</p>
          <p>Indicative prices — confirm when booking.</p>
        </div>
      </div>
    </footer>
  );
}
