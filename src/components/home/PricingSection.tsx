"use client";

import { useState } from "react";
import { CheckCircle2, CreditCard, Bitcoin, Wallet, Sparkles, ShieldCheck, Zap } from "lucide-react";

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
    id: "1-month",
    name: "1 Month Pass",
    subtitle: "Ideal for testing our premium 4K & 8K IPTV with zero commitment.",
    price: 14.99,
    duration: "/ 1 Month",
    features: [
      { text: "50,000+ Live Worldwide Channels", included: true },
      { text: "150,000+ Movies & Series VOD", included: true },
      { text: "60 FPS Anti-Freeze v2.0", included: true },
      { text: "All Sports & PPV Events Included", included: true },
      { text: "24/7 Dedicated Tech Support", included: true },
    ],
    buttonText: "Start 1 Month Plan",
  },
  {
    id: "3-months",
    name: "3 Months Pass",
    subtitle: "Great quarterly choice for uninterrupted sports & movies.",
    price: 34.99,
    oldPrice: 45,
    duration: "/ 3 Months",
    saving: "Save 22%",
    features: [
      { text: "50,000+ Live Worldwide Channels", included: true },
      { text: "150,000+ Movies & Series VOD", included: true },
      { text: "60 FPS Anti-Freeze v2.0", included: true },
      { text: "All Sports & PPV Events Included", included: true },
      { text: "24/7 Priority Support", included: true },
    ],
    buttonText: "Start 3 Months Plan",
  },
  {
    id: "6-months",
    name: "6 Months Pass",
    subtitle: "Semi-annual plan offering max value for households.",
    price: 49.99,
    oldPrice: 75,
    duration: "/ 6 Months",
    saving: "Save 44%",
    features: [
      { text: "50,000+ Live Worldwide Channels", included: true },
      { text: "150,000+ Movies & Series VOD", included: true },
      { text: "60 FPS Anti-Freeze v2.0", included: true },
      { text: "All Sports & PPV Events Included", included: true },
      { text: "24/7 VIP Support", included: true },
    ],
    buttonText: "Start 6 Months Plan",
  },
  {
    id: "12-months",
    name: "12 Months Pass",
    subtitle: "Our top-tier package + 2 extra months free included.",
    price: 69.99,
    oldPrice: 120,
    duration: "/ 12 Months",
    saving: "Save 61% + 2 Mo Free",
    popular: true,
    features: [
      { text: "50,000+ Live Worldwide Channels", included: true },
      { text: "150,000+ Movies & Series VOD", included: true },
      { text: "60 FPS Anti-Freeze v2.0 Ultra", included: true },
      { text: "All Sports & PPV Events Included", included: true },
      { text: "24/7 Dedicated VIP Support", included: true },
      { text: "Bonus Device Backup Slot", included: true },
    ],
    buttonText: "Claim 12 Months Deal",
  },
];

export default function PricingSection() {
  const [devices, setDevices] = useState(1);

  const priceFor = (plan: Plan) => (plan.price * devices).toFixed(2);

  function handleOrder(plan: Plan) {
    const text = encodeURIComponent(
      `Hello! I would like to order the NixaTV ${plan.name} (${plan.duration}) with ${devices} device connection${devices > 1 ? "s" : ""} for $${priceFor(plan)}.`
    );
    window.open(`https://wa.me/213552069874?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="pricing" className="relative bg-[#05070E] bg-tech-grid bg-atmosphere py-24 border-t border-indigo-500/20 overflow-hidden">
      
      {/* Background glow for pricing section */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center mb-12 space-y-4">
          <span className="inline-flex items-center gap-2 border border-indigo-500/30 rounded-full px-4 py-1 bg-[#0C1222] text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> TRANSPARENT NIXATV SUBSCRIPTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Choose Your <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">NixaTV IPTV</span> Subscription Plan
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            No contracts or hidden hardware costs. Instant automated activation within 3 minutes for Smart TV, Firestick, Android, and Apple TV.
          </p>
        </header>

        {/* Device Connections Selector */}
        <div className="mx-auto mb-12 max-w-xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
            Select Simultaneous Device Connections:
          </p>
          <div className="grid grid-cols-3 rounded-2xl border border-indigo-500/20 bg-[#0C1222] p-1.5 shadow-lg">
            {[1, 2, 3].map((count) => {
              const selected = devices === count;
              return (
                <button
                  key={count}
                  onClick={() => setDevices(count)}
                  type="button"
                  className={`rounded-xl px-3 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                    selected
                      ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white shadow-md shadow-indigo-500/30"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {count} Device{count > 1 ? "s" : ""}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-2">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`nixa-card p-6 flex flex-col justify-between relative transition-all duration-300 ${
                plan.popular
                  ? "border-indigo-500/50 shadow-[0_0_40px_rgba(99,102,241,0.3)] bg-[#10172D]"
                  : "bg-[#0C1222]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-black text-[10px] uppercase tracking-widest px-4 py-1 rounded-full shadow-lg shadow-indigo-500/40 whitespace-nowrap">
                  ⭐ MOST POPULAR DEAL
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  {plan.saving && (
                    <span className="text-[10px] font-bold bg-indigo-500/20 text-cyan-300 border border-indigo-500/30 px-2 py-0.5 rounded-full">
                      {plan.saving}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed min-h-[36px] mb-4">
                  {plan.subtitle}
                </p>

                {/* Price Display */}
                <div className="my-4 pb-4 border-b border-indigo-500/20">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">${priceFor(plan)}</span>
                    <span className="text-xs text-slate-400 font-medium">{plan.duration}</span>
                  </div>
                  {plan.oldPrice && (
                    <div className="text-xs text-slate-500 line-through mt-1">
                      Was ${(plan.oldPrice * devices).toFixed(2)}
                    </div>
                  )}
                </div>

                {/* Feature Bullet List */}
                <ul className="space-y-3 my-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => handleOrder(plan)}
                className={`w-full mt-6 py-3 rounded-full text-xs font-bold transition-all ${
                  plan.popular
                    ? "btn-primary"
                    : "btn-secondary text-white"
                }`}
              >
                {plan.buttonText}
              </button>
            </article>
          ))}
        </div>

        {/* Security & Guarantee Trust Bar */}
        <div className="mt-12 max-w-3xl mx-auto border border-indigo-500/20 rounded-2xl bg-[#0C1222] p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-cyan-400 shrink-0" />
            <div className="text-left">
              <span className="font-bold text-white block">100% Risk-Free Guarantee</span>
              <span className="text-slate-400">Instant automated key delivery via WhatsApp & Email.</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <CreditCard className="w-6 h-6 hover:text-white transition-colors" />
            <Bitcoin className="w-6 h-6 hover:text-white transition-colors" />
            <Wallet className="w-6 h-6 hover:text-white transition-colors" />
          </div>
        </div>

      </div>
    </section>
  );
}
