import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Service Not Available",
  description: "This service is no longer offered.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Service Not Available",
    description: "This service is no longer offered.",
    url: `${siteConfig.url}/kitchen-remodeling`,
  },
};

export default function LegacyServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
