import type { Metadata } from "next";
import FAQContent from "@/components/faq/FAQContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | NixaTV IPTV Service",
  description: "Frequently asked questions about NixaTV IPTV. Learn about device compatibility, 60 FPS 4K streaming, anti-freeze technology, payment options, and setup.",
  alternates: {
    canonical: "/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is NixaTV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NixaTV is a premium IPTV service offering 50,000+ live channels, VOD movies, TV series, and sports channels in 60 FPS 4K/8K Ultra HD quality.",
      },
    },
    {
      "@type": "Question",
      name: "Can I watch live sports and PPV events on NixaTV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! NixaTV includes full access to live sports and Pay-Per-View events, including Premier League, NFL Sunday Ticket, NBA League Pass, UFC, and Boxing mega-fights in 60 FPS 4K.",
      },
    },
    {
      "@type": "Question",
      name: "Which devices can I use with NixaTV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NixaTV works on Smart TVs (Samsung, LG, Sony), Amazon Firestick, Android TV, Apple TV, MAG, iOS, Android, and Windows PC.",
      },
    },
    {
      "@type": "Question",
      name: "What internet speed do I need for smooth NixaTV streaming?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend at least 15 Mbps for 1080p HD and 30 Mbps for 60 FPS 4K Ultra HD streaming.",
      },
    },
    {
      "@type": "Question",
      name: "How fast will I receive my login details?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Account activation is automated. Your M3U playlist, Xtream Codes credentials, and setup instructions will arrive via WhatsApp and email within 3 to 5 minutes after order completion.",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQContent />
    </>
  );
}
