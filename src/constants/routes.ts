/**
 * NAS Infotech Application Routes
 */

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  SERVICES_SECTION: "/#services",
  INDUSTRIES: "/industries",
  INDUSTRIES_SECTION: "/#industries",
  WHY_US: "/#why-us",
  PROCESS: "/#process",
  STRENGTHS: "/#strengths",
  WORK: "/#work",
  TESTIMONIALS: "/#feedback",
  FAQ: "/#faq",
  CAREERS: "/careers",
  CAREERS_SECTION: "/#careers",
  CONTACT: "/contact",
  PRIVACY_POLICY: "/#privacy",
  TERMS: "/#terms",
} as const;

export type RouteKey = keyof typeof ROUTES;

