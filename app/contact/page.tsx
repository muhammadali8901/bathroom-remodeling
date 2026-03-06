import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import ContactSection from "@/components/home/contact-section"
import { GoogleMap } from "@/components/services/google-map"
import { siteConfig } from "@/lib/site-config"
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react"
import { BreadcrumbSchema } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Contact Us | Free Bathroom Remodel Estimate in Chandler, AZ",
  description: `Contact Chandler Bathroom Remodeling for your free bathroom remodeling estimate. Serving Chandler, Sun Lakes, Ahwatukee, Tempe, Mesa, and South Phoenix. Call (480) 555-0123 or book online today.`,
  keywords: ["bathroom remodel near me", "contact remodeling company", "free estimate", "bathroom contractor Chandler", "bathroom contractor"],
  openGraph: {
    title: "Contact Chandler Bathroom Remodeling | Free Remodeling Estimate",
    description: "Get your free bathroom remodeling estimate today. Licensed, insured, and trusted by Chandler homeowners.",
    url: `${siteConfig.url}/contact`,
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Contact Us", url: `${siteConfig.url}/contact` }
        ]} 
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Get In Touch
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground text-balance">
                Contact Us
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Ready to transform your bathroom? Contact us for a free consultation 
                and estimate. We are here to help bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 -mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">Phone</h3>
                <a 
                  href={`tel:${siteConfig.phone}`} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">Email</h3>
                <a 
                  href={`mailto:${siteConfig.email}`} 
                  className="text-muted-foreground hover:text-primary transition-colors block text-sm leading-snug"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">
                  {siteConfig.address.city}, {siteConfig.address.state}
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Mon-Fri: {siteConfig.hours.weekdays}<br />
                  Sat: {siteConfig.hours.saturday}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactSection />

        {/* Testimonials Section */}
        <section className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                What Customers Say
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                Trusted by Chandler Homeowners
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Sarah Johnson",
                  project: "Master Bathroom Remodel",
                  text: "Chandler Bathroom Remodeling transformed our outdated bathroom into a luxury spa-like retreat. The craftsmanship is exceptional!",
                  rating: 5
                },
                {
                  name: "Mike Davis",
                  project: "Walk-in Shower Installation",
                  text: "Professional, punctual, and the quality of work exceeded all expectations. Highly recommend to anyone in Chandler!",
                  rating: 5
                },
                {
                  name: "Jennifer Martinez",
                  project: "Bathroom Vanity Upgrade",
                  text: "Best decision we made for our home. The team was respectful, clean, and the final result is stunning.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div>
                    <p className="font-serif font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-primary">
                      {testimonial.project}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Credentials */}
        <section className="py-16 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Licensed & Bonded", value: "✓" },
                { label: "Fully Insured", value: "✓" },
                { label: "15+ Years", value: "Experienced" },
                { label: "500+ Projects", value: "Completed" }
              ].map((item, index) => (
                <div key={index}>
                  <p className="text-2xl font-bold text-primary mb-2">{item.value}</p>
                  <p className="text-sm text-background/80">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-sm font-medium tracking-widest text-primary uppercase">
                  Find Us
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                  Visit Our Showroom
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Located in the heart of Chandler, Arizona. Stop by to see our latest bathroom remodeling projects.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground text-sm">{siteConfig.address.full}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-foreground mb-2">Phone</h3>
                  <a href={`tel:${siteConfig.phone}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {siteConfig.phone}
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-foreground mb-2">Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Mon-Fri: {siteConfig.hours.weekdays}<br />
                    Sat: {siteConfig.hours.saturday}
                  </p>
                </div>
              </div>

              <GoogleMap 
                lat={siteConfig.address.coordinates.lat}
                lng={siteConfig.address.coordinates.lng}
                zoom={15}
                title={siteConfig.name}
                address={siteConfig.address.full}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
