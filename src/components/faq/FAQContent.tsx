"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, CircleHelp, Clock3, CreditCard, HelpCircle, Mail, MessageCircle, MonitorPlay, Send, Settings2, Sparkles, UserRound } from "lucide-react";

type Category = "About NixaTV" | "Setup & Streaming" | "Plans & Access" | "Payments & Support";

type FAQItem = {
  category: Category;
  question: string;
  answer: React.ReactNode;
};

const categories: { label: Category; icon: typeof CircleHelp }[] = [
  { label: "About NixaTV", icon: CircleHelp },
  { label: "Setup & Streaming", icon: Settings2 },
  { label: "Plans & Access", icon: UserRound },
  { label: "Payments & Support", icon: CreditCard },
];

const faqs: FAQItem[] = [
  {
    category: "About NixaTV",
    question: "1. What is NixaTV?",
    answer: (
      <>
        NixaTV is a premium IPTV service offering 50,000+ live channels, VOD movies, TV series, and sports channels in 60 FPS 4K/8K Ultra HD quality. Check out our{" "}
        <Link href="/channels" className="text-cyan-400 font-semibold hover:text-indigo-300 transition-colors">live TV channels</Link> and{" "}
        <Link href="/pricing" className="text-cyan-400 font-semibold hover:text-indigo-300 transition-colors">IPTV subscription plans</Link>.
      </>
    ),
  },
  {
    category: "About NixaTV",
    question: "2. Is NixaTV authorized?",
    answer: (
      <>
        NixaTV is intended to be used in accordance with applicable laws, local regulations, and our service terms. Please ensure that the content you access and the way you use the service are permitted in your location.
      </>
    ),
  },
  {
    category: "About NixaTV",
    question: "3. What channels and content are included with NixaTV?",
    answer: (
      <>
        NixaTV includes a broad selection of live channels covering sports, news, and entertainment, along with a regularly updated 150,000+ video-on-demand library. Check our <Link href="/channels" className="text-cyan-400 font-semibold hover:text-indigo-300 transition-colors">full channels catalog</Link>.
      </>
    ),
  },
  {
    category: "About NixaTV",
    question: "4. Can I watch live sports and PPV events on NixaTV?",
    answer: (
      <>
        Yes! NixaTV includes full access to live sports and Pay-Per-View events, including Premier League, NFL Sunday Ticket, NBA League Pass, UFC, and Boxing mega-fights in 60 FPS 4K.
      </>
    ),
  },
  {
    category: "About NixaTV",
    question: "5. Which devices can I use?",
    answer: (
      <>
        NixaTV works on Smart TVs (Samsung, LG, Sony), Firestick, Android TV, Apple TV, MAG, Enigma2, iOS, Android, and Windows. Follow our <Link href="/installation" className="text-cyan-400 font-semibold hover:text-indigo-300 transition-colors">installation guides</Link> to get started.
      </>
    ),
  },
  {
    category: "Setup & Streaming",
    question: "1. How do I install NixaTV on my device?",
    answer: (
      <>
        Start by installing a compatible IPTV player on your device (TiviMate, IPTV Smarters, etc.). Enter the NixaTV credentials sent to your WhatsApp and email. View our step-by-step <Link href="/installation" className="text-cyan-400 font-semibold hover:text-indigo-300 transition-colors">installation guides</Link>.
      </>
    ),
  },
  {
    category: "Setup & Streaming",
    question: "2. Can I use NixaTV on a Smart TV?",
    answer: (
      <>
        Yes! NixaTV works seamlessly on Samsung (Tizen), LG (webOS), Android TV, and Fire TV using players like Smart IPTV, IPTV Smarters Pro, or TiviMate.
      </>
    ),
  },
  {
    category: "Setup & Streaming",
    question: "3. What internet speed do I need for smooth NixaTV streaming?",
    answer: (
      <>
        We recommend at least 15 Mbps for 1080p HD and 30 Mbps for 60 FPS 4K Ultra HD. An Ethernet connection or 5 GHz Wi-Fi provides the optimal buffer-free experience.
      </>
    ),
  },
  {
    category: "Setup & Streaming",
    question: "4. Why is NixaTV buffering or freezing?",
    answer: (
      <>
        Buffering is typically caused by Wi-Fi interference, ISP bandwidth throttling, or cache buildup. Switching to Ethernet, rebooting your router, or using a VPN usually resolves the issue.
      </>
    ),
  },
  {
    category: "Setup & Streaming",
    question: "5. Can I use a VPN with NixaTV?",
    answer: (
      <>
        Yes. NixaTV has zero IP lock and is 100% compatible with top VPN providers (ExpressVPN, NordVPN, Surfshark) to bypass ISP throttling.
      </>
    ),
  },
  {
    category: "Plans & Access",
    question: "1. Can I watch on multiple devices at the same time?",
    answer: (
      <>
        Yes. Standard plans include 1 connection, but you can choose multi-connection options during checkout on our <Link href="/pricing" className="text-cyan-400 font-semibold hover:text-indigo-300 transition-colors">pricing page</Link> to stream on up to 3 screens simultaneously.
      </>
    ),
  },
  {
    category: "Plans & Access",
    question: "2. Do subscriptions renew automatically?",
    answer: (
      <>
        No. NixaTV operates on a non-recurring pre-paid model. You have complete control and are never automatically rebilled without your consent.
      </>
    ),
  },
  {
    category: "Plans & Access",
    question: "3. How fast will I receive my login details?",
    answer: (
      <>
        Account activation is automated. Your M3U playlist, Xtream Codes credentials, and setup instructions will arrive via WhatsApp and email within 3 to 5 minutes after order completion.
      </>
    ),
  },
  {
    category: "Payments & Support",
    question: "1. Which payment methods do you accept?",
    answer: (
      <>
        We accept major Credit/Debit Cards, PayPal, Bitcoin, USDT, and popular cryptocurrencies through secure payment gateways.
      </>
    ),
  },
  {
    category: "Payments & Support",
    question: "2. Is there a money-back guarantee?",
    answer: (
      <>
        Yes. We offer a 7-day satisfaction guarantee. If our technical support cannot resolve an issue with your service, you are eligible for a refund per our refund policy.
      </>
    ),
  },
  {
    category: "Payments & Support",
    question: "3. How can I contact customer support?",
    answer: (
      <>
        Our technical support team is available 24/7 via WhatsApp and email. Visit our <Link href="/contact" className="text-cyan-400 font-semibold hover:text-indigo-300 transition-colors">contact page</Link> to get instant help.
      </>
    ),
  },
];

export default function FAQContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("About NixaTV");
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  function selectCategory(category: Category) {
    setActiveCategory(category);
    setActiveIndex(0);
  }

  const visibleFaqs = faqs.filter((faq) => faq.category === activeCategory);

  function sendSupportMessage(formData: FormData) {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "FAQ Help").trim();
    const message = String(formData.get("message") || "").trim();
    const text = encodeURIComponent(`Hello NixaTV support,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`);
    window.open(`https://wa.me/213552069874?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-[#05070E] bg-tech-grid bg-atmosphere text-[#F8FAFC] pt-16 pb-24 relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-500/15 via-purple-500/10 to-transparent blur-3xl opacity-50" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-12 relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-[#0C1222] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" /> NIXATV HELP CENTER
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight uppercase">
            <span className="block text-white">Frequently Asked</span>
            <span className="mt-2 block bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">Questions &amp; Answers</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300">
            Find quick answers to common questions about NixaTV IPTV service, including{" "}
            <Link href="/pricing" className="text-cyan-400 font-semibold hover:text-indigo-300 transition-colors">IPTV subscription plans</Link>,{" "}
            <Link href="/installation" className="text-cyan-400 font-semibold hover:text-indigo-300 transition-colors">device setup tutorials</Link>, 60 FPS 4K/8K streaming performance, and instant credential delivery.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[260px_minmax(0,1fr)] md:gap-10">
          <aside aria-label="FAQ categories" className="md:sticky md:top-28 md:self-start">
            <div className="rounded-3xl border border-indigo-500/20 bg-[#0C1222] p-3 shadow-2xl">
              <div className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0">
                {categories.map(({ label, icon: Icon }) => {
                  const isSelected = activeCategory === label;
                  return (
                    <button
                      aria-pressed={isSelected}
                      className={`flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3.5 text-left text-xs font-extrabold uppercase tracking-wider transition-all md:w-full ${
                        isSelected
                          ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/30"
                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }`}
                      key={label}
                      onClick={() => selectCategory(label)}
                      type="button"
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          <section aria-live="polite" className="space-y-4">
            <div className="mb-6 flex items-center gap-3">
              <MonitorPlay className="h-5 w-5 text-cyan-400" />
              <h2 className="text-xl font-black text-white uppercase">{activeCategory}</h2>
            </div>
            <div className="grid grid-cols-1 gap-5">
              {visibleFaqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                const contentId = `faq-${activeCategory.replaceAll(" ", "-").toLowerCase()}-${index}`;

                return (
                  <article className="flex flex-col rounded-3xl overflow-hidden border border-indigo-500/20 bg-[#0C1222] shadow-xl hover:border-cyan-400/40 transition-colors" key={faq.question}>
                    {/* Header Banner */}
                    <div className="bg-white/5 border-b border-indigo-500/20 px-6 py-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                        <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                      <button
                        aria-controls={contentId}
                        aria-expanded={isOpen}
                        className="text-slate-400 hover:text-white transition-colors"
                        onClick={() => setActiveIndex(isOpen ? null : index)}
                        type="button"
                      >
                        <ChevronDown className={`h-5 w-5 shrink-0 text-cyan-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>

                    {/* Answer Content */}
                    <div className="p-6 text-xs sm:text-sm text-slate-400 leading-relaxed flex-1 bg-[#0C1222]" id={contentId}>
                      <p>{faq.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>

        <section className="mt-24 border-t border-indigo-500/20 pt-16 sm:pt-20">
          <header className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-white uppercase">Get in Touch with Our 24/7 Team</h2>
            <p className="mt-3 text-xs leading-6 text-slate-400">We&apos;re here to help you get the best 4K/8K IPTV experience. Send us a message and we&apos;ll reply instantly.</p>
          </header>
          
          <div className="mt-10 grid gap-8 xl:grid-cols-[280px_minmax(0,1fr)] xl:gap-10">
            <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              <a className="flex min-h-40 flex-col items-center justify-center rounded-3xl border border-indigo-500/20 bg-[#0C1222] p-6 text-center transition-all hover:border-cyan-400/50 shadow-xl" href="mailto:support@nixatv.pro">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-cyan-400 border border-indigo-500/20"><Mail className="h-5 w-5" /></span>
                <span className="mt-4 block text-base font-bold text-white">Email Us</span>
                <span className="mt-2 block text-xs text-slate-400">For general inquiries and setup.</span>
                <span className="mt-3 block text-xs font-semibold text-cyan-400">support@nixatv.pro</span>
              </a>
              
              <a className="flex min-h-40 flex-col items-center justify-center rounded-3xl border border-indigo-500/20 bg-[#0C1222] p-6 text-center transition-all hover:border-cyan-400/50 shadow-xl" href="https://wa.me/213552069874?text=Hello%20NixaTV%20IPTV%20support%2C%20I%20need%20help." rel="noreferrer" target="_blank">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-cyan-400 border border-indigo-500/20"><MessageCircle className="h-5 w-5" /></span>
                <span className="mt-4 block text-base font-bold text-white">WhatsApp 24/7</span>
                <span className="mt-2 block text-xs text-slate-400">Fastest way to get instant activation.</span>
                <span className="mt-3 block text-xs font-extrabold text-cyan-400">Start WhatsApp Chat →</span>
              </a>
              
              <div className="flex min-h-40 flex-col items-center justify-center rounded-3xl border border-indigo-500/20 bg-[#0C1222] p-6 text-center shadow-xl">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"><Clock3 className="h-5 w-5" /></span>
                <span className="mt-4 block text-base font-bold text-white">Response Time</span>
                <span className="mt-2 block text-xs text-slate-400">Under <strong className="text-white">5 minutes</strong> via WhatsApp 24/7.</span>
              </div>
            </div>

            <div className="rounded-3xl border border-indigo-500/20 bg-[#0C1222] p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl font-black text-white uppercase">Send Us a Direct Message</h3>
              <form action={sendSupportMessage} className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Your Name
                    <input className="mt-2 w-full rounded-2xl border border-indigo-500/20 bg-[#05070E] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-400" name="name" placeholder="John Doe" required />
                  </label>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address
                    <input className="mt-2 w-full rounded-2xl border border-indigo-500/20 bg-[#05070E] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-400" name="email" placeholder="john@example.com" required type="email" />
                  </label>
                </div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Subject
                  <input className="mt-2 w-full rounded-2xl border border-indigo-500/20 bg-[#05070E] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-400" name="subject" placeholder="How can we help you?" />
                </label>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Message
                  <textarea className="mt-2 min-h-32 w-full resize-y rounded-2xl border border-indigo-500/20 bg-[#05070E] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-400" name="message" placeholder="Describe your inquiry..." required />
                </label>
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 py-4 text-xs font-black text-white uppercase tracking-wider shadow-lg shadow-indigo-500/30 transition-all hover:scale-[1.01]" type="submit">
                  <Send className="h-4 w-4" />Send Message via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

