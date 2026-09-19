import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function IPTVMockupUI() {
  return (
    <div className="w-full max-w-[720px] mx-auto rounded-2xl bg-[#080D1A]/90 border border-indigo-500/20 p-2.5 sm:p-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl relative overflow-hidden group">
      
      {/* Decorative Glow Effects inside Mockup */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header of Mockup UI */}
      <div className="flex items-center justify-between border-b border-indigo-500/20 pb-2.5 mb-2.5 px-2 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
          </div>
          <span className="text-[11px] font-bold text-slate-300 ml-2 tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            NIXATV ULTRA PLAYER v5.0
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
            8K / 4K UHD 60FPS
          </span>
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> ZERO BUFFER
          </span>
        </div>
      </div>

      {/* Web Player Image Screen */}
      <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl group/img aspect-[900/502]">
        <Image
          src="/webplayer-preview-900.webp"
          alt="NixaTV Web Player 4K Interface - 50,000+ Live Channels & Sports"
          title="NixaTV Web Player 4K Ultra HD Interface"
          width={900}
          height={502}
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 80vw, 700px"
          priority
          className="w-full h-auto object-cover rounded-xl group-hover/img:scale-[1.01] transition-transform duration-500"
        />
      </div>
    </div>
  );
}
