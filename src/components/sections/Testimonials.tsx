"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { BRAND_COLORS } from "@/constants/colors";
import { IMAGES } from "@/constants/images";

interface TestimonialsProps {
  accent?: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  accent = BRAND_COLORS.primary.DEFAULT,
}) => {
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);

  const metrics = [
    { name: "Carlsberg", kind: "Global Supply & Logistics", growth: "99.9% Uptime" },
    { name: "Disneyland Paris", kind: "Digital Guest Operations", growth: "2.4x Throughput" },
    { name: "Fujifilm", kind: "Enterprise Workflow Systems", growth: "45% Cost Savings" },
  ];

  const colA = [
    {
      id: "t-1",
      name: "Siddharth Mehta",
      company: "Carlsberg Partner",
      quote:
        "NAS Infotech's engineering team exceeded all technical milestones on our cloud migration. Their agile delivery and transparent sprint cadences made execution seamless.",
      tone: "#0f7b44",
      avatar: "/About/team-1.jpg",
    },
    {
      id: "t-2",
      name: "Aparna Deshmukh",
      company: "Fintech Systems",
      quote:
        "The automated CI/CD pipelines and microservices architecture NAS Infotech built handled our peak transaction volume with zero downtime.",
      tone: "#2ec27e",
      avatar: "/About/team-2.jpg",
    },
  ];

  const colB = [
    {
      id: "t-3",
      name: "Jean-Pierre Laurent",
      company: "Disneyland Paris Ops",
      quote:
        "Outstanding expertise in enterprise systems. From initial system blueprint to final production rollout, their technical depth was truly top-tier.",
      tone: "#4aa3ff",
      avatar: "/About/team-3.jpg",
    },
    {
      id: "t-4",
      name: "Rahul Verma",
      company: "Healthcare Cloud",
      quote:
        "Strict adherence to compliance, robust data modeling, and proactive security testing. We consider NAS Infotech a core extension of our team.",
      tone: "#8f66ff",
      avatar: "/About/what-we-do-image-1.jpg",
    },
    {
      id: "t-5",
      name: "Ananya Sen",
      company: "Retail Omnichannel",
      quote:
        "Fast, methodical, and dedicated to product quality. They turned a complex legacy database into an ultra-fast headless store engine.",
      tone: "#ff7a59",
      avatar: "/About/what-we-do-image-2.jpg",
    },
  ];

  const colC = [
    {
      id: "t-6",
      name: "Marcus Vance",
      company: "Fujifilm Tech",
      quote:
        "Their custom Salesforce integration and automated reporting cut our team's manual workflow by nearly half. Highly recommended.",
      tone: "#0f7b44",
      avatar: "/About/approach-image-1.jpg",
    },
    {
      id: "t-7",
      name: "Kavita Nair",
      company: "Enterprise SaaS",
      quote:
        "The team's grasp of scalable cloud patterns and AI pipeline engineering gave our startup an unfair competitive advantage.",
      tone: "#2ec27e",
      avatar: "/About/approach-image-2.jpg",
    },
  ];

  const filterByPartner = (item: { company: string }) => {
    if (!selectedPartner) return true;
    return item.company.toLowerCase().includes(selectedPartner.toLowerCase());
  };

  return (
    <section
      id="feedback"
      className="bg-[#071d11] text-white py-14 sm:py-20 md:py-24 pb-10 sm:pb-16 border-b border-white/5"
    >
      <Container>
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-5 items-center text-center">
            <h2 className="text-3xl sm:text-5xl md:text-[52px] font-bold leading-[1.1] tracking-[-0.03em] max-w-2xl">
              Trusted By Growing <span className="text-[#FFB057]">Enterprises</span> &amp; Industry Leaders
            </h2>
          </div>

          {/* Metric Growth Cards / Interactive Filter Tabs */}
          <div className="flex flex-wrap gap-4 sm:gap-5">
            {metrics.map((tab) => {
              const isSelected = selectedPartner === tab.name;

              return (
                <button
                  type="button"
                  key={tab.name}
                  onClick={() =>
                    setSelectedPartner(isSelected ? null : tab.name)
                  }
                  style={isSelected ? { borderColor: accent } : undefined}
                  className={`flex-1 min-w-[260px] flex items-center justify-between gap-3 p-5 rounded-[18px] border transition-all text-left cursor-pointer ${
                    isSelected
                      ? "bg-white/10 ring-2 ring-[#0f7b44]/40 border-[#0f7b44]"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                >
                  <span className="inline-flex items-center gap-2 text-sm sm:text-[15px] font-bold text-white">
                    <span className="w-[18px] h-[18px] rounded-md bg-[#0f7b44] inline-block shadow-sm" />
                    {tab.name}
                  </span>
                  <span className="text-[10px] leading-tight text-slate-300">
                    {tab.kind}
                  </span>
                  <span className="text-[10px] text-[#2ec27e] font-bold bg-[#2ec27e]/15 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {tab.growth}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Testimonials 3-Column Grid */}
          <div className="flex flex-wrap gap-5 items-start">
            {/* Column A */}
            <div className="flex-1 min-w-[280px] flex flex-col gap-5">
              {colA.filter(filterByPartner).map((t) => (
                <figure
                  key={t.id}
                  className="m-0 p-5 sm:p-6 rounded-[18px] border border-white/10 bg-white/5 flex flex-col gap-5 hover:border-white/20 transition-colors shadow-sm"
                >
                  <blockquote className="m-0 text-xs leading-[1.7] text-slate-200 font-medium">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center justify-between gap-3 text-[11px] font-bold">
                    <span className="inline-flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-full overflow-hidden relative inline-block shadow-inner border border-white/20 shrink-0">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          className="object-cover"
                        />
                      </span>
                      <span className="text-white">{t.name}</span>
                    </span>
                    <span className="text-emerald-400 font-semibold text-[10px]">
                      {t.company}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* Column B */}
            <div className="flex-1 min-w-[280px] flex flex-col gap-5">
              {colB.filter(filterByPartner).map((t) => (
                <figure
                  key={t.id}
                  className="m-0 p-5 sm:p-6 rounded-[18px] border border-white/10 bg-white/5 flex flex-col gap-5 hover:border-white/20 transition-colors shadow-sm"
                >
                  <blockquote className="m-0 text-xs leading-[1.7] text-slate-200 font-medium">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center justify-between gap-3 text-[11px] font-bold">
                    <span className="inline-flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-full overflow-hidden relative inline-block shadow-inner border border-white/20 shrink-0">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          className="object-cover"
                        />
                      </span>
                      <span className="text-white">{t.name}</span>
                    </span>
                    <span className="text-emerald-400 font-semibold text-[10px]">
                      {t.company}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* Column C */}
            <div className="flex-1 min-w-[280px] flex flex-col gap-5">
              {colC.filter(filterByPartner).map((t) => (
                <figure
                  key={t.id}
                  className="m-0 p-5 sm:p-6 rounded-[18px] border border-white/10 bg-white/5 flex flex-col gap-5 hover:border-white/20 transition-colors shadow-sm"
                >
                  <blockquote className="m-0 text-xs leading-[1.7] text-slate-200 font-medium">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center justify-between gap-3 text-[11px] font-bold">
                    <span className="inline-flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-full overflow-hidden relative inline-block shadow-inner border border-white/20 shrink-0">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          className="object-cover"
                        />
                      </span>
                      <span className="text-white">{t.name}</span>
                    </span>
                    <span className="text-emerald-400 font-semibold text-[10px]">
                      {t.company}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* Light Logos Row */}
          <div className="pt-10 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)] border-t border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-9">
              {IMAGES.clients.map((client) => (
                <div
                  key={client.name}
                  className="h-8 w-28 relative flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
                  title={client.name}
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={112}
                    height={32}
                    className="max-h-8 max-w-full object-contain filter invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
