import HeroSection from "@/components/home/HeroSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import SportsSection from "@/components/home/SportsSection";
import MovieStrips from "@/components/home/MovieStrips";
import BrandMarquee from "@/components/home/BrandMarquee";
import ChannelCategories from "@/components/home/ChannelCategories";
import DeviceSupport from "@/components/home/DeviceSupport";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import LatestArticlesSection from "@/components/home/LatestArticlesSection";
import SupportCtaSection from "@/components/home/SupportCtaSection";
import Link from "next/link";

export const metadata = {
  title: "NixaTV – Best IPTV Service 2026 | 50K+ Channels & Live Sports",
  description: "Upgrade to NixaTV for buffer-free 4K/8K live sports, 50,000+ channels & 150,000+ movies in 60 FPS. Anti-Freeze technology, instant activation & 24/7 support.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="flex-col flex min-h-screen bg-[#05070E] bg-tech-grid bg-atmosphere text-[#F8FAFC]">
      {/* 1. Hero Section with Original IPTV Interface Mockup */}
      <HeroSection />

      {/* 2. What is NixaTV / About Service */}
      <ComparisonSection />

      {/* 3. Dedicated Live Sports Section (NFL, NBA, UFC, NHL, MLB, MLS) */}
      <SportsSection />

      {/* 4. Cinematic Movies & Channels Experience */}
      <MovieStrips>
        <div className="text-center mt-2 relative z-20">
          <p className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">50,000+ PREMIUM LIVE CHANNELS</p>
        </div>
        
        <BrandMarquee bgClassName="bg-transparent" />
        
        <div className="text-center mt-8 mb-6 relative z-20">
          <p className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">150,000+ LATEST MOVIES & SERIES</p>
        </div>
      </MovieStrips>

      {/* Channel Quick Bar */}
      <div className="w-full bg-[#0C1222]/80 backdrop-blur-md py-6 px-4 text-center border-y border-indigo-500/20 relative z-20">
        <p className="text-center text-sm md:text-base text-slate-300 max-w-3xl mx-auto">
          Explore the comprehensive <Link prefetch={false} className="font-bold text-cyan-400 hover:text-indigo-300 transition-colors" href="/channels">NixaTV Channel Catalog</Link> or follow our step-by-step <Link prefetch={false} className="font-bold text-cyan-400 hover:text-indigo-300 transition-colors" href="/installation">Installation Guide</Link> for instant setup.
        </p>
      </div>

      {/* 5. Pricing Section */}
      <PricingSection />

      {/* 6. Why NixaTV Feature Highlights */}
      <ChannelCategories />

      {/* 7. Wide Device Compatibility */}
      <DeviceSupport />

      {/* Device Logos Marquee */}
      <div className="w-full border-t border-indigo-500/20 pt-12 pb-8 relative z-10 bg-transparent">
        <p className="text-center text-xs font-bold tracking-widest text-slate-400 uppercase mb-8">Supported on all your favorite devices</p>
        <BrandMarquee
          bgClassName="bg-transparent"
          imagesFolder="devices"
          images={[
            "Amazon-Fire-tv-stick-nixatv.webp",
            "Apple-TV-nixatv.webp",
            "hisense-nixatv.webp",
            "iptv-smarter-nixatv.webp",
            "LG-smart-nixatv.webp",
            "Shield-nixatv.webp",
            "Smart-android-tv-nixatv.webp",
            "sony-select-nixatv.webp",
            "Tv-media-boxs-nixatv.webp",
            "Windows-nixatv.webp",
            "xbox-live-nixatv.webp"
          ]}
          cardClassName="flex-shrink-0 w-[160px] h-[80px] md:w-[220px] md:h-[100px] relative bg-[#0C1222] border border-indigo-500/20 rounded-2xl p-4 md:p-6 hover:border-cyan-400/50 transition-all duration-300 shadow-md flex items-center justify-center"
          imageClassName="object-contain drop-shadow-sm invert opacity-80 hover:opacity-100"
        />
      </div>

      {/* 8. How It Works (3 Steps) */}
      <HowItWorksSection />

      {/* 9. FAQ Section */}
      <FAQSection />

      {/* 10. Latest Articles & Tutorials */}
      <LatestArticlesSection />

      {/* 11. Final Support CTA */}
      <SupportCtaSection />
    </main>
  );
}
