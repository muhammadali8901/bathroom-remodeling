"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Ruler, HardHat, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Free Consultation",
    description:
      "Schedule your complimentary in-home consultation. We'll discuss your vision, take measurements, and understand your needs.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Design & Planning",
    description:
      "Our design team creates detailed plans with 3D renderings. You'll see your new space before construction begins.",
  },
  {
    number: "03",
    icon: HardHat,
    title: "Expert Construction",
    description:
      "Our skilled craftsmen bring your vision to life with meticulous attention to detail and quality materials.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Final Walkthrough",
    description:
      "We ensure every detail meets your expectations and leave your space spotless and ready to enjoy.",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium tracking-wider uppercase"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-background text-balance"
          >
            How We Transform Your Space
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-background/70 text-lg leading-relaxed"
          >
            Our streamlined process ensures a stress-free experience from the first call to 
            the final walkthrough. Here&apos;s what to expect.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-px bg-background/20" />
              )}
              
              <div className="relative bg-background/5 border border-background/10 rounded-xl p-8 text-center">
                {/* Number */}
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                  {step.number}
                </span>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 mt-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="font-serif text-xl font-semibold mb-3 text-background">
                  {step.title}
                </h3>
                <p className="text-background/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
