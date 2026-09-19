import { Monitor, Globe2, Tv, Headphones, Sparkles } from "lucide-react";

export default function ChannelCategories() {
  const features = [
    {
      icon: Monitor,
      title: "Universal Devices",
      desc: "100% compatible with Firestick, Smart TVs, Android, iOS, Windows, Mac, and MAG boxes.",
    },
    {
      icon: Globe2,
      title: "Global 8K/4K CDN",
      desc: "High-speed anti-freeze nodes operating across North America, Europe, UK, and Asia.",
    },
    {
      icon: Tv,
      title: "60 FPS Ultra HD",
      desc: "Stream live sports and blockbusters with crystal clear 4K/8K resolution and ultra bitrates.",
    },
    {
      icon: Headphones,
      title: "24/7 VIP Support",
      desc: "Instant technical onboarding via WhatsApp and email whenever you need assistance.",
    },
  ];

  return (
    <section className="relative z-10 bg-[#05070E] bg-tech-grid bg-atmosphere py-20 text-white border-t border-indigo-500/20 overflow-hidden">
      <div className="mx-auto max-w-[1340px] px-5">
        
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-4xl text-center space-y-3">
          <span className="inline-flex items-center gap-2 border border-indigo-500/30 rounded-full px-4 py-1 bg-[#0C1222] text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> WHY NIXATV STANDS OUT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Engineered to Deliver the <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              #1 Ultra-Fast IPTV Experience
            </span>
          </h2>
        </div>

        {/* Feature Box Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="nixa-card p-6 flex flex-col items-center text-center">
                <div className="mb-5 p-3 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 text-cyan-400">
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
