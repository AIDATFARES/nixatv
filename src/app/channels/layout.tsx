import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IPTV Channel List 2026 – 50,000+ Live Sports & VOD | NixaTV",
  description: "Explore 50,000+ premium live channels and 150,000+ movies & TV series. Enjoy 60 FPS 4K Ultra HD streaming on all devices with NixaTV.",
  alternates: {
    canonical: "/channels",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
