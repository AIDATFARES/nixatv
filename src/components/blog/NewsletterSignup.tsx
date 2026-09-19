"use client";

import { Mail } from "lucide-react";

export default function NewsletterSignup() {
  return (
    <section className="bg-[#0C1222] border border-indigo-500/20 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
      <div className="relative z-10 max-w-2xl mx-auto">
        <Mail className="w-10 h-10 text-cyan-400 mb-4 mx-auto" />
        <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-3">Never Miss a Streaming Update</h2>
        <p className="text-xs sm:text-sm text-slate-400 mb-8 leading-relaxed">
          Subscribe to our newsletter for the latest streaming tips, channel updates, and exclusive NixaTV offer alerts.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
          <input
            className="bg-[#05070E] border border-indigo-500/20 rounded-2xl px-5 py-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 w-full sm:w-80 transition-all"
            placeholder="Enter your email address..."
            type="email"
          />
          <button
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-black text-xs uppercase tracking-wider px-8 py-3.5 rounded-2xl shadow-lg shadow-indigo-500/30 hover:scale-105 transition-all"
            type="submit"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
}

