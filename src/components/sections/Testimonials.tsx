"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { BRAND_COLORS } from "@/constants/colors";
import { IMAGES } from "@/constants/images";

export interface TestimonialItem {
  id: string | number;
  name: string;
  company?: string;
  role?: string;
  quote?: string;
  description?: string;
  avatar?: string;
  rating?: number;
  tone?: string;
}

export interface MetricItem {
  name: string;
  kind: string;
  growth: string;
}

export interface TestimonialsProps {
  accent?: string;
  id?: string;
  badge?: string;
  title?: React.ReactNode;
  subtitle?: string;
  items?: TestimonialItem[];
  metrics?: MetricItem[];
  showMetrics?: boolean;
  showLogos?: boolean;
  className?: string;
}

export const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t-1",
    name: "Siddharth Mehta",
    company: "Carlsberg Partner",
    quote:
      "NAS Infotech's engineering team exceeded all technical milestones on our cloud migration. Their agile delivery and transparent sprint cadences made execution seamless.",
    tone: "#0f7b44",
    avatar: "/About/team-1.jpg",
    rating: 5,
  },
  {
    id: "t-2",
    name: "Aparna Deshmukh",
    company: "Fintech Systems",
    quote:
      "The automated CI/CD pipelines and microservices architecture NAS Infotech built handled our peak transaction volume with zero downtime.",
    tone: "#2ec27e",
    avatar: "/About/team-2.jpg",
    rating: 5,
  },
  {
    id: "t-3",
    name: "Jean-Pierre Laurent",
    company: "Disneyland Paris Ops",
    quote:
      "Outstanding expertise in enterprise systems. From initial system blueprint to final production rollout, their technical depth was truly top-tier.",
    tone: "#4aa3ff",
    avatar: "/About/team-3.jpg",
    rating: 5,
  },
  {
    id: "t-4",
    name: "Rahul Verma",
    company: "Healthcare Cloud",
    quote:
      "Strict adherence to compliance, robust data modeling, and proactive security testing. We consider NAS Infotech a core extension of our team.",
    tone: "#8f66ff",
    avatar: "/About/what-we-do-image-1.jpg",
    rating: 5,
  },
  {
    id: "t-5",
    name: "Ananya Sen",
    company: "Retail Omnichannel",
    quote:
      "Fast, methodical, and dedicated to product quality. They turned a complex legacy database into an ultra-fast headless store engine.",
    tone: "#ff7a59",
    avatar: "/About/what-we-do-image-2.jpg",
    rating: 5,
  },
  {
    id: "t-6",
    name: "Marcus Vance",
    company: "Fujifilm Tech",
    quote:
      "Their custom Salesforce integration and automated reporting cut our team's manual workflow by nearly half. Highly recommended.",
    tone: "#0f7b44",
    avatar: "/About/approach-image-1.jpg",
    rating: 5,
  },
  {
    id: "t-7",
    name: "Kavita Nair",
    company: "Enterprise SaaS",
    quote:
      "The team's grasp of scalable cloud patterns and AI pipeline engineering gave our startup an unfair competitive advantage.",
    tone: "#2ec27e",
    avatar: "/About/approach-image-2.jpg",
    rating: 5,
  },
  {
    id: "t-8",
    name: "Liam Harper",
    company: "Operations Director",
    quote:
      "The architecture delivered was clean, resilient, and made our digital services perform flawlessly. They truly captured the essence of our business goals.",
    tone: "#FFB057",
    avatar: "/About/team-1.jpg",
    rating: 5,
  },
  {
    id: "t-9",
    name: "Ethan Brooks",
    company: "President of Engineering",
    quote:
      "Their work brought an enterprise-grade touch to our platform and scaled our throughput seamlessly. The team delivered ahead of schedule with zero defects.",
    tone: "#2ec27e",
    avatar: "/About/team-2.jpg",
    rating: 5,
  },
  {
    id: "t-10",
    name: "Noah Bennett",
    company: "Cloud Infrastructure Lead",
    quote:
      "We loved how clean and robust the final cloud deployment turned out. Every release passed automated security scans and strengthened our architecture.",
    tone: "#4aa3ff",
    avatar: "/About/team-3.jpg",
    rating: 5,
  },
  {
    id: "t-11",
    name: "Maya Collins",
    company: "Product Architecture VP",
    quote:
      "The technical execution exceeded our expectations and gave our digital ecosystem a future-proof foundation. Every milestone was executed with outstanding clarity.",
    tone: "#8f66ff",
    avatar: "/About/what-we-do-image-1.jpg",
    rating: 5,
  },
];

const DEFAULT_METRICS: MetricItem[] = [
  { name: "Carlsberg", kind: "Global Supply & Logistics", growth: "99.9% Uptime" },
  { name: "Disneyland Paris", kind: "Digital Guest Operations", growth: "2.4x Throughput" },
  { name: "Fujifilm", kind: "Enterprise Workflow Systems", growth: "45% Cost Savings" },
];

export const Testimonials: React.FC<TestimonialsProps> = ({
  accent = BRAND_COLORS.primary.DEFAULT,
  id = "feedback",
  title,
  subtitle,
  items,
  metrics = DEFAULT_METRICS,
  showMetrics = true,
  showLogos = true,
  className = "",
}) => {
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);

  // Normalize items to ensure all fields are consistently available
  const rawList = items && items.length > 0 ? items : DEFAULT_TESTIMONIALS;
  const normalizedList: TestimonialItem[] = rawList.map((t, idx) => ({
    id: t.id || `t-custom-${idx}`,
    name: t.name,
    company: t.company || t.role || "Verified Enterprise Leader",
    quote: t.quote || t.description || "Outstanding execution and delivery by NAS Infotech.",
    avatar: t.avatar || (idx % 3 === 0 ? "/About/team-1.jpg" : idx % 3 === 1 ? "/About/team-2.jpg" : "/About/team-3.jpg"),
    tone: t.tone || (idx % 2 === 0 ? "#0f7b44" : "#FFB057"),
    rating: t.rating || 5,
  }));

  // Filter if partner tab selected
  const activeList = selectedPartner
    ? normalizedList.filter((item) =>
      item.company?.toLowerCase().includes(selectedPartner.toLowerCase())
    )
    : normalizedList;

  // Use fallback if filter leaves empty
  const displayItems = activeList.length > 0 ? activeList : normalizedList;

  // Partition items into 3 columns
  const col1: TestimonialItem[] = [];
  const col2: TestimonialItem[] = [];
  const col3: TestimonialItem[] = [];

  displayItems.forEach((item, index) => {
    if (index % 3 === 0) col1.push(item);
    else if (index % 3 === 1) col2.push(item);
    else col3.push(item);
  });

  // Ensure each column has sufficient items to loop seamlessly
  const ensureLoopable = (col: TestimonialItem[]) => {
    if (col.length >= 2) return col;
    if (col.length === 1) return [...col, ...displayItems.filter((i) => i.id !== col[0].id).slice(0, 1)];
    return displayItems.slice(0, 2);
  };

  const finalCol1 = ensureLoopable(col1);
  const finalCol2 = ensureLoopable(col2);
  const finalCol3 = ensureLoopable(col3);

  const renderCard = (t: TestimonialItem, isDuplicate = false) => (
    <figure
      key={`${t.id}-${isDuplicate ? "dup" : "orig"}`}
      className="m-0 p-5 sm:p-6 rounded-[22px] border border-white/10 bg-white/5 backdrop-blur-md flex flex-col gap-4.5 hover:border-[#FFB057]/50 hover:bg-white/10 transition-all duration-300 shadow-sm cursor-default group"
    >
      {/* 5-Star Rating Row */}
      <div className="flex items-center justify-between">
        <div className="flex text-[#FFB057] text-sm tracking-wider font-bold">
          ★★★★★
        </div>
        <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
      </div>

      {/* Quote Content */}
      <blockquote className="m-0 text-xs sm:text-[13px] leading-[1.7] text-slate-200 font-medium">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      {/* Author Footer */}
      <figcaption className="flex items-center justify-between gap-3 text-[11px] font-bold pt-2 border-t border-white/10">
        <span className="inline-flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-full overflow-hidden relative inline-block shadow-inner border border-white/20 shrink-0 bg-[#0b3b24]">
            {t.avatar ? (
              <Image
                src={t.avatar}
                alt={t.name}
                fill
                sizes="32px"
                className="object-cover"
              />
            ) : (
              <span className="w-full h-full flex items-center justify-center text-white text-[10px] font-black">
                {t.name.slice(0, 2).toUpperCase()}
              </span>
            )}
          </span>
          <span className="text-white font-semibold">{t.name}</span>
        </span>
        <span className="text-emerald-400 font-semibold text-[10px] bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-0.5 rounded-full truncate max-w-[140px]">
          {t.company}
        </span>
      </figcaption>
    </figure>
  );

  return (
    <section
      id={id}
      className={`bg-[#071d11] text-white py-16 sm:py-20 md:py-24 border-b border-white/5 relative overflow-hidden ${className}`}
    >
      {/* Ambient Radial Brand Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FFB057]/10 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        <div className="flex flex-col gap-10 sm:gap-12 relative z-10">
          {/* Section Heading */}
          <div className="flex flex-col gap-3.5 items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] max-w-2xl text-white">
              {title || (
                <>
                  Trusted By Growing <span className="text-[#FFB057]">Enterprises</span> &amp; Industry Leaders
                </>
              )}
            </h2>

            {subtitle && (
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-medium max-w-xl">
                {subtitle}
              </p>
            )}
          </div>

          {/* Metric Growth Cards / Interactive Filter Tabs */}
          {showMetrics && metrics.length > 0 && (
            <div className="flex flex-wrap gap-4 sm:gap-5 justify-center">
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
                    className={`flex-1 min-w-[260px] max-w-[380px] flex items-center justify-between gap-3 p-4 sm:p-5 rounded-[20px] border transition-all text-left cursor-pointer ${isSelected
                      ? "bg-white/15 ring-2 ring-[#FFB057]/40 border-[#FFB057]"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                      }`}
                  >
                    <span className="inline-flex items-center gap-2 text-sm sm:text-[15px] font-bold text-white">
                      <span className="w-4 h-4 rounded-md bg-[#0f7b44] inline-block shadow-sm" />
                      {tab.name}
                    </span>
                    <span className="text-[10px] leading-tight text-slate-300 hidden sm:inline">
                      {tab.kind}
                    </span>
                    <span className="text-[10px] text-[#2ec27e] font-bold bg-[#2ec27e]/15 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {tab.growth}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Infinite Vertical Scrolling Testimonials Section */}
          <div className="relative h-[580px] sm:h-[640px] md:h-[680px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_30px,black_calc(100%-30px),transparent)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 h-full">
              {/* Column 1: Infinite Vertical Scroll (Upward) */}
              <div className="overflow-hidden relative h-full">
                <div className="animate-marquee-vertical flex flex-col">
                  <div className="flex flex-col gap-5 pb-5 shrink-0">
                    {finalCol1.map((t) => renderCard(t, false))}
                  </div>
                  <div className="flex flex-col gap-5 pb-5 shrink-0" aria-hidden="true">
                    {finalCol1.map((t) => renderCard(t, true))}
                  </div>
                </div>
              </div>

              {/* Column 2: Infinite Vertical Scroll (Reverse / Downward) */}
              <div className="overflow-hidden relative h-full hidden md:block">
                <div className="animate-marquee-vertical-reverse flex flex-col">
                  <div className="flex flex-col gap-5 pb-5 shrink-0">
                    {finalCol2.map((t) => renderCard(t, false))}
                  </div>
                  <div className="flex flex-col gap-5 pb-5 shrink-0" aria-hidden="true">
                    {finalCol2.map((t) => renderCard(t, true))}
                  </div>
                </div>
              </div>

              {/* Column 3: Infinite Vertical Scroll (Upward, Slow Cadence) */}
              <div className="overflow-hidden relative h-full hidden lg:block">
                <div className="animate-marquee-vertical-slow flex flex-col">
                  <div className="flex flex-col gap-5 pb-5 shrink-0">
                    {finalCol3.map((t) => renderCard(t, false))}
                  </div>
                  <div className="flex flex-col gap-5 pb-5 shrink-0" aria-hidden="true">
                    {finalCol3.map((t) => renderCard(t, true))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Light Logos Row - Infinite Carousel */}
          {showLogos && (
            <div className="pt-8 sm:pt-10 border-t border-white/10 overflow-hidden relative [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
              <div className="animate-marquee flex items-center">
                <div className="flex items-center gap-10 sm:gap-14 pr-10 sm:pr-14 shrink-0">
                  {IMAGES.clients.map((client) => (
                    <div
                      key={client.name}
                      className="h-[52px] w-36 relative flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity shrink-0"
                      title={client.name}
                    >
                      <Image
                        src={client.src}
                        alt={client.name}
                        width={144}
                        height={52}
                        className="max-h-[52px] max-w-full object-contain filter invert"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-10 sm:gap-14 pr-10 sm:pr-14 shrink-0" aria-hidden="true">
                  {IMAGES.clients.map((client) => (
                    <div
                      key={`dup-${client.name}`}
                      className="h-[52px] w-36 relative flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity shrink-0"
                      title={client.name}
                    >
                      <Image
                        src={client.src}
                        alt={client.name}
                        width={144}
                        height={52}
                        className="max-h-[52px] max-w-full object-contain filter invert"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
