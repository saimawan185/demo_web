import type { Metadata } from "next";
import { salon } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for IRIS Salon & Spa demo website.",
};

export default function PrivacyPage() {
  const lastUpdated = "August 12, 2026";

  return (
    <>
      <section className="bg-iris-950 py-16 md:py-20 hero-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-iris-50 font-semibold">Privacy Policy</h1>
          <p className="mt-4 text-iris-400 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-iris">
          <div className="space-y-8 text-iris-700 leading-relaxed">
            <div>
              <h2 className="font-display text-2xl text-iris-950 font-semibold mb-3">1. Introduction</h2>
              <p>
                Welcome to the demo website for <strong>{salon.name}</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). This Privacy Policy explains how we collect, use, and protect information when you visit our website. This is a demonstration website; some features (such as the contact form) are for display purposes only.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-iris-950 font-semibold mb-3">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact information</strong> — such as your name, phone number, and email address if you submit our contact form or reach out via phone, WhatsApp, or email.</li>
                <li><strong>Usage data</strong> — such as pages visited, browser type, and device information, collected automatically through standard web analytics (if enabled on the hosted version).</li>
                <li><strong>Appointment details</strong> — service preferences, preferred dates, and special requests when you book an appointment.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-iris-950 font-semibold mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to inquiries and booking requests</li>
                <li>To provide salon and spa services you have requested</li>
                <li>To improve our website and customer experience</li>
                <li>To send appointment reminders or promotional offers (only with your consent)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-iris-950 font-semibold mb-3">4. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information only when required by law, to protect our rights, or with trusted service providers who assist in operating our business (e.g., hosting providers), subject to confidentiality agreements.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-iris-950 font-semibold mb-3">5. Data Security</h2>
              <p>
                We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-iris-950 font-semibold mb-3">6. Cookies</h2>
              <p>
                Our website may use cookies and similar technologies to enhance your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-iris-950 font-semibold mb-3">7. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party sites such as Google Maps, Instagram, Facebook, and WhatsApp. We are not responsible for the privacy practices of these external sites.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-iris-950 font-semibold mb-3">8. Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal data by contacting us using the details below. You may also opt out of marketing communications at any time.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-iris-950 font-semibold mb-3">9. Children&apos;s Privacy</h2>
              <p>
                Our services are not directed at individuals under the age of 13. We do not knowingly collect personal information from children.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-iris-950 font-semibold mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-iris-950 font-semibold mb-3">11. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <ul className="mt-3 space-y-1">
                <li><strong>{salon.name}</strong></li>
                <li>{salon.address.full}</li>
                <li>Phone: {salon.phoneDisplay}</li>
                <li>Email: {salon.email}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
