"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HEADER_NAV_ITEMS } from "@/constants/navigation";
import { ROUTES } from "@/constants/routes";

interface NavbarProps {
  accent?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);
  const [activeHref, setActiveHref] = useState(pathname || "/");

  // Adjust state during render when route changes without useEffect
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setActiveHref(pathname || "/");
  }

  // Determine the single active tab strictly
  const getActiveHref = () => {
    if (pathname === "/services" || pathname?.startsWith("/services/")) {
      return ROUTES.SERVICES;
    }
    if (pathname === "/industries" || pathname?.startsWith("/industries/")) {
      return ROUTES.INDUSTRIES;
    }
    if (pathname === "/about" || pathname?.startsWith("/about/")) {
      return ROUTES.ABOUT;
    }
    if (pathname === "/careers" || pathname?.startsWith("/careers/")) {
      return ROUTES.CAREERS;
    }
    if (activeHref === ROUTES.CAREERS) {
      return ROUTES.CAREERS;
    }
    if (pathname === ROUTES.HOME) {
      return ROUTES.HOME;
    }
    return activeHref;
  };

  const currentActive = getActiveHref();
  const isActive = (href: string) => href === currentActive;

  return (
    <header className="w-full bg-white/95 backdrop-blur-md sticky top-0 z-40 py-3 sm:py-3.5 border-b border-neutral-100/80 transition-all">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 md:px-8">
        {/* NAS Infotech Brand Logo */}
        <Link
          href={ROUTES.HOME}
          onClick={() => setActiveHref(ROUTES.HOME)}
          className="flex items-center gap-2.5 cursor-pointer select-none shrink-0 group"
          aria-label="NAS Infotech"
        >
          <div className="overflow-hidden group-hover:scale-105 transition-transform flex items-center justify-center">
            <Image
              src="/nas-logo.png"
              alt="NAS Infotech Logo"
              width={150}
              height={150}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </Link>

        {/* Center Desktop Navigation Menu - Single Active Pill */}
        <nav aria-label="Main" className="hidden lg:flex items-center">
          <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-neutral-100/80 backdrop-blur-md border border-neutral-200/60 shadow-xs">
            {HEADER_NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveHref(item.href)}
                  className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-[#0b3b24] text-white shadow-sm"
                      : "text-neutral-600 hover:text-[#0b3b24] hover:bg-neutral-200/60"
                  }`}
                >
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  )}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href={ROUTES.CONTACT}
            onClick={() => setActiveHref(ROUTES.CONTACT)}
            className="inline-flex items-center gap-2.5 py-2 pl-4 pr-2 rounded-full bg-[#0b3b24] hover:bg-[#072a1a] text-white text-xs font-bold transition-all shadow-sm group"
          >
            <span>Contact</span>
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-neutral-800 hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-neutral-200 px-6 py-6 shadow-2xl z-50 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-2">
            {HEADER_NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveHref(item.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2.5 px-4 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    active
                      ? "bg-[#0b3b24] text-white"
                      : "text-neutral-800 hover:text-[#0b3b24] hover:bg-[#dcfce7]"
                  }`}
                >
                  <span>{item.label}</span>
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-col gap-3">
            <Link
              href={ROUTES.CONTACT}
              onClick={() => {
                setActiveHref(ROUTES.CONTACT);
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-3 rounded-full bg-[#0b3b24] text-white font-bold text-xs shadow-md"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
