import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { salon, hours } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Fashion Beauty Saloon in G-9, Islamabad. Call +92 300 5339157.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink-950 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="eyebrow text-steel-400 mb-4 animate-rise">Get in Touch</p>
          <h1 className="font-display text-4xl md:text-6xl text-ink-50 animate-rise delay-1">Contact</h1>
          <div className="accent-rule w-16 mx-auto mt-6 animate-rise delay-2" />
          <p className="mt-6 text-ink-300 max-w-2xl mx-auto animate-rise delay-2">
            Call to book, or visit us on Street 5, G-9.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div data-reveal="left">
              <h2 className="font-display text-2xl text-ink-950 mb-8">Details</h2>
              <div className="space-y-6 text-ink-800">
                <div>
                  <p className="eyebrow text-ink-500 mb-1">Mobile (call to book)</p>
                  <a href={`tel:${salon.phone}`} className="font-medium hover:text-steel-600 transition-colors text-lg">
                    {salon.phoneDisplay}
                  </a>
                  <p className="text-xs text-ink-500 mt-2">Appointments are booked by phone call.</p>
                </div>
                <div>
                  <p className="eyebrow text-ink-500 mb-1">Address</p>
                  <p className="leading-relaxed text-sm">{salon.address.full}</p>
                  <a href={salon.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-steel-600 hover:underline">
                    Open in Google Maps →
                  </a>
                </div>
                <div>
                  <p className="eyebrow text-ink-500 mb-2">Suggested Hours</p>
                  {hours.map((item) => (
                    <p key={item.day} className="text-sm">
                      <span className="font-medium">{item.day}:</span> {item.hours}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-10">
                <a href={`tel:${salon.phone}`} className="btn-dark">Call Now</a>
              </div>
            </div>

            <div className="bg-white p-8 border border-ink-200" data-reveal="right">
              <h2 className="font-display text-2xl text-ink-950 mb-2">Send a message</h2>
              <p className="text-sm text-ink-500 mb-6">Demo form only — please call to book an appointment.</p>
              <ContactForm />
            </div>
          </div>

          <div className="mt-16 overflow-hidden border border-ink-200 h-80 md:h-96" data-reveal>
            <iframe
              title="Fashion Beauty Saloon location"
              src={salon.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
