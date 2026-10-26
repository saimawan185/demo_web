import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";
import PageTransition from "@/components/PageTransition";
import WhatsAppButton from "@/components/WhatsAppButton";
import { salon } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${salon.name} | Hair & Skin Care in Gulshan, Karachi`,
    template: `%s | ${salon.name}`,
  },
  description:
    "Maria's Beauty Parlour — energetic hair & skin care in Gulshan Block 11, Karachi. Rated 4.9★ on Google (160 reviews). Book on WhatsApp +92 334 8592187.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=Karla:wght@400;500;600;700&display=swap"
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
        <WhatsAppButton />
      </body>
    </html>
  );
}
