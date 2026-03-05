import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kitchen Remodeling in Gilbert, Arizona | Expert Renovation Services",
  description:
    "Transform your kitchen with our expert remodeling services in Gilbert, Arizona. Custom cabinets, countertops, islands & more. Free estimates available!",
  keywords: [
    "Kitchen Remodeling Gilbert Arizona",
    "Kitchen Renovation Gilbert AZ",
    "Kitchen Cabinets Gilbert AZ",
    "Kitchen Countertops Gilbert",
    "Kitchen Contractor Gilbert Arizona",
  ],
  openGraph: {
    title: "Kitchen Remodeling in Gilbert, Arizona | Expert Renovation Services",
    description:
      "Transform your kitchen with our expert remodeling services in Gilbert, Arizona. Custom cabinets, countertops, islands & more.",
    url: `${siteConfig.url}/kitchen-remodeling`,
  },
};

export default function KitchenRemodelingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
