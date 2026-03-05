"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Clock, DollarSign, HeartHandshake, Ruler, Shield } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Expert Craftsmanship",
    description:
      "Our master craftsmen bring decades of combined experience to every project, ensuring flawless execution and stunning results.",
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    description:
      "We respect your time with detailed project timelines and a commitment to finishing on schedule, every time.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden fees or surprises. Get detailed, upfront quotes that include everything from materials to final cleanup.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Service",
    description:
      "Work directly with our design team to bring your vision to life with custom solutions tailored to your needs.",
  },
  {
    icon: Ruler,
    title: "Premium Materials",
    description:
      "We source only the finest materials from trusted suppliers, ensuring durability and timeless beauty.",
  },
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description:
      "Stand behind our work with comprehensive warranties that give you peace of mind for years to come.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium tracking-wider uppercase"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance"
          >
            The Difference is in the Details
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Discover why Gilbert homeowners trust us as the best bathroom remodel company near me. 
            We combine artisan skill with modern efficiency to deliver exceptional results.
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
