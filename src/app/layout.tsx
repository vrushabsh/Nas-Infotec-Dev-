import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants/siteConfig";
import "./globals.css";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.fullName} — ${SITE_CONFIG.slogan}`,
  description: SITE_CONFIG.description,
  keywords: [
    "NAS Infotech",
    "NAS Infotech Pvt Ltd",
    "IT Solutions",
    "Software Development",
    "Artificial Intelligence",
    "Cloud Computing",
    "Salesforce Services",
    "DevOps",
    "Pune IT Company",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: `${SITE_CONFIG.fullName} — ${SITE_CONFIG.slogan}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.fullName,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col font-sans antialiased text-heading bg-white selection:bg-primary selection:text-black">
        {children}
      </body>
    </html>
  );
}
