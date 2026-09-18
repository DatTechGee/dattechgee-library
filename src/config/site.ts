export const siteConfig = {
  name: "DatTechGee Library",
  domain: "dattechgee-library.com",
  tagline: "Self-Development & Personal Growth Library",
  description:
    "Transform your life with classic self-development, productivity, leadership, and stoic philosophy books. Download instantly, read anywhere.",
  address: "DatTechGee Library",
  email: "support@dattechgee.com",
  phone: "+1 (555) 010-2024",

  colors: {
    primary: "#1e5ba8",
    accent: "#f4b941",
    background: "#ffffff",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Library", href: "/library" },
    { label: "Categories", href: "/library?tab=categories" },
    { label: "About", href: "/about" },
  ],

  socials: {
    telegram: "#",
    facebook: "#",
    instagram: "#",
    youtube: "#",
    twitter: "#",
    linkedin: "#",
    tiktok: "#",
  },
} as const;

export type SiteConfig = typeof siteConfig;