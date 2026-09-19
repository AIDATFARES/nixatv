"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, X, CreditCard, Headphones, HelpCircle, MonitorSmartphone, ShieldCheck, Sparkles, Tv, Zap, Bitcoin, Wallet } from "lucide-react";

type PlanFeature = {
  text: string;
  included: boolean;
};

type Plan = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  duration: string;
  saving?: string;
  popular?: boolean;
  features: PlanFeature[];
  buttonText: string;
};

const plans: Plan[] = [
  {
    id: "3-months",
    name: "NixaTV Basic",
    subtitle: "Perfect for testing our premium 4K & 8K streaming service.",
    price: 35,
    duration: "/ 3 Months",
    saving: "Save 22%",
    features: [
      { text: "HD/4K/8K Streaming Quality", included: true },
      { text: "Full EPG & Catchup Support", included: true },
      { text: "Anti-Freeze Technology v2.0", included: true },
      { text: "24/7 Standard Dedicated Support", included: true },
      { text: "Multi-device connection", included: false },
    ],
    buttonText: "Select Basic",
  },
  {
    id: "12-months",
    name: "NixaTV Ultimate",
    subtitle: "The ultimate entertainment pass with 2 bonus months free.",
    price: 69.99,
    oldPrice: 80,
    duration: "/ 12 Months",
    saving: "Save 61%",
    popular: true,
    features: [
      { text: "Premium Ultra HD/4K/8K 60FPS", included: true },
      { text: "Advanced EPG & 7-Day Catchup", included: true },
      { text: "Premium Anti-Freeze Tech v2.0", included: true },
      { text: "24/7 Priority VIP Support", included: true },
      { text: "Up to 3 simultaneous devices", included: true },
    ],
    buttonText: "Get Ultimate Pass",
  },
  {
    id: "6-months",
    name: "NixaTV Pro",
    subtitle: "A solid choice for half a year of uninterrupted streaming.",
    price: 49.99,
    duration: "/ 6 Months",
    saving: "Save 44%",
    features: [
      { text: "HD/4K/8K Streaming Quality", included: true },
      { text: "Full EPG & Catchup Support", included: true },
      { text: "Anti-Freeze Technology v2.0", included: true },
      { text: "24/7 Priority Support", included: true },
      { text: "Multi-device connection", included: false },
    ],
    buttonText: "Select Pro",
  },
];

const includedFeatures = [
  { icon: Tv, title: "+50,000 Channels", text: "Explore live channels from around the world, including sports, news and entertainment." },
  { icon: MonitorSmartphone, title: "200,000+ VODs", text: "Enjoy +150,000 Films & Series and a massive, regularly refreshed video-on-demand library." },
  { icon: Zap, title: "Anti-freeze Technology", text: "Optimized 60 FPS streaming technology helps deliver zero buffering even at peak times." },
  { icon: Headphones, title: "24/7 Support", text: "The NixaTV support team is here to help with setup and streaming questions anytime." },
  { icon: Sparkles, title: "Instant Setup", text: "Your NixaTV M3U playlist & Xtream credentials are delivered immediately upon checkout." },
  { icon: CreditCard, title: "TV Guide (EPG)", text: "Browse your channel schedule effortlessly with a full interactive electronic program guide." },
];

const billingQuestions = [
  { question: "1. Which payment methods can I use?", answer: <>Available payment options include PayPal, Credit/Debit Card, and Instant Crypto. <Link className="font-semibold text-cyan-400 hover:text-indigo-300 transition-colors" href="/contact">Contact NixaTV support</Link> if you need assistance before purchasing.</> },
  { question: "2. Is my payment protected?", answer: "All transactions are fully encrypted with 256-bit SSL protection. We never store raw payment details or auto-charge without consent." },
  { question: "3. Will my subscription renew automatically?", answer: <>NixaTV plans do NOT auto-bill. You control when and if you wish to extend your subscription. <Link className="font-semibold text-cyan-400 hover:text-indigo-300 transition-colors" href="/contact">Contact support</Link> anytime to extend.</> },
  { question: "4. Can I change my plan or number of connections?", answer: <>Yes! <Link className="font-semibold text-cyan-400 hover:text-indigo-300 transition-colors" href="/contact">Contact our 24/7 support team</Link> with your order email to upgrade your plan or add extra simultaneous device connections.</> },
];

export default function PricingPageContent() {
  const [devices, setDevices] = useState(1);
  const priceFor = (plan: Plan) => (plan.price * devices).toFixed(2);

  function handleOrder(plan: Plan) {
    const text = encodeURIComponent(
      `Hello! I would like to purchase the NixaTV ${plan.name} plan (${plan.duration}) with ${devices} device connection${devices > 1 ? "s" : ""} for $${priceFor(plan)}.`
    );
    window.open(`https://wa.me/213552069874?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative overflow-hidden bg-[#05070E] bg-tech-grid bg-atmosphere py-16 sm:py-20 lg:py-24 text-[#F8FAFC]">
      {/* Glow Backdrops */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-500/15 via-purple-500/10 to-transparent blur-3xl opacity-50" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-10">
        <header className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-[#0C1222] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" /> NIXATV IPTV PLANS
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
            <span className="block text-white uppercase">Premium IPTV Subscription</span>
            <span className="mt-2 block bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent uppercase">Plans &amp; Pricing</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">Choose the NixaTV IPTV subscription plan that fits your entertainment needs. Enjoy 50,000+ live channels, 150,000+ VOD movies, 60 FPS sports, and instant activation.</p>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-400">Need setup help? Check our <Link className="font-semibold text-cyan-400 hover:text-indigo-300" href="/installation">IPTV installation guide</Link> or explore our <Link className="font-semibold text-cyan-400 hover:text-indigo-300" href="/channels">IPTV channel catalog</Link> before placing your order.</p>
        </header>

        {/* Device Selector */}
        <div className="mx-auto mb-12 max-w-xl" role="radiogroup" aria-label="Number of device connections">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Choose Your Simultaneous Connections</p>
          <div className="grid grid-cols-3 rounded-2xl border border-indigo-500/20 bg-[#0C1222] p-1.5 shadow-2xl">
            {[1, 2, 3].map((count) => {
              const selected = devices === count;
              return (
                <button
                  aria-checked={selected}
                  className={`rounded-xl px-3 py-3 text-sm font-bold transition-all ${selected ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/30" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
                  key={count}
                  onClick={() => setDevices(count)}
                  role="radio"
                  type="button"
                >
                  {count} Device{count > 1 ? "s" : ""}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 items-stretch pt-4">
          {plans.map((plan) => (
            <article 
              key={plan.id}
              className={`relative flex flex-col rounded-3xl bg-[#0C1222] p-8 transition-all duration-300 hover:-translate-y-1.5 border ${
                plan.popular 
                  ? "border-indigo-500/60 shadow-[0_0_40px_rgba(99,102,241,0.3)] md:-mt-4 bg-gradient-to-b from-[#10172D] via-[#141D38] to-[#0C1222]" 
                  : "border-indigo-500/20 hover:border-cyan-400/50 shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 px-5 py-1.5 shadow-lg shadow-indigo-500/40 whitespace-nowrap">
                  <span className="text-[11px] font-black uppercase tracking-wider text-white">⭐ MOST POPULAR — BEST VALUE</span>
                </div>
              )}
              
              <h3 className="text-2xl font-black text-white">{plan.name}</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed min-h-[36px]">{plan.subtitle}</p>
              
              <div className="mt-6 flex items-baseline">
                <span className="text-5xl font-black tracking-tight text-white">${priceFor(plan)}</span>
                <span className="ml-2 text-xs font-bold text-slate-400 uppercase tracking-wider">{plan.duration}</span>
              </div>
              
              <div className="min-h-[24px] mt-2 flex items-center gap-2">
                {plan.saving && (
                  <span className="text-xs font-extrabold text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">{plan.saving}</span>
                )}
                {plan.oldPrice && (
                   <span className="text-xs font-semibold text-slate-500 line-through">${(plan.oldPrice * devices).toFixed(2)}</span>
                )}
              </div>

              <div className="my-6 border-t border-indigo-500/20" />

              <ul className="flex-grow space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {feature.included ? (
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" strokeWidth={2.5} />
                    ) : (
                      <X className="h-5 w-5 shrink-0 text-slate-600" strokeWidth={2.5} />
                    )}
                    <span className={`text-sm font-medium ${feature.included ? "text-slate-200" : "text-slate-600 line-through"}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button 
                type="button"
                onClick={() => handleOrder(plan)}
                className={`mt-8 w-full rounded-2xl py-4 text-sm font-black transition-all duration-300 ${
                  plan.popular 
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/30 hover:brightness-110 hover:scale-[1.02]" 
                    : "bg-white/10 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-400 text-white hover:text-white hover:scale-[1.02]"
                }`}
              >
                {plan.buttonText}
              </button>
            </article>
          ))}
        </div>

        {/* Bottom Security Banner */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl bg-[#0C1222] p-6 sm:p-8 shadow-2xl border border-indigo-500/20 border-l-4 border-l-cyan-400">
            <div>
              <p className="text-lg font-bold text-white">Instant Credential Delivery & 256-Bit SSL Encryption</p>
              <p className="mt-1 text-xs sm:text-sm text-slate-400">Pay safely via PayPal, Credit Card, or Crypto. Your NixaTV order setup details arrive instantly via WhatsApp &amp; Email.</p>
            </div>
            <div className="flex shrink-0 items-center gap-4 text-cyan-400">
              <CreditCard className="h-7 w-7" strokeWidth={1.5} />
              <Bitcoin className="h-7 w-7" strokeWidth={1.5} />
              <Wallet className="h-7 w-7" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <section className="mt-24">
          <h2 className="text-center text-3xl font-black text-white uppercase tracking-tight">Every Plan Includes</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {includedFeatures.map(({ icon: Icon, title, text }) => (
              <article className="rounded-3xl border border-indigo-500/20 bg-[#0C1222] p-6 text-center shadow-xl hover:border-cyan-400/40 transition-all duration-300" key={title}>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-cyan-400 border border-indigo-500/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-4xl">
          <h2 className="text-center text-3xl font-black text-white uppercase tracking-tight">Billing &amp; Subscription FAQ</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {billingQuestions.map((item) => (
              <div className="flex flex-col rounded-2xl overflow-hidden border border-indigo-500/20 bg-[#0C1222] shadow-xl hover:border-cyan-400/40 transition-colors" key={item.question}>
                <div className="bg-white/5 border-b border-indigo-500/20 px-6 py-4 flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                  <h3 className="text-base font-bold text-white leading-snug">
                    {item.question}
                  </h3>
                </div>
                <div className="p-6 text-xs text-slate-400 leading-relaxed flex-1">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="h-5 w-5 text-cyan-400" />
          <span className="font-semibold text-white">256-bit encrypted checkout</span> with instant NixaTV WhatsApp setup.
        </div>
      </div>
    </section>
  );
}
