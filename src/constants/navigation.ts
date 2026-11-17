import { ROUTES } from "./routes";

export interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

export interface HeaderNavItem {
  label: string;
  href: string;
}

export const HEADER_NAV_ITEMS: HeaderNavItem[] = [
  { label: "Home", href: ROUTES.HOME },
  { label: "About Us", href: ROUTES.ABOUT },
  { label: "Services", href: ROUTES.SERVICES },
  { label: "Industries", href: ROUTES.INDUSTRIES },
  { label: "Careers", href: ROUTES.CAREERS },
];

export const MAIN_NAV_ITEMS: NavItem[] = [
  { name: "Home", href: ROUTES.HOME },
  { name: "About Us", href: ROUTES.ABOUT },
  { name: "Services", href: ROUTES.SERVICES, hasDropdown: true },
  { name: "Industries", href: ROUTES.INDUSTRIES },
  { name: "Technologies", href: "/#technologies" },
  { name: "Case Studies", href: ROUTES.WORK },
  { name: "Careers", href: ROUTES.CAREERS },
  { name: "Contact Us", href: ROUTES.CONTACT },
];

export const FOOTER_QUICK_LINKS: NavItem[] = [
  { name: "Home", href: ROUTES.HOME },
  { name: "About Us", href: ROUTES.ABOUT },
  { name: "Services", href: ROUTES.SERVICES },
  { name: "Industries", href: ROUTES.INDUSTRIES },
  { name: "Key Strengths", href: ROUTES.STRENGTHS },
  { name: "Contact Us", href: ROUTES.CONTACT },
];

export const FOOTER_SERVICE_LINKS: NavItem[] = [
  { name: "Software Development", href: "/services/software-development" },
  {
    name: "Artificial Intelligence & ML",
    href: "/services/artificial-intelligence-machine-learning",
  },
  {
    name: "Professional Web Development",
    href: "/services/professional-web-development",
  },
  {
    name: "Software Testing & QA",
    href: "/services/software-testing-quality-assurance",
  },
  {
    name: "DevOps Consulting & Automation",
    href: "/services/devops-consulting-automation",
  },
  {
    name: "Cybersecurity & InfoSec",
    href: "/services/cybersecurity-information-security",
  },
];

export const FOOTER_CUSTOMER_LINKS: NavItem[] = [
  { name: "Client Support", href: ROUTES.CONTACT },
  { name: "System Status", href: "#" },
  { name: "Privacy Policy", href: ROUTES.PRIVACY_POLICY },
  { name: "Terms & Conditions", href: ROUTES.TERMS },
  { name: "Help Center & FAQ", href: ROUTES.FAQ },
];

