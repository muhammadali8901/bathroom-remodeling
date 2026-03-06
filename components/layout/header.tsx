"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { bathroomServices } from "@/lib/bathroom-services";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const servicesMenu = bathroomServices
    .filter((service) => service.name !== "Bathroom Remodeling")
    .slice(0, 8); // show 8 micro services consistently

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex flex-col hover:scale-102 transition-transform duration-200">
              <span className="font-serif text-2xl lg:text-3xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                Chandler
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground -mt-1">
                Bath & Kitchen
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
            {/* Services Dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                aria-expanded={isServicesOpen}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-card rounded-lg shadow-xl border border-border p-1 opacity-100 animate-in fade-in slide-in-from-top-2 duration-200">
                  {servicesMenu.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-4 py-2.5 rounded-md hover:bg-primary/10 transition-all duration-200 text-sm font-medium text-foreground hover:text-primary"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA - Call Button with Primary Color */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/90 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:from-primary/90 hover:to-primary active:scale-95 transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden xl:inline">{siteConfig.phone}</span>
              <span className="xl:hidden">Call Now</span>
            </a>
            <Button asChild className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-6 font-semibold">
              <Link href="/contact">Free Estimate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col gap-4">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium py-2 border-b border-border text-foreground"
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile Services Section */}
              <div className="py-2 border-b border-border">
                <span className="text-lg font-medium text-foreground">Services</span>
                <div className="mt-3 space-y-3 pl-4">
                  {servicesMenu.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-foreground"
                >
                  <Phone className="w-5 h-5" />
                  {siteConfig.phone}
                </a>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">Get Free Estimate</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>

    {/* Mobile Sticky Call Button */}
    <a
      href={`tel:${siteConfig.phone}`}
      className="lg:hidden fixed bottom-4 right-4 z-50 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/90 text-white font-bold rounded-full shadow-2xl hover:shadow-3xl active:scale-95 transition-all duration-200 animate-in slide-in-from-bottom-4"
    >
      <Phone className="w-5 h-5" />
      Call Now
    </a>
    </>
  );
}
