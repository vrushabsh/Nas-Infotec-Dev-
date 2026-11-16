/**
 * NAS Infotech Official Centralized Brand Color System
 * Single Source of Truth for all color tokens.
 *
 * Exact specifications from NAS Infotech & HomeContactUs:
 * 1. Primary Brand Colors (Main Theme):
 *    - Brand Orange / Accent: #FFB057 (rgb(255, 176, 87))
 *    - Accent Hover: #e09c4d (rgb(224, 156, 77))
 *    - Accent Light: #ffb774 (rgb(255, 183, 116))
 *
 * 2. Dark Backgrounds & Contrast Colors:
 *    - Dark Forest Green (Deep): #0a1b10 (rgb(10, 27, 16))
 *    - Dark Forest Green (Gradient): #0d2a17 (rgb(13, 42, 23))
 *    - Primary Brand Green: #113217 (rgb(17, 50, 23))
 *    - Deep Dark Black / Navy: #0a1118 (rgb(10, 17, 24))
 *    - Dark Slate Text: #101828 (rgb(16, 24, 40))
 *
 * 3. Light Backgrounds & Neutrals:
 *    - Warm Off-White / Cream: #f9f8f4 (rgb(249, 248, 244))
 *    - Soft Beige / Card Fill: #fcfbf7 (rgb(252, 251, 247))
 *    - Slate Tint: #F8FAFC (rgb(248, 250, 252))
 *    - Pure White: #ffffff (rgb(255, 255, 255))
 */

export const BRAND_COLORS = {
  // 1. Primary Brand Accent Colors (Main Theme)
  brand: {
    DEFAULT: "#FFB057",
    hover: "#e09c4d",
    light: "#ffb774",
    dark: "#0a1b10",
    green: "#113217",
    gradient: "#0d2a17",
    text: "#0a1118",
    warm: "#f9f8f4",
  },

  // Primary Action & Highlights (Brand Orange / Accent)
  primary: {
    DEFAULT: "#FFB057",
    hover: "#e09c4d",
    active: "#cf8b3c",
    light: "#ffb774",
    soft: "#fff4e5",
    subtle: "rgba(255, 176, 87, 0.12)",
    darkGreen: "#113217",
    heroGreen: "#0b3b24",
    emerald: "#0f7b44",
  },

  // 2. Dark Backgrounds & Contrast Colors
  dark: {
    deep: "#0a1b10", // Section background in HomeContactUs
    gradient: "#0d2a17", // Gradient overlay on hero / contact banners
    brandGreen: "#113217", // Primary dark brand sections
    black: "#0a1118", // Card headings, dark text, form labels
    slate: "#101828", // Secondary dark body text & headings
    heroBg: "#0b3b24",
  },

  // Secondary Color Tokens
  secondary: {
    DEFAULT: "#113217",
    hover: "#0d2a17",
    dark: "#0a1b10",
    deep: "#05150c",
    light: "#f0fbf4",
  },

  // Accent Tones
  accent: {
    DEFAULT: "#FFB057",
    hover: "#e09c4d",
    light: "#ffb774",
    dark: "#0a1b10",
    green: "#113217",
    gradient: "#0d2a17",
    emerald: "#0f7b44",
    lime: "#84cc16",
    signal: "#22c55e",
  },

  // 3. Light Backgrounds & Neutrals
  neutrals: {
    warm: "#f9f8f4", // Feature card backgrounds, info banners
    beige: "#fcfbf7", // Alternate card background
    slateTint: "#F8FAFC", // Section divider background
    white: "#ffffff", // Form cards, main content surface
  },

  // Surface & Layout Backgrounds
  background: {
    DEFAULT: "#ffffff",
    surface: "#ffffff",
    soft: "#f9f8f4",
    beige: "#fcfbf7",
    slateTint: "#F8FAFC",
    dark: "#0a1b10",
    darkGreen: "#113217",
    gradient: "#0d2a17",
  },

  // Semantic Typography
  text: {
    heading: "#0a1118",
    body: "#101828",
    muted: "#6b7280",
    light: "#ffffff",
    accent: "#FFB057",
    accentHover: "#e09c4d",
    slate: "#101828",
  },

  // Borders
  border: {
    DEFAULT: "#e5e7eb",
    subtle: "#f3f4f6",
    strong: "#d1d5db",
    dark: "rgba(255, 255, 255, 0.12)",
    accent: "#FFB057",
  },

  // Reusable Gradients
  gradients: {
    brandGold: "linear-gradient(135deg, #FFB057 0%, #e09c4d 100%)",
    darkContact: "linear-gradient(180deg, #0a1b10 0%, #0d2a17 50%, #113217 100%)",
    heroGreen: "linear-gradient(135deg, #0b3b24 0%, #0f7b44 100%)",
    contactOverlay: "linear-gradient(90deg, rgba(13,42,23,0.95) 0%, rgba(13,42,23,0.80) 50%, rgba(10,27,16,0.60) 100%)",
  },
} as const;

export type BrandColors = typeof BRAND_COLORS;
