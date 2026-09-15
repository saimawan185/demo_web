import type { Metadata } from "next";
import { salon } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the Allure Salon & Spa demo website.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-ink-950 hero-glow py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-ink-50 font-semibold">Privacy Policy</h1>
          <p className="mt-4 text-ink-400 text-sm">Last updated: September 15, 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 text-ink-700 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl text-ink-950 font-semibold mb-3">1. Introduction</h2>
            <p>
              This Privacy Policy explains how the demo website for <strong>{salon.name}</strong> may collect and use information. Some features (such as the contact form) are for demonstration only and do not store submissions on a live server.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink-950 font-semibold mb-3">2. Information we collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact details you share by phone, WhatsApp, email or form (name, phone, message)</li>
              <li>Basic usage data if analytics are enabled on the hosted site</li>
              <li>Appointment preferences when you book a service</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink-950 font-semibold mb-3">3. How we use information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to booking and service enquiries</li>
              <li>To provide salon and spa services you request</li>
              <li>To improve the website experience</li>
              <li>To send appointment reminders or offers only with your consent</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink-950 font-semibold mb-3">4. Sharing</h2>
            <p>
              We do not sell personal information. Data may be shared only when required by law or with trusted providers needed to operate the business (for example hosting), under appropriate safeguards.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink-950 font-semibold mb-3">5. Security & cookies</h2>
            <p>
              Reasonable measures are used to protect information, but no online transmission is fully secure. The site may use cookies to improve browsing; you can control cookies in your browser settings.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink-950 font-semibold mb-3">6. Third-party links</h2>
            <p>
              Links to Google Maps, Facebook, Instagram and WhatsApp are governed by those services&apos; own privacy policies.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink-950 font-semibold mb-3">7. Contact</h2>
            <p>Questions about this policy:</p>
            <ul className="mt-3 space-y-1">
              <li><strong>{salon.name}</strong></li>
              <li>{salon.address.full}</li>
              <li>Phone: {salon.phoneDisplay}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
