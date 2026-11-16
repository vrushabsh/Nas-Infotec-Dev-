/**
 * NAS Infotech Official Company Profile & Site Configuration
 * Extracted directly from official company records.
 */

export const SITE_CONFIG = {
  name: "NAS Infotech",
  fullName: "NAS Infotech Pvt. Ltd.",
  legalName: "Nas Infotech Pvt. Ltd.",
  url: "https://www.nas-infotech.com",
  ogImage: "/logo.png",

  slogan: "Nextgen Advanced Solutions",
  subSlogan: "Comprehensive IT Solutions for Today's Challenges",
  tagline:
    "We are committed to turning your IT challenges into success stories with expert, innovative, and reliable technology solutions.",
  description:
    "Comprehensive IT Solutions for Today's Challenges. Business Online with Nas Infotech Pvt. Ltd.'s Expertise.",

  // Authentic Company Statistics
  stats: {
    yearsInBusiness: "4+",
    yearsInBusinessLabel: "Years in Business",
    employees: "30+",
    employeesLabel: "Employees",
    completedProjects: "12+",
    completedProjectsLabel: "Completed Projects",
    clientSatisfaction: "99%",
    clientSatisfactionLabel: "Client Satisfaction",
  },

  // Contact Information
  contact: {
    address: {
      line1: "06th Floor, Stellar Spaces 501",
      line2: "Opposite Zensar Company, Rakshak Nagar",
      city: "Kharadi, Pune",
      state: "Maharashtra",
      postalCode: "411014",
      country: "India",
      full: "06th Floor, Stellar Spaces 501, opposite Zensar Company, Rakshak Nagar, Kharadi, Pune, Maharashtra 411014",
    },
    phone: "+91 9022844929",
    phoneTel: "+919022844929",
    email: "hr@nas-infotech.com",
    supportEmail: "support@nas-infotech.com",
    workingHours: "Monday - Friday: 9:00 AM - 6:00 PM IST",
  },

  // Verified Social Media Channels
  social: {
    linkedin:
      "https://www.linkedin.com/company/nas-infotech-pvt-ltd/?viewAsMember=true",
    facebook:
      "https://www.facebook.com/people/Nas-Infotech-Pvt-Ltd/61573733739516/",
    instagram: "https://www.instagram.com/nas.infotech",
    dribbble: "https://dribbble.com",
    twitter: "https://twitter.com",
  },

  // Copyright Notice
  copyright: `© Copyright ${new Date().getFullYear()} NAS Infotech Pvt. Ltd. All Rights Reserved.`,
} as const;

export type SiteConfig = typeof SITE_CONFIG;

