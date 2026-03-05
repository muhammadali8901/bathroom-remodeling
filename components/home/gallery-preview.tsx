"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryItems = [
  {
    id: 1,
    title: "Modern Walk-In Shower",
    category: "bathroom",
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2574&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Luxury Master Bath",
    category: "bathroom",
    before: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2576&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Contemporary Kitchen",
    category: "kitchen",
    before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2574&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Spa-Like Retreat",
    category: "bathroom",
    before: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2669&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2669&auto=format&fit=crop",
  },
];

function BeforeAfterCard({ item }: { item: typeof galleryItems[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* After Image (shown on hover) */}
      <Image
        src={item.after}
        alt={`${item.title} - After`}
        fill
        className="object-cover transition-opacity duration-500"
        style={{ opacity: isHovered ? 1 : 0 }}
      />
      {/* Before Image (default) */}
      <Image
        src={item.before}
        alt={`${item.title} - Before`}
        fill
        className="object-cover transition-opacity duration-500"
        style={{ opacity: isHovered ? 0 : 1 }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* Label */}
      <div className="absolute top-4 left-4">
        <span className={`px-3 py-1 text-xs font-medium rounded-full transition-colors duration-300 ${
          isHovered 
            ? "bg-primary text-primary-foreground" 
            : "bg-background/80 text-foreground"
        }`}>
          {isHovered ? "After" : "Before"}
        </span>
      </div>
      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="font-serif text-xl font-semibold text-background">{item.title}</h3>
        <span className="text-background/70 text-sm capitalize">{item.category}</span>
      </div>
    </div>
  );
}

export default function GalleryPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-primary text-sm font-medium tracking-wider uppercase"
            >
              Our Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance"
            >
              Before & After Transformations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              Hover over each image to see the stunning transformation. These are real projects 
              completed for homeowners in Gilbert and surrounding areas by the best bathroom remodelers near me.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BeforeAfterCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
