import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustBadges = [
  { icon: Star, label: "5-Star Rated" },
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Award, label: "15+ Years Experience" },
  { icon: Clock, label: "On-Time Guarantee" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1200&auto=format&fit=crop&fm=webp"
          alt="Luxury bathroom remodel in Gilbert, Arizona - Best bathroom remodelers near me"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-background/20 rounded-full px-4 py-2 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-background text-sm font-medium">
              4.9 Rating on Google Reviews
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-background leading-tight mb-6 text-balance">
            Best Bathroom Remodeling Company in Gilbert, Arizona
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-background/80 mb-10 max-w-2xl leading-relaxed">
            Looking for bathroom remodelers near me? Transform your bathroom into a luxurious retreat. 
            Our expert craftsmen deliver stunning renovations with bathroom remodel financing near me options available.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6"
            >
              <Link href="/contact">Get Your Free Estimate</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-background/30 text-background hover:bg-background/10 text-base px-8 py-6"
            >
              <Link href="/gallery">View Our Portfolio</Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge, index) => (
              <div
                key={badge.label}
                className="flex items-center gap-3 bg-background/10 backdrop-blur-sm border border-background/20 rounded-lg px-4 py-3"
              >
                <badge.icon className="w-5 h-5 text-primary" />
                <span className="text-background text-sm font-medium">
                  {badge.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>


    </section>
  );
}
