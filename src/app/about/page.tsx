import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AccordionSection } from "@/components/ui/AccordionSection";
import { AboutPerspective } from "@/components/sections/AboutPerspective";
import { AboutTestimonials } from "@/components/sections/AboutTestimonials";
import { BRAND_COLORS } from "@/constants/colors";
import { SITE_CONFIG } from "@/constants/siteConfig";

export const metadata: Metadata = {
  title: `About Us — ${SITE_CONFIG.fullName}`,
  description:
    "Discover our journey, mission, values, and engineering team powering digital architectures at NAS Infotech.",
};

export default function AboutPage() {
  const accent = BRAND_COLORS.primary.DEFAULT;

  // Approach / Mission, Vision, Values Cards
  const approachCards = [
    {
      id: 1,
      title: "Our Mission",
      description:
        "Our mission is to empower businesses with robust, scalable and secure IT solutions that enhance efficiency, foster innovation and drive growth.",
      imageUrl:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
      tag: "Enterprise Stability",
    },
    {
      id: 2,
      title: "Our Vision",
      description:
        "We envision a world where businesses of all sizes can harness the power of technology to achieve their full potential.",
      imageUrl:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600",
      tag: "Scalable Paradigms",
    },
    {
      id: 3,
      title: "Our Values",
      description:
        "At our company, we uphold a commitment to honesty, integrity and ethics in everything we do.",
      imageUrl:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600",
      tag: "Transparency & Trust",
    },
  ];

  // Perspective / Why Choose Us Features
  const perspectiveFeatures = [
    {
      id: 0,
      tag: "Vanguard Architecture",
      title: "Deep Architectural Expertise",
      description:
        "Our engineered solutions aren't just built; they are architected to withstand enterprise-grade operational loads with absolute structural integrity.",
      metric: "99.99% Uptime",
    },
    {
      id: 1,
      tag: "Next-Gen Paradigms",
      title: "Continuous Digital Innovation",
      description:
        "We completely bypass yesterday's standards, building with progressive software paradigms and highly real-time edge processing nodes.",
      metric: "<45ms Latency",
    },
    {
      id: 2,
      tag: "Bulletproof Security",
      title: "High-Performance Integrity",
      description:
        "Security isn't a wrapper or an afterthought. Our solutions feature cryptographic zero-trust validation baked deep directly within the runtime layer.",
      metric: "Zero Leak History",
    },
    {
      id: 3,
      tag: "Precision Customization",
      title: "Hyper-Tailored Infrastructures",
      description:
        "We don't believe in generic architectures. Your operational workflows dictate our codebases, resulting in frictionless ecosystem scaling.",
      metric: "100% Bespoke Code",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Liam Harper",
      role: "Operations Director",
      description:
        "The architecture delivered was clean, resilient, and made our digital services perform flawlessly. They truly captured the essence of our business goals.",
    },
    {
      id: 2,
      name: "Ethan Brooks",
      role: "President of Engineering",
      description:
        "Their work brought an enterprise-grade touch to our platform and scaled our throughput seamlessly. The team delivered ahead of schedule with zero defects.",
    },
    {
      id: 3,
      name: "Noah Bennett",
      role: "Cloud Infrastructure Lead",
      description:
        "We loved how clean and robust the final cloud deployment turned out. Every release passed automated security scans and strengthened our architecture.",
    },
    {
      id: 4,
      name: "Maya Collins",
      role: "Product Architecture VP",
      description:
        "The technical execution exceeded our expectations and gave our digital ecosystem a future-proof foundation. Every milestone was executed with outstanding clarity.",
    },
  ];

  // FAQs
  const faqs = [
    {
      id: 1,
      question: "1. How do you assess our legacy architecture for migration?",
      answer:
        "We evaluate your current technical debt, database structures, security protocols, and scalability barriers. Our engineering architects then design a step-by-step phased migration matrix tailored to your budget.",
    },
    {
      id: 2,
      question: "2. What custom software development stacks do you support?",
      answer:
        "We specialize in enterprise systems using modern technologies including cloud-native Node.js/Go frameworks, robust React ecosystems, cloud infra toolings (AWS/GCP), and specialized Salesforce, Big Data, or AI/ML pipelines.",
    },
    {
      id: 3,
      question: "3. Can we scale or modify system requirements mid-sprint?",
      answer:
        "Yes, our development workflows are grounded in strict Agile principles. You can reprioritize project backlogs, adjust user stories, or safely refactor architecture roadmaps directly via our sprint review touchpoints.",
    },
    {
      id: 4,
      question: "4. Do you engineer custom software for enterprise scale businesses?",
      answer:
        "Absolutely. We engineer high-availability, high-throughput digital systems equipped with multi-region failover configurations and automated CI/CD pipelines to ensure continuous performance under heavy enterprise data loads.",
    },
    {
      id: 5,
      question: "5. What is your typical deployment turnaround and SLA response time?",
      answer:
        "Depending on the scope, our rapid architectural discovery delivers an actionable technical blueprint within 48 hours. Enterprise client SLA guarantees offer 24/7/365 dedicated telemetry response for critical incidents.",
    },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col font-sans text-[#0a1118]">
      {/* Top Navbar */}
      <Navbar />

      {/* ================= 1. ABOUT HERO SECTION ================= */}
      <section className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] overflow-hidden flex items-center justify-center">
        <Image
          src="/About/About-header.jpg"
          alt="NAS Infotech About Us Hero"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Forest Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1b10]/90 via-[#0d2a17]/85 to-[#0a1b10]/90" />

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FFB057]/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-6xl md:text-[65px] font-black text-white tracking-tight mb-4">
            About <span className="text-[#FFB057]">us</span>
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-base sm:text-lg font-semibold text-gray-200">
            <Link href="/" className="hover:text-[#FFB057] transition-colors">
              Home
            </Link>
            <span className="text-[#FFB057]">/</span>
            <span className="text-[#FFB057]">About Us</span>
          </div>
        </div>
      </section>

      {/* ================= 2. ABOUT COMPANY (MISSION, VISION & VALUES) ================= */}
      <section className="w-full py-16 sm:py-24 lg:py-28 overflow-hidden font-sans bg-white border-b border-neutral-100">
        <Container>
          {/* Top Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14 sm:mb-18">
            {/* Left Block */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-[#0a1118] text-3xl sm:text-4xl md:text-5xl font-black leading-[1.12] tracking-tight">
                Putting your <span className="text-[#FFB057]">Needs</span> at the <br />
                <span className="text-[#FFB057]">Center</span> of every{" "}
                <span className="text-[#FFB057]">Policy</span>.
              </h2>
            </div>

            {/* Right Action & Subtext Block */}
            <div className="lg:col-span-5 space-y-6 lg:pl-4">
              <p className="text-[#55675d] text-sm sm:text-base leading-relaxed font-medium">
                Your protection isn&apos;t one-size-fits-all. That&apos;s why we take the time to listen, assess your needs, and design custom corporate solutions.
              </p>

              <div>
                <Button href="/contact" variant="primary" withArrow>
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

          {/* Three-Column Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {approachCards.map((card) => (
              <div
                key={card.id}
                className="bg-[#f9f8f4] rounded-2xl p-6 sm:p-7 shadow-xs border border-gray-200/80 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="space-y-4 mb-6">
                  {/* Circular Icon Container */}
                  <div className="w-12 h-12 rounded-full bg-[#FFB057] text-black flex items-center justify-center font-black text-lg shadow-sm">
                    ✲
                  </div>

                  <h3 className="text-[#0a1118] text-xl sm:text-2xl font-bold tracking-tight">
                    {card.title}
                  </h3>

                  <p className="text-[#55675d] text-sm leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>

                {/* Card Artwork Image */}
                <div className="w-full aspect-[16/11] rounded-xl overflow-hidden mt-auto relative bg-neutral-100">
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= 3. ABOUT PROTECTION & WHAT WE DO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#fcfbf7] py-20 sm:py-28 border-b border-[#ece8de] font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Assets Layer (Left Side) */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              {/* Main Image Frame */}
              <div className="relative overflow-hidden rounded-tl-[70px] rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] w-[300px] sm:w-[340px] h-[460px] sm:h-[500px] shadow-xl border border-gray-200 bg-neutral-100">
                <Image
                  src="/About/aboutus-1.jpg"
                  alt="IT Agency Engineering Core Team"
                  fill
                  sizes="(max-width: 768px) 100vw, 340px"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Secondary Floating Image */}
              <div className="absolute -right-4 sm:-right-8 bottom-4 w-[200px] sm:w-[240px] h-[300px] sm:h-[340px] rounded-3xl overflow-hidden border-4 border-[#fcfbf7] shadow-2xl hidden sm:block bg-neutral-100">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                  alt="Collaborative Software Planning Operations"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>

              {/* Media Story Circle Badge */}
              <Link
                href="#video-journey"
                className="absolute left-2 sm:left-6 bottom-2 cursor-pointer group"
                aria-label="Watch our story"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FFB057] flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0a1b10] text-[#FFB057] flex items-center justify-center font-bold text-sm shadow-md">
                    ▶
                  </div>
                </div>
              </Link>
            </div>

            {/* Right Side: Text & Progress Metrics */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-[#0a1118] text-3xl sm:text-5xl font-black leading-[1.12] tracking-tight">
                Providing reliable{" "}
                <span className="text-[#FFB057]">Digital Protection</span> for{" "}
                <span className="text-[#FFB057]">Enterprise</span> Architectures.
              </h2>

              <p className="text-[#55675d] text-sm sm:text-base leading-relaxed font-medium max-w-xl">
                Our team delivers tailored digital solutions that match your core objectives, budget, and operational workflows so you scale securely without technical complexity.
              </p>

              {/* Implementation Highlight Box */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#ece8de] shadow-xs">
                <div className="w-12 h-12 rounded-full bg-[#FFB057] text-[#0a1118] flex items-center justify-center shrink-0 font-black text-lg">
                  →
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0a1118]">
                    Comprehensive Software &amp; Cloud Implementations
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55675d] mt-1.5 leading-relaxed font-medium">
                    We design and engineer enterprise software layers, robust machine learning setups, continuous DevOps workflows, and data pipelines built around high-scale stability matrices.
                  </p>
                </div>
              </div>

              {/* Progress Bars Metric Box */}
              <div className="bg-[#f5f1eb] rounded-2xl p-6 sm:p-7 border border-slate-200/50 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2 text-xs sm:text-sm font-bold text-[#0a1118]">
                    <span>Enterprise System Architecture Optimization</span>
                    <span className="font-mono text-[#0b3b24]">90%</span>
                  </div>
                  <div className="w-full h-2.5 bg-white rounded-full overflow-hidden">
                    <div className="h-full bg-[#FFB057] rounded-full w-[90%]" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2 text-xs sm:text-sm font-bold text-[#0a1118]">
                    <span>Quality Assurance &amp; Seamless Continuous Integration</span>
                    <span className="font-mono text-[#0b3b24]">95%</span>
                  </div>
                  <div className="w-full h-2.5 bg-white rounded-full overflow-hidden">
                    <div className="h-full bg-[#FFB057] rounded-full w-[95%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 4. PERSPECTIVE & WHY CHOOSE US ================= */}
      <section className="bg-[#FAF9F5] py-20 sm:py-28 border-b border-[#ece8de] font-sans overflow-hidden">
        <Container>
          {/* Top Intro */}
          <div className="border-b border-slate-200/60 pb-12 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-[#0a1118] text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.06]">
                Moving forward by <br />
                leaving something{" "}
                <span className="text-[#FFB057]">better</span> behind.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-6">
              <p className="text-[#55675d] text-sm sm:text-base leading-relaxed font-medium">
                In an accelerated landscape, legacy environments trap evolution. We build resilient digital infrastructure meant to gracefully transition businesses into tomorrow&apos;s enterprise standard.
              </p>
            </div>
          </div>

          {/* Interactive Canvas Grid */}
          <AboutPerspective features={perspectiveFeatures} />
        </Container>
      </section>

      {/* ================= 5. WATCH OUR JOURNEY (VIDEO SECTION) ================= */}
      <section
        id="video-journey"
        className="relative w-full py-20 sm:py-28 text-white px-4 sm:px-8 overflow-hidden"
      >
        <Image
          src="/About/About-header.jpg"
          alt="Watch Our Journey Background"
          fill
          className="object-cover object-center brightness-50"
        />
        <div className="absolute inset-0 bg-[#062c12]/85 backdrop-blur-xs" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
          {/* Watch Video Circle Trigger */}
          <Link
            href="/contact"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FFB057] text-[#0a1118] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
            aria-label="Play video"
          >
            <span className="text-2xl font-black ml-1">▶</span>
          </Link>

          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Watch our journey and story
          </h2>

          <p className="text-sm sm:text-lg text-slate-200 max-w-2xl font-medium leading-relaxed">
            Discover how our journey began and how we have grown into a trusted IT partner dedicated to empowering growth and securing digital infrastructure.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <Button href="/contact" variant="primary" withArrow>
              Get Started Today
            </Button>

            <div className="flex items-center gap-3.5 text-left bg-white/10 backdrop-blur-md py-3 px-5 rounded-full border border-white/20">
              <span className="text-lg">📞</span>
              <div>
                <p className="text-[10px] text-gray-300 font-mono uppercase font-bold">Phone Number</p>
                <a
                  href="tel:+919022844929"
                  className="text-sm font-bold text-white hover:text-[#FFB057] transition-colors"
                >
                  Call: +91 9022844929
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= 7. TESTIMONIALS SECTION ================= */}
      <AboutTestimonials testimonials={testimonials} />

      {/* ================= 8. FREQUENTLY ASKED QUESTIONS (HOME FAQ) ================= */}
      <AccordionSection
        id="faq"
        className="py-20 sm:py-28 bg-white"
        title={
          <>
            Frequently Asked{" "}
            <span className="text-[#FFB057]">Questions</span>
          </>
        }
        description="Have questions regarding our enterprise engagements, technology stacks, or SLA guarantees? We are here to help."
        button={{
          text: "Speak With An Engineer",
          href: "/contact",
          withArrow: true,
        }}
        items={faqs.map((f) => ({
          id: f.id,
          title: f.question,
          answer: f.answer,
        }))}
        defaultOpenId={3}
        iconType="plus"
        borderTop={false}
      />

      {/* Footer */}
      <Footer accent={accent} />
    </main>
  );
}
