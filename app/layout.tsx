import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";
import PageTransition from "@/components/PageTransition";
import { salon } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${salon.name} | Beauty Salon in F-10 Markaz, Islamabad`,
    template: `%s | ${salon.name}`,
  },
  description:
    "Jasmine Beauty Salon & SPA — bridal makeup, hair, spa and beauty services in F-10 Markaz, Islamabad. Book your appointment today.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
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
