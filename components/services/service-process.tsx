"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import * as Icons from "lucide-react";

type ProcessStep = {
  number: string;
  icon: string;
  title: string;
  description: string;
};

interface ServiceProcessProps {
  title: string;
  subtitle: string;
  description: string;
  steps: ProcessStep[];
}

export default function ServiceProcess({ title, subtitle, description, steps }: ServiceProcessProps) {
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
            {subtitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-background text-balance"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-background/70 text-lg leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = (Icons as any)[step.icon];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-px bg-background/15" />
                )}

                <div className="relative bg-background/5 border border-background/10 rounded-xl p-8 text-center h-full">
                  {/* Number */}
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 mt-4">
                    {Icon && <Icon className="w-8 h-8 text-primary" />}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
