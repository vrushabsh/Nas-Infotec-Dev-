import { IMAGES } from "./images";

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "banking-finance",
    title: "Banking & Financial Services",
    description:
      "Modernizing legacy core banking, enabling real-time transactions, fraud mitigation algorithms, and secure customer-centric digital banking experiences.",
    image: IMAGES.industries.banking,
    highlights: ["Secure Payment Gateways", "Fraud Detection AI", "Regulatory Compliance"],
  },
  {
    id: "ecommerce-retail",
    title: "E-Commerce & Retail",
    description:
      "Scalable storefronts, custom checkout optimization, real-time inventory synchronization, and omnichannel shopping architectures.",
    image: IMAGES.industries.ecommerce,
    highlights: ["High-Throughput Checkout", "AI Personalization", "Omnichannel Inventory"],
  },
  {
    id: "healthcare-pharma",
    title: "Healthcare & Life Sciences",
    description:
      "HIPAA-compliant telemedicine platforms, electronic health records (EHR) integrations, clinical data analytics, and patient portals.",
    image: IMAGES.industries.healthcare,
    highlights: ["HIPAA/EHR Compliance", "Telehealth Systems", "Clinical Data Analytics"],
  },
  {
    id: "telecommunication",
    title: "Telecommunications & Media",
    description:
      "Network performance monitoring dashboards, automated billing engines, 5G service enablement, and subscriber analytics pipelines.",
    image: IMAGES.industries.telecom,
    highlights: ["Network Analytics", "Subscriber Management", "High-Availability Gateways"],
  },
  {
    id: "manufacturing-logistics",
    title: "Manufacturing & Supply Chain",
    description:
      "IoT sensor telemetry, predictive equipment maintenance, automated warehouse management, and end-to-end supply chain visibility.",
    image: IMAGES.industries.manufacturing,
    highlights: ["IoT Telemetry", "Predictive Maintenance", "Real-Time Tracking"],
  },
  {
    id: "education-edtech",
    title: "Education & EdTech",
    description:
      "Custom learning management systems (LMS), interactive virtual classrooms, student performance metrics, and digital exam proctoring.",
    image: IMAGES.industries.education,
    highlights: ["Scalable LMS Portals", "Interactive Classroom UX", "Student Analytics"],
  },
];

