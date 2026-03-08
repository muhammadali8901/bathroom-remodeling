"use client";

import Link from "next/link";
import { Phone, Briefcase, Tag } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function InfoHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-foreground text-background h-[50px] flex items-center text-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-end gap-6">
          <a 
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">{siteConfig.phone}</span>
          </a>
          
          <Link 
            href="/careers"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Briefcase className="w-4 h-4" />
            <span>Careers</span>
          </Link>
          
          <Link 
            href="/offers"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Tag className="w-4 h-4" />
            <span>Special Offers</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
