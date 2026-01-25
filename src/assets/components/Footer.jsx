import { ArrowUp, Sun, Moon, Facebook, Instagram, Github, Linkedin } from "lucide-react";

export const Footer = () => {
 

  return (
    <footer className="relative mt-20 py-12 px-6 bg-gradient-to-br from-primary/10 via-background/20 to-primary/5 border-t border-white/10 flex flex-col items-center gap-12 rounded-3xl shadow-xl backdrop-blur-lg">

      {/* Navigation Menu */}
      <nav className="flex flex-wrap justify-center gap-6 text-sm sm:text-base text-muted-foreground font-medium">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </nav>

      {/* Social Icons */}
      <div className="flex gap-6">
        <a href="https://www.facebook.com/share/r/1EfzPyp3uy/?mibextid=wwXIfr" className="p-3 rounded-full bg-white/10 hover:bg-white/25 transition-all shadow-md text-white">
          <Facebook size={22} />
        </a>
        <a href="https://www.instagram.com/nethmalg?igsh=MWw3dzhzbTNndTB1dg%3D%3D&utm_source=qr" className="p-3 rounded-full bg-white/10 hover:bg-white/25 transition-all shadow-md text-white">
          <Instagram size={22} />
        </a>
        <a href="https://github.com/nethmalgeesaraux" className="p-3 rounded-full bg-white/10 hover:bg-white/25 transition-all shadow-md text-white">
          <Github size={22} />
        </a>
        <a href="https://www.linkedin.com/in/nethmal-geesara-473962351/" className="p-3 rounded-full bg-white/10 hover:bg-white/25 transition-all shadow-md text-white">
          <Linkedin size={22} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm sm:text-base text-muted-foreground">
        &copy; {new Date().getFullYear()} Nethmal— All rights reserved.
      </p>

      {/* Back to Top */}
      <a
        href="#hero"
        className="absolute right-6 bottom-6 p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform shadow-lg flex items-center justify-center"
        aria-label="Back to Top"
      >
        <ArrowUp size={22} />
      </a>

    </footer>
  );
};
