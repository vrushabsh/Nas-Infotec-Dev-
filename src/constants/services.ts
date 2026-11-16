import { IMAGES } from "./images";

export interface ServiceDetail {
  id: string;
  tag: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  metrics: { label: string; value: string }[];
  imageSrc: string;
  features: string[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "software-development",
    tag: "Core Engineering",
    title: "Software Development",
    shortDescription:
      "Tailored custom software solutions with a focus on robustness, scalability, security, and high performance.",
    fullDescription:
      "We transform your ideas into reality. Our team of expert developers, designers, and project managers is dedicated to delivering cutting-edge software solutions tailored to your unique business needs.",
    metrics: [
      { value: "100%", label: "Tailored Solutions" },
      { value: "Agile", label: "Delivery Method" },
      { value: "24/7", label: "Expert Support" },
    ],
    imageSrc: IMAGES.services.softwareDev,
    features: [
      "Custom Enterprise Software Development",
      "Mobile App Development (iOS, Android, Cross-platform)",
      "Software & API Systems Integration",
      "Legacy Architecture Modernization",
    ],
  },
  {
    id: "artificial-intelligence-ml",
    tag: "Advanced Tech",
    title: "Artificial Intelligence & ML",
    shortDescription:
      "Harness the power of AI and machine learning to automate complex operations and generate actionable predictive insights.",
    fullDescription:
      "Harness the power of AI and ML to transform your business operations. Our advanced solutions drive innovation, setting you ahead of the competition.",
    metrics: [
      { value: "Data", label: "Driven Insights" },
      { value: "AI", label: "Powered Engines" },
      { value: "3x", label: "Faster Operations" },
    ],
    imageSrc: IMAGES.services.aiMl,
    features: [
      "Predictive Modeling & Statistical Forecasting",
      "Natural Language Processing (NLP)",
      "Computer Vision & Image Intelligence",
      "Automated Recommendation Engines",
    ],
  },
  {
    id: "salesforce-services",
    tag: "Cloud CRM",
    title: "Salesforce Services",
    shortDescription:
      "Optimize your customer relationship management with tailored Salesforce configurations, custom Apex, and flow automation.",
    fullDescription:
      "Optimize your customer relationship management with our Salesforce services. We provide tailored solutions to streamline your processes and boost your efficiency.",
    metrics: [
      { value: "CRM", label: "Optimization" },
      { value: "Seamless", label: "Integrations" },
      { value: "High", label: "Efficiency ROI" },
    ],
    imageSrc: IMAGES.services.salesforce,
    features: [
      "Sales Cloud & Service Cloud Implementation",
      "Custom Lightning & Apex Development",
      "Third-Party ERP & Payment Integrations",
      "CRM Migration & Workflow Automation",
    ],
  },
  {
    id: "bi-and-analytics",
    tag: "Business Intelligence",
    title: "BI & Big Data Analytics",
    shortDescription:
      "Comprehensive BI and analytics solutions empowering data-driven executive decision-making for growth and efficiency.",
    fullDescription:
      "We provide comprehensive BI and analytics solutions tailored to your business needs, empowering data-driven decision-making for growth and efficiency.",
    metrics: [
      { value: "Real-Time", label: "Dashboards" },
      { value: "Growth", label: "Forecasting" },
      { value: "Metrics", label: "De-Risked Decisions" },
    ],
    imageSrc: IMAGES.services.biAnalytics,
    features: [
      "Real-Time Executive Dashboards",
      "ETL Pipeline & Data Lake Engineering",
      "Cross-Platform Data Warehousing",
      "KPI & Financial Performance Tracking",
    ],
  },
  {
    id: "cloud-and-devops",
    tag: "Cloud Engineering",
    title: "Cloud & DevOps Infrastructure",
    shortDescription:
      "Automated CI/CD pipelines, containerization, and resilient multi-cloud architecture engineered for high availability.",
    fullDescription:
      "Accelerate your delivery cycles and ensure 99.99% uptime with cloud engineering on AWS, Azure, and Google Cloud coupled with automated DevOps workflows.",
    metrics: [
      { value: "99.99%", label: "System Availability" },
      { value: "Zero", label: "Downtime Deploys" },
      { value: "Multi-Cloud", label: "Resilience" },
    ],
    imageSrc: IMAGES.services.devops,
    features: [
      "AWS / GCP / Azure Architecture",
      "Kubernetes & Docker Orchestration",
      "Automated Infrastructure as Code (Terraform)",
      "Continuous Integration & Deployment (CI/CD)",
    ],
  },
  {
    id: "cyber-security",
    tag: "Defense & Compliance",
    title: "Cyber Security & Testing QA",
    shortDescription:
      "End-to-end vulnerability assessment, automated testing pipelines, penetration testing, and enterprise data defense.",
    fullDescription:
      "Protect your mission-critical assets with modern cybersecurity protocols, rigorous compliance frameworks, and comprehensive software QA testing.",
    metrics: [
      { value: "SOC 2", label: "Compliance Ready" },
      { value: "Automated", label: "Security Audits" },
      { value: "24/7", label: "Threat Monitoring" },
    ],
    imageSrc: IMAGES.services.cyberSecurity,
    features: [
      "Penetration Testing & Vulnerability Scans",
      "Automated End-to-End QA Pipelines",
      "Data Encryption & Identity Governance",
      "Compliance Audits (GDPR, HIPAA, ISO)",
    ],
  },
];

