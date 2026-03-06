import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/lib/site-config"
import { Check, Calculator, Clock, Shield, CreditCard } from "lucide-react"

export const metadata: Metadata = {
  title: "Bathroom Remodel Financing Near Me | Chandler Bathroom Remodeling",
  description: "Looking for bathroom remodel financing near me? Flexible financing options for your bathroom remodeling project in Chandler, Arizona. Low monthly payments and competitive rates available. Bathroom remodel with financing near me.",
}

const benefits = [
  {
    icon: Calculator,
    title: "Low Monthly Payments",
    description: "Spread the cost of your remodel over manageable monthly payments that fit your budget."
  },
  {
    icon: Clock,
    title: "Quick Approval",
    description: "Get approved in minutes with our streamlined application process. Start your project sooner."
  },
  {
    icon: Shield,
    title: "Competitive Rates",
    description: "We partner with top lenders to offer you the best rates and terms available."
  },
  {
    icon: CreditCard,
    title: "Flexible Terms",
    description: "Choose from various repayment terms to find the option that works best for you."
  }
]

const plans = [
  {
    title: "Same as Cash",
    term: "12 Months",
    description: "Pay no interest if paid in full within 12 months",
    features: [
      "No interest if paid in full",
      "Low monthly payments",
      "No prepayment penalties",
      "Quick approval process"
    ]
  },
  {
    title: "Low Rate Financing",
    term: "24-60 Months",
    description: "Extended terms with competitive fixed rates",
    features: [
      "Fixed monthly payments",
      "Rates as low as 6.99% APR",
      "Terms up to 60 months",
      "No early payoff penalties"
    ]
  },
  {
    title: "Deferred Interest",
    term: "18 Months",
    description: "No interest charged if paid within promotional period",
    features: [
      "No interest if paid in full",
      "Longer promotional period",
      "Flexible payment options",
      "Easy online account management"
    ]
  }
]

export default function FinancingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Financing Options
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground text-balance">
                Make Your Dream Remodel Affordable
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Don&apos;t let budget constraints hold you back. We offer flexible financing options to help 
                you achieve the bathroom of your dreams with payments that fit your lifestyle.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">Apply for Financing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                Why Finance With Us?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                We make it easy to afford your home improvement project with flexible options designed for your needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                Financing Plans
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that works best for your budget and project scope.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan) => (
                <Card key={plan.title} className="border-border">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">{plan.title}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {plan.term}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                How Financing Works
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-semibold mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    Get Your Estimate
                  </h3>
                  <p className="text-muted-foreground">
                    Schedule a free consultation to discuss your project and receive a detailed estimate.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-semibold mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    Apply Online
                  </h3>
                  <p className="text-muted-foreground">
                    Complete a simple online application. Most applicants receive a decision in minutes.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-semibold mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    Start Your Project
                  </h3>
                  <p className="text-muted-foreground">
                    Once approved, we can begin your remodel right away with affordable monthly payments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground">
                Ready to Get Started?
              </h2>
              <p className="mt-4 text-primary-foreground/80 text-lg">
                Contact us today to discuss financing options for your bathroom remodel.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Get Free Estimate</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <a href={`tel:${siteConfig.phone}`}>Call {siteConfig.phone}</a>
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
