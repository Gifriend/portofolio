"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-[3px]",
        isScrolled
          ? "border-border shadow-[0_4px_0_var(--shadow-color)]"
          : "border-transparent shadow-none"
      )}
      style={{
        backgroundColor: isScrolled ? 'var(--background)' : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className={cn(
                "text-2xl font-black uppercase tracking-tight px-3 py-1 transition-all duration-200",
                "border-[3px] border-[--border] bg-[--accent] text-[--foreground]",
                "shadow-[3px_3px_0px_var(--shadow-color)]",
                "hover:shadow-[5px_5px_0px_var(--shadow-color)] hover:translate-x-[-2px] hover:translate-y-[-2px]",
                "active:shadow-none active:translate-x-[3px] active:translate-y-[3px]",
              )}
            >
              GIF
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={cn(
                    "px-4 py-2 text-sm font-bold uppercase tracking-wide transition-all duration-200",
                    "border-[3px] border-transparent text-[--foreground]",
                    "hover:border-[--border] hover:bg-[--accent] hover:shadow-[3px_3px_0px_var(--shadow-color)]",
                    "hover:translate-x-[-1px] hover:translate-y-[-1px]",
                    "active:shadow-none active:translate-x-[3px] active:translate-y-[3px]",
                  )}
                >
                  {item.name}
                </motion.a>
              ))}

              {/* Theme Toggle Button */}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={toggleTheme}
                className={cn(
                  "p-2 transition-all duration-200",
                  "border-[3px] border-[--border] bg-[--accent-pink] text-[--foreground]",
                  "shadow-[3px_3px_0px_var(--shadow-color)]",
                  "hover:shadow-[5px_5px_0px_var(--shadow-color)] hover:translate-x-[-2px] hover:translate-y-[-2px]",
                  "active:shadow-none active:translate-x-[3px] active:translate-y-[3px]",
                )}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              className="p-2 border-[3px] border-[--border] bg-[--accent-pink] text-[--foreground] shadow-[3px_3px_0px_var(--shadow-color)] hover:shadow-[5px_5px_0px_var(--shadow-color)] transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="block h-5 w-5" />
              ) : (
                <Moon className="block h-5 w-5" />
              )}
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border-[3px] border-[--border] bg-[--accent-blue] text-[--foreground] shadow-[3px_3px_0px_var(--shadow-color)] hover:shadow-[5px_5px_0px_var(--shadow-color)] transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-[--background] border-t-[3px] border-[--border]">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: isOpen ? 0.1 * index : 0 }}
              className={cn(
                "block px-4 py-3 text-base font-bold uppercase text-[--foreground]",
                "border-[3px] border-[--border] bg-[--background]",
                "shadow-[3px_3px_0px_var(--shadow-color)]",
                "hover:bg-[--accent] hover:shadow-[5px_5px_0px_var(--shadow-color)]",
                "transition-all duration-200",
              )}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
