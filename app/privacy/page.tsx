import type { Metadata } from "next";
import { salon } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the Abeera's Beauty Salon demo website.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-ink-950 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-ink-50">Privacy Policy</h1>
          <p className="mt-4 text-ink-400 text-sm">Last updated: September 17, 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-ink-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 text-ink-700 leading-relaxed text-sm md:text-base">
          <div>
            <h2 className="font-display text-2xl text-ink-950 mb-3">1. Introduction</h2>
            <p>
              This Privacy Policy explains how the demo website for <strong>{salon.name}</strong> may collect and use information. Some features (such as the contact form) are for demonstration only.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink-950 mb-3">2. Information we collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact details shared by phone, WhatsApp or form</li>
              <li>Basic usage data if analytics are enabled on the hosted site</li>
              <li>Appointment preferences when you book a service</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink-950 mb-3">3. Contact</h2>
            <ul className="space-y-1">
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
