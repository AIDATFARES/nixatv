import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 240, 320],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog/tvapp-tvpass-shutdown-2026",
        destination: "/blog/thetvapp-tvpass-not-working-2026",
        permanent: true,
      },
      {
        source: "/blog/tvpass-no-longer-works-2026",
        destination: "/blog/tvpass-down-migration-guide",
        permanent: true,
      },
      {
        source: "/blog/internet-speed-for-iptv",
        destination: "/blog/internet-speed-for-iptv-guide",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-apps-firestick-2026",
        destination: "/blog/best-iptv-apps-for-firestick",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-apps-smart-tv-2026",
        destination: "/blog/best-iptv-apps-for-smart-tv",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
