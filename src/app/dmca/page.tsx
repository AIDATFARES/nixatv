import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Disclaimer & DMCA | NixaTV",
  description: "Read the official NixaTV Legal Disclaimer and DMCA notice. Find information about copyright compliance and our content hosting policies.",
  alternates: {
    canonical: "/dmca",
  },
};

const sections = [
  {
    title: "No Legal Advice",
    content: [
      "Nothing presented on this website or in our communications serves as legal or compliance counsel. If you have questions about IPTV legality in your jurisdiction, consult a qualified attorney.",
    ],
  },
  {
    title: "Content Ownership and Hosting",
    content: [
      "NixaTV does not possess, manage, upload, store, or distribute copyrighted materials. All streams available via your account are sourced from external parties on the public internet. Mentions of channels, logos, or trademarks are solely for identification purposes and are owned by their respective entities.",
    ],
  },
  {
    title: "Availability and Service Changes",
    content: [
      <>Channel and VOD options may vary in availability, quality (including 4K/FHD/HD), features, plans, and <Link className="font-bold text-cyan-400 hover:text-indigo-300 transition-colors" href="/pricing">pricing</Link>, and can be modified or removed by region without prior notification. We do not assure the availability of any particular <Link className="font-bold text-cyan-400 hover:text-indigo-300 transition-colors" href="/channels">channel</Link>, event, or title.</>,
    ],
  },
  {
    title: "User Responsibility and Compliance",
    content: [
      "You are entirely accountable for your account usage and for following all relevant local laws and regulations. Avoid any actions with the service that could infringe on third-party rights.",
    ],
  },
  {
    title: "Third‑Party Links and Services",
    content: [
      "Our site could have links to third-party websites, applications, or services. We do not oversee and are not responsible for the content, policies, or practices of these third-party entities.",
    ],
  },
  {
    title: "No Warranties",
    content: [
      "THE SERVICE AND WEBSITE ARE OFFERED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "NixaTV, its owners, affiliates, employees, and agents shall not be liable to the fullest extent permitted by law for any indirect, incidental, special, consequential, or punitive damages.",
    ],
  },
  {
    title: "Indemnification",
    content: [
      "You agree to defend, indemnify, and shield NixaTV from any claims, liabilities, damages, losses, and expenses related to your use of the service or any infringement of this disclaimer.",
    ],
  },
  {
    title: "DMCA Takedown",
    content: [
      "In the event that you are a copyright owner or an agent and believe that content reachable through our service infringes your copyright, send a notice with the following information:",
    ],
    items: [
      "Identification of the work claimed to be infringed.",
      "Specify the exact location, like a URL or channel name, of the material you assert is infringing.",
      "Your name, organization (if relevant), address, phone number, and email.",
      "A statement affirming your honest belief that the disputed usage is not sanctioned by the copyright holder, their agent, or legal regulations.",
      "A perjury-penalized statement indicating that the information in the notice is accurate and that you are authorized to represent the owner's interests.",
      "Physical or electronic signature of the copyright owner or authorized representative.",
    ],
    after: "Submit DMCA notices via our Contact form. Valid notifications will be examined and processed promptly.",
  },
  {
    title: "Changes to This Disclaimer",
    content: [
      "This disclaimer might be updated from time to time. Continued use of this site or service after changes indicates your acceptance of the revised terms.",
    ],
  },
];

export default function DmcaPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  
  return (
    <main className="min-h-screen bg-[#05070E] bg-tech-grid bg-atmosphere text-[#F8FAFC] px-5 pb-20 pt-16 sm:px-8 relative z-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-500/15 via-purple-500/10 to-transparent blur-3xl opacity-50" />

      <article className="mx-auto max-w-4xl relative z-10">
        <header className="border-b border-indigo-500/20 pb-10 text-center mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-[#0C1222] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400 mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Legal Notice
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight uppercase">
            <span className="block text-white">Legal Disclaimer</span>
            <span className="mt-2 block bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">&amp; DMCA Policy</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-400">Last updated: {currentDate}</p>
        </header>

        <div className="mt-10 space-y-10 text-xs sm:text-sm leading-relaxed text-slate-400">
          <div className="space-y-4">
            <p>Content featured on this website is meant for general informational use. By engaging with our site or services, you agree to this disclaimer.</p>
            <div className="rounded-3xl border border-indigo-500/30 bg-indigo-500/10 p-6 text-xs text-white">
              <strong className="text-cyan-400">Important Notice:</strong> NixaTV delivers an intuitive IPTV service interface alongside account provisioning. We do not host, upload, store, or archive any audiovisual content. The details on this site are provided &apos;as is&apos; for general guidance.
            </div>
          </div>

          {sections.map((section, index) => (
            <section key={section.title} className="bg-[#0C1222] border border-indigo-500/20 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">{index + 1}. {section.title}</h2>
              {section.content.map((paragraph, i) => <p className="mt-3" key={i}>{paragraph}</p>)}
              {section.items && section.items.length > 0 && <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-cyan-400">{section.items.map((item, i) => <li key={i}>{item}</li>)}</ul>}
              {section.after && <p className="mt-3">{section.after}</p>}
            </section>
          ))}
          
          <section className="bg-[#0C1222] border border-indigo-500/20 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h2 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">11. Contact</h2>
            <p className="mt-3">For any inquiries, refer to our Terms of Service and <Link className="font-bold text-cyan-400 hover:text-indigo-300 transition-colors" href="/privacy-policy">Privacy Policy</Link>, or contact <Link className="font-bold text-cyan-400 hover:text-indigo-300 transition-colors" href="/contact">support</Link>.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
