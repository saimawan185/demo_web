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
      <div className="bg-iris-50 rounded-xl p-8 text-center border border-iris-200">
        <span className="text-4xl">✅</span>
        <p className="mt-4 font-semibold text-iris-950">Thank you for your message!</p>
        <p className="text-sm text-iris-600 mt-2">
          This is a demo site. Please call{" "}
          <a href={`tel:${salon.phone}`} className="text-gold-600 font-medium">
            {salon.phoneDisplay}
          </a>{" "}
          or WhatsApp us to book.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-iris-700 mb-1.5">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-xl border border-iris-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all bg-iris-50"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-iris-700 mb-1.5">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full px-4 py-3 rounded-xl border border-iris-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all bg-iris-50"
          placeholder="03XX-XXXXXXX"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-iris-700 mb-1.5">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-xl border border-iris-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all bg-iris-50"
        >
          <option value="">Select a service</option>
          <option>Hairstyling</option>
          <option>Make-up</option>
          <option>Manicure / Pedicure</option>
          <option>Massage</option>
          <option>Body Waxing</option>
          <option>Hair Extensions</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-iris-700 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-iris-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all bg-iris-50 resize-none"
          placeholder="Preferred date & time, any special requests..."
        />
      </div>
      <button
        type="submit"
        className="w-full gradient-gold text-iris-950 font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity"
      >
        Send Message
      </button>
    </form>
  );
}
