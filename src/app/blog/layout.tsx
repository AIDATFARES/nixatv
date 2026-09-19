import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IPTV Blog – Streaming Guides, Tips & News | NixaTV",
  description: "Read the latest IPTV news, setup tutorials, and streaming tips on the NixaTV blog. Enhance your viewing experience with our expert cord-cutting guides.",
  alternates: {
    canonical: "/blog",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
