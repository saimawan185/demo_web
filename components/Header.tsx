"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { salon } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "bg-ink-950/95 backdrop-blur-lg border-white/15 shadow-lg shadow-black/20"
          : "bg-ink-950/90 backdrop-blur-md border-white/10"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="group">
            <span className="font-display text-2xl md:text-3xl text-rose-300 tracking-wide transition-all duration-300 group-hover:text-rose-400 group-hover:tracking-wider">
              Allure
            </span>
            <span className="block text-[10px] md:text-xs text-ink-300 tracking-[0.28em] uppercase -mt-0.5">
              Salon & Spa
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-sm text-ink-200 hover:text-rose-300 transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={salon.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lift btn-shimmer gradient-rose text-white text-sm font-medium px-5 py-2.5 rounded-full"
            >
              Book Now
            </a>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden p-2 text-ink-100 transition-transform duration-200 active:scale-95"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="md:hidden pb-4 border-t border-white/10 pt-4 flex flex-col gap-3 animate-menu-in">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ink-100 hover:text-rose-300 py-2 transition-all duration-300 hover:translate-x-1"
                style={{ animationDelay: `${i * 40}ms` }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={salon.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lift gradient-rose text-white text-center font-medium px-5 py-3 rounded-full mt-2"
            >
              Book Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
