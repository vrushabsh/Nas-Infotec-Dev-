"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PillNav, { PillNavItem } from "@/components/ui/PillNav";
import { HEADER_NAV_ITEMS } from "@/constants/navigation";
import { ROUTES } from "@/constants/routes";

interface NavbarProps {
  accent?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState("#top");
  const pathname = usePathname();

  const navItems: PillNavItem[] = HEADER_NAV_ITEMS;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleHashChange = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        setCurrentHash(window.location.hash);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Determine active href based on current pathname and hash
  let activeHref = pathname || "/";
  if (pathname === "/" && currentHash && currentHash !== "#top") {
    activeHref = `/${currentHash}`;
  }

  return (
    <header
      className={`w-full transition-all duration-300 z-40 ${scrolled
        ? "sticky top-0 bg-white/95 backdrop-blur-md shadow-sm py-2.5 border-b border-neutral-100"
        : "bg-transparent py-4 md:py-6"
        }`}
    >
      <div className="max-w-[1300px] mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 md:px-8">
        {/* NAS Infotech Brand Logo */}
        <Link
          href={ROUTES.HOME}
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

        {/* Center Desktop Navigation Menu with PillNav Animation */}
        <nav aria-label="Main" className="hidden lg:flex items-center">
          <PillNav
            items={navItems}
            activeHref={activeHref}
            linkComponent={Link}
            itemStyle="pill"
            hoverEffect="fill"
            indicator="dot"
            surface="glass"
            size="md"
            theme="light"
            highlightColor="#0b3b24"
            highlightTextColor="#ffffff"
            bounce={0.3}
            stretch={0.5}
            collapse="never"
            intro
          />
        </nav>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href={ROUTES.CONTACT}
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
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href || "/"}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (item.href?.includes("#")) {
                    setCurrentHash(item.href.replace("/", ""));
                  }
                }}
                className="py-2.5 px-4 rounded-xl text-sm font-semibold text-neutral-800 hover:text-[#0b3b24] hover:bg-[#dcfce7] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-col gap-3">
            <Link
              href={ROUTES.CONTACT}
              onClick={() => setMobileMenuOpen(false)}
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