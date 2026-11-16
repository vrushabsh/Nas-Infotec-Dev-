import React from "react";
import { Container } from "@/components/ui/Container";
import { TECHNOLOGIES_DATA } from "@/constants/technologies";

export const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="py-14 sm:py-20 md:py-24 bg-white border-t border-neutral-100">
      <Container>
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4 items-center text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold leading-[1.08] tracking-[-0.03em] text-heading">
              Modern Enterprise <span className="text-[#0f7b44]">Technology</span> Stacks
            </h2>
            <p className="text-xs sm:text-[13px] leading-relaxed text-body font-medium">
              We leverage cloud-native architectures, type-safe frameworks, and distributed databases to build scalable, fault-tolerant digital applications.
            </p>
          </div>

          {/* Stacks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TECHNOLOGIES_DATA.map((stack) => (
              <div
                key={stack.category}
                className="p-6 sm:p-8 rounded-2xl bg-[#f9f8f4] border border-neutral-200/80 flex flex-col gap-5 shadow-xs"
              >
                <div className="flex items-center justify-between border-b border-neutral-200/80 pb-3">
                  <h3 className="text-lg font-bold text-heading">
                    {stack.category}
                  </h3>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0f7b44]" />
                </div>

                <div className="flex flex-col gap-3.5">
                  {stack.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-3 rounded-xl bg-white border border-neutral-200/60 flex items-start justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-heading">
                            {item.name}
                          </h4>
                          {item.tag && (
                            <span className="text-[9px] font-bold py-0.5 px-2 rounded-full bg-[#fff4e5] text-[#78460e] w-fit max-w-fit shrink-0 whitespace-nowrap">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-body mt-0.5 font-medium">
                          {item.description}
                        </p>
                      </div>
                    </div>
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

