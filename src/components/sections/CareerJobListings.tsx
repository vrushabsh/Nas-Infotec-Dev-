"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";

export interface JobPosition {
  id: string;
  title: string;
  department: "Engineering" | "Data & AI" | "DevOps" | "Design" | "Product";
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

export const OPEN_POSITIONS: JobPosition[] = [
  {
    id: "swe-fullstack",
    title: "Senior Full Stack Software Engineer",
    department: "Engineering",
    location: "Remote / Pune, India",
    type: "Full-Time",
    experience: "3-6 Years",
    description:
      "Design and build scalable full-stack web applications and microservices handling high-throughput enterprise data pipelines.",
    responsibilities: [
      "Architect and maintain high-performance APIs using Node.js, Go, or Python",
      "Develop responsive, modern web frontends using React, Next.js, and TypeScript",
      "Collaborate with architects on database optimization and cloud scalability",
      "Write automated unit, integration, and end-to-end tests",
    ],
    skills: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: "frontend-dev",
    title: "Frontend Web Developer",
    department: "Engineering",
    location: "Remote / Pune, India",
    type: "Full-Time",
    experience: "1-4 Years",
    description:
      "Craft pixel-perfect, accessible, and ultra-fast user interfaces with modern React frameworks and Tailwind CSS.",
    responsibilities: [
      "Translate Figma design systems into performant, clean React components",
      "Optimize web vital metrics (LCP, FID, CLS) across all screen sizes",
      "Integrate complex RESTful and GraphQL backend endpoints",
      "Ensure cross-browser compatibility and strict accessibility standards",
    ],
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "REST APIs"],
  },
  {
    id: "ai-ml-engineer",
    title: "AI / Machine Learning Engineer",
    department: "Data & AI",
    location: "Remote / Pune, India",
    type: "Full-Time",
    experience: "2-5 Years",
    description:
      "Develop, fine-tune, and deploy predictive models, NLP pipelines, and generative AI integrations for enterprise clients.",
    responsibilities: [
      "Train, validate, and optimize machine learning models for production workflows",
      "Build RAG (Retrieval-Augmented Generation) pipelines and fine-tune LLMs",
      "Containerize and serve models using FastAPI, Docker, and Kubernetes",
      "Monitor model inference latency and ensure high accuracy thresholds",
    ],
    skills: ["Python", "PyTorch", "TensorFlow", "NLP", "LLMs", "Scikit-Learn", "FastAPI"],
  },
  {
    id: "devops-sre",
    title: "Cloud DevOps & SRE Engineer",
    department: "DevOps",
    location: "Remote / Pune, India",
    type: "Full-Time",
    experience: "2-5 Years",
    description:
      "Scale our multi-cloud infrastructure, automate CI/CD release pipelines, and maintain 99.99% high availability.",
    responsibilities: [
      "Manage AWS and GCP multi-region Kubernetes clusters with Terraform",
      "Build automated, secure CI/CD pipelines with GitHub Actions and GitLab CI",
      "Configure Prometheus, Grafana, and Datadog for automated incident telemetry",
      "Enforce zero-trust security practices, IAM policies, and secret management",
    ],
    skills: ["AWS", "GCP", "Kubernetes", "Docker", "Terraform", "CI/CD", "Linux"],
  },
  {
    id: "ux-ui-designer",
    title: "UX/UI Product Designer",
    department: "Design",
    location: "Remote / Pune, India",
    type: "Full-Time",
    experience: "1-4 Years",
    description:
      "Design intuitive, elegant, and data-dense enterprise dashboards, digital tools, and customer-facing web platforms.",
    responsibilities: [
      "Develop comprehensive design systems, component libraries, and tokens in Figma",
      "Conduct user research, synthesize usability feedback, and create wireframes",
      "Collaborate closely with frontend engineers to ensure accurate implementation",
      "Design interactive prototypes for client stakeholder presentations",
    ],
    skills: ["Figma", "UI Design", "UX Research", "Design Systems", "Prototyping"],
  },
  {
    id: "tech-pm",
    title: "Technical Product Manager",
    department: "Product",
    location: "Remote / Pune, India",
    type: "Full-Time",
    experience: "3-6 Years",
    description:
      "Lead cross-functional engineering squads from product discovery and backlog prioritization through to deployment.",
    responsibilities: [
      "Define technical product requirements, user stories, and acceptance criteria",
      "Facilitate sprint planning, daily stand-ups, and sprint review touchpoints",
      "Interface directly with client enterprise leadership on project roadmaps",
      "Analyze usage telemetry and track product delivery milestones",
    ],
    skills: ["Agile/Scrum", "Product Roadmaps", "System Architecture", "Jira", "Client Relations"],
  },
  {
    id: "qa-automation",
    title: "QA Automation Engineer",
    department: "Engineering",
    location: "Remote / Pune, India",
    type: "Full-Time",
    experience: "1-3 Years",
    description:
      "Build and execute automated test suites across frontend, backend, and API layers to ensure zero-defect releases.",
    responsibilities: [
      "Develop automated end-to-end and regression test scripts using Playwright and Cypress",
      "Perform load and stress testing on high-throughput backend services",
      "Integrate automated quality gates into continuous delivery pipelines",
      "Document test cases, trace defects, and verify bug remediations",
    ],
    skills: ["Playwright", "Cypress", "JavaScript", "API Testing", "Postman", "CI/CD"],
  },
  {
    id: "data-scientist-bi",
    title: "Data Scientist & BI Analyst",
    department: "Data & AI",
    location: "Remote / Pune, India",
    type: "Full-Time",
    experience: "2-4 Years",
    description:
      "Extract actionable business intelligence from complex enterprise datasets and build automated reporting pipelines.",
    responsibilities: [
      "Build scalable ETL pipelines to aggregate telemetry from disparate sources",
      "Design interactive executive dashboards in PowerBI and Tableau",
      "Perform exploratory data analysis and predictive trend forecasting",
      "Collaborate with database administrators on data warehouse modeling",
    ],
    skills: ["Python", "SQL", "PowerBI", "BigQuery", "ETL Pipelines", "Data Modeling"],
  },
];

const DEPARTMENTS = ["All", "Engineering", "Data & AI", "DevOps", "Design", "Product"] as const;

export const CareerJobListings: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeJob, setActiveJob] = useState<JobPosition | null>(null);

  const filteredJobs = OPEN_POSITIONS.filter((job) => {
    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    const matchesSearch =
      searchQuery === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <section id="openings" className="py-20 sm:py-28 bg-[#f9f8f4] border-b border-[#ece8de]">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0e1b13]">
              Current <span className="text-[#FFB057]">Open Positions</span>.
            </h2>
            <p className="text-base sm:text-lg text-[#55675d] font-medium max-w-xl mt-3 leading-relaxed">
              Explore opportunities across engineering, artificial intelligence, cloud operations, and product design. All roles support flexible remote work.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="w-full md:w-72 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by role or skill..."
              className="w-full py-3 pl-4 pr-10 rounded-full bg-white border border-[#ece8de] text-sm text-[#0e1b13] placeholder-[#88998f] focus:outline-none focus:border-[#0b3b24] shadow-2xs font-medium"
            />
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>
        </div>

        {/* Department Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#ece8de]">
          {DEPARTMENTS.map((dept) => {
            const isSelected = selectedDept === dept;
            return (
              <button
                key={dept}
                type="button"
                onClick={() => setSelectedDept(dept)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#0b3b24] text-white shadow-sm"
                    : "bg-white text-[#55675d] border border-[#ece8de] hover:border-[#0b3b24] hover:text-[#0b3b24]"
                }`}
              >
                {dept}
              </button>
            );
          })}
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-7 rounded-3xl bg-white border border-[#ece8de] hover:border-[#FFB057] transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col justify-between gap-6 group"
            >
              <div className="space-y-4">
                {/* Meta Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold">
                  <span className="px-3 py-1 rounded-full bg-[#f9f8f4] border border-[#ece8de] text-[#0b3b24] font-bold">
                    {job.department}
                  </span>
                  <div className="flex items-center gap-3 text-[#55675d]">
                    <span>📍 {job.location}</span>
                    <span>•</span>
                    <span>⏱ {job.experience}</span>
                  </div>
                </div>

                {/* Job Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#0e1b13] group-hover:text-[#0b3b24] transition-colors leading-snug">
                  {job.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#55675d] font-medium leading-relaxed">
                  {job.description}
                </p>

                {/* Tech Skills Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md bg-[#f9f8f4] text-[11px] font-semibold text-[#0b3b24] border border-[#ece8de]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#ece8de] flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setActiveJob(job)}
                  className="text-xs sm:text-sm font-bold text-[#0b3b24] hover:text-[#FFB057] transition-colors cursor-pointer inline-flex items-center gap-1"
                >
                  View Details & Responsibilities <span>→</span>
                </button>

                <a
                  href={`mailto:hr@nas-infotech.com?subject=Job Application: ${encodeURIComponent(job.title)}&body=Dear HR Team,%0D%0A%0D%0AI would like to apply for the position of ${encodeURIComponent(job.title)} at NAS Infotech.%0D%0A%0D%0AMy Experience: %0D%0ALinkedIn / Portfolio: %0D%0AContact Phone: %0D%0A%0D%0AAttached is my resume for your review.`}
                  className="px-5 py-2.5 rounded-full bg-[#0b3b24] hover:bg-[#072a1a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer inline-flex items-center gap-2"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#ece8de] space-y-3">
            <span className="text-4xl">💼</span>
            <h3 className="text-xl font-bold text-[#0e1b13]">No positions found</h3>
            <p className="text-sm text-[#55675d]">
              We couldn&apos;t find any roles matching your search criteria. Check back soon or send your resume directly to{" "}
              <a href="mailto:hr@nas-infotech.com" className="text-[#0b3b24] font-bold underline">
                hr@nas-infotech.com
              </a>.
            </p>
          </div>
        )}

        {/* Detailed Job Modal */}
        {activeJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-[#ece8de] shadow-2xl relative">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveJob(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
                aria-label="Close details"
              >
                ✕
              </button>

              <div className="space-y-2 pr-8">
                <span className="px-3 py-1 rounded-full bg-[#f9f8f4] border border-[#ece8de] text-xs font-bold text-[#0b3b24]">
                  {activeJob.department}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0e1b13]">
                  {activeJob.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#55675d] pt-1">
                  <span>📍 {activeJob.location}</span>
                  <span>⏱ {activeJob.experience}</span>
                  <span>🏢 {activeJob.type}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#0e1b13]">
                  Overview
                </h4>
                <p className="text-sm text-[#55675d] leading-relaxed font-medium">
                  {activeJob.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#0e1b13]">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2 text-sm text-[#55675d] font-medium">
                  {activeJob.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2.5">
                      <span className="text-[#FFB057] font-bold shrink-0">✔</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#0e1b13]">
                  Required Skills & Technologies
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {activeJob.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-md bg-[#f9f8f4] border border-[#ece8de] text-xs font-bold text-[#0b3b24]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="pt-6 border-t border-[#ece8de] flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-[#55675d]">
                  Questions? Reach us at{" "}
                  <a href="mailto:hr@nas-infotech.com" className="font-bold text-[#0b3b24] underline">
                    hr@nas-infotech.com
                  </a>
                </div>

                <a
                  href={`mailto:hr@nas-infotech.com?subject=Job Application: ${encodeURIComponent(activeJob.title)}&body=Dear HR Team,%0D%0A%0D%0AI would like to apply for the position of ${encodeURIComponent(activeJob.title)} at NAS Infotech.%0D%0A%0D%0AMy Experience: %0D%0ALinkedIn / Portfolio: %0D%0AContact Phone: %0D%0A%0D%0AAttached is my resume for your review.`}
                  className="px-6 py-3 rounded-full bg-[#0b3b24] hover:bg-[#072a1a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  Submit Application via Email
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
