import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ShieldCheck, Zap, Tv } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section className="bg-[#05070E] bg-tech-grid bg-atmosphere text-white relative z-10 py-24 border-t border-indigo-500/20 overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-indigo-500/20 shadow-2xl group">
            <Image 
              src="/imggt1-1.webp" 
              alt="NixaTV 4K IPTV Streaming Service on Smart TV with Live Sports and Movies"
              title="NixaTV Premium 4K & 8K IPTV Streaming Platform"
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070E] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 bg-[#0C1222]/90 backdrop-blur-md p-4 rounded-xl border border-indigo-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-cyan-400">
                  <Tv className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-sm text-white block">Next-Gen NixaTV Infrastructure</span>
                  <span className="text-xs text-slate-400">50,000+ Channels & 150,000+ VODs</span>
                </div>
              </div>
              <span className="text-xs font-bold bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/30">
                ACTIVE 4K/8K
              </span>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 border border-indigo-500/30 rounded-full px-4 py-1 bg-[#0C1222] text-cyan-400 text-xs font-bold uppercase tracking-widest w-fit mb-4">
              ABOUT NIXATV
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              What is <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">NixaTV?</span> — Premium 4K & 8K Service
            </h2>
            
            <p className="text-slate-300 text-sm md:text-base mb-4 leading-relaxed">
              NixaTV IPTV is an elite high-performance subscription provider servicing users across the USA, Canada, UK, and Europe. Delivering uncompressed live TV broadcasts, constantly updated movie libraries, and 60 FPS sports streams straight to your devices without expensive hardware or hidden charges.
            </p>
            
            <p className="text-slate-300 text-sm md:text-base mb-8 leading-relaxed">
              Compatible across Amazon Firestick, Smart TVs, Android TV, Apple TV, iOS, Windows, and MAG boxes. Explore our transparent <Link href="/pricing" className="text-cyan-400 hover:underline font-medium">subscription pricing</Link> or browse our comprehensive <Link href="/channels" className="text-cyan-400 hover:underline font-medium">channel catalog</Link> for instant setup.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-indigo-500/20">
              <div className="nixa-card p-4 text-center">
                <div className="text-2xl sm:text-3xl font-black text-cyan-400 mb-1">50K+</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Live Channels</div>
              </div>
              <div className="nixa-card p-4 text-center">
                <div className="text-2xl sm:text-3xl font-black text-indigo-400 mb-1">150K+</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">VOD Movies</div>
              </div>
              <div className="nixa-card p-4 text-center">
                <div className="text-2xl sm:text-3xl font-black text-purple-300 mb-1">4K/8K</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Ultra HD</div>
              </div>
              <div className="nixa-card p-4 text-center">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">99.9%</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Server Uptime</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
