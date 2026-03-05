import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Terms of Service | Gilbert Bath & Kitchen",
  description: "Terms of Service for Gilbert Bath & Kitchen. Read our terms and conditions for using our services.",
}

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-24 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                Terms of Service
              </h1>
              <p className="mt-4 text-muted-foreground">
                Last updated: January 2024
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <h2 className="text-2xl font-serif font-semibold text-foreground mt-8 mb-4">
                Agreement to Terms
              </h2>
              <p className="text-muted-foreground mb-6">
                By accessing or using the services of {siteConfig.name}, you agree to be bound by these 
                Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-serif font-semibold text-foreground mt-8 mb-4">
                Services Provided
              </h2>
              <p className="text-muted-foreground mb-4">
                {siteConfig.name} provides professional bathroom and kitchen remodeling services including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Complete bathroom renovations</li>
                <li>Kitchen remodeling and upgrades</li>
                <li>Shower and tub installations</li>
                <li>Vanity and countertop replacements</li>
                <li>Tile work and flooring</li>
                <li>Plumbing and fixture installations</li>
              </ul>

              <h2 className="text-2xl font-serif font-semibold text-foreground mt-8 mb-4">
                Estimates and Pricing
              </h2>
              <p className="text-muted-foreground mb-6">
                All estimates provided are based on the information available at the time of assessment. 
                Final pricing may vary based on actual conditions discovered during the project, material 
                selections, and any changes requested by the client. Written contracts will be provided 
                for all projects exceeding $500.
              </p>

              <h2 className="text-2xl font-serif font-semibold text-foreground mt-8 mb-4">
                Project Timeline
              </h2>
              <p className="text-muted-foreground mb-6">
                Project timelines are estimates and may be affected by factors including material 
                availability, unforeseen structural issues, permit requirements, and weather conditions. 
                We will communicate any delays promptly and work to minimize disruption to your schedule.
              </p>

              <h2 className="text-2xl font-serif font-semibold text-foreground mt-8 mb-4">
                Warranties
              </h2>
              <p className="text-muted-foreground mb-6">
                We stand behind our workmanship with a comprehensive warranty. Labor is warranted for 
                2 years from project completion. Manufacturer warranties apply to all installed products 
                and fixtures. Warranty claims must be submitted in writing within the warranty period.
              </p>

              <h2 className="text-2xl font-serif font-semibold text-foreground mt-8 mb-4">
                Payment Terms
              </h2>
              <p className="text-muted-foreground mb-6">
                Payment schedules will be outlined in your project contract. Typically, a deposit is 
                required to begin work, with progress payments due at specified milestones. Final payment 
                is due upon project completion and client approval.
              </p>

              <h2 className="text-2xl font-serif font-semibold text-foreground mt-8 mb-4">
                Cancellation Policy
              </h2>
              <p className="text-muted-foreground mb-6">
                Cancellations made more than 7 days before scheduled work begins may receive a full refund 
                of any deposits, less any costs already incurred for materials or permits. Cancellations 
                made within 7 days may be subject to a cancellation fee.
              </p>

              <h2 className="text-2xl font-serif font-semibold text-foreground mt-8 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-muted-foreground mb-6">
                {siteConfig.name} shall not be liable for any indirect, incidental, special, or 
                consequential damages arising from the use of our services. Our total liability shall 
                not exceed the amount paid for the specific service giving rise to the claim.
              </p>

              <h2 className="text-2xl font-serif font-semibold text-foreground mt-8 mb-4">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-6">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-secondary rounded-lg p-6">
                <p className="text-foreground font-medium">{siteConfig.name}</p>
                <p className="text-muted-foreground">{siteConfig.address.full}</p>
                <p className="text-muted-foreground">{siteConfig.email}</p>
                <p className="text-muted-foreground">{siteConfig.phone}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
