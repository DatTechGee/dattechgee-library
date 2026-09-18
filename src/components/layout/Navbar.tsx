import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, ShoppingCart, User, LogOut, LayoutDashboard, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { useTheme } from "@/providers/ThemeProvider";
import { useScrollPosition } from "@/hooks";
import { useAuth } from "@/stores/authStore";
import { useCart } from "@/stores/cartStore";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Library", href: "/library" },
  { label: "Categories", href: "/library?tab=categories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const { scrolled } = useScrollPosition();
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const { getTotalItems, toggleCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setProfileOpen(false);
  }, [location.pathname]);

  const cartCount = getTotalItems();

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight">
          {siteConfig.name}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className={cn(
                  "text-sm transition-colors hover:text-foreground",
                  location.pathname === item.href ? "text-foreground font-medium" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="touch-target">
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>

          {/* Cart */}
          <Button variant="ghost" size="icon" onClick={toggleCart} className="relative touch-target">
            <ShoppingCart className="size-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Button>

          {/* Auth buttons */}
          {user ? (
            <div className="relative hidden md:block">
              <Button variant="ghost" size="icon" onClick={() => setProfileOpen(!profileOpen)} className="touch-target">
                <User className="size-5" />
              </Button>
              {profileOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setProfileOpen(false)} />
                  <div className="absolute right-0 top-full mt-2 w-56 bg-background border rounded-xl shadow-xl z-50 py-2">
                    <div className="px-4 py-2 border-b">
                      <p className="font-medium text-sm">{user.firstName} {user.lastName}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                    <Link to="/dashboard" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors">
                      <LayoutDashboard className="size-4" /> Dashboard
                    </Link>
                    {user.role === "admin" && (
                      <Link to="/admin" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors">
                        <Shield className="size-4" /> Admin Panel
                      </Link>
                    )}
                    <Link to="/dashboard" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors">
                      <User className="size-4" /> Settings
                    </Link>
                    <button onClick={logout} className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors w-full text-left text-destructive">
                      <LogOut className="size-4" /> Sign Out
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Link to="/auth/login">
                <Button size="sm">Sign In</Button>
              </Link>
            </div>
          )}

          {/* Mobile toggle */}
          <Button variant="ghost" size="icon" className="md:hidden touch-target" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu />
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background md:hidden"
          >
            <div className="flex items-center justify-between p-4">
              <span className="text-xl font-bold">{siteConfig.name}</span>
              <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X />
              </Button>
            </div>
            <ul className="flex flex-col gap-6 p-8">
              {navLinks.map((item, i) => (
                <motion.li key={item.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.08 }}>
                  <Link to={item.href} onClick={() => setMenuOpen(false)} className="text-3xl font-semibold">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                {user ? (
                  <div className="space-y-3">
                    <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
                      <Button size="lg" className="w-full">Dashboard</Button>
                    </Link>
                    {user.role === "admin" && (
                      <Link to="/admin" onClick={() => setMenuOpen(false)}>
                        <Button size="lg" variant="outline" className="w-full">Admin Panel</Button>
                      </Link>
                    )}
                    <Button size="lg" variant="ghost" className="w-full text-destructive" onClick={() => { logout(); setMenuOpen(false); }}>
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Link to="/auth/login" onClick={() => setMenuOpen(false)}>
                      <Button size="lg" className="w-full">Sign In</Button>
                    </Link>
                  </div>
                )}
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
