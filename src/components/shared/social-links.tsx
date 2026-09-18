import {
  Twitter,
  Instagram,
  Youtube,
  MessageCircle,
  Link,
  type LucideIcon,
} from "lucide-react";

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
  hoverColor: string;
  hoverBg: string;
}

interface SocialLinksProps {
  links?: SocialLink[];
  variant?: "default" | "compact" | "hero";
  className?: string;
}

const defaultLinks: SocialLink[] = [
  {
    icon: Twitter,
    href: "https://x.com/yourhandle",
    label: "Twitter",
    hoverColor: "group-hover:text-blue-400",
    hoverBg: "group-hover:bg-blue-400/10",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/yourhandle",
    label: "Instagram",
    hoverColor: "group-hover:text-pink-400",
    hoverBg: "group-hover:bg-pink-400/10",
  },
  {
    icon: MessageCircle,
    href: "https://t.me/yourhandle",
    label: "Telegram",
    hoverColor: "group-hover:text-purple-400",
    hoverBg: "group-hover:bg-purple-400/10",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@yourhandle",
    label: "YouTube",
    hoverColor: "group-hover:text-red-400",
    hoverBg: "group-hover:bg-red-400/10",
  },
  {
    icon: Link,
    href: "https://linktr.ee/yourhandle",
    label: "Linktree",
    hoverColor: "group-hover:text-green-400",
    hoverBg: "group-hover:bg-green-400/10",
  },
];

const sizeMap = {
  default: "w-6 h-6",
  compact: "w-5 h-5",
  hero: "w-6 h-6",
};

const padMap = {
  default: "p-2 rounded-lg",
  compact: "p-2 rounded-lg",
  hero: "p-3 rounded-xl",
};

const gapMap = {
  default: "gap-6",
  compact: "gap-4",
  hero: "gap-6",
};

/**
 * Social icon row with color-coded hover states.
 * Pattern extracted from nikhiledutech.com — each platform gets
 * its own brand color on hover (blue/pink/purple/red/green).
 */
export function SocialLinks({
  links = defaultLinks,
  variant = "default",
  className = "",
}: SocialLinksProps) {
  return (
    <div className={`flex items-center ${gapMap[variant]} ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={`group inline-flex items-center justify-center transition-all duration-300 hover:scale-110 ${padMap[variant]}`}
        >
          <span className="relative">
            <link.icon
              className={`${sizeMap[variant]} transition-colors duration-300 text-gray-400 ${link.hoverColor}`}
            />
            <span
              className={`absolute inset-0 rounded-lg -z-10 scale-0 transition-transform duration-300 ${link.hoverBg} group-hover:scale-150`}
            />
          </span>
        </a>
      ))}
    </div>
  );
}
