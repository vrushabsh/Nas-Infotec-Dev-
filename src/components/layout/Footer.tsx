"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICE_LINKS,
  FOOTER_CUSTOMER_LINKS,
} from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { IMAGES } from "@/constants/images";
import { BRAND_COLORS } from "@/constants/colors";

interface FooterProps {
  accent?: string;
}

export const Footer: React.FC<FooterProps> = ({
  accent = BRAND_COLORS.primary.DEFAULT,
}) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer
      id="contact"
      className="bg-white px-2 sm:px-4 md:px-7 pb-2 sm:pb-4 md:pb-7"
    >
      <div className="max-w-[1200px] mx-auto rounded-[32px] bg-[#071d11] text-white p-6 sm:p-8 md:p-12 flex flex-col gap-12 sm:gap-14 shadow-2xl border border-white/5 relative overflow-hidden">
        {/* Top Header */}
        <div className="flex flex-wrap items-start justify-between gap-6 relative z-10">
          <div className="flex flex-col gap-3 min-w-0 max-w-2xl">
            <span className="text-xs text-emerald-400 tracking-wider uppercase font-bold">
              Got an IT Challenge? Partner With Experts
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[60px] font-bold leading-[1.02] tracking-[-0.04em]">
              Innovating Since 2020
            </h2>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {[
              {
                name: "LinkedIn",
                href: SITE_CONFIG.social.linkedin,
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                ),
              },
              {
                name: "Facebook",
                href: SITE_CONFIG.social.facebook,
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.95z" />
                  </svg>
                ),
              },
              {
                name: "Instagram",
                href: SITE_CONFIG.social.instagram,
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                ),
              },
            ].map((soc) => (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={soc.name}
                className="w-[34px] h-[34px] rounded-full bg-white/10 flex items-center justify-center text-neutral-200 hover:text-white hover:bg-[#0f7b44] transition-all hover:scale-105"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Middle Section: Newsletter + Contact Info + Navigation */}
        <div className="flex flex-wrap gap-10 justify-between items-start relative z-10">
          {/* Newsletter & Address */}
          <div className="flex-1 min-w-[280px] max-w-sm flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase">
              Subscribe to Newsletter
            </h4>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#2ec27e]/20 border border-[#2ec27e]/40 text-[#2ec27e] text-xs font-semibold flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5 9-10" />
                </svg>
                <span>Thank you! We will be in touch.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 p-1.5 pl-3.5 rounded-xl border border-white/15 bg-white/5 focus-within:border-[#0f7b44] transition-colors"
              >
                <label htmlFor="footer-news-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-news-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter your email address"
                  required
                  className="flex-1 min-w-0 bg-transparent border-0 outline-none text-white text-[11px] placeholder-slate-400 min-h-[36px]"
                />
                <button
                  type="submit"
                  style={{ backgroundColor: accent }}
                  className="border-0 rounded-lg text-white text-[11px] font-bold px-4 min-h-[36px] hover:bg-[#16a34a] active:scale-95 transition-all cursor-pointer flex-none"
                >
                  Subscribe
                </button>
              </form>
            )}

            {/* Direct Contact Snippet */}
            <div className="mt-2 pt-3 border-t border-white/10 flex flex-col gap-2 text-[11px] text-slate-300">
              <p>
                <strong className="text-white">Office:</strong> {SITE_CONFIG.contact.address.line1}, {SITE_CONFIG.contact.address.city}
              </p>
              <p>
                <strong className="text-white">Phone:</strong>{" "}
                <a href={`tel:${SITE_CONFIG.contact.phoneTel}`} className="hover:text-emerald-300 text-emerald-400 font-semibold">
                  {SITE_CONFIG.contact.phone}
                </a>
              </p>
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-emerald-300">
                  {SITE_CONFIG.contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="flex-1 min-w-[300px] flex flex-wrap gap-8 sm:gap-12 justify-start sm:justify-end">
            {/* Quick Links */}
            <div className="flex flex-col gap-3 min-w-[110px]">
              <h4 className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2.5 text-[11px] text-slate-300">
                {FOOTER_QUICK_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-emerald-300 transition-colors">
                      • {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-3 min-w-[140px]">
              <h4 className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                Our Services
              </h4>
              <ul className="flex flex-col gap-2.5 text-[11px] text-slate-300">
                {FOOTER_SERVICE_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-emerald-300 transition-colors">
                      • {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer & Legal */}
            <div className="flex flex-col gap-3 min-w-[110px]">
              <h4 className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                Customer Care
              </h4>
              <ul className="flex flex-col gap-2.5 text-[11px] text-slate-300">
                {FOOTER_CUSTOMER_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-emerald-300 transition-colors">
                      • {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Logo + Brand + Copyright */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-slate-400 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-36 h-9 relative flex items-center overflow-hidden">
              <Image
                src={IMAGES.logo.light}
                alt={SITE_CONFIG.fullName}
                width={160}
                height={40}
                className="object-contain object-left max-h-full w-auto"
              />
            </div>
            <span className="text-[10px] leading-relaxed text-slate-400 max-w-[200px] hidden sm:block">
              {SITE_CONFIG.slogan}
            </span>
          </div>

          <div className="flex flex-wrap gap-5 text-[10px] text-slate-400">
            <Link href="/#top" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/#top" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/#contact" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>

        <p className="text-[10px] text-slate-500 -mt-6 relative z-10">
          {SITE_CONFIG.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
