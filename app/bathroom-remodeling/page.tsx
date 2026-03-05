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
  Lightbulb,
  Droplets,
  Wrench,
  Home,
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
    id: "shower",
    icon: ShowerHead,
    title: "Custom Shower Remodels",
    description:
      "Create your dream shower with custom designs tailored to your space and style. From luxurious rain showers to sleek frameless enclosures, we bring your vision to life with premium materials and expert craftsmanship.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574&auto=format&fit=crop",
    features: [
      "Frameless glass enclosures",
      "Custom tile patterns and designs",
      "Rainfall and multi-head shower systems",
      "Built-in benches and niches",
      "Barrier-free accessible designs",
    ],
  },
  {
    id: "tub",
    icon: Bath,
    title: "Tub-to-Shower Conversions",
    description:
      "Say goodbye to your outdated tub and hello to a spacious, modern shower. Our expert team handles the entire conversion process, ensuring proper waterproofing and drainage for a stunning, functional result.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2574&auto=format&fit=crop",
    features: [
      "Complete tub removal and disposal",
      "New drain installation",
      "Waterproof shower pan systems",
      "Custom glass door options",
      "Accessibility modifications available",
    ],
  },
  {
    id: "tile",
    icon: Grid3X3,
    title: "Tile & Flooring",
    description:
      "Elevate your bathroom with beautiful tile work that stands the test of time. We specialize in all types of tile installation, from classic subway tiles to intricate mosaic patterns and luxury natural stone.",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2669&auto=format&fit=crop",
    features: [
      "Porcelain, ceramic, and natural stone",
      "Heated floor systems",
      "Waterproof membrane installation",
      "Custom patterns and designs",
      "Grout sealing and maintenance",
    ],
  },
  {
    id: "vanity",
    icon: Droplets,
    title: "Vanity & Cabinet Installation",
    description:
      "Maximize your storage and style with custom vanity solutions. From single sinks to double vanities, floating designs to traditional cabinetry, we create the perfect centerpiece for your bathroom.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2574&auto=format&fit=crop",
    features: [
      "Custom and semi-custom cabinets",
      "Granite, quartz, and marble tops",
      "Undermount and vessel sinks",
      "Floating vanity designs",
      "Soft-close drawers and doors",
    ],
  },
  {
    id: "fixtures",
    icon: Lightbulb,
    title: "Lighting & Fixtures",
    description:
      "Complete your bathroom transformation with carefully selected lighting and fixtures. From ambient lighting to task lighting, modern faucets to luxurious showerheads, every detail matters.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2576&auto=format&fit=crop",
    features: [
      "Ambient, task, and accent lighting",
      "Designer faucets and hardware",
      "Luxury showerheads and systems",
      "Smart bathroom technology",
      "Energy-efficient LED options",
    ],
  },
  {
    id: "full",
    icon: Wrench,
    title: "Complete Bathroom Renovations",
    description:
      "Ready for a total transformation? Our full bathroom remodels cover everything from demolition to final touches. We handle all aspects including plumbing, electrical, and finishing work.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2574&auto=format&fit=crop",
    features: [
      "Complete design services",
      "Full demolition and disposal",
      "Plumbing and electrical work",
      "Custom storage solutions",
      "Project management from start to finish",
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
    icon: Home,
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
    question: "How long does a bathroom remodel take in Gilbert, Arizona?",
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
        serviceName="Bathroom Remodeling Services in Gilbert, Arizona"
        serviceDescription="Best bathroom remodel company near me. Expert bathroom remodeling services including custom showers, tub conversions, vanity installation, tile work, and complete renovations. Handicap bathroom remodel contractors near me. Serving Gilbert, Arizona and surrounding areas."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling`}
      />
      <FAQSchema faqs={serviceFaqs} />
      <Header />
      <main>
        <ServiceHero
          title="Best Bathroom Remodeling Company in Gilbert, Arizona"
          subtitle="Best Bathroom Remodelers Near Me"
          description="Looking for bathroom remodelers near me? Create the bathroom of your dreams with our comprehensive remodeling services. From custom showers to complete renovations, we deliver stunning results. Bathroom remodel financing near me available."
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
