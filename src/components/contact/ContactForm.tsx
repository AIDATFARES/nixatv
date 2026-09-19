"use client";

import { Send } from "lucide-react";

export default function ContactForm() {
  function handleSendMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "General support").trim();
    const message = String(formData.get("message") || "").trim();
    const text = encodeURIComponent(`Hello NixaTV support,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`);
    window.open(`https://wa.me/213552069874?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSendMessage}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider" htmlFor="name">
            Your Name
          </label>
          <input
            className="rounded-2xl border border-indigo-500/20 bg-[#05070E] px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 outline-none transition-all"
            id="name"
            name="name"
            placeholder="John Doe"
            required
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider" htmlFor="email">
            Email Address
          </label>
          <input
            className="rounded-2xl border border-indigo-500/20 bg-[#05070E] px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 outline-none transition-all"
            id="email"
            name="email"
            placeholder="john@example.com"
            required
            type="email"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider" htmlFor="subject">
          Subject
        </label>
        <input
          className="rounded-2xl border border-indigo-500/20 bg-[#05070E] px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 outline-none transition-all"
          id="subject"
          name="subject"
          placeholder="How can we help you?"
          type="text"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider" htmlFor="message">
          Message
        </label>
        <textarea
          className="rounded-2xl border border-indigo-500/20 bg-[#05070E] px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 outline-none transition-all resize-none"
          id="message"
          name="message"
          placeholder="Describe your question or technical issue..."
          required
          rows={6}
        ></textarea>
      </div>

      <div className="mt-2 flex justify-end">
        <button
          className="w-full sm:w-auto rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 px-8 py-4 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 flex items-center justify-center gap-2"
          type="submit"
        >
          <span>Send Message via WhatsApp</span>
          <Send className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}

