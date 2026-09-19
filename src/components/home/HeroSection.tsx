"use client";

import Link from "next/link";
import { Sparkles, CheckCircle2, Play, ArrowRight, Activity, Shield, Zap } from "lucide-react";
import IPTVMockupUI from "@/components/home/IPTVMockupUI";

export default function HeroSection() {
  const benefits = [
    "50,000+ Live Worldwide Channels (4K / FHD)",
    "150,000+ Movies & Series (Updated Daily)",
    "60 FPS Anti-Freeze v2.0 Technology",
    "Instant 5-Minute Activation on Any Device",
  ];

  return (
    <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 bg-[#05070E] bg-tech-grid bg-atmosphere overflow-hidden">
      
      {/* Hero Atmospheric Glowing Orbs */}
      <div className="absolute top-1/4 left-5 w-[420px] h-[420px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-5 w-[460px] h-[460px] bg-purple-600/18 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[360px] h-[360px] bg-cyan-500/12 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8">
        
        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Copy & Call To Actions */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 border border-indigo-500/30 rounded-full px-4 py-1.5 bg-[#0C1222]/80 backdrop-blur-md shadow-lg shadow-indigo-500/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 tracking-wider uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                NIXATV NEXT-GEN 4K & 8K IPTV
              </span>
            </div>

            {/* Main Title H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              NixaTV — Stream 50,000+ Live Channels & Movies in{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                Ultra-Crisp 4K & 8K
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
              Experience the pinnacle of streaming performance with NixaTV IPTV. Enjoy buffer-free 60 FPS live sports, worldwide premium channels, and over 150,000 on-demand movies & series. Choose your <Link href="/pricing" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 font-semibold">NixaTV subscription plan</Link> or follow our fast <Link href="/installation" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 font-semibold">setup guide</Link> for Firestick, Smart TV, and mobile devices.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20NixaTV."
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-base py-3.5 px-8 shadow-xl shadow-indigo-500/25 group"
              >
                <Play className="w-5 h-5 fill-current transition-transform group-hover:scale-110" />
                Start Instant Trial
              </a>
              <Link
                href="/pricing"
                className="btn-secondary text-base py-3.5 px-8"
              >
                View Plans <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Key Trust / Benefit Points */}
            <div className="grid grid-cols-2 gap-3.5 pt-4 w-full max-w-lg border-t border-indigo-500/20 text-xs sm:text-sm text-slate-300">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Realtime Stats Ribbon */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-semibold text-slate-400">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>Zero IP Lock / VPN Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-indigo-400" />
                <span>Ultra-Low Latency</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Web Player / IPTV Mockup */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <IPTVMockupUI />
          </div>

        </div>

      </div>
    </section>
  );
}
