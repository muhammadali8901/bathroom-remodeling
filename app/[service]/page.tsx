import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Bath,
  Droplets,
  Hammer,
  HandCoins,
  HardHat,
  Layout,
  Paintbrush,
  PhoneCall,
  Ruler,
  ShieldCheck,
  ShowerHead,
  Sparkles,
  Timer,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/services/service-hero";
import ServiceCTA from "@/components/services/service-cta";
import ServiceProcess from "@/components/services/service-process";
import IssuesSolved from "@/components/services/issues-solved";
import Benefits from "@/components/services/benefits";
import Tips from "@/components/services/tips";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { GoogleMap } from "@/components/services/google-map";
import SubServices from "@/components/services/sub-services";
import { bathroomServices } from "@/lib/bathroom-services";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema } from "@/components/seo/json-ld";

type ServiceDetail = {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  process: {
    title: string;
    subtitle: string;
    description: string;
    steps: {
      number: string;
      icon: LucideIcon;
      title: string;
      description: string;
    }[];
  };
  issues: {
    problem: string;
    solution: string;
  }[];
  benefits: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  tips: string[];
  ctas: {
    midTitle: string;
    midDescription: string;
    finalTitle: string;
    finalDescription: string;
  };
  seo: {
    title: string;
    description: string;
  };
  relatedServices?: {
    title: string;
    services: { name: string; href: string; description: string }[];
  };
  content?: {
    intro: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
};

const serviceMap = bathroomServices.reduce<Record<string, (typeof bathroomServices)[number]>>(
  (acc, service) => {
    const slug = service.href.replace("/", "");
    acc[slug] = service;
    return acc;
  },
  {}
);

const serviceContent: Record<string, ServiceDetail> = {
  "shower-remodeling": {
    hero: {
      title: "Shower Remodeling in Chandler, Arizona",
      subtitle: "Custom Shower Renovations in Chandler AZ",
      description:
        "Upgrade to a watertight, spa-inspired shower with premium tilework, glass, and fixtures tailored to your Chandler home.",
      image:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1600&auto=format&fit=crop&fm=webp",
    },
    content: {
      intro:
        "Transform your outdated bathroom with professional shower remodeling services in Chandler, Arizona. Our expert team specializes in creating custom shower spaces that combine modern design, superior functionality, and long-lasting durability. Whether you're looking to upgrade a cramped shower stall or create a luxurious spa-like retreat, we deliver exceptional results that enhance your daily routine and increase your home's value.",
      sections: [
        {
          title: "Why Choose Professional Shower Remodeling in Chandler?",
          content:
            "Chandler homeowners face unique challenges when it comes to bathroom renovations. Arizona's hard water, temperature fluctuations, and humidity levels require specialized materials and installation techniques. Our shower remodeling services address these local concerns with waterproof membranes, proper ventilation planning, and materials that resist mineral buildup. We understand Chandler's building codes and work efficiently to minimize disruption to your household. From initial consultation to final walkthrough, our team ensures your shower remodel meets the highest standards of quality and craftsmanship.",
        },
        {
          title: "Custom Shower Design Options for Chandler Homes",
          content:
            "Every shower remodel begins with understanding your vision and lifestyle needs. We offer frameless glass enclosures that create an open, modern aesthetic, custom tile patterns ranging from classic subway to contemporary large-format porcelain, and built-in niches and benches for added functionality. Our design team helps you select fixtures, finishes, and layouts that complement your home's style while maximizing space efficiency. Whether you prefer a minimalist design or a more traditional look, we tailor every detail to your preferences and budget.",
        },
        {
          title: "The Shower Remodeling Process in Chandler, AZ",
          content:
            "Our streamlined process ensures your shower remodel stays on schedule and within budget. We start with a detailed consultation and accurate measurements, followed by material selection and design finalization. During demolition, we protect your home with dust barriers and careful removal techniques. Our certified installers then prepare surfaces with proper waterproofing, install your chosen tile and fixtures with precision, and complete all finishing work including grout sealing and caulking. Throughout the project, we maintain clear communication and keep your space clean and organized.",
        },
        {
          title: "Quality Materials for Arizona's Climate",
          content:
            "Selecting the right materials is crucial for shower longevity in Chandler's climate. We recommend porcelain and ceramic tiles that resist moisture and are easy to maintain, waterproof membranes that exceed industry standards, slip-resistant flooring options for safety, and premium fixtures with finishes that resist hard water staining. Our partnerships with leading manufacturers ensure you receive quality products backed by solid warranties. We also provide guidance on maintenance practices that keep your shower looking beautiful for years to come.",
        },
      ],
    },
    process: {
      title: "Shower Remodel Process",
      subtitle: "Our Process",
      description:
        "A streamlined, mess-managed shower remodel built for Chandler homeowners who want a faster, cleaner upgrade.",
      steps: [
        {
          number: "01",
          icon: PhoneCall,
          title: "Consultation & Measurements",
          description: "We review goals, measure your shower footprint, and plan waterproofing details.",
        },
        {
          number: "02",
          icon: Ruler,
          title: "Design & Selections",
          description: "Tile, glass, fixtures, and drainage layout tailored to your style and daily routine.",
        },
        {
          number: "03",
          icon: Hammer,
          title: "Demo & Prep",
          description: "Clean demolition, substrate repair, and moisture barrier installation for durability.",
        },
        {
          number: "04",
          icon: ShowerHead,
          title: "Tile & Fixture Install",
          description: "Precision tile setting, niche detailing, and valve/fixture installation for a spa feel.",
        },
        {
          number: "05",
          icon: ShieldCheck,
          title: "Inspection & Walkthrough",
          description: "Sealing, testing, and a final walkthrough to confirm drainage, fit, and finish.",
        },
      ],
    },
    issues: [
      {
        problem: "Outdated shower surrounds that leak or collect mold.",
        solution: "Fully waterproofed systems with modern tile and sealed glass to stop leaks and mildew.",
      },
      {
        problem: "Cracked grout lines and failing caulk at corners.",
        solution: "New substrates, proper expansion joints, and premium sealants for long-term protection.",
      },
      {
        problem: "Cramped layouts with poor storage for toiletries.",
        solution: "Built-in niches, benches, and smarter layout options that open up the shower footprint.",
      },
      {
        problem: "Poor drainage and standing water on the shower floor.",
        solution: "Re-sloped pans and upgraded drains that keep water moving and surfaces safer.",
      },
      {
        problem: "Dated hardware that clashes with the rest of the bathroom.",
        solution: "Coordinated fixture packages in finishes that match your vanity, lighting, and trim.",
      },
    ],
    benefits: [
      {
        icon: Sparkles,
        title: "Spa-Level Look",
        description: "Frameless glass, premium tile, and clean lines create a relaxing Chandler retreat.",
      },
      {
        icon: ShieldCheck,
        title: "Leak Protection",
        description: "Moisture barriers and sealed corners protect walls and subflooring from damage.",
      },
      {
        icon: Droplets,
        title: "Better Drainage",
        description: "Proper slopes and upgraded drains reduce standing water and keep grout cleaner.",
      },
      {
        icon: TrendingUp,
        title: "Higher Home Value",
        description: "A modern shower is a top buyer priority in Chandler's competitive market.",
      },
      {
        icon: Timer,
        title: "Faster Mornings",
        description: "Organized niches and improved lighting streamline daily routines.",
      },
    ],
    tips: [
      "Squeegee glass after each use to reduce water spots and mineral buildup.",
      "Use pH-neutral cleaners on natural stone and grout-safe products on tile.",
      "Run the exhaust fan for 20 minutes after showers to prevent humidity and mildew.",
      "Check caulk annually at corners and niches to maintain a watertight seal.",
      "Choose slip-resistant shower floors if you have kids, seniors, or mobility needs.",
    ],
    ctas: {
      midTitle: "Ready for a Chandler shower remodel that stays watertight?",
      midDescription:
        "Get a custom shower plan, tile selections, and a clean installation schedule tailored to your home.",
      finalTitle: "Need fast shower remodeling in Chandler, AZ?",
      finalDescription: "Call now for a same-week consultation and clear pricing on your new shower.",
    },
    seo: {
      title: "Shower Remodeling in Chandler AZ | Custom Shower Renovations",
      description:
        "Professional shower remodeling in Chandler, Arizona. Custom tile, frameless glass enclosures, waterproof installations, and premium fixtures. Call for a free shower remodel estimate today.",
    },
    relatedServices: {
      title: "Related Bathroom Services in Chandler",
      services: [
        {
          name: "Walk-in Shower Installation",
          href: "/walk-in-shower-installation",
          description: "Accessible, curbless walk-in showers for safer bathing",
        },
        {
          name: "Bathroom Tile Installation",
          href: "/bathroom-tile-installation",
          description: "Expert tile work for showers, floors, and walls",
        },
        {
          name: "Bathtub Replacement",
          href: "/bathtub-replacement",
          description: "Convert your old tub to a modern shower",
        },
      ],
    },
  },
  "bathtub-installation": {
    hero: {
      title: "Bathtub Installation in Chandler, Arizona",
      subtitle: "Comfort-First Bathtub Installers in Chandler AZ",
      description:
        "Install a new bathtub with proper leveling, plumbing connections, and finished trim so your Chandler bathroom feels complete.",
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop&fm=webp",
    },
    content: {
      intro:
        "Professional bathtub installation in Chandler, Arizona requires precision, expertise, and attention to detail. Whether you're building a new bathroom or upgrading an existing space, our certified installers ensure your bathtub is properly leveled, securely supported, and connected to plumbing systems that meet all local codes. We work with alcove tubs, freestanding soaking tubs, and whirlpool models, providing complete installation services that include waterproofing, surround finishing, and fixture coordination.",
      sections: [
        {
          title: "Expert Bathtub Installation Services in Chandler",
          content:
            "Our bathtub installation process begins with careful planning and precise measurements. We assess your bathroom layout, plumbing configuration, and structural support to ensure a flawless installation. Chandler homes vary in age and construction style, so we adapt our approach to work with your specific situation. From preparing the subfloor and installing proper drainage to setting and leveling the tub, every step is performed with meticulous attention to detail. We also coordinate with tile setters, plumbers, and other trades to ensure seamless integration with your overall bathroom design.",
        },
        {
          title: "Choosing the Right Bathtub for Your Chandler Home",
          content:
            "Selecting the perfect bathtub involves considering size, material, style, and functionality. Alcove tubs fit standard three-wall enclosures and maximize space efficiency in smaller bathrooms. Freestanding tubs create a stunning focal point and work well in master bathrooms with ample square footage. Soaking tubs offer deeper water depth for relaxation, while whirlpool and air-jet tubs provide therapeutic benefits. We help you evaluate options based on your bathroom dimensions, budget, and personal preferences, ensuring you choose a tub that enhances both comfort and aesthetics.",
        },
        {
          title: "Proper Installation Techniques for Long-Lasting Results",
          content:
            "A properly installed bathtub should last for decades without issues. Our installation process includes reinforcing the subfloor to prevent flexing and creaking, installing mortar beds or foam support systems for stability, setting the tub perfectly level to ensure proper drainage, connecting drain assemblies with leak-proof seals, and applying waterproof membranes around the tub perimeter. We test all connections before finishing work and provide detailed care instructions to help you maintain your new bathtub. Our installations are backed by warranties that give you peace of mind.",
        },
        {
          title: "Bathtub Installation Cost and Timeline in Chandler",
          content:
            "The cost of bathtub installation in Chandler depends on several factors including tub type and size, plumbing modifications required, surround materials and finishes, and accessibility challenges. Most standard installations are completed within 1-3 days, though more complex projects may take longer. We provide detailed estimates that outline all costs upfront, with no hidden fees or surprise charges. Our efficient scheduling minimizes disruption to your household, and we always clean up thoroughly at the end of each workday. Financing options are available for qualified homeowners.",
        },
      ],
    },
    process: {
      title: "Bathtub Installation Process",
      subtitle: "Our Process",
      description: "Precise planning and careful finishing so your new tub looks great and drains perfectly.",
      steps: [
        {
          number: "01",
          icon: PhoneCall,
          title: "Consult & Measure",
          description: "Confirm tub size, clearance, and venting requirements for your Chandler home.",
        },
        {
          number: "02",
          icon: Bath,
          title: "Tub Selection",
          description: "Select alcove or freestanding tubs, drain orientation, and coordinated trim.",
        },
        {
          number: "03",
          icon: Wrench,
          title: "Plumbing Prep",
          description: "Set the drain, trap, and supply lines to manufacturer specs for leak-free use.",
        },
        {
          number: "04",
          icon: Hammer,
          title: "Set & Level",
          description: "Secure and level the tub, foam-support if required, and verify slope to drain.",
        },
        {
          number: "05",
          icon: Sparkles,
          title: "Finish & Seal",
          description: "Install surround finishes, trim, and waterproof caulk for a clean, polished look.",
        },
      ],
    },
    issues: [
      {
        problem: "Old tubs that are stained, chipped, or creaking under weight.",
        solution: "New, properly supported tubs with solid subfloor prep and quiet, rigid installs.",
      },
      {
        problem: "Improperly leveled tubs causing slow drainage or pooling water.",
        solution: "Laser leveling and corrected slope so water drains quickly without lingering puddles.",
      },
      {
        problem: "Limited soaking depth or uncomfortable layouts.",
        solution: "Sized tubs with ergonomic depth, back support, and faucet placement for comfort.",
      },
      {
        problem: "Mismatched fixtures and surrounds after a DIY install.",
        solution: "Coordinated trim kits, overflow covers, and surround finishes that match your design.",
      },
      {
        problem: "Risk of leaks at the tub apron or surround seams.",
        solution: "Continuous waterproofing, sealed seams, and tested connections before finishing.",
      },
    ],
    benefits: [
      {
        icon: Bath,
        title: "Comfortable Soaks",
        description: "Ergonomic tub selections tailored to how you relax and bathe.",
      },
      {
        icon: ShieldCheck,
        title: "Leak-Safe Setup",
        description: "Proper drains, traps, and seals keep moisture away from framing.",
      },
      {
        icon: TrendingUp,
        title: "Resale Appeal",
        description: "Fresh tubs with coordinated trim help listings stand out in Chandler.",
      },
      {
        icon: Timer,
        title: "Quick Installs",
        description: "Efficient scheduling minimizes downtime so your bath is back in service fast.",
      },
      {
        icon: Sparkles,
        title: "Clean Finishes",
        description: "Trim, caulk, and surrounds are detailed for a showroom-ready look.",
      },
    ],
    tips: [
      "Use non-abrasive cleaners to protect enamel and acrylic finishes.",
      "Inspect caulk lines quarterly; reapply at the apron and corners as needed.",
      "Add a slip-resistant mat or textured base if seniors or kids use the tub.",
      "Run warm water before filling to preheat the tub surface for longer heat retention.",
      "Pair your tub with a WaterSense faucet to reduce water use without losing flow.",
    ],
    ctas: {
      midTitle: "Want a perfectly level bathtub installation in Chandler?",
      midDescription: "Schedule a free estimate for tub selection, plumbing prep, and clean finishing.",
      finalTitle: "Need bathtub installation in Chandler, AZ?",
      finalDescription: "Call now for fast scheduling and a polished install that's ready to use.",
    },
    seo: {
      title: "Bathtub Installation Chandler AZ | Professional Tub Installers",
      description:
        "Expert bathtub installation in Chandler, Arizona. Level installs, proper drainage, waterproof sealing, and coordinated trim. Get a free bathtub installation estimate today.",
    },
    relatedServices: {
      title: "Related Bathroom Services in Chandler",
      services: [
        {
          name: "Bathtub Replacement",
          href: "/bathtub-replacement",
          description: "Replace your old tub with a modern upgrade",
        },
        {
          name: "Shower Remodeling",
          href: "/shower-remodeling",
          description: "Convert your tub to a custom shower",
        },
        {
          name: "Bathroom Tile Installation",
          href: "/bathroom-tile-installation",
          description: "Professional tile work for tub surrounds",
        },
      ],
    },
  },
  "bathtub-replacement": {
    hero: {
      title: "Bathtub Replacement in Chandler, Arizona",
      subtitle: "Replace Your Bathtub in Chandler AZ",
      description:
        "Swap outdated tubs for modern, comfortable replacements with clean removal, plumbing updates, and fresh finishes.",
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1600&auto=format&fit=crop&fm=webp",
    },
    content: {
      intro:
        "Is your bathtub stained, cracked, or simply outdated? Bathtub replacement in Chandler, Arizona offers a cost-effective way to refresh your bathroom without a complete remodel. Our experienced team removes old tubs carefully, updates plumbing as needed, and installs new tubs that match your style and budget. We handle everything from demolition and disposal to final finishing, ensuring a smooth process that minimizes disruption to your daily routine.",
      sections: [
        {
          title: "Signs You Need Bathtub Replacement in Chandler",
          content:
            "Several indicators suggest it's time to replace your bathtub. Visible cracks or chips in the tub surface can lead to water damage and mold growth. Persistent stains that won't clean despite your best efforts make your bathroom look dated and unclean. Rust spots and discoloration indicate the tub's protective coating has failed. If your tub feels unstable or flexes when you step in, the support structure may be compromised. Outdated colors like avocado green or harvest gold can make your entire bathroom feel stuck in the past. Replacing your bathtub addresses these issues while giving you an opportunity to upgrade to modern features and finishes.",
        },
        {
          title: "The Bathtub Replacement Process",
          content:
            "Our bathtub replacement service follows a systematic approach to ensure quality results. We begin with a thorough assessment of your existing tub, plumbing, and surrounding finishes. Next, we carefully remove the old tub, taking precautions to protect your floors, walls, and fixtures. We inspect and update plumbing connections, replacing worn valves, drains, and supply lines as needed. The subfloor is reinforced if necessary to provide solid support for your new tub. We then install your selected bathtub, ensuring it's perfectly level and properly sealed. Finally, we complete all finishing work including caulking, trim installation, and cleanup. Most bathtub replacements in Chandler are completed within 1-2 days.",
        },
        {
          title: "Bathtub Options for Chandler Homeowners",
          content:
            "Today's bathtubs offer impressive variety in materials, styles, and features. Acrylic tubs are lightweight, affordable, and available in many colors and sizes. Cast iron tubs provide exceptional durability and heat retention but require strong floor support. Fiberglass tubs offer budget-friendly options for rental properties and quick updates. Cultured marble tubs combine beauty with easy maintenance. For luxury upgrades, consider soaking tubs with ergonomic designs, whirlpool tubs with therapeutic jets, or freestanding tubs that serve as bathroom focal points. We help you select the best option based on your bathroom layout, budget, and personal preferences.",
        },
        {
          title: "Maximizing Your Bathtub Replacement Investment",
          content:
            "When replacing your bathtub, consider complementary upgrades that enhance functionality and value. Update faucets and fixtures to match your new tub's finish. Replace worn tile or install a new tub surround for a cohesive look. Upgrade to a handheld showerhead for added convenience. Add grab bars for safety, especially if seniors or children use the bathroom. Improve lighting to showcase your new tub and make the space more functional. These coordinated improvements create a refreshed bathroom that feels completely updated, often at a fraction of the cost of a full remodel. Our team can handle all these upgrades as part of your bathtub replacement project.",
        },
      ],
    },
    process: {
      title: "Bathtub Replacement Process",
      subtitle: "Our Process",
      description: "A careful removal-and-install approach that protects finishes and keeps your project on schedule.",
      steps: [
        {
          number: "01",
          icon: PhoneCall,
          title: "Site Review",
          description: "We inspect access paths, plumbing, and venting to plan a clean removal.",
        },
        {
          number: "02",
          icon: Hammer,
          title: "Removal & Disposal",
          description: "Careful demo of the old tub and debris haul-away without damaging nearby finishes.",
        },
        {
          number: "03",
          icon: Wrench,
          title: "Rough-In Adjustments",
          description: "Update drains, supply lines, and blocking to fit the new tub perfectly.",
        },
        {
          number: "04",
          icon: Bath,
          title: "Set New Tub",
          description: "Level, secure, and test the new bathtub with proper support and sealing.",
        },
        {
          number: "05",
          icon: Sparkles,
          title: "Trim & Finish",
          description: "Refinish surrounds, replace caulk, and clean the space for immediate use.",
        },
      ],
    },
    issues: [
      {
        problem: "Chipped, stained tubs that hurt your bathroom's look.",
        solution: "New acrylic, steel, or cast tubs with clean lines and updated finishes.",
      },
      {
        problem: "Tubs that flex, creak, or feel unstable.",
        solution: "Proper subfloor reinforcement and foam/ledger support to stop movement.",
      },
      {
        problem: "Leaks at old overflow gaskets or failing drains.",
        solution: "New gaskets, drains, and traps tested under load before we close the wall.",
      },
      {
        problem: "Awkward heights that make entry difficult.",
        solution: "Lower-threshold replacements or walk-in conversions for safer access.",
      },
      {
        problem: "Mismatched fixtures after swapping tubs.",
        solution: "Coordinated faucets, spouts, and trim that match your current style.",
      },
    ],
    benefits: [
      {
        icon: ShieldCheck,
        title: "Reliable Plumbing",
        description: "Fresh drains and seals reduce the risk of hidden leaks and damage.",
      },
      {
        icon: TrendingUp,
        title: "Value Boost",
        description: "A clean, modern tub improves listing photos and buyer impressions.",
      },
      {
        icon: Sparkles,
        title: "Modern Aesthetics",
        description: "Updated silhouettes and finishes match today's Chandler bathroom styles.",
      },
      {
        icon: Timer,
        title: "Quick Turnaround",
        description: "Efficient removal and install keep downtime low so you can keep routines.",
      },
      {
        icon: Droplets,
        title: "Cleaner Surrounds",
        description: "Fresh caulk and sealed seams make maintenance easier and resist mildew.",
      },
    ],
    tips: [
      "If you're planning tile updates, replace the tub first to avoid re-cutting tile.",
      "Upgrade the drain assembly during replacement to prevent future leaks.",
      "Consider a handheld shower for easier cleaning and rinsing the tub walls.",
      "Inspect caulk at the apron and corners every six months for wear.",
      "Add a slip-resistant base treatment if the bathroom is used by kids or seniors.",
    ],
    ctas: {
      midTitle: "Replacing a worn tub in Chandler?",
      midDescription: "Get clean removal, updated plumbing, and a leveled install without the mess.",
      finalTitle: "Need bathtub replacement in Chandler, AZ?",
      finalDescription: "Call now for a fast quote and professional tub replacement scheduling.",
    },
    seo: {
      title: "Bathtub Replacement Chandler AZ | Modern Tub Upgrades",
      description:
        "Professional bathtub replacement in Chandler, Arizona. Clean removal, updated plumbing, level installs, and fresh finishes. Contact us for a fast bathtub replacement quote.",
    },
    relatedServices: {
      title: "Related Bathroom Services in Chandler",
      services: [
        {
          name: "Bathtub Installation",
          href: "/bathtub-installation",
          description: "New bathtub installation for remodels",
        },
        {
          name: "Walk-in Shower Installation",
          href: "/walk-in-shower-installation",
          description: "Convert your tub to an accessible shower",
        },
        {
          name: "Bathroom Vanity Installation",
          href: "/bathroom-vanity-installation",
          description: "Complete your bathroom update with a new vanity",
        },
      ],
    },
  },
  "walk-in-shower-installation": {
    hero: {
      title: "Walk-in Shower Installation in Chandler, Arizona",
      subtitle: "Accessible Walk-In Showers in Chandler AZ",
      description:
        "Create an open, safer walk-in shower with slip-resistant materials, glass, and storage tailored to your Chandler home.",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop&fm=webp",
    },
    content: {
      intro:
        "Walk-in shower installation in Chandler, Arizona combines accessibility, safety, and modern design. Whether you're aging in place, accommodating mobility challenges, or simply prefer the convenience of a barrier-free shower, our expert installers create custom walk-in showers that enhance your bathroom's functionality and aesthetic appeal. We specialize in curbless designs, low-threshold entries, and ADA-compliant features that don't compromise on style.",
      sections: [
        {
          title: "Benefits of Walk-In Showers for Chandler Homes",
          content:
            "Walk-in showers offer numerous advantages for homeowners throughout Chandler. The low or zero-threshold entry eliminates tripping hazards, making bathrooms safer for all ages. Open designs create a more spacious feel, especially valuable in smaller bathrooms. Frameless glass enclosures allow natural light to flow throughout the space. Easy-access features accommodate wheelchairs, walkers, and other mobility aids. Walk-in showers are also easier to clean than traditional tub-shower combinations, with fewer crevices where mold and mildew can develop. For resale value, walk-in showers appeal to a broad range of buyers, from young families to retirees, making them a smart investment in Chandler's competitive real estate market.",
        },
        {
          title: "Custom Walk-In Shower Design Options",
          content:
            "Every walk-in shower we install is customized to your specific needs and preferences. Curbless showers provide completely barrier-free entry, ideal for wheelchair access. Low-threshold designs offer a subtle transition while containing water effectively. We incorporate built-in benches for comfortable seated showering, custom niches for organized storage, and grab bars strategically placed for safety without institutional appearance. Tile options range from large-format porcelain that minimizes grout lines to decorative mosaics that add visual interest. We also offer various glass configurations including frameless, semi-frameless, and fully enclosed designs. Our design team works with you to create a walk-in shower that balances accessibility, aesthetics, and your budget.",
        },
        {
          title: "Walk-In Shower Installation Process in Chandler",
          content:
            "Installing a walk-in shower requires specialized expertise, particularly for curbless designs. We begin by assessing your bathroom's structural requirements and plumbing configuration. For curbless showers, we may need to lower the shower floor or raise the bathroom floor to achieve proper drainage slope. We install high-quality waterproofing systems that exceed industry standards, ensuring long-term protection against water damage. Linear drains are positioned to maximize water flow while maintaining a sleek appearance. All tile work is performed with precision to ensure proper slope and water management. We install glass enclosures with careful attention to fit and finish. Throughout the process, we coordinate with plumbers, electricians, and other trades to ensure seamless integration of all components.",
        },
        {
          title: "Safety Features for Walk-In Showers",
          content:
            "Safety is paramount in walk-in shower design, especially for Chandler homeowners planning to age in place. We incorporate slip-resistant tile flooring with appropriate DCOF ratings, grab bars installed into reinforced blocking for secure support, handheld showerheads mounted on slide bars for adjustable height, built-in seating for comfortable showering, and adequate lighting including waterproof fixtures. We also recommend thermostatic valves that prevent scalding and ensure consistent water temperature. These safety features are integrated thoughtfully into the design, maintaining the shower's aesthetic appeal while providing essential functionality. Our installations meet or exceed ADA guidelines when required, ensuring your walk-in shower is both beautiful and accessible.",
        },
      ],
    },
    process: {
      title: "Walk-in Shower Installation Process",
      subtitle: "Our Process",
      description: "Accessibility-focused planning with finishes that still feel luxe and easy to maintain.",
      steps: [
        {
          number: "01",
          icon: PhoneCall,
          title: "Accessibility Review",
          description: "We assess clearances, thresholds, and grab bar locations for safe entry.",
        },
        {
          number: "02",
          icon: Layout,
          title: "Layout & Glass Plan",
          description: "Design open sightlines, glass sizing, and storage niches for daily use.",
        },
        {
          number: "03",
          icon: ShieldCheck,
          title: "Waterproofing",
          description: "Install pan, membrane, and backer systems to protect framing long-term.",
        },
        {
          number: "04",
          icon: ShowerHead,
          title: "Tile & Fixture Install",
          description: "Set slip-resistant floors, tile walls, and accessible fixture heights.",
        },
        {
          number: "05",
          icon: Sparkles,
          title: "Testing & Handoff",
          description: "Drainage, glass alignment, and safety checks before your walkthrough.",
        },
      ],
    },
    issues: [
      {
        problem: "High tub walls that are difficult or unsafe to step over.",
        solution: "Low-threshold or curbless walk-in showers with grab bars and stable footing.",
      },
      {
        problem: "Dark, enclosed showers that feel cramped.",
        solution: "Frameless glass, bright tile selections, and better lighting for an open feel.",
      },
      {
        problem: "Slippery floors and no seating options.",
        solution: "Slip-resistant tile, built-in benches, and adjustable handheld showerheads.",
      },
      {
        problem: "Water escaping onto the bathroom floor.",
        solution: "Proper slope, linear drains, and glass placement to keep water where it belongs.",
      },
      {
        problem: "Insufficient storage for shampoo and bathing essentials.",
        solution: "Custom niches placed at comfortable heights to keep items organized.",
      },
    ],
    benefits: [
      {
        icon: ShieldCheck,
        title: "Safer Entry",
        description: "Low or curbless thresholds reduce trip hazards for every family member.",
      },
      {
        icon: Layout,
        title: "Open Layout",
        description: "Glass and thoughtful tile choices make the bathroom feel larger.",
      },
      {
        icon: Sparkles,
        title: "Modern Style",
        description: "Minimal hardware, clean lines, and premium fixtures elevate the look.",
      },
      {
        icon: TrendingUp,
        title: "Home Value",
        description: "Accessible showers are highly requested by Chandler buyers and renters.",
      },
      {
        icon: Droplets,
        title: "Easy Cleaning",
        description: "Smooth tile layouts and quality drains make upkeep simpler.",
      },
    ],
    tips: [
      "Choose slip-resistant floor tile (DCOF > 0.42) for better traction when wet.",
      "Add blocking in the walls now for future grab bars, even if you don't install them today.",
      "Keep glass simpler to clean—fewer metal channels mean fewer places for buildup.",
      "Consider a handheld shower at a lower height for rinsing and seated use.",
      "Use a quality squeegee daily to maintain glass clarity in Arizona's hard water.",
    ],
    ctas: {
      midTitle: "Want an accessible walk-in shower in Chandler?",
      midDescription: "We'll design, waterproof, and install a safer, open shower that fits your space.",
      finalTitle: "Need walk-in shower installation in Chandler, AZ?",
      finalDescription: "Call today for a fast walkthrough and tailored walk-in shower estimate.",
    },
    seo: {
      title: "Walk-in Shower Installation Chandler AZ | Accessible Showers",
      description:
        "Professional walk-in shower installation in Chandler, Arizona. Curbless and low-threshold showers, slip-resistant tile, glass enclosures, and waterproofing. Schedule your estimate.",
    },
    relatedServices: {
      title: "Related Bathroom Services in Chandler",
      services: [
        {
          name: "Shower Remodeling",
          href: "/shower-remodeling",
          description: "Complete shower renovations and upgrades",
        },
        {
          name: "Bathroom Tile Installation",
          href: "/bathroom-tile-installation",
          description: "Slip-resistant tile for walk-in showers",
        },
        {
          name: "Bathtub Replacement",
          href: "/bathtub-replacement",
          description: "Replace your tub with a walk-in shower",
        },
      ],
    },
  },
  "bathroom-tile-installation": {
    hero: {
      title: "Bathroom Tile Installation in Chandler, Arizona",
      subtitle: "Expert Bathroom Tile Installers in Chandler AZ",
      description:
        "Precision tile installation for shower walls, floors, and backsplashes that stay aligned, sealed, and beautiful.",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop&fm=webp",
    },
    content: {
      intro:
        "Professional bathroom tile installation in Chandler, Arizona transforms ordinary bathrooms into stunning spaces. Our certified tile installers bring years of experience and meticulous attention to detail to every project. Whether you're updating a shower surround, installing new floor tile, or creating a decorative backsplash, we deliver flawless results that enhance your bathroom's beauty and functionality. We work with all tile types including ceramic, porcelain, natural stone, and glass, ensuring proper installation techniques for lasting performance.",
      sections: [
        {
          title: "Why Professional Tile Installation Matters",
          content:
            "Bathroom tile installation requires specialized skills and knowledge that go far beyond basic DIY capabilities. Proper surface preparation prevents future cracking and tile failure. Waterproofing systems must be installed correctly to protect against moisture damage and mold growth. Tile layout requires careful planning to minimize cuts and create balanced, visually appealing patterns. Precise cutting and fitting around fixtures, corners, and edges ensures a professional finish. Proper thinset application and tile setting techniques prevent lippage and hollow spots. Grout selection and application affect both appearance and durability. Our professional installers master all these elements, delivering tile work that looks beautiful and performs flawlessly for decades.",
        },
        {
          title: "Tile Options for Chandler Bathrooms",
          content:
            "Selecting the right tile for your Chandler bathroom involves considering style, durability, and maintenance requirements. Porcelain tile offers exceptional durability and water resistance, ideal for shower floors and walls. Ceramic tile provides excellent value with countless design options. Natural stone tiles like marble, travertine, and slate create luxurious, organic aesthetics but require more maintenance. Glass tile adds sparkle and visual interest, perfect for accent walls and borders. Large-format tiles minimize grout lines for a sleek, modern look and easier cleaning. Mosaic tiles allow for intricate patterns and excellent slip resistance on shower floors. We help you select tiles that match your design vision, budget, and lifestyle needs, ensuring your bathroom tile installation exceeds expectations.",
        },
        {
          title: "Bathroom Tile Installation Process",
          content:
            "Our systematic approach ensures superior results on every tile installation project. We begin with thorough surface preparation, removing old tile if necessary and repairing any substrate damage. Cement backer board is installed on walls and floors to provide a stable, moisture-resistant base. Waterproofing membranes are applied in wet areas, with special attention to corners, seams, and penetrations. We create detailed layout plans that optimize tile placement and minimize waste. Tiles are set using appropriate thinset mortar, with spacers ensuring consistent grout lines. After proper curing time, we apply grout in your selected color, tooling joints for uniform appearance. Finally, we seal grout lines and natural stone tiles to protect against staining and moisture. The result is tile work that combines beauty, durability, and proper water management.",
        },
        {
          title: "Tile Maintenance for Arizona Homes",
          content:
            "Chandler's hard water and climate conditions require specific tile maintenance practices. Regular cleaning with pH-neutral products prevents buildup and preserves tile finishes. Grout sealing should be performed annually in shower areas to maintain water resistance. Proper ventilation during and after showers reduces humidity that can lead to mold growth. Addressing any cracked or loose tiles promptly prevents water intrusion and further damage. For natural stone tiles, use cleaners specifically formulated for stone to avoid etching or discoloration. We provide detailed care instructions with every installation and offer maintenance services to keep your tile looking new. With proper care, your bathroom tile installation will maintain its beauty and functionality for many years.",
        },
      ],
    },
    process: {
      title: "Bathroom Tile Installation Process",
      subtitle: "Our Process",
      description: "Surface prep, waterproofing, and crisp layout lines for tile that stays flat and durable.",
      steps: [
        {
          number: "01",
          icon: Ruler,
          title: "Layout & Design",
          description: "We plan patterns, grout lines, and transitions that align with fixtures and niches.",
        },
        {
          number: "02",
          icon: HandCoins,
          title: "Surface Prep",
          description: "Backer board, leveling, and crack isolation to keep tile stable over time.",
        },
        {
          number: "03",
          icon: ShieldCheck,
          title: "Waterproofing",
          description: "Membranes and seams sealed in wet zones to prevent moisture intrusion.",
        },
        {
          number: "04",
          icon: Paintbrush,
          title: "Setting & Cuts",
          description: "Clean cuts, consistent spacing, and aligned edges around valves and corners.",
        },
        {
          number: "05",
          icon: Sparkles,
          title: "Grout & Seal",
          description: "Proper cure times, grout sealing, and a full cleanup before handoff.",
        },
      ],
    },
    issues: [
      {
        problem: "Cracked or hollow tiles due to poor substrate prep.",
        solution: "Leveling, crack isolation, and proper thinset coverage for long-lasting adhesion.",
      },
      {
        problem: "Water intrusion behind shower walls.",
        solution: "Full waterproofing membranes and sealed penetrations around valves and niches.",
      },
      {
        problem: "Uneven grout lines and lippage that catch your eye.",
        solution: "Dialed-in layout, spacers, and leveling systems for flat, even planes.",
      },
      {
        problem: "Stained or crumbling grout in wet areas.",
        solution: "Quality grout, proper cure, and sealing to resist moisture and discoloration.",
      },
      {
        problem: "Tiles that clash with existing fixtures and cabinets.",
        solution: "Coordinated material selections that match faucets, hardware, and countertops.",
      },
    ],
    benefits: [
      {
        icon: Sparkles,
        title: "Crisp Lines",
        description: "Aligned patterns, straight grout joints, and clean cuts elevate any bathroom.",
      },
      {
        icon: ShieldCheck,
        title: "Moisture Defense",
        description: "Waterproof assemblies keep walls and subfloors safe from damage.",
      },
      {
        icon: TrendingUp,
        title: "Investment Value",
        description: "Quality tile work impresses buyers and lowers long-term maintenance.",
      },
      {
        icon: Droplets,
        title: "Easy Cleaning",
        description: "Sealed grout and smooth transitions simplify weekly cleaning.",
      },
      {
        icon: Layout,
        title: "Custom Layouts",
        description: "Feature walls, borders, and niches tailored to your design vision.",
      },
    ],
    tips: [
      "Choose porcelain or ceramic for showers; natural stone needs more sealing and care.",
      "Use lighter grout in small bathrooms to keep the space feeling open.",
      "Seal grout annually in wet zones to keep moisture and stains out.",
      "Ventilate during showers to reduce humidity that can discolor grout over time.",
      "Keep a few spare tiles after install for future repairs or remodels.",
    ],
    ctas: {
      midTitle: "Want flawless bathroom tile installation in Chandler?",
      midDescription: "Book a layout consult, material guidance, and precise tile setting for your space.",
      finalTitle: "Need bathroom tile installers in Chandler, AZ?",
      finalDescription: "Call now for a tile installation estimate with waterproofing and cleanup included.",
    },
    seo: {
      title: "Bathroom Tile Installation Chandler AZ | Waterproof Tile Experts",
      description:
        "Expert bathroom tile installation in Chandler, Arizona. Layout planning, waterproofing, precision installs, and sealed grout for showers, floors, and backsplashes. Get your tile quote.",
    },
    relatedServices: {
      title: "Related Bathroom Services in Chandler",
      services: [
        {
          name: "Shower Remodeling",
          href: "/shower-remodeling",
          description: "Custom tile showers with premium finishes",
        },
        {
          name: "Walk-in Shower Installation",
          href: "/walk-in-shower-installation",
          description: "Accessible showers with slip-resistant tile",
        },
        {
          name: "Bathroom Vanity Installation",
          href: "/bathroom-vanity-installation",
          description: "Vanity backsplash tile installation",
        },
      ],
    },
  },
  "bathroom-vanity-installation": {
    hero: {
      title: "Bathroom Vanity Installation in Chandler, Arizona",
      subtitle: "Custom Vanity Installation in Chandler AZ",
      description:
        "Install a vanity that improves storage, workflow, and style with aligned plumbing, countertops, and lighting.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop&fm=webp",
    },
    content: {
      intro:
        "Transform your bathroom with professional vanity installation in Chandler, Arizona. A new bathroom vanity provides essential storage, improves daily functionality, and serves as a focal point for your bathroom's design. Our experienced installers handle every aspect of vanity installation, from removing old cabinets and updating plumbing to setting new vanities perfectly level and installing countertops with precision. We work with all vanity styles including single and double sink configurations, floating wall-mounted designs, and traditional floor-standing cabinets.",
      sections: [
        {
          title: "Choosing the Perfect Vanity for Your Chandler Bathroom",
          content:
            "Selecting the right bathroom vanity involves balancing style, size, storage, and budget considerations. Measure your bathroom carefully to determine the maximum vanity size that allows comfortable movement. Single-sink vanities work well in powder rooms and smaller bathrooms, while double-sink vanities accommodate busy households and master bathrooms. Consider storage needs—drawers provide better organization than cabinets for most items. Vanity height has evolved from the traditional 30-32 inches to comfort height at 36 inches, which reduces back strain during daily use. Material choices include solid wood for durability and classic appeal, engineered wood with moisture-resistant finishes for budget-friendly options, and metal or glass for contemporary designs. Countertop materials range from affordable laminate to luxurious quartz, granite, or marble. We help you navigate these options to find the perfect vanity for your needs.",
        },
        {
          title: "Professional Vanity Installation Process",
          content:
            "Our vanity installation process ensures flawless results that last for years. We begin by carefully removing your existing vanity, protecting floors and walls during demolition. Plumbing is inspected and updated as needed, with supply lines and drain assemblies positioned to match your new vanity configuration. Wall blocking is added if necessary to support wall-mounted vanities. We set the vanity cabinet, shimming and leveling it precisely to prevent door and drawer misalignment. Countertops are installed with proper support and sealed seams. Sinks are mounted and plumbed with new faucets and drain assemblies. Backsplashes are installed and caulked for a watertight seal. Finally, we connect all plumbing, test for leaks, and clean the work area thoroughly. Most vanity installations in Chandler are completed in one day, minimizing disruption to your household.",
        },
        {
          title: "Vanity Styles for Chandler Homes",
          content:
            "Bathroom vanity styles have evolved significantly, offering options for every design preference. Traditional vanities feature furniture-style details, raised panel doors, and classic hardware in rich wood finishes. Transitional vanities blend traditional and contemporary elements with clean lines and subtle details. Modern vanities emphasize minimalism with flat-panel doors, sleek hardware, and bold finishes. Floating vanities mount to the wall, creating an airy feel and making floor cleaning easier. Vessel sink vanities showcase decorative above-counter sinks as design statements. Farmhouse vanities incorporate rustic elements like distressed finishes and apron-front sinks. We help you select a vanity style that complements your bathroom's architecture and your personal aesthetic, ensuring a cohesive, polished result.",
        },
        {
          title: "Maximizing Vanity Storage and Functionality",
          content:
            "A well-designed vanity installation optimizes storage and improves your bathroom's functionality. Drawer organizers keep toiletries, cosmetics, and grooming tools neatly arranged and easily accessible. Pull-out shelves in lower cabinets maximize storage capacity and improve access to items in back corners. Electrical outlets integrated into drawers or on the side of the vanity provide convenient power for hair dryers and electric toothbrushes. Adequate lighting above or beside the vanity eliminates shadows for grooming tasks. Medicine cabinets or open shelving add supplementary storage without consuming floor space. Soft-close hinges and drawer glides provide quiet, smooth operation. We consider these functional elements during planning to ensure your new vanity enhances your daily routine while maintaining a clean, organized appearance.",
        },
      ],
    },
    process: {
      title: "Bathroom Vanity Installation Process",
      subtitle: "Our Process",
      description: "Sized, leveled, and connected vanities that make your Chandler bathroom feel organized.",
      steps: [
        {
          number: "01",
          icon: Ruler,
          title: "Measure & Plan",
          description: "Confirm clearances, plumbing locations, and backsplash heights for a perfect fit.",
        },
        {
          number: "02",
          icon: Layout,
          title: "Select Vanity",
          description: "Choose single or double vanities, storage options, and countertop materials.",
        },
        {
          number: "03",
          icon: HardHat,
          title: "Prep & Blocking",
          description: "Adjust plumbing stubs, add blocking, and level the wall area before install.",
        },
        {
          number: "04",
          icon: Hammer,
          title: "Set & Level",
          description: "Secure the cabinet, shim for level, and verify drawer/door alignment.",
        },
        {
          number: "05",
          icon: Sparkles,
          title: "Top, Sink & Finish",
          description: "Install countertop, sink, faucet, and caulk seams for a clean, ready-to-use vanity.",
        },
      ],
    },
    issues: [
      {
        problem: "Minimal storage leading to cluttered countertops.",
        solution: "Vanity layouts with drawers, organizers, and smart plumbing placement for storage.",
      },
      {
        problem: "Old vanities with peeling finishes or loose hardware.",
        solution: "New cabinets, hardware, and tops that match your bathroom palette and hold up to moisture.",
      },
      {
        problem: "Misaligned plumbing causing slow drains or leaks.",
        solution: "Reset traps, supply lines, and seals for reliable, drip-free operation.",
      },
      {
        problem: "Counter heights that feel uncomfortable for daily use.",
        solution: "Ergonomic height planning for brushing, grooming, and sharing the space.",
      },
      {
        problem: "Fixtures that don't match the rest of the bathroom.",
        solution: "Coordinated faucets, knobs, and mirrors for a cohesive Chandler bathroom look.",
      },
    ],
    benefits: [
      {
        icon: Layout,
        title: "Better Workflow",
        description: "Sized for your routine with organized storage where you need it most.",
      },
      {
        icon: Sparkles,
        title: "Polished Look",
        description: "Aligned tops, backsplash, and fixtures keep the vanity area seamless.",
      },
      {
        icon: ShieldCheck,
        title: "Durable Setup",
        description: "Proper sealing and moisture-resistant materials extend the vanity's life.",
      },
      {
        icon: TrendingUp,
        title: "Value Add",
        description: "Modern vanities attract Chandler buyers who want a move-in-ready bath.",
      },
      {
        icon: Timer,
        title: "Quicker Mornings",
        description: "Organized drawers and lighting alignment speed up daily routines.",
      },
    ],
    tips: [
      "Pick moisture-resistant cabinet materials or finishes for Arizona humidity swings.",
      "Add drawer organizers to keep grooming items tidy and easy to reach.",
      "Use a backsplash to protect walls from splashes and make cleaning easier.",
      "Choose a faucet with enough reach for the sink bowl to minimize splatter.",
      "Seal around the sink and backsplash annually to keep water out of the cabinet.",
    ],
    ctas: {
      midTitle: "Want a vanity install that fits your Chandler bathroom perfectly?",
      midDescription: "Schedule a consult for measurements, storage planning, and coordinated fixtures.",
      finalTitle: "Need bathroom vanity installation in Chandler, AZ?",
      finalDescription: "Call now for a precise vanity install with leveled tops and sealed plumbing.",
    },
    seo: {
      title: "Bathroom Vanity Installation Chandler AZ | Custom Vanity Pros",
      description:
        "Professional bathroom vanity installation in Chandler, Arizona. Measurements, leveling, countertop install, plumbing hook-ups, and storage planning. Get your vanity estimate today.",
    },
    relatedServices: {
      title: "Related Bathroom Services in Chandler",
      services: [
        {
          name: "Bathroom Tile Installation",
          href: "/bathroom-tile-installation",
          description: "Tile backsplashes for your new vanity",
        },
        {
          name: "Shower Remodeling",
          href: "/shower-remodeling",
          description: "Complete your bathroom with a shower upgrade",
        },
        {
          name: "Bathtub Installation",
          href: "/bathtub-installation",
          description: "Coordinate your vanity with a new tub",
        },
      ],
    },
  },
};

export function generateStaticParams() {
  return Object.keys(serviceMap).map((slug) => ({ service: slug }));
}

export const dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: { service: string };
}): Metadata {
  const service = serviceMap[params.service];
  const content = serviceContent[params.service];

  if (!service || !content) return {};

  const title = content.seo.title;
  const description = content.seo.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${service.href}`,
    },
  };
}

const chandlerLocation = {
  lat: 33.3062,
  lng: -111.8413,
};

export default function BathroomServicePage({
  params,
}: {
  params: { service: string };
}) {
  const service = serviceMap[params.service];
  const content = serviceContent[params.service];

  if (!service || !content) {
    notFound();
  }

  return (
    <>
      <ServiceSchema
        serviceName={`${service.name} in Chandler, Arizona`}
        serviceDescription={content.seo.description}
        serviceUrl={`${siteConfig.url}${service.href}`}
      />
      <Header />
      <main>
        <ServiceHero
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          description={content.hero.description}
          image={content.hero.image}
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: service.name, url: `${siteConfig.url}${service.href}` },
          ]}
        />

        {/* SEO Content Section */}
        {content.content && (
          <section className="py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {content.content.intro}
                  </p>
                  {content.content.sections.map((section, index) => (
                    <div key={index} className="mb-10">
                      <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                        {section.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <ServiceProcess
          title={content.process.title}
          subtitle={content.process.subtitle}
          description={content.process.description}
          steps={content.process.steps}
        />

        <IssuesSolved
          title={`Issues We Solve with ${service.name}`}
          subtitle="Common Problems Fixed"
          description={`We address the most common ${service.name.toLowerCase()} challenges Chandler homeowners face.`}
          issues={content.issues}
        />

        <Benefits
          title={`Benefits of ${service.name} in Chandler`}
          subtitle="Why It Matters"
          benefits={content.benefits}
        />

        {/* Related Services Section */}
        {content.relatedServices && (
          <section className="py-20 lg:py-32 bg-secondary">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-primary text-sm font-medium tracking-wider uppercase">
                  More Services
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-4 text-foreground">
                  {content.relatedServices.title}
                </h2>
                <p className="text-muted-foreground text-lg">
                  Explore our other bathroom remodeling services in Chandler, Arizona
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {content.relatedServices.services.map((relatedService) => (
                  <Link
                    key={relatedService.href}
                    href={relatedService.href}
                    className="bg-card p-6 rounded-lg hover:shadow-lg transition-shadow border border-border"
                  >
                    <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                      {relatedService.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {relatedService.description}
                    </p>
                    <span className="text-primary font-medium text-sm">
                      Learn More →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Tips
          title={`${service.name} Tips & Maintenance`}
          subtitle="Keep It Looking New"
          description={`Simple, Chandler-friendly tips to keep your ${service.name.toLowerCase()} performing and looking its best.`}
          tips={content.tips}
        />

        <ServiceCTA title={content.ctas.midTitle} description={content.ctas.midDescription} />

        <Testimonials />

        <ContactSection />

        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">
                Service Area Map for {service.name} in Chandler, Arizona
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We serve homeowners across Chandler, Arizona with fast scheduling, reliable communication, and
                clean job sites. View our primary service area below and call if you need {service.name.toLowerCase()} nearby.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and nearby neighborhoods</li>
                <li>• Local crews familiar with East Valley homes</li>
                <li>• Same-week consultations when available</li>
              </ul>
            </div>
            <div>
              <GoogleMap
                lat={chandlerLocation.lat}
                lng={chandlerLocation.lng}
                zoom={12}
                title={`${service.name} in Chandler, AZ`}
                address="Chandler, Arizona"
              />
            </div>
          </div>
        </section>

        <ServiceCTA title={content.ctas.finalTitle} description={content.ctas.finalDescription} />
      </main>
      <Footer />
    </>
  );
}
