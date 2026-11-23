import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { BRAND_COLORS } from "@/constants/colors";
import { SITE_CONFIG } from "@/constants/siteConfig";

export const metadata: Metadata = {
  title: `Contact Us — ${SITE_CONFIG.fullName}`,
  description:
    "Get in touch with NAS Infotech. Connect with our enterprise architects and technical consultants for custom software development, AI, and cloud solutions.",
};

export default function ContactPage() {
  const accent = BRAND_COLORS.primary.DEFAULT;

  return (
    <main className="min-h-screen bg-white flex flex-col font-sans text-[#0a1118]">
      {/* Top Navbar */}
      <Navbar />

      {/* 1. HERO SECTION WITH BACKGROUND IMAGE & BREADCRUMB */}
      <section className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/About/contact-nas-info.webp"
          alt="NAS Infotech Contact Us Hero"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Forest Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1b10]/90 via-[#0d2a17]/85 to-[#0a1b10]/90" />

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FFB057]/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-6xl md:text-[65px] font-black text-white tracking-tight mb-4">
            Contact <span className="text-[#FFB057]">us</span>
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-base sm:text-lg font-semibold text-gray-200">
            <Link href="/" className="hover:text-[#FFB057] transition-colors">
              Home
            </Link>
            <span className="text-[#FFB057]">/</span>
            <span className="text-[#FFB057]">Contact Us</span>
          </div>
        </div>
      </section>

      {/* 2. MAIN GET IN TOUCH SECTION */}
      <section className="w-full bg-white py-16 sm:py-24 font-sans">
        <Container>
          {/* ================= 1. UPPER HORIZONTAL CONTACT INFO BAR ================= */}
          <div className="bg-[#f9f8f4] rounded-[24px] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center mb-16 sm:mb-20 shadow-xs border border-gray-100">
            {/* Phone Block */}
            <div className="flex items-center gap-4 md:px-4">
              <div className="w-12 h-12 rounded-full bg-[#FFB057]/20 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-[#e09c4d]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                  Call Any Time
                </p>
                <a
                  href={`tel:${SITE_CONFIG.contact.phoneTel}`}
                  className="text-[#0a1118] font-bold text-sm sm:text-base hover:text-[#0b3b24] transition-colors"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>
            </div>

            {/* Email Block */}
            <div className="flex items-center gap-4 md:px-4 md:border-x md:border-gray-200">
              <div className="w-12 h-12 rounded-full bg-[#FFB057]/20 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-[#e09c4d]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                  Send Email
                </p>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="text-[#0a1118] font-bold text-sm sm:text-base hover:text-[#0b3b24] transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
            </div>

            {/* Address Block */}
            <div className="flex items-center gap-4 md:px-4">
              <div className="w-12 h-12 rounded-full bg-[#FFB057]/20 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-[#e09c4d]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                  Visit Office
                </p>
                <p className="text-[#0a1118] font-bold text-xs sm:text-sm line-clamp-2">
                  {SITE_CONFIG.contact.address.full}
                </p>
              </div>
            </div>
          </div>

          {/* ================= 2. SPLIT FORM & MAP SECTION ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* --- LEFT SIDE: HEADERS & INTERACTIVE MAP --- */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h2 className="text-[#0a1118] text-3xl sm:text-4xl md:text-4xl font-black leading-[1.15] tracking-tight">
                  Let&apos;s talk about{" "}
                  <span className="text-[#FFB057]">
                    protecting what matters most
                  </span>
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium max-w-xl">
                  Whether you have questions, need a quote, or want expert advice, we&apos;re here to listen and support you every step of the way.
                </p>
              </div>

              {/* Embedded Location Map */}
              <div className="w-full h-[320px] sm:h-[380px] rounded-[24px] overflow-hidden border border-gray-200/80 shadow-xs relative">
                <iframe
                  title="NAS Infotech Location Map"
                  src="https://maps.google.com/maps?q=06th%20Floor,%20Stellar%20Spaces%20501,%20opposite%20Zensar%20Company,%20Rakshak%20Nagar,%20Kharadi,%20Pune,%20Maharashtra%20411014&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* --- RIGHT SIDE: GET IN TOUCH FORM --- */}
            <div className="lg:col-span-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <Footer accent={accent} />
    </main>
  );
}
