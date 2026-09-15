import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";
import PageTransition from "@/components/PageTransition";
import { salon } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${salon.name} | Beauty Salon in F-10, Islamabad`,
    template: `%s | ${salon.name}`,
  },
  description:
    "Allure Salon & Spa — bridal makeup, hair, nails and spa in Tariq Market, F-10/2 Islamabad. Book your appointment today.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <RevealInit />
        <Header />
        <main className="min-h-screen pt-16 md:pt-20">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
