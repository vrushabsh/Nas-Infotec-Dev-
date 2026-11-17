import { IMAGES } from "./images";

export interface ServiceOverviewItem {
  icon: "search" | "users" | "workflow" | "trending" | "code" | "cpu" | "shield" | "cloud" | "database" | "layers";
  title: string;
  description: string;
  highlighted?: boolean;
}

export interface ServiceFeatureItem {
  title: string;
  description: string;
  highlighted?: boolean;
}

export interface ServiceProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface TechCategory {
  id: string;
  name: string;
  tools: string[];
}

export interface ServiceIndustryItem {
  name: string;
  description: string;
  href: string;
}

export interface ServiceFullDetails {
  slug: string;
  aliases?: string[];
  tag: string;
  title: string;
  badge: string;
  shortDescription: string;
  heroDescription: string;
  heroImage: string;
  featureSideImage: string;
  processSideImage: string;
  benefitsSideImage: string;
  metrics: { label: string; value: string }[];
  overview: {
    badge: string;
    title: string;
    items: ServiceOverviewItem[];
  };
  features: {
    badge: string;
    title: string;
    items: ServiceFeatureItem[];
  };
  howItWorks: {
    badge: string;
    title: string;
    steps: ServiceProcessStep[];
  };
  technologies: {
    title: string;
    subtitle: string;
    categories: TechCategory[];
  };
  benefits: {
    title: string;
    description: string;
    highlight: string;
    items: string[];
  };
  industries: {
    badge: string;
    title: string;
    subtitle: string;
    items: ServiceIndustryItem[];
  };
}

export const DETAILED_SERVICES: ServiceFullDetails[] = [
  {
    slug: "artificial-intelligence-machine-learning",
    aliases: ["artificial-intelligence-ml", "ai-and-ml", "ai-ml"],
    tag: "Advanced Tech",
    badge: "Artificial Intelligence & Machine Learning Services",
    title: "Artificial Intelligence & Machine Learning Services",
    shortDescription:
      "Harness the power of AI and machine learning to automate complex operations and generate actionable predictive insights.",
    heroDescription:
      "Leverage the power of Artificial Intelligence and Machine Learning to automate processes, uncover valuable insights, improve decision-making, and create innovative customer experiences. We help businesses transform data into intelligent actions that drive measurable growth.",
    heroImage: IMAGES.services.aiMl,
    featureSideImage: "/About/team-1.jpg",
    processSideImage: "/About/team-2.jpg",
    benefitsSideImage: "/About/team-3.jpg",
    metrics: [
      { value: "99.2%", label: "Model Accuracy" },
      { value: "3x", label: "Faster Operations" },
      { value: "24/7", label: "Predictive Monitoring" },
    ],
    overview: {
      badge: "Intelligent Solutions for Smarter Business",
      title: "Service Overview",
      items: [
        {
          icon: "search",
          title: "Machine Learning Model Development",
          description:
            "Custom machine learning models built from the ground up, tailored to solve specific business challenges with high predictive precision.",
          highlighted: true,
        },
        {
          icon: "users",
          title: "Predictive Analytics Solutions",
          description:
            "Anticipate trends, forecast market fluctuations, and understand consumer behavior before it occurs using advanced algorithmic modeling.",
        },
        {
          icon: "workflow",
          title: "Natural Language Processing (NLP)",
          description:
            "Intelligent chatbots, text summarization, sentiment classification, and semantic search powered by state-of-the-art transformer architectures.",
        },
        {
          icon: "trending",
          title: "Computer Vision Applications",
          description:
            "Real-time object detection, facial recognition, visual QA inspection, and automated video stream intelligence.",
        },
        {
          icon: "code",
          title: "AI-Powered Automation",
          description:
            "Automate cognitive business operations, smart document processing, and eliminate manual bottlenecks with intelligent agentic workflows.",
        },
        {
          icon: "cpu",
          title: "Recommendation Systems",
          description:
            "Hyper-personalized product, content, and workflow recommendation engines proven to boost engagement and lifetime conversion rates.",
        },
      ],
    },
    features: {
      badge: "WHY CHOOSE US",
      title: "Key Features",
      items: [
        {
          title: "Predictive Analytics",
          description:
            "Forecast business trends, customer behavior, and operational outcomes using advanced machine learning models.",
          highlighted: true,
        },
        {
          title: "Intelligent Automation",
          description:
            "Automate repetitive tasks and business workflows with AI-driven decision-making systems.",
        },
        {
          title: "Natural Language Processing",
          description:
            "Enable chatbots, virtual assistants, sentiment analysis, and text processing capabilities.",
        },
        {
          title: "Computer Vision",
          description:
            "Extract insights from images and videos through object detection, recognition, and visual analysis.",
        },
        {
          title: "Recommendation Engines",
          description:
            "Deliver personalized experiences and product recommendations based on user behavior.",
        },
        {
          title: "AI Integration",
          description:
            "Seamlessly integrate AI capabilities into existing business applications and workflows.",
        },
      ],
    },
    howItWorks: {
      badge: "HOW IT WORKS",
      title: "Excellent Work From Increased Website Traffic To Higher Conversion Rates.",
      steps: [
        {
          number: "01.",
          title: "Talk With Team",
          description:
            "We connect with your team to understand your business goals, target audience, and challenges. Together, we identify the right digital AI & ML strategies to achieve measurable results.",
        },
        {
          number: "02.",
          title: "Make A Plan",
          description:
            "We create a customized plan tailored to your business needs and objectives. Our strategy focuses on data architecture, model selection, validation benchmarks, and production integration.",
        },
        {
          number: "03.",
          title: "AI & Engineering Work",
          description:
            "Our team trains, tests, and deploys scalable models into production. We continuously monitor performance, latency, and drift to guarantee sustained business ROI.",
        },
      ],
    },
    technologies: {
      title: "Technologies We Use",
      subtitle: "Select a quadrant to view targeted stack integrations.",
      categories: [
        {
          id: "frameworks",
          name: "AI Frameworks",
          tools: ["TensorFlow", "PyTorch", "Keras", "Scikit-Learn", "OpenCV"],
        },
        {
          id: "languages",
          name: "Programming Languages",
          tools: ["Python", "R", "Go", "TypeScript", "C++"],
        },
        {
          id: "data",
          name: "Data Processing",
          tools: ["Apache Spark", "Apache Kafka", "Pandas", "NumPy", "Hadoop"],
        },
        {
          id: "cloud",
          name: "Cloud AI Platforms",
          tools: ["AWS SageMaker", "Google Cloud Vertex AI", "Azure ML", "Databricks", "Hugging Face"],
        },
      ],
    },
    benefits: {
      title: "Benefits",
      description:
        "Our web and intelligence infrastructure plans are built on transparency, flexibility, and long-term reliability. We optimize custom environments tailored to system requirements.",
      highlight: "Smarter Decision Making",
      items: [
        "Operational Efficiency",
        "Improved Customer Experience",
        "Revenue Growth",
        "Competitive Advantage",
        "Scalable Intelligence",
      ],
    },
    industries: {
      badge: "INDUSTRIES",
      title: "Industries We Serve",
      subtitle:
        "Tailored ecosystem frameworks configured precisely around unique digital market operations and structural compliance parameters.",
      items: [
        {
          name: "Healthcare",
          description: "AI-powered diagnostics, patient analytics, and healthcare automation solutions.",
          href: "/industries/healthcare",
        },
        {
          name: "Finance",
          description: "Fraud detection, risk assessment, algorithmic trading, and financial forecasting.",
          href: "/industries/finance",
        },
        {
          name: "Retail & E-Commerce",
          description: "Personalized recommendations, demand forecasting, and customer behavior analysis.",
          href: "/industries/ecommerce",
        },
        {
          name: "Manufacturing",
          description: "Predictive maintenance, quality control, and production optimization.",
          href: "/industries/manufacturing",
        },
        {
          name: "Logistics",
          description: "Route optimization, demand prediction, and supply chain intelligence.",
          href: "/industries/logistics",
        },
        {
          name: "Telecommunications",
          description: "Network optimization, customer analytics, and AI-driven support systems.",
          href: "/industries/telecom",
        },
      ],
    },
  },
  {
    slug: "software-development",
    aliases: ["custom-software-development", "software"],
    tag: "Core Engineering",
    badge: "Enterprise Custom Software Development",
    title: "Software Development Services",
    shortDescription:
      "Tailored custom software solutions with a focus on robustness, scalability, security, and high performance.",
    heroDescription:
      "We design, build, and deploy mission-critical software platforms engineered to scale seamlessly. From modern web ecosystems to high-throughput backends and enterprise APIs, agile squads deliver clean code and resilient architectures.",
    heroImage: IMAGES.services.softwareDev,
    featureSideImage: "/About/team-2.jpg",
    processSideImage: "/About/aboutHerosection.jpg",
    benefitsSideImage: "/About/aboutus-1.jpg",
    metrics: [
      { value: "98%", label: "On-time Delivery" },
      { value: "100%", label: "Tailored Architecture" },
      { value: "Zero", label: "Technical Debt Sprawl" },
    ],
    overview: {
      badge: "Scalable Engineering For Enterprise Demands",
      title: "Service Overview",
      items: [
        {
          icon: "code",
          title: "Custom Enterprise Software",
          description:
            "Bespoke applications tailored precisely to your operational workflow, replacing restrictive off-the-shelf software.",
          highlighted: true,
        },
        {
          icon: "layers",
          title: "Modular Cloud-Native Architecture",
          description:
            "Microservices, distributed APIs, and containerized backends designed for infinite horizontal scalability.",
        },
        {
          icon: "workflow",
          title: "Legacy System Modernization",
          description:
            "De-risk migrations and rewrite outdated monoliths into modern, cloud-first high-speed platforms.",
        },
        {
          icon: "database",
          title: "API & Systems Integration",
          description:
            "Connect third-party enterprise tools, payment gateways, ERPs, and CRMs with zero sync friction.",
        },
        {
          icon: "shield",
          title: "Enterprise Grade Security",
          description:
            "Role-based access control, cryptographic data protection, and adherence to ISO/SOC standards.",
        },
        {
          icon: "trending",
          title: "High Performance Optimization",
          description:
            "Fine-tuned database indexing, caching strategies, and asset CDNs delivering sub-second response times.",
        },
      ],
    },
    features: {
      badge: "ENGINEERING EXCELLENCE",
      title: "Key Features",
      items: [
        {
          title: "Tailored Architecture",
          description: "Clean, modular codebases designed specifically around your business requirements.",
          highlighted: true,
        },
        {
          title: "Agile Sprint Delivery",
          description: "Transparent 2-week sprint cycles with live demos and continuous stakeholder feedback.",
        },
        {
          title: "Full Code Ownership",
          description: "100% intellectual property ownership with full documentation and deployment runbooks.",
        },
        {
          title: "Automated Testing",
          description: "Unit, integration, and end-to-end regression test suites embedded directly into CI pipelines.",
        },
        {
          title: "Cross-Platform Flexibility",
          description: "Responsive web platforms, native mobile apps, and robust desktop solutions under one roof.",
        },
        {
          title: "24/7 SLA Support",
          description: "Continuous health monitoring, proactive patching, and guaranteed incident turnaround times.",
        },
      ],
    },
    howItWorks: {
      badge: "DELIVERY PIPELINE",
      title: "From Requirements Architecture To Production Delivery.",
      steps: [
        {
          number: "01.",
          title: "Discovery & Blueprint",
          description:
            "We conduct deep-dive technical workshops to assess database models, API schemas, and user journeys.",
        },
        {
          number: "02.",
          title: "Agile Sprint Execution",
          description:
            "Bi-weekly sprint deliverables with clean commits, pull request peer reviews, and automated QA runs.",
        },
        {
          number: "03.",
          title: "Deployment & Scaling",
          description:
            "Zero-downtime deployment onto multi-region cloud clusters with real-time performance instrumentation.",
        },
      ],
    },
    technologies: {
      title: "Technologies We Use",
      subtitle: "Enterprise languages, frameworks, and database architectures.",
      categories: [
        {
          id: "frontend",
          name: "Frontend Stacks",
          tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
        },
        {
          id: "backend",
          name: "Backend Frameworks",
          tools: ["Node.js", "Go", "Python", "NestJS", "Java Spring Boot"],
        },
        {
          id: "databases",
          name: "Databases & Storage",
          tools: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB"],
        },
        {
          id: "cloud",
          name: "Cloud & DevOps",
          tools: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
        },
      ],
    },
    benefits: {
      title: "Benefits",
      description:
        "Modernizing with custom software accelerates innovation, reduces recurring licensing costs, and builds defensible proprietary value.",
      highlight: "Unmatched Operational Velocity",
      items: [
        "100% Custom Workflows",
        "Zero Vendor Lock-In",
        "Higher Customer Retention",
        "Sub-Second Page Loads",
        "Built-in Enterprise Security",
      ],
    },
    industries: {
      badge: "INDUSTRIES",
      title: "Industries We Serve",
      subtitle:
        "Engineered for high-compliance, transaction-heavy enterprise sectors globally.",
      items: [
        {
          name: "Finance & Fintech",
          description: "Secure payment gateways, core banking integrations, and transaction processing.",
          href: "/industries/finance",
        },
        {
          name: "Healthcare",
          description: "HIPAA-compliant EHR management, telemedicine portals, and patient scheduling.",
          href: "/industries/healthcare",
        },
        {
          name: "E-Commerce",
          description: "Headless commerce, omni-channel order routing, and inventory sync systems.",
          href: "/industries/ecommerce",
        },
        {
          name: "Manufacturing",
          description: "Supply chain dashboards, warehouse management, and ERP synchronization.",
          href: "/industries/manufacturing",
        },
        {
          name: "Insurance",
          description: "Automated underwriting, claims processing portals, and risk assessment engines.",
          href: "/industries/insurance",
        },
        {
          name: "Education",
          description: "Learning management systems, student progress tracking, and virtual classrooms.",
          href: "/industries/education",
        },
      ],
    },
  },
  {
    slug: "professional-web-development",
    aliases: ["web-development", "web-dev"],
    tag: "Web Solutions",
    badge: "Professional Web Development",
    title: "Professional Web Development Services",
    shortDescription:
      "Modern, responsive, high-speed web ecosystems engineered to maximize brand authority and conversion performance.",
    heroDescription:
      "Transform your digital presence with enterprise web applications and portals engineered for speed, search optimization, and seamless user experiences. We deliver pixel-perfect frontends powered by headless backends.",
    heroImage: IMAGES.services.webDev,
    featureSideImage: "/About/team-1.jpg",
    processSideImage: "/About/team-3.jpg",
    benefitsSideImage: "/About/team-2.jpg",
    metrics: [
      { value: "99/100", label: "Lighthouse Performance" },
      { value: "0.4s", label: "Average First Load" },
      { value: "100%", label: "Responsive Precision" },
    ],
    overview: {
      badge: "Modern Frontend Engineering",
      title: "Service Overview",
      items: [
        {
          icon: "layers",
          title: "Next.js & React Applications",
          description: "Ultra-fast server-side rendered and static applications providing instant page loads.",
          highlighted: true,
        },
        {
          icon: "code",
          title: "Custom Web Portals",
          description: "Secure customer dashboards, partner extranets, and internal admin panels.",
        },
        {
          icon: "trending",
          title: "Conversion-Focused Architecture",
          description: "Optimized user funnels, fast checkout pipelines, and clear call-to-action touchpoints.",
        },
        {
          icon: "search",
          title: "Core Web Vitals & Technical SEO",
          description: "Schema markup, dynamic open-graph cards, and top-tier search visibility out of the box.",
        },
        {
          icon: "shield",
          title: "Modern Security Headers",
          description: "Protection against XSS, CSRF, and injection vulnerabilities baked into every route.",
        },
        {
          icon: "workflow",
          title: "Headless CMS Integration",
          description: "Empower your marketing teams with Sanity, Strapi, or Contentful without touching code.",
        },
      ],
    },
    features: {
      badge: "WEB MASTERY",
      title: "Key Features",
      items: [
        {
          title: "Sub-Second Loading Speeds",
          description: "Optimized bundles, modern image decoding, and edge CDN caching strategies.",
          highlighted: true,
        },
        {
          title: "Fully Responsive UI",
          description: "Fluid mobile-first responsive design tested across dozens of device dimensions.",
        },
        {
          title: "Accessible (WCAG 2.1 AA)",
          description: "Keyboard navigable, screen-reader verified, and high contrast compliant.",
        },
        {
          title: "Dynamic Content API",
          description: "Seamless synchronization with backend databases and real-time state handlers.",
        },
        {
          title: "Micro-Interactions",
          description: "Clean animations that enhance usability without bloating client performance.",
        },
        {
          title: "Global CDN Deployment",
          description: "Edge delivery through Vercel or Cloudflare with 99.99% uptime guarantees.",
        },
      ],
    },
    howItWorks: {
      badge: "DEVELOPMENT LIFECYCLE",
      title: "A Disciplined Engineering Approach To Web Delivery.",
      steps: [
        {
          number: "01.",
          title: "UX & System Architecture",
          description: "Wireframing, interactive Figma design systems, and responsive layout validation.",
        },
        {
          number: "02.",
          title: "Component-Driven Build",
          description: "Modular development in React and Tailwind CSS with strict TypeScript typing.",
        },
        {
          number: "03.",
          title: "Edge Launch & Optimization",
          description: "Performance audits, cross-browser compatibility verification, and CDN deployment.",
        },
      ],
    },
    technologies: {
      title: "Technologies We Use",
      subtitle: "The modern web ecosystem stack.",
      categories: [
        {
          id: "frameworks",
          name: "Frameworks & Libraries",
          tools: ["Next.js", "React 19", "Tailwind CSS v4", "TypeScript", "Vite"],
        },
        {
          id: "styling",
          name: "Design & Styling",
          tools: ["Tailwind CSS", "Figma", "CSS Modules", "PostCSS", "KaTeX"],
        },
        {
          id: "cms",
          name: "CMS & Data",
          tools: ["Headless CMS", "Sanity", "Strapi", "Prisma", "GraphQL"],
        },
        {
          id: "hosting",
          name: "Hosting & CDN",
          tools: ["Vercel", "AWS CloudFront", "Cloudflare", "Netlify", "Docker"],
        },
      ],
    },
    benefits: {
      title: "Benefits",
      description:
        "A premium web platform elevates brand credibility, drives qualified inbound demand, and lowers customer acquisition costs.",
      highlight: "Unrivaled Digital Presence",
      items: [
        "Higher Search Engine Rankings",
        "Higher Conversion Rates",
        "Seamless Mobile Experience",
        "Zero Lag or Layout Shift",
        "Effortless Marketing Updates",
      ],
    },
    industries: {
      badge: "INDUSTRIES",
      title: "Industries We Serve",
      subtitle: "High-impact web solutions across diverse global markets.",
      items: [
        {
          name: "Corporate & Enterprise",
          description: "Brand portals, investor relations centers, and multi-national digital ecosystems.",
          href: "/industries",
        },
        {
          name: "E-Commerce",
          description: "Modern storefronts, high-converting product pages, and checkout workflows.",
          href: "/industries/ecommerce",
        },
        {
          name: "Healthcare",
          description: "Patient engagement portals, doctor directories, and clinical service showcases.",
          href: "/industries/healthcare",
        },
        {
          name: "Finance",
          description: "Fintech landing ecosystems, investment dashboards, and loan calculator portals.",
          href: "/industries/finance",
        },
        {
          name: "Education",
          description: "University portals, course catalogs, and admission inquiry engines.",
          href: "/industries/education",
        },
        {
          name: "Pharma",
          description: "Drug information hubs, clinical study archives, and medical supply portals.",
          href: "/industries/pharma",
        },
      ],
    },
  },
  {
    slug: "software-testing-quality-assurance",
    aliases: ["software-testing", "qa", "testing-qa"],
    tag: "Quality Assurance",
    badge: "Software Testing & Quality Assurance",
    title: "Software Testing & QA Services",
    shortDescription:
      "End-to-end automated and manual testing pipelines protecting releases from bugs, performance regressions, and vulnerabilities.",
    heroDescription:
      "Ensure defect-free releases with rigorous, automated software testing and quality engineering. We integrate continuous QA directly into your agile sprints to protect product reliability before code ever touches production.",
    heroImage: IMAGES.services.testingQa,
    featureSideImage: "/About/team-3.jpg",
    processSideImage: "/About/team-2.jpg",
    benefitsSideImage: "/About/team-1.jpg",
    metrics: [
      { value: "99.9%", label: "Defect Detection Rate" },
      { value: "60%", label: "Faster Release Cycles" },
      { value: "100%", label: "Test Coverage Automation" },
    ],
    overview: {
      badge: "Zero-Defect Software Engineering",
      title: "Service Overview",
      items: [
        {
          icon: "shield",
          title: "Automated Regression Testing",
          description: "End-to-end automated test suites running on every pull request to halt regressions.",
          highlighted: true,
        },
        {
          icon: "code",
          title: "API & Integration Testing",
          description: "Validate payloads, status codes, contract schemas, and error boundaries across distributed microservices.",
        },
        {
          icon: "trending",
          title: "Performance & Load Testing",
          description: "Stress test applications under concurrent loads of up to 100k+ users to eliminate bottlenecks.",
        },
        {
          icon: "users",
          title: "Manual Exploratory QA",
          description: "Expert QA engineers test complex edge cases, UX workflows, and cross-browser quirks.",
        },
        {
          icon: "shield",
          title: "Security & Vulnerability Audits",
          description: "Automated dependency scans, OWASP top 10 verification, and access privilege validation.",
        },
        {
          icon: "workflow",
          title: "Continuous Testing in CI/CD",
          description: "Embed automated test gates into GitHub Actions or GitLab pipelines for instant feedback.",
        },
      ],
    },
    features: {
      badge: "QA METHODOLOGY",
      title: "Key Features",
      items: [
        {
          title: "Automated CI/CD Test Gates",
          description: "Prevent broken builds from reaching staging or production automatically.",
          highlighted: true,
        },
        {
          title: "Cross-Browser & Multi-Device",
          description: "Automated testing across Chrome, Safari, Firefox, Edge, iOS, and Android.",
        },
        {
          title: "Load & Stress Testing",
          description: "Simulate peak holiday traffic and high-volume transaction spikes.",
        },
        {
          title: "Comprehensive Coverage Reports",
          description: "Clear metrics detailing code coverage, execution velocity, and defect severity.",
        },
        {
          title: "Security Penetration Scans",
          description: "Proactively identify vulnerability vectors before bad actors can exploit them.",
        },
        {
          title: "Fast Feedback Loops",
          description: "Engineers receive real-time test run logs within minutes of pushing code.",
        },
      ],
    },
    howItWorks: {
      badge: "QA PROCESS",
      title: "Disciplined Testing Embedded In Every Sprint.",
      steps: [
        {
          number: "01.",
          title: "Test Strategy & Matrix",
          description: "We map out test scenarios, acceptance criteria, and automation coverage requirements.",
        },
        {
          number: "02.",
          title: "Test Script Automation",
          description: "Develop resilient Cypress, Playwright, or Selenium scripts integrated into CI.",
        },
        {
          number: "03.",
          title: "Continuous Verification",
          description: "Nightly automated test suites, regression benchmarking, and release certification.",
        },
      ],
    },
    technologies: {
      title: "Technologies We Use",
      subtitle: "Industry-standard testing and automation tools.",
      categories: [
        {
          id: "automation",
          name: "Test Automation",
          tools: ["Playwright", "Cypress", "Selenium", "Jest", "Vitest"],
        },
        {
          id: "performance",
          name: "Performance & Load",
          tools: ["k6", "JMeter", "Postman", "Locust", "Gatling"],
        },
        {
          id: "api",
          name: "API Testing",
          tools: ["Postman", "Newman", "REST Assured", "Swagger/OpenAPI", "Charles Proxy"],
        },
        {
          id: "ci",
          name: "CI/CD & Tracking",
          tools: ["GitHub Actions", "Jira", "Allure Reports", "SonarQube", "BrowserStack"],
        },
      ],
    },
    benefits: {
      title: "Benefits",
      description:
        "High test coverage drastically reduces production outages, safeguards user trust, and accelerates deployment confidence.",
      highlight: "Unshakable Software Reliability",
      items: [
        "Zero Critical Release Outages",
        "Drastically Reduced Support Tickets",
        "Accelerated Time-to-Market",
        "Higher App Store Ratings",
        "Confident Stakeholder Sign-Off",
      ],
    },
    industries: {
      badge: "INDUSTRIES",
      title: "Industries We Serve",
      subtitle: "Protecting business-critical platforms where uptime is mandatory.",
      items: [
        {
          name: "Banking & Financial Services",
          description: "Zero-tolerance testing for secure payment pipelines and audit compliance.",
          href: "/industries/banking",
        },
        {
          name: "Healthcare",
          description: "Validating clinical software reliability, HIPAA privacy, and patient safety.",
          href: "/industries/healthcare",
        },
        {
          name: "E-Commerce",
          description: "Cart flow stress testing, inventory reconciliation, and payment verification.",
          href: "/industries/ecommerce",
        },
        {
          name: "Telecommunications",
          description: "High-throughput messaging testing, network billing, and SIM management.",
          href: "/industries/telecom",
        },
        {
          name: "Insurance",
          description: "Claims calculation validation, form verification, and policy premium formulas.",
          href: "/industries/insurance",
        },
        {
          name: "Logistics",
          description: "GPS tracking accuracy, order route sync, and inventory ledger checks.",
          href: "/industries/logistics",
        },
      ],
    },
  },
  {
    slug: "devops-consulting-automation",
    aliases: ["devops", "cloud-computing", "cloud-and-devops"],
    tag: "Cloud Engineering",
    badge: "DevOps Consulting & Automation",
    title: "DevOps Consulting & Automation Services",
    shortDescription:
      "Automated CI/CD pipelines, containerization, and resilient multi-cloud architecture engineered for high availability.",
    heroDescription:
      "Modernize your cloud infrastructure, eliminate manual releases, and achieve 99.99% system availability. Our DevOps architects build automated CI/CD pipelines, container orchestration, and infrastructure-as-code across AWS and Google Cloud.",
    heroImage: IMAGES.services.devops,
    featureSideImage: "/About/team-2.jpg",
    processSideImage: "/About/team-1.jpg",
    benefitsSideImage: "/About/team-3.jpg",
    metrics: [
      { value: "99.99%", label: "Uptime SLA" },
      { value: "10x", label: "Faster Deployment Cycles" },
      { value: "40%", label: "Cloud Cost Optimization" },
    ],
    overview: {
      badge: "Continuous Delivery & Cloud Resilience",
      title: "Service Overview",
      items: [
        {
          icon: "cloud",
          title: "Multi-Region Cloud Architecture",
          description: "Engineered AWS and GCP environments with automated failover and geo-redundant backups.",
          highlighted: true,
        },
        {
          icon: "workflow",
          title: "Automated CI/CD Pipelines",
          description: "Fully automated build, test, and zero-downtime blue/green deployment workflows.",
        },
        {
          icon: "layers",
          title: "Kubernetes & Containerization",
          description: "Containerize applications with Docker and scale effortlessly with Kubernetes / EKS clusters.",
        },
        {
          icon: "code",
          title: "Infrastructure as Code (IaC)",
          description: "Version-controlled infrastructure using Terraform, guaranteeing reproducibility and fast recovery.",
        },
        {
          icon: "trending",
          title: "Cloud Cost Optimization (FinOps)",
          description: "Analyze compute, memory, and database usage to trim unnecessary monthly cloud spend.",
        },
        {
          icon: "shield",
          title: "24/7 Monitoring & Alerting",
          description: "Real-time Prometheus, Grafana, and Datadog telemetry with automatic PagerDuty incident response.",
        },
      ],
    },
    features: {
      badge: "DEVOPS EXCELLENCE",
      title: "Key Features",
      items: [
        {
          title: "Zero-Downtime Deployments",
          description: "Ship updates continuously without disconnecting active users or interrupting transactions.",
          highlighted: true,
        },
        {
          title: "Multi-Cloud Portability",
          description: "Avoid cloud vendor lock-in with portable Docker and Kubernetes setups.",
        },
        {
          title: "Automated Auto-Scaling",
          description: "Automatically spin up compute during traffic surges and spin down to save cash off-peak.",
        },
        {
          title: "Disaster Recovery Automation",
          description: "RPO and RTO within minutes backed by automated multi-region replication.",
        },
        {
          title: "GitOps Workflows",
          description: "Deploy infrastructure and applications safely through Git commits with pull request reviews.",
        },
        {
          title: "Strict Compliance Guardrails",
          description: "Automated compliance policies preventing insecure S3 buckets or misconfigured firewalls.",
        },
      ],
    },
    howItWorks: {
      badge: "INFRASTRUCTURE PIPELINE",
      title: "Transforming Infrastructure Into Scalable Code.",
      steps: [
        {
          number: "01.",
          title: "Architecture Assessment",
          description: "We audit current infrastructure, bottlenecks, deployment pain points, and cloud bills.",
        },
        {
          number: "02.",
          title: "IaC & Pipeline Setup",
          description: "Build Terraform scripts, Docker containers, and automated GitHub Actions pipelines.",
        },
        {
          number: "03.",
          title: "Migration & Monitoring",
          description: "Execute smooth cloud migration with 24/7 real-time telemetry and alerting active.",
        },
      ],
    },
    technologies: {
      title: "Technologies We Use",
      subtitle: "The enterprise cloud & infrastructure toolchain.",
      categories: [
        {
          id: "cloud",
          name: "Cloud Providers",
          tools: ["AWS", "Google Cloud", "Microsoft Azure", "Cloudflare", "DigitalOcean"],
        },
        {
          id: "orchestration",
          name: "Containers & Orchestration",
          tools: ["Kubernetes", "Docker", "Helm", "Amazon EKS", "Google GKE"],
        },
        {
          id: "iac",
          name: "Infrastructure as Code",
          tools: ["Terraform", "Ansible", "AWS CloudFormation", "Pulumi", "Packer"],
        },
        {
          id: "cicd",
          name: "CI/CD & Monitoring",
          tools: ["GitHub Actions", "GitLab CI", "Prometheus", "Grafana", "Datadog"],
        },
      ],
    },
    benefits: {
      title: "Benefits",
      description:
        "DevOps automation eliminates human error in deployments, ensures massive stability during traffic spikes, and slashes cloud bills.",
      highlight: "Unbroken Cloud Availability",
      items: [
        "99.99% Guaranteed Availability",
        "Deploy Multiple Times Per Day",
        "Substantial Cloud Spend Savings",
        "Instant Automated Rollbacks",
        "Peace of Mind with 24/7 Alerts",
      ],
    },
    industries: {
      badge: "INDUSTRIES",
      title: "Industries We Serve",
      subtitle: "Empowering hyper-scale applications across all technical verticals.",
      items: [
        {
          name: "SaaS & Tech Platforms",
          description: "High-velocity release pipelines supporting rapid feature iterations for end-users.",
          href: "/industries",
        },
        {
          name: "Finance",
          description: "Resilient infrastructure with strict encryption, VPC peering, and audit trails.",
          href: "/industries/finance",
        },
        {
          name: "Healthcare",
          description: "Encrypted data at rest and in transit adhering to HIPAA and ISO security baselines.",
          href: "/industries/healthcare",
        },
        {
          name: "Retail & E-Commerce",
          description: "Auto-scaling infrastructure handling Black Friday surges with zero slowdowns.",
          href: "/industries/ecommerce",
        },
        {
          name: "Media & Streaming",
          description: "Low-latency content distribution networks and video transcoding pipelines.",
          href: "/industries",
        },
        {
          name: "Logistics",
          description: "Real-time IoT data processing and high-availability GPS tracking clusters.",
          href: "/industries/logistics",
        },
      ],
    },
  },
  {
    slug: "cybersecurity-information-security",
    aliases: ["cyber-security", "security", "cybersecurity"],
    tag: "Defense & Compliance",
    badge: "Cybersecurity & Information Security",
    title: "Cybersecurity & Information Security Services",
    shortDescription:
      "End-to-end vulnerability assessment, automated testing pipelines, penetration testing, and enterprise data defense.",
    heroDescription:
      "Protect your enterprise assets, customer trust, and digital infrastructure against modern cyber threats. We deliver zero-trust architecture, automated vulnerability scanning, penetration testing, and comprehensive compliance governance.",
    heroImage: IMAGES.services.cyberSecurity,
    featureSideImage: "/About/team-3.jpg",
    processSideImage: "/About/team-1.jpg",
    benefitsSideImage: "/About/team-2.jpg",
    metrics: [
      { value: "Zero", label: "Security Breaches" },
      { value: "100%", label: "Compliance Alignment" },
      { value: "24/7/365", label: "SOC Threat Defense" },
    ],
    overview: {
      badge: "Enterprise Defense In Depth",
      title: "Service Overview",
      items: [
        {
          icon: "shield",
          title: "Zero-Trust Architecture",
          description: "Never trust, always verify: strict identity access management, MFA, and micro-segmented networks.",
          highlighted: true,
        },
        {
          icon: "search",
          title: "Penetration Testing & Audits",
          description: "Simulate real-world adversary attacks to identify and patch security flaws before breaches occur.",
        },
        {
          icon: "database",
          title: "Data Encryption & Privacy",
          description: "State-of-the-art AES-256 and TLS 1.3 encryption across all data stores, backups, and API endpoints.",
        },
        {
          icon: "workflow",
          title: "Compliance Readiness (SOC 2, ISO, HIPAA)",
          description: "Prepare and guide your team through rigorous security audits to win high-value enterprise contracts.",
        },
        {
          icon: "code",
          title: "DevSecOps Integration",
          description: "Static application security testing (SAST) and dynamic scanning embedded in developer pull requests.",
        },
        {
          icon: "cpu",
          title: "Incident Response & Forensics",
          description: "Rapid containment protocols and forensic post-mortems in the event of an attempted intrusion.",
        },
      ],
    },
    features: {
      badge: "SECURITY PROTOCOLS",
      title: "Key Features",
      items: [
        {
          title: "Zero-Trust Frameworks",
          description: "Robust identity verification and least-privilege access rules across all resources.",
          highlighted: true,
        },
        {
          title: "Continuous Threat Monitoring",
          description: "Automated SIEM tools scanning logs 24/7 for anomalous behaviors or unauthorized access.",
        },
        {
          title: "Vulnerability Remediation",
          description: "Actionable prioritized patches with clear developer remediation guides.",
        },
        {
          title: "Third-Party Risk Assessment",
          description: "Audit vendor supply chain security and API access points.",
        },
        {
          title: "Employee Security Training",
          description: "Phishing simulations and best-practice workshops to prevent human vulnerabilities.",
        },
        {
          title: "Disaster Recovery Assurance",
          description: "Immutable backups and automated recovery validation to defeat ransomware threats.",
        },
      ],
    },
    howItWorks: {
      badge: "SECURITY ENGAGEMENT",
      title: "A Strategic, Rigorous Defense Strategy.",
      steps: [
        {
          number: "01.",
          title: "Security & Threat Audit",
          description: "Comprehensive vulnerability scanning, configuration audits, and penetration tests.",
        },
        {
          number: "02.",
          title: "Remediation & Hardening",
          description: "Implement zero-trust IAM policies, patch known vectors, and configure automated firewalls.",
        },
        {
          number: "03.",
          title: "Continuous SOC Oversight",
          description: "Round-the-clock telemetry, routine compliance reporting, and proactive defense updates.",
        },
      ],
    },
    technologies: {
      title: "Technologies We Use",
      subtitle: "Industry-leading security and compliance tooling.",
      categories: [
        {
          id: "siem",
          name: "SIEM & Monitoring",
          tools: ["Splunk", "Wazuh", "Datadog Security", "AWS GuardDuty", "Cloudflare WAF"],
        },
        {
          id: "scanning",
          name: "Vulnerability Scanners",
          tools: ["Nessus", "OWASP ZAP", "SonarQube", "Snyk", "Burp Suite"],
        },
        {
          id: "identity",
          name: "Identity & IAM",
          tools: ["Okta", "Auth0", "AWS IAM", "HashiCorp Vault", "Azure AD"],
        },
        {
          id: "compliance",
          name: "Compliance Standards",
          tools: ["SOC 2 Type II", "ISO 27001", "HIPAA", "GDPR", "PCI-DSS"],
        },
      ],
    },
    benefits: {
      title: "Benefits",
      description:
        "Robust enterprise security builds customer trust, prevents catastrophic downtime, and unlocks high-tier corporate deals.",
      highlight: "Impenetrable Enterprise Security",
      items: [
        "Uncompromised Customer Trust",
        "Fast-Track Enterprise Sales",
        "Complete Regulatory Compliance",
        "Protection Against Ransomware",
        "Proactive 24/7 Threat Mitigation",
      ],
    },
    industries: {
      badge: "INDUSTRIES",
      title: "Industries We Serve",
      subtitle: "Shielding high-value data across heavily regulated global industries.",
      items: [
        {
          name: "Banking & Financial Services",
          description: "Prevent financial fraud, protect customer ledgers, and satisfy banking regulations.",
          href: "/industries/banking",
        },
        {
          name: "Healthcare",
          description: "Safeguard protected health information (PHI) and guarantee HIPAA compliance.",
          href: "/industries/healthcare",
        },
        {
          name: "Insurance",
          description: "Secure policyholder data, prevent identity theft, and encrypt actuarial files.",
          href: "/industries/insurance",
        },
        {
          name: "E-Commerce",
          description: "PCI-DSS compliant payment processing, anti-bot protection, and account takeover defense.",
          href: "/industries/ecommerce",
        },
        {
          name: "Pharma",
          description: "Protect clinical trial data, intellectual property, and proprietary drug discoveries.",
          href: "/industries/pharma",
        },
        {
          name: "Telecommunications",
          description: "Safeguard customer metadata, prevent SIM swap fraud, and protect network infrastructure.",
          href: "/industries/telecom",
        },
      ],
    },
  },
  {
    slug: "salesforce-services",
    aliases: ["salesforce", "salesforce-consulting"],
    tag: "Cloud CRM",
    badge: "Salesforce CRM & Cloud Solutions",
    title: "Salesforce Services & CRM Optimization",
    shortDescription:
      "Optimize customer relationship management with tailored Salesforce setups, custom Lightning & Apex development, and seamless ERP integrations.",
    heroDescription:
      "Our Salesforce services help optimize operations and improve workflows across your sales, service, and customer-facing teams. Agile squads deliver tailored configurations and custom extensions that fit how you sell.",
    heroImage: IMAGES.services.salesforce,
    featureSideImage: "/About/team-1.jpg",
    processSideImage: "/About/team-2.jpg",
    benefitsSideImage: "/About/team-3.jpg",
    metrics: [
      { value: "40%", label: "Sales Efficiency Gain" },
      { value: "100%", label: "Process Alignment" },
      { value: "24/7", label: "Managed Support" },
    ],
    overview: {
      badge: "Intelligent CRM Solutions",
      title: "Service Overview",
      items: [
        {
          icon: "cloud",
          title: "Sales & Service Cloud Implementation",
          description:
            "Tailored setup of Salesforce Sales Cloud and Service Cloud configured to your sales pipeline and support queues.",
          highlighted: true,
        },
        {
          icon: "code",
          title: "Custom Lightning & Apex Development",
          description:
            "Bespoke triggers, controllers, and Lightning Web Components (LWC) that match your unique business logic.",
        },
        {
          icon: "workflow",
          title: "Third-Party ERP & API Integration",
          description:
            "Seamless two-way data sync between Salesforce and your accounting, ERP, marketing, and payment systems.",
        },
        {
          icon: "database",
          title: "CRM Migration & Data Cleansing",
          description:
            "De-risk migrations from legacy CRMs with automated deduplication and data schema validation.",
        },
        {
          icon: "shield",
          title: "Security & Role Governance",
          description:
            "Granular role hierarchies, sharing rules, and permission sets safeguarding sensitive customer lead data.",
        },
        {
          icon: "cpu",
          title: "Salesforce Flow Automation",
          description:
            "Replace tedious manual tasks with automated approval processes, email triggers, and opportunity routing.",
        },
      ],
    },
    features: {
      badge: "WHY CHOOSE US",
      title: "Key Features",
      items: [
        {
          title: "Tailored Implementation",
          description:
            "Tailored Salesforce setups delivered by agile squads in sprints you can review.",
          highlighted: true,
        },
        {
          title: "Customization & Extensions",
          description:
            "Configuration and extensions that match your process instead of forcing a generic one.",
        },
        {
          title: "Enterprise Integration",
          description:
            "Connect Salesforce to the rest of your systems with documented API integrations.",
        },
        {
          title: "Managed SLA Support",
          description:
            "SLA-based response times with 24/7/365 monitoring after launch.",
        },
        {
          title: "Sprint Review Agility",
          description:
            "Priorities can change mid-sprint through regular sprint reviews.",
        },
        {
          title: "End-User Enablement",
          description:
            "Comprehensive training and admin documentation ensuring rapid organizational adoption.",
        },
      ],
    },
    howItWorks: {
      badge: "IMPLEMENTATION METHODOLOGY",
      title: "Structured Salesforce Rollouts Tailored To Your Pipeline.",
      steps: [
        {
          number: "01.",
          title: "Process Discovery",
          description:
            "We analyze your sales funnel, customer touchpoints, and integration requirements to design a bespoke data model.",
        },
        {
          number: "02.",
          title: "Sprint Configuration & Apex Build",
          description:
            "Agile sprints delivering custom flows, LWC components, and API connectors ready for team testing.",
        },
        {
          number: "03.",
          title: "Data Migration & Go-Live",
          description:
            "Clean data migration, user acceptance testing (UAT), and seamless cutover with 24/7 hypercare support.",
        },
      ],
    },
    technologies: {
      title: "Technologies We Use",
      subtitle: "The comprehensive Salesforce platform ecosystem.",
      categories: [
        {
          id: "clouds",
          name: "Salesforce Clouds",
          tools: ["Sales Cloud", "Service Cloud", "Marketing Cloud", "Experience Cloud", "Financial Services Cloud"],
        },
        {
          id: "development",
          name: "Development Tools",
          tools: ["Apex", "Lightning Web Components (LWC)", "Visualforce", "Salesforce DX", "SOQL / SOSL"],
        },
        {
          id: "integration",
          name: "Integration & Automation",
          tools: ["Salesforce Flow", "MuleSoft", "REST & SOAP APIs", "Zapier", "Kafka Connector"],
        },
        {
          id: "analytics",
          name: "Analytics & AI",
          tools: ["Tableau CRM", "Einstein AI", "Salesforce Reports & Dashboards", "Data Cloud"],
        },
      ],
    },
    benefits: {
      title: "Benefits",
      description:
        "A customized Salesforce environment boosts rep productivity, provides executive revenue visibility, and prevents deal slippage.",
      highlight: "Maximized CRM ROI",
      items: [
        "Shorter Sales Cycles",
        "Unified 360° Customer View",
        "Automated Lead Handoffs",
        "Accurate Revenue Forecasting",
        "Higher Win Rates",
      ],
    },
    industries: {
      badge: "INDUSTRIES",
      title: "Industries We Serve",
      subtitle: "Customized CRM deployments across high-growth enterprise verticals.",
      items: [
        {
          name: "Banking & Financial Services",
          description: "Wealth management pipelines, loan processing workflows, and KYC compliance.",
          href: "/industries/banking",
        },
        {
          name: "Healthcare & Life Sciences",
          description: "Patient engagement, provider management, and HIPAA-compliant care coordination.",
          href: "/industries/healthcare",
        },
        {
          name: "Manufacturing",
          description: "Distributor portal integration, CPQ configuration, and supply order tracking.",
          href: "/industries/manufacturing",
        },
        {
          name: "Insurance",
          description: "Policyholder CRM, automated claims routing, and quote generation.",
          href: "/industries/insurance",
        },
        {
          name: "Telecommunications",
          description: "Omni-channel subscriber service, billing inquiry management, and retention campaigns.",
          href: "/industries/telecom",
        },
        {
          name: "Retail & E-Commerce",
          description: "VIP loyalty tracking, post-purchase customer care, and personalized email journeys.",
          href: "/industries/ecommerce",
        },
      ],
    },
  },
  {
    slug: "bi-and-big-data-analytics",
    aliases: ["bi-and-analytics", "big-data-analytics", "data-analytics", "bi-analytics"],
    tag: "Data Engineering",
    badge: "BI & Big Data Analytics Services",
    title: "BI & Big Data Analytics Services",
    shortDescription:
      "Business intelligence and big data analytics that turn complex data streams into confident, high-impact decisions.",
    heroDescription:
      "Transform raw data streams into real-time executive intelligence. Our data engineers build scalable ETL pipelines, high-performance data warehouses, and interactive dashboards that give leadership clear visibility into operations.",
    heroImage: IMAGES.services.biAnalytics,
    featureSideImage: "/About/team-2.jpg",
    processSideImage: "/About/team-3.jpg",
    benefitsSideImage: "/About/team-1.jpg",
    metrics: [
      { value: "92%", label: "Resource Optimization" },
      { value: "Real-Time", label: "Executive Dashboards" },
      { value: "100%", label: "Verified Data Accuracy" },
    ],
    overview: {
      badge: "One Trusted View Of The Business",
      title: "Service Overview",
      items: [
        {
          icon: "database",
          title: "Big Data Processing & Pipelines",
          description:
            "Process large data volumes reliably on infrastructure engineered to scale on demand without latency.",
          highlighted: true,
        },
        {
          icon: "trending",
          title: "Executive Business Intelligence",
          description:
            "Interactive Power BI and Tableau dashboards that give leadership clear visibility into performance KPIs.",
        },
        {
          icon: "workflow",
          title: "Automated ETL/ELT Pipelines",
          description:
            "Reliable pipelines flowing from transactional source systems straight to modern cloud analytics warehouses.",
        },
        {
          icon: "cpu",
          title: "Predictive Analytics Models",
          description:
            "Statistical forecasting models uncovering demand patterns, customer churn triggers, and cost trends.",
        },
        {
          icon: "layers",
          title: "Modern Data Warehousing",
          description:
            "Architected Snowflake, BigQuery, and Redshift databases optimized for lightning-fast SQL queries.",
        },
        {
          icon: "shield",
          title: "Data Governance & Compliance",
          description:
            "Strict schema enforcement, role-based column access, and automated compliance auditing.",
        },
      ],
    },
    features: {
      badge: "DATA CAPABILITIES",
      title: "Key Features",
      items: [
        {
          title: "High-Volume Data Processing",
          description:
            "Process millions of events per second with Apache Spark and Kafka stream clustering.",
          highlighted: true,
        },
        {
          title: "Executive Reporting",
          description:
            "Custom dashboards designed for C-suite decision-makers with drill-down exploration.",
        },
        {
          title: "Automated Data Hygiene",
          description:
            "Continuous deduplication, anomaly detection, and schema validation ensuring 100% data fidelity.",
        },
        {
          title: "Multi-Source Ingestion",
          description:
            "Ingest data from PostgreSQL, MongoDB, Stripe, Salesforce, GA4, and IoT sensors into one lake.",
        },
        {
          title: "Cost-Optimized Queries",
          description:
            "Partitioning and clustering strategies that reduce cloud data warehouse compute fees by up to 50%.",
        },
        {
          title: "SLA-Guaranteed Updates",
          description:
            "Automated alerting notifies engineers immediately if any data pipeline pipeline runs late.",
        },
      ],
    },
    howItWorks: {
      badge: "DATA PIPELINE",
      title: "From Raw Telemetry To Actionable Business Intelligence.",
      steps: [
        {
          number: "01.",
          title: "Data Architecture Audit",
          description:
            "We audit existing data silos, reporting needs, schema structures, and business metrics.",
        },
        {
          number: "02.",
          title: "Pipeline & Lakehouse Build",
          description:
            "Engineer automated ETL scripts, data models, and high-performance warehouse tables.",
        },
        {
          number: "03.",
          title: "Dashboard Delivery & Insights",
          description:
            "Deploy executive dashboards with real-time KPI notifications and drill-down analytics.",
        },
      ],
    },
    technologies: {
      title: "Technologies We Use",
      subtitle: "The enterprise data engineering & analytics stack.",
      categories: [
        {
          id: "warehouses",
          name: "Data Warehouses",
          tools: ["Snowflake", "Google BigQuery", "AWS Redshift", "Databricks Lakehouse", "PostgreSQL"],
        },
        {
          id: "bi",
          name: "BI & Visualization",
          tools: ["Power BI", "Tableau", "Looker", "Metabase", "Apache Superset"],
        },
        {
          id: "etl",
          name: "ETL & Streaming",
          tools: ["Apache Spark", "Apache Kafka", "dbt", "Airflow", "Fivetran"],
        },
        {
          id: "languages",
          name: "Languages & Analytics",
          tools: ["Python", "SQL", "Pandas", "PySpark", "R"],
        },
      ],
    },
    benefits: {
      title: "Benefits",
      description:
        "Consolidated data intelligence enables confident investments, eliminates operational blindspots, and optimizes resource allocations.",
      highlight: "Decisive Data Advantage",
      items: [
        "Single Source of Truth",
        "92% Resource Optimization",
        "Real-Time Revenue Visibility",
        "Elimination of Spreadsheet Chaos",
        "Faster Strategic Decisions",
      ],
    },
    industries: {
      badge: "INDUSTRIES",
      title: "Industries We Serve",
      subtitle: "Powering data-driven agility across data-heavy sectors globally.",
      items: [
        {
          name: "Finance & Banking",
          description: "Real-time liquidity dashboards, risk analytics, and transaction anomaly detection.",
          href: "/industries/finance",
        },
        {
          name: "Healthcare",
          description: "Patient outcome analysis, hospital occupancy tracking, and clinical trial metrics.",
          href: "/industries/healthcare",
        },
        {
          name: "Retail & E-Commerce",
          description: "Customer lifetime value (LTV), cart abandonment analytics, and inventory forecasting.",
          href: "/industries/ecommerce",
        },
        {
          name: "Logistics & Supply Chain",
          description: "Fleet transit telemetry, warehouse turnaround metrics, and fuel cost analysis.",
          href: "/industries/logistics",
        },
        {
          name: "Telecommunications",
          description: "Bandwidth usage heatmaps, subscriber churn prediction, and network load balancing.",
          href: "/industries/telecom",
        },
        {
          name: "Insurance",
          description: "Actuarial risk analysis, loss ratio calculations, and claims frequency modeling.",
          href: "/industries/insurance",
        },
      ],
    },
  },
];

// Helper to look up service by slug or alias
export function getServiceBySlug(slug: string): ServiceFullDetails | undefined {
  const normalized = slug.toLowerCase().trim();
  return DETAILED_SERVICES.find(
    (s) => s.slug === normalized || s.aliases?.includes(normalized)
  );
}

// Backward-compatible interface and data for Home accordion and other consumers
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

export const SERVICES_DATA: ServiceDetail[] = DETAILED_SERVICES.map((s) => ({
  id: s.slug,
  tag: s.tag,
  title: s.title,
  shortDescription: s.shortDescription,
  fullDescription: s.heroDescription,
  metrics: s.metrics,
  imageSrc: s.heroImage,
  features: s.features.items.map((f) => f.title),
}));
