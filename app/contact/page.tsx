import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { salon, hours } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Allure Salon & Spa in F-10/2 Islamabad. Call (051) 237-0345 or visit Tariq Market.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink-950 hero-glow py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-champagne-400 text-sm tracking-[0.2em] uppercase mb-4 animate-rise">Get in Touch</p>
          <h1 className="font-display text-4xl md:text-6xl text-ink-50 font-semibold animate-rise delay-1">Contact Us</h1>
          <p className="mt-6 text-ink-300 max-w-2xl mx-auto animate-rise delay-2">
            Call, WhatsApp or visit us in Tariq Market, F-10/2.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div data-reveal="left">
              <h2 className="font-display text-2xl text-ink-950 font-semibold mb-8">Details</h2>
              <div className="space-y-6 text-ink-800">
                <div>
                  <p className="text-sm text-ink-500 uppercase tracking-wider">Phone</p>
                  <a href={`tel:${salon.phone}`} className="font-medium hover:text-rose-600 transition-colors">
                    {salon.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-ink-500 uppercase tracking-wider">Address</p>
                  <p className="leading-relaxed">{salon.address.full}</p>
                  <a
                    href={salon.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm text-rose-600 hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
                <div>
                  <p className="text-sm text-ink-500 uppercase tracking-wider mb-2">Hours</p>
                  {hours.map((item) => (
                    <p key={item.day}>
                      <span className="font-medium">{item.day}:</span> {item.hours}
                    </p>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-ink-500 uppercase tracking-wider mb-2">Branches</p>
                  <ul className="space-y-1">
                    {salon.branches.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={salon.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lift btn-shimmer gradient-rose text-white font-medium px-6 py-3 rounded-full text-sm"
                >
                  WhatsApp
                </a>
                <a
                  href={salon.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-ink-300 text-ink-800 font-medium px-6 py-3 rounded-full text-sm hover:bg-ink-100 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Facebook
                </a>
                <a
                  href={salon.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-ink-300 text-ink-800 font-medium px-6 py-3 rounded-full text-sm hover:bg-ink-100"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div className="bg-white p-8 border border-ink-200" data-reveal="right">
              <h2 className="font-display text-2xl text-ink-950 font-semibold mb-2">Send a message</h2>
              <p className="text-sm text-ink-500 mb-6">Demo form only — use phone or WhatsApp to book.</p>
              <ContactForm />
            </div>
          </div>

          <div className="mt-16 overflow-hidden border border-ink-200 h-80 md:h-96" data-reveal="fade">
            <iframe
              title="Allure Salon & Spa location"
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
