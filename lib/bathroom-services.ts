import {
  ShowerHead,
  Bath,
  Grid3X3,
  Lightbulb,
  LucideIcon,
} from "lucide-react";

export type BathroomService = {
  name: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export const bathroomServices: BathroomService[] = [
  {
    name: "Bathroom Remodeling",
    href: "/bathroom-remodeling",
    description:
      "Complete bathroom renovations from planning through finishing touches.",
    icon: ShowerHead,
  },
  {
    name: "Shower Remodeling",
    href: "/shower-remodeling",
    description:
      "Custom showers with premium tile, glass enclosures, and modern fixtures.",
    icon: ShowerHead,
  },
  {
    name: "Bathtub Installation",
    href: "/bathtub-installation",
    description:
      "Professional bathtub installs designed for comfort, performance, and style.",
    icon: Bath,
  },
  {
    name: "Bathtub Replacement",
    href: "/bathtub-replacement",
    description:
      "Replace outdated tubs with updated options that fit your layout and routine.",
    icon: Bath,
  },
  {
    name: "Walk-in Shower Installation",
    href: "/walk-in-shower-installation",
    description:
      "Accessible walk-in showers that balance clean design with everyday function.",
    icon: ShowerHead,
  },
  {
    name: "Bathroom Tile Installation",
    href: "/bathroom-tile-installation",
    description:
      "Tile installation for showers, walls, backsplashes, and bathroom floors.",
    icon: Grid3X3,
  },
  {
    name: "Bathroom Vanity Installation",
    href: "/bathroom-vanity-installation",
    description:
      "Stylish vanities with smart storage, durable tops, and coordinated sinks.",
    icon: Grid3X3,
  },
  {
    name: "Bathroom Flooring",
    href: "/bathroom-flooring",
    description:
      "Moisture-resistant bathroom flooring upgrades built for durability.",
    icon: Grid3X3,
  },
  {
    name: "Bathroom Lighting Upgrade",
    href: "/bathroom-lighting-upgrade",
    description:
      "Layered bathroom lighting that improves visibility, ambiance, and efficiency.",
    icon: Lightbulb,
  },
];
