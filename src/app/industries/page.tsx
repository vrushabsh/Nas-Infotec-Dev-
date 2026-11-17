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
  title: `Industries We Serve — ${SITE_CONFIG.fullName}`,
  description:
    "Explore the industries served by NAS Infotech. We provide custom software development, AI solutions, cloud infrastructure, and digital transformation services for businesses across Banking, Healthcare, E-Commerce, Education, Pharma, Telecom, Manufacturing, Logistics, Insurance, and Real Estate.",
  keywords: [
    "Industries We Serve",
    "Software Solutions for Industries",
    "Healthcare Software",
    "Education Technology",
    "Retail Software Solutions",
    "Manufacturing Software",
    "Finance Technology",
    "Logistics Software",
    "AI Solutions for Businesses",
    "Custom Software Development",
    "NAS Infotech",
  ],
};

interface IndustrySector {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  capabilities: string[];
  compliance: string;
  metrics: string;
}

const INDUSTRY_SECTORS: IndustrySector[] = [
  {
    id: "banking",
    category: "Fintech & Banking",
    title: "Banking & Financial Services",
    description:
      "Modernizing legacy core banking, enabling real-time transactions, automated fraud mitigation, and secure customer-centric digital banking experiences.",
    image: IMAGES.industries.finance,
    capabilities: [
      "Secure Payment Gateways",
      "Fraud Detection AI",
      "Core Banking Modernization",
      "PCI-DSS / SOC 2 Compliance",
    ],
    compliance: "PCI-DSS Level 1 & SOC 2 Type II",
    metrics: "Sub-second transaction processing",
  },
  {
    id: "healthcare",
    category: "HealthTech & MedTech",
    title: "Healthcare & Life Sciences",
    description:
      "HIPAA-compliant telemedicine platforms, electronic health records (EHR) integrations, clinical data analytics, and patient engagement portals.",
    image: IMAGES.industries.healthcare,
    capabilities: [
      "HIPAA & EHR Compliance",
      "Telehealth Systems",
      "Clinical Data Pipelines",
      "Medical Device IoT",
    ],
    compliance: "HIPAA, HITECH & ISO 27799",
    metrics: "100% encrypted patient data streams",
  },
  {
    id: "ecommerce",
    category: "Retail & Commerce",
    title: "E-Commerce & Retail",
    description:
      "Scalable storefronts, custom checkout optimization, real-time inventory synchronization, and omnichannel shopping architectures.",
    image: IMAGES.industries.ecommerce,
    capabilities: [
      "High-Throughput Checkout",
      "AI Personalization",
      "Omnichannel Inventory",
      "Headless Commerce",
    ],
    compliance: "PCI-DSS & Global Consumer Privacy",
    metrics: "Engineered for 50k+ concurrent shoppers",
  },
  {
    id: "education",
    category: "EdTech & Learning",
    title: "Education & EdTech",
    description:
      "Custom learning management systems (LMS), interactive virtual classrooms, student performance metrics, and digital exam proctoring.",
    image: IMAGES.industries.education,
    capabilities: [
      "Scalable LMS Portals",
      "Interactive Classrooms",
      "Student Performance Analytics",
      "Automated Assessment Tools",
    ],
    compliance: "FERPA, COPPA & GDPR Edu",
    metrics: "Over 100k active students supported",
  },
  {
    id: "pharma",
    category: "Pharma & Life Sciences",
    title: "Pharma & Life Sciences",
    description:
      "Clinical trial management platforms, drug discovery pipeline tracking, supply chain serialization, and regulatory audit archives.",
    image: IMAGES.industries.pharma,
    capabilities: [
      "Clinical Trial Portals",
      "GMP & FDA Audit Archives",
      "Supply Chain Serialization",
      "Secure Laboratory Databases",
    ],
    compliance: "FDA 21 CFR Part 11 & GxP Standards",
    metrics: "Zero audit discrepancy guarantee",
  },
  {
    id: "telecom",
    category: "Telecom & 5G",
    title: "Telecommunications & Media",
    description:
      "Network performance monitoring dashboards, automated billing engines, 5G service enablement, and subscriber analytics pipelines.",
    image: IMAGES.industries.telecom,
    capabilities: [
      "Network Performance Dashboards",
      "Automated Billing Engines",
      "5G Service Enablement",
      "Subscriber Analytics",
    ],
    compliance: "ETSI, 3GPP & ISO 27001",
    metrics: "Real-time network telemetry analysis",
  },
  {
    id: "manufacturing",
    category: "Industry 4.0",
    title: "Manufacturing & Industrial Automation",
    description:
      "IoT sensor telemetry, predictive equipment maintenance, automated warehouse management, and end-to-end supply chain visibility.",
    image: IMAGES.industries.manufacturing,
    capabilities: [
      "Industrial IoT Telemetry",
      "Predictive Maintenance AI",
      "Automated Warehouse Sync",
      "SCADA & ERP Integrations",
    ],
    compliance: "ISA-95 & ISO 9001 Alignment",
    metrics: "Up to 35% reduction in unplanned downtime",
  },
  {
    id: "logistics",
    category: "Supply Chain",
    title: "Logistics & Supply Chain",
    description:
      "Route optimization algorithms, fleet telemetry, real-time freight tracking, and automated customs documentation.",
    image: IMAGES.industries.logistics,
    capabilities: [
      "Real-Time Fleet Tracking",
      "Route Optimization AI",
      "Inventory Forecasting",
      "Automated Dispatching",
    ],
    compliance: "DOT, TAPA & Customs Compliance",
    metrics: "15-20% fuel efficiency optimization",
  },
  {
    id: "insurance",
    category: "InsurTech",
    title: "Insurance & InsurTech",
    description:
      "Digital policyholder portals, automated claims triage, actuarial risk engines, and fraud prevention algorithms.",
    image: IMAGES.industries.banking,
    capabilities: [
      "Automated Claims Triage",
      "Risk Assessment AI",
      "Policy Administration Portals",
      "Fraud Mitigation Algorithms",
    ],
    compliance: "NAIC, Solvency II & SOC 2",
    metrics: "60% faster claim turnaround times",
  },
  {
    id: "realestate",
    category: "PropTech",
    title: "Real Estate & PropTech",
    description:
      "Digital property listings, virtual 3D tour integrations, automated lease management, and tenant portal architectures.",
    image: IMAGES.industries.realEstate,
    capabilities: [
      "Tenant & Owner Portals",
      "Automated Lease Management",
      "3D Virtual Tour Integrations",
      "Valuation Analytics",
    ],
    compliance: "Fair Housing & Data Privacy",
    metrics: "Seamless omni-channel property marketing",
  },
];

const COMPLIANCE_PILLARS = [
  {
    badge: "Security & Governance",
    title: "Regulatory Compliance by Design",
    desc: "We embed industry-specific compliance frameworks directly into our technical architectures from sprint zero, ensuring complete adherence to HIPAA, SOC 2, PCI-DSS, GDPR, and ISO standards.",
    points: [
      "End-to-end data encryption (AES-256 & TLS 1.3)",
      "Continuous automated audit trails",
      "Strict least-privilege IAM controls",
    ],
  },
  {
    badge: "Domain Expertise",
    title: "Cross-Functional Sector Squads",
    desc: "Our agile engineering squads comprise dedicated solution architects, developers, and QA engineers with deep, battle-tested familiarity in sector workflows and edge-case requirements.",
    points: [
      "Domain-specific data schemas",
      "Third-party enterprise ERP/CRM integration",
      "Proven legacy migration strategies",
    ],
  },
  {
    badge: "Operational Scale",
    title: "High Availability & Multi-Region Resilience",
    desc: "Mission-critical sector operations demand continuous uptime. We build multi-region cloud clustering with automated geo-failover and 24/7/365 telemetry monitoring.",
    points: [
      "99.99% system availability SLA",
      "Automated RPO & RTO recovery protocols",
      "Real-time threat and latency alerting",
    ],
  },
];

const TRANSFORMATION_STEPS = [
  {
    number: "01.",
    title: "Domain Assessment & Strategy",
    desc: "We audit your existing systems, compliance parameters, data silos, and operational bottlenecks to build an actionable modernization roadmap.",
  },
  {
    number: "02.",
    title: "Architecture & Security Blueprint",
    desc: "Systems architects formulate secure microservices schemas, database models, role hierarchies, and zero-trust security postures.",
  },
  {
    number: "03.",
    title: "Agile Engineering Sprints",
    desc: "Dedicated squads deliver test-backed code in transparent 2-week sprint cycles with live stakeholder demonstrations and peer-reviewed pull requests.",
  },
  {
    number: "04.",
    title: "Continuous Optimization & SLAs",
    desc: "Zero-downtime deployment backed by 24/7/365 active monitoring, automated patching, and guaranteed SLA incident turnaround.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white text-[#0a1118] flex flex-col font-sans">
      {/* 1. Global Navbar (Identical to Homepage) */}
      <Navbar />

      {/* 2. Hero Section - Matching Live Website Hero Banner */}
      <section className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] overflow-hidden flex items-center justify-center">
        <Image
          src="/About/aboutHerosection.jpg"
          alt="NAS Infotech Industries We Serve"
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
            Our <span className="text-[#FFB057]">Industry</span>
          </h1>

          {/* Breadcrumbs matching live website */}
          <div className="flex items-center gap-3 text-base sm:text-lg font-semibold text-gray-200">
            <Link href="/" className="hover:text-[#FFB057] transition-colors">
              Home
            </Link>
            <span className="text-[#FFB057]">/</span>
            <span className="text-[#FFB057]">Our Industry</span>
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
                Tailored IT Expertise Across <span className="text-[#FFB057]">Key Sectors</span>.
              </h2>

              <p className="text-base sm:text-lg text-[#55675d] leading-relaxed max-w-2xl font-medium">
                We understand the domain nuances and regulatory requirements of diverse industries, delivering secure, compliant, and scalable technology architectures that drive operational transformation.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href={ROUTES.CONTACT} variant="primary" withArrow>
                  Request Consultation
                </Button>
                <Link
                  href="#sectors"
                  className="inline-flex items-center justify-center font-bold text-xs sm:text-sm px-6 py-3 rounded-full border-2 border-[#0b3b24] text-[#0b3b24] hover:bg-[#0b3b24] hover:text-white transition-all duration-200 shadow-2xs"
                >
                  Explore Sectors
                </Link>
              </div>
            </div>

            {/* Right Metrics Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow">
                <span className="text-3xl sm:text-4xl font-black text-[#FFB057] block">
                  10+
                </span>
                <span className="text-xs sm:text-sm text-[#55675d] font-semibold mt-1.5 block leading-snug">
                  Specialized Global Industry Sectors
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow">
                <span className="text-3xl sm:text-4xl font-black text-[#FFB057] block">
                  100%
                </span>
                <span className="text-xs sm:text-sm text-[#55675d] font-semibold mt-1.5 block leading-snug">
                  Regulatory & Compliance Alignment
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow">
                <span className="text-3xl sm:text-4xl font-black text-[#FFB057] block">
                  99.99%
                </span>
                <span className="text-xs sm:text-sm text-[#55675d] font-semibold mt-1.5 block leading-snug">
                  Mission-Critical System Availability
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow">
                <span className="text-3xl sm:text-4xl font-black text-[#FFB057] block">
                  150+
                </span>
                <span className="text-xs sm:text-sm text-[#55675d] font-semibold mt-1.5 block leading-snug">
                  Enterprise Sprints Delivered Globally
                </span>
              </div>
            </div>
          </div>

          {/* Quick Jump Bar */}
          <div className="mt-12 pt-8 border-t border-[#ece8de] flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3b24] mr-2">
              Jump to Sector:
            </span>
            {INDUSTRY_SECTORS.map((sector) => (
              <a
                key={sector.id}
                href={`#${sector.id}`}
                className="text-xs sm:text-[13px] font-semibold py-2 px-4 rounded-full bg-white border border-[#ece8de] text-[#0d1f17] hover:bg-[#0a2218] hover:text-[#ffc260] hover:border-[#0a2218] transition-all duration-200 shadow-2xs"
              >
                {sector.category}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Detailed Sector Cards Grid (#sectors) */}
      <section id="sectors" className="py-16 sm:py-24 bg-white border-b border-neutral-100">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0e1b13]">
                Engineering for <span className="text-[#FFB057]">mission-critical</span> operations.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#55675d] font-medium max-w-md leading-relaxed">
              Every vertical comes with unique compliance requirements, data flows, and performance constraints. Our engineers configure ecosystems suited to your exact sector benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRY_SECTORS.map((sector) => (
              <div
                key={sector.id}
                id={sector.id}
                className="group p-6 sm:p-7 rounded-3xl bg-white border border-neutral-200/80 hover:border-[#0b3b24] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-4">
                  {/* Sector Image Frame */}
                  <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-neutral-100 shadow-2xs">
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#0b3b24] shadow-sm">
                      {sector.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#06150f] group-hover:text-[#0b3b24] transition-colors leading-snug">
                      {sector.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#55675d] leading-relaxed font-medium mt-2">
                      {sector.description}
                    </p>
                  </div>

                  {/* Capabilities List */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0b3b24] block">
                      Core Capabilities:
                    </span>
                    <ul className="space-y-1 text-xs font-semibold text-neutral-700">
                      {sector.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0b3b24] shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Metrics & Link */}
                <div className="pt-4 border-t border-neutral-100 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-[11px] font-mono font-semibold text-[#a85f00]">
                    <span>Standard:</span>
                    <span>{sector.compliance}</span>
                  </div>
                  <Link
                    href={ROUTES.CONTACT}
                    className="inline-flex items-center justify-between text-xs font-bold text-[#0b3b24] hover:text-[#072a1a] transition-colors pt-1"
                  >
                    <span>Consult with sector architects</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Architecture & Compliance Standards Band (Dark Forest Contrast) */}
      <section className="py-16 sm:py-24 bg-[#0a2218] text-white border-b border-[#153e2a]">
        <Container>
          <div className="flex flex-col items-start gap-4 mb-12">
            <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-white max-w-2xl">
              Built for <span className="text-[#FFB057]">strict compliance</span> and enterprise scale.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPLIANCE_PILLARS.map((pillar) => (
              <article
                key={pillar.badge}
                className="p-8 rounded-3xl bg-[#0f2e21] border border-[#ffc260]/15 flex flex-col justify-between hover:border-[#ffc260]/40 transition-colors"
              >
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ffc260] block mb-3">
                    {pillar.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#a3b9ac] leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>

                <ul className="mt-6 pt-5 border-t border-[#ffc260]/15 space-y-2.5 text-xs sm:text-sm font-semibold text-gray-200">
                  {pillar.points.map((pt) => (
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

      {/* 6. Digital Transformation Methodology */}
      <section className="py-16 sm:py-24 bg-white border-b border-neutral-100">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0e1b13]">
                Our sector <span className="text-[#FFB057]">delivery methodology</span>.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#55675d] font-medium max-w-md leading-relaxed">
              We reduce technical risk with structured discovery, architecture blueprints, test-driven agile delivery, and ongoing 24/7 SLA oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRANSFORMATION_STEPS.map((step) => (
              <div
                key={step.number}
                className="p-6 rounded-2xl bg-[#f9f8f4] border border-[#ece8de] shadow-2xs hover:shadow-sm transition-shadow flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-[#FFB057] block mb-3 font-mono">
                    {step.number}
                  </span>
                  <h3 className="text-base font-bold text-[#06150f] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55675d] leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Architecture Consultation & Dynamic Inquiry Form */}
      <ContactUs
        id="industry-consultation"
        title={
          <>
            Ready to modernize your{" "}
            <span className="text-[#FFB057]">industry infrastructure?</span>
          </>
        }
        subtitle="Our systems architects evaluate compliance benchmarks, optimize tech stacks, and mobilize agile engineering squads. Contact our enterprise specialists today."
      />

      {/* 8. Global Standardized Footer */}
      <Footer />
    </main>
  );
}
