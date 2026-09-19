import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy | NixaTV",
  description: "Read the official NixaTV refund policy. Learn about our 7-day money-back guarantee, refund eligibility, and how to request a secure refund for your IPTV subscription.",
  alternates: {
    canonical: "/refund-policy",
  },
};

const sections = [
  {
    title: "Our Commitment to You",
    content: [
      "At NixaTV, we uphold the highest standard of our 4K & 8K IPTV subscription service. This policy specifies when refunds may be applicable, ensuring that we maintain a transparent and just process for every customer.",
    ],
  },
  {
    title: "Refund Eligibility",
    content: ["You could be entitled to a total or partial refund in the following cases:"],
    items: [
      "Technical Failures: Service is completely non-functional on your compatible device for 72+ consecutive hours due to a fault on our side.",
      "Duplicate Payments: Accidental duplicate charge for the same subscription period.",
      "Initial 7 Day Window for new customers: Request within 7 days of first purchase after attempting support-led troubleshooting.",
    ],
  },
  {
    title: "How to Request a Refund",
    content: ["To seek a refund, kindly follow these steps:"],
    items: [
      <>Connect with our support team using our <Link className="font-bold text-cyan-400 hover:text-indigo-300 transition-colors" href="/contact">Contact page</Link>.</>,
      "Please use the subject: 'Refund Request'.",
      "Please provide your complete name, the email linked to your subscription, and the purpose of your inquiry.",
    ],
  },
  {
    title: "Sample Refund Request Message",
    content: [
      <>Contact: Send a message via our <Link className="font-bold text-cyan-400 hover:text-indigo-300 transition-colors" href="/contact">Contact page</Link></>,
      "Message Title: Refund Request",
      "Hello,",
      "I am writing to ask for a refund regarding my NixaTV IPTV subscription.",
      "My Name: [Your Full Name]",
      "My Email: [Your Subscription Email]",
      "Reason for Refund: [Concise explanation of your concern, for example, technical errors, billing duplicates, etc.]",
      "Thank you.",
    ],
  },
  {
    title: "What We Need to Process Your Refund",
    content: [],
    items: [
      "Account email used at checkout",
      "Order/transaction ID from payment receipt",
      "Brief reason and steps already tried with support",
      "Device/app details (e.g., Firestick + IPTV Smarters)",
    ],
  },
  {
    title: "Processing Timeline",
    content: [],
    items: [
      "0–3 business days: Technical analysis executed by support team",
      "Same day after approval: Refund initiated returning funds to your original payment method.",
      "5–10 business days: Funds manifest according to bank/card issuer.",
    ],
    after: "Expect to receive an email update at every step. Response times may increase on weekends or holidays.",
  },
  {
    title: "Exceptions (When Refunds Are Not Provided)",
    content: ["Refunds will be denied in these outlined cases:"],
    items: [
      <>You are discontent with the <Link className="font-bold text-cyan-400 hover:text-indigo-300 transition-colors" href="/channels">channel list</Link> or provided content.</>,
      "Your internet connection speed is too slow or unstable to stream effectively.",
      "Your actions have breached our Terms of Service, including unauthorized account sharing.",
      "Geo-blocking issues in your local network region outside our control.",
    ],
  },
  {
    title: "How to Avoid Refund Requests",
    content: [],
    items: [
      "Check Compatibility: Confirm your device/app supports M3U/Portal before purchase.",
      "Stable Internet: Use 30 Mbps+ and Ethernet or 5GHz Wi-Fi for 4K streaming.",
      <>Use Setup Guides: Follow our step-by-step <Link className="font-bold text-cyan-400 hover:text-indigo-300 transition-colors" href="/installation">Installation page</Link>.</>,
      <>Ask Support First: Most issues are solved in minutes—please <Link className="font-bold text-cyan-400 hover:text-indigo-300 transition-colors" href="/contact">contact support</Link>.</>,
    ],
  },
];

export default function RefundPolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  
  return (
    <main className="min-h-screen bg-[#05070E] bg-tech-grid bg-atmosphere text-[#F8FAFC] px-5 pb-20 pt-16 sm:px-8 relative z-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-500/15 via-purple-500/10 to-transparent blur-3xl opacity-50" />

      <article className="mx-auto max-w-4xl relative z-10">
        <header className="border-b border-indigo-500/20 pb-10 text-center mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-[#0C1222] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400 mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Legal Guarantee
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight uppercase">
            <span className="block text-white">Refund &amp; Money-Back</span>
            <span className="mt-2 block bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">Official Policy</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-400">Last adjusted: {currentDate}</p>
        </header>

        <div className="mt-10 space-y-10 text-xs sm:text-sm leading-relaxed text-slate-400">
          {sections.map((section, index) => (
            <section key={section.title} className="bg-[#0C1222] border border-indigo-500/20 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">{index + 1}. {section.title}</h2>
              {section.content.map((paragraph, i) => <p className="mt-3" key={i}>{paragraph}</p>)}
              {section.items && section.items.length > 0 && <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-cyan-400">{section.items.map((item, i) => <li key={i}>{item}</li>)}</ul>}
              {section.after && <p className="mt-3">{section.after}</p>}
            </section>
          ))}
          <section className="bg-[#0C1222] border border-indigo-500/20 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h2 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">9. Contact Us</h2>
            <p className="mt-3">If you have any questions regarding our Refund Policy, please contact our <Link className="font-bold text-cyan-400 hover:text-indigo-300 transition-colors" href="/contact">support team</Link> or email support@nixatv.pro.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
