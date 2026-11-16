import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/siteConfig";

interface AboutProps {
  accent?: string;
}

export const About: React.FC<AboutProps> = () => {
  return (
    <section id="about" className="bg-[#f9f8f4] py-14 sm:py-20 md:py-24 border-y border-[#ece8de] relative">
      <span id="about-us" className="absolute -top-20" />
      <Container>
        <div className="flex flex-wrap items-center gap-12 lg:gap-5">
          {/* Visual Side */}
          <div className="flex-1 min-w-[300px] max-w-[540px] relative h-[380px] sm:h-[440px]">
            {/* Primary Team Graphic Card */}
            <div className="w-full h-full rounded-[28px] overflow-hidden shadow-xl border-4 border-white relative">
              <Image
                src="/About/aboutus-1.jpg"
                alt="NAS Infotech Software Engineering Team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Copy Side */}
          <div className="flex-1 min-w-[300px] flex flex-col items-start gap-5 sm:gap-6">
            <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0e1b13]">
              Explore our <span className="text-[#FFB057]">Legacy</span> of Innovation and Excellence.
            </h2>

            <p className="text-[13px] leading-relaxed text-body max-w-lg font-medium">
              We are committed to turning your IT challenges into success stories. Our expert team provides innovative and reliable IT solutions tailored to your business needs. With a strong focus on customer satisfaction, we offer unparalleled support and advanced technology to help your business flourish in the digital age.
            </p>

            {/* Real Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-1 w-full border-t border-neutral-200">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-[#0a2113]">
                  {SITE_CONFIG.stats.yearsInBusiness}
                </span>
                <p className="text-[11px] font-semibold text-muted">
                  Years in Business
                </p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-[#0a2113]">
                  {SITE_CONFIG.stats.employees}
                </span>
                <p className="text-[11px] font-semibold text-muted">
                  Employees
                </p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-[#0a2113]">
                  {SITE_CONFIG.stats.completedProjects}
                </span>
                <p className="text-[11px] font-semibold text-muted">
                  Completed Projects
                </p>
              </div>
            </div>

            <Button href="/about" variant="primary" withArrow>
              More About Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
