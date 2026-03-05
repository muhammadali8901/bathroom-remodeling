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
  ChefHat,
  LayoutGrid,
  Lightbulb,
  Square,
  Palette,
  Wrench,
  Home,
  TrendingUp,
  DollarSign,
  Users,
  Leaf,
  Sparkles,
} from "lucide-react";

const breadcrumbs = [
  { name: "Home", url: siteConfig.url },
  { name: "Kitchen Remodeling", url: `${siteConfig.url}/kitchen-remodeling` },
];

const subServices = [
  {
    id: "cabinets",
    icon: LayoutGrid,
    title: "Cabinet Installation",
    description:
      "Transform your kitchen with beautiful, functional cabinetry. Whether you prefer classic shaker style or sleek modern designs, we offer custom and semi-custom options to match your vision and storage needs.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2574&auto=format&fit=crop",
    features: [
      "Custom and semi-custom cabinets",
      "Soft-close hinges and drawers",
      "Pull-out shelving and organizers",
      "Crown molding and decorative details",
      "Wide range of finishes and styles",
    ],
  },
  {
    id: "countertops",
    icon: Square,
    title: "Countertop Installation",
    description:
      "Make a statement with premium countertops that combine beauty and durability. From elegant granite to low-maintenance quartz, we help you select and install the perfect surface for your lifestyle.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2574&auto=format&fit=crop",
    features: [
      "Granite, quartz, and marble options",
      "Butcher block and concrete surfaces",
      "Precision templating and fitting",
      "Seamless edge profiles",
      "Integrated sink options",
    ],
  },
  {
    id: "islands",
    icon: ChefHat,
    title: "Kitchen Islands",
    description:
      "Add functionality and style with a custom kitchen island. Whether you need extra prep space, storage, seating, or all three, we design and build islands that become the heart of your kitchen.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2574&auto=format&fit=crop",
    features: [
      "Custom sizing and configuration",
      "Built-in appliances and sinks",
      "Seating and bar overhangs",
      "Hidden storage solutions",
      "Power outlets and charging stations",
    ],
  },
  {
    id: "backsplash",
    icon: Palette,
    title: "Backsplash & Tile",
    description:
      "Complete your kitchen's look with a stunning backsplash. From classic subway tiles to intricate patterns and natural stone, we create the perfect backdrop for your culinary space.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2574&auto=format&fit=crop",
    features: [
      "Ceramic, porcelain, and glass tiles",
      "Natural stone and brick options",
      "Custom patterns and designs",
      "Full-height backsplash installations",
      "Easy-clean surface options",
    ],
  },
  {
    id: "lighting",
    icon: Lightbulb,
    title: "Kitchen Lighting",
    description:
      "Illuminate your kitchen with thoughtfully designed lighting. From under-cabinet task lighting to stunning pendant fixtures, we create layers of light that enhance both function and ambiance.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2574&auto=format&fit=crop",
    features: [
      "Under-cabinet LED lighting",
      "Pendant and chandelier fixtures",
      "Recessed ceiling lights",
      "Dimmer controls and smart switches",
      "Natural light optimization",
    ],
  },
  {
    id: "full",
    icon: Wrench,
    title: "Complete Kitchen Renovations",
    description:
      "Ready for a complete transformation? Our full kitchen remodels cover everything from layout changes to final touches. We manage the entire project so you can enjoy the exciting journey to your new kitchen.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2574&auto=format&fit=crop",
    features: [
      "Complete design services",
      "Layout and structural changes",
      "Plumbing and electrical upgrades",
      "Appliance installation",
      "Project management from start to finish",
    ],
  },
];

const issues = [
  {
    problem: "Outdated cabinets with limited storage leaving your kitchen cluttered and disorganized",
    solution: "Custom cabinetry with modern organizers, pull-outs, and optimized storage that maximizes every inch.",
  },
  {
    problem: "Worn or damaged countertops that are stained, chipped, or hard to maintain",
    solution: "Durable, beautiful countertops in materials like quartz or granite that resist stains and last for decades.",
  },
  {
    problem: "Poor layout making cooking inefficient with the work triangle broken",
    solution: "Thoughtful layout redesign that optimizes workflow and creates an efficient, functional cooking space.",
  },
  {
    problem: "Insufficient lighting making meal prep difficult and the space feel dark",
    solution: "Layered lighting design with task, ambient, and accent lights for a bright, welcoming kitchen.",
  },
  {
    problem: "Lack of counter space for meal preparation and entertaining",
    solution: "Strategic countertop expansion, islands, or peninsulas that provide ample workspace.",
  },
  {
    problem: "Old appliances that are inefficient and no longer match your cooking needs",
    solution: "Modern appliance integration with proper ventilation, power, and built-in options.",
  },
];

const benefits = [
  {
    icon: Home,
    title: "Highest ROI",
    description: "Kitchen remodels offer the best return on investment, often recouping 75-100% of costs at resale.",
  },
  {
    icon: TrendingUp,
    title: "Improved Efficiency",
    description: "A well-designed kitchen makes cooking and entertaining easier with optimized workflow.",
  },
  {
    icon: DollarSign,
    title: "Energy Savings",
    description: "Modern appliances and LED lighting significantly reduce energy consumption and utility bills.",
  },
  {
    icon: Users,
    title: "Better Entertaining",
    description: "Open layouts and islands create the perfect space for hosting family and friends.",
  },
  {
    icon: Leaf,
    title: "Healthier Cooking",
    description: "More space and better organization encourage home cooking and healthier eating habits.",
  },
  {
    icon: Sparkles,
    title: "Daily Joy",
    description: "A beautiful kitchen you love makes every meal and morning coffee more enjoyable.",
  },
];

const tips = [
  "Focus on the work triangle - the relationship between sink, stove, and refrigerator is key to kitchen efficiency.",
  "Invest in quality cabinets - they're the foundation of your kitchen and will be used daily for years.",
  "Don't forget about outlets - plan for enough power in convenient locations for all your appliances.",
  "Consider your lighting needs carefully - under-cabinet lighting is essential for food preparation.",
  "Choose timeless styles over trendy ones for elements that are expensive to change, like cabinets.",
  "Plan for adequate ventilation - a good range hood keeps your kitchen fresh and protects your finishes.",
  "Think about storage before you choose finishes - functionality should drive design decisions.",
  "Account for workflow when placing appliances - you don't want the dishwasher blocking traffic flow.",
];

const serviceFaqs = [
  {
    question: "How long does a kitchen remodel take in Gilbert, Arizona?",
    answer: "A typical kitchen remodel takes 4-8 weeks depending on scope. Cabinet refacing may take 1-2 weeks, while complete renovations can take 8-12 weeks.",
  },
  {
    question: "Can I stay in my home during a kitchen remodel?",
    answer: "Yes, most homeowners stay during kitchen remodels. We set up a temporary kitchen area and work to minimize disruption to your daily routine.",
  },
  {
    question: "Do you offer kitchen remodel financing?",
    answer: "Yes! We offer flexible financing options including low monthly payments and quick approval to make your dream kitchen affordable.",
  },
];

export default function KitchenRemodelingPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Kitchen Remodeling Services in Gilbert, Arizona"
        serviceDescription="Expert kitchen remodeling services including custom cabinets, countertops, islands, backsplash, lighting, and complete renovations. Serving Gilbert, Arizona and surrounding areas."
        serviceUrl={`${siteConfig.url}/kitchen-remodeling`}
      />
      <FAQSchema faqs={serviceFaqs} />
      <Header />
      <main>
        <ServiceHero
          title="Beautiful Kitchen Remodeling in Gilbert, Arizona"
          subtitle="The Heart of Your Home"
          description="Create the kitchen of your dreams with our comprehensive remodeling services in Gilbert, AZ. From custom cabinets to complete renovations, we deliver stunning results that transform how you cook and live."
          image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2574&auto=format&fit=crop"
          breadcrumbs={breadcrumbs}
        />
        <SubServices
          title="Our Kitchen Remodeling Services"
          subtitle="What We Offer"
          description="From cabinet updates to complete transformations, we offer comprehensive kitchen remodeling services to meet every need and budget."
          services={subServices}
        />
        <IssuesSolved
          title="Problems We Solve"
          subtitle="Common Kitchen Issues"
          description="We understand the frustrations that come with an outdated or dysfunctional kitchen. Here's how we address common challenges."
          issues={issues}
        />
        <Benefits
          title="Benefits of Kitchen Remodeling"
          subtitle="Why Remodel?"
          benefits={benefits}
        />
        <Tips
          title="Kitchen Remodeling Tips"
          subtitle="Expert Advice"
          description="Planning a kitchen remodel? Keep these expert tips in mind to ensure a successful project."
          tips={tips}
        />
        <ProcessSection />
        <Testimonials />
        <ServiceAreas />
        <ServiceCTA
          title="Ready to Transform Your Kitchen?"
          description="Schedule your free in-home consultation today. Our design experts will help you create the perfect kitchen for your home and lifestyle."
        />
      </main>
      <Footer />
    </>
  );
}
