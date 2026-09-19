import Link from 'next/link';
import { ShieldCheck, Tv, Zap, CheckCircle2 } from 'lucide-react';

export default function BlogOfferCard() {
  return (
    <div className="my-10 relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-[#0C1222] shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 group">
      {/* Subtle background decoration */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700"></div>
      <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-700"></div>

      <div className="flex-1 relative z-10 text-center md:text-left">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-[#05070E] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-400 mb-4">
          <Zap className="w-3 h-3" /> Special IPTV Promotion
        </span>
        <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight tracking-tight uppercase">
          Premium <span className="text-cyan-400">NixaTV</span> 4K/8K Streaming — Save 61% Today
        </h3>
        <p className="text-slate-400 mb-5 leading-relaxed text-xs sm:text-sm">
          Unlock 50,000+ channels, 150,000+ VODs, and 60 FPS Anti-Freeze technology. Get our 12-Month Plan for just <strong className="text-white">$69.99</strong>.
        </p>
        
        <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-6 justify-center md:justify-start text-xs text-slate-400 font-bold">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Premium Anti-Freeze v2.0
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Instant WhatsApp Activation
          </li>
        </ul>
      </div>

      <div className="w-full md:w-auto flex flex-col items-center gap-3 relative z-10 shrink-0">
        <Link 
          href="/pricing" 
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-indigo-500/30 hover:scale-105 transition-all duration-300 whitespace-nowrap"
        >
          <Tv className="w-4 h-4" />
          View Subscription Plans
        </Link>
        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> 7-Day Money-Back Guarantee
        </div>
      </div>
    </div>
  );
}
