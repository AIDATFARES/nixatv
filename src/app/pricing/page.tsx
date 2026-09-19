import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "IPTV Subscription Plans & Deals 2026 – Instant Access | NixaTV",
  description: "Choose your 4K & 8K IPTV plan with NixaTV. Transparent pricing, instant credential delivery, multi-device access & 24/7 VIP support. Select your plan now!",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <main className="flex-grow pt-4 bg-[#05070E] bg-tech-grid bg-atmosphere text-[#F8FAFC]">
      <PricingPageContent />
    </main>
  );
}
