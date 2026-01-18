import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  //  { name:"Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClick = () => setIsMenuOpen(false);

    if (isMenuOpen) {
      window.addEventListener("click", handleClick);
    }
    return () => window.removeEventListener("click", handleClick);
  }, [isMenuOpen]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-primary z-[999] transition-[width] duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navbar */}
      <nav
        className={cn(
          "fixed z-50 transition-all duration-500 animate-fade-in backdrop-blur-2xl",
          "bg-white/10 dark:bg-black/20 shadow-[0_0_25px_rgba(255,255,255,0.15)] border-b border-white/20",
          // Mobile: full width
          "top-0 w-full px-4 py-4 rounded-none",
          // Desktop: floating glass navbar
          "md:top-5 md:left-1/2 md:-translate-x-1/2 md:w-[70%] lg:w-[55%]",
          "md:rounded-2xl md:px-6 md:py-4"
        )}
        onClick={(e) => e.stopPropagation()}
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

                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground transition hover:scale-110"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 z-40 flex flex-col items-center justify-center",
            "backdrop-blur-xl bg-white/30 dark:bg-black/30", // <- soft glass color
            "border-t border-white/20 shadow-xl",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto scale-100"
              : "opacity-0 pointer-events-none scale-95"
          )}
        >
          <div className="flex flex-col space-y-10 text-3xl animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/90 hover:text-primary transition-all duration-300 hover:scale-110"
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
