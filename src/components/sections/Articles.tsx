"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { BRAND_COLORS } from "@/constants/colors";
import { IMAGES } from "@/constants/images";

interface ArticlesProps {
  accent?: string;
}

export const Articles: React.FC<ArticlesProps> = ({
  accent = BRAND_COLORS.primary.DEFAULT,
}) => {
  const [filterTag, setFilterTag] = useState<string | null>(null);

  const articles = [
    {
      id: "art-1",
      tag: "Cloud Architecture",
      readTime: "6 min read",
      title: "Architecting Resilient Multi-Region Microservices On Modern Cloud Infrastructures.",
      excerpt:
        "How distributed cloud patterns and automated failover architectures minimize technical debt while guaranteeing 99.99% system availability.",
      imageSrc: IMAGES.services.cloudComputing,
    },
    {
      id: "art-2",
      tag: "AI & Automation",
      readTime: "8 min read",
      title: "Harnessing Predictive AI Pipelines To Modernize Enterprise Decision Making.",
      excerpt:
        "Deploying production machine learning models and automated data telemetry pipelines to forecast customer demand and streamline operations.",
      imageSrc: IMAGES.services.aiMl,
    },
    {
      id: "art-3",
      tag: "DevOps & Security",
      readTime: "5 min read",
      title: "Zero-Trust Engineering And Automated CI/CD Deployment Security Matrices.",
      excerpt:
        "Building continuous compliance and vulnerability scanners directly into agile delivery pipelines to protect enterprise scale applications.",
      imageSrc: IMAGES.services.cyberSecurity,
    },
  ];

  const filteredArticles = filterTag
    ? articles.filter((a) => a.tag === filterTag)
    : articles;

  return (
    <section id="blog" className="bg-white py-14 sm:py-20 md:py-24">
      <Container>
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="flex flex-col gap-5 items-start">
              <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-heading">
                Latest Technology <span className="text-[#FFB057]">Articles</span> &amp; Briefings
              </h2>
            </div>

            {/* Filter / Navigation Buttons */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setFilterTag(null)}
                aria-label="Show all articles"
                className={`w-10 h-10 rounded-full border border-[#dcdce2] flex items-center justify-center transition-all cursor-pointer ${
                  filterTag === null
                    ? "bg-[#0a2113] text-white border-[#0a2113]"
                    : "text-heading hover:bg-neutral-100"
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() =>
                  setFilterTag(filterTag ? null : articles[0].tag)
                }
                aria-label="Filter articles"
                style={{ backgroundColor: accent }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-black font-black shadow-sm hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="flex flex-wrap gap-6">
            {filteredArticles.map((post) => (
              <article
                key={post.id}
                className="group flex-1 min-w-[280px] max-w-md flex flex-col gap-4 cursor-pointer"
              >
                <div className="relative h-[250px] sm:h-[270px] rounded-[22px] overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.01] border border-neutral-100">
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071d11] via-[#071d11]/40 to-transparent" />
                  <div className="absolute left-3.5 bottom-3.5 flex gap-2 items-center z-10">
                    <span className="inline-flex items-center gap-1.5 py-1 pl-1 pr-2.5 rounded-full bg-white text-heading text-[10px] font-bold shadow-sm w-fit max-w-fit shrink-0 whitespace-nowrap">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#0f7b44] inline-block" />
                      {post.tag}
                    </span>
                    <span className="py-1 px-2.5 rounded-full bg-white text-heading text-[10px] font-bold shadow-sm w-fit max-w-fit shrink-0 whitespace-nowrap">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-[19px] font-bold leading-snug tracking-tight text-heading group-hover:text-[#0f7b44] transition-colors">
                  {post.title}
                </h3>

                <p className="text-[12px] leading-relaxed text-body font-medium">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
