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
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "bg-ink-950/97 backdrop-blur-xl border-steel-400/25"
          : "bg-ink-950/85 backdrop-blur-md border-white/10"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-[4.5rem]">
          <Link href="/" className="group">
            <span className="font-display text-2xl md:text-[1.7rem] text-steel-300 transition-colors group-hover:text-steel-400">
              Fashion Beauty
            </span>
            <span className="block text-[9px] md:text-[10px] text-ink-400 tracking-[0.28em] uppercase -mt-0.5">
              Saloon · G-9
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link text-ink-300 hover:text-steel-300 transition-colors">
                {link.label}
              </Link>
            ))}
            <a href={`tel:${salon.phone}`} className="btn-primary !py-2.5 !px-4">
              Call to Book
            </a>
          </nav>

          <button type="button" aria-label="Toggle menu" aria-expanded={open} className="md:hidden p-2 text-ink-100" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="md:hidden pb-5 border-t border-white/10 pt-4 flex flex-col gap-3 animate-menu-in">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-ink-100 hover:text-steel-300 py-2 text-sm tracking-[0.14em] uppercase" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <a href={`tel:${salon.phone}`} className="btn-primary mt-2 text-center">
              Call to Book
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
