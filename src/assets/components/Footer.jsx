import { ArrowUp, Sun, Moon, Facebook, Instagram, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <footer className="relative mt-20 py-12 px-6 backdrop-blur-xl bg-gradient-to-br from-primary/10 via-background/20 to-primary/5 border-t border-white/10 flex flex-col items-center gap-10 rounded-2xl shadow-xl">

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="absolute right-4 top-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-md"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Navigation Menu */}
      <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
        <a href="#about" className="hover:text-primary transition">About</a>
        <a href="#projects" className="hover:text-primary transition">Projects</a>
        <a href="#skills" className="hover:text-primary transition">Slills</a>
        <a href="#contact" className="hover:text-primary transition">Contact</a>
      </nav>

      {/* Social Icons */}
      <div className="flex gap-5">
        <a href="https://www.facebook.com/share/r/1EfzPyp3uy/?mibextid=wwXIfr" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition shadow-md"><Facebook size={20} /></a>
        <a href="https://www.instagram.com/nethmalg?igsh=MWw3dzhzbTNndTB1dg%3D%3D&utm_source=qr" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition shadow-md"><Instagram size={20} /></a>
        <a href="https://github.com/nethmalgeesaraux" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition shadow-md"><Github size={20} /></a>
        <a href="https://www.linkedin.com/in/nethmal-geesara-473962351/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BICcaAYLTTdyXYi79Z2ZxvQ%3D%3D" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition shadow-md"><Linkedin size={20} /></a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-center text-muted-foreground">
        &copy; {new Date().getFullYear()} Nethmal.co — All rights reserved.
      </p>

      {/* Back to Top */}
      <a
        href="#hero"
        className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-all shadow-lg"
      >
        <ArrowUp size={22} />
      </a>

    </footer>
  );
};