import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Support 24/7 – Instant WhatsApp & Email Help | NixaTV",
  description: "Need immediate setup or technical assistance? Contact our 24/7 support team via WhatsApp or email for instant account activation & customer support.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
