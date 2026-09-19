import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function MovieStrips({ children }: { children?: React.ReactNode }) {
  const channelImages = [
    "Preview1.webp",
    "Preview2.webp",
    "Preview3.webp",
    "Preview3 (1).webp",
    "Preview 4.webp",
    "Preview5.webp",
    "Preview6.webp",
    "Preview 7.webp",
    "Preview8.webp",
    "Preview9.webp"
  ];

  return (
    <section className="w-full overflow-hidden bg-[#060810] bg-tech-grid bg-atmosphere py-20 relative flex flex-col gap-6 border-t border-white/10">
      
      {/* Section Header */}
      <div className="text-center mb-6 px-4 z-20 space-y-3">
        <span className="inline-flex items-center gap-2 border border-[#38BDF8]/30 rounded-full px-4 py-1 bg-[#0D111B] text-[#38BDF8] text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" /> 150,000+ MOVIES & TV SERIES
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          THE ULTIMATE <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">CINEMATIC</span> EXPERIENCE
        </h2>
        <p className="text-[#A7B0C0] max-w-2xl mx-auto text-sm sm:text-base">
          Stream the latest 2026 Hollywood blockbusters, trending TV shows, anime, and international movies in crystal-clear 4K Ultra HD.
        </p>
        <div className="pt-2">
          <Link
            href="/channels"
            className="btn-secondary text-sm"
          >
            Explore Channel & VOD Library <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>

      {children}

      {/* Top Strip (Right to Left) */}
      <div className="relative flex w-max items-center">
        <div className="flex gap-4 md:gap-6 px-2 md:px-3 animate-marquee" style={{ animationDuration: '30s' }}>
          {[...channelImages, ...channelImages, ...channelImages].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[280px] sm:w-[360px] md:w-[460px] aspect-[16/9] relative rounded-xl overflow-hidden shadow-2xl border border-white/10 hover:scale-105 hover:border-[#38BDF8]/50 hover:z-10 transition-all duration-300">
              <Image 
                src={`/movie/${img}`} 
                alt={`NixaTV 4K VOD & Cinema Streaming Preview - ${(i % channelImages.length) + 1}`}
                title={`NixaTV 4K Movie & TV Series Streaming - ${(i % channelImages.length) + 1}`}
                fill 
                unoptimized
                className="object-cover" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Side Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-[#060810] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-[#060810] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
