import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";
import PageTransition from "@/components/PageTransition";
import { salon } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${salon.name} | Beauty Salon in G-9 Markaz, Islamabad`,
    template: `%s | ${salon.name}`,
  },
  description:
    "Diana's Glamour Salon — bridal makeup, hair and beauty services in G-9 Markaz, Islamabad. Call +92 317 5481454.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Sora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <RevealInit />
        <Header />
        <main className="min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
