import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactUs } from "@/components/sections/ContactUs";
import { ServiceTechQuadrant } from "@/components/sections/ServiceTechQuadrant";
import {
  DETAILED_SERVICES,
  getServiceBySlug,
  ServiceOverviewItem,
} from "@/constants/services";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { ROUTES } from "@/constants/routes";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return DETAILED_SERVICES.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Details — NAS Infotech",
      description: "Explore our enterprise digital engineering services.",
    };
  }

  return {
    title: `${service.title} — ${SITE_CONFIG.fullName}`,
    description: service.shortDescription,
  };
}

function renderOverviewIcon(icon: ServiceOverviewItem["icon"]) {
  switch (icon) {
    case "search":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
      );
    case "users":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <path d="M16 3.128a4 4 0 0 1 0 7.744" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      );
    case "workflow":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <rect width="8" height="8" x="3" y="3" rx="2" />
          <path d="M7 11v4a2 2 0 0 0 2 2h4" />
          <rect width="8" height="8" x="13" y="13" rx="2" />
        </svg>
      );
    case "trending":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path d="M16 7h6v6" />
          <path d="m22 7-8.5 8.5-5-5L2 17" />
        </svg>
      );
    case "code":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path d="m16 18 6-6-6-6" />
          <path d="m8 6-6 6 6 6" />
        </svg>
      );
    case "cpu":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path d="M12 20v2" />
          <path d="M12 2v2" />
          <path d="M17 20v2" />
          <path d="M17 2v2" />
          <path d="M2 12h2" />
          <path d="M2 17h2" />
          <path d="M2 7h2" />
          <path d="M20 12h2" />
          <path d="M20 17h2" />
          <path d="M20 7h2" />
          <path d="M7 20v2" />
          <path d="M7 2v2" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="8" y="8" width="8" height="8" rx="1" />
        </svg>
      );
    case "shield":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        </svg>
      );
    case "cloud":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      );
    case "database":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case "layers":
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
  }
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-[#f9f8f4] text-[#113217] font-sans antialiased selection:bg-[#ffb057]/30 tracking-tight min-h-screen overflow-x-hidden flex flex-col">
      {/* 1. Global Navbar Header (Identical to Homepage) */}
      <Navbar />

      {/* 2. Hero Section */}
      <section className="relative min-h-[75vh] lg:min-h-[82vh] flex items-center bg-white border-b border-stone-200/60 pt-16 sm:pt-20 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-0">
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl xl:text-5xl font-extrabold text-[#06150f] tracking-tight leading-[1.12]">
              {service.title}
            </h1>

            <p className="text-stone-500 text-base sm:text-lg max-w-2xl leading-relaxed font-medium">
              {service.heroDescription}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href={ROUTES.SERVICES}>
                <span className="px-6 py-3.5 bg-[#113217] hover:bg-[#113217]/90 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 cursor-pointer">
                  Explore More Services{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </span>
              </Link>
              <Link href={ROUTES.CONTACT}>
                <span className="px-6 py-3.5 bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 rounded-xl text-xs font-bold uppercase tracking-wider transition-all inline-block shadow-2xs cursor-pointer">
                  Learn More
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column Visual Frame */}
          <div className="lg:col-span-5 relative w-full h-80 sm:h-96 md:h-105 bg-stone-100 rounded-3xl sm:rounded-4xl overflow-hidden shadow-sm border border-stone-200/60">
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* 3. Service Overview Section */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0e1b13]">
            Service <span className="text-[#FFB057]">Overview</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.overview.items.map((item) => (
            <div
              key={item.title}
              className={`p-8 rounded-[1.8rem] transition-all duration-300 flex flex-col justify-between min-h-65 hover:-translate-y-1 ${item.highlighted
                ? "bg-gradient-to-br from-[#113217] to-[#1d4924] text-white shadow-xl"
                : "bg-white text-stone-800 border border-stone-200/70 shadow-sm hover:shadow-md"
                }`}
            >
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.highlighted
                    ? "bg-white/20 text-white"
                    : "text-[#ffb057] bg-[#ffb057]/10"
                    }`}
                >
                  {renderOverviewIcon(item.icon)}
                </div>
                <h3
                  className={`text-lg font-bold tracking-tight ${item.highlighted ? "text-white" : "text-[#113217]"
                    }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${item.highlighted ? "text-white/90" : "text-stone-500 font-medium"
                    }`}
                >
                  {item.description}
                </p>
              </div>

              <Link href={ROUTES.CONTACT}>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider pt-6 transition-colors text-[#ffb057] hover:text-[#ffb057]/80 cursor-pointer">
                  Learn More <span className="text-sm">→</span>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Key Features Section ("WHY CHOOSE US") */}
      <section className="py-20 sm:py-24 bg-white border-t border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Features Column */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0e1b13] max-w-xl">
                Key <span className="text-[#FFB057]">Features</span> & Capabilities.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.features.items.map((feat) => (
                <div
                  key={feat.title}
                  className={`p-6 rounded-2xl transition-all ${feat.highlighted
                    ? "bg-gradient-to-br from-[#113217] to-[#1d4924] text-white shadow-md"
                    : "bg-[#f9f8f4] text-stone-800 border border-stone-200/60"
                    }`}
                >
                  <h3
                    className={`text-lg font-bold mb-2 ${feat.highlighted ? "text-white" : "text-[#113217]"
                      }`}
                  >
                    {feat.title}
                  </h3>
                  <p
                    className={`text-sm font-medium ${feat.highlighted ? "text-white/95" : "text-stone-500"
                      }`}
                  >
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 relative h-96 sm:h-115 rounded-2xl overflow-hidden shadow-sm border border-stone-200/60">
            <Image
              src={service.featureSideImage}
              alt={service.features.title}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* 5. How It Works Section */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual */}
          <div className="lg:col-span-6 relative h-96 sm:h-120 rounded-2xl overflow-hidden shadow-xs border border-stone-200/60">
            <Image
              src={service.processSideImage}
              alt={service.howItWorks.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Right Process Steps */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0e1b13]">
                How It <span className="text-[#FFB057]">Works</span>.
              </h2>
            </div>

            <div className="space-y-6">
              {service.howItWorks.steps.map((st) => (
                <div
                  key={st.number}
                  className="flex items-start gap-6 pb-4 border-b border-stone-200/60 last:border-0"
                >
                  <span className="text-2xl font-black text-[#ffb057]">
                    {st.number}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-stone-900">
                      {st.title}
                    </h3>
                    <p className="text-sm text-stone-500 font-medium leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Technologies We Use (Interactive Quadrant Component) */}
      <section className="py-20 sm:py-24 bg-white border-t border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceTechQuadrant categories={service.technologies.categories} />
        </div>
      </section>

      {/* 7. Benefits Section */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative h-96 sm:h-115 rounded-2xl overflow-hidden shadow-sm border border-stone-200/60">
            <Image
              src={service.benefitsSideImage}
              alt={service.benefits.title}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>

          {/* Text & Points Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0e1b13]">
              Measurable <span className="text-[#FFB057]">Benefits</span>.
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xl font-medium">
              {service.benefits.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="space-y-2 border-b md:border-b-0 md:border-r border-stone-200 pb-4 md:pb-0 md:pr-6 col-span-1 md:col-span-2">
                <div className="w-10 h-10 bg-[#ffb057]/10 rounded-xl flex items-center justify-center text-[#ffb057] mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-stone-900">
                  {service.benefits.highlight}
                </h3>
              </div>

              {service.benefits.items.map((benefit) => (
                <div
                  key={benefit}
                  className="p-4 bg-stone-100/60 border border-stone-200/50 rounded-xl flex items-center gap-3.5 shadow-2xs"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#ffb057]/10 text-[#ffb057] flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base font-bold text-stone-700 leading-snug">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Industries We Serve Section */}
      <section className="bg-white border-t border-stone-200/60 py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto p-8 sm:p-12 md:p-14 bg-[#f9f8f4] border border-stone-200 rounded-[2.5rem] space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0e1b13]">
              Industries We <span className="text-[#FFB057]">Serve</span>.
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed font-medium">
              {service.industries.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.industries.items.map((ind) => (
              <div
                key={ind.name}
                className="bg-white border border-stone-200/70 rounded-2xl p-6 space-y-4 shadow-2xs hover:border-[#ffb057] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-stone-50 flex items-center justify-center border border-stone-200 text-[#113217]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M10 12h4" />
                      <path d="M10 8h4" />
                      <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                      <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#113217] tracking-tight">
                    {ind.name}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed font-medium">
                    {ind.description}
                  </p>
                </div>

                <Link href={ind.href}>
                  <span className="text-[11px] font-bold text-[#ffb057] uppercase tracking-wider pt-4 inline-flex items-center gap-1 hover:text-[#ffb057]/80 transition-colors cursor-pointer">
                    Read more <span>→</span>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Direct Consultation & Architecture Inquiry Form */}
      <ContactUs
        id="service-detail-consultation"
        title={
          <>
            Ready to deploy{" "}
            <span className="text-[#FFB057]">{service.title}?</span>
          </>
        }
        subtitle="Our systems architects and specialized squads can evaluate your architecture and formulate an actionable roadmap. Tell us what you are trying to achieve."
        defaultProjectType={service.title}
      />

      {/* 10. Global Footer */}
      <Footer />
    </div>
  );
}
