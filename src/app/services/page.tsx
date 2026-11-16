import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Industries } from "@/components/sections/Industries";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { BRAND_COLORS } from "@/constants/colors";

export const metadata: Metadata = {
  title: `Services & Capabilities — ${SITE_CONFIG.fullName}`,
  description:
    "Explore our complete range of digital engineering services: Custom Software Development, AI/ML, Salesforce, Cloud & DevOps.",
};

export default function ServicesPage() {
  const accent = BRAND_COLORS.primary.DEFAULT;

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Top Navbar */}
      <div className="border-b border-neutral-100 bg-white">
        <Container size="wide">
          <Navbar accent={accent} />
        </Container>
      </div>

      {/* Subpage Hero Header */}
      <section className="bg-white py-12 md:py-16 border-b border-neutral-100">
        <Container>
          <div className="flex flex-col items-start gap-4 max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-heading">
              Full-Spectrum Creative &amp; Engineering Services.
            </h1>
            <p className="text-sm leading-relaxed text-body font-medium">
              From architectural discovery and AI pipelines to scalable cloud infrastructure, {SITE_CONFIG.fullName} delivers the technical power your enterprise requires to grow.
            </p>
          </div>
        </Container>
      </section>

      {/* Interactive Accordion Services */}
      <Services accent={accent} />

      {/* Proven Engineering Process Steps */}
      <Process accent={accent} />

      {/* Industries Grid */}
      <Industries />

      {/* Ready to start banner */}
      <section className="py-16 bg-[#071d11] text-white">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-lg">
              <h3 className="text-2xl sm:text-3xl font-bold">
                Ready to engineer your next technical breakthrough?
              </h3>
              <p className="text-xs text-slate-300 font-medium">
                Schedule a discovery session with our lead architects today.
              </p>
            </div>
            <Button href="/#contact" variant="primary" withArrow>
              Start Your Project
            </Button>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <Footer accent={accent} />
    </main>
  );
}
