"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  description: string;
}

interface AboutTestimonialsProps {
  testimonials: Testimonial[];
}

export const AboutTestimonials: React.FC<AboutTestimonialsProps> = ({ testimonials }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-20 sm:py-28 bg-[#f9f8f4] border-b border-[#ece8de]">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-4 mb-14">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0a1118] tracking-tight">
            What leaders say about{" "}
            <span className="text-[#FFB057]">NAS Infotech</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setActiveTestimonial(idx)}
              className={`p-6 rounded-2xl bg-white border transition-all duration-300 shadow-xs flex flex-col justify-between gap-6 cursor-pointer hover:shadow-md ${
                activeTestimonial === idx
                  ? "border-[#FFB057] ring-2 ring-[#FFB057]/20"
                  : "border-gray-200/80"
              }`}
            >
              <div className="space-y-3">
                <div className="flex text-[#FFB057] text-sm font-bold">
                  ★★★★★
                </div>
                <p className="text-xs sm:text-sm text-[#55675d] leading-relaxed font-medium italic">
                  &ldquo;{t.description}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0b3b24] text-white flex items-center justify-center font-bold text-xs">
                  {t.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0a1118]">{t.name}</h4>
                  <p className="text-[11px] text-[#55675d] font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
