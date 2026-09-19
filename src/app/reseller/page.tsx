import ResellerPageContent from "@/components/reseller/ResellerPageContent";

export const metadata = {
  title: "IPTV Reseller Panel & Packages – High Margin Profit | NixaTV",
  description: "Start a profitable IPTV business with NixaTV Reseller Panel. Unmatched server stability, automated credit delivery, custom branding & 24/7 reseller support.",
  alternates: {
    canonical: "/reseller",
  },
};

export default function ResellerPage() {
  return (
    <main className="flex-grow pt-4 bg-[#05070E] bg-tech-grid bg-atmosphere text-[#F8FAFC]">
      <ResellerPageContent />
    </main>
  );
}
