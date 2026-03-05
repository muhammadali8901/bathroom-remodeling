import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Best Bathroom Remodel Company Near Me in Gilbert, Arizona | Expert Renovation Services",
  description:
    "Looking for bathroom remodelers near me? Transform your bathroom with our expert remodeling services in Gilbert, Arizona. Bathroom remodel financing near me available. Custom showers, tub conversions, vanities & more. Free estimates!",
  keywords: [
    "best bathroom remodel company near me",
    "bathroom remodelers near me",
    "bathroom remodel financing near me",
    "handicap bathroom remodel contractors near me",
    "commercial bathroom remodel contractors near me",
    "bathroom remodel in a day near me",
    "Bathroom Remodeling Gilbert Arizona",
    "Bathroom Renovation Gilbert AZ",
  ],
  openGraph: {
    title: "Best Bathroom Remodel Company Near Me in Gilbert, Arizona",
    description:
      "Looking for bathroom remodelers near me? Transform your bathroom with our expert remodeling services in Gilbert, Arizona. Financing available.",
    url: `${siteConfig.url}/bathroom-remodeling`,
  },
};

export default function BathroomRemodelingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
