"use client";

import React, { useState } from "react";
import Image from "next/image";
import { VideoModal } from "@/components/ui/VideoModal";

interface ProgressItem {
  id: number;
  label: string;
  percentage: number;
}

export const WhatWeDo: React.FC = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  const progressData: ProgressItem[] = [
    { id: 1, label: "On-Time Software Delivery", percentage: 98 },
    { id: 2, label: "Client Enterprise Resource Optimization", percentage: 92 },
  ];

  const tickerItems = [
    "Software Development",
    "Artificial Intelligence And ML",
    "Salesforce Services",
    "BI And Analytics",
    "Cyber Security",
    "DevOps Engineering",
    "Cloud Computing",
    "Big Data Analytics",
  ];

  return (
    <div id="what-we-do" className="w-full bg-white flex flex-col">
      {/* Ticker Marquee */}
      <div className="w-full bg-[#0a2113] py-4 overflow-hidden border-b border-white/10 select-none">
        <div className="flex whitespace-nowrap gap-12 animate-marquee">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-white text-sm sm:text-base font-bold tracking-wide shrink-0"
            >
              <span className="text-[#84cc16] text-lg">✦</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Section */}
      <section className="w-full py-16 sm:py-24 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
            {/* Left Image Composition */}
            <div className="lg:col-span-5 relative w-full flex items-center justify-center min-h-[380px] sm:min-h-[480px]">
              {/* Dot Pattern */}
              <div className="absolute top-[18%] left-[45%] w-16 h-20 opacity-20 hidden sm:block pointer-events-none z-0 bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:8px_8px]" />

              {/* Main Primary Image */}
              <div className="absolute left-0 top-0 w-[64%] aspect-[3/4] rounded-br-[40px] rounded-bl-[40px] rounded-tr-[40px] rounded-tl-[100px] overflow-hidden shadow-xl border-4 border-white z-10 transition-transform duration-500 hover:-translate-y-2">
                <Image
                  src="/About/what-we-do-image-1.jpg"
                  alt="NAS Infotech Software Engineering Team"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Secondary Circular Image */}
              <div className="absolute right-0 bottom-0 w-[56%] aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white z-20 transition-transform duration-500 hover:scale-105">
                <Image
                  src="/About/what-we-do-image-2.jpg"
                  alt="NAS Infotech IT Strategy & Solutions"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Video Button */}
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                aria-label="Watch NAS Infotech Overview Video"
                className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-[#0b3b24] border-4 border-white text-white flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
              >
                <span className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#84cc16] flex items-center justify-center pl-0.5 text-[#0b3b24] group-hover:bg-white transition-colors">
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              {/* Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0e1b13] leading-[1.12] tracking-tight">
                Empowering Businesses With{" "}
                <span className="text-[#FFB057]">Future-Ready</span> Digital Architecture
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium max-w-xl">
                Our elite agile squads deliver tailored digital products and robust cloud architectures designed to optimize operations, scale infrastructure, and enhance enterprise workflows with maximum reliability.
              </p>

              {/* Service Highlight Card */}
              <div className="flex gap-4 items-start max-w-xl p-4 rounded-2xl bg-[#f0fbf4]/40 border border-[#d1fae5] hover:border-[#0f7b44]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#0b3b24] flex items-center justify-center shrink-0 text-[#84cc16]">
                  <svg
                    className="w-6 h-6 stroke-[2]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="text-[#0a1118] text-base sm:text-lg font-bold tracking-tight">
                    Comprehensive IT Strategy &amp; Development
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-[12px] leading-relaxed font-medium">
                    From machine learning systems to full-scale web ecosystem deployments, we offer targeted solutions designed to optimize and scale sustainable computing environments.
                  </p>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="bg-[#f9f8f4] p-5 sm:p-6 rounded-[24px] max-w-xl space-y-5 shadow-xs border border-neutral-200/80">
                {progressData.map((item) => (
                  <div key={item.id} className="space-y-2">
                    <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-[#0a1118]">
                      <span>{item.label}</span>
                      <span className="tabular-nums font-black text-[#0a2113]">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#0a2113] to-[#0f7b44] rounded-full transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        title="NAS Infotech Engineering Culture & Overview"
      />
    </div>
  );
};

export default WhatWeDo;
