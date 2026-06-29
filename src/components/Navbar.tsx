import { useState, useEffect } from "react";
import type { NavLink } from "../types";

interface NavbarProps {
  links: NavLink[];
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export default function Navbar({ links, theme, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 90) {
          current = s.getAttribute("id") ?? "";
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between
          px-4 sm:px-10 lg:px-10 border-b transition-all duration-300
          ${
            scrolled
              ? "bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-gray-200 dark:border-white/10"
              : "bg-white dark:bg-dark-bg border-transparent"
          }`}
      >
        {/* Logo */}
        <span className="text-[15px] font-semibold text-accent-light tracking-tight">
          MK<span className="text-gray-400 dark:text-gray-600">.dev</span>
        </span>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`text-[13px] px-3 py-1.5 rounded-lg transition-all duration-200
                ${
                  activeSection === link.href.replace("#", "")
                    ? "text-accent-light bg-[rgba(124,106,247,0.12)]"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={onToggleTheme}
            className="ml-2 w-9 h-9 rounded-full flex items-center justify-center text-lg
              bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10
              hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center text-lg
              bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="w-9 h-9 flex items-center justify-center text-gray-600 dark:text-gray-400
              rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
            aria-label="Toggle menu"
          >
            <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed top-[60px] left-0 right-0 z-40 flex flex-col gap-1 p-3
          bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-white/10 sm:hidden"
        >
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-[15px] px-4 py-2.5 rounded-lg
                text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5
                transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
