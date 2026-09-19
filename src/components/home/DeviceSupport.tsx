import { Tv, Smartphone, Monitor, Laptop, Globe, Flame, Apple, HardDrive, Gamepad2 } from "lucide-react";
import Link from "next/link";

export default function DeviceSupport() {
  const devices = [
    { name: "Amazon Firestick", desc: "Fire OS 6, 7 & 8 Native Apps", icon: Flame, badge: "Most Popular" },
    { name: "Android TV", desc: "Shield TV, Sony, TCL & Google TV", icon: Tv, badge: "4K Ready" },
    { name: "Smart TV", desc: "Samsung Tizen & LG webOS", icon: Monitor, badge: "Direct App" },
    { name: "Apple TV", desc: "tvOS 15+ 4K HDR Support", icon: Apple, badge: "Smooth 60FPS" },
    { name: "iPhone & iPad", desc: "iOS App Store Applications", icon: Smartphone, badge: "Mobile Stream" },
    { name: "Android Mobile", desc: "Smartphones & Tablets", icon: Smartphone, badge: "On The Go" },
    { name: "Windows PC", desc: "Windows 10 / 11 Native Players", icon: Laptop, badge: "Desktop" },
    { name: "Mac OS", desc: "Apple Silicon & Intel Macs", icon: Laptop, badge: "macOS" },
    { name: "Web Player", desc: "Instant Stream in Any Browser", icon: Globe, badge: "No Install" },
  ];

  return (
    <section id="devices" className="py-24 bg-[#05070E] bg-tech-grid bg-atmosphere relative z-10 border-t border-indigo-500/20 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 border border-indigo-500/30 rounded-full px-4 py-1 bg-[#0C1222] text-cyan-400 text-xs font-bold uppercase tracking-widest">
            NIXATV COMPATIBILITY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Stream NixaTV Seamlessly on{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              All Your Devices
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Enjoy complete multi-screen compatibility with your NixaTV IPTV subscription with zero buffering. Follow our simple <Link href="/installation" className="text-cyan-400 hover:underline font-medium">installation tutorials</Link> for Firestick, Smart TV, Android, Apple TV, and PC.
          </p>
        </div>

        {/* 9 Icon Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((dev, i) => {
            const Icon = dev.icon;
            return (
              <div
                key={i}
                className="nixa-card p-6 flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-cyan-400 group-hover:text-slate-950 transition-all duration-300">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                      {dev.name}
                    </h3>
                    <span className="text-[10px] font-semibold bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-slate-300 shrink-0">
                      {dev.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {dev.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to Setup Guides */}
        <div className="mt-12 text-center">
          <Link
            href="/installation"
            className="btn-secondary text-sm"
          >
            View Complete Setup Tutorials & Instructions →
          </Link>
        </div>

      </div>
    </section>
  );
}
