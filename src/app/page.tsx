import React from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { RecentWork } from "@/components/sections/RecentWork";
import { Services } from "@/components/sections/Services";
import { CoreArchitecture } from "@/components/sections/CoreArchitecture";
import { Process } from "@/components/sections/Process";
import { Industries } from "@/components/sections/Industries";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Articles } from "@/components/sections/Articles";
import { ContactUs } from "@/components/sections/ContactUs";
import { Footer } from "@/components/layout/Footer";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { BRAND_COLORS } from "@/constants/colors";

export default function HomePage() {
  const accent = BRAND_COLORS.primary.DEFAULT;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Device Frame, Brand Navigation, and Client Marquee */}
      <div className="animate-section-entry">
        <Hero accent={accent} />
      </div>

      {/* About Section with Authentic Legacy & Verified Stats */}
      <SectionReveal>
        <About accent={accent} />
      </SectionReveal>

      {/* What We Do - Interactive Capabilities & Agile Delivery */}
      <SectionReveal>
        <WhatWeDo />
      </SectionReveal>

      {/* Recent Engineering Projects & Case Studies */}
      <SectionReveal>
        <RecentWork accent={accent} />
      </SectionReveal>

      {/* Core Services Interactive Accordion */}
      <SectionReveal>
        <Services accent={accent} />
      </SectionReveal>

      {/* Our Core Architecture - Deep Tech Features & High Availability */}
      <SectionReveal>
        <CoreArchitecture />
      </SectionReveal>

      {/* Proven Engineering Process Steps Carousel */}
      <SectionReveal>
        <Process accent={accent} />
      </SectionReveal>

      {/* Industries & Sectors Served */}
      <SectionReveal>
        <Industries />
      </SectionReveal>

      {/* Testimonials with Enterprise Metrics & Partner Feedback */}
      <SectionReveal>
        <Testimonials accent={accent} />
      </SectionReveal>

      {/* Frequently Asked Questions */}
      <SectionReveal>
        <FAQ />
      </SectionReveal>

      {/* Technology Articles & Engineering Insights */}
      <SectionReveal>
        <Articles accent={accent} />
      </SectionReveal>

      {/* Contact Us Today - Direct Architecture Consultation Inquiry Form */}
      <SectionReveal>
        <ContactUs />
      </SectionReveal>

      {/* Footer with Verified Contact Information & Navigation */}
      <Footer accent={accent} />
    </main>
  );
}
