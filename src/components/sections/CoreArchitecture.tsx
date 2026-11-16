"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ArchitecturePillar {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  details: string[];
}

export const CoreArchitecture: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("pillars");

  const pillars: ArchitecturePillar[] = [
    {
      id: "clean-code",
      number: "01",
      category: "Modularity & Visibility",
      title: "Transparent Micro-Architecture",
      description:
        "Every service is designed with modular domain boundaries, decoupled APIs, and zero technical debt. Your teams maintain 100% visibility into codebase logic and data flow.",
      details: [
        "Domain-Driven Design (DDD)",
        "Strict Type-Safe API Contracts",
        "Automated OpenAPI Documentation",
      ],
    },
    {
      id: "cicd",
      number: "02",
      category: "Delivery Velocity",
      title: "Automated Zero-Downtime CI/CD",
      description:
        "Engineered with blue-green and canary deployment pipelines. Releases happen seamlessly in minutes without service disruption or degraded transaction throughput.",
      details: [
        "Automated Unit & Integration Gateways",
        "Instant One-Click Rollback Protocols",
        "GitOps Infrastructure As Code",
      ],
    },
    {
      id: "security",
      number: "03",
      category: "Enterprise Resilience",
      title: "Zero-Trust Security & High Availability",
      description:
        "Continuous vulnerability scanning, automated secrets rotation, and multi-region failover clusters guarantee continuous compliance and mission-critical availability.",
      details: [
        "End-to-End TLS & Payload Encryption",
        "Automated Container Vulnerability Audits",
        "Multi-Region Redundant Clustering",
      ],
    },
  ];

  const telemetryMetrics = [
    { label: "SLA Guarantee", value: "99.99%", sub: "Guaranteed uptime across all regions" },
    { label: "Global Deployments", value: "150+", sub: "Successful enterprise product sprints" },
    { label: "Mean Latency", value: "<15ms", sub: "Optimized distributed edge execution" },
    { label: "Fault Recovery", value: "0.0s", sub: "Instant automated pod failover" },
  ];

  const systemCapabilities = [
    {
      title: "Multi-Cloud Kubernetes Clustering",
      tag: "Infrastructure",
      desc: "Self-healing container orchestration with dynamic resource auto-scaling under peak traffic.",
    },
    {
      title: "Event-Driven Message Streaming",
      tag: "Data Flow",
      desc: "Real-time asynchronous messaging brokers handling millions of enterprise records seamlessly.",
    },
    {
      title: "Predictive Telemetry & AI Monitoring",
      tag: "Intelligence",
      desc: "Machine learning anomalies detection flagging bottlenecks before they impact production users.",
    },
    {
      title: "SOC2 & HIPAA Compliant Hardening",
      tag: "Governance",
      desc: "Built-in audit trails, role-based access governance, and strict data residency compliance.",
    },
  ];

  return (
    <section
      id="technologies"
      className="w-full bg-[#0a1b10] py-20 sm:py-28 lg:py-32 text-white relative overflow-hidden font-sans border-y border-white/10"
    >
      <span id="core-architecture" className="absolute -top-20" />
      {/* Luminous Ambient Background Glows */}
      <div className="absolute top-0 right-1/4 w-[650px] h-[550px] bg-[#FFB057]/10 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-[#113217]/35 rounded-full blur-[130px] pointer-events-none -z-0" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.08] tracking-tight text-white">
            Architecting{" "}
            <span className="text-[#FFB057]">
              Resilient Systems
            </span>{" "}
            for Enterprise Scale
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-medium max-w-2xl">
            Our systems architects engineer fault-tolerant, scalable digital backbones designed to withstand modern enterprise demands, eliminate operational latency, and guarantee zero downtime.
          </p>

          {/* Interactive Mode Filter */}
          <div className="inline-flex items-center p-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md pt-1 mt-4">
            <button
              type="button"
              onClick={() => setActiveTab("pillars")}
              className={`py-1.5 px-5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === "pillars"
                  ? "bg-[#FFB057] text-[#071d11] shadow-md"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Architecture Pillars
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("telemetry")}
              className={`py-1.5 px-5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === "telemetry"
                  ? "bg-[#FFB057] text-[#071d11] shadow-md"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Live Telemetry Console
            </button>
          </div>
        </div>

        {/* Content View Based on Active Tab */}
        {activeTab === "pillars" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="group relative rounded-[28px] p-7 sm:p-8 bg-gradient-to-b from-[#113217]/90 via-[#0d2a17]/80 to-[#0a1b10] border border-white/10 hover:border-[#FFB057]/60 shadow-xl hover:shadow-[0_20px_50px_rgba(255,176,87,0.12)] transition-all duration-300 flex flex-col justify-between gap-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#FFB057] uppercase tracking-wider">
                      {pillar.category}
                    </span>
                    <span className="text-2xl font-black text-white/30 group-hover:text-[#FFB057] transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-200 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                    Engineering Standards
                  </span>
                  <ul className="space-y-1.5">
                    {pillar.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-xs text-slate-200 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFB057]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Live Telemetry View */
          <div className="rounded-[32px] bg-gradient-to-br from-[#113217] via-[#0d2a17] to-[#0a1b10] border border-white/15 p-6 sm:p-10 shadow-2xl space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 relative w-full h-[280px] sm:h-[340px] flex items-center justify-center">
                <Image
                  src="/Home/feature-support.png"
                  alt="NAS Infotech IT Telemetry Console"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {systemCapabilities.map((cap) => (
                  <div
                    key={cap.title}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFB057]/40 transition-colors space-y-2"
                  >
                    <span className="text-[10px] font-bold py-0.5 px-2 rounded-full bg-[#FFB057]/20 text-[#FFB057] border border-[#FFB057]/30">
                      {cap.tag}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {cap.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Global Architecture Telemetry Bar */}
        <div className="mt-14 sm:mt-16 rounded-[28px] bg-white/[0.04] border border-white/10 backdrop-blur-xl p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {telemetryMetrics.map((m, idx) => (
              <div key={m.label} className={`flex flex-col gap-1.5 ${idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FFB057] tracking-tight">
                  {m.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white">
                  {m.label}
                </span>
                <span className="text-[11px] text-gray-400 font-medium">
                  {m.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreArchitecture;
