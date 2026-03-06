import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/services/service-hero";
import ServiceCTA from "@/components/services/service-cta";
import ContactSection from "@/components/home/contact-section";
import { bathroomServices } from "@/lib/bathroom-services";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

const serviceMap = bathroomServices.reduce<Record<string, (typeof bathroomServices)[number]>>(
  (acc, service) => {
    const slug = service.href.replace("/", "");
    acc[slug] = service;
    return acc;
  },
  {}
);

export function generateStaticParams() {
  return Object.keys(serviceMap).map((slug) => ({ service: slug }));
}

export function generateMetadata({
  params,
}: {
  params: { service: string };
}): Metadata {
  const service = serviceMap[params.service];
  if (!service) return {};

  const title = `${service.name} in Chandler, Arizona | ${siteConfig.name}`;
  const description = `${service.description} Serving Chandler and nearby areas.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${service.href}`,
    },
  };
}

export default function BathroomServicePage({
  params,
}: {
  params: { service: string };
}) {
  const service = serviceMap[params.service];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title={`${service.name} in Chandler, Arizona`}
          subtitle="Bathroom Micro Service"
          description={service.description}
          image="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: service.name, url: `${siteConfig.url}${service.href}` },
          ]}
        />
        <ServiceCTA
          title={`Ready for ${service.name}?`}
          description="Schedule your free consultation today. Our team will plan, design, and deliver a flawless bathroom upgrade."
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
