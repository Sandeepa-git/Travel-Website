"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Compass, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Tour Packages", href: "/tour-packages" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on Escape key
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, handleEscape]);

  const isHomePage = pathname === "/";
  const isLight = isScrolled || !isHomePage;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled || mobileMenuOpen
          ? "bg-white dark:bg-[#0B1F3A] shadow-lg shadow-black/5 py-4"
          : "bg-transparent py-6"
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between max-w-[1400px]" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Wanderlust Home">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary shadow-lg"
          >
            <Compass className="w-5 h-5" />
          </motion.div>
          <span
            className={cn(
              "text-2xl font-display font-bold tracking-tight transition-colors duration-300",
              isLight || mobileMenuOpen ? "text-[#0B1F3A] dark:text-surface" : "text-white"
            )}
          >
            Wanderlust
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest transition-all relative py-2 group",
                  isLight || mobileMenuOpen
                    ? isActive ? "text-accent" : "text-[#0B1F3A] dark:text-surface hover:text-accent"
                    : isActive ? "text-accent" : "text-white hover:text-accent"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className={cn(
                "p-2.5 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center",
                isLight || mobileMenuOpen
                  ? "text-[#0B1F3A] dark:text-surface hover:bg-gray-100 dark:hover:bg-white/10"
                  : "text-white hover:bg-white/10"
              )}
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}

          <Link
            href="/tour-packages"
            className={cn(
              "hidden md:inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all min-h-[44px]",
              "bg-accent text-primary hover:bg-[#0B1F3A] hover:text-white luxury-shadow"
            )}
          >
            Book Now
          </Link>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu
              className={cn(
                "w-6 h-6",
                isLight || mobileMenuOpen ? "text-[#0B1F3A] dark:text-surface" : "text-white"
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop and Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-[320px] bg-white dark:bg-[#0B1F3A] shadow-[0_0_50px_rgba(0,0,0,0.3)] p-8 flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-xl font-display font-bold text-[#0B1F3A] dark:text-surface">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6 text-[#0B1F3A] dark:text-surface" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navigation.map((item) => {
                  const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "text-xl font-display font-bold tracking-tight min-h-[48px] flex items-center transition-all border-b border-gray-100 dark:border-white/5 pb-2",
                        isActive ? "text-accent translate-x-2" : "text-[#0B1F3A] dark:text-surface hover:text-accent hover:translate-x-2"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-auto space-y-4 pt-10">
                {mounted && (
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="w-full flex items-center justify-center gap-3 rounded-2xl border-2 border-gray-100 dark:border-white/10 py-4 text-sm font-bold text-[#0B1F3A] dark:text-surface hover:border-accent transition-all bg-gray-50/50 dark:bg-white/5"
                    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                  >
                    {theme === "dark" ? <Sun size={20} className="text-accent" /> : <Moon size={20} className="text-accent" />}
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                  </button>
                )}
                <Link
                  href="/contact"
                  className="btn-primary w-full py-5 text-center shadow-xl shadow-accent/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
