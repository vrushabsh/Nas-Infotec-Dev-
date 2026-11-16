import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { INDUSTRIES_DATA } from "@/constants/industries";

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="bg-[#f9f8f4] py-14 sm:py-20 md:py-24 border-t border-[#ece8de]">
      <Container>
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col items-start gap-4 max-w-xl">
              <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-heading">
                Tailored IT Expertise Across <span className="text-[#FFB057]">Key Sectors</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-[13px] leading-relaxed text-body font-medium">
              We understand the domain nuances and regulatory requirements of diverse industries, delivering secure and compliant technology architectures.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_DATA.map((ind) => (
              <div
                key={ind.id}
                className="group p-6 rounded-2xl bg-white border border-neutral-200/80 hover:border-[#0f7b44] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between gap-5"
              >
                <div className="flex flex-col gap-4">
                  <div className="h-40 w-full rounded-xl overflow-hidden relative bg-neutral-100">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-heading group-hover:text-[#0a2113] transition-colors">
                    {ind.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-body font-medium">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex flex-wrap gap-2">
                  {ind.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-[10px] font-semibold py-1 px-2.5 rounded-full bg-[#f9f8f4] text-heading border border-neutral-200/60"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

