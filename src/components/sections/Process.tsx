"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BRAND_COLORS } from "@/constants/colors";

interface ProcessProps {
  accent?: string;
}

export const Process: React.FC<ProcessProps> = ({
  accent = BRAND_COLORS.primary.DEFAULT,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Consultation & Strategic Analysis",
      subtitle: "Discovery & Scope",
      description:
        "We start with an in-depth architectural consultation to understand your business objectives, technical debt, and scalability challenges.",
      image: "/Consultation & Strategic Analysis.webp",
    },
    {
      id: 2,
      title: "Solution Architecture & Design",
      subtitle: "System Blueprints",
      description:
        "Our principal architects design a detailed blueprint and data model ensuring cloud-native resilience, modularity, and high throughput.",
      image: "/Solution Architecture & Design.webp",
    },
    {
      id: 3,
      title: "Iterative Agile Development",
      subtitle: "Sprint Delivery",
      description:
        "Using agile methodologies, we engineer your product with continuous stakeholder feedback, rapid increments, and clean code standards.",
      image: "/Iterative Agile Development.webp",
    },
    {
      id: 4,
      title: "Rigorous Testing & Security QA",
      subtitle: "Zero Defects",
      description:
        "Comprehensive automated integration testing, penetration scans, and load testing guarantee reliability and enterprise compliance.",
      image: "/Rigorous Testing & Security QA.webp",
    },
    {
      id: 5,
      title: "Cloud Deployment & 24/7 SLA Support",
      subtitle: "Production Scale",
      description:
        "Automated CI/CD pipelines transition code safely to live clusters, backed by 24/7/365 telemetry monitoring and strict SLA response times.",
      image: "/Cloud Deployment & 247 SLA Support.webp",
    },
  ];

  const prevStep = () => {
    setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const nextStep = () => {
    setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  const prevIndex = currentStep === 0 ? steps.length - 1 : currentStep - 1;
  const nextIndex = currentStep === steps.length - 1 ? 0 : currentStep + 1;
  const prevStepData = steps[prevIndex];
  const nextStepData = steps[nextIndex];
  const activeStep = steps[currentStep];

  return (
    <section id="process" className="bg-[#fdeeea] py-14 sm:py-20 md:py-20 border-b border-[#f0ded8]">
      <Container>
        <div className="flex flex-wrap gap-8 items-end justify-between">
          <div className="flex-1 min-w-[300px] flex flex-col gap-5 items-start">
            <h2 className="text-3xl sm:text-5xl md:text-[52px] font-bold leading-[1.08] tracking-[-0.03em] text-heading">
              Understand The Engineering <span className="text-[#FFB057]">Process</span>.
            </h2>
          </div>

          <div className="flex-0 min-w-[280px] max-w-[340px] flex flex-col gap-4 items-start">
            <p className="text-[12px] leading-relaxed text-body font-medium">
              We strive to develop real-world IT solutions that are ideal for small to large enterprise projects with bespoke project requirements.
            </p>
            <Button href="/#work" variant="primary" withArrow>
              View Client Projects
            </Button>
          </div>
        </div>
      </Container>

      {/* Visual Showcase with Real Images & Interactive Carousel */}
      <div className="relative mt-12 flex justify-center items-center gap-6 overflow-hidden px-4">
        {/* Left Peek Card */}
        <div
          onClick={prevStep}
          className="hidden sm:block flex-none w-[220px] sm:w-[260px] h-[340px] sm:h-[400px] rounded-[26px] -ml-28 sm:-ml-36 overflow-hidden opacity-50 hover:opacity-75 transition-all duration-300 cursor-pointer shadow-lg border border-black/10 relative"
          title={`Previous: ${prevStepData.title}`}
        >
          <Image
            src={prevStepData.image}
            alt={prevStepData.title}
            fill
            sizes="260px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1b10]/90 via-[#0a1b10]/50 to-[#0a1b10]/20" />
          <div className="absolute left-5 bottom-5 right-5 text-white text-xs font-bold line-clamp-2 drop-shadow-sm">
            {prevStepData.title}
          </div>
        </div>

        {/* Center Active Card */}
        <div
          key={activeStep.id}
          className="flex-none w-full max-w-[820px] h-[360px] sm:h-[420px] rounded-[28px] relative overflow-hidden shadow-2xl transition-all duration-500 border border-black/10 group bg-[#0a1b10]"
        >
          <Image
            src={activeStep.image}
            alt={activeStep.title}
            fill
            priority
            sizes="(max-width: 820px) 100vw, 820px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Luminous Ambient Glow & Dark Gradient Overlay for optimal contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1b10]/95 via-[#0a1b10]/45 to-transparent pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#FFB057]/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Discussion Pill & Step indicator */}
          <div className="absolute left-5 sm:left-6 bottom-5 sm:bottom-6 flex flex-wrap items-center gap-2 z-10 max-w-[70%]">
            <span className="py-2 px-4 sm:py-2.5 sm:px-5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs sm:text-[13px] font-bold shadow-sm border border-white/20 w-fit max-w-fit shrink-0 whitespace-nowrap">
              {activeStep.title}
            </span>
            <span className="py-1 px-3 rounded-full bg-[#FFB057] text-[#0a1b10] text-[10px] font-bold shadow-xs w-fit max-w-fit shrink-0 whitespace-nowrap">
              Phase {currentStep + 1} of {steps.length}
            </span>
          </div>

          <p className="absolute right-5 sm:right-6 bottom-5 sm:bottom-6 max-w-[280px] text-[11px] sm:text-xs leading-relaxed text-slate-100 hidden md:block z-10 font-medium drop-shadow-sm bg-black/40 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
            {activeStep.description}
          </p>
        </div>

        {/* Right Peek Card */}
        <div
          onClick={nextStep}
          className="hidden sm:block flex-none w-[220px] sm:w-[260px] h-[340px] sm:h-[400px] rounded-[26px] -mr-28 sm:-mr-36 overflow-hidden opacity-50 hover:opacity-75 transition-all duration-300 cursor-pointer shadow-lg border border-black/10 relative"
          title={`Next: ${nextStepData.title}`}
        >
          <Image
            src={nextStepData.image}
            alt={nextStepData.title}
            fill
            sizes="260px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1b10]/90 via-[#0a1b10]/50 to-[#0a1b10]/20" />
          <div className="absolute right-5 bottom-5 left-5 text-white text-xs font-bold line-clamp-2 text-right drop-shadow-sm">
            {nextStepData.title}
          </div>
        </div>

        {/* Previous Navigation Button (White Circle) */}
        <button
          type="button"
          onClick={prevStep}
          aria-label="Previous step"
          className="absolute left-3 sm:left-8 md:left-[calc(50%-430px)] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-heading flex items-center justify-center shadow-[0_8px_24px_rgba(20,16,40,0.18)] hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>

        {/* Next Navigation Button (Brand Orange Circle) */}
        <button
          type="button"
          onClick={nextStep}
          aria-label="Next step"
          style={{ backgroundColor: accent }}
          className="absolute right-3 sm:right-8 md:right-[calc(50%-430px)] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full text-black flex items-center justify-center shadow-[0_8px_24px_rgba(20,16,40,0.18)] hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer font-bold"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      {/* Step Indicator Dots */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {steps.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentStep(idx)}
            aria-label={`Go to step ${idx + 1}: ${s.title}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentStep === idx
                ? "w-8 bg-[#FFB057]"
                : "w-2 bg-neutral-300 hover:bg-neutral-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
