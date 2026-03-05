"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Gilbert, AZ",
    rating: 5,
    service: "Bathroom Remodel",
    content:
      "The team exceeded our expectations in every way. Our master bathroom went from dated and cramped to a spa-like retreat. The attention to detail was remarkable, and they finished on time and on budget.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Michael Thompson",
    location: "Gilbert, AZ",
    rating: 5,
    service: "Kitchen Renovation",
    content:
      "From the initial consultation to the final walkthrough, the experience was seamless. They transformed our 1990s kitchen into a modern culinary space. The custom cabinetry is absolutely stunning.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Jennifer Garcia",
    location: "Mesa, AZ",
    rating: 5,
    service: "Shower Conversion",
    content:
      "We converted our old tub to a beautiful walk-in shower, and I couldn't be happier. The frameless glass and rainfall showerhead make it feel like a luxury hotel. Highly recommend!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "David Chen",
    location: "Chandler, AZ",
    rating: 5,
    service: "Full Bathroom Remodel",
    content:
      "Professional from start to finish. The team communicated clearly throughout the project and delivered exactly what they promised. Our guest bathroom is now the highlight of our home!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium tracking-wider uppercase"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Don&apos;t just take our word for it. Here&apos;s what homeowners throughout Gilbert 
            and the surrounding areas have to say about their experience with the best bathroom remodelers near me.
          </motion.p>
        </div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-card border border-border rounded-2xl p-8 lg:p-12">
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/20" />

            {/* Content */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Image */}
              <div className="shrink-0">
                <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                {/* Rating */}
                <div className="flex justify-center lg:justify-start gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground text-lg lg:text-xl leading-relaxed mb-6">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>

                {/* Author */}
                <div>
                  <h4 className="font-serif text-xl font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].location} • {testimonials[currentIndex].service}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center lg:justify-end gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-border"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="w-5 h-5" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
