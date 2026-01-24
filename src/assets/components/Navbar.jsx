import { cn } from "../lib/utils";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored === "dark" || stored === null; // default to dark
  });
  const menuRef = useRef(null);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollProgress((window.scrollY / docHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Apply theme
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-primary z-[999] transition-[width] duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={cn(
          "fixed z-50 w-full px-4 py-4 transition-all duration-500 animate-fade-in backdrop-blur-2xl",
          "bg-white/10 dark:bg-black/20 shadow-[0_0_25px_rgba(255,255,255,0.15)] border-b border-white/20",
          "md:top-5 md:left-1/2 md:-translate-x-1/2 md:w-[70%] lg:w-[55%]",
          "md:rounded-2xl md:px-6 md:py-4",
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="text-xl font-bold text-primary animate-slide-down hover:drop-shadow-[0_0_8px_var(--primary)] transition-all"
          >
            <span className="text-foreground">My Portfolio</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 animate-slide-down">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group text-foreground/80 hover:text-primary transition duration-300"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-foreground transition hover:scale-110"
            >
              {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
              ) : (
                <Moon className="h-6 w-6 text-blue-900" />
              )}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="p-2 text-foreground transition hover:scale-110"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          ref={menuRef}
          className={cn(
            "fixed inset-x-0 top-16 z-40 flex flex-col items-center justify-start",
            "bg-white dark:bg-black/90 rounded-b-2xl shadow-2xl backdrop-blur-md",
            "transition-all duration-300 transform origin-top",
            isMenuOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none",
          )}
        >
          <div className="flex flex-col w-full max-w-md mx-auto space-y-6 py-8 px-6 text-2xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/90 hover:text-primary transition-all duration-300 hover:scale-105 w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
