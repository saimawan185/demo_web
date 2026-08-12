import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { salon, suggestedHours } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact IRIS Salon & Spa in Gulberg 2, Lahore. Call 0301-8467799 or visit us on Mushtaq Ahmed Gurmani Road.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-iris-950 py-16 md:py-24 hero-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold-400 text-sm tracking-[0.2em] uppercase mb-4">Get in Touch</p>
          <h1 className="font-display text-4xl md:text-6xl text-iris-50 font-semibold">Contact Us</h1>
          <p className="mt-6 text-iris-300 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Call, message, or visit us in Gulberg 2.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl text-iris-950 font-semibold mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-iris-100 flex items-center justify-center shrink-0 text-xl">📞</div>
                  <div>
                    <p className="text-sm text-iris-500 uppercase tracking-wider">Phone</p>
                    <a href={`tel:${salon.phone}`} className="text-iris-950 font-semibold hover:text-gold-600 transition-colors">
                      {salon.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-iris-100 flex items-center justify-center shrink-0 text-xl">✉️</div>
                  <div>
                    <p className="text-sm text-iris-500 uppercase tracking-wider">Email</p>
                    <a href={`mailto:${salon.email}`} className="text-iris-950 font-semibold hover:text-gold-600 transition-colors">
                      {salon.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-iris-100 flex items-center justify-center shrink-0 text-xl">📍</div>
                  <div>
                    <p className="text-sm text-iris-500 uppercase tracking-wider">Address</p>
                    <p className="text-iris-800 leading-relaxed">{salon.address.full}</p>
                    <a
                      href={salon.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm text-gold-600 hover:underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-iris-100 flex items-center justify-center shrink-0 text-xl">🕐</div>
                  <div>
                    <p className="text-sm text-iris-500 uppercase tracking-wider mb-2">Suggested Hours</p>
                    <ul className="space-y-1 text-iris-800">
                      {suggestedHours.map((item) => (
                        <li key={item.day}>
                          <span className="font-medium">{item.day}:</span> {item.hours}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <a
                  href={salon.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-gold text-iris-950 font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
                >
                  WhatsApp
                </a>
                <a
                  href={salon.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-iris-300 text-iris-800 font-semibold px-6 py-3 rounded-full hover:bg-iris-100 transition-colors text-sm"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-iris-200 shadow-sm">
              <h2 className="font-display text-2xl text-iris-950 font-semibold mb-2">Send a Message</h2>
              <p className="text-sm text-iris-500 mb-6">Demo form — messages are not sent. Use phone or WhatsApp to book.</p>
              <ContactForm />
            </div>
          </div>

          <div className="mt-16 rounded-2xl overflow-hidden border border-iris-200 h-80 md:h-96">
            <iframe
              title="IRIS Salon & Spa location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.0!2d74.3511772!3d31.5249055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904f96223abfd%3A0x86c7570238174a45!2sIRIS%20Salon%20%26%20Spa!5e0!3m2!1sen!2s!4v1"
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
