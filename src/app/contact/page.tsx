import type { Metadata } from "next";
import { Mail, MessageCircle, ArrowRight, Clock, Sparkles } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact NixaTV Support | 24/7 Technical Assistance & Free Trial",
  description: "Contact the NixaTV support team 24/7 via WhatsApp or email. Fast assistance with subscription activation, setup guides, and free trial access.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <main className="w-full min-h-screen bg-[#05070E] bg-tech-grid bg-atmosphere text-[#F8FAFC] relative z-10">
      <div className="pt-16 pb-24 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto w-full relative z-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-500/15 via-purple-500/10 to-transparent blur-3xl opacity-50" />

      <div className="mx-auto mb-14 max-w-3xl text-center relative z-10">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-[#0C1222] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
          <Sparkles className="w-3.5 h-3.5" /> NIXATV SUPPORT
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight uppercase">
          <span className="block text-white">Get in Touch with</span>
          <span className="mt-2 block bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">NixaTV Support</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-300">
          We are here 24/7 to ensure your NixaTV IPTV streaming experience is flawless. Reach out for instant subscription setup, free trial access, or technical guidance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="rounded-3xl border border-indigo-500/20 bg-[#0C1222] p-8 flex flex-col items-center text-center shadow-2xl hover:border-cyan-400/40 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-cyan-400 border border-indigo-500/20 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white uppercase mb-1">Email Us</h3>
            <p className="text-xs text-slate-400 mb-4">For general inquiries and setup help.</p>
            <a
              className="text-xs font-bold text-cyan-400 hover:text-indigo-300 transition-colors"
              href="mailto:support@nixatv.pro"
            >
              support@nixatv.pro
            </a>
          </div>

          <div className="rounded-3xl border border-indigo-500/20 bg-[#0C1222] p-8 flex flex-col items-center text-center shadow-2xl hover:border-cyan-400/40 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-cyan-400 border border-indigo-500/20 flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white uppercase mb-1">WhatsApp 24/7</h3>
            <p className="text-xs text-slate-400 mb-4">
              Fastest response for instant account activation &amp; technical issues.
            </p>
            <a
              className="text-xs font-extrabold text-cyan-400 hover:text-indigo-300 transition-colors flex items-center gap-1 uppercase tracking-wider"
              href="https://wa.me/213552069874?text=Hello,%20I%20need%20support%20for%20NixaTV."
              target="_blank"
              rel="noreferrer"
            >
              Start WhatsApp Chat <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="rounded-3xl border border-indigo-500/20 bg-[#0C1222] p-8 flex flex-col items-center text-center shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white uppercase mb-1">Response Time</h3>
            <p className="text-xs text-slate-400">
              Instant on WhatsApp, or <strong className="text-white">Under 2 Hours</strong> via email.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl border border-indigo-500/20 bg-[#0C1222] p-8 sm:p-10 shadow-2xl h-full">
            <h2 className="text-xl font-black text-white uppercase mb-6 border-b border-indigo-500/20 pb-4">
              Send a Direct Support Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
