"use client";

import React from "react";
import { Testimonials, TestimonialItem } from "./Testimonials";

export interface AboutTestimonialsProps {
  testimonials?: TestimonialItem[];
}

export const AboutTestimonials: React.FC<AboutTestimonialsProps> = ({ testimonials }) => {
  return (
    <Testimonials
      id="about-feedback"
      title={
        <>
          What leaders say about{" "}
          <span className="text-[#FFB057]">NAS Infotech</span>
        </>
      }
      subtitle="Real-world feedback from directors, architects, and engineering vice presidents who scaled their systems with us."
      items={testimonials}
      showMetrics={true}
      showLogos={true}
    />
  );
};
