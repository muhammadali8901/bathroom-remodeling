import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { siteConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"
import { Award, Users, Clock, Shield, CheckCircle2, ArrowRight, Phone, Pencil, Hammer, Sparkles, Star } from "lucide-react"
import { BreadcrumbSchema } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "About Us | Best Bathroom Remodel Company Near Me in Gilbert, AZ",
  description: `Learn about Gilbert Bath & Kitchen, Gilbert, Arizona's premier bathroom and kitchen remodeling company. 15+ years of experience, 500+ projects completed, best bathroom remodelers near me with 100% satisfaction guarantee.`,
  keywords: ["about bathroom remodeling", "bathroom contractors Gilbert Arizona", "best remodelers near me", "local bathroom company", "experienced remodelers"],
  openGraph: {
    title: "About Gilbert Bath & Kitchen | Premium Bathroom & Kitchen Remodeling",
    description: "Award-winning bathroom and kitchen remodeling company in Gilbert, AZ with 15+ years of expertise and 100% customer satisfaction.",
    url: `${siteConfig.url}/about`,
    type: "website",
  },
}

const values = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "Every project reflects our commitment to excellence and attention to detail."
  },
  {
    icon: Users,
    title: "Customer-Focused",
    description: "Your vision is our priority. We listen, collaborate, and deliver results that exceed expectations."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time with efficient project management and reliable scheduling."
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Full protection and peace of mind with proper licensing and comprehensive insurance."
  },
]

const milestones = [
  { number: "15+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "100%", label: "Satisfaction Rate" },
  { number: "5", label: "Star Reviews" },
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "About Us", url: `${siteConfig.url}/about` }
        ]} 
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Our Story
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground text-balance">
                About {siteConfig.name}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                For over 15 years, we have been transforming bathrooms and kitchens across 
                Gilbert, Arizona with exceptional craftsmanship and personalized service. We are the best bathroom remodel company near me.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">
                    {milestone.number}
                  </p>
                  <p className="mt-2 text-primary-foreground/80 text-sm uppercase tracking-wider">
                    {milestone.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/about-bathroom.jpg"
                    alt="Master bathroom renovation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border">
                  <p className="text-4xl font-serif font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">Years in Business</p>
                </div>
              </div>
              
              <div>
                <span className="text-sm font-medium tracking-widest text-primary uppercase">
                  Who We Are
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                  Building Dream Spaces Since 2010
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {siteConfig.name} was founded with a simple mission: to help homeowners 
                  in Gilbert, Arizona create beautiful, functional spaces they love. What 
                  started as a small family business has grown into the region&apos;s most 
                  trusted remodeling company - the best bathroom remodelers near me.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our team of skilled craftsmen combines traditional techniques with modern 
                  innovation to deliver exceptional results on every project. We believe 
                  that your home should reflect your style and meet your needs, which is 
                  why we take a personalized approach to every remodel.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Family-owned and operated", "Local Gilbert, AZ business", "Experienced design team", "Premium materials only"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                What Drives Us
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                Our Core Values
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Our Process
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                How We Work
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our streamlined process ensures a stress-free remodeling experience from start to finish
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Phone,
                  title: "Free Consultation",
                  description: "Schedule your complimentary in-home consultation to discuss your vision"
                },
                {
                  icon: Pencil,
                  title: "Design & Planning",
                  description: "Our design team creates detailed plans with 3D renderings of your space"
                },
                {
                  icon: Hammer,
                  title: "Expert Construction",
                  description: "Skilled craftsmen execute every detail with precision and quality materials"
                },
                {
                  icon: Sparkles,
                  title: "Final Walkthrough",
                  description: "We ensure every detail exceeds expectations before handoff"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition Section */}
        <section className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Recognition
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                Award-Winning Quality
              </h2>
              <p className="mt-4 text-muted-foreground">
                Recognized for excellence in craftsmanship and customer satisfaction
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  award: "Best Local Contractor",
                  issuer: "Gilbert Business Awards",
                  year: "2024"
                },
                {
                  award: "Customer Excellence Award",
                  issuer: "Arizona Home Improvement Alliance",
                  year: "2023"
                },
                {
                  award: "Top Rated Remodeler",
                  issuer: "Google Reviews",
                  year: "Ongoing"
                },
                {
                  award: "Licensed & Insured",
                  issuer: "Arizona ROC",
                  year: "Current"
                },
                {
                  award: "5-Star Rating",
                  issuer: "Customer Reviews",
                  year: "4.9/5.0"
                },
                {
                  award: "Certified Professional",
                  issuer: "National Kitchen & Bath Association",
                  year: "2024"
                }
              ].map((recognition, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-8 text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-serif font-semibold text-foreground mb-2">
                    {recognition.award}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {recognition.issuer}
                  </p>
                  <p className="text-xs font-medium text-primary">
                    {recognition.year}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
              {[
                { label: "Licensed & Bonded", icon: "✓" },
                { label: "Fully Insured", icon: "✓" },
                { label: "15+ Years Experience", icon: "✓" },
                { label: "100% Satisfaction", icon: "✓" }
              ].map((badge, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-primary mb-2">{badge.icon}</div>
                  <p className="text-sm font-medium text-foreground">{badge.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                Ready to Start Your Remodeling Project?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Contact us today for a free consultation. Let&apos;s discuss your vision and 
                create a plan to transform your space.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={`tel:${siteConfig.phone}`}>
                    Call {siteConfig.phone}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
