import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <span className="font-serif text-3xl font-semibold text-background group-hover:text-primary transition-colors">
                Chandler
              </span>
              <span className="block text-xs tracking-[0.2em] uppercase text-background/60 -mt-1">
                Bathroom Remodeling
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Premier bathroom remodeling services in Chandler, Arizona. 
              The best bathroom remodel company near me, transforming homes with luxury designs and exceptional craftsmanship since 2008.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-200"
                aria-label="Twitter / X"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-background">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/bathroom-remodeling"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Bathroom Remodeling
                </Link>
              </li>
              <li>
                <Link
                  href="/bathroom-remodeling#shower-remodeling"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Shower Remodeling
                </Link>
              </li>
              <li>
                <Link
                  href="/bathroom-remodeling#bathtub-installation"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Bathtub Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/bathroom-remodeling#walk-in-shower-installation"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Walk-in Shower Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-background">Quick Links</h3>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/financing"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Financing Options
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-background">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-background/70 text-sm">
                  {siteConfig.address.full}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div className="text-background/70 text-sm">
                  <p>Mon-Fri: {siteConfig.hours.weekdays}</p>
                  <p>Sat: {siteConfig.hours.saturday}</p>
                  <p>Sun: {siteConfig.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="text-center">
            <h4 className="text-sm font-medium text-background/60 mb-3">
              Proudly Serving
            </h4>
            <p className="text-background/70 text-sm">
              {siteConfig.serviceAreas.join(" • ")}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-background/50 hover:text-background/70 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-background/50 hover:text-background/70 transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-background/50 hover:text-background/70 transition-colors text-sm"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
