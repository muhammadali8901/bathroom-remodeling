"use client";

import { useRef, useEffect, useState } from "react";
import { Shield, Award, Users, Hammer } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "Licensed & Bonded",
    description: "ROC #123456",
  },
  {
    icon: Award,
    title: "BBB A+ Rated",
    description: "Since 2008",
  },
  {
    icon: Users,
    title: "500+ Projects",
    description: "Completed",
  },
  {
    icon: Hammer,
    title: "Lifetime Warranty",
    description: "On All Work",
  },
];

export default function TrustBar() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-secondary py-8 lg:py-12 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className={`flex items-center gap-4 transition-opacity duration-500 ${
                isInView ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <cert.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
