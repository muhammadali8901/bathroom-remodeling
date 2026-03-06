"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a typical bathroom remodel take in Chandler, Arizona?",
    answer:
      "A standard bathroom remodel typically takes 2-4 weeks depending on the scope of work. Simple updates like replacing fixtures may take just a few days, while complete gut renovations with custom tile work can take 4-6 weeks. We also offer bathroom remodel in a day near me services for quick updates. During your free consultation, we'll provide a detailed timeline specific to your project.",
  },
  {
    question: "What is the cost of bathroom remodeling in Chandler, AZ?",
    answer:
      "Bathroom remodeling costs vary based on the size of your bathroom and the materials selected. Basic remodels start around $8,000-$15,000, mid-range renovations typically range from $15,000-$30,000, and luxury bathroom remodels can exceed $30,000. We offer bathroom remodel financing near me to make your dream bathroom affordable. We provide detailed, transparent quotes with no hidden fees.",
  },
  {
    question: "Do you offer bathroom remodel financing near me?",
    answer:
      "Yes! We offer flexible bathroom remodel with financing near me options to fit your budget. Our financing plans include low monthly payments, competitive interest rates, and quick approval. During your consultation, we'll discuss all available financing options to help make your bathroom renovation affordable.",
  },
  {
    question: "Are you the best bathroom remodel company near me?",
    answer:
      "Chandler Bathroom Remodeling is consistently rated as the best bathroom remodel company near me by our customers. We're fully licensed (ROC #123456), bonded, and insured for residential remodeling in Arizona. With 15+ years of experience and hundreds of 5-star reviews, we're the top-rated bathroom remodelers near me in Chandler and the East Valley.",
  },
  {
    question: "Do you offer handicap bathroom remodel contractors near me services?",
    answer:
      "Absolutely! We specialize in handicap bathroom remodel contractors near me services, creating ADA-compliant bathrooms that are both beautiful and accessible. Our accessibility modifications include walk-in tubs, grab bars, roll-in showers, comfort-height toilets, and non-slip flooring. We also offer free bathroom remodel for seniors near me assistance programs.",
  },
  {
    question: "Do you handle commercial bathroom remodel contractors near me projects?",
    answer:
      "Yes, we are experienced commercial bathroom remodel contractors near me serving Chandler and surrounding areas. We work with businesses, offices, restaurants, and commercial properties to deliver professional bathroom renovations with minimal disruption to your operations.",
  },
  {
    question: "Can I stay in my home during the bathroom remodel?",
    answer:
      "Yes, in most cases you can stay in your home during the remodel. If you have multiple bathrooms, we'll coordinate the work to ensure you always have access to facilities. We take care to minimize dust and disruption, cleaning up daily and protecting your home throughout the process.",
  },
  {
    question: "What areas in Arizona do you serve for bathroom remodeling?",
    answer:
      "We primarily serve Chandler, Arizona and nearby East Valley communities including Sun Lakes, Ahwatukee, Tempe, Mesa, and South Phoenix. As the best bathroom remodelers near me, we're proud to serve homeowners throughout the region.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-primary text-sm font-medium tracking-wider uppercase"
            >
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Find answers to common questions about our bathroom 
              remodeling services in Chandler, Arizona.
            </motion.p>
          </div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/20"
                >
                  <AccordionTrigger className="text-left font-serif text-lg font-medium hover:no-underline hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
