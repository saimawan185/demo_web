"use client";

import { useState, type FormEvent } from "react";
import { salon } from "@/lib/data";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-ink-50 rounded-2xl p-8 text-center border border-ink-200">
        <p className="font-display text-2xl text-ink-950">Thank you</p>
        <p className="text-sm text-ink-600 mt-3">
          This is a demo form. Please call{" "}
          <a href={`tel:${salon.phone}`} className="text-rose-600 font-medium">
            {salon.phoneDisplay}
          </a>{" "}
          or message on WhatsApp to book.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink-700 mb-1.5">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-xl border border-ink-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition-all bg-ink-50"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-ink-700 mb-1.5">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full px-4 py-3 rounded-xl border border-ink-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition-all bg-ink-50"
          placeholder="03XX-XXXXXXX"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-ink-700 mb-1.5">
          Service
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-xl border border-ink-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition-all bg-ink-50"
        >
          <option value="">Select a service</option>
          <option>Bridal Makeup</option>
          <option>Party Makeup</option>
          <option>Hairstyling</option>
          <option>Spa / Facial</option>
          <option>Manicure / Pedicure</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink-700 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-ink-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition-all bg-ink-50 resize-none"
          placeholder="Preferred date, event type, any notes..."
        />
      </div>
      <button
        type="submit"
        className="w-full gradient-rose text-white font-medium py-3.5 rounded-xl hover:opacity-90 transition-opacity"
      >
        Send Message
      </button>
    </form>
  );
}
