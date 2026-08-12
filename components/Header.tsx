"use client";

import Link from "next/link";
import { useState } from "react";
import { salon } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-iris-950/95 backdrop-blur-md border-b border-gold-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="group flex flex-col">
            <span className="font-display text-2xl md:text-3xl font-semibold text-gold-400 tracking-wide group-hover:text-gold-300 transition-colors">
              IRIS
            </span>
            <span className="text-[10px] md:text-xs text-iris-200 tracking-[0.25em] uppercase -mt-1">
              Salon & Spa
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-iris-100 hover:text-gold-400 transition-colors tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={salon.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-gold text-iris-950 text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Book Now
            </a>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden p-2 text-iris-100"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="md:hidden pb-4 border-t border-iris-800 pt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-iris-100 hover:text-gold-400 py-2 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={salon.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-gold text-iris-950 text-center font-semibold px-5 py-3 rounded-full mt-2"
            >
              Book Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
