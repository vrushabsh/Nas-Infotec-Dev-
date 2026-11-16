"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export interface AccordionItem {
  id: string | number;
  title: string;
  tag?: string;
  answer?: string;
  content?: React.ReactNode;
}

export interface AccordionSectionProps {
  id?: string;
  className?: string;
  title: React.ReactNode;
  description: string;
  button?: {
    text: string;
    href: string;
    withArrow?: boolean;
    variant?: "primary" | "secondary" | "outline" | "white";
  };
  items: AccordionItem[];
  defaultOpenId?: string | number | null;
  iconType?: "plus" | "chevron";
  containerSize?: "default" | "wide" | "narrow";
  borderTop?: boolean;
}

export const AccordionSection: React.FC<AccordionSectionProps> = ({
  id,
  className = "py-16 sm:py-24 bg-white",
  title,
  description,
  button,
  items,
  defaultOpenId = null,
  iconType = "plus",
  containerSize = "default",
  borderTop = true,
}) => {
  const [openId, setOpenId] = useState<string | number | null>(defaultOpenId);

  const toggleItem = (itemId: string | number) => {
    setOpenId(openId === itemId ? null : itemId);
  };

  return (
    <section
      id={id}
      className={`${borderTop ? "border-t border-neutral-100" : ""} ${className}`}
    >
      <Container size={containerSize}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-5 flex flex-col items-start gap-5 lg:sticky lg:top-24">
            <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-heading">
              {title}
            </h2>

            <p className="text-sm leading-relaxed text-body font-medium max-w-sm">
              {description}
            </p>

            {button && (
              <div className="pt-2">
                <Button
                  href={button.href}
                  variant={button.variant || "primary"}
                  withArrow={button.withArrow !== false}
                >
                  {button.text}
                </Button>
              </div>
            )}
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-neutral-200 border-y border-neutral-200">
            {items.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div key={item.id} className="py-5 sm:py-6 transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group bg-transparent border-0 p-0 min-h-[44px]"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-base sm:text-lg font-bold transition-colors ${
                          isOpen ? "text-[#0a2113]" : "text-heading group-hover:text-[#0a2113]"
                        }`}
                      >
                        {item.title}
                      </span>
                      {item.tag && (
                        <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider py-0.5 px-2 rounded-md bg-[#f0fbf4] text-[#15803d] border border-[#d1fae5]">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {iconType === "plus" ? (
                      <span
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-none transition-all duration-200 ${
                          isOpen
                            ? "bg-[#0b3b24] text-white rotate-45"
                            : "bg-[#f0fbf4] text-[#0f7b44] group-hover:bg-[#dcfce7]"
                        }`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    ) : (
                      <span
                        className={`inline-flex transition-transform duration-300 ${
                          isOpen ? "-rotate-90 text-[#FFB057]" : "rotate-0 text-heading"
                        }`}
                      >
                        <svg
                          width="20"
                          height="20"
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
                      </span>
                    )}
                  </button>

                  {isOpen && (
                    <div className="mt-3 animate-in fade-in duration-200">
                      {item.content ? (
                        item.content
                      ) : (
                        <p className="text-xs sm:text-sm leading-relaxed text-body font-medium">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AccordionSection;
