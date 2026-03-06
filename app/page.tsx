import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import TrustBar from "@/components/home/trust-bar";
import { LocalBusinessSchema, FAQSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

// Lazy load below-the-fold components
const WhyChooseUs = dynamic(() => import("@/components/home/why-choose-us"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const BathroomSection = dynamic(() => import("@/components/home/bathroom-section"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const ServicesGrid = dynamic(() => import("@/components/home/services-grid"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const GalleryPreview = dynamic(() => import("@/components/home/gallery-preview"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const ProcessSection = dynamic(() => import("@/components/home/process-section"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const Testimonials = dynamic(() => import("@/components/home/testimonials"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const AboutPreview = dynamic(() => import("@/components/home/about-preview"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const ServiceAreas = dynamic(() => import("@/components/home/service-areas"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const Financing = dynamic(() => import("@/components/home/financing"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const FAQ = dynamic(() => import("@/components/home/faq"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const BlogPreview = dynamic(() => import("@/components/home/blog-preview"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const ContactSection = dynamic(() => import("@/components/home/contact-section"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const FinalCTA = dynamic(() => import("@/components/home/final-cta"), { 
  loading: () => <div className="h-32" />,
  ssr: true 
});

const homeFaqs = [
  {
    question: "How long does a typical bathroom remodel take in Chandler, Arizona?",
    answer:
      "A standard bathroom remodel typically takes 2-4 weeks depending on the scope of work. Simple updates like replacing fixtures may take just a few days, while complete gut renovations with custom tile work can take 4-6 weeks. We also offer bathroom remodel in a day near me services for quick updates.",
  },
  {
    question: "What is the cost of bathroom remodeling in Chandler, AZ?",
    answer:
      "Bathroom remodeling costs vary based on the size of your bathroom and the materials selected. Basic remodels start around $8,000-$15,000, mid-range renovations typically range from $15,000-$30,000, and luxury bathroom remodels can exceed $30,000. We offer bathroom remodel financing near me options.",
  },
  {
    question: "Are you the best bathroom remodel company near me?",
    answer:
      "Yes! Chandler Bathroom Remodeling is consistently rated as one of the top bathroom remodelers near me. We offer complimentary in-home consultations where our design experts will assess your space and provide a detailed estimate.",
  },
  {
    question: "Are you licensed and insured for remodeling work in Arizona?",
    answer:
      "Absolutely. Chandler Bathroom Remodeling is fully licensed (ROC #123456), bonded, and insured for residential remodeling in Arizona. We are proud to be the best bathroom remodel company near me.",
  },
];

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={homeFaqs} />
      <Header />
      <main>
        <Hero />
        <AboutPreview />
        <ServicesGrid />
        <WhyChooseUs />
        <Testimonials />
        <TrustBar />
        <BathroomSection />
        <GalleryPreview />
        <ProcessSection />
        <ServiceAreas />
        <Financing />
        <FAQ />
        <BlogPreview />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
