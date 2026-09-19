import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-[#05070E] bg-tech-grid bg-atmosphere text-white relative z-10 border-t border-indigo-500/20 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 border border-indigo-500/30 rounded-full px-4 py-1 bg-[#0C1222] text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> FAST 3-STEP SETUP
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Start Streaming NixaTV in{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Get setup with your NixaTV IPTV subscription in under 3 minutes with automated credential delivery and instant activation.
          </p>
        </div>

        {/* Timeline Steps Container */}
        <div className="relative max-w-[1000px] mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-indigo-500/20 hidden md:block" />

          {/* STEP 1 */}
          <div className="relative mb-16 md:mb-20">
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-black text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-lg shadow-indigo-500/30">
                Step One
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              <div className="nixa-card p-8 relative border border-indigo-500/20">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 block">1. SELECT YOUR PLAN</span>
                <h3 className="text-xl font-bold text-white mb-3">
                  Choose Subscription & Checkout
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Select your desired plan (1, 3, 6, or 12 Months). After instant checkout, your M3U playlist URL and Xtream Codes login credentials are immediately sent to your email or WhatsApp.
                </p>
                <a href="#pricing" className="text-xs font-bold text-cyan-400 hover:text-white transition-colors inline-flex items-center gap-1">
                  View Plans <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="overflow-hidden rounded-2xl border border-indigo-500/20 shadow-2xl relative aspect-[16/10] group">
                <Image
                  src="/step-1-order-ai.png"
                  alt="Step 1: Choose your NixaTV IPTV Subscription Plan"
                  title="Step 1: Select NixaTV IPTV Plan"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="relative mb-16 md:mb-20">
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-black text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-lg shadow-indigo-500/30">
                Step Two
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              <div className="overflow-hidden rounded-2xl border border-indigo-500/20 shadow-2xl relative aspect-[16/10] order-2 md:order-1 group">
                <Image
                  src="/step-2-setup-ai.png"
                  alt="Step 2: Instant NixaTV Activation and App Setup"
                  title="Step 2: Connect NixaTV to your IPTV App"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
              </div>

              <div className="nixa-card p-8 relative border border-indigo-500/20 order-1 md:order-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 block">2. INSTALL THE APP</span>
                <h3 className="text-xl font-bold text-white mb-3">
                  Connect Your Favorite IPTV App
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Download IPTV Smarters Pro, TiviMate, IBO Player, or XCIPTV on your Smart TV or Firestick. Enter your NixaTV login details provided in Step 1.
                </p>
                <Link href="/installation" className="text-xs font-bold text-cyan-400 hover:text-white transition-colors inline-flex items-center gap-1">
                  Installation Guides <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="relative">
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-black text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-lg shadow-indigo-500/30">
                Step Three
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              <div className="nixa-card p-8 relative border border-indigo-500/20">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 block">3. ENJOY STREAMING</span>
                <h3 className="text-xl font-bold text-white mb-3">
                  Stream 50,000+ Channels & VODs
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Sit back and enjoy uninterrupted live sports, 4K/8K movies, and premium international channels with zero buffering and 60 FPS clarity.
                </p>
                <Link href="/channels" className="text-xs font-bold text-cyan-400 hover:text-white transition-colors inline-flex items-center gap-1">
                  Explore Channel Catalog <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="overflow-hidden rounded-2xl border border-indigo-500/20 shadow-2xl relative aspect-[16/10] group">
                <Image
                  src="/step-3-watch-ai.png"
                  alt="Step 3: Watch and Stream 50,000+ 4K Channels on NixaTV"
                  title="Step 3: Enjoy High-Speed 4K IPTV Streaming"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
