"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function ServiceAreas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Service Areas
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance">
              Proudly Serving Gilbert & Surrounding Communities
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Based in Gilbert, Arizona, we are the best bathroom remodel company near me, providing premium bathroom and kitchen remodeling 
              services throughout the East Valley. Our team is committed to delivering 
              exceptional craftsmanship to homeowners searching for bathroom remodelers near me.
            </p>

            {/* Service Areas Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {siteConfig.serviceAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3"
                >
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-foreground text-sm font-medium">{area}, AZ</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106456.06989551912!2d-111.85736562344693!3d33.35284399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872ba7c2c5d9eeeb%3A0x8e2c3c2f2d6b0e00!2sGilbert%2C%20AZ!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service area map showing Gilbert, Arizona and surrounding areas"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
