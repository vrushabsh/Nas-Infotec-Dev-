/**
 * NAS Infotech Centralized Assets & Image Registry
 */

export const IMAGES = {
  // Brand Logos
  logo: {
    nas: "/nas-logo.png",
    dark: "/logo.png", // Dark logo for light surfaces
    light: "/nas-logo2.png", // Light logo for dark surfaces / header
    alt: "/logo2.png",
    favicon: "/favicon.ico",
  },

  // Hero Section Media
  hero: {
    bg: "/Home/hero-bg-image.jpg",
    featureSupport: "/Home/feature-support.png",
    featureSupportBody: "/Home/feature-support-body-image-2.png",
  },

  // Authentic Enterprise Client Logos
  clients: [
    { name: "Carlsberg", src: "/Home/Logos/logo.webp" },
    { name: "Disneyland Paris", src: "/Home/Logos/logo1.webp" },
    { name: "ITespresso", src: "/Home/Logos/logo2.webp" },
    { name: "Fujifilm", src: "/Home/Logos/logo3.webp" },
    { name: "ArcSight", src: "/Home/Logos/logo4.webp" },
    { name: "Hisense", src: "/Home/Logos/logo5.webp" },
    { name: "Natura", src: "/Home/Logos/logo6.webp" },
  ],

  // Core Service Images
  services: {
    softwareDev: "/Services/services-software-development.webp",
    aiMl: "/Services/services-ai-and-ml.webp",
    salesforce: "/Services/services-salesforce-services.webp",
    biAnalytics: "/Services/pic-1.webp",
    cloudComputing: "/Services/services-cloud-computing.webp",
    devops: "/Services/services-devops.webp",
    cyberSecurity: "/Services/services-cyber-security.webp",
    testingQa: "/Services/services-software-testing-and-qa.webp",
    webDev: "/Services/services-web-development.jpeg",
    digitalMarketing: "/Services/services-digital-marketing.jpeg",
  },

  // Industry Visuals
  industries: {
    banking: "/Industries/Insurance.webp",
    ecommerce: "/Industries/ecommerce.webp",
    healthcare: "/Industries/Healthcare.webp",
    education: "/Industries/Education.webp",
    pharma: "/Industries/Pharma.webp",
    telecom: "/Industries/Telecommunication.webp",
    manufacturing: "/Industries/Manufacturing.webp",
    realEstate: "/Industries/RealEstate.webp",
    finance: "/Industries/Finance.webp",
    logistics: "/Industries/logistatic.webp",
  },

  // About & Team Media
  about: {
    header: "/About/About-header.jpg",
    hero: "/About/aboutHerosection.jpg",
    main: "/About/aboutus-1.jpg",
    team1: "/About/team-1.jpg",
    team2: "/About/team-2.jpg",
    team3: "/About/team-3.jpg",
    consultation: "/About/contact-nas-info.webp",
  },
} as const;

export type ImageRegistry = typeof IMAGES;

