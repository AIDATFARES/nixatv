import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MonitorSmartphone, ShieldCheck, Zap, Globe2, Headphones, Tv, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How NixaTV Works – 3 Easy Steps to 4K Ultra HD Streaming",
  description: "Discover how simple it is to get started with NixaTV. Pick your plan, receive instant login credentials via WhatsApp/Email, and enjoy buffer-free 4K live TV.",
  alternates: {
    canonical: "/how-it-works",
  },
};

const steps = [
  {
    badge: "Step One",
    title: "Place Your Order",
    description: (
      <>
        Choose the plan that suits you from our{" "}
        <Link href="/pricing" className="text-cyan-400 font-bold hover:text-indigo-300 transition-colors">
          pricing plans
        </Link>
        , complete payment, and receive your login credentials instantly via email or{" "}
        <Link href="/contact" className="text-cyan-400 font-bold hover:text-indigo-300 transition-colors">
          WhatsApp
        </Link>
        .
      </>
    ),
    image: "/step-1-order-ai.png",
    imageAlt: "Step 1: Order your NixaTV IPTV Subscription Plan",
    align: "left" as const,
  },
  {
    badge: "Step Two",
    title: "Quick Setup & Installation",
    description: (
      <>
        Follow our step-by-step{" "}
        <Link href="/installation" className="text-cyan-400 font-bold hover:text-indigo-300 transition-colors">
          installation guide
        </Link>{" "}
        to configure IPTV on Smart TV, Firestick, Android, iOS, or PC in under 5 minutes.
      </>
    ),
    image: "/step-2-setup-ai.png",
    imageAlt: "Step 2: Instant NixaTV Activation and App Setup on Any Device",
    align: "right" as const,
  },
  {
    badge: "Step Three",
    title: "Start Streaming in 4K & 8K",
    description: (
      <>
        Stream all your favorite live sports, 4K movies, and premium channels from our complete{" "}
        <Link href="/channels" className="text-cyan-400 font-bold hover:text-indigo-300 transition-colors">
          channels catalog
        </Link>
        .
      </>
    ),
    image: "/step-3-watch-ai.png",
    imageAlt: "Step 3: Watch and Stream 50,000+ 4K Channels on NixaTV",
    align: "left" as const,
  },
];

const features = [
  {
    icon: Tv,
    title: "Complete IPTV Subscription",
    description:
      "Enjoy uninterrupted 4K 60FPS streaming. Choose from 1, 3, 6 or 12 month packages with full access to our streaming library.",
    link: "/pricing",
  },
  {
    icon: Globe2,
    title: "+50,000 Channels & 200,000+ VODs",
    description:
      "Unlock over 50,000 live channels and 150,000+ films & series for the ultimate viewing experience.",
    link: "/channels",
  },
  {
    icon: MonitorSmartphone,
    title: "Live TV & TV Guide (EPG)",
    description:
      "Get access to an interactive electronic program guide (EPG), Live TV, and catch-up replay on any device.",
    link: "/installation",
  },
];

const benefits = [
  { icon: ShieldCheck, text: "Secure & encrypted payments" },
  { icon: Zap, text: "Instant automated delivery" },
  { icon: Headphones, text: "24/7 dedicated support" },
  { icon: MonitorSmartphone, text: "Works on all devices" },
  { icon: Globe2, text: "150+ countries covered" },
  { icon: Check, text: "No contracts or hidden fees" },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-[#05070E] bg-tech-grid bg-atmosphere text-[#F8FAFC] min-h-screen">
      {/* ─── Hero Header ─── */}
      <section className="relative pt-16 pb-20 overflow-hidden border-b border-indigo-500/20">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-500/15 via-purple-500/10 to-transparent blur-3xl opacity-50" />
        <div className="relative mx-auto max-w-4xl px-6 text-center z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-[#0C1222] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" /> Easy 3-Step Process
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] uppercase">
            <span className="text-white">How Does NixaTV Work?</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">3-Step 4K Setup Guide</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
            Activate your{" "}
            <Link href="/pricing" className="text-cyan-400 font-bold hover:text-indigo-300 transition-colors">
              NixaTV IPTV subscription
            </Link>{" "}
            in 3 simple steps. Choose your plan, pay securely, and start streaming high-definition channels, live sports, and VODs in under 3 minutes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 px-8 py-3.5 text-xs font-black text-white uppercase tracking-wider shadow-lg shadow-indigo-500/30 transition-all hover:scale-105"
            >
              View Plans <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/installation"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-indigo-500/20 bg-[#0C1222] px-8 py-3.5 text-xs font-black text-white uppercase tracking-wider hover:bg-white/10 transition-all"
            >
              Installation Guide
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Timeline Steps ─── */}
      <section className="py-20">
        <div className="mx-auto max-w-[960px] px-6 relative">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-indigo-500/20 hidden md:block" />

          {steps.map((step, i) => (
            <div key={i} className={`relative ${i < steps.length - 1 ? "mb-20" : ""}`}>
              {/* Step Badge */}
              <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-black text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-lg shadow-indigo-500/30">
                  {step.badge}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
                {/* Card */}
                <div
                  className={`bg-[#0C1222] p-8 rounded-3xl border border-indigo-500/20 shadow-2xl ${
                    step.align === "right" ? "order-1 md:order-2" : ""
                  }`}
                >
                  <h3 className="text-xl font-black text-white uppercase mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Image */}
                <div
                  className={`overflow-hidden rounded-3xl border border-indigo-500/20 shadow-2xl ${
                    step.align === "right" ? "order-2 md:order-1" : ""
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    width={600}
                    height={380}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500 opacity-90 hover:opacity-100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Getting Started Showcase ─── */}
      <section className="py-20 bg-[#080D1A] border-t border-indigo-500/20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              Getting Started with NixaTV Is Easy
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-4 leading-relaxed">
              Enjoy high quality IPTV streaming with NixaTV. Watch{" "}
              <Link href="/channels" className="text-cyan-400 font-bold hover:text-indigo-300 transition-colors">
                live TV channels
              </Link>
              , movies, and sports anytime, anywhere.
            </p>
          </div>

          <div className="space-y-16 max-w-[1080px] mx-auto">
            {/* Feature Block 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="overflow-hidden rounded-3xl border border-indigo-500/20 shadow-2xl">
                <Image
                  src="/features-1-ai.png"
                  alt="NixaTV 4K Ultra HD Live Sports and IPTV Streaming Experience"
                  title="NixaTV Premium 4K IPTV Streaming"
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500 opacity-90 hover:opacity-100"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug uppercase">
                  <Link href="/pricing" className="hover:text-cyan-400 transition-colors">
                    Complete IPTV Subscription Experience
                  </Link>
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Enjoy uninterrupted 4K/HD streaming with a premium subscription from NixaTV. Choose from 1, 3, 6 or 12 months packages with full access to our{" "}
                  <Link href="/channels" className="text-cyan-400 font-bold hover:text-indigo-300 transition-colors">
                    streaming library
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Feature Block 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4 order-2 md:order-1">
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug uppercase">
                  <Link href="/channels" className="hover:text-cyan-400 transition-colors">
                    +50,000 Channels &amp; 200,000+ VODs
                  </Link>
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Unlock a world of live entertainment with over{" "}
                  <Link href="/channels" className="text-cyan-400 font-bold hover:text-indigo-300 transition-colors">
                    +50,000 live channels and +150,000 films &amp; series
                  </Link>{" "}
                  for the ultimate viewing experience. Check out our{" "}
                  <Link href="/pricing" className="text-cyan-400 font-bold hover:text-indigo-300 transition-colors">
                    subscription plans
                  </Link>{" "}
                  to start watching immediately.
                </p>
              </div>
              <div className="overflow-hidden rounded-3xl border border-indigo-500/20 shadow-2xl order-1 md:order-2">
                <Image
                  src="/features-2-ai.png"
                  alt="NixaTV 50,000+ Live Channels and 150,000+ VOD Movie Library"
                  title="NixaTV 50,000+ Live Channels & VOD Catalog"
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500 opacity-90 hover:opacity-100"
                />
              </div>
            </div>

            {/* Feature Block 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="overflow-hidden rounded-3xl border border-indigo-500/20 shadow-2xl">
                <Image
                  src="/features-3-ai.png"
                  alt="NixaTV Interactive EPG Electronic Program Guide and Catch-up TV"
                  title="NixaTV Interactive EPG TV Guide"
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500 opacity-90 hover:opacity-100"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug uppercase">
                  <Link href="/installation" className="hover:text-cyan-400 transition-colors">
                    Live TV &amp; TV Guide (EPG) Included
                  </Link>
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  With NixaTV you get access to an interactive electronic program guide (EPG), Live TV, and catch-up replay. Read our{" "}
                  <Link href="/installation" className="text-cyan-400 font-bold hover:text-indigo-300 transition-colors">
                    IPTV setup guide
                  </Link>{" "}
                  or explore our{" "}
                  <Link href="/faq" className="text-cyan-400 font-bold hover:text-indigo-300 transition-colors">
                    FAQ support
                  </Link>{" "}
                  for complete device instructions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features Section ─── */}
      <section className="py-20 border-y border-indigo-500/20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              Getting Started Is <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Easy</span>
            </h2>
            <p className="mt-4 text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto">
              Enjoy high quality IPTV streaming with NixaTV. Watch{" "}
              <Link href="/channels" className="text-cyan-400 font-bold hover:text-indigo-300 transition-colors">
                live TV channels
              </Link>
              , movies, and sports anytime, anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={i}
                  href={feature.link}
                  className="group flex flex-col rounded-3xl bg-[#0C1222] p-8 border border-indigo-500/20 shadow-xl hover:border-cyan-400/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-cyan-400 border border-indigo-500/20 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-xl font-black text-white uppercase">{feature.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-400 flex-grow">
                    {feature.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-black text-cyan-400 uppercase tracking-wider group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Benefits Strip ─── */}
      <section className="py-16 bg-[#080D1A]">
        <div className="mx-auto max-w-[1100px] px-6">
          <h2 className="text-center text-2xl sm:text-3xl font-black text-white mb-10 uppercase">
            Why Choose <span className="text-cyan-400">NixaTV</span>?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl border border-indigo-500/20 bg-[#0C1222] px-5 py-4 shadow-xl"
                >
                  <Icon className="h-5 w-5 text-cyan-400 shrink-0" strokeWidth={2.5} />
                  <span className="text-xs font-bold text-white">{benefit.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="py-20 bg-gradient-to-r from-[#0C1222] via-[#10172D] to-[#0C1222] border-t border-indigo-500/20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase">
            Ready to Start Streaming?
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-300">
            Join thousands of satisfied customers. Get instant access to 50,000+ live channels, 150,000+ films &amp; series, and 200,000+ VODs in 4K/8K.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20NixaTV%20IPTV."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 px-8 py-3.5 text-xs font-black text-white uppercase tracking-wider shadow-lg shadow-indigo-500/30 transition-all hover:scale-105"
            >
              Get Free Trial <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-indigo-500/20 bg-white/5 px-8 py-3.5 text-xs font-black text-white uppercase tracking-wider hover:bg-white/10 transition-all"
            >
              View All Plans
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
