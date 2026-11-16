/**
 * NAS Infotech Layout & Geometry Tokens
 */

export const LAYOUT = {
  // Max Content Widths
  container: {
    narrow: "max-w-4xl", // 896px
    default: "max-w-[1200px]", // Standard main section container
    wide: "max-w-[1392px]", // Hero outer device frame / expansive container
    full: "max-w-full",
  },

  // Page Horizontal Gutters
  pageGutter: {
    mobile: "px-4",
    tablet: "px-6 sm:px-8",
    desktop: "px-8 md:px-12",
  },

  // Section Vertical Padding
  sectionPadding: {
    compact: "py-10 sm:py-14",
    default: "py-14 sm:py-20 md:py-24",
    spacious: "py-20 sm:py-28 md:py-32",
  },

  // Header Specifications
  header: {
    height: "72px",
    heightScrolled: "64px",
  },

  // Standard Grid Gaps
  gridGap: {
    sm: "gap-4",
    md: "gap-6 md:gap-8",
    lg: "gap-8 lg:gap-12",
    xl: "gap-10 lg:gap-16 xl:gap-20",
  },

  // Standard Card Padding
  cardPadding: {
    sm: "p-4 sm:p-5",
    md: "p-5 sm:p-6 md:p-8",
    lg: "p-6 sm:p-8 md:p-12",
  },
} as const;

export type LayoutConfig = typeof LAYOUT;

