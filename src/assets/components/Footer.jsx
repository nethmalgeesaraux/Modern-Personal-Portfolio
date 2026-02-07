import {
  ArrowUp,
  Facebook,
  Instagram,
  Github,
  Linkedin,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative mt-24 px-6 py-14 rounded-3xl bg-gradient-to-br from-primary/20 via-background/30 to-primary/10 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col items-center gap-12 overflow-hidden">

      {/* Glow background */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      {/* Navigation */}
      <nav className="relative z-10 flex flex-wrap justify-center gap-8 text-sm sm:text-base font-medium text-muted-foreground">
        {["about", "projects", "skills", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="relative hover:text-primary transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </nav>

      {/* Social Icons */}
      <div className="relative z-10 flex gap-6">
        <a
          href="https://www.facebook.com/share/r/1EfzPyp3uy/?mibextid=wwXIfr"
          target="_blank"
          className="group p-3 rounded-full bg-white/10 hover:bg-primary/30 transition-all shadow-lg hover:scale-110"
        >
          <Facebook size={22} className="group-hover:text-primary transition-colors" />
        </a>

        <a
          href="https://www.instagram.com/nethmalg?igsh=MWw3dzhzbTNndTB1dg%3D%3D&utm_source=qr"
          target="_blank"
          className="group p-3 rounded-full bg-white/10 hover:bg-primary/30 transition-all shadow-lg hover:scale-110"
        >
          <Instagram size={22} className="group-hover:text-primary transition-colors" />
        </a>

        <a
          href="https://github.com/nethmalgeesaraux"
          target="_blank"
          className="group p-3 rounded-full bg-white/10 hover:bg-primary/30 transition-all shadow-lg hover:scale-110"
        >
          <Github size={22} className="group-hover:text-primary transition-colors" />
        </a>

        <a
          href="https://www.linkedin.com/in/nethmal-geesara-473962351/"
          target="_blank"
          className="group p-3 rounded-full bg-white/10 hover:bg-primary/30 transition-all shadow-lg hover:scale-110"
        >
          <Linkedin size={22} className="group-hover:text-primary transition-colors" />
        </a>
      </div>

      {/* Divider */}
      <div className="relative z-10 w-full max-w-md h-px bg-white/10" />

      {/* Copyright */}
      <p className="relative z-10 text-center text-sm sm:text-base text-muted-foreground">
        © {new Date().getFullYear()}{" "}
        <span className="text-primary font-medium">Nethmal</span> — All rights
        reserved.
      </p>

      {/* Back to Top */}
      <a
        href="#hero"
        aria-label="Back to Top"
        className="absolute right-6 bottom-6 p-3 rounded-full bg-primary text-primary-foreground shadow-xl hover:scale-110 hover:rotate-12 transition-all"
      >
        <ArrowUp size={22} />
      </a>
    </footer>
  );
};
