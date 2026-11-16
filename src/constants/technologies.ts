export interface TechnologyCategory {
  category: string;
  items: {
    name: string;
    description: string;
    tag?: string;
  }[];
}

export const TECHNOLOGIES_DATA: TechnologyCategory[] = [
  {
    category: "Frontend & Mobile",
    items: [
      { name: "React.js / Next.js", description: "Modern performant web applications with SSR & Server Components", tag: "Primary" },
      { name: "TypeScript", description: "Strict type safety and robust enterprise codebase architecture", tag: "Standard" },
      { name: "Tailwind CSS", description: "Utility-first responsive design systems and tokenized layouts" },
      { name: "React Native / Flutter", description: "High-performance cross-platform iOS & Android mobile apps" },
      { name: "Vue.js / Angular", description: "Flexible component-driven interfaces for legacy integrations" },
    ],
  },
  {
    category: "Backend & Distributed Systems",
    items: [
      { name: "Node.js / Express", description: "Event-driven asynchronous microservices and API gateways", tag: "Core" },
      { name: "Python / FastAPI", description: "Machine learning model serving, automation, and data pipelines", tag: "AI/ML" },
      { name: "Java / Spring Boot", description: "Mission-critical, enterprise-grade banking and backend architectures" },
      { name: "Go (Golang)", description: "Ultra-low-latency distributed cloud services and concurrency" },
      { name: "PostgreSQL & MongoDB", description: "ACID-compliant relational storage and high-throughput document datastores" },
    ],
  },
  {
    category: "Cloud, DevOps & Security",
    items: [
      { name: "Amazon Web Services (AWS)", description: "Cloud infrastructure, serverless Lambda, S3, ECS, and RDS", tag: "Certified" },
      { name: "Google Cloud Platform (GCP)", description: "Big data analytics, Vertex AI, Kubernetes engine (GKE)" },
      { name: "Microsoft Azure", description: "Enterprise hybrid cloud configurations and Active Directory" },
      { name: "Docker & Kubernetes", description: "Containerized deployment and resilient automated cluster scaling" },
      { name: "CI/CD & Terraform", description: "Automated test validation, infrastructure as code, zero-downtime releases" },
    ],
  },
  {
    category: "Enterprise Platforms & Analytics",
    items: [
      { name: "Salesforce Cloud", description: "Sales Cloud, Service Cloud, Lightning flows, and custom Apex", tag: "Partner" },
      { name: "Power BI & Tableau", description: "Executive decision dashboards and automated reporting pipelines" },
      { name: "Apache Kafka", description: "Distributed real-time streaming and event telemetry" },
    ],
  },
];

