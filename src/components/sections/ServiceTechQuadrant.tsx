"use client";

import React, { useState } from "react";
import { TechCategory } from "@/constants/services";

interface ServiceTechQuadrantProps {
  categories: TechCategory[];
}

export const ServiceTechQuadrant: React.FC<ServiceTechQuadrantProps> = ({
  categories,
}) => {
  const [selectedId, setSelectedId] = useState(categories[0]?.id || "");
  const activeCategory =
    categories.find((c) => c.id === selectedId) || categories[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* Left Selector Buttons */}
      <div className="lg:col-span-4 space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0e1b13]">
            Technologies We <span className="text-[#FFB057]">Use</span>.
          </h2>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed font-medium">
            Select a quadrant to view targeted stack integrations.
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          {categories.map((cat) => {
            const isSelected = cat.id === activeCategory.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedId(cat.id)}
                className={`w-full flex items-center justify-between p-4 rounded-xl text-left text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                  isSelected
                    ? "bg-[#113217] border-[#113217] text-white shadow-sm"
                    : "bg-white border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-[#113217]"
                }`}
              >
                <span>{cat.name}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`w-4 h-4 transition-transform ${
                    isSelected ? "text-[#ffb057] rotate-45" : "text-stone-400"
                  }`}
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
                </svg>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Tools Card Grid */}
      <div className="lg:col-span-8 bg-[#f9f8f4] border border-stone-200 rounded-2xl p-6 sm:p-8 min-h-80 flex flex-col justify-between shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
          {activeCategory.tools.map((tool) => (
            <div
              key={tool}
              className="p-4 rounded-xl bg-white border border-stone-200/60 flex items-center justify-between group hover:border-[#ffb057] transition-all shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-400 group-hover:text-[#113217] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 20v2" />
                    <path d="M12 2v2" />
                    <path d="M17 20v2" />
                    <path d="M17 2v2" />
                    <path d="M2 12h2" />
                    <path d="M2 17h2" />
                    <path d="M2 7h2" />
                    <path d="M20 12h2" />
                    <path d="M20 17h2" />
                    <path d="M20 7h2" />
                    <path d="M7 20v2" />
                    <path d="M7 2v2" />
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <rect x="8" y="8" width="8" height="8" rx="1" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-stone-800 tracking-tight">
                  {tool}
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all text-[#ffb057]"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-500 font-medium">
          <span>Enterprise integration ready</span>
          <span className="font-mono text-[11px] text-[#113217] font-semibold">
            {activeCategory.name} ({activeCategory.tools.length} technologies)
          </span>
        </div>
      </div>
    </div>
  );
};
