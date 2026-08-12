import Link from "next/link";
import { salon, suggestedHours } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-iris-950 text-iris-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-display text-2xl text-gold-400 font-semibold">IRIS</p>
            <p className="text-xs tracking-[0.2em] uppercase text-iris-400 mb-4">Salon & Spa</p>
            <p className="text-sm text-iris-300 leading-relaxed">
              Premium beauty & wellness in the heart of Gulberg, Lahore. Your sanctuary for hair, skin & self-care.
            </p>
          </div>

          <div>
            <h3 className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-gold-400 transition-colors">Home</Link></li>
              <li><Link href="/about/" className="hover:text-gold-400 transition-colors">About Us</Link></li>
              <li><Link href="/services/" className="hover:text-gold-400 transition-colors">Services & Prices</Link></li>
              <li><Link href="/contact/" className="hover:text-gold-400 transition-colors">Contact</Link></li>
              <li><Link href="/privacy/" className="hover:text-gold-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-4">Hours</h3>
            <ul className="space-y-2 text-sm">
              {suggestedHours.map((item) => (
                <li key={item.day}>
                  <span className="text-iris-100">{item.day}</span>
                  <br />
                  <span className="text-iris-400">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${salon.phone}`} className="hover:text-gold-400 transition-colors">
                  {salon.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${salon.email}`} className="hover:text-gold-400 transition-colors">
                  {salon.email}
                </a>
              </li>
              <li className="text-iris-400 leading-relaxed">{salon.address.full}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-iris-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-iris-500">
          <p>&copy; {new Date().getFullYear()} IRIS Salon & Spa. All rights reserved.</p>
          <p>Demo website — prices are indicative only.</p>
        </div>
      </div>
    </footer>
  );
}
