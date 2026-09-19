"use client";

import { Apple, Box, HelpCircle, Monitor, Satellite, Smartphone, Tv } from "lucide-react";
import { useState } from "react";

const devices = [
  { id: "smart-tv", label: "Smart TV", icon: Monitor, title: "Smart TV Setup (Samsung, LG, Sony, etc.)", app: "Smart IPTV or IPTV Smarters", note: "Samsung TVs commonly use Smart IPTV, while LG TVs can use IPTV Smarters or SS IPTV." },
  { id: "firestick", label: "Firestick", icon: Tv, title: "Firestick Setup", app: "IPTV Smarters Pro or TiviMate", note: "Install your preferred IPTV player from the Amazon Appstore, then sign in with the details from your welcome email." },
  { id: "android", label: "Android", icon: Smartphone, title: "Android Setup", app: "IPTV Smarters Pro or TiviMate", note: "Download your player from Google Play and use your supplied playlist details to sign in." },
  { id: "ios", label: "iOS", icon: Apple, title: "iPhone & iPad Setup", app: "IPTV Smarters Player", note: "Install a compatible player from the App Store and enter the credentials from your welcome email." },
  { id: "mag", label: "MAG Box", icon: Box, title: "MAG Box Setup", app: "Portal URL", note: "Send your MAG device MAC address to support so we can activate your portal before setup." },
  { id: "enigma", label: "Enigma2", icon: Satellite, title: "Enigma2 Setup", app: "XtreamTV or E-Channelizer", note: "Use a compatible Enigma2 plugin and add the playlist details supplied with your subscription." },
];

const faqs = [
  { question: "1. How do I install IPTV on a Smart TV?", answer: "Install a compatible player such as Smart IPTV or IPTV Smarters from your TV's app store, then add the M3U URL or Xtream credentials from your welcome email." },
  { question: "2. Where do I find my M3U URL?", answer: "Your M3U URL is included in the welcome email sent after activation. Contact support if you need it resent." },
  { question: "3. How can I reduce buffering?", answer: "Use a stable internet connection, restart your device and router, and select an appropriate quality setting for your connection." },
  { question: "4. How do I set up NixaTV using Xtream Codes API?", answer: "Choose Xtream Codes API in your player and enter the server URL, username, and password from your welcome email." },
  { question: "5. Can I connect using a MAC address (Portal URL)?", answer: "Yes. MAG and compatible portal devices can be activated using their MAC address. Send it to our support team for assistance." },
];

export default function DeviceSetupGuide() {
  const [activeDevice, setActiveDevice] = useState("smart-tv");
  const device = devices.find((item) => item.id === activeDevice) ?? devices[0];
  const DeviceIcon = device.icon;

  return (
    <section className="mb-16 md:mb-[100px] text-[#F8FAFC]">
      <header className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl uppercase">Device Setup Instructions</h2>
        <p className="mt-3 text-sm text-slate-400">Select your device below for tailored step-by-step setup guides.</p>
      </header>

      {/* Device Tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {devices.map((item) => {
          const Icon = item.icon;
          const active = item.id === activeDevice;
          return (
            <button 
              className={`inline-flex items-center gap-2.5 rounded-2xl border px-5 py-3 text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                active 
                  ? "border-indigo-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/30" 
                  : "border-indigo-500/20 bg-[#0C1222] text-slate-400 hover:border-cyan-400/40 hover:text-white hover:bg-white/5"
              }`} 
              key={item.id} 
              onClick={() => setActiveDevice(item.id)} 
              type="button"
            >
              <Icon className="h-4 w-4" />{item.label}
            </button>
          );
        })}
      </div>

      <article className="mx-auto max-w-[1000px] rounded-3xl border border-indigo-500/20 bg-[#0C1222] p-6 sm:p-10 shadow-2xl overflow-hidden">
        
        {/* Device Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 border-b border-indigo-500/20 pb-6 mb-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-cyan-400 border border-indigo-500/20 shrink-0">
            <DeviceIcon className="h-8 w-8" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-white sm:text-3xl">{device.title}</h3>
            <p className="mt-1 text-xs text-slate-400">Follow these exact steps to configure your {device.label} for NixaTV streaming.</p>
          </div>
        </div>
        
        {/* Important Note */}
        {device.note && (
          <div className="mb-8 rounded-2xl border border-indigo-500/30 bg-indigo-500/5 p-5 flex items-start gap-4">
            <HelpCircle className="h-6 w-6 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white mb-1 text-sm">Important Note</p>
              <p className="text-xs leading-relaxed text-slate-400">{device.note}</p>
            </div>
          </div>
        )}

        {/* Steps Grid */}
        <div className="space-y-6">
          <SetupStep 
            number="1" 
            title="Install IPTV App"
          >
            Navigate to your device's official app store, search for <strong className="text-white">{device.app}</strong>, and download the application directly.
          </SetupStep>
          
          <SetupStep 
            number="2" 
            title="Configure Playlist & Xtream Credentials"
          >
            Launch the app, open its settings menu, and enter the M3U playlist URL or Xtream Codes login details sent to your WhatsApp or Email.
            <div className="mt-4">
              <CodeLine label="M3U URL" text="Check your welcome email for your dedicated M3U URL & Xtream API Codes" />
            </div>
          </SetupStep>
          
          <SetupStep 
            number="3" 
            title="Start Streaming in 4K"
          >
            Save your settings and give the player a few seconds to load channel lists. Enjoy 50,000+ live channels and 150,000+ VODs immediately!
          </SetupStep>
        </div>
      </article>

      <div className="mx-auto mt-20 max-w-[1000px]">
        <h2 className="mb-8 text-center text-3xl font-black tracking-tight text-white sm:text-4xl uppercase">Installation FAQ</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((faq) => (
            <div className="flex flex-col rounded-2xl overflow-hidden border border-indigo-500/20 bg-[#0C1222] shadow-xl hover:border-cyan-400/40 transition-colors" key={faq.question}>
              <div className="bg-white/5 border-b border-indigo-500/20 px-6 py-4 flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                <h3 className="text-base font-bold text-white leading-snug">
                  {faq.question}
                </h3>
              </div>
              <div className="p-6 text-xs text-slate-400 leading-relaxed flex-1">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SetupStep({ children, number, title }: { children: React.ReactNode; number: string; title: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 bg-[#10172D] border border-indigo-500/20 p-6 sm:p-8 rounded-2xl shadow-xl hover:border-cyan-400/40 transition-colors">
      <div className="flex flex-1 gap-5 items-start">
         <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-400 text-base font-black text-white shadow-md">
           {number}
         </span>
         <div className="flex-1 mt-0.5">
           <h3 className="text-lg font-bold text-white">{title}</h3>
           <div className="mt-2 text-xs leading-relaxed text-slate-400">
             {children}
           </div>
         </div>
      </div>
    </div>
  );
}

function CodeLine({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-xl bg-[#05070E] border border-indigo-500/20 px-4 py-3 font-mono text-xs text-cyan-300 break-all">
      <span className="font-bold text-indigo-400 mr-2">{label}:</span> 
      {text}
    </div>
  );
}
