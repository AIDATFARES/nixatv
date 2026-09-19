import type { Metadata } from "next";
import ChannelsContent from "@/components/channels/ChannelsContent";

export const metadata: Metadata = {
  title: "50,000+ Live IPTV Channels & 150,000+ VOD List | NixaTV",
  description: "Explore the complete NixaTV IPTV channel catalog. Stream over 50,000 live international channels, sports packages in 60 FPS, and 150,000+ 4K movies & series.",
  alternates: {
    canonical: "/channels",
  },
};

export default function ChannelsPage() {
  return <ChannelsContent />;
}
