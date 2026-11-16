"use client";

import React from "react";
import { AccordionSection, AccordionItem } from "@/components/ui/AccordionSection";

export const FAQ: React.FC = () => {
  const faqs: AccordionItem[] = [
    {
      id: 1,
      title: "How do you assess our legacy architecture for migration?",
      answer:
        "We evaluate your current technical debt, database structures, security protocols, and scalability barriers. Our engineering architects then design a step-by-step phased migration matrix tailored to your budget and operational uptime needs.",
    },
    {
      id: 2,
      title: "What custom software development stacks do you support?",
      answer:
        "We specialize in enterprise systems using modern technologies including cloud-native Node.js/Go frameworks, robust React and Next.js ecosystems, cloud infra toolings (AWS/GCP/Azure), and specialized Salesforce, Big Data, or AI/ML pipelines.",
    },
    {
      id: 3,
      title: "Can we scale or modify system requirements mid-sprint?",
      answer:
        "Yes, our development workflows are grounded in strict Agile principles. You can reprioritize project backlogs, adjust user stories, or safely refactor architecture roadmaps directly via our sprint review touchpoints.",
    },
    {
      id: 4,
      title: "Do you engineer custom software for enterprise scale businesses?",
      answer:
        "Absolutely. We engineer high-availability, high-throughput digital systems equipped with multi-region failover configurations and automated CI/CD pipelines to ensure continuous performance under heavy enterprise data loads.",
    },
    {
      id: 5,
      title: "What is your typical deployment turnaround and SLA response time?",
      answer:
        "Our automated cloud engineering pipelines allow code modifications to deploy safely in minutes. For mission-critical support, we back our systems with 24/7/365 monitoring and guaranteed response times under strict SLAs.",
    },
  ];

  return (
    <AccordionSection
      id="faq"
      title={
        <>
          Frequently Asked{" "}
          <span className="text-[#FFB057]">Questions</span>
        </>
      }
      description="Have questions regarding our enterprise engagements, technology stacks, or SLA guarantees? We are here to help."
      button={{
        text: "Speak With An Engineer",
        href: "/#contact",
        withArrow: true,
      }}
      items={faqs}
      defaultOpenId={4}
      iconType="plus"
    />
  );
};

export default FAQ;
