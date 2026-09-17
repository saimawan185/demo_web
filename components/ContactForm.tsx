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
      <div className="bg-ink-50 p-8 text-center border border-ink-200 animate-rise">
        <p className="font-display text-2xl text-ink-950">Thank you</p>
        <p className="text-sm text-ink-600 mt-3">
          This is a demo form. Please WhatsApp or call{" "}
          <a href={`tel:${salon.phone}`} className="text-rose-600 font-medium">{salon.phoneDisplay}</a>{" "}
          to book.
        </p>
      </div>
    );
  }

  const field =
    "w-full px-4 py-3 border border-ink-200 focus:border-rose-400 focus:ring-1 focus:ring-rose-400/30 outline-none transition-all duration-300 bg-ink-50 focus:bg-white text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="eyebrow text-ink-500 mb-2 block">Full Name</label>
        <input id="name" name="name" type="text" required className={field} placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="phone" className="eyebrow text-ink-500 mb-2 block">Phone Number</label>
        <input id="phone" name="phone" type="tel" required className={field} placeholder="03XX-XXXXXXX" />
      </div>
      <div>
        <label htmlFor="service" className="eyebrow text-ink-500 mb-2 block">Service</label>
        <select id="service" name="service" className={field}>
          <option value="">Select a service</option>
          <option>Bridal Makeup</option>
          <option>Party Makeup</option>
          <option>Hairstyling</option>
          <option>Facial</option>
          <option>Manicure / Pedicure</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="eyebrow text-ink-500 mb-2 block">Message</label>
        <textarea id="message" name="message" rows={4} className={`${field} resize-none`} placeholder="Preferred date, any notes..." />
      </div>
      <button type="submit" className="btn-dark w-full">Send Message</button>
    </form>
  );
}
