import { Briefcase, Code, User, Smartphone } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE CONTENT */}
          <div
            className="space-y-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-2xl font-semibold animate-fade-slide-up">
              Passionate Web Developer & Tech Creator
            </h3>

            <p
              className="text-muted-foreground animate-fade-slide-up"
              style={{ animationDelay: "0.25s" }}
            >
              With over 2 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p
              className="text-muted-foreground animate-fade-slide-up"
              style={{ animationDelay: "0.35s" }}
            >
              I'm passionate about building elegant solutions to real-world
              problems and always learning new technologies to stay ahead in the
              evolving world of web development.
            </p>

            {/* BUTTONS */}
            <div
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.45s" }}
            >
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT SIDE PROFILE + CARDS */}
          <div className="space-y-6 flex flex-col items-center">
            {/* PROFILE PICTURE */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div
                className="
        w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden 
        border-4 border-primary/60 shadow-lg
        backdrop-blur-xl bg-white/10 
        hover:scale-105 transition-all duration-500
      "
              >
                <img
                  src="/profile/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-1 gap-6 max-w-md w-auto justify-center">
              {[
                {
                  icon: <Code className="h-6 w-6 text-primary" />,
                  title: "Web Development",
                  desc: "Creating responsive, modern websites and apps.",
                },
                {
                  icon: <User className="h-6 w-6 text-primary" />,
                  title: "UI/UX Design",
                  desc: "Designing intuitive user interfaces with clean aesthetics.",
                },
                {
                  icon: <Smartphone className="h-6 w-6 text-primary" />,
                  title: "Mobile Development",
                  desc: "Building cross-platform mobile applications.",
                },
                {
                  icon: <Briefcase className="h-6 w-6 text-primary" />,
                  title: "Project Management",
                  desc: "Managing end-to-end software projects using agile methods.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="
          gradient-border p-6 card-hover 
          backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl
          flex items-start gap-4 transition-all duration-500
          hover:-translate-y-2 hover:shadow-xl animate-fade-in-up
        "
                  style={{ animationDelay: `${0.45 + idx * 0.15}s` }}
                >
                  <div className="p-3 rounded-full bg-primary/10">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
