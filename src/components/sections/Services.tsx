"use client";

import React from "react";
import Image from "next/image";
import { AccordionSection, AccordionItem } from "@/components/ui/AccordionSection";
import { SERVICES_DATA } from "@/constants/services";
import { BRAND_COLORS } from "@/constants/colors";

interface ServicesProps {
  accent?: string;
}

export const Services: React.FC<ServicesProps> = ({
  accent = BRAND_COLORS.primary.DEFAULT,
}) => {
  const serviceItems: AccordionItem[] = SERVICES_DATA.map((svc, i) => ({
    id: i,
    title: svc.title,
    tag: svc.tag,
    content: (
      <div className="flex flex-wrap gap-6 items-center mt-3 animate-in fade-in slide-in-from-top-2 duration-300">
        <div className="flex-1 min-w-[200px] flex flex-col gap-3">
          <p className="text-[12px] leading-relaxed text-body font-medium">
            {svc.shortDescription}
          </p>
          <ul className="flex flex-col gap-1.5 text-[11px] text-[#0a2113] font-semibold">
            {svc.features.slice(0, 3).map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: accent }}
                />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Visual Preview Card */}
        <div className="flex-none w-52 sm:w-[230px] h-[135px] rounded-2xl relative overflow-hidden shadow-lg border border-white/10 p-3 flex flex-col justify-between text-white group/card">
          <Image
            src={svc.imageSrc}
            alt={svc.title}
            fill
            className="object-cover group-hover/card:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071d11] via-[#071d11]/70 to-[#071d11]/40" />
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">
              Metrics
            </span>
            <span className="w-2 h-2 rounded-full bg-[#2ec27e] animate-pulse" />
          </div>
          <div className="relative z-10 grid grid-cols-2 gap-1.5 my-auto">
            {svc.metrics.slice(0, 2).map((m) => (
              <div
                key={m.label}
                className="bg-black/40 backdrop-blur-xs rounded-lg p-1.5 text-center border border-white/10"
              >
                <div className="text-xs font-black text-emerald-300">{m.value}</div>
                <div className="text-[8px] text-slate-200 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
          <span className="relative z-10 text-right text-[8px] font-bold text-slate-300">
            Enterprise Ready
          </span>
        </div>
      </div>
    ),
  }));

  return (
    <AccordionSection
      id="services"
      className="bg-white py-14 sm:py-20 md:py-24"
      borderTop={false}
      title={
        <>
          How We Take Your{" "}
          <span className="text-[#FFB057]">Business</span> To The Next Level
        </>
      }
      description="We are a full-service technology consulting agency. Our engineers and architects partner with you to design, build, and scale resilient digital solutions."
      button={{
        text: "View All Services",
        href: "/services",
        withArrow: true,
      }}
      items={serviceItems}
      defaultOpenId={0}
      iconType="chevron"
    />
  );
};

export default Services;
