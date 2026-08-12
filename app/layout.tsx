import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { salon } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${salon.name} | Premium Beauty Salon in Gulberg, Lahore`,
    template: `%s | ${salon.name}`,
  },
  description:
    "IRIS Salon & Spa — premium hairstyling, makeup, manicure, pedicure, massage & waxing in Gulberg 2, Lahore. Book your appointment today.",
  keywords: ["salon", "spa", "Lahore", "Gulberg", "beauty", "hair", "makeup", "manicure"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
