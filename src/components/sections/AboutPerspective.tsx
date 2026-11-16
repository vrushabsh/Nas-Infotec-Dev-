"use client";

import React, { useState } from "react";

interface PerspectiveFeature {
  id: string | number;
  tag: string;
  metric: string;
  title: string;
  description: string;
}

interface AboutPerspectiveProps {
  features: PerspectiveFeature[];
}

export const AboutPerspective: React.FC<AboutPerspectiveProps> = ({ features }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
      {/* Left Controls */}
      <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
        {features.map((feature, idx) => {
          const isSelected = activeFeature === idx;
          return (
            <div
              key={feature.id}
              onClick={() => setActiveFeature(idx)}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "bg-white border-[#0a1b10] shadow-md -translate-y-0.5"
                  : "bg-[#f4f2ea] border-transparent hover:bg-white/80 text-[#55675d]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#15803d] uppercase tracking-wider">
                  {feature.tag}
                </span>
                <span className="font-mono text-xs font-black text-[#FFB057] bg-[#0a1b10] px-2.5 py-1 rounded-full">
                  {feature.metric}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#0a1118] mt-2">
                {feature.title}
              </h3>

              <p className="text-sm text-[#55675d] leading-relaxed mt-2 font-medium">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Right Sandbox Visualizer */}
      <div className="lg:col-span-5 bg-[#0a1b10] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFB057]/10 rounded-full blur-[70px] pointer-events-none" />

        <div className="space-y-2 border-b border-white/10 pb-4">
          <span className="text-[11px] font-mono tracking-widest text-[#a3b9ac] uppercase">
            Modular Control Panel
          </span>
          <h4 className="text-xl font-bold text-white">
            Tailored Component Framework
          </h4>
          <p className="text-xs text-[#a3b9ac] font-mono">
            {features[activeFeature]?.title}
          </p>
        </div>

        <div className="space-y-4 my-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono text-[#a3b9ac]">
                <span>Dynamic Parameter Vector 0{item}</span>
                <span className="text-[#FFB057] font-bold">{item * 32}%</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#FFB057] to-[#e09c4d] rounded-full"
                  style={{ width: `${item * 32}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
          <span className="text-[#a3b9ac]">Continuous Delivery SLA</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Validated Live
          </span>
        </div>
      </div>
    </div>
  );
};
