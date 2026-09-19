import Link from "next/link";
import Image from "next/image";
import DeviceSetupGuide from "@/components/installation/DeviceSetupGuide";
import { Clock3, Download, Headphones, Link2, Monitor, PlayCircle, Sparkles } from "lucide-react";

export const metadata = {
  title: "How to Setup NixaTV – Easy Step-by-Step IPTV Installation Guide",
  description: "Easy step-by-step IPTV setup guide for Smart TVs, Firestick, Android TV, iOS, Windows & MAG devices. Start streaming NixaTV in under 5 minutes!",
  alternates: {
    canonical: "/installation",
  },
};

export default function Installation() {
  return (
    <main className="w-full min-h-screen bg-[#05070E] bg-tech-grid bg-atmosphere text-[#F8FAFC] relative z-10">
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-20 pt-12 sm:px-8 md:px-12">
      <header className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-[#0C1222] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
          <Sparkles className="w-3.5 h-3.5" /> NIXATV INSTALLATION
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
          <span className="block text-white uppercase">NixaTV Setup Guide</span>
          <span className="mt-2 block bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent uppercase">For All Supported Devices</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">Comprehensive step-by-step instructions to configure NixaTV IPTV on your Firestick, Smart TV, Android, Apple TV, and PC in under 5 minutes.</p>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-400">NixaTV IPTV supports TiviMate, IPTV Smarters Pro, and IBO Player. Ready to start streaming? Explore our <Link className="font-semibold text-cyan-400 hover:text-indigo-300" href="/pricing">NixaTV IPTV Plans</Link> or browse the <Link className="font-semibold text-cyan-400 hover:text-indigo-300" href="/channels">NixaTV Channel Lineup</Link>.</p>
        
        <div className="mt-10 flex flex-wrap justify-center gap-x-9 gap-y-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
          <span className="inline-flex items-center gap-2"><Monitor className="h-4 w-4 text-cyan-400" />15+ Devices Supported</span>
          <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-indigo-400" />5–15 Minutes Setup</span>
          <span className="inline-flex items-center gap-2"><Headphones className="h-4 w-4 text-cyan-400" />24/7 VIP Support Available</span>
        </div>
      </header>

      <section className="mb-20 rounded-3xl border border-indigo-500/20 bg-[#0C1222] py-14 sm:mb-24 sm:py-16 shadow-2xl">
        <div className="mx-auto max-w-[1000px] px-5">
          <header className="mx-auto mb-10 max-w-[560px] text-center">
            <h2 className="text-3xl font-black tracking-tight text-white uppercase">Quick Start Guide</h2>
            <p className="mt-3 text-xs text-slate-400">Get started with NixaTV quickly and easily in three straightforward steps.</p>
          </header>
          
          <div className="grid gap-8 md:grid-cols-3">
            <QuickStartCard icon={Download} step="1" title="Download App">Download and install a suitable IPTV player app on your device from the official app store.</QuickStartCard>
            <QuickStartCard icon={Link2} step="2" title="Add M3U URL">Input your NixaTV M3U playlist URL and Xtream API details sent to your email &amp; WhatsApp.</QuickStartCard>
            <QuickStartCard icon={PlayCircle} step="3" title="Start Streaming">Gain immediate access to live channels, movies and TV shows in crystal clear 4K/8K quality.</QuickStartCard>
          </div>

          {/* Apps Platform Logos Banner */}
          <div className="mt-16 border-t border-indigo-500/20 pt-12">
            <h3 className="text-center text-xs font-bold tracking-widest text-slate-400 uppercase mb-8">Supported on all your favorite devices</h3>
            <div className="w-full flex justify-center items-center">
              <Image 
                src="/supported-devices-banner.webp"
                alt="NixaTV Supported IPTV Devices - Firestick, Android TV, Samsung Smart TV, LG webOS, Apple TV, Windows, MAG"
                title="NixaTV Compatible IPTV Streaming Devices"
                width={1024}
                height={93}
                unoptimized
                className="w-full max-w-4xl h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <DeviceSetupGuide />

      <section className="mx-auto max-w-2xl text-center rounded-3xl border border-indigo-500/20 bg-[#0C1222] p-10 shadow-2xl">
        <h2 className="text-2xl font-black text-white uppercase">Need Help With Setup?</h2>
        <p className="mt-2 text-xs text-slate-400">Our technical support team is available 24/7 via WhatsApp to assist you with installation.</p>
        <Link className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 px-8 py-3.5 text-xs font-black text-white uppercase tracking-wider shadow-lg shadow-indigo-500/30 transition-all hover:scale-105" href="/contact">
          Contact 24/7 Support
        </Link>
      </section>
      </div>
    </main>
  );
}

function QuickStartCard({ children, icon: Icon, step, title }: { children: React.ReactNode; icon: typeof Download; step: string; title: string }) {
  return (
    <article className="flex flex-col rounded-3xl border border-indigo-500/20 bg-[#10172D] overflow-hidden shadow-xl hover:border-cyan-400/50 hover:-translate-y-1 transition-all duration-300">
      <div className="p-7 text-center flex-1 flex flex-col items-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-cyan-400 border border-indigo-500/20 mb-5">
          <Icon className="h-7 w-7" strokeWidth={1.5} />
        </div>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-xs font-black text-white shadow-md mb-3">{step}</span>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="mt-3 text-xs leading-relaxed text-slate-400">{children}</p>
      </div>
    </article>
  );
}
