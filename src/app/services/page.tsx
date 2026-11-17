import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ContactUs } from "@/components/sections/ContactUs";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { ROUTES } from "@/constants/routes";
import { IMAGES } from "@/constants/images";

export const metadata: Metadata = {
  title: `Services & Capabilities — ${SITE_CONFIG.fullName}`,
  description:
    "Explore our complete range of enterprise digital engineering services: Custom Software Development, AI/ML, Salesforce, BI & Big Data, Cloud Infrastructure, and Cyber Security & QA.",
};

interface ServiceCapability {
  title: string;
  desc: string;
}

interface ServiceDetail {
  id: string;
  detailHref: string;
  eyebrow: string;
  headline: string;
  highlightWord: string;
  headlineAfter?: string;
  description: string;
  tags: string[];
  ctaText: string;
  image: string;
  capabilities: ServiceCapability[];
  outcome: string;
  theme: "dark" | "light" | "warm";
}

const SERVICES_DETAILS: ServiceDetail[] = [
  {
    id: "software",
    detailHref: "/services/software-development",
    eyebrow: "Software Development",
    headline: "Platforms built to",
    highlightWord: "scale with you",
    description:
      "Agile squads build tailored digital products on transparent architecture and clean code, with modular, documented design patterns your team can read and extend.",
    tags: ["React", "Node.js", "Go", "Agile sprints", "API integrations"],
    ctaText: "Explore Software Services",
    image: IMAGES.services.softwareDev,
    capabilities: [
      {
        title: "Professional web development",
        desc: "Full web ecosystem deployments built by agile squads around your requirements.",
      },
      {
        title: "Transparent architecture",
        desc: "Modular, documented design patterns give your team visibility into logic, API integrations and deployment configurations.",
      },
      {
        title: "Legacy migration",
        desc: "We assess technical debt, databases, security and scalability, then build a phased migration plan suited to your budget.",
      },
      {
        title: "Agile delivery",
        desc: "Backlogs and user stories can be reprioritized mid-sprint through regular sprint reviews.",
      },
    ],
    outcome: "98% of our software is delivered on time.",
    theme: "dark",
  },
  {
    id: "ai",
    detailHref: "/services/artificial-intelligence-machine-learning",
    eyebrow: "Artificial Intelligence and ML",
    headline: "Models that",
    highlightWord: "earn their place",
    headlineAfter: "in production.",
    description:
      "Our teams build machine learning systems and integrate AI into your products, from first model to production AI/ML pipelines.",
    tags: ["AI integration", "Machine learning", "AI/ML pipelines", "LLMs"],
    ctaText: "Explore AI/ML Services",
    image: IMAGES.services.aiMl,
    capabilities: [
      {
        title: "Machine learning systems",
        desc: "Models designed, trained and deployed as part of your IT strategy and development roadmap.",
      },
      {
        title: "AI integration",
        desc: "Add AI features to existing applications and workflows without rebuilding them.",
      },
      {
        title: "AI/ML pipelines",
        desc: "Pipelines that carry data from source to model to production, built on the stack you already use.",
      },
      {
        title: "Monitoring and SLAs",
        desc: "Support runs under SLA-based response times with 24/7/365 monitoring.",
      },
    ],
    outcome: "Built on high-availability systems with automated CI/CD.",
    theme: "light",
  },
  {
    id: "salesforce",
    detailHref: "/services/salesforce-services",
    eyebrow: "Salesforce Services",
    headline: "Salesforce that fits",
    highlightWord: "how you sell",
    headlineAfter: ".",
    description:
      "Our Salesforce services help optimize operations and improve workflows across your sales, service, and customer-facing teams.",
    tags: ["Salesforce", "CRM workflows", "API integrations", "Cloud"],
    ctaText: "Explore Salesforce Services",
    image: IMAGES.services.salesforce,
    capabilities: [
      {
        title: "Salesforce implementation",
        desc: "Tailored Salesforce setups delivered by agile squads in sprints you can review.",
      },
      {
        title: "Customisation and development",
        desc: "Configuration and extensions that match your business processes instead of forcing a generic template.",
      },
      {
        title: "System integration",
        desc: "Connect Salesforce seamlessly to the rest of your enterprise systems with documented API integrations.",
      },
      {
        title: "Managed support",
        desc: "SLA-based response times with 24/7/365 monitoring after launch.",
      },
    ],
    outcome: "Priorities can change mid-sprint through regular sprint reviews.",
    theme: "dark",
  },
  {
    id: "data",
    detailHref: "/services/bi-and-big-data-analytics",
    eyebrow: "BI and Big Data Analytics",
    headline: "One",
    highlightWord: "trusted view",
    headlineAfter: "of the business.",
    description:
      "Business intelligence and big data analytics that turn complex data streams into actionable intelligence your teams can rely on.",
    tags: ["Business intelligence", "Big data", "Analytics", "Data pipelines"],
    ctaText: "Explore Big Data Services",
    image: IMAGES.services.biAnalytics,
    capabilities: [
      {
        title: "Big data analytics",
        desc: "Process large data volumes reliably on infrastructure engineered to scale on demand.",
      },
      {
        title: "Business intelligence",
        desc: "Executive reporting and interactive dashboards that give leadership real-time clarity.",
      },
      {
        title: "Data pipelines",
        desc: "Reliable automated pipelines flowing from transactional source systems straight to analytics warehouses.",
      },
      {
        title: "Resource optimization",
        desc: "Clients see up to 92% enterprise resource optimization across our data engagements.",
      },
    ],
    outcome: "Insights backed by transparent, documented architecture.",
    theme: "warm",
  },
  {
    id: "cloud",
    detailHref: "/services/devops-consulting-automation",
    eyebrow: "Cloud and DevOps Infrastructure",
    headline: "Ship often,",
    highlightWord: "stay up",
    headlineAfter: ".",
    description:
      "Cloud computing, cloud migration and DevOps engineering with rapid automated deployments and smooth CI/CD workflows.",
    tags: ["AWS", "GCP", "CI/CD", "DevOps automation", "Kubernetes"],
    ctaText: "Explore DevOps Services",
    image: IMAGES.services.cloudComputing,
    capabilities: [
      {
        title: "Cloud migration and architecture",
        desc: "Phased moves to AWS or GCP, carefully planned around your budget, uptime targets, and risk parameters.",
      },
      {
        title: "Automated CI/CD",
        desc: "Rapid automated test-and-deploy pipelines with multi-region failover protection.",
      },
      {
        title: "DevOps consulting and automation",
        desc: "Infrastructure-as-code and configuration management that eliminate error-prone manual release work.",
      },
      {
        title: "Monitoring and SLA management",
        desc: "Around-the-clock 24/7/365 monitoring coupled with guaranteed SLA-based incident response.",
      },
    ],
    outcome: "99.99% system uptime backed by multi-region cloud clustering.",
    theme: "dark",
  },
  {
    id: "security",
    detailHref: "/services/cybersecurity-information-security",
    eyebrow: "Cyber Security and Testing QA",
    headline: "Find the problem",
    highlightWord: "before customers do",
    headlineAfter: ".",
    description:
      "Cybersecurity and software testing and QA that protect your platforms and releases before customers or security vulnerabilities are affected.",
    tags: ["Cybersecurity", "Zero-trust", "Software testing", "QA"],
    ctaText: "Explore Cyber Security Services",
    image: IMAGES.services.cyberSecurity,
    capabilities: [
      {
        title: "Enterprise cybersecurity",
        desc: "Multi-layered defense built directly into system architecture, deployment protocols, and daily operations.",
      },
      {
        title: "Zero-trust security",
        desc: "Rigorous identity verification and high availability designed hand-in-hand for enterprise systems.",
      },
      {
        title: "Software testing and QA",
        desc: "Automated and manual testing baked into every sprint so defects are caught long before release.",
      },
      {
        title: "Reviews and monitoring",
        desc: "Continuous automated scanning and 24/7/365 threat monitoring with SLA-based incident handling.",
      },
    ],
    outcome: "Enterprise security and high availability by design.",
    theme: "light",
  },
];

const OVERVIEW_SERVICES = [
  {
    id: "software",
    href: "/services/software-development",
    code: "</>",
    title: "Software Development",
    desc: "Agile development of tailored digital products and professional web development, from IT strategy to full web ecosystem deployments.",
  },
  {
    id: "ai",
    href: "/services/artificial-intelligence-machine-learning",
    code: "AI",
    title: "Artificial Intelligence & ML",
    desc: "Machine learning systems and AI integration built into your existing products, apps and business workflows.",
  },
  {
    id: "salesforce",
    href: "/services/salesforce-services",
    code: "SF",
    title: "Salesforce Services",
    desc: "Salesforce services that improve operational workflows and connect your CRM smoothly to the rest of your business.",
  },
  {
    id: "data",
    href: "/services/bi-and-big-data-analytics",
    code: "BI",
    title: "BI & Big Data Analytics",
    desc: "Business intelligence and big data analytics that turn raw data streams into confident, high-impact decisions.",
  },
  {
    id: "cloud",
    href: "/services/devops-consulting-automation",
    code: "CD",
    title: "Cloud & DevOps Infrastructure",
    desc: "Cloud computing, cloud migration and DevOps automation engineered for fast, rock-solid automated deployments.",
  },
  {
    id: "security",
    href: "/services/cybersecurity-information-security",
    code: "QA",
    title: "Cyber Security & QA",
    desc: "End-to-end cybersecurity and rigorous software QA testing to safeguard your releases before they reach customers.",
  },
];

const PRINCIPLES = [
  {
    badge: "Visibility",
    title: "Transparent architecture and clean code",
    desc: "Modular, documented design patterns give teams complete visibility into application logic, API integrations, and deployment configurations.",
    points: [
      "Modular design patterns",
      "Documented API integrations",
      "Visible deployment configurations",
    ],
  },
  {
    badge: "Speed",
    title: "Rapid deployment and smooth CI/CD",
    desc: "Fast automated test-and-deployment pipelines keep releases frequent, friction-free, and dependable without disrupting users.",
    points: [
      "Automated CI/CD pipelines",
      "Agile sprint reviews",
      "Zero-downtime deployments",
    ],
  },
  {
    badge: "Reliability",
    title: "Enterprise security and high availability",
    desc: "Resilient systems featuring multi-region failover, proactive health monitoring, and round-the-clock enterprise protection.",
    points: [
      "Multi-region cloud failover",
      "24/7/365 system monitoring",
      "SLA-based response times",
    ],
  },
];

const TECH_STACK = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Go", "Python", "REST & GraphQL"],
  },
  {
    category: "Data & AI",
    items: ["Big data analytics", "AI/ML pipelines", "Business intelligence", "TensorFlow"],
  },
  {
    category: "Cloud & Platforms",
    items: ["AWS", "Google Cloud", "Salesforce", "Docker & Kubernetes"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#0a1118] flex flex-col font-sans">
      {/* 1. Global Navbar (Identical to Homepage) */}
      <Navbar />

      {/* 2. Hero Section - Styled Exactly Like About & Contact Pages */}
      <section className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] overflow-hidden flex items-center justify-center">
        <Image
          src="/Services/services-software-development.webp"
          alt="NAS Infotech Enterprise Services"
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
            Our <span className="text-[#FFB057]">Services</span>
          </h1>

          {/* Breadcrumbs matching About / Contact pages */}
          <div className="flex items-center gap-3 text-base sm:text-lg font-semibold text-gray-200">
            <Link href="/" className="hover:text-[#FFB057] transition-colors">
              Home
            </Link>
            <span className="text-[#FFB057]">/</span>
            <span className="text-[#FFB057]">Services</span>
          </div>
        </div>
      </section>

      {/* 3. Sub-Hero Value Proposition & Performance Metrics Band */}
      <section className="py-14 sm:py-20 bg-[#f9f8f4] border-b border-[#ece8de]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Value Proposition */}
            <div className="lg:col-span-7 flex flex-col items-start gap-5">
              <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0e1b13]">
                Explore our <span className="text-[#FFB057]">Legacy</span> of Innovation and Excellence.
              </h2>

              <p className="text-base sm:text-lg text-[#55675d] leading-relaxed max-w-2xl font-medium">
                Our systems architects evaluate your architecture and optimize your tech stack, while agile squads deliver tailored digital products and cloud architectures. Agile development, cloud migration, DevOps automation, AI integration and SLA management are all covered.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href={ROUTES.CONTACT} variant="primary" withArrow>
                  Start a project
                </Button>
                <Link
                  href="#overview"
                  className="inline-flex items-center justify-center font-bold text-xs sm:text-sm px-6 py-3 rounded-full border-2 border-[#0b3b24] text-[#0b3b24] hover:bg-[#0b3b24] hover:text-white transition-all duration-200 shadow-2xs"
                >
                  Browse services
                </Link>
              </div>
            </div>

            {/* Right Metrics Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow">
                <span className="text-3xl sm:text-4xl font-black text-[#FFB057] block">
                  99.99%
                </span>
                <span className="text-xs sm:text-sm text-[#55675d] font-semibold mt-1.5 block leading-snug">
                  System uptime, backed by multi-region cloud clustering
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow">
                <span className="text-3xl sm:text-4xl font-black text-[#FFB057] block">
                  150+
                </span>
                <span className="text-xs sm:text-sm text-[#55675d] font-semibold mt-1.5 block leading-snug">
                  Enterprise engineering sprints delivered globally
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow">
                <span className="text-3xl sm:text-4xl font-black text-[#FFB057] block">
                  98%
                </span>
                <span className="text-xs sm:text-sm text-[#55675d] font-semibold mt-1.5 block leading-snug">
                  On-time software delivery guarantee
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow">
                <span className="text-3xl sm:text-4xl font-black text-[#FFB057] block">
                  92%
                </span>
                <span className="text-xs sm:text-sm text-[#55675d] font-semibold mt-1.5 block leading-snug">
                  Client enterprise resource optimization
                </span>
              </div>
            </div>
          </div>

          {/* Quick Jump Bar */}
          <div className="mt-12 pt-8 border-t border-[#ece8de] flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3b24] mr-2">
              Quick Jump:
            </span>
            {SERVICES_DETAILS.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="text-xs sm:text-[13px] font-semibold py-2 px-4 rounded-full bg-white border border-[#ece8de] text-[#0d1f17] hover:bg-[#0a2218] hover:text-[#ffc260] hover:border-[#0a2218] transition-all duration-200 shadow-2xs"
              >
                {svc.eyebrow}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Overview Grid Section (#overview) */}
      <section id="overview" className="py-16 sm:py-24 bg-white border-b border-neutral-100">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0e1b13]">
                How we take your <span className="text-[#FFB057]">business</span> to the next level.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#55675d] font-medium max-w-md leading-relaxed">
              Agile squads deliver tailored digital products and cloud architectures to optimize operations, scale infrastructure and improve workflows, from machine learning systems to full web ecosystem deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OVERVIEW_SERVICES.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group p-7 rounded-3xl bg-white border border-neutral-200/80 hover:border-[#0b3b24] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0a2218] text-[#ffc260] flex items-center justify-center font-mono font-bold text-sm mb-5 group-hover:scale-105 transition-transform">
                    {item.code}
                  </div>
                  <h3 className="text-xl font-bold text-[#06150f] mb-3 group-hover:text-[#0b3b24] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55675d] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-dashed border-neutral-200 flex items-center justify-between text-xs font-bold text-[#0b3b24]">
                  <span>Explore service details</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Detailed Service Bands (Alternating Clean Forest Dark and Warm Surfaces) */}
      {SERVICES_DETAILS.map((svc, idx) => {
        const isDark = svc.theme === "dark";
        const isWarm = svc.theme === "warm";
        const isEven = idx % 2 === 1;

        return (
          <section
            key={svc.id}
            id={svc.id}
            className={`py-16 sm:py-24 border-b ${isDark
              ? "bg-[#071d11] text-white border-[#153e2a]"
              : isWarm
                ? "bg-[#f9f8f4] text-[#0d1f17] border-[#ece8de]"
                : "bg-white text-[#0d1f17] border-neutral-100"
              }`}
          >
            <Container>
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${isEven ? "lg:grid-flow-dense" : ""
                  }`}
              >
                {/* Intro Column */}
                <div
                  className={`lg:col-span-5 flex flex-col items-start gap-4 ${isEven ? "lg:col-start-8" : ""
                    }`}
                >
                  <h2
                    className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-[-0.03em] ${isDark ? "text-white" : "text-[#0e1b13]"
                      }`}
                  >
                    {svc.headline}{" "}
                    <span className="text-[#FFB057]">
                      {svc.highlightWord}
                    </span>
                    {svc.headlineAfter}
                  </h2>

                  <p
                    className={`text-base leading-relaxed font-medium ${isDark ? "text-[#a3b9ac]" : "text-[#55675d]"
                      }`}
                  >
                    {svc.description}
                  </p>

                  {/* Feature Image with Enterprise Border */}
                  <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/10 shadow-sm my-2">
                    <Image
                      src={svc.image}
                      alt={svc.eyebrow}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 ${isDark
                        ? "bg-gradient-to-t from-[#071d11]/80 via-transparent to-transparent"
                        : "bg-gradient-to-t from-black/40 via-transparent to-transparent"
                        }`}
                    />
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-mono font-medium px-3 py-1 rounded-full ${isDark
                          ? "bg-[#ffc260]/10 text-[#ffc260] border border-[#ffc260]/20"
                          : "bg-[#eef5eb] text-[#0b3b24] border border-[#d2e4ce]"
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link to Service Details Page */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <Button
                      href={svc.detailHref}
                      variant={isDark ? "secondary" : "primary"}
                      withArrow
                    >
                      {svc.ctaText}
                    </Button>
                    <Link
                      href={svc.detailHref}
                      className={`text-xs font-bold uppercase tracking-wider underline-offset-4 hover:underline ${isDark ? "text-[#ffc260]" : "text-[#0b3b24]"
                        }`}
                    >
                      View Details →
                    </Link>
                  </div>
                </div>

                {/* Capabilities Column */}
                <div
                  className={`lg:col-span-7 flex flex-col gap-4 ${isEven ? "lg:col-start-1" : ""
                    }`}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {svc.capabilities.map((cap, capIdx) => (
                      <div
                        key={cap.title}
                        className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${isDark
                          ? "bg-[#0e2c1c] border-[#1d4831] hover:border-[#ffc260]/40"
                          : "bg-white border-neutral-200/80 hover:border-[#0b3b24] shadow-2xs hover:shadow-sm"
                          }`}
                      >
                        <div className="flex items-start gap-4">
                          <span
                            className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${isDark
                              ? "bg-[#ffc260] text-[#071d11]"
                              : "bg-[#0b3b24] text-white"
                              }`}
                          >
                            {capIdx + 1}
                          </span>
                          <div>
                            <h3
                              className={`text-base font-bold mb-2 ${isDark ? "text-white" : "text-[#06150f]"
                                }`}
                            >
                              {cap.title}
                            </h3>
                            <p
                              className={`text-xs sm:text-sm leading-relaxed font-medium ${isDark ? "text-[#a3b9ac]" : "text-[#55675d]"
                                }`}
                            >
                              {cap.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Outcome Banner */}
                  <div
                    className={`mt-2 p-4 sm:p-5 rounded-2xl border flex items-center gap-3 font-mono text-xs sm:text-sm font-semibold ${isDark
                      ? "bg-[#0b2417] border-[#ffc260]/20 text-[#ffc260]"
                      : "bg-[#eef5eb] border-[#0b3b24]/20 text-[#0b3b24]"
                      }`}
                  >
                    <span className="text-base sm:text-lg">✓</span>
                    <span>{svc.outcome}</span>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      {/* 6. Core Architecture Principles Section (Styled like Home / About Cards) */}
      <section className="py-16 sm:py-24 bg-[#0a2218] text-white border-b border-[#153e2a]">
        <Container>
          <div className="flex flex-col items-start gap-4 mb-12">
            <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-white max-w-xl">
              Principles behind <span className="text-[#FFB057]">every build</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRINCIPLES.map((item) => (
              <article
                key={item.badge}
                className="p-8 rounded-3xl bg-[#0f2e21] border border-[#ffc260]/15 flex flex-col justify-between hover:border-[#ffc260]/40 transition-colors"
              >
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ffc260] block mb-3">
                    {item.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#a3b9ac] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <ul className="mt-6 pt-5 border-t border-[#ffc260]/15 space-y-2.5 text-xs sm:text-sm font-semibold text-gray-200">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5">
                      <span className="text-[#ffc260]">→</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Technologies & Tools Grid */}
      <section id="stack" className="py-16 sm:py-24 bg-white border-b border-neutral-100">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0e1b13]">
                The tools we <span className="text-[#FFB057]">use every day</span>.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#55675d] font-medium max-w-md leading-relaxed">
              We work across Node.js, Go, React, AWS, GCP, Salesforce, big data pipelines, and machine learning models.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_STACK.map((group) => (
              <div
                key={group.category}
                className="p-6 rounded-2xl bg-[#f9f8f4] border border-[#ece8de] shadow-2xs hover:shadow-xs transition-shadow"
              >
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0b3b24] mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-2 text-sm font-bold text-[#06150f]">
                  {group.items.map((tech) => (
                    <li key={tech} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0b3b24]" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Architecture Consultation CTA Banner (Matching Home & Contact style) */}
      {/* 8. Direct Architecture Consultation & Dynamic Inquiry Form */}
      <ContactUs
        id="service-consultation"
        title={
          <>
            Not sure which service you need?{" "}
            <span className="text-[#FFB057]">Start with a conversation.</span>
          </>
        }
        subtitle="Our systems architects can evaluate your architecture and optimize your tech stack. Tell us what you are trying to achieve, and we will formulate an actionable roadmap."
      />

      {/* 9. Global Standardized Footer */}
      <Footer />
    </main>
  );
}
