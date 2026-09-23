import type { Metadata } from "next";
import Link from "next/link";
import { salon } from "@/lib/data";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the Ayesha's Salon Official demo website.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-ink-950 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="eyebrow text-amber-400 mb-4 animate-rise">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl text-ink-50 animate-rise delay-1">Privacy Policy</h1>
          <div className="accent-rule w-16 mx-auto mt-6 animate-rise delay-2" />
          <p className="mt-6 text-ink-400 text-sm animate-rise delay-2">Last updated: September 23, 2026</p>
          <p className="mt-4 text-ink-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed animate-rise delay-2">
            How the demo website for {salon.name} may handle information you choose to share.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ink-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12 text-ink-700 leading-relaxed text-sm md:text-base">
          <div data-reveal>
            <h2 className="font-display text-2xl md:text-3xl text-ink-950 mb-4">1. Introduction</h2>
            <p>
              This Privacy Policy explains how the demo website for <strong>{salon.name}</strong> may collect, use and store information. The site is a demonstration project. Some features — including the on-page contact form — do not send data to a live salon booking system.
            </p>
            <p className="mt-4">
              Real appointments should be arranged through WhatsApp, phone or the salon&apos;s official social accounts. By using this website you acknowledge that it is provided for demonstration and marketing preview purposes.
            </p>
          </div>

          <div data-reveal>
            <h2 className="font-display text-2xl md:text-3xl text-ink-950 mb-4">2. Information we may collect</h2>
            <p className="mb-4">Depending on how you interact with the site or the salon, information may include:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Name, phone number and message details you type into the demo contact form</li>
              <li>Contact details shared by phone, WhatsApp or social media when you reach out to book</li>
              <li>Appointment preferences such as service type, preferred date and notes you provide</li>
              <li>Basic technical usage data (for example pages visited or device type) if analytics are enabled on the hosted site</li>
              <li>Public interactions on Instagram, Facebook, TikTok or Google Reviews that you choose to post</li>
            </ul>
          </div>

          <div data-reveal>
            <h2 className="font-display text-2xl md:text-3xl text-ink-950 mb-4">3. How information may be used</h2>
            <p className="mb-4">Information you share may be used to:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Respond to booking requests and service enquiries</li>
              <li>Confirm appointments, location details and arrival guidance</li>
              <li>Improve the demo website experience and content accuracy</li>
              <li>Share updates about services when you have opted in through WhatsApp or social channels</li>
            </ul>
            <p className="mt-4">
              We do not sell personal information. Demo form submissions on this site are not connected to a production database.
            </p>
          </div>

          <div data-reveal>
            <h2 className="font-display text-2xl md:text-3xl text-ink-950 mb-4">4. Cookies and hosting</h2>
            <p>
              The static site may be hosted on GitHub Pages or a similar host. Standard hosting logs and browser cookies required for basic site operation may apply. If third-party embeds are used (for example Google Maps), those providers may process technical data under their own policies.
            </p>
          </div>

          <div data-reveal>
            <h2 className="font-display text-2xl md:text-3xl text-ink-950 mb-4">5. Third-party platforms</h2>
            <p>
              Links to WhatsApp, Instagram, Facebook, TikTok and Google Reviews open external services. Once you leave this demo site, those platforms&apos; privacy terms apply. Please review their policies before sharing personal details there.
            </p>
          </div>

          <div data-reveal>
            <h2 className="font-display text-2xl md:text-3xl text-ink-950 mb-4">6. Data retention</h2>
            <p>
              For a live salon operation, appointment notes and contact messages are typically kept only as long as needed to provide the service and follow up. For this demo website, form entries are not stored on a backend server by default.
            </p>
          </div>

          <div data-reveal>
            <h2 className="font-display text-2xl md:text-3xl text-ink-950 mb-4">7. Your choices</h2>
            <p className="mb-4">You may:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Contact the salon to update or remove details you previously shared for bookings</li>
              <li>Stop messaging on WhatsApp at any time</li>
              <li>Adjust cookie and tracking settings in your browser</li>
              <li>Avoid using the demo form and book directly via phone or WhatsApp instead</li>
            </ul>
          </div>

          <div data-reveal>
            <h2 className="font-display text-2xl md:text-3xl text-ink-950 mb-4">8. Children</h2>
            <p>
              This website is intended for adults arranging beauty services. We do not knowingly collect personal information from children through the demo form.
            </p>
          </div>

          <div data-reveal>
            <h2 className="font-display text-2xl md:text-3xl text-ink-950 mb-4">9. Policy updates</h2>
            <p>
              This page may be updated as the demo evolves. The &ldquo;Last updated&rdquo; date at the top reflects the latest revision. Continued use of the site after changes means you accept the revised policy for demo purposes.
            </p>
          </div>

          <div className="border border-ink-200 bg-white p-8 md:p-10" data-reveal>
            <h2 className="font-display text-2xl md:text-3xl text-ink-950 mb-4">10. Contact</h2>
            <p className="mb-6">
              Questions about this Privacy Policy or your information can be directed to the salon using the details below.
            </p>
            <ul className="space-y-2 text-ink-800">
              <li><strong>{salon.name}</strong></li>
              <li>{salon.address.full}</li>
              <li>
                Phone / WhatsApp:{" "}
                <a href={salon.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">
                  {salon.phoneDisplay}
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <p className="eyebrow text-ink-500 mb-4">Social</p>
              <SocialLinks variant="light" size="md" />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact/" className="btn-dark">Contact page</Link>
              <a href={salon.social.whatsapp} target="_blank" rel="noopener noreferrer" className="border border-ink-300 text-ink-800 eyebrow px-5 py-3 hover:border-amber-500 transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
