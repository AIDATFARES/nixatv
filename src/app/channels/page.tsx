"use client";

import Link from "next/link";
import { 
  Baby, 
  Check, 
  Film, 
  Globe2, 
  Layers3, 
  Monitor, 
  Newspaper, 
  Trophy, 
  CirclePlay,
  Radio
} from "lucide-react";
import { motion } from "framer-motion";
import BrandMarquee from "@/components/home/BrandMarquee";

// Category Overview Cards
const categoryCards = [
  {
    icon: Trophy,
    title: "Sports Channels",
    items: [
      "Football, Basketball, UFC, Boxing, F1, and more",
      "HD/FHD and 4K 60FPS streams available",
      "Sky Sports, TNT, BeIN, ESPN, DAZN & PPV"
    ],
    count: "12,500+ Channels",
    tag: "MOST POPULAR"
  },
  {
    icon: Film,
    title: "Movie & VOD Content",
    items: [
      "Premium movie networks & cinema channels",
      "Curated 4K VOD library updated daily",
      "HBO, Cinemax, Sky Cinema, Starz & VOD"
    ],
    count: "200,000+ VODs"
  },
  {
    icon: Newspaper,
    title: "News Networks",
    items: [
      "Global, national and regional news networks",
      "24/7 breaking news and special live coverage",
      "BBC News, CNN, Sky News, Fox, CNBC, Bloomberg"
    ],
    count: "3,200+ Channels"
  },
  {
    icon: Baby,
    title: "Kids & Family",
    items: [
      "Cartoons, learning & family entertainment",
      "Dedicated child-friendly programming",
      "Disney, Cartoon Network, Nickelodeon, Boomerang"
    ],
    count: "2,800+ Channels"
  },
  {
    icon: Monitor,
    title: "General Entertainment",
    items: [
      "Reality TV, variety, music, lifestyle & drama",
      "Popular everyday cable and satellite networks",
      "US, UK, Canadian & European top entertainment"
    ],
    count: "15,000+ Channels"
  },
  {
    icon: Globe2,
    title: "International Networks",
    items: [
      "150+ country packages & regional channels",
      "Local sports, news, culture & native audio",
      "Europe, Americas, MENA, Asia & Africa"
    ],
    count: "+50,000 Channels"
  },
  {
    icon: Layers3,
    title: "Series & Shows",
    items: [
      "Latest released seasons with daily updates",
      "Complete boxsets, timeless classics & VOD",
      "Netflix, Amazon, Apple TV+, HBO Max & Disney+"
    ],
    count: "+150,000 Films & Series"
  }
];

export default function ChannelsPage() {
  return (
    <main className="min-h-screen bg-[#05070E] bg-tech-grid bg-atmosphere text-[#F8FAFC] pt-16 pb-24 relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-500/15 via-purple-500/10 to-transparent blur-3xl opacity-50" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Banner */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-[#0C1222] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400 mb-6"
          >
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>+50,000 NIXATV CHANNELS · +150,000 FILMS &amp; SERIES · 60 FPS 4K/8K</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight uppercase"
          >
            <span className="block text-white">NixaTV Channel Lineup</span>
            <span className="mt-2 block bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">Unlimited Live TV &amp; VODs</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed"
          >
            Explore our comprehensive global NixaTV IPTV network featuring live sports, blockbuster movies, breaking news, and premium entertainment in 60 FPS 4K Ultra HD. Choose your ideal <Link href="/pricing" className="text-cyan-400 hover:underline font-medium">IPTV subscription plan</Link> or view our <Link href="/installation" className="text-cyan-400 hover:underline font-medium">IPTV setup tutorial</Link> for instant access.
          </motion.p>
        </div>

        {/* SECTION 1: Category Cards Grid */}
        <section className="mb-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categoryCards.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.article
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="relative min-h-[240px] rounded-3xl border border-indigo-500/20 bg-[#0C1222] px-6 pb-6 pt-14 shadow-xl hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  {/* Top Floating Badge Icon */}
                  <span className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/30 border-4 border-[#05070E] group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" strokeWidth={2.5} />
                  </span>

                  {/* Optional Popular Tag */}
                  {category.tag && (
                    <span className="absolute right-4 top-4 rounded-full bg-indigo-500/10 border border-indigo-500/30 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-cyan-300">
                      {category.tag}
                    </span>
                  )}

                  <h2 className="text-center text-xl font-black text-white tracking-wide uppercase">
                    {category.title}
                  </h2>

                  <ul className="mt-4 space-y-2.5">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-slate-400 leading-tight">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Total Available</span>
                    <span className="text-xs font-black text-cyan-400">{category.count}</span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* SECTION: Channel Brand Marquee Strip */}
        <section className="mb-16 rounded-3xl overflow-hidden border border-indigo-500/20 shadow-2xl">
          <BrandMarquee bgClassName="bg-[#080D1A]" />
        </section>

        {/* SECTION 3: CTA Bottom Box */}
        <section className="mt-16 bg-gradient-to-b from-[#0C1222] via-[#10172D] to-[#0C1222] rounded-3xl border border-indigo-500/20 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <CirclePlay className="w-10 h-10 text-cyan-400 mx-auto mb-4 animate-bounce" />
            <h2 className="text-3xl font-black uppercase text-white">Start Your Premium Entertainment Experience</h2>
            <p className="mt-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
              Select your plan and receive secure, instant access credentials via WhatsApp &amp; Email in minutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-indigo-500/30 transition-all hover:scale-105"
              >
                View Subscription Plans
              </Link>
              <a
                href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20NixaTV%20IPTV."
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-2xl bg-white/10 border border-white/10 text-white font-black text-xs uppercase tracking-wider hover:bg-white/20 transition-all"
              >
                Get Free Trial via WhatsApp
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
