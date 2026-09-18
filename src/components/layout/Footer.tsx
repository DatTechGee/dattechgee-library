import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";
import Container from "@/components/layout/Container";

const footerLinks = {
  Library: [
    { label: "Browse Books", href: "/library" },
    { label: "Categories", href: "/library?tab=categories" },
    { label: "Trending", href: "/library?sort=popular" },
    { label: "New Arrivals", href: "/library?sort=latest" },
  ],
  Account: [
    { label: "Sign In", href: "/auth/login" },
    { label: "Create Account", href: "/auth/register" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Orders", href: "/dashboard/orders" },
  ],
  Support: [
    { label: "Contact Us", href: "/#contact" },
    { label: "FAQ", href: "/#faq" },
    { label: "Book Request", href: "/#book-request" },
    { label: "About", href: "/about" },
  ],
};

const socials = [
  { label: "Telegram", href: siteConfig.socials.telegram },
  { label: "Facebook", href: siteConfig.socials.facebook },
  { label: "Instagram", href: siteConfig.socials.instagram },
  { label: "YouTube", href: siteConfig.socials.youtube },
].filter((s) => s.href);

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="text-xl font-bold">{siteConfig.name}</Link>
            <p className="text-sm text-muted-foreground mt-3">
              Your gateway to educational resources from around the world. Discover, purchase, and download books instantly.
            </p>
            {socials.length > 0 && (
              <div className="flex gap-3 mt-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-3">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Refund Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}