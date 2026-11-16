"use client";

import React, { useEffect } from "react";
import { SITE_CONFIG } from "@/constants/siteConfig";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title = `${SITE_CONFIG.fullName} — Technology Overview`,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-label="Close backdrop"
      />
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#17171a] border border-[#2c2c31] overflow-hidden shadow-2xl z-10 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-4 px-6 border-b border-[#2c2c31] text-white">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5a7a]" />
            <span className="w-3 h-3 rounded-full bg-[#FFB057]" />
            <span className="w-3 h-3 rounded-full bg-[#2ec27e]" />
            <h3 className="ml-3 text-sm font-semibold text-neutral-200">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close video"
          >
            <svg
              width="20"
              height="20"
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
          </button>
        </div>

        <div className="relative aspect-video w-full bg-[#0e0e10] flex items-center justify-center p-8">
          <div className="w-full h-full rounded-xl bg-gradient-to-tr from-[#071d11] via-[#123017] to-[#0e0e10] flex flex-col items-center justify-center text-center p-6 border border-[#2c2c31] shadow-inner">
            <div className="w-16 h-16 rounded-full bg-[#0f7b44] flex items-center justify-center shadow-lg shadow-[#0f7b44]/30 mb-4 animate-pulse text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6 4l14 8-14 8z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              {SITE_CONFIG.fullName}
            </h4>
            <p className="text-xs text-neutral-300 max-w-md">
              {SITE_CONFIG.subSlogan}. Discover how our engineering teams deliver
              resilient custom software, artificial intelligence, and cloud architectures.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs text-neutral-400">
              <span className="px-3 py-1 rounded-full bg-[#2c2c31] text-neutral-200">
                Enterprise Solutions
              </span>
              <span>• 4+ Years Excellence</span>
              <span>• Pune, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
