import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Privacy Policy | Gilbert Bath & Kitchen",
  description: "Privacy Policy for Gilbert Bath & Kitchen. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-24 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                Privacy Policy
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
                Information We Collect
              </h2>
              <p className="text-muted-foreground mb-4">
                At {siteConfig.name}, we collect information you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Name, email address, and phone number when you request a quote</li>
                <li>Project details and preferences when you contact us</li>
                <li>Communication history when you correspond with us</li>
              </ul>

              <h2 className="text-2xl font-serif font-semibold text-foreground mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you project updates and promotional communications</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-serif font-semibold text-foreground mt-8 mb-4">
                Information Sharing
              </h2>
              <p className="text-muted-foreground mb-6">
                We do not sell, trade, or otherwise transfer your personal information to outside parties. 
                This does not include trusted third parties who assist us in operating our website, 
                conducting our business, or servicing you, so long as those parties agree to keep this 
                information confidential.
              </p>

              <h2 className="text-2xl font-serif font-semibold text-foreground mt-8 mb-4">
                Data Security
              </h2>
              <p className="text-muted-foreground mb-6">
                We implement a variety of security measures to maintain the safety of your personal 
                information. Your personal information is contained behind secured networks and is only 
                accessible by a limited number of persons who have special access rights.
              </p>

              <h2 className="text-2xl font-serif font-semibold text-foreground mt-8 mb-4">
                Cookies
              </h2>
              <p className="text-muted-foreground mb-6">
                We use cookies to understand and save your preferences for future visits and compile 
                aggregate data about site traffic and site interaction so that we can offer better 
                site experiences and tools in the future.
              </p>

              <h2 className="text-2xl font-serif font-semibold text-foreground mt-8 mb-4">
                Your Rights
              </h2>
              <p className="text-muted-foreground mb-6">
                You have the right to access, correct, or delete your personal information at any time. 
                To exercise these rights, please contact us at {siteConfig.email}.
              </p>

              <h2 className="text-2xl font-serif font-semibold text-foreground mt-8 mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
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
