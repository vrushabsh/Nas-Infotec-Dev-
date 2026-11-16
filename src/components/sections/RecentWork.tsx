import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BRAND_COLORS } from "@/constants/colors";
import { IMAGES } from "@/constants/images";

interface RecentWorkProps {
  accent?: string;
}

export const RecentWork: React.FC<RecentWorkProps> = ({
  accent = BRAND_COLORS.primary.DEFAULT,
}) => {
  return (
    <section id="work" className="bg-[#071d11] text-white py-14 sm:py-20 md:py-24 border-b border-white/5 relative">
      <span id="case-studies" className="absolute -top-20" />
      <Container>
        <div className="flex flex-wrap gap-10 items-start">
          {/* Left Column */}
          <div className="flex-1 min-w-[300px] flex flex-col gap-14">
            <div className="flex flex-col gap-5 items-start">
              <h2 className="text-3xl sm:text-5xl md:text-[52px] font-bold leading-[1.08] tracking-[-0.03em]">
                Take A Look At Our Recent <span className="text-[#FFB057]">Engineering</span>
              </h2>
            </div>

            {/* Project 1 */}
            <article className="group flex flex-col gap-4 cursor-pointer">
              <div className="h-[360px] sm:h-[400px] rounded-3xl relative overflow-hidden border border-white/10 transition-transform duration-300 group-hover:scale-[1.01]">
                <Image
                  src={IMAGES.services.cloudComputing}
                  alt="High-Availability Core Banking Architecture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071d11] via-transparent to-transparent opacity-80" />
              </div>
              <div className="flex gap-4 text-[11px] text-[#0f7b44] font-semibold">
                <span>• Banking &amp; Fintech</span>
                <span>• Cloud Migration</span>
              </div>
              <h3 className="text-lg sm:text-[19px] font-bold leading-snug tracking-tight max-w-md group-hover:text-emerald-300 transition-colors">
                High-Availability Core Banking Architecture &amp; Data Pipeline
              </h3>
            </article>

            {/* Project 2 */}
            <article className="group flex flex-col gap-4 cursor-pointer">
              <div className="h-[360px] sm:h-[400px] rounded-3xl relative overflow-hidden border border-white/10 transition-transform duration-300 group-hover:scale-[1.01]">
                <Image
                  src={IMAGES.services.biAnalytics}
                  alt="Predictive Supply Chain & Telemetry Engine"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071d11] via-transparent to-transparent opacity-80" />
              </div>
              <div className="flex gap-4 text-[11px] text-[#0f7b44] font-semibold">
                <span>• AI Analytics</span>
                <span>• Automated Telemetry</span>
              </div>
              <h3 className="text-lg sm:text-[19px] font-bold leading-snug tracking-tight max-w-md group-hover:text-emerald-300 transition-colors">
                Real-Time Predictive Supply Chain &amp; Logistics Telemetry Engine
              </h3>
            </article>
          </div>

          {/* Right Column */}
          <div className="flex-1 min-w-[300px] flex flex-col gap-14">
            {/* Project 3 */}
            <article className="group flex flex-col gap-4 cursor-pointer">
              <div className="h-[380px] sm:h-[420px] rounded-3xl relative overflow-hidden border border-white/10 transition-transform duration-300 group-hover:scale-[1.01]">
                <Image
                  src="/Industries/Healthcare.webp"
                  alt="Scalable Telehealth Platform"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071d11] via-transparent to-transparent opacity-80" />
              </div>
              <div className="flex gap-4 text-[11px] text-[#0f7b44] font-semibold">
                <span>• Healthcare &amp; EHR</span>
                <span>• HIPAA Compliant</span>
              </div>
              <h3 className="text-lg sm:text-[19px] font-bold leading-snug tracking-tight max-w-md group-hover:text-emerald-300 transition-colors">
                Scalable Telehealth Platform with Integrated Electronic Records
              </h3>
            </article>

            {/* Project 4 */}
            <article className="group flex flex-col gap-4 cursor-pointer">
              <div className="h-[320px] sm:h-[360px] rounded-3xl relative overflow-hidden border border-white/10 transition-transform duration-300 group-hover:scale-[1.01]">
                <Image
                  src={IMAGES.services.softwareDev}
                  alt="Omnichannel Headless E-Commerce"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071d11] via-transparent to-transparent opacity-80" />
              </div>
              <div className="flex gap-4 text-[11px] text-[#0f7b44] font-semibold">
                <span>• Retail &amp; E-Commerce</span>
                <span>• Microservices</span>
              </div>
              <h3 className="text-lg sm:text-[19px] font-bold leading-snug tracking-tight max-w-md group-hover:text-emerald-300 transition-colors">
                Omnichannel Headless E-Commerce &amp; Automated Inventory Hub
              </h3>
            </article>

            {/* Bottom CTA block */}
            <div className="flex flex-col gap-4 items-start max-w-sm ml-auto">
              <p className="text-[12px] leading-relaxed text-slate-300">
                We engineer production-grade custom software, AI pipelines, and cloud native applications that power modern organizations.
              </p>
              <Button
                href="/services"
                variant="primary"
                withArrow
                style={{ backgroundColor: accent }}
              >
                Explore All Capabilities
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
