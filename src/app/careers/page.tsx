import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CareerJobListings } from "@/components/sections/CareerJobListings";
import { ContactUs } from "@/components/sections/ContactUs";
import { SITE_CONFIG } from "@/constants/siteConfig";

export const metadata: Metadata = {
  title: `Careers & Opportunities — ${SITE_CONFIG.fullName}`,
  description:
    "Join NAS Infotech's global engineering squad. Explore remote and on-site career opportunities across Software Engineering, Web Development, AI/ML, Cloud DevOps, and Product Design.",
  keywords: [
    "NAS Infotech Careers",
    "Software Engineering Jobs",
    "Web Developer Careers",
    "AI ML Engineer Jobs",
    "DevOps Careers Pune",
    "Remote IT Jobs India",
  ],
};

const CULTURE_BENEFITS = [
  {
    icon: "🌐",
    title: "Remote-First Flexibility",
    description:
      "Work from anywhere in India with core collaboration overlap. We prioritize clear outcomes and autonomous focus over micro-management.",
  },
  {
    icon: "🎓",
    title: "Continuous Upskilling",
    description:
      "Annual allowances for AWS, GCP, Azure, and deep tech certifications. We invest directly in your professional and architectural growth.",
  },
  {
    icon: "⚡",
    title: "Modern Engineering Stacks",
    description:
      "Build with Next.js, Go, Python, PyTorch, Kubernetes, and serverless architectures. No legacy codebases or obsolete tools.",
  },
  {
    icon: "🤝",
    title: "High-Autonomy Squads",
    description:
      "Cross-functional squads with transparent sprint cadences, blameless post-mortems, and direct client architecture exposure.",
  },
  {
    icon: "📈",
    title: "Competitive Compensation",
    description:
      "Above-market baseline compensation, bi-annual performance bonuses, and transparent merit-based career progression ladders.",
  },
  {
    icon: "🛡️",
    title: "Health & Comprehensive Wellness",
    description:
      "Comprehensive medical coverage for you and your dependents, paid time off, mental wellness resources, and parental leaves.",
  },
];

const HIRING_STEPS = [
  {
    number: "01",
    title: "Application & Portfolio Review",
    timeframe: "Within 48 Hours",
    description:
      "Our technical recruiters review your GitHub, portfolio, and experience to assess alignment with active squad requirements.",
  },
  {
    number: "02",
    title: "Technical Discovery Call",
    timeframe: "30-45 Minutes",
    description:
      "A conversational session with an engineering lead to discuss your previous projects, architectural philosophy, and problem-solving mindset.",
  },
  {
    number: "03",
    title: "Practical Architecture Challenge",
    timeframe: "Take-Home / Live Pairing",
    description:
      "A realistic, real-world coding or system design scenario designed to mirror day-to-day challenges rather than algorithmic trivia.",
  },
  {
    number: "04",
    title: "Executive Chat & Formal Offer",
    timeframe: "2-3 Days",
    description:
      "Meet leadership to discuss team culture and mutual expectations, followed by a competitive offer letter and seamless onboarding.",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col font-sans text-[#0a1118]">
      {/* 1. Global Standardized Top Navbar */}
      <Navbar />

      {/* 2. Hero Section (Matching /about and /industries standard) */}
      <section className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] overflow-hidden flex items-center justify-center">
        {/* Background Real Image */}
        <Image
          src="/About/aboutHerosection.jpg"
          alt="NAS Infotech Careers & Opportunities"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Forest Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1b10]/92 via-[#0d2a17]/88 to-[#0a1b10]/92" />

        {/* Ambient Gold Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[300px] bg-[#FFB057]/15 rounded-full blur-[130px] pointer-events-none" />

        {/* Centered Banner Content & Breadcrumb */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-[65px] font-black text-white tracking-tight mb-4">
            Join Our <span className="text-[#FFB057]">Team</span>
          </h1>

          {/* Breadcrumbs */}
          <div className="flex items-center gap-3 text-base sm:text-lg font-semibold text-gray-200">
            <Link href="/" className="hover:text-[#FFB057] transition-colors">
              Home
            </Link>
            <span className="text-[#FFB057]">/</span>
            <span className="text-[#FFB057]">Careers</span>
          </div>
        </div>
      </section>

      {/* 3. Sub-Hero Workplace Values & Core Metrics Band */}
      <section className="py-14 sm:py-20 bg-[#f9f8f4] border-b border-[#ece8de]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Value Proposition */}
            <div className="lg:col-span-7 flex flex-col items-start gap-5">
              <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0e1b13]">
                Engineer the Future of <span className="text-[#FFB057]">Enterprise Software</span>.
              </h2>

              <p className="text-base sm:text-lg text-[#55675d] leading-relaxed max-w-2xl font-medium">
                At NAS Infotech, we collaborate with leading enterprises across the globe to solve mission-critical challenges. We believe in engineering autonomy, psychological safety, and fostering an environment where engineers can do their career-defining work.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href="#openings" variant="primary" withArrow>
                  Explore Open Roles
                </Button>
                <Link
                  href="#culture"
                  className="inline-flex items-center justify-center font-bold text-xs sm:text-sm px-6 py-3 rounded-full border-2 border-[#0b3b24] text-[#0b3b24] hover:bg-[#0b3b24] hover:text-white transition-all duration-200 shadow-2xs"
                >
                  Our Culture &amp; Perks
                </Link>
              </div>
            </div>

            {/* Right Metrics Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 w-full">
              <div className="p-6 rounded-2xl bg-white border border-[#ece8de] shadow-2xs space-y-1">
                <span className="text-3xl sm:text-4xl font-black text-[#0b3b24]">100%</span>
                <p className="text-xs sm:text-sm font-bold text-[#0e1b13]">Remote-First</p>
                <p className="text-[11px] text-[#55675d] font-medium leading-tight">Work from anywhere across India</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#ece8de] shadow-2xs space-y-1">
                <span className="text-3xl sm:text-4xl font-black text-[#0b3b24]">98%</span>
                <p className="text-xs sm:text-sm font-bold text-[#0e1b13]">Retention Rate</p>
                <p className="text-[11px] text-[#55675d] font-medium leading-tight">Long-term career progression</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#ece8de] shadow-2xs space-y-1">
                <span className="text-3xl sm:text-4xl font-black text-[#0b3b24]">1:5</span>
                <p className="text-xs sm:text-sm font-bold text-[#0e1b13]">Lead Ratio</p>
                <p className="text-[11px] text-[#55675d] font-medium leading-tight">Direct mentorship from architects</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#ece8de] shadow-2xs space-y-1">
                <span className="text-3xl sm:text-4xl font-black text-[#0b3b24]">100%</span>
                <p className="text-xs sm:text-sm font-bold text-[#0e1b13]">Certification</p>
                <p className="text-[11px] text-[#55675d] font-medium leading-tight">Sponsored cloud exams &amp; courses</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Culture & Benefits Section ("Why Join NAS Infotech") */}
      <section id="culture" className="py-20 sm:py-28 bg-white border-b border-neutral-100">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0e1b13]">
                Life at <span className="text-[#FFB057]">NAS Infotech</span>.
              </h2>
              <p className="text-base sm:text-lg text-[#55675d] font-medium max-w-xl mt-3 leading-relaxed">
                We believe that great software is built by fulfilled, supported teams. Here is how we ensure you grow both technically and personally.
              </p>
            </div>
            <a
              href="mailto:hr@nas-infotech.com"
              className="text-xs sm:text-sm font-bold text-[#0b3b24] hover:text-[#FFB057] transition-colors inline-flex items-center gap-1.5"
            >
              Have questions for our HR team? <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CULTURE_BENEFITS.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-[#f9f8f4] border border-[#ece8de] hover:border-[#FFB057] transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#ece8de] flex items-center justify-center text-2xl shadow-xs">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0e1b13]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#55675d] font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Open Positions Section (Interactive Filterable Component) */}
      <CareerJobListings />

      {/* 6. Hiring Process Timeline Section */}
      <section className="py-20 sm:py-28 bg-[#0a2218] text-white border-b border-[#153e2a]">
        <Container>
          <div className="flex flex-col items-start gap-4 mb-14 max-w-2xl">
            <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-white">
              Our Transparent <span className="text-[#FFB057]">Hiring Process</span>.
            </h2>
            <p className="text-sm sm:text-base text-[#a3b9ac] leading-relaxed font-medium">
              We respect your time. Our 4-stage recruitment pipeline is structured, clear, and designed to evaluate real-world engineering craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIRING_STEPS.map((step) => (
              <div
                key={step.number}
                className="p-8 rounded-3xl bg-[#0f2e21] border border-[#ffc260]/15 flex flex-col justify-between hover:border-[#ffc260]/40 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-[#FFB057] font-mono">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      {step.timeframe}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#a3b9ac] leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Direct Resume Inquiry & Speculative Application Form */}
      <ContactUs
        id="speculative-application"
        title={
          <>
            Didn&apos;t find your exact role?{" "}
            <span className="text-[#FFB057]">Send us your resume.</span>
          </>
        }
        subtitle="We are constantly expanding our squads. Tell us about your background, previous builds, and the technology domain you are most passionate about."
        projectTypes={[
          "Full Stack Software Engineer",
          "Frontend Web Developer",
          "AI / ML Engineer",
          "Cloud DevOps & SRE",
          "UX/UI Product Designer",
          "Product & Delivery Manager",
        ]}
        defaultProjectType="Full Stack Software Engineer"
      />

      {/* 8. Global Standardized Footer */}
      <Footer />
    </main>
  );
}
