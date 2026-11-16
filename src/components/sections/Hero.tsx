"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { VideoModal } from "@/components/ui/VideoModal";
import { SITE_CONFIG } from "@/constants/siteConfig";

interface HeroProps {
  accent?: string;
}

export const Hero: React.FC<HeroProps> = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative bg-white overflow-hidden pt-1 pb-10 sm:pb-14">
      {/* Ambient luminous mint/emerald radial glow backdrops */}
      <div className="absolute top-0 right-0 w-[620px] h-[550px] bg-gradient-to-bl from-emerald-100/70 via-emerald-50/25 to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[450px] bg-gradient-to-tr from-emerald-100/60 via-emerald-50/20 to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/3 right-1/4 w-[380px] h-[380px] bg-[#d1fae5]/35 blur-[90px] pointer-events-none -z-0" />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Hero Content Grid */}
      <div
        id="top"
        className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 pb-10 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start gap-5 sm:gap-6 max-w-xl">

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-[68px] lg:text-[66px] font-semi-bold leading-[1.03] tracking-[-0.035em] text-[#0e1b13]">
              Nextgen
              Advanced<br />
              <span className="relative inline-block text-[#0f7b44]">
                Solutions
                {/* Curved green brush swoosh underline */}
                <svg
                  className="absolute -bottom-2.5 sm:-bottom-3.5 left-0 w-full h-3.5 sm:h-4 text-[#16a34a] pointer-events-none"
                  viewBox="0 0 280 16"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 13 C 60 2, 180 2, 278 12 C 190 5, 80 6, 2 13 Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base leading-relaxed text-[#4b5563] font-medium max-w-[480px]">
              Comprehensive IT Solutions for Today&apos;s Challenges. Empowering
              businesses with resilient software development, AI/ML
              intelligence, and cloud architectures.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3.5 sm:gap-4 items-center pt-2">
              {/* Primary: Get Free Quote */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 py-3.5 px-6 rounded-full bg-[#0b3b24] hover:bg-[#072a1a] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all group"
              >
                <span>Get Free Quote</span>
                <span className="w-5 h-5 rounded-full bg-white text-[#0b3b24] flex items-center justify-center font-bold text-xs group-hover:translate-x-0.5 transition-transform">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>

              {/* Secondary: Explore Services */}
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 py-3.5 px-6 rounded-full bg-white border border-neutral-300 hover:bg-neutral-50 text-[#1f2937] font-bold text-sm shadow-xs transition-all hover:border-neutral-400 group"
              >
                <span className="grid grid-cols-2 gap-0.5 text-[#0f7b44]">
                  <span className="w-1.5 h-1.5 rounded-xs bg-[#0f7b44]" />
                  <span className="w-1.5 h-1.5 rounded-xs bg-[#0f7b44]" />
                  <span className="w-1.5 h-1.5 rounded-xs bg-[#0f7b44]" />
                  <span className="w-1.5 h-1.5 rounded-xs bg-[#0f7b44]" />
                </span>
                <span>Explore Services</span>
              </Link>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-[500px] h-[380px] sm:h-[430px] md:h-[460px] mx-auto">
              {/* Organic mint glowing frame */}
              <div className="absolute inset-0 rounded-[20px] sm:rounded-[20px] border-2 border-[#bbf0cb] bg-gradient-to-br from-emerald-100/40 via-white/30 to-emerald-50/20 shadow-[0_20px_50px_rgba(16,185,129,0.12)] p-2 sm:p-2.5">
                <div className="w-full h-full rounded-[20px] sm:rounded-[20px] overflow-hidden relative shadow-inner">
                  <Image
                    src="/Home/nextgen-building.webp"
                    alt="Nextgen IT Solutions Headquarters"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10 pointer-events-none" />
                </div>
              </div>

              {/* Floating Overlay 4: Bottom-Right Floating "How It Works" Pill Button */}
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="absolute right-4 sm:right-8 bottom-5 sm:bottom-7 py-1.5 pl-2 pr-4 rounded-full bg-white shadow-[0_16px_40px_rgba(0,0,0,0.14)] border border-neutral-100 flex items-center gap-2.5 z-20 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
              >
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#84cc16] to-[#10b981] text-white flex items-center justify-center shadow-md shadow-emerald-500/30 group-hover:brightness-110 transition-all">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6 4l14 8-14 8z" />
                  </svg>
                </span>
                <span className="text-xs sm:text-[13px] font-bold text-[#0e1b13]">
                  How It Works
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Client Logos Strip ("TRUSTED BY GLOBAL BRANDS") */}
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-8 mt-2 sm:mt-4">
        <div className="rounded-2xl sm:rounded-full bg-white/90 backdrop-blur-md py-4 sm:py-5 px-6 sm:px-10 border border-neutral-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex flex-wrap items-center justify-between gap-6 sm:gap-8">
          {/* Left Label */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex flex-col leading-none">
              <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                TRUSTED BY
              </span>
              <span className="text-xs sm:text-[13px] font-black tracking-wide text-[#0b3b24] mt-0.5">
                GLOBAL BRANDS
              </span>
            </div>
            <div className="h-7 w-px bg-neutral-200 hidden sm:block" />
          </div>

          {/* 7 Global Client Logos */}
          <div className="flex flex-wrap items-center justify-between flex-1 gap-6 sm:gap-8 min-w-[280px]">
            {/* Coca-Cola */}
            <div className="flex items-center justify-center h-6 opacity-85 hover:opacity-100 transition-opacity" title="Coca-Cola">
              <svg width="84" height="26" viewBox="0 0 110 32" fill="#0e1b13">
                <text x="0" y="24" fontFamily="'Brush Script MT', 'Snell Roundhand', cursive" fontSize="26" fontStyle="italic" fontWeight="bold">Coca-Cola</text>
              </svg>
            </div>

            {/* Disney+ */}
            <div className="flex items-center justify-center h-6 opacity-85 hover:opacity-100 transition-opacity" title="Disney+">
              <span className="font-black text-lg sm:text-xl tracking-tight text-[#0e1b13] flex items-center">
                <span style={{ fontFamily: "'Trebuchet MS', sans-serif" }} className="italic font-extrabold tracking-tighter">Disney</span>
                <span className="text-[#0f7b44] font-black text-xl ml-0.5">+</span>
              </span>
            </div>

            {/* PayPal */}
            <div className="flex items-center justify-center h-6 opacity-85 hover:opacity-100 transition-opacity gap-1.5" title="PayPal">
              <svg width="18" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M7 21L9.2 6.5H16C19 6.5 21 8.5 20.2 11.5C19.5 14.5 17 16 14.2 16H11L9.6 21H7Z" fill="#003087" />
                <path d="M10 18L11.8 7.5H17.5C19.8 7.5 21.5 9 20.8 11.5C20.2 14 18.2 15.2 16 15.2H13.2L12 18H10Z" fill="#0079C1" opacity="0.85" />
              </svg>
              <span className="font-extrabold text-base tracking-tight text-[#0e1b13]">
                PayPal
              </span>
            </div>

            {/* PHILIPS */}
            <div className="flex items-center justify-center h-6 opacity-85 hover:opacity-100 transition-opacity" title="PHILIPS">
              <span className="font-black text-sm sm:text-base tracking-[0.2em] text-[#0e1b13]">
                PHILIPS
              </span>
            </div>

            {/* accenture */}
            <div className="flex items-center justify-center h-6 opacity-85 hover:opacity-100 transition-opacity gap-0.5" title="accenture">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#0e1b13] lowercase">
                accenture
              </span>
              <span className="text-[#0f7b44] font-black text-sm -translate-y-1">&gt;</span>
            </div>

            {/* Hisense */}
            <div className="flex items-center justify-center h-6 opacity-85 hover:opacity-100 transition-opacity" title="Hisense">
              <span className="font-bold text-sm sm:text-base tracking-tight text-[#0e1b13]">
                H<span className="text-[#10b981]">i</span>sense
              </span>
            </div>

            {/* natura */}
            <div className="flex items-center justify-center h-6 opacity-85 hover:opacity-100 transition-opacity gap-1" title="natura">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#0f7b44">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" opacity="0.4" />
              </svg>
              <span className="font-bold text-sm sm:text-base tracking-tight text-[#0e1b13] lowercase">
                natura
              </span>
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        title={`${SITE_CONFIG.fullName} — System Capabilities`}
      />
    </section>
  );
};
