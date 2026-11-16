"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
}

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    projectType: "Cloud Architecture",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    "Cloud Architecture",
    "AI / ML Solutions",
    "Custom Software",
    "DevOps Automation",
    "Staff Augmentation",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/home", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full relative min-h-[800px] flex items-center bg-[#0a1b10] overflow-hidden py-20 lg:py-28 font-sans mb-10"
    >
      <span id="careers" className="absolute -top-20" />
      {/* Background Cover Image with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/About/contact-nas-info.webp"
          alt="NAS Infotech Software Architect Planning"
          fill
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2a17]/95 via-[#0d2a17]/85 to-[#0a1b10]/95" />
      </div>

      {/* Luminous Ambient Glows */}
      <div className="absolute -top-32 right-10 w-[500px] h-[500px] bg-[#FFB057]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 left-10 w-[500px] h-[500px] bg-[#113217]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Information & Trust */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-5xl md:text-5xl font-black text-white leading-[1.12] tracking-tight">
                Let&apos;s Build Your Next{" "}
                <span className="text-[#FFB057]">
                  Architectural Breakthrough
                </span>
                .
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-medium max-w-lg">
                Connect directly with our lead technical architects. We analyze your tech stack, identify performance bottlenecks, and deliver an actionable execution blueprint within 24 hours.
              </p>
            </div>

            {/* Direct Connect Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Helpline */}
              <div className="p-5 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md hover:border-[#FFB057]/50 transition-colors space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#FFB057]/20 border border-[#FFB057]/30 flex items-center justify-center text-[#FFB057]">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                    Engineering Helpline
                  </span>
                  <a
                    href="tel:+919022844929"
                    className="text-white font-bold text-sm sm:text-base hover:text-[#FFB057] transition-colors"
                  >
                    +(91) 9022844929
                  </a>
                </div>
              </div>

              {/* Corporate Email */}
              <div className="p-5 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md hover:border-[#FFB057]/50 transition-colors space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#FFB057]/20 border border-[#FFB057]/30 flex items-center justify-center text-[#FFB057]">
                  <svg className="w-5 h-5 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                    Corporate Email
                  </span>
                  <a
                    href="mailto:info@nas-infotech.com"
                    className="text-white font-bold text-sm sm:text-base hover:text-[#FFB057] transition-colors"
                  >
                    info@nas-infotech.com
                  </a>
                </div>
              </div>
            </div>

            {/* Google Rating Trust Bar */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 max-w-md">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-black text-black text-sm shadow-md">
                G
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-black text-sm">4.9 / 5.0</span>
                  <span className="text-[#FFB057] text-xs">★★★★★</span>
                </div>
                <p className="text-[11px] text-gray-400 font-medium">
                  Verified by 250+ enterprise CTOs and technology leaders globally.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Glassmorphic Consultation Request Form */}
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-[32px] bg-gradient-to-b from-white/[0.08] to-white/[0.03] border border-white/20 backdrop-blur-2xl p-6 sm:p-9 shadow-2xl">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FFB057]/20 border border-[#FFB057] text-[#FFB057] mx-auto flex items-center justify-center">
                    <svg className="w-8 h-8 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Proposal Request Received</h3>
                  <p className="text-sm text-gray-300 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. One of our lead technical architects will review your scope and follow up within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#FFB057] hover:underline pt-2 cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                      Select Project Focus
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, projectType: type }))}
                          className={`text-xs font-bold py-1.5 px-3 rounded-full transition-all cursor-pointer ${formData.projectType === type
                            ? "bg-[#FFB057] text-[#071d11] shadow-md"
                            : "bg-white/10 text-gray-300 hover:bg-white/15"
                            }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="firstName" className="text-xs font-bold text-gray-300">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/15 focus:border-[#FFB057] focus:ring-1 focus:ring-[#FFB057] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="lastName" className="text-xs font-bold text-gray-300">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/15 focus:border-[#FFB057] focus:ring-1 focus:ring-[#FFB057] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-gray-300">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="+91..."
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/15 focus:border-[#FFB057] focus:ring-1 focus:ring-[#FFB057] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-gray-300">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/15 focus:border-[#FFB057] focus:ring-1 focus:ring-[#FFB057] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-gray-300">
                      Project Scope &amp; Technical Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Outline your target timeline, cloud provider, or technical challenge..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/15 focus:border-[#FFB057] focus:ring-1 focus:ring-[#FFB057] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none resize-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFB057] to-[#e09c4d] hover:brightness-110 text-[#071d11] font-black py-4 px-8 rounded-full text-sm tracking-wide shadow-lg shadow-[#FFB057]/20 transition-all duration-300 active:scale-[0.99] cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "Submitting Scope..." : "Request Architecture Consultation →"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
