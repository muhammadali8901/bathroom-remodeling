"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/services/service-hero";
import SubServices from "@/components/services/sub-services";
import IssuesSolved from "@/components/services/issues-solved";
import Benefits from "@/components/services/benefits";
import Tips from "@/components/services/tips";
import ProcessSection from "@/components/home/process-section";
import Testimonials from "@/components/home/testimonials";
import ServiceAreas from "@/components/home/service-areas";
import ServiceCTA from "@/components/services/service-cta";
import { ServiceSchema, FAQSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
import {
  ShowerHead,
  Bath,
  Grid3X3,
  TrendingUp,
  DollarSign,
  Clock,
  Shield,
  Sparkles,
} from "lucide-react";

const breadcrumbs = [
  { name: "Home", url: siteConfig.url },
  { name: "Bathroom Remodeling", url: `${siteConfig.url}/bathroom-remodeling` },
];

const subServices = [
  {
    id: "shower-remodeling",
    icon: ShowerHead,
    title: "Shower Remodeling",
    description:
      "Upgrade your shower with a layout, finish palette, and fixture package tailored to your bathroom. From frameless glass to premium tilework, we create showers that feel elevated and easy to maintain.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574&auto=format&fit=crop",
    features: [
      "Frameless glass enclosures",
      "Custom tile layouts and accent details",
      "Rainfall and multi-function shower systems",
      "Built-in benches and recessed niches",
      "Waterproofing and finishing details",
    ],
  },
  {
    id: "bathtub-installation",
    icon: Bath,
    title: "Bathtub Installation",
    description:
      "Install a new bathtub that fits your routine and bathroom footprint. We handle placement, finish coordination, and all of the details needed for a clean, polished installation.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2574&auto=format&fit=crop",
    features: [
      "Freestanding and alcove tub options",
      "New drain and plumbing connections",
      "Coordinated trim and fixture installation",
      "Tub surround finishing",
      "Layout planning for comfort and clearance",
    ],
  },
  {
    id: "bathtub-replacement",
    icon: Bath,
    title: "Bathtub Replacement",
    description:
      "Replace aging, stained, or uncomfortable tubs with updated bathtub solutions that improve appearance, performance, and day-to-day comfort.",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2669&auto=format&fit=crop",
    features: [
      "Removal of outdated tubs",
      "Updated replacement options",
      "Fixture and trim refreshes",
      "Tub surround improvements",
      "Clean installation with finished detailing",
    ],
  },
  {
    id: "walk-in-shower-installation",
    icon: ShowerHead,
    title: "Walk-in Shower Installation",
    description:
      "Create a more open, accessible bathing experience with a walk-in shower designed around your space, preferred features, and safety needs.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2574&auto=format&fit=crop",
    features: [
      "Low-threshold and curbless options",
      "Custom glass enclosures",
      "Built-in seating and storage niches",
      "Slip-resistant surface selections",
      "Accessible fixture configurations",
    ],
  },
  {
    id: "bathroom-tile-installation",
    icon: Grid3X3,
    title: "Bathroom Tile Installation",
    description:
      "Enhance your bathroom with tile installation that balances durability, moisture resistance, and style. We install tile across shower walls, backsplashes, and wet-area surfaces.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2576&auto=format&fit=crop",
    features: [
      "Porcelain, ceramic, and natural stone options",
      "Custom layouts and accent patterns",
      "Shower wall and surround installations",
      "Waterproof prep and underlayment",
      "Clean grout and finishing work",
    ],
  },
  {
    id: "bathroom-vanity-installation",
    icon: Grid3X3,
    title: "Bathroom Vanity Installation",
    description:
      "Install a bathroom vanity that improves storage, workflow, and visual balance. We coordinate cabinet size, countertop selection, sink setup, and hardware details.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2574&auto=format&fit=crop",
    features: [
      "Single and double vanity layouts",
      "Quartz, stone, and solid-surface tops",
      "Drawer storage and cabinet planning",
      "Integrated sink coordination",
      "Fixture and mirror compatibility",
    ],
  },
];

const issues = [
  {
    problem: "Outdated fixtures and old-fashioned design making your bathroom feel dated",
    solution: "Modern fixture upgrades and contemporary design elements that transform your space into a stylish retreat.",
  },
  {
    problem: "Cramped layout with poor storage leaving you frustrated every morning",
    solution: "Smart space planning and custom storage solutions that maximize every inch of your bathroom.",
  },
  {
    problem: "Water damage, mold, or mildew from poor ventilation or aging materials",
    solution: "Complete remediation, proper waterproofing, and modern ventilation systems for a healthy bathroom.",
  },
  {
    problem: "Difficulty accessing the tub or shower safely, especially for seniors",
    solution: "Accessible designs including walk-in showers, grab bars, and barrier-free entries for safe, independent use.",
  },
  {
    problem: "Inefficient water fixtures leading to high utility bills",
    solution: "WaterSense certified fixtures and modern appliances that reduce water usage without sacrificing performance.",
  },
  {
    problem: "Poor lighting making grooming and makeup application difficult",
    solution: "Layered lighting design with task, ambient, and accent lighting for a well-lit, functional space.",
  },
];

const benefits = [
  {
    icon: Grid3X3,
    title: "Increased Home Value",
    description: "Bathroom remodels offer one of the highest returns on investment, typically recouping 60-70% of costs at resale.",
  },
  {
    icon: TrendingUp,
    title: "Improved Functionality",
    description: "Modern layouts and smart storage solutions make your daily routine more efficient and enjoyable.",
  },
  {
    icon: DollarSign,
    title: "Energy Savings",
    description: "Updated fixtures and efficient lighting reduce water and electricity usage, lowering monthly bills.",
  },
  {
    icon: Clock,
    title: "Time Efficiency",
    description: "A well-designed bathroom helps you get ready faster with everything organized and accessible.",
  },
  {
    icon: Shield,
    title: "Safety & Accessibility",
    description: "Modern safety features and accessible designs protect your family and allow aging in place.",
  },
  {
    icon: Sparkles,
    title: "Personal Sanctuary",
    description: "Create a spa-like retreat where you can relax and unwind after a long day.",
  },
];

const tips = [
  "Set a realistic budget that includes a 10-15% contingency for unexpected issues that may arise during renovation.",
  "Prioritize ventilation - a good exhaust fan prevents mold and extends the life of your finishes.",
  "Consider universal design features even if you don't need them now - they add value and future-proof your investment.",
  "Choose durable, water-resistant materials for flooring and surfaces to ensure longevity.",
  "Plan your lighting carefully - task lighting at the vanity is essential for grooming.",
  "Don't skimp on storage - adequate cabinets and shelving keep your bathroom organized and clutter-free.",
  "Select timeless finishes over trendy ones for a look that will remain stylish for years.",
  "Hire licensed contractors who specialize in bathroom remodeling to ensure quality work and proper permits.",
];

const serviceFaqs = [
  {
    question: "How long does a bathroom remodel take in Chandler, Arizona?",
    answer: "A typical bathroom remodel takes 2-4 weeks depending on scope. Simple updates may take days, while complete renovations can take 4-6 weeks. We also offer bathroom remodel in a day near me services for quick updates.",
  },
  {
    question: "What is included in a full bathroom remodel?",
    answer: "A full remodel includes demolition, plumbing, electrical, flooring, walls, fixtures, vanity, shower/tub, lighting, and finishing touches.",
  },
  {
    question: "Do you offer bathroom remodel financing near me?",
    answer: "Yes! We offer flexible bathroom remodel with financing near me options including low monthly payments and quick approval. Contact us to learn more about our financing options.",
  },
  {
    question: "Are you handicap bathroom remodel contractors near me?",
    answer: "Absolutely! We specialize in handicap accessible bathroom remodels including ADA-compliant showers, grab bars, walk-in tubs, and barrier-free designs. We also offer free bathroom remodel for seniors near me assistance programs.",
  },
];

export default function BathroomRemodelingPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Bathroom Remodeling Services in Chandler, Arizona"
        serviceDescription="Best bathroom remodel company near me. Expert bathroom remodeling services including shower remodeling, bathtub installation, bathtub replacement, walk-in shower installation, vanity installation, tile work, flooring, lighting, sink updates, and plumbing upgrades. Serving Chandler, Arizona and surrounding areas."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling`}
      />
      <FAQSchema faqs={serviceFaqs} />
      <Header />
      <main>
        <ServiceHero
          title="Best Bathroom Remodeling Company in Chandler, Arizona"
          subtitle="Best Bathroom Remodelers Near Me"
          description="Looking for bathroom remodelers near me? Create the bathroom of your dreams with our comprehensive remodeling services in Chandler. From showers and tubs to tile, vanities, lighting, sinks, flooring, and plumbing upgrades, we deliver stunning results. Bathroom remodel financing near me available."
          image="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574&auto=format&fit=crop"
          breadcrumbs={breadcrumbs}
        />
        <SubServices
          title="Our Bathroom Remodeling Services"
          subtitle="What We Offer"
          description="From targeted updates to complete transformations, we offer comprehensive bathroom remodeling services to meet every need and budget."
          services={subServices}
        />
        <IssuesSolved
          title="Problems We Solve"
          subtitle="Common Bathroom Issues"
          description="We understand the frustrations that come with an outdated or dysfunctional bathroom. Here's how we address common challenges."
          issues={issues}
        />
        <Benefits
          title="Benefits of Bathroom Remodeling"
          subtitle="Why Remodel?"
          benefits={benefits}
        />
        <Tips
          title="Bathroom Remodeling Tips"
          subtitle="Expert Advice"
          description="Planning a bathroom remodel? Keep these expert tips in mind to ensure a successful project."
          tips={tips}
        />
        <ProcessSection />
        <Testimonials />
        <ServiceAreas />
        <ServiceCTA
          title="Ready to Transform Your Bathroom?"
          description="Schedule your free in-home consultation today. Our design experts will help you create the perfect bathroom for your home and budget."
        />
      </main>
      <Footer />
    </>
  );
}
